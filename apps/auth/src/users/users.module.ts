import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from './models/user.schema';
import { UserRepository } from './users.repository';

@Module({
  imports:[DatabaseModule,
    MongooseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),
    ],
  controllers: [UsersController],
  providers: [UsersService,UserRepository]
})
export class UsersModule {}
