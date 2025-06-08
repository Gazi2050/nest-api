import { Controller, Get, Query } from '@nestjs/common';
import { Post as PostInterface } from './interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    findAll(@Query('search') search?: string): PostInterface[] {
        const extractAllPosts = this.postsService.findAll()
        if (search) {
            return extractAllPosts.filter(singlePost => singlePost.title.toLowerCase().includes(search.toLowerCase()));
        }
        return extractAllPosts;
    }
}
