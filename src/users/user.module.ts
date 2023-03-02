import { Module } from '@nestjs/common';
import { UsersController } from './controller';

@Module({
  controllers: [UsersController],
  providers: [],
})
export class UserModule {}
