import { BadRequestException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getUser(firstName: string, lastName: string): string {
    if(!firstName || !lastName) {
      throw new BadRequestException('Empty param(s) provided')
    }

    return `{"name": "${firstName} ${lastName}"}`
  }
}
