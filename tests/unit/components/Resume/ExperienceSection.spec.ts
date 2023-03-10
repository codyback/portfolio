import ExperienceSection from '$lib/components/Resume/ExperienceSection.svelte';
import type {
  Experience,
  ExperienceResponsibility,
  ExperienceProject,
} from '@prisma/client';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

type ExperienceWithRelations = Experience & {
  responsibilities: ExperienceResponsibility[];
  projects: ExperienceProject[];
};

const experiences: ExperienceWithRelations[] = [
  {
    id: 'test',
    company: 'Testing Company 1',
    url: 'url-here',
    description:
      'Testing Company 1 description. Adipisicing amet aliquip occaecat Lorem non do laboris qui consectetur proident ex occaecat.',
    position: 'Testing Position 1',
    startDate: new Date('01-01-2000'),
    endDate: null,
    isEmployed: true,
    homepageId: 'test-1',
    responsibilities: [
      {
        id: 'resp-1',
        description: 'resp desc 1',
        experienceId: 'test',
      },
      {
        id: 'resp-2',
        description: 'resp desc 2',
        experienceId: 'test',
      },
    ],
    projects: [
      {
        id: 'proj-1',
        name: 'Project 1',
        url: 'proj-1-url',
        description: 'proj-1 desc',
        experienceId: 'test',
      },
      {
        id: 'proj-2',
        name: 'Project 2',
        url: 'proj-2-url',
        description: 'proj-2 desc',
        experienceId: 'test',
      },
    ],
  },
  {
    id: 'test-2',
    company: 'Testing Company 2',
    url: 'url-here',
    description:
      'Testing Company 2 description. Aliqua aute sint exercitation exercitation excepteur enim excepteur duis eiusmod occaecat voluptate aliquip reprehenderit.',
    position: 'Testing Position 2',
    startDate: new Date('01-01-2000'),
    endDate: new Date('01-01-2000'),
    isEmployed: false,
    homepageId: 'test-1',
    responsibilities: [],
    projects: [],
  },
];

describe('CertificatesSection', () => {
  it('renders correctly with open false', () => {
    const { container } = render(ExperienceSection, { experiences });

    expect(container).toMatchSnapshot();
  });
});
