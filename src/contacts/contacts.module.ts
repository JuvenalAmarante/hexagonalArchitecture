import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactPrismaRepository } from './gateways/contact-prisma.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    ContactPrismaRepository,
    {
      provide: 'ContactPrismaRepository',
      useExisting: ContactPrismaRepository,
    },
  ],
})
export class ContactsModule {}
