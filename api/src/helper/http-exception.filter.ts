import {ArgumentsHost, Catch, ExceptionFilter, HttpException,} from "@nestjs/common";
import {Response} from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const exceptionResponse: any = exception.getResponse();
        response.status(status).json({
            status: status,
            data: {
                status: ((exceptionResponse && exceptionResponse.code) ? exceptionResponse.code : 1),
                message: ((exceptionResponse && exceptionResponse.title) ? exceptionResponse.title : "Server error"),
                description: ((exceptionResponse && exceptionResponse.message) ? exceptionResponse.message : ["Unexpected error occurred"])
            }
        });
    }
}
