import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from './vistit.entity';
import { AnalyticsController } from './visit.controller';
import { AnalyticsService } from './visit.server';


@Module({
imports: [TypeOrmModule.forFeature([Visit])],
controllers: [AnalyticsController],
providers: [AnalyticsService],
})
export class AnalyticsModule {}


// src/analytics/dto/create-visit.dto.ts
export class CreateVisitDto {
ip: string;
endpoint: string;
userAgent: string;
}