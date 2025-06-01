<details> 
<summary>📦 NestJS Core Concepts</summary>
<details> 
<summary>📦 NestJS Modules</summary>

### 🧠 What is a Module?

In **NestJS**, a **module** is a class annotated with the `@Module()` decorator.
It **groups related components** (controllers, services, etc.) into a single unit.

This is essential for **code organization**, **scalability**, and **reusability**.

### 🏠 `AppModule` – The Root Module

* Every NestJS app must have **one root module**.
* It's the **entry point** of the application.
* Registered in `main.ts` like this:

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
```
### 🧩 Feature Modules (e.g., `HelloModule`)

* You can create additional modules to **organize features**.
* These are called **feature modules**.
* A feature module can include:

  * Controllers
  * Services
  * Providers
  * Imports/Exports

### ✅ Example: `HelloModule`

```ts
// hello.module.ts
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
```

#### Then import it into `AppModule`:

```ts
// app.module.ts
import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule],
})
export class AppModule {}
```

### 🔁 Summary

| Term           | Meaning                                  |
| -------------- | ---------------------------------------- |
| `AppModule`    | Root module — main entry point           |
| Feature Module | A logical group of related functionality |
| `@Module()`    | Decorator that defines a module          |

</details> 

</details> 
