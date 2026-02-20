import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillBar from 'components/abilities/SkillBar';

describe('SkillBar', () => {
  it('renders the skill name', () => {
    render(<SkillBar name="React" level={5} animate={true} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('displays "Expert" label for level 5', () => {
    render(<SkillBar name="React" level={5} animate={true} />);
    expect(screen.getByText('Expert')).toBeInTheDocument();
  });

  it('displays "Advanced" label for level 4', () => {
    render(<SkillBar name="TypeScript" level={4} animate={true} />);
    expect(screen.getByText('Advanced')).toBeInTheDocument();
  });

  it('displays "Proficient" label for level 3', () => {
    render(<SkillBar name="Python" level={3} animate={true} />);
    expect(screen.getByText('Proficient')).toBeInTheDocument();
  });

  it('displays "Familiar" label for level 2', () => {
    render(<SkillBar name="Go" level={2} animate={true} />);
    expect(screen.getByText('Familiar')).toBeInTheDocument();
  });

  it('displays "Exploring" label for level 1', () => {
    render(<SkillBar name="Rust" level={1} animate={true} />);
    expect(screen.getByText('Exploring')).toBeInTheDocument();
  });

  it('renders progress bar container', () => {
    const { container } = render(<SkillBar name="React" level={5} animate={true} />);
    const bar = container.querySelector('.h-1.bg-white\\/5');
    expect(bar).toBeInTheDocument();
  });

  it('renders the animated fill bar', () => {
    const { container } = render(<SkillBar name="React" level={5} animate={true} />);
    const fill = container.querySelector('.bg-gradient-to-r');
    expect(fill).toBeInTheDocument();
  });

  it('renders correctly when animate is false', () => {
    render(<SkillBar name="React" level={5} animate={false} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
  });
});
