import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CorrelationIdGenerator } from 'src/middleware/CorrelationIdGenerator';

const env: string = process.env.NODE_ENV;

@Injectable()
export class MarketCapService {
  constructor(
    private correlationIdGenerator: CorrelationIdGenerator,
    private configService: ConfigService,
  ) {}

  async getMarketCapital(symbol: String): Promise<any> {
    try {
      const url: string = this.configService.get<string>(env)[
        'coinMarket_sandbox_url'
      ]
        ? this.configService.get<string>(env)['coinMarket_sandbox_url']
        : process.env.coinMarket_sandbox_url;

      const coinMarket_key: string = this.configService.get<string>(env)[
        'coinMarket_key'
      ]
        ? this.configService.get<string>(env)['coinMarket_key']
        : process.env.coinMarket_key;

      const respose = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': coinMarket_key,
        },
        params: {
          symbol: symbol,
        },
      });

      if (respose) {
        return respose.data;
      }
    } catch (e) {
      const res = { status: 1 };
      console.error(
        `Error occurred when generating market capital response. error:${e}`,
        '',
        this.correlationIdGenerator.getCorrelationId(),
      );
      return res;
    }
  }
}
