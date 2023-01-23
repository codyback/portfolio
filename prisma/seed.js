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
            url: 'https://enterprises.upmc.com/',
            position: 'Associate Software Engineer',
            startDate: new Date('05-02-2022'),
            isEmployed: true,
            responsibilities: {
              create: [
                {
                  id: 'cld88xmtz000508l0bl28gfn0',
                  description: 'Writing, testing and maintaining code for various software applications and systems'
                },
                {
                  id: 'cld88xtar000608l0al68c8u2',
                  description: 'Collaborating with other team members to develop and implement new features and functionality'
                },
                {
                  id: 'cld88xwjo000708l079408zim',
                  description: 'Participating in code reviews and ensuring that all code adheres to industry standards and best practices'
                },
                {
                  id: 'cld88y007000808l0gj8l7m7q',
                  description: 'Continuously learning new technologies and programming languages to stay current with industry developments'
                }
              ]
            },
            projects: {
              create: [
                {
                  id: 'cld8909uc000908l09uah1fj8',
                  name: 'Safar TeleCare',
                  url: 'https://safar-telecare.upmce.net/',
                  description: 'TeleConsults for the future of medicine'
                }
              ]
            }
          },
          {
            id: 'cld7w36re000208l5ebbu2dm3',
            company: 'Tech Elevator',
            url: 'https://www.techelevator.com/',
            description: 'Attended a 14-week full-stack coding bootcamp learning how to create dynamic web-based software systems using Java providing 700+ hours of development education and application.',
            position: 'Coding Bootcamp',
            startDate: new Date('01-14-2022'),
            endDate: new Date('04-18-2022'),
            isEmployed: false,
            projects: {
              create: [
                {
                  id: 'cld893qr6000a08l01pp60t6e',
                  name: 'Vending Machine Application',
                  url: 'https://github.com/codyback/vending-machine',
                  description: 'Created an application which presented a user with a set of menus to add money, view/buy items, and receive change. This project demonstrates the usage of Object-Oriented Programming as well as Unit-Testing using Java.'
                },
                {
                  id: 'cld893u4n000b08l0cq1j3rrb',
                  name: 'Tenmo Application',
                  url: 'https://github.com/codyback/tenmo',
                  description: 'Developed a full-stack application using Java, Spring Boot, and PostgreSQL, which allowed users to register, login, send/receive/request money. Complete with authentication, server-side and client-side validation.'
                },
                {
                  id: 'cld893yln000c08l0dlq76rrb',
                  name: 'Golf Tracker Application',
                  description: 'Created with IntelliJ in Java utilizing a RESTful SpringBoot backend framework, PostgreSQL database, and a fully responsive front end using VueJS components. Additionally takes advantage of the Google Maps API for displaying location data of courses from our database. This web application can track golf rounds for various courses as well as golf rounds in a league with you and your friends.'
                },
              ]
            }
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

  const about = await prisma.about.upsert({
    where: { id: 'cld8drnhp000008jpe62h5cxk' },
    update: {},
    create: {
      imageUrl: '',
      goals: {
        create: [
          {
            id: 'cld8dt9ad000108jp12373d3t',
            name: 'Fitness',
            goalPost: '182 Days',
            year: '2023',
          },
          {
            id: 'cld8dtcv7000208jpfs9z3mg6',
            name: 'Reading',
            goalPost: '26 Books',
            year: '2023',
          },
          {
            id: 'cld8dtfq3000308jp56aecjtw',
            name: 'AWS Certifications',
            goalPost: '6 Certs',
            year: '2023',
          },
        ]
      },
      paragraphs: {
        create: [
          {
            id: 'cld8dxl5r000408jp5s9zdt3t',
            description: `I'm a junior software developer with a passion for problem-solving and technology. I find the challenge of solving problems and the never-ending learning opportunities that come with working in technology to be incredibly satisfying. I have experience in few programming languages like JavaScript, Java, and C#, and I am constantly trying to expand my skill set by learning new technologies and programming languages.`,
          },
          {
            id: 'cld8dxof0000508jpaufj121g',
            description: `In my free time, I enjoy reading, especially fantasy and science fiction. I find the imagination and world-building in these genres to be truly captivating. Recently, I've taken up cooking and have been having a blast experimenting with new recipes. I have found that cooking is a great way to unwind and create something delicious at the same time. I'm also making an effort to read more non-fiction and books about computer science to keep expanding my knowledge and learn more about the industry I'm in.`,
          },
          {
            id: 'cld8dxrfm000608jp1g0j4w9q',
            description: `When it comes to video games, I'm a big fan of retro games like A Link to the Past and Super Mario World. I find the nostalgia and simplicity of these games to be incredibly enjoyable, and I think it's great to be able to play games that have stood the test of time. I also like to play some modern games, but I always come back to my favorites from the past.`,
          },
          {
            id: 'cld8dxuks000708jp21j3evga',
            description: `Covid-19 put a bit of a damper on my fitness routine, but I'm determined to get back into it this year. I've set a goal to be active for at least 182 days this year, and I'm focusing on getting back into a consistent routine by incorporating different exercises like running, weightlifting, and yoga.`,
          },
          {
            id: 'cld8dxyb1000808jp2vcte1cx',
            description: `I'm also planning to get AWS certifications to expand my knowledge and skills in the field, as well as finishing my portfolio website. I believe that having a portfolio website will help me showcase my work and improve my chances of landing my dream job. I'm excited for what the year has in store and look forward to continuing to grow as a developer.`,
          },
        ]
      }
    }
  })
  console.log({ homepage, about });
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
