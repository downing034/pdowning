import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from 'components/profile/Profile';

describe('Profile (Hero)', () => {
  it('renders the hero section with correct id', () => {
    const { container } = render(<Profile />);
    const section = container.querySelector('#hero');
    expect(section).toBeInTheDocument();
  });

  it('renders the subtitle text', () => {
    render(<Profile />);
    expect(screen.getByText(/Engineering Manager/)).toBeInTheDocument();
    expect(screen.getByText(/Senior Software Engineer/)).toBeInTheDocument();
  });

  it('renders the scroll-down chevron as a link to #about', () => {
    const { container } = render(<Profile />);
    const scrollLink = container.querySelector('a[href="#about"]');
    expect(scrollLink).toBeInTheDocument();
  });

  it('renders ParticleBackground canvas elements', () => {
    const { container } = render(<Profile />);
    const canvases = container.querySelectorAll('canvas');
    expect(canvases.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the TerminalAnimation component', () => {
    render(<Profile />);
    // Terminal always shows the prompt character
    expect(screen.getByText('>')).toBeInTheDocument();
  });
});
