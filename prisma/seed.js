import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const homepage = await prisma.homepage.upsert({
    where: { id: 'cld7vo8rx000008la3em88gqs' },
    update: {},
    create: {
      id: 'cld7vo8rx000008la3em88gqs',
      profession: 'Software Developer', 
      tagline: 'Continual Learning.',
      description: 'Junior Software Engineer dedicated to efficiently delivering results through my proficiency in various programming languages and technologies. My portfolio showcases a range of different projects that demonstrate my ability to problem solve and create functional and user-friendly software.',
      favoriteTech: 'ChatGPT',
      favoriteTechURL: 'https://chat.openai.com/chat',
      currentlyLearning: 'SvelteKit',
      currentlyLearningURL: 'https://kit.svelte.dev/',
      currentlyReading: 'Dune',
      currentlyReadingURL: 'https://dunenovels.com/',
      experiences: {
        create: [
          {
            id: 'cld7vx4xs000108l5ct498n8z',
            company: 'UPMC Enterprises',
            url: '',
            description: '',
            position: 'Associate Software Engineer',
            startDate: new Date('05-02-2022'),
            isEmployed: true,
          },
          {
            id: 'cld7w36re000208l5ebbu2dm3',
            company: 'Tech Elevator',
            url: '',
            description: 'Attended a 14-week full-stack coding bootcamp learning how to create dynamic web-based software systems using Java providing 700+ hours of development education and application.',
            position: 'Coding Bootcamp',
            startDate: new Date('01-14-2022'),
            endDate: new Date('04-18-2022'),
            isEmployed: false,
          }
        ]
      },
      skills: {
        create: [
          {
            id: 'cld7w5l96000308l5bzo8b9fg',
            name: 'Java',
            url: '',
          },
          {
            id: 'cld7w5os9000408l5hzzj91vq',
            name: 'Spring Boot',
            url: '',
          },
          {
            id: 'cld7w5s54000508l52h8v4cal',
            name: 'GraphQL',
            url: '',
          },
          {
            id: 'cld7w5vee000608l5fvx9h3xu',
            name: 'PostgreSQL',
            url: '',
          },
          {
            id: 'cld7w61q4000708l56w010ufg',
            name: 'MongoDB',
            url: '',
          },
          {
            id: 'cld7w64z7000808l59ydhewbv',
            name: 'HTML',
            url: '',
          },
          {
            id: 'cld7w6aix000908l50ogz8qo4',
            name: 'CSS',
            url: '',
          },
          {
            id: 'cld7w6ebh000a08l5cx7qf0ah',
            name: 'JavaScript',
            url: '',
          },
          {
            id: 'cld7w6iaj000b08l5dkys8e97',
            name: 'TypeScript',
            url: '',
          },
          {
            id: 'cld7w6m5m000c08l52otv4jvu',
            name: 'Node.js',
            url: '',
          },
          {
            id: 'cld7w6phx000d08l57wlw9gah',
            name: 'Express.js',
            url: '',
          },
          {
            id: 'cld7w6ssz000e08l5dc7j3ypy',
            name: 'Vue.js',
            url: '',
          },
          {
            id: 'cld7w6wkv000f08l59jl01sws',
            name: 'GIT',
            url: '',
          },
          {
            id: 'cld7w70c3000g08l5dpj35oco',
            name: 'Jest',
            url: '',
          },
          {
            id: 'cld7w73kb000h08l55a699vuw',
            name: 'JUnit',
            url: '',
          },
          {
            id: 'cld7w789k000i08l53j3efqw1',
            name: 'Cypress',
            url: '',
          },
        ]
      },
      hobbies: {
        create: [
          {
            id: 'cld7wavmx000008me3oquazhq',
            name: 'Coding',
            url: '',
          },
          {
            id: 'cld7wazd6000108me1tx1891h',
            name: 'Reading',
            url: '',
          },
          {
            id: 'cld7wb305000208mebglyh9ek',
            name: 'Video Games',
            url: '',
          },
          {
            id: 'cld7wb6w3000308meaoxk3etp',
            name: 'Designing',
            url: '',
          },
          {
            id: 'cld7wbbhr000408mec1tj1lhv',
            name: 'Fitness',
            url: '',
          },
          {
            id: 'cld7wbf62000508me7q65gxdg',
            name: 'Movies',
            url: '',
          },
        ]
      },
      certifications: {
        create: [
          {
            id: 'cld7weq3i000608me1686bkg1',
            name: 'Amazon Web Services',
            certificates: {
              create: [
                {
                  id: 'cld7wfba1000708meamvi0h3r',
                  name: 'AWS Certified Cloud Practitioner',
                  completedAt: new Date('02-01-2023')
                }
              ]
            }
          }
        ]
      }
    },
  });
  console.log({ homepage });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
