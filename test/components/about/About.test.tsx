import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import About from 'components/about/About';

describe('About', () => {
  it('renders the about section with correct id', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });

  it('renders the Denver, CO location', () => {
    render(<About />);
    expect(screen.getByText('Denver, CO')).toBeInTheDocument();
  });

  it('renders the bio/tagline text', () => {
    render(<About />);
    expect(screen.getByText(/Caring engineer/)).toBeInTheDocument();
  });

  it('renders all three broadcast panels after intersection fires', async () => {
    vi.useFakeTimers();
    render(<About />);

    // BroadcastPanel uses setTimeout(80ms) after IntersectionObserver triggers
    await act(async () => {
      vi.advanceTimersByTime(200);
    });

    // Panel 01
    expect(screen.getByText(/From product planning to deployment/)).toBeInTheDocument();
    // Panel 02
    expect(screen.getByText(/managed engineers/)).toBeInTheDocument();
    // Panel 03
    expect(screen.getByText(/I want to work on something people care about/)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('renders panel stats after intersection fires', async () => {
    vi.useFakeTimers();
    render(<About />);

    await act(async () => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Years')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Companies')).toBeInTheDocument();
    // Note: '3' also appears in team badge sport labels. Use getAllByText.
    expect(screen.getAllByText('3').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Roles')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('renders the summary snapshot cards', () => {
    render(<About />);
    expect(screen.getByText('Teams Led')).toBeInTheDocument();
    expect(screen.getByText('Core Stack')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Approach')).toBeInTheDocument();
  });
});
