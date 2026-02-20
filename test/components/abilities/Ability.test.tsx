import React from 'react';
import { render, screen } from '@testing-library/react';
import Ability from 'components/abilities/Ability';

describe('Ability', () => {
  it('renders skill name via SkillBar', () => {
    render(<Ability ability={{ name: 'React', skillLevel: 5 }} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders skill level label via SkillBar', () => {
    render(<Ability ability={{ name: 'React', skillLevel: 5 }} />);
    expect(screen.getByText('Expert')).toBeInTheDocument();
  });

  it('renders for low skill levels', () => {
    render(<Ability ability={{ name: 'Rust', skillLevel: 1 }} />);
    expect(screen.getByText('Rust')).toBeInTheDocument();
    expect(screen.getByText('Exploring')).toBeInTheDocument();
  });
});
