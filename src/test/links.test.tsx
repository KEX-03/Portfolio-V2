import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactSection } from '@/sections/ContactSection';

describe('Contact links', () => {
  it('renders actionable links and mail text', () => {
    render(<ContactSection />);

    expect(screen.getByText(/hello@viveksharma.dev/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
  });
});
