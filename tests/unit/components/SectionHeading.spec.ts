import SectionHeading from '@/lib/components/SectionHeading.svelte';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

describe('Sidebar', () => {
	it('renders correctly', () => {
		const { container } = render(SectionHeading, { heading: 'Testing' });

		expect(container).toMatchSnapshot();
	});
});
