import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from 'src/schemas/create-post.schema';
import { UpdatePostDto } from 'src/schemas/update-post.schema';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.post.findMany({
            include: { author: true },
        });
    }

    async findOne(id: number) {
        const post = await this.prisma.post.findUnique({
            where: { id },
            include: { author: true },
        });

        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }

        return post;
    }

    async create(data: CreatePostDto) {
        return this.prisma.post.create({
            data,
        });
    }

    async update(id: number, data: UpdatePostDto) {
        try {
            return await this.prisma.post.update({
                where: { id },
                data,
            });
        } catch (error: unknown) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                throw new NotFoundException(`Post with ID ${id} not found`);
            }
            throw error;
        }
    }

    async delete(id: number) {
        try {
            return await this.prisma.post.delete({
                where: { id },
            });
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                throw new NotFoundException(`Post with ID ${id} not found`);
            }
            throw error;
        }
    }
}