# Form App - Home Assignment

This project is part of a home assignment to evaluate full-stack web development skills. The goal is to build a simple Form App where users can create customized forms and save the generated form data. The project follows a monorepo structure using pnpm for package management.



### Setup & Running the Project
Ensure you have these dependencies installed:
 - **NVM**: for managing the node version being used.
 - **PNPM**: for managing the monorepo.
 - **Docker**: You don't need really it, but its recommended.

Run the following commands:
1. copy the .env.example file into a .env file
 - `cp .env.example .env`
2. Set the correct Node version
 - `nvm use`
3. Install Dependencies
 - `pnpm install`
4. Start the Database container
 - `pnpm db:docker:start`
5. Apply Migrations & Seed Data
 - `pnpm db:deploy`
 - `pnpm db:seed`
6. Run the Back End API Server:
 - `pnpm be:dev`
7. Run the Front End NextJS App:
 - `pnpm fe:dev`

### Available Scripts
These scripts are available to run from the root of the project.
There's a prefix for each script to help identify for which project it relates to.
These scripts are also available in each project package.json, but without this prefix.

* Database:
````bash
pnpm db:docker:start  # Start DB in Docker
pnpm db:docker:stop   # Stop DB
pnpm db:migrate       # Run database migrations
pnpm db:seed          # Seed database
pnpm db:studio        # Open Prisma Studio
````

* Backend
````bash
pnpm be:dev          # Start BE in dev mode
pnpm be:lint         # Run linter
````

* Frontend
````bash
pnpm fe:dev          # Start FE in dev mode
pnpm fe:build        # Build FE
pnpm fe:start        # Start built FE
````

###  Tech Stack

* [Node](https://nodejs.org/en/)
* [Typescript](www.google.com)
* [Docker and Compose](https://www.docker.com/)
* [PostgreSQL](https://www.postgresql.org/)  - Relational database, managed using Prisma 

Frontend (FE):
* Next.js (TypeScript) - Framework for the frontend
* Tailwind CSS - For styling
* ShadCN - UI Kit for quick UI setup, leveraging Radix UI
* React Hook Form - Form handling library
* ahooks - Additional useful React hooks

Backend (BE):
* [Fastify](https://www.fastify.io/) - Lightweight Node.js API server
* [Prisma ORM](https://www.prisma.io/) - ORM for database management

###  Project Structure
This project follows a monorepo structure using pnpm workspaces, which allows sharing code across different parts of the system efficiently. One key advantage is the presence of the packages/forms package, which contains shared form-related logic that both the backend (BE) and frontend (FE) can use, ensuring consistency.

````
├── apps                                      // Applications
│   ├── backend                               // Fastify API server
│   └── frontend                              // Next.js application
├── packages
│   ├── database                               // Database-related logic
│   │   ├── prisma                             // Prisma schema, migrations, seed
│   │   ├── generated                          // Prisma client
│   ├── forms                                  // Shared form resources for BE & FE
├── docker-compose.yml                         // Docker setup for BE and DB
├── package.json
├── pnpm-workspace.yaml                        // pnpm workspace config
└── tsconfig.json                              // TypeScript config
````    

### Contact

If you have any questions, feel free to reach out!

# Screen shots

### 
![image](https://github.com/user-attachments/assets/61fd122b-7e23-4134-8e83-d7ecd8e756c4)
![image](https://github.com/user-attachments/assets/fbb34524-0242-44a2-9737-35c3a3450267)
![image](https://github.com/user-attachments/assets/9cb291cc-1439-42b3-af0a-905faaad38d6)


### Form Operation Modes
##### Input mode
![image](https://github.com/user-attachments/assets/f587be6a-e5a5-4bc6-af5e-8fa4e7991a9f)

##### Builder mode
![image](https://github.com/user-attachments/assets/852c57be-d954-424a-9d48-6847b1b4f1c5)

##### Read-Only mode
![image](https://github.com/user-attachments/assets/c2c0d2e3-9554-4691-a3f8-bc4a4e9d138f)

### Field Type Examples
###### Text field
![image](https://github.com/user-attachments/assets/f587be6a-e5a5-4bc6-af5e-8fa4e7991a9f)

###### Text Area
![image](https://github.com/user-attachments/assets/f15fff38-c6fe-4db7-807b-1c52c14c2671)

###### Number
![image](https://github.com/user-attachments/assets/4239df68-6dfc-49b0-a434-67b91255fd5e)

###### Date Picker
![image](https://github.com/user-attachments/assets/c9873669-44cb-4f87-a0e5-5000bdf59e6b)

###### Separator
![image](https://github.com/user-attachments/assets/5a25ddda-8554-4c1d-b4ba-73aa019dd503)
