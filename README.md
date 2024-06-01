# Portfolio

This portfolio website features an "About" page, a "Projects" page, a "Blog" page, and a "Resources" page. It showcases an individual's skills, past and current projects, thoughts, and useful resources. Built using SvelteKit, TailwindCSS, Vite, Vitest, and Playwright, it provides a smooth user experience. The code is well-structured, maintainable, and well-tested.

- **SvelteKit**: A framework for building web applications that provides a unified development experience, from development to deployment. It is built on top of Svelte, a popular JavaScript framework for building user interfaces. SvelteKit allows for easy setup and configuration of a Svelte project, with features such as routing, server-side rendering, and more. We have used SvelteKit to build the frontend of our website, including the components, pages and routing.

- **TailwindCSS**: A utility-first CSS framework that provides a set of low-level utility classes that can be composed to build complex designs. It uses a "utility-first" approach, where classes are used to apply styles, rather than having a pre-defined set of CSS selectors. This allows for a more modular and maintainable codebase. We have used Tailwind CSS to style our website, providing a consistent and responsive design.

- **Vite**: A development server that provides fast and efficient development experience. It uses native ES modules in the browser, which allows for faster development builds and hot module replacement. We have used Vite to serve our website during development, providing a fast and smooth development experience.

- **Vitest**: A testing framework for Svelte applications. It is built on top of Jest, a popular JavaScript testing framework, and provides a set of utilities for testing Svelte components. We have used Vitest to write and run tests for our website, ensuring that our code is working as expected.

- **Playwright**: A Node.js library to automate web browsers. It allows for end-to-end testing of web applications, by automating a browser and interacting with the website as a user would. We have used Playwright to run end-to-end tests on our website, ensuring that our website is working correctly on different browsers and devices.

## Development

To get started with development, please follow these steps:

1. Clone the repository to your local machine using `git clone`.

2. Run `pnpm install` to install all the dependencies. This will install all the packages specified in the package.json file.

3. Run `docker-compose up -d` to start the postgreSQL database using docker. This will run in the background.

4. Run `npx prisma migrate dev` to migrate the schema over to the local database.

5. Run `npx prisma db seed` to seed in some testing data.

6. Run `pnpm dev` to start the development server. The website will be available at http://localhost:5173. The development server uses Vite and will automatically reload the website whenever a change is made to the code.

## Testing

To run unit tests, use the command `pnpm test:unit`. This will run all the tests specified in the tests/unit folder using Vitest.

Setting up e2e tests, run the command `pnpm exec playwright install`

To run e2e tests, use the command `pnpm test:e2e`. This will run all the tests specified in the tests/e2e folder using playwright.

## Build

To build the production version of the website, use the command `pnpm build.`
