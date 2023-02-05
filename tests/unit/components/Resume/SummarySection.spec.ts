import SummarySection from '@/lib/components/Resume/SummarySection.svelte';
import { render } from '@testing-library/svelte';
import { vi } from 'vitest';

describe('Header', () => {
	beforeAll(() => {
		vi.resetAllMocks();
	});

	it('renders correctly', () => {
		const { container } = render(SummarySection, {
			description:
				'Summary Description - Ex exercitation deserunt veniam ipsum est non aute occaecat.',
		});
		expect(container).toMatchSnapshot();
	});
});
