import { describe, expect, it, vi } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '@/components/layout/Navbar';

vi.mock('@/hooks/useActiveSection', () => ({
  useActiveSection: () => 'home',
}));

describe('Navbar', () => {
  it('renders primary navigation links', () => {
    render(<Navbar />);

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0);
  });

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: /open navigation menu/i });
    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const close = screen.getByRole('button', { name: /close navigation menu/i });
    await user.click(close);

    expect(close).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu on large-screen resize', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole('button', { name: /open navigation menu/i });
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toHaveAttribute('aria-expanded', 'true');

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /open navigation menu/i })).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
