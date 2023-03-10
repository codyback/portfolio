import Header from '@/lib/components/Navigation/Header.svelte';
import { render } from '@testing-library/svelte';
import { vi } from 'vitest';

describe('Header', () => {
  beforeAll(() => {
    vi.resetAllMocks();
  });

  it('renders correctly with open false', () => {
    const { container } = render(Header, { sidebar: false });

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with open true', () => {
    const { container } = render(Header, { sidebar: true });

    expect(container).toMatchSnapshot();
  });
});
