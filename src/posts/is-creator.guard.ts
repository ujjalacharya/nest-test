import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

import { PostsService } from './posts.service';

@Injectable()
export class IsCreatorGuard implements CanActivate {
  constructor(
    private userService: UsersService,
    private postService: PostsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { user, params }: { user: User; params: { id: number } } = request;

    if (!user || !params) return false;

    const username = user.username;
    const postId = params.id;

    // Determine if logged-in user is the same as the user that created the feed post
    const foundUser = await this.userService.findOne(username);

    if (foundUser.userRole.role === 'admin') return true; // allow admins to get make requests

    const foundPost = await this.postService.findOne(postId);
    let isAuthor = foundUser.id === foundPost.user.id;
    return isAuthor;
  }
}
