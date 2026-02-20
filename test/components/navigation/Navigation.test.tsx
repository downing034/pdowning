import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from 'components/navigation/Navigation';

// Create sections for useScrollSpy
function setupSections() {
  const ids = ['hero', 'about', 'portfolio', 'abilities', 'work-history', 'contact'];
  ids.forEach((id) => {
    if (!document.getElementById(id)) {
      const el = document.createElement('section');
      el.id = id;
      document.body.appendChild(el);
    }
  });
  return () => {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) document.body.removeChild(el);
    });
  };
}

describe('Navigation', () => {
  it('renders all six nav items', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    cleanup();
  });

  it('renders the Resume download link', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    const resumeLink = screen.getByText('Resume');
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink.closest('a')).toHaveAttribute('download');

    cleanup();
  });

  it('renders nav items as anchor links to section IDs', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '#hero');

    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).toHaveAttribute('href', '#about');

    const projectsLink = screen.getByText('Projects').closest('a');
    expect(projectsLink).toHaveAttribute('href', '#portfolio');

    const skillsLink = screen.getByText('Skills').closest('a');
    expect(skillsLink).toHaveAttribute('href', '#abilities');

    const experienceLink = screen.getByText('Experience').closest('a');
    expect(experienceLink).toHaveAttribute('href', '#work-history');

    const contactLink = screen.getByText('Contact').closest('a');
    expect(contactLink).toHaveAttribute('href', '#contact');

    cleanup();
  });

  it('renders as a nav element', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    cleanup();
  });

  it('has aria-label on nav element', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');

    cleanup();
  });

  it('applies aria-current to the active nav item', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    // Our mock IntersectionObserver fires all sections as isIntersecting: true,
    // so useScrollSpy picks the last one observed. Verify that exactly one
    // nav link has aria-current="page".
    const links = screen.getAllByRole('link');
    const navLinks = links.filter((link) => link.getAttribute('href')?.startsWith('#'));
    const activeCurrent = navLinks.filter((link) => link.getAttribute('aria-current') === 'page');
    expect(activeCurrent.length).toBe(1);

    cleanup();
  });

  it('resume link changes style on hover', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    const resumeLink = screen.getByText('Resume').closest('a') as HTMLAnchorElement;

    // Trigger mouse enter
    fireEvent.mouseEnter(resumeLink);
    // The style should now include a box-shadow
    expect(resumeLink.style.boxShadow).toContain('10px');

    // Trigger mouse leave
    fireEvent.mouseLeave(resumeLink);
    expect(resumeLink.style.boxShadow).toContain('transparent');

    cleanup();
  });

  it('renders Resume link with the correct background color', () => {
    const cleanup = setupSections();
    render(<Navigation />);

    const resumeLink = screen.getByText('Resume').closest('a') as HTMLAnchorElement;
    // Should have a background color style from the active section
    expect(resumeLink.style.background).toBeTruthy();

    cleanup();
  });
});
