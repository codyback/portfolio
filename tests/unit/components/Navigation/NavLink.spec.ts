import NavLink from '@/lib/components/Navigation/NavLink.svelte';
import { render } from '@testing-library/svelte';
import { vi } from 'vitest';

describe('Header', () => {
	beforeAll(() => {
		vi.resetAllMocks();
	});

	it('renders correctly', () => {
		const { container } = render(NavLink, {
			href: '/test',
			title: 'Testing Navlink',
			label: 'Testing',
		});

		expect(container).toMatchSnapshot();
	});

	it('renders correctly with about page being active', () => {
		const { container } = render(NavLink, {
			href: '/about',
			title: 'About Page',
			label: 'About',
		});

		expect(container).toMatchSnapshot();
	});
});
