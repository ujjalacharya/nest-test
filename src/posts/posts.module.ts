import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModel } from './entities/post.entity';
import { IsCreatorGuard } from './is-creator.guard';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostModel, User])],
  controllers: [PostsController],
  providers: [PostsService, IsCreatorGuard, UsersService],
  // exports: [PostsService]
})
export class PostsModule {}
