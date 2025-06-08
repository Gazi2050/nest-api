import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
    private posts: Post[] = [
        {
            id: 1,
            title: 'First Post ',
            content: 'my first post',
            authorName: 'gazi',
            createdAt: new Date(),
        }
    ];
    findAll(): Post[] {
        return this.posts;
    }
}
