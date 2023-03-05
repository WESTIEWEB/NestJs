import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../../dto/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipeTsPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const parseAgeToNumber = parseInt(value.age.toString());
    if (isNaN(parseAgeToNumber)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: parseAgeToNumber };
  }
}
