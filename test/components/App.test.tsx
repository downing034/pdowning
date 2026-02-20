import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from 'components/App';

describe('App', () => {
  it('renders all six main sections', () => {
    const { container } = render(<App />);

    expect(container.querySelector('#hero')).toBeInTheDocument();
    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#portfolio')).toBeInTheDocument();
    expect(container.querySelector('#abilities')).toBeInTheDocument();
    expect(container.querySelector('#work-history')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders sections in the correct order', () => {
    const { container } = render(<App />);
    const sections = container.querySelectorAll('section');
    const ids = Array.from(sections).map((s) => s.id);

    expect(ids).toEqual(['hero', 'about', 'portfolio', 'abilities', 'work-history', 'contact']);
  });

  it('renders the navigation component', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
