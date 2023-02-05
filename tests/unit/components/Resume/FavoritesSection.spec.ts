import FavoritesSection from '@/lib/components/Resume/FavoritesSection.svelte';
import type { Homepage } from '@prisma/client';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

const homepage: Homepage = {
	id: 'home-id',
	profession: 'profession',
	tagline: 'tagline',
	description:
		'Cupidatat et minim sit culpa irure exercitation do laboris veniam id duis eu aute enim.',
	favoriteTech: 'favorite-tech',
	favoriteTechURL: 'favorite-tech-url',
	currentlyLearning: 'currently-learning',
	currentlyLearningURL: 'currently-learning-url',
	currentlyReading: 'currently-reading',
	currentlyReadingURL: 'currently-reading-url',
};

describe('CertificatesSection', () => {
	it('renders correctly with open false', () => {
		const { container } = render(FavoritesSection, { homepage });

		expect(container).toMatchSnapshot();
	});
});
