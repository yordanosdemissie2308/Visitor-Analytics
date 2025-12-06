import { Controller, Post, Body, Get } from '@nestjs/common';
import { Visit } from './vistit.entity';
import { AnalyticsService } from './visit.server';


@Controller('analytics')
export class AnalyticsController {
constructor(private readonly analyticsService: AnalyticsService) {}


@Post()
create(@Body() data: Partial<Visit>) {
return this.analyticsService.createVisit(data);
}


@Get()
findAll() {
return this.analyticsService.getAllVisits();
}
}