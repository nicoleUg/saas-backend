import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [DatabaseModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
