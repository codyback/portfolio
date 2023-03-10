import Sidebar from '@/lib/components/Navigation/Sidebar.svelte';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

describe('Sidebar', () => {
  it('renders correctly with open false', () => {
    const { container } = render(Sidebar, { open: false });

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with open true', () => {
    const { container } = render(Sidebar, { open: true });

    expect(container).toMatchSnapshot();
  });
});
