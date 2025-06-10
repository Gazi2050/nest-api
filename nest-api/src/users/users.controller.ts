import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

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
}
