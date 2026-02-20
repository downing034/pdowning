import React from 'react';
import { render } from '@testing-library/react';
import Rating from 'components/abilities/Rating';

describe('Rating', () => {
  it('renders 5 total stars for any skill level', () => {
    const { container } = render(<Rating skillLevel={3} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });

  it('renders all solid stars for skill level 5', () => {
    const { container } = render(<Rating skillLevel={5} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });

  it('renders no stars for skill level 0', () => {
    const { container } = render(<Rating skillLevel={0} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });

  it('renders correct number of stars for skill level 1', () => {
    const { container } = render(<Rating skillLevel={1} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });

  it('renders correct number of stars for skill level 4', () => {
    const { container } = render(<Rating skillLevel={4} />);
    const stars = container.querySelectorAll('svg');
    expect(stars.length).toBe(5);
  });
});
