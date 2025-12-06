import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsModule } from './visit/vist.module';
import { Visit } from './visit/vistit.entity';


@Module({
imports: [
TypeOrmModule.forRoot({
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: '2308',
database: 'visitor_analytics',
entities: [Visit],
synchronize: true,
}),
AnalyticsModule,
],
})
export class AppModule {}