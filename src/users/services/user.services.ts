import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../utils';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, email: 'johnD@gmail.com', name: 'John' },
    { id: 2, email: 'johnD@gmail.com', name: 'Doe' },
  ];

  findAll() {
    return this.users;
  }

  createNewUser(input: CreateUserType) {
    this.users.push({ ...input, id: this.users.length + 1 });
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === parseInt(id));
  }
}
