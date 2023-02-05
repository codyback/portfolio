import Footer from '@/lib/components/Footer.svelte';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

describe('Sidebar', () => {
	it('renders correctly', () => {
		const { container } = render(Footer);

		expect(container).toMatchSnapshot();
	});
});
