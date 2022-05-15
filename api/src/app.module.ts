import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import configuration from "../config/configuration";
import { CorrelationIdGenerator } from "./middleware/CorrelationIdGenerator";
import { MarketCapModule } from './market-cap/market-cap.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        MarketCapModule,
    ],
    providers: [
      CorrelationIdGenerator
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CorrelationIdGenerator)
            .forRoutes('*');
    }
}
