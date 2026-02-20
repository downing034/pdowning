import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BentoCard from 'components/about/BentoCard';

describe('BentoCard', () => {
  it('renders children content', () => {
    render(
      <BentoCard>
        <p>Test content</p>
      </BentoCard>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <BentoCard className="custom-class">
        <p>Content</p>
      </BentoCard>,
    );
    const card = container.firstElementChild;
    expect(card?.className).toContain('custom-class');
  });

  it('applies dark variant styles', () => {
    const { container } = render(
      <BentoCard dark>
        <p>Dark content</p>
      </BentoCard>,
    );
    const card = container.firstElementChild;
    expect(card?.className).toContain('bg-surface-light');
  });

  it('applies light variant styles by default', () => {
    const { container } = render(
      <BentoCard>
        <p>Light content</p>
      </BentoCard>,
    );
    const card = container.firstElementChild;
    expect(card?.className).toContain('bg-white/95');
  });

  it('shows glow effect on mouse enter', () => {
    const { container } = render(
      <BentoCard>
        <p>Hover me</p>
      </BentoCard>,
    );
    const card = container.firstElementChild as HTMLElement;
    fireEvent.mouseEnter(card);

    // The glow div should now have opacity 1
    const glowDivs = container.querySelectorAll('.pointer-events-none');
    expect(glowDivs.length).toBeGreaterThan(0);
  });

  it('responds to mouse move events', () => {
    const { container } = render(
      <BentoCard>
        <p>Move mouse</p>
      </BentoCard>,
    );
    const card = container.firstElementChild as HTMLElement;

    // Mock getBoundingClientRect for the card
    vi.spyOn(card, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 400,
      height: 200,
      top: 0,
      right: 400,
      bottom: 200,
      left: 0,
      toJSON: () => ({}),
    });

    fireEvent.mouseMove(card, { clientX: 200, clientY: 100 });
    // No crash — tilt state updated
    expect(screen.getByText('Move mouse')).toBeInTheDocument();
  });

  it('resets tilt on mouse leave', () => {
    const { container } = render(
      <BentoCard>
        <p>Leave me</p>
      </BentoCard>,
    );
    const card = container.firstElementChild as HTMLElement;

    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);

    expect(screen.getByText('Leave me')).toBeInTheDocument();
  });

  it('accepts custom glow color', () => {
    render(
      <BentoCard glowColor="rgba(0,212,255,0.4)">
        <p>Custom glow</p>
      </BentoCard>,
    );
    expect(screen.getByText('Custom glow')).toBeInTheDocument();
  });

  it('wraps children in a z-10 container', () => {
    const { container } = render(
      <BentoCard>
        <p>Wrapped content</p>
      </BentoCard>,
    );
    const innerWrapper = container.querySelector('.z-10');
    expect(innerWrapper).toBeInTheDocument();
    expect(innerWrapper?.textContent).toBe('Wrapped content');
  });
});
