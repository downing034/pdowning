# home.pdowning.com

Personal portfolio site for Paul Downing, Senior Software Engineer and Engineering Manager (React, TypeScript, Ruby on Rails).

**Live site:** [home.pdowning.com](https://home.pdowning.com)

## Tech stack

- **Framework:** React 18 with TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS, Framer Motion for animation
- **Testing:** Vitest and React Testing Library, with coverage reporting via V8
- **Code quality:** ESLint (typescript-eslint, React, React Hooks, and jsx-a11y rules), Prettier, Husky and lint-staged pre-commit hooks
- **CI:** GitHub Actions runs lint, format check, type check, build, and tests with coverage on every push and pull request
- **Hosting:** Netlify

## Project structure

```
src/
  components/   UI sections (profile, about, work history, portfolio, abilities, contact)
  constants/    Site content: jobs, employment history, projects, skills
  hooks/        Custom React hooks (scroll spy for navigation)
  styles/       Global styles
test/           Component, constant, and hook tests (mirrors src/)
```

## Getting started

Requires Node.js 22 and Yarn.

```bash
yarn install
yarn dev
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Type check and build for production |
| `yarn preview` | Preview the production build locally |
| `yarn test` | Run the test suite |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:coverage` | Run tests with a coverage report (output in `test/coverage/`) |
| `yarn lint` / `yarn lint:fix` | Lint, or lint and auto-fix |
| `yarn format` / `yarn format:check` | Format with Prettier, or check formatting |

Pre-commit hooks run ESLint and Prettier on staged files automatically.

## Deployment

Netlify builds and deploys from the default branch using `yarn build`. Client-side routes are handled with a catch-all redirect to `index.html` (see `netlify.toml`).

## Contact

- LinkedIn: [linkedin.com/in/paul-w-downing](https://linkedin.com/in/paul-w-downing)
- Email: downing034@gmail.com