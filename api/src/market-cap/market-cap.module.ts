import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorrelationIdGenerator } from 'src/middleware/CorrelationIdGenerator';
import { MarketCapController } from './controllers/marketcap.controller';
import { MarketCapService } from './services/marketcap.service';

@Module({
  imports: [],
  controllers: [MarketCapController],
  providers: [ConfigService, MarketCapService, CorrelationIdGenerator],
})
export class MarketCapModule {}
