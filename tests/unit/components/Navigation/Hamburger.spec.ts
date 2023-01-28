import Hamburger from '@/lib/components/Navigation/Hamburger.svelte';
import { render } from '@testing-library/svelte';

describe('Hamburger', () => {
	it('renders correctly with open false', () => {
		const { container } = render(Hamburger, { open: false });

		expect(container).toMatchSnapshot();
	});

	it('renders correctly with open true', () => {
		const { container } = render(Hamburger, { open: true });

		expect(container).toMatchSnapshot();
	});
});
