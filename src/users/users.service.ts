import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
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
        } catch (error: unknown) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002'
            ) {
                throw new BadRequestException('Email already exists');
            }
            throw error;
        }
    }

    async delete(id: number) {
        try {
            return await this.prisma.user.delete({
                where: { id },
            });
        } catch (error: unknown) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }
            throw error;
        }
    }
}
