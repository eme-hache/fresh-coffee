# Fresh Coffee

This project is built with Next.js and Tailwind CSS using Axios to fetch data on a PostgreSQL database

## Demo

[https://fresh-coffee-eme-hache.vercel.app/](https://fresh-coffee-eme-hache.vercel.app/)

## Environment Variables

You will need to add the following environment variable to your .env file

`DATABASE_URL`

## Local Development

To run this project, you'll need to set up a local development environment with a `PostgreSQL` database 

Once the database is online, follow these steps to prepare the database for seeding:

1. Run the Prisma migration command:

   ```bash
   npx prisma migrate dev --name init
   ```
2. Run the `seed` script in the `package.json` to populate the database, or:

    ```bash
    ts-node prisma/seed.ts
    ```
3. Run `npm run dev` to start a development Next.js server

## Screenshots

<div align="center">
  
  ![Fresh Coffee](/public/screenshots/screenshot-1.png)
  ![Fresh Coffee](/public/screenshots/screenshot-2.png)
  
</div>
