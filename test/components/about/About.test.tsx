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

  it('renders the "My Teams" section label', () => {
    render(<About />);
    expect(screen.getByText('My Teams')).toBeInTheDocument();
  });

  it('renders all team badges', () => {
    render(<About />);
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

  it('renders team sport labels', () => {
    render(<About />);
    expect(screen.getAllByText('NFL').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('MLB').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('NBA').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('NHL').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('NCAAF').length).toBeGreaterThanOrEqual(1);
  });
});
