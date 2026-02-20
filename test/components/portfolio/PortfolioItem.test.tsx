import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PortfolioItem from 'components/portfolio/PortfolioItem';
import { Project } from 'constants/types';

const mockProject: Project = {
  image: '/test-image.png',
  altText: 'Test project screenshot',
  title: 'Test Project',
  description: 'A test project description',
  githubUrl: 'https://github.com/test/project',
  siteUrl: 'https://test-project.com',
  language: 'TypeScript, JavaScript',
  framework: 'React',
  stateManagement: 'Redux',
  designTools: 'Tailwind CSS',
  testingTools: 'Vitest',
};

const comingSoonProject: Project = {
  ...mockProject,
  title: 'Coming Soon Project',
  siteUrl: undefined,
  comingSoon: true,
};

const noGithubProject: Project = {
  ...mockProject,
  title: 'No GitHub Project',
  githubUrl: undefined,
};

describe('PortfolioItem', () => {
  it('renders the project title', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders the project description', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders the project image with alt text', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    const img = screen.getByAltText('Test project screenshot');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.png');
  });

  it('renders tech tags', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
  });

  it('limits visible tags to 6 and shows overflow count', () => {
    const manyTagsProject: Project = {
      ...mockProject,
      language: 'TypeScript, JavaScript, Python',
      framework: 'React, Next.js',
      stateManagement: 'Redux',
      designTools: 'Tailwind CSS',
      testingTools: 'Vitest, Cypress',
    };
    render(<PortfolioItem project={manyTagsProject} index={0} />);
    // Should show +N for overflow tags beyond 6
    const tags = [
      'TypeScript',
      'JavaScript',
      'Python',
      'React',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'Vitest',
      'Cypress',
    ];
    const totalTags = tags.length;
    if (totalTags > 6) {
      expect(screen.getByText(`+${totalTags - 6}`)).toBeInTheDocument();
    }
  });

  it('renders GitHub link when url is provided', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    const codeLink = screen.getByText('Code').closest('a');
    expect(codeLink).toHaveAttribute('href', 'https://github.com/test/project');
    expect(codeLink).toHaveAttribute('target', '_blank');
  });

  it('renders Live Site link when url is provided', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    const liveLink = screen.getByText('Live Site').closest('a');
    expect(liveLink).toHaveAttribute('href', 'https://test-project.com');
    expect(liveLink).toHaveAttribute('target', '_blank');
  });

  it('shows "Coming soon" instead of live link', () => {
    render(<PortfolioItem project={comingSoonProject} index={0} />);
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
    expect(screen.queryByText('Live Site')).not.toBeInTheDocument();
  });

  it('hides GitHub link when url is not provided', () => {
    render(<PortfolioItem project={noGithubProject} index={0} />);
    expect(screen.queryByText('Code')).not.toBeInTheDocument();
  });

  it('opens expanded modal on click', async () => {
    const user = userEvent.setup();
    render(<PortfolioItem project={mockProject} index={0} />);

    // Click the card to expand
    const title = screen.getByText('Test Project');
    await user.click(title);

    // Modal shows expanded view with detail rows
    const modal = document.querySelector('.fixed.inset-0');
    expect(modal).toBeInTheDocument();
    if (modal) {
      expect(within(modal as HTMLElement).getByText('Language(s)')).toBeInTheDocument();
      expect(within(modal as HTMLElement).getByText('Framework(s)')).toBeInTheDocument();
      expect(within(modal as HTMLElement).getByText('State Management')).toBeInTheDocument();
      expect(within(modal as HTMLElement).getByText('Design Tools')).toBeInTheDocument();
      expect(within(modal as HTMLElement).getByText('Testing Tools')).toBeInTheDocument();
    }
  });

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<PortfolioItem project={mockProject} index={0} />);

    // Open modal
    await user.click(screen.getByText('Test Project'));
    expect(document.querySelector('.fixed.inset-0')).toBeInTheDocument();

    // Click close button (X icon)
    const closeButton = document.querySelector('.fixed.inset-0 button');
    expect(closeButton).toBeInTheDocument();
    if (closeButton) {
      await user.click(closeButton);
    }

    // AnimatePresence may keep element in DOM during exit — wait for removal
    await waitFor(() => {
      expect(document.querySelector('.fixed.inset-0')).not.toBeInTheDocument();
    });
  });

  it('closes modal when backdrop is clicked', async () => {
    const user = userEvent.setup();
    render(<PortfolioItem project={mockProject} index={0} />);

    // Open modal
    await user.click(screen.getByText('Test Project'));
    expect(document.querySelector('.fixed.inset-0')).toBeInTheDocument();

    const backdrop = document.querySelector('.fixed.inset-0');
    if (backdrop) {
      await user.click(backdrop);
    }

    await waitFor(() => {
      expect(document.querySelector('.fixed.inset-0')).not.toBeInTheDocument();
    });
  });

  it('shows View Code and View Site links in modal', async () => {
    const user = userEvent.setup();
    render(<PortfolioItem project={mockProject} index={0} />);

    await user.click(screen.getByText('Test Project'));

    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
      expect(within(modal as HTMLElement).getByText('View Code')).toBeInTheDocument();
      expect(within(modal as HTMLElement).getByText('View Site')).toBeInTheDocument();
    }
  });

  it('renders with correct link rel attributes', () => {
    render(<PortfolioItem project={mockProject} index={0} />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('target') === '_blank') {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });
});
