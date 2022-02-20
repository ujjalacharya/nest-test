import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Request
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';

//For swagger
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  loginUser(@Request() req: any, @Body() loginUserDto: LoginUserDto) {
    return this.authService.login(req.user);
  }

  @Post('register')
  @HttpCode(200)
  registerUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.register(loginUserDto);
  }
}
