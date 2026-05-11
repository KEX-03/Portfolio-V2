import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { FEATURED_PROJECTS } from '@/data/projects';

describe('ProjectCard', () => {
  it('renders project content and open link', () => {
    const project = FEATURED_PROJECTS[0];

    render(<ProjectCard project={project} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(`open ${project.title}`, 'i') })).toBeInTheDocument();
  });

  it('renders stack labels', () => {
    const project = FEATURED_PROJECTS[1];

    render(<ProjectCard project={project} />);

    for (const tech of project.stack) {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    }
  });
});
