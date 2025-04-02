# Form App - Home Assignment

This project is part of a home assignment to evaluate full-stack web development skills. The goal is to build a simple Form App where users can create customized forms and save the generated form data. The project follows a monorepo structure using pnpm for package management.
The project is a work in progress, as I want to keep working on it after the assessment. There will be a few 'disabled' features that I have planned, but they are out of scope for this delivery.

### Setup & Running the Project
Ensure you have these dependencies installed:
 - **NVM**: for managing the node version being used.
 - **PNPM**: for managing the monorepo.
 - **Docker**: You don’t really need it, but it’s recommended.

Run the following commands:
1. copy the .env.example file into a .env file
 - `cp .env.example .env`
 - `cp .env.example packages/database/.env`
 - `cp .env.example apps/frontend/.env`
 - `cp .env.example apps/backend/.env`
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

# Using the App

The main, and only page, in the app is the form.

##### Operation Modes
The form has 3 Operation Modes, and you can change it on the top right toggle button, next to the theme toggle.
These modes are:
 -  ![image](https://github.com/user-attachments/assets/614f5bb0-ffe1-4895-ac15-453d6ffa8e4d) **Builder mode**: In this mode when you click on a field a editor popover shows up so you can edit the field properties. You can save your form config, and will be persisted in the database.
 - ![image](https://github.com/user-attachments/assets/aa6c64ea-c362-4a39-ae78-64aa1de9b114) **Input mode**: This is a regular form mode: you fill all the fields, and submit the form in the end. The app saves it, but we won't retrieve the submited forms to the user yet.
 - ![image](https://github.com/user-attachments/assets/8637f12e-5d70-42a3-a3b1-76fbacdf358c) **Read mode**: This switches all fields to a read-only variant. You can read the values but not edit. Will be useful to see the submitted source records.

##### Creating a new Form and changing its name
- You can click on the New Form button to start a brand new form: ![image](https://github.com/user-attachments/assets/187ff070-59df-4f6b-afbc-96a3649a4632)

- And you can choose its name editing the text: ![image](https://github.com/user-attachments/assets/1af6fa8a-10e2-4fea-b4bb-b7a6f8a9559d)

##### Editing a Field
In the Builder mode you can change the following properties of a field:

![image](https://github.com/user-attachments/assets/9ccaf840-2eac-46da-9e49-3e4e271d704a)

- Question/Label: You can leave this empty. Useful for saparators that are not a section.
- Description: You can add a description to a field, and it will be displayed in the field.
- Placeholder: You can add a placeholder to a field if you want
- Required: You can toggle if the field is required or not. Required fields will show a red * in their label.
- Span: You can change the field span. The input has a maximum value attached to its size, that is not editable in the current version. The span is useful to create spacing and align fields only, since the input size is not functional yet.
- Type: You can change the field type to one of the available types.

##### Adding and removing fields from a Form
Adding and removing fields from a Form
- You can add new fields with the [+] button: ![image](https://github.com/user-attachments/assets/b0cf7df6-3db3-493a-8c0c-8b6782e1e85c)
 
- And remove them in their editor pane: ![image](https://github.com/user-attachments/assets/175b672a-479e-43c4-82ef-880b97bdba93)

##### Saving and Loading Forms
- After you are happy with your form, you can save it in the Save Config button: ![image](https://github.com/user-attachments/assets/0e9968ce-fd14-46e3-a4bc-d4efb345e9a9)
 
- And then load a previously saved form under the select, next to the save button:
![image](https://github.com/user-attachments/assets/d721ad55-e3da-450c-b2a6-ef4192d4ab77)

Clicking in a form from this select list will load on the page. You can further edit the form and save it, or fill it and submit.

##### Submitting a Form Source Record
In the Input mode you'll be able to fill the fields as usual.
There will be a "Submitt" button in the bottom of the page.
If you click in it your answers to the questions will be submitted to the BE and persisted.
You can't visualize your submissions yet, they are persisted the in the database, but not accessible by the app itself after submitted.

# Limitations & Future Improvements
At the moment, the project is still a work in progress and has some limitations that I plan to address in future iterations:

1. No Automated Tests Yet
There are no unit, integration, or end-to-end tests implemented yet.
Future improvements include adding Jest for unit tests, Vitest for frontend testing, and Cypress for E2E testing.

2. No Deployment Pipeline Yet
There is no CI/CD setup for deploying the application.
The project runs locally using Docker but doesn't have automated deployment configurations yet.
Future improvements include setting up GitHub Actions for CI/CD and a proper deployment workflow for both frontend and backend.

4. Limited Form Submission Handling
Right now, form submissions are saved in the database but cannot be retrieved or displayed back to the user.
A future improvement will be to add a UI for viewing submitted form responses.

4. Field Customization Limitations
Some form field properties, such as input size, are not yet fully configurable.
Future iterations will include more flexibility in field customization.

5. Missing User Authentication
Currently, the app does not have user authentication or authorization.

# Screen shots

### App Main Page
![image](https://github.com/user-attachments/assets/61fd122b-7e23-4134-8e83-d7ecd8e756c4)

### Form Builder 
##### Field Quick Edit 
![image](https://github.com/user-attachments/assets/fbb34524-0242-44a2-9737-35c3a3450267)

##### Field Edit Exapanded Properties
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
