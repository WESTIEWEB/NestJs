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
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UsersService } from '../services';
import { ValidateCreateUserPipeTsPipe } from '../pipes/validate-create-user.pipe.ts/validate-create-user.pipe.ts.pipe';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}
  @Get()
  getUser(): any[] {
    return this.userServices.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipeTsPipe) body: CreateUserDto) {
    const user = this.userServices.createNewUser(body);
    console.log(body.age.toPrecision());
    return { user };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    const user = this.userServices.getUserById(id);

    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);

    return user;
  }

  ///using Query parameters
  // @Get()
  // getUserByQuery(@Query('query') query: string) {
  //   console.log(`` + query);
  //   return [
  //     {
  //       email: 'chibu22@yahoo.com',
  //       username: 'chibu22',
  //     },
  //   ];
  // }
}
