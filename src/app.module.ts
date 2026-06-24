import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthModule } from './modules/auth/auth.module';
import { StorageModule } from './modules/storage/storage.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { FavoritesModule } from './modules/favorites/favorites.module';

@Module({
  imports: [
    DatabaseModule, 
    MenuModule, 
    OrdersModule, 
    AuthModule, 
    StorageModule,
    ReportsModule,
    ReviewsModule,
    FavoritesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
