import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    async getAllUsers() {
        const users = await this.userService.findAll()
        if (users.length === 0) {
            return { message: 'No users found' }
        }
        return users;
    }
}
