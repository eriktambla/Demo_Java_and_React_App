# Sectors application
This is an application with React frontend and Java Spring Boot backend.
In this README you will find documentation on what and why was used. General documentation of the main parts and ideas for further improvements.

## Frontend
### Main technologies chosen and why:
- Package management **pnpm**
  	- Up to 2x faster than npm.
- Built tool **Vite**
  	- Fast start-up and reloading times.
  	- Hot module replacement.
  	- Small bundle size.
- **React** with **TypeScript**
  - React is the framework I am most familiar with.
  - It has one of the best DX imo.
  - A lot of packages available.
- Server-state management **TanStack**
  - Simplifies state management.
  - Automatic caching.
  - Great DX.
- (Form) validation **Zod**
  - TypeScript-first schema declaration and validation.
- Styling **Tailwind**
  - No need for writing and managing seprate CSS files.
  - No need for creative classNames.
  - Fast development.
- Component library **React Aria**
  - Top-tier accessibility.
  - Easily stylable with Tailwind.
  - New and wanted to try.
- Select component **React Select**
  - Provides multiselect and autocomplete out of the box.
- Static testing **ESLint**
  - Standard for static testing.
### Further improvement ideas
- Adding tests using Vitest and React Testing Library.
- Creating own components for further customizing and control.
- Refactoring.

## Backend
### Main technologies chosen and why:
- Framework **Spring Boot**
  - I am most familiar with it.
  - Great DX.
  - Easy to use.
- Data access **Spring Data JPA**
  - Reduces boilerplate for interacting with database.
  - Simple to use.
- Authentication **Spring Security**
  - De-facto standard for securing Spring-based applications.
- RESTful APIs **Spring Web MVC**
  - Easy to use.
- Less boilerplate **lombok**
### Further improvement ideas
- Add all types of tests.
- Refactor.
- Add custom exceptions.
- Improve UserService.
- Enable csrf protection by sending XSRF-TOKEN cookie to frontend.
