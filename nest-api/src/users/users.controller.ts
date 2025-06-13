/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ZodValidationPipe } from 'src/validator/zod-validation.pipe';
import { CreateUserSchema } from 'src/schemas/create-user.schema';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAllUsers() {
        const users = await this.usersService.findAll();
        if (users.length === 0) {
            return { message: 'No users found' };
        }
        return users;
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    async createUser(
        @Body(new ZodValidationPipe(CreateUserSchema)) body: any
    ) {
        return this.usersService.create(body);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }
}
