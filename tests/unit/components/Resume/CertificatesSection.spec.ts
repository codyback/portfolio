import CertificatesSection from '@/lib/components/Resume/CertificatesSection.svelte';
import type { Certificate, TechnologyCertificate } from '@prisma/client';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

const certifications: (TechnologyCertificate & {
	certificates: Certificate[];
})[] = [
	{
		id: 'technology-cert-id',
		name: 'testing-title',
		homepageId: 'homepage-id',
		certificates: [
			{
				id: 'cert-id',
				name: 'testing',
				completedAt: new Date(),
				technologyCertificateId: '',
			},
		],
	},
];

describe('CertificatesSection', () => {
	it('renders correctly with open false', () => {
		const { container } = render(CertificatesSection, { certifications });

		expect(container).toMatchSnapshot();
	});
});
