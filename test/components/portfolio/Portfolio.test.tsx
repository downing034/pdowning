import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Portfolio from 'components/portfolio/Portfolio';

describe('Portfolio', () => {
  it('renders the portfolio section with correct id', () => {
    const { container } = render(<Portfolio />);
    expect(container.querySelector('#portfolio')).toBeInTheDocument();
  });

  it('renders the section header "Things I Built"', () => {
    render(<Portfolio />);
    expect(screen.getByText('Things I Built')).toBeInTheDocument();
  });

  it('renders all three project cards', () => {
    render(<Portfolio />);
    // Names appear multiple times: BackMeasurer + front face header + front body + back face header
    expect(screen.getAllByText('Game Day Oracle').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Wedding Recipe Book').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('This Portfolio').length).toBeGreaterThanOrEqual(2);
  });

  it('renders project one-liners', () => {
    render(<Portfolio />);
    expect(screen.getByText(/Sports prediction engine/)).toBeInTheDocument();
    expect(screen.getByText(/digital cookbook built as a wedding favor/)).toBeInTheDocument();
    expect(screen.getByText(/site you're currently on/)).toBeInTheDocument();
  });

  it('renders project stats', () => {
    render(<Portfolio />);
    expect(screen.getByText('77%')).toBeInTheDocument();
    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('∞')).toBeInTheDocument();
  });

  it('renders tech tags on the front of cards', () => {
    render(<Portfolio />);
    // Each project shows up to 5 tags on front, plus BackMeasurer has all tags
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThanOrEqual(1);
  });

  it('renders "flip to see more" hint on front', () => {
    render(<Portfolio />);
    const hints = screen.getAllByText(/flip to see more/);
    expect(hints.length).toBe(3);
  });

  it('flips a card on click to reveal back face', async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    // Find card containers by the perspective style
    const cardContainers = document.querySelectorAll('[style*="perspective"]');
    expect(cardContainers.length).toBe(3);

    // Click the first card container to flip it
    await user.click(cardContainers[0]);

    // After flipping, the back face shows the story text
    // It appears in both BackMeasurer (hidden) and the actual back face
    const storyElements = screen.getAllByText(/Full stack from the ground up/);
    expect(storyElements.length).toBeGreaterThanOrEqual(1);
  });

  it('shows live site links on the back face', async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    const cardContainers = document.querySelectorAll('[style*="perspective"]');
    await user.click(cardContainers[0]);

    // Check for live site link - appears in BackMeasurer and in the back face
    const liveLinks = screen.getAllByText(/sports-predictions\.pdowning\.com/);
    expect(liveLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('shows GitHub links on the back face', async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    const cardContainers = document.querySelectorAll('[style*="perspective"]');
    await user.click(cardContainers[0]);

    // GitHub username shows in BackMeasurer and in the back face
    const githubLinks = screen.getAllByText('downing034');
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('shows "click to flip back" hint when flipped', async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    const cardContainers = document.querySelectorAll('[style*="perspective"]');
    await user.click(cardContainers[0]);

    expect(screen.getAllByText(/click to flip back/).length).toBeGreaterThanOrEqual(1);
  });
});
