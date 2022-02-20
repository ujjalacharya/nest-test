import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostModel } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostModel) private postsRepository: Repository<PostModel>,
  ) // @InjectRepository(User) private usersRepository: Repository<User>
  {}
  async create(req: any, createPostDto: CreatePostDto) {
    // this.usersRepository.findOne(req.user)

    const post = this.postsRepository.create({
      content: createPostDto.content,
    });
    this.postsRepository.save(post);
    return post;
  }

  findAll() {
    return this.postsRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
