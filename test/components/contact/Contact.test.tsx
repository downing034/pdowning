import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from 'components/contact/Contact';

describe('Contact', () => {
  it('renders the contact section with correct id', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders "Paul Downing" as the player name', () => {
    render(<Contact />);
    expect(screen.getByText('Paul Downing')).toBeInTheDocument();
  });

  it('renders "Unrestricted Free Agent" status', () => {
    render(<Contact />);
    expect(screen.getByText('Unrestricted Free Agent')).toBeInTheDocument();
  });

  it('renders the "Breaking News" badge', () => {
    render(<Contact />);
    expect(screen.getByText('Breaking News')).toBeInTheDocument();
  });

  it('renders ticker items in the scrolling bar', () => {
    render(<Contact />);
    expect(screen.getAllByText(/PAUL DOWNING HAS CLEARED WAIVERS/).length).toBeGreaterThanOrEqual(
      1,
    );
  });

  it('renders "Contact Agent" label', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Agent')).toBeInTheDocument();
  });

  it('renders email link with correct href', () => {
    render(<Contact />);
    const emailLink = screen.getByText('downing034@gmail.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:downing034@gmail.com');
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Contact />);
    const linkedinLink = screen.getByText('linkedin.com/in/paul-w-downing').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/paul-w-downing/');
  });

  it('renders GitHub link with correct href', () => {
    render(<Contact />);
    const githubLink = screen.getByText('github.com/downing034').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/downing034');
  });

  it('renders all contact links with target="_blank"', () => {
    render(<Contact />);
    const links = [
      screen.getByText('downing034@gmail.com').closest('a'),
      screen.getByText('linkedin.com/in/paul-w-downing').closest('a'),
      screen.getByText('github.com/downing034').closest('a'),
    ];

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders the copyright footer', () => {
    render(<Contact />);
    expect(screen.getByText(/© 2026 PAUL DOWNING/)).toBeInTheDocument();
  });

  it('renders the "My Teams" section label', () => {
    render(<Contact />);
    expect(screen.getByText('My Teams')).toBeInTheDocument();
  });

  it('renders all team badges', () => {
    render(<Contact />);
    const teamNames = [
      'Packers',
      'Astros',
      'Longhorns',
      'Gophers',
      'Nuggets',
      'Avalanche',
      'Buffaloes',
      'Bucks',
      'Wild',
    ];
    teamNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('displays the cycling transaction stat', () => {
    render(<Contact />);
    // The first transaction is shown on load
    // It cycles through: Position, Experience, Location, Last Team, Status, Available
    // Check that the first one is visible
    const transactionKeys = [
      'Position',
      'Experience',
      'Location',
      'Last Team',
      'Status',
      'Available',
    ];
    const found = transactionKeys.some((key) => screen.queryByText(key) !== null);
    expect(found).toBe(true);
  });
});
