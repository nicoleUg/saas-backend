import { Module } from '@nestjs/common';
import { MenuController } from './controllers/menu.controller';
import { MenuService } from './services/menu.service';
import { MenuRepository } from './repositories/menu.repository';
import { StorageModule } from '../storage/storage.module';
@Module({
  imports: [StorageModule],
  controllers: [MenuController],
  providers: [MenuService, MenuRepository],
})
export class MenuModule {}