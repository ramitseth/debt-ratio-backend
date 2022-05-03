import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('debt')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getDebtRatio(@Param('id') id: string): string {
    return this.appService.getDebtRatio(id);
  }
}
