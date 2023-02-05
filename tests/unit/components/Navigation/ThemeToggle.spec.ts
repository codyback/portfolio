import ThemeToggle from '@/lib/components/Navigation/ThemeToggle.svelte';
import { render } from '@testing-library/svelte';
import { vi } from 'vitest';

describe('Header', () => {
	beforeAll(() => {
		vi.resetAllMocks();
	});

	it('renders correctly', () => {
		const { container } = render(ThemeToggle, { darkMode: true });
		expect(container).toMatchSnapshot();
	});
});
