<script lang="ts">
  import Saos from "saos";
	import type { PageData } from "./$types";

  export let data: PageData;

  console.log(data);
</script>

<Saos once animation={"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}>
  <section class="mt-10">
    <h1 class="uppercase sm:text-5xl text-4xl">Software Developer</h1>
    <h2 class="uppercase font-bold sm:text-6xl text-4xl">Continual learning.</h2>
  </section>
</Saos>

<div class="sm:grid sm:grid-cols-3 sm:gap-20">
  <div class="sm:col-span-1">
    <Saos once animation={"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}>
      <section class="mt-10 sm:mt-20">
        <img src="" alt="Cody Backus" class="rounded-sm sm:rounded-full h-48 sm:w-48 w-full bg-gray-500" />
        <div class="mt-4 text-xl font-bold">Cody Backus</div>
        <p class="mt-10 text-neutral-500 text-justify">
          Junior Software Engineer dedicated to efficiently delivering results through my proficiency in various programming languages and technologies. My portfolio showcases a range of different projects that demonstrate my ability to problem solve and create functional and user-friendly software.
        </p>
      </section>
    </Saos>

    <Saos once animation="{"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
      <section class="mt-10 sm:mt-14 text-sm font-bold uppercase">
        <div class="border-t-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">Favorite Tech</div>
          <div class="col-span-1 text-right">
            <a href="https://chat.openai.com/chat" class="hover:underline hover:text-neutral-500">ChatGPT</a>
          </div>
        </div>
        <div class="border-t-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">Currently Learning</div>
          <div class="col-span-1 text-right">
            <a href="https://kit.svelte.dev/" class="hover:underline hover:text-neutral-500">SvelteKit</a>
          </div>
        </div>
        <div class="border-t-2 border-b-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">Currently Reading</div>
          <div class="col-span-1 text-right">
            <a href="https://dunenovels.com/" class="hover:underline hover:text-neutral-500">Dune</a>
          </div>
        </div>
        <div class="mt-10">
          <button class="py-3 w-full border-2 border-black uppercase text-sm font-bold hover:bg-neutral-200">Send Message</button>
        </div>
      </section>
    </Saos>
  </div>

  <div class="sm:col-span-2">
    <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">

      <div class="mt-10 sm:mt-20 border-b-2 border-black pb-3">
        <h3 class="uppercase text-2xl font-bold text-right">Experience</h3>
      </div>

      <div class="border-t-4 border-black mt-0.5 pt-8">
        <div>
          <div class="sm:grid sm:grid-cols-2 items-center font-bold">
            <div class="sm:col-span-1 text-lg leading-none">
              UPMC Enterprises
            </div>
            <div class="sm:col-span-1 sm:text-right sm:pt-0 pt-4">
              2022 - Current
              <br />
              Associate Software Engineer
            </div>
          </div>
          <ul class="pt-4 list-disc text-neutral-500">
            Responsibilities include:
            <li class="ml-4">
              Writing, testing and maintaining code for various software applications and systems
            </li>
            <li class="ml-4">
              Collaborating with other team members to develop and implement new features and functionality
            </li>
            <li class="ml-4">
              Participating in code reviews and ensuring that all code adheres to industry standards and best practices
            </li>
            <li class="ml-4">
              Continuously learning new technologies and programming languages to stay current with industry developments
            </li>
          </ul>

          <ul class="pt-4 list-disc text-neutral-500">
            Projects worked on:
            <li class="ml-4">
              <a href="https://safar-telecare.upmce.net/" class="hover:text-black underline font-bold">Safar TeleCare</a>: TeleConsults for the future of medicine
            </li>
          </ul>
        </div>

        <hr class="my-8" />

        <div>
          <div class="sm:grid sm:grid-cols-2 items-center font-bold">
            <div class="sm:col-span-1 text-lg leading-none">
              Tech Elevator
            </div>
            <div class="sm:col-span-1 sm:text-right sm:pt-0 pt-4">
              2022 - 2022
              <br />
              Coding Bootcamp
            </div>
          </div>
          <p class="pt-4 list-disc text-neutral-500">
            Attended a 14-week full-stack coding bootcamp learning how to create dynamic web-based software systems using Java providing 700+ hours of development education and application.
            
            <ul class="pt-4 list-disc text-neutral-500">
              Projects worked on:
              <li class="ml-4">
                <a href="https://github.com/codyback/vending-machine" class="hover:text-black underline font-bold">Vending Machine Application</a>: Created an application which presented a user with a set of menus to add money, view/buy items, and receive change. This project demonstrates the usage of Object-Oriented Programming as well as Unit-Testing using Java.
              </li>
              <li class="ml-4">
                <a href="https://github.com/codyback/tenmo" class="hover:text-black underline font-bold">Tenmo Application</a>: Developed a full-stack application using Java, Spring Boot, and PostgreSQL, which allowed users to register, login, send/receive/request money. Complete with authentication, server-side and client-side validation. 

              </li>
              <li class="ml-4">
                <a href="https://github.com/codyback/vending-machine" class="hover:text-black underline font-bold">Golf Tracker Application</a>: Created with IntelliJ in Java utilizing a RESTful SpringBoot backend framework, PostgreSQL database, and a fully responsive front end using VueJS components. Additionally takes advantage of the Google Maps API for displaying location data of courses from our database. This web application can track golf rounds for various courses as well as golf rounds in a league with you and your friends.
              </li>
            </ul> 
        </div>
      </div>
    </Saos>


    <div class="sm:grid sm:grid-cols-2 sm:gap-10">
      <div class="sm:col-span-1 mt-10 sm:mt-20">

        <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
          <div class="border-b-2 border-black pb-3">
            <h3 class="uppercase text-2xl font-bold text-right">Skills</h3>
          </div>

          <div class="border-t-4 border-black mt-0.5 pt-8">
            <p class="text-justify text-neutral-500">
              Skills include proficiency in multiple programming languages, frameworks, and tools, with experience in web, mobile and data analysis.
            </p>

            <div class="mt-6 font-bold">
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Java</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Spring Boot</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">GraphQL</span>  
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">PostgreSQL</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">MongoDB</span>
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">HTML</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">CSS</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">JavaScript</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">TypeScript</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Node.js</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Express.js</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Vue.js</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Git</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Jest</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">JUnit</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Cypress</span> 
            </div>
          </div>
        </Saos>

      </div>

      <div class="sm:col-span-1 mt-10 sm:mt-20">
        <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
          <div class="border-b-2 border-black pb-3">
            <h3 class="uppercase text-2xl font-bold text-right">Certificates</h3>
          </div>

          <div class="border-t-4 border-black mt-0.5 pt-8 font-bold">
            <div class="flex items-center">
              <span class="text-lg">Amazon Web Services</span><span class="px-4 py-0.5 ml-2 bg-black text-white rounded-full text-xs">1</span>
            </div>
            <hr class="border border-black my-4" />
            <div class="grid grid-cols-2 items-center">
              <p class="sm:col-span-1 text-lg leading-none">
                AWS Certified Cloud Practitioner
              </p>
              <div class="col-span-1 text-right">
                <span class="px-4 py-0.5 border border-black rounded-full text-xs uppercase">Feb 2023</span>
              </div>
            </div>
          </div>
        </Saos>

        <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
          <div class="mt-10 border-b-2 border-black pb-3">
            <h3 class="uppercase text-2xl font-bold text-right">Hobbies</h3>
          </div>

          <div class="border-t-4 border-black mt-0.5 pt-8">
            <p class="text-justify text-neutral-500">
              I enjoy taking on challenging projects as an opportunity to learn and grow, and am dedicated to delivering high-quality work.
            </p>

            <div class="mt-6 font-bold">
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Coding</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Reading</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Video Games</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Designing</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Fitness</span> 
              <span class="px-4 py-0.5 mx-1 border border-neutral-300 rounded-full text-xs uppercase">Movies</span> 
            </div>
          </div>
        </Saos>
      </div>
    </div>
  </div>
</div>


<style>
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: rotateX(50deg) translateX(100vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
</style>
