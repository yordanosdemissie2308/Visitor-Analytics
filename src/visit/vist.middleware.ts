import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class AnalyticsMiddleware implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
console.log(`[VISITOR] ${req.ip} -> ${req.originalUrl}`);
next();
}
}