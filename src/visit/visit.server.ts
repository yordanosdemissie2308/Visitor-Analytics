import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from './vistit.entity';


@Injectable()
export class AnalyticsService {
constructor(
@InjectRepository(Visit)
private visitRepository: Repository<Visit>,
) {}


createVisit(data: Partial<Visit>) {
const visit = this.visitRepository.create({ ...data, visitTime: new Date() });
return this.visitRepository.save(visit);
}


getAllVisits() {
return this.visitRepository.find({ order: { id: 'DESC' } });
}
}