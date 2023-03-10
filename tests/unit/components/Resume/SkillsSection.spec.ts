import SkillsSection from '@/lib/components/Resume/SkillsSection.svelte';
import type { Skill } from '@prisma/client';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

const skills: Skill[] = [
  {
    id: 'skill-1',
    name: 'skill 1',
    url: 'skill-1-url',
    homepageId: 'test',
  },
  {
    id: 'skill-2',
    name: 'skill 2',
    url: 'skill-2-url',
    homepageId: 'test',
  },
  {
    id: 'skill-3',
    name: 'skill 3',
    url: 'skill-3-url',
    homepageId: 'test',
  },
];

describe('CertificatesSection', () => {
  it('renders correctly with open false', () => {
    const { container } = render(SkillsSection, { skills });

    expect(container).toMatchSnapshot();
  });
});
