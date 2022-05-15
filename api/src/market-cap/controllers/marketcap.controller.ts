import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseFilters,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helper/http-exception.filter';
import { MarketCapService } from '../services/marketcap.service';

@Controller('marketcap')
export class MarketCapController {
  constructor(private readonly marketcapService: MarketCapService) {}

  @Get('/:tick')
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
  })
  @HttpCode(200)
  async getCapital(@Param('tick') tick: string) {
    const response = await this.marketcapService.getMarketCapital(tick);
    let result: object = {
      status: HttpStatus.OK,
      data: response,
    };
    return result;
  }
}
