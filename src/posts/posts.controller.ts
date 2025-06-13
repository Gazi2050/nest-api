import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ZodValidationPipe } from 'src/validator/zod-validation.pipe';
import { CreatePostDto, CreatePostSchema } from 'src/schemas/create-post.schema';
import { UpdatePostDto, UpdatePostSchema } from 'src/schemas/update-post.schema';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) { }

    @Get()
    async getAllPosts() {
        const posts = await this.postService.findAll();
        if (posts.length === 0) {
            return { message: 'No posts found' };
        }
        return posts;
    }

    @Get(':id')
    async getPostById(@Param('id', ParseIntPipe) id: number) {
        return this.postService.findOne(id);
    }

    @Post()
    async createPost(
        @Body(new ZodValidationPipe(CreatePostSchema)) body: CreatePostDto
    ) {
        return this.postService.create(body);
    }

    @Put(':id')
    async updatePost(
        @Param('id', ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(UpdatePostSchema)) body: UpdatePostDto
    ) {
        return this.postService.update(id, body);
    }

    @Delete(':id')
    async deletePost(@Param('id', ParseIntPipe) id: number) {
        return this.postService.delete(id);
    }
}
