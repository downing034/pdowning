import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Abilities from 'components/abilities/Abilities';

describe('Abilities', () => {
  it('renders the abilities section with correct id', () => {
    const { container } = render(<Abilities />);
    expect(container.querySelector('#abilities')).toBeInTheDocument();
  });

  it('renders all skill category buttons', () => {
    render(<Abilities />);

    const categories = ['Frontend', 'Testing', 'Backend', 'Design', 'Ops & Tools', 'Leadership'];
    categories.forEach((cat) => {
      const elements = screen.getAllByText(new RegExp(cat));
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders the "Hover over an item" watermark on desktop', () => {
    render(<Abilities />);
    expect(screen.getByText('Hover over an item')).toBeInTheDocument();
  });

  it('renders canvas for lightning effects', () => {
    const { container } = render(<Abilities />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders skill pills when positions are computed', () => {
    // Mock offsetWidth/offsetHeight so the component thinks the container has size
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetWidth',
    );
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetHeight',
    );

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 600,
    });

    render(<Abilities />);

    // With dimensions set, positions should compute and skills should render
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Jest').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Ruby').length).toBeGreaterThanOrEqual(1);

    // Restore
    if (originalOffsetWidth)
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
    else
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 0 });
    if (originalOffsetHeight)
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
    else
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        configurable: true,
        value: 0,
      });
  });
});
