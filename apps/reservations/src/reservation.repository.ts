import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationDocument } from "./models/reservation.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel('Reservation') // Use 'Reservation' as the model name
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
