import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';

describe('Button components', () => {
  it('renders primary button label and arrow by default', () => {
    render(<PrimaryButton type="button">See Projects</PrimaryButton>);

    expect(screen.getByRole('button', { name: /see projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /see projects/i }).querySelector('svg')).toBeTruthy();
  });

  it('hides arrow when showArrow is false', () => {
    render(
      <PrimaryButton type="button" showArrow={false}>
        Contact
      </PrimaryButton>,
    );

    expect(screen.getByRole('button', { name: /contact/i }).querySelector('svg')).toBeNull();
  });

  it('renders secondary button', () => {
    render(<SecondaryButton type="button">Read Story</SecondaryButton>);

    expect(screen.getByRole('button', { name: /read story/i })).toBeInTheDocument();
  });
});
