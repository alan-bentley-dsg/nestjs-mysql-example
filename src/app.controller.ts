import { Controller, Get, Header, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}
  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/v1/name')
  @Header('content-type', 'application/json')
  getName(@Query('firstName') firstName: string, @Query('lastName')lastName: string): any {
    //this.logger.log(`called /api/v1/name with firstName: ${firstName} and lastName: ${lastName}`);
    return this.appService.getUser(firstName, lastName);
  }
}
