import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

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

}