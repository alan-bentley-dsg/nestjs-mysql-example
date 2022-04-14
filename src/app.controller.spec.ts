import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return json object with passed name', () => {
      expect(appController.getName('John','Smith')).toBe(`{"name": "John Smith"}`);
    });

    it('should throw bad request 400', () => {
      expect(() => appController.getName(null,null)).toThrow(BadRequestException);
    });
  });
});
