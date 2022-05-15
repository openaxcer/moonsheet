import {Injectable, Logger, NestMiddleware, Scope} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';
import {v4 as uuid} from 'uuid';

let correlationId;

@Injectable({scope: Scope.REQUEST})
export class CorrelationIdGenerator implements NestMiddleware {
    constructor() {
    }

    use(request: Request, response: Response, next: NextFunction): void {
        const {ip, method, originalUrl, headers, body} = request;
        correlationId = headers['x-syy-correlation-id'];

        if (!correlationId) {
            correlationId = uuid();
            request.headers['x-syy-correlation-id'] = correlationId;
        }

        Logger.log(`Request. url:${originalUrl}, method:${method}, ip:${ip}, body:${JSON.stringify(body)}`, correlationId);

        next();
    }

    getCorrelationId() {
        return correlationId;
    }
}
