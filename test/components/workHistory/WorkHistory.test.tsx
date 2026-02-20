import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WorkHistory from 'components/workHistory/WorkHistory';

describe('WorkHistory', () => {
  it('renders the work-history section with correct id', () => {
    const { container } = render(<WorkHistory />);
    expect(container.querySelector('#work-history')).toBeInTheDocument();
  });

  it('renders the section header "Work History"', () => {
    render(<WorkHistory />);
    expect(screen.getByText('Work History')).toBeInTheDocument();
  });

  it('renders all four role cards', () => {
    render(<WorkHistory />);
    expect(screen.getByText('Engineering Manager')).toBeInTheDocument();
    expect(screen.getByText('Sr. Software Engineer II')).toBeInTheDocument();

    // "Software Engineer" appears for both TeamSnap and Granicus
    const seRoles = screen.getAllByText('Software Engineer');
    expect(seRoles.length).toBeGreaterThanOrEqual(2);
  });

  it('renders company names and periods', () => {
    render(<WorkHistory />);
    expect(screen.getByText(/Kava Labs · 2023/)).toBeInTheDocument();
    expect(screen.getByText(/Kava Labs · 2020/)).toBeInTheDocument();
    expect(screen.getByText(/TeamSnap · 2019/)).toBeInTheDocument();
    expect(screen.getByText(/Granicus · 2017/)).toBeInTheDocument();
  });

  it('renders compact stats', () => {
    render(<WorkHistory />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('$300M')).toBeInTheDocument();
    expect(screen.getByText('9%→78%')).toBeInTheDocument();
    expect(screen.getByText('2wk→4d')).toBeInTheDocument();
  });

  it('renders taglines on compact face', () => {
    render(<WorkHistory />);
    expect(screen.getByText(/Built the team\. Built the process/)).toBeInTheDocument();
    expect(screen.getByText(/Architected the interface/)).toBeInTheDocument();
    expect(screen.getByText(/Cleaned house/)).toBeInTheDocument();
    expect(screen.getByText(/Modernized a legacy stack/)).toBeInTheDocument();
  });

  it('expands a card on click to reveal details', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<WorkHistory />);

    // The compact face has a div with onClick that sets revealed=true
    // Find "click to reveal" text and click the parent card
    const revealHints = screen.getAllByText(/click to reveal/);
    expect(revealHints.length).toBeGreaterThanOrEqual(1);

    // Click the first reveal hint element — NeonCard has onClick on the compact inner div
    await user.click(revealHints[0]);

    // Advance timers to let NeonText flicker animations settle
    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    // After expanding, bullets should appear
    expect(screen.getByText(/Led full engineering org/)).toBeInTheDocument();
    expect(screen.getByText(/structured interview rubric/)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('shows tech stack chips when expanded', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<WorkHistory />);

    const revealHints = screen.getAllByText(/click to reveal/);
    await user.click(revealHints[0]);

    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    // Tech stack chips for Kava Labs Engineering Manager
    expect(screen.getByText('Agile')).toBeInTheDocument();
    expect(screen.getByText('People Management')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('collapses a card on second click', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<WorkHistory />);

    // Expand first card
    const revealHints = screen.getAllByText(/click to reveal/);
    await user.click(revealHints[0]);

    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    // Should see collapse hint (▲ click to collapse)
    const collapseHint = screen.getByText(/click to collapse/);
    expect(collapseHint).toBeInTheDocument();

    // Click the expanded card to collapse — the neon-detail div has onClick
    await user.click(collapseHint);

    // After collapsing, the bullets should be gone
    expect(screen.queryByText(/Led full engineering org/)).not.toBeInTheDocument();

    vi.useRealTimers();
  });
});
