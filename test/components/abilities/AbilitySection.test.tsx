import React from 'react';
import { render, screen } from '@testing-library/react';
import AbilitySection from 'components/abilities/AbilitySection';

const mockAbilities = [
  { name: 'React', skillLevel: 5 },
  { name: 'TypeScript', skillLevel: 4 },
  { name: 'CSS', skillLevel: 3 },
];

describe('AbilitySection', () => {
  it('renders the section header', () => {
    render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('renders all skill bars', () => {
    render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('renders skill level labels', () => {
    render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    expect(screen.getByText('Expert')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(screen.getByText('Proficient')).toBeInTheDocument();
  });

  it('renders the accent bar before header', () => {
    const { container } = render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    const accentBar = container.querySelector('.bg-primary');
    expect(accentBar).toBeInTheDocument();
  });

  it('applies delay prop', () => {
    render(<AbilitySection header="Frontend" abilities={mockAbilities} delay={0.5} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('defaults delay to 0', () => {
    render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('renders in a glass-card container', () => {
    const { container } = render(<AbilitySection header="Frontend" abilities={mockAbilities} />);
    const card = container.querySelector('.glass-card');
    expect(card).toBeInTheDocument();
  });
});
