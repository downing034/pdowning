import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NeonIceSign from 'components/shared/NeonIceSign';

// NeonIceSign measures element positions to place the chain;
// in JSDOM getBoundingClientRect returns zeros, so we mock it.
beforeEach(() => {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    x: 100,
    y: 100,
    width: 400,
    height: 200,
    top: 100,
    right: 500,
    bottom: 300,
    left: 100,
    toJSON: () => ({}),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('NeonIceSign', () => {
  it('renders the name "Paul"', () => {
    render(<NeonIceSign />);
    expect(screen.getByText('Paul')).toBeInTheDocument();
  });

  it('renders the name "Downing"', () => {
    render(<NeonIceSign />);
    expect(screen.getByText('Downing')).toBeInTheDocument();
  });

  it('displays job titles', () => {
    render(<NeonIceSign />);
    expect(screen.getByText('Engineering Manager')).toBeInTheDocument();
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
  });

  it('renders chain pull button with aria-label', () => {
    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign/i });
    expect(button).toBeInTheDocument();
  });

  it('shows "off" text when sign is on', () => {
    render(<NeonIceSign />);
    expect(screen.getByText(/off/i)).toBeInTheDocument();
  });

  it('toggles to dimmed state when chain is pulled', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign off/i });

    await user.click(button);

    // Chain pull animation takes 380ms
    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    // After toggle, label flips to "Turn neon sign on"
    expect(screen.getByRole('button', { name: /turn neon sign on/i })).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('toggles back to lit state on second pull', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign off/i });

    // Pull once — dimmed
    await user.click(button);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    // Pull again — lit
    const onButton = screen.getByRole('button', { name: /turn neon sign on/i });
    await user.click(onButton);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    expect(screen.getByRole('button', { name: /turn neon sign off/i })).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('supports keyboard activation with Enter key', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign off/i });

    button.focus();
    await user.keyboard('{Enter}');
    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    expect(screen.getByRole('button', { name: /turn neon sign on/i })).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('renders chain links', () => {
    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign/i });
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders the light bulb SVG', () => {
    render(<NeonIceSign />);
    const button = screen.getByRole('button', { name: /turn neon sign/i });
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.getAttribute('width')).toBe('20');
    expect(svg?.getAttribute('height')).toBe('28');
  });

  it('renders ceiling wires', () => {
    const { container } = render(<NeonIceSign />);
    const wires = container.querySelectorAll('.absolute.top-0');
    expect(wires.length).toBeGreaterThanOrEqual(2);
  });
});
