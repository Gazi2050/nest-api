<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 📘 NestJS REST API – Users & Posts

A simple RESTful API built with **NestJS**, **Prisma**, and **Neon PostgreSQL** to manage users and posts.

## 🔧 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [Neon PostgreSQL](https://neon.tech/)
- **Language**: TypeScript
- **Package Manager**: pnpm

## ✨ Features

### Users
- `GET /users` – Get all users
- `GET /users/:id` – Get user by ID
- `POST /users` – Create a user
- `DELETE /users/:id` – Delete a user

### Posts
- `GET /posts` – Get all posts
- `GET /posts/:id` – Get post by ID
- `POST /posts` – Create a post
- `PUT /posts/:id` – Update a post
- `DELETE /posts/:id` – Delete a post

## ⚙️ Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment**
   Create a `.env` file:

   ```
   DATABASE_URL="your_neon_connection_string"
   ```

4. **Run Prisma**

   ```bash
   pnpm prisma generate
   pnpm prisma migrate dev --name init
   ```

5. **Start the app**

   ```bash
   pnpm start:dev
   ```
## 📁 Project Structure
```bash
nest-api/
├─] .env (ignored)
├── .gitignore
├── .prettierrc
├─] dist/ (ignored)
├── eslint.config.mjs
├── generated/
│   └─] prisma/ (ignored)
├── nest-cli.json
├─] node_modules/ (ignored)
├── package.json
├── pnpm-lock.yaml
├── prisma/
│   ├─] migrations/ (ignored)
│   └── schema.prisma
├── README.md
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── posts/
│   │   ├── posts.controller.spec.ts
│   │   ├── posts.controller.ts
│   │   ├── posts.module.ts
│   │   ├── posts.service.spec.ts
│   │   └── posts.service.ts
│   ├── prisma.service.ts
│   ├── schemas/
│   │   └── create-user.schema.ts
│   ├── users/
│   │   ├── users.controller.spec.ts
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.spec.ts
│   │   └── users.service.ts
│   └── validator/
│       └── zod-validation.pipe.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```