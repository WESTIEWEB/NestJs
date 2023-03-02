import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  ParseUUIDPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  // @Get()
  // getUser(): any[] {
  //   return [
  //     {
  //       email: 'ilochibuike@gmail.com',
  //       username: 'ilo23',
  //     },
  //     {
  //       email: 'chibu22@yahoo.com',
  //       username: 'chibu22',
  //     },
  //     {
  //       email: 'fracismadu@gamil.com',
  //       username: 'fracismadu',
  //     },
  //   ];
  // }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDto) {
    console.log(body.email);
    return { body };
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);
    return { id };
  }

  ///using Query parameters
  @Get()
  getUserByQuery(@Query('query') query: string) {
    console.log(`` + query);
    return [
      {
        email: 'chibu22@yahoo.com',
        username: 'chibu22',
      },
    ];
  }
}
