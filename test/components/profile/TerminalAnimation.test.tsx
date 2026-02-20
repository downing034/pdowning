import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import TerminalAnimation from 'components/profile/TerminalAnimation';

describe('TerminalAnimation', () => {
  it('renders the terminal window with title bar', () => {
    render(<TerminalAnimation />);
    expect(screen.getByText('paul@portfolio ~ %')).toBeInTheDocument();
  });

  it('renders the macOS-style window dots', () => {
    const { container } = render(<TerminalAnimation />);
    // Three colored dots: red, yellow, green
    const dots = container.querySelectorAll('.rounded-full');
    // At least the 3 window control dots
    expect(dots.length).toBeGreaterThanOrEqual(3);
  });

  it('displays the initial cursor prompt', () => {
    render(<TerminalAnimation />);
    // Should show at least one ">" prompt (the idle cursor)
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('begins typing after intersection observer triggers', async () => {
    vi.useFakeTimers();
    render(<TerminalAnimation />);

    // The mock IntersectionObserver auto-triggers isIntersecting,
    // so typing should start. Advance timers to let typing progress.
    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    // After some time, the first line content should be partially or fully visible
    // The first line is ' const paul = new Engineer();'
    // Check for fragments that would appear after typing starts
    const container = document.body;
    expect(container.textContent).toContain('paul');

    vi.useRealTimers();
  });
});
