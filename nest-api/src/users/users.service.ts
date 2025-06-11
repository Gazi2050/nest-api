/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return user;
    }

    async create(data: { email: string; password: string }) {
        try {
            return await this.prisma.user.create({ data });
        } catch (error) {
            if (error.code === 'P2002') {
                throw new BadRequestException('Email already exists');
            }
            throw error;
        }
    }
}
