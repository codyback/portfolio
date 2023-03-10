import HobbiesSection from '@/lib/components/Resume/HobbiesSection.svelte';
import type { Hobby } from '@prisma/client';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

const hobbies: Hobby[] = [
  {
    id: 'hobby-1',
    name: 'Hobby 1',
    url: 'hobby-1-url',
    homepageId: 'test',
  },
  {
    id: 'hobby-2',
    name: 'Hobby 2',
    url: 'hobby-2-url',
    homepageId: 'test',
  },
  {
    id: 'hobby-3',
    name: 'Hobby 3',
    url: 'hobby-3-url',
    homepageId: 'test',
  },
];

describe('CertificatesSection', () => {
  it('renders correctly with open false', () => {
    const { container } = render(HobbiesSection, { hobbies });

    expect(container).toMatchSnapshot();
  });
});
