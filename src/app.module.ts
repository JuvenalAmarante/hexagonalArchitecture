import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { ContactsModule } from './contacts/contacts.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ContactsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
