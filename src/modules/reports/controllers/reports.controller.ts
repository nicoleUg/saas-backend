import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportsService } from '../services/reports.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('summary')
  async getSummary(@Query('period') period: string) {
    return this.reportsService.getSummary(period || 'today');
  }
}
