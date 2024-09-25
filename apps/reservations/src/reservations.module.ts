  import { Inject, Module } from '@nestjs/common';
  import { MongooseModule } from '@nestjs/mongoose';
  import { ReservationsService } from './reservations.service';
  import { ReservationsController } from './reservations.controller';
  import { ReservationSchema } from './models/reservation.schema'; // Remove ReservationDocument import if not used elsewhere
  import { ReservationsRepository } from './reservation.repository';
  import { DatabaseModule, LoggerModule } from '@app/common';
  import { ConfigModule, ConfigService } from '@nestjs/config';
  import * as Joi from 'joi';

  @Module({
    imports: [
      DatabaseModule,
      MongooseModule.forFeature([
        { name: 'Reservation', schema: ReservationSchema }, // Use the correct model name
      ]),
      LoggerModule,
      ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
            MONGODB_URI: Joi.string().required(),
        }),

      }),
      
    ],
    controllers: [ReservationsController],
    providers: [ReservationsService, ReservationsRepository],
  })
  export class ReservationsModule {}
