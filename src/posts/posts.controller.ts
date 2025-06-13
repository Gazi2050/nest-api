import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

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
}
