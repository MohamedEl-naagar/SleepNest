import { Body, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './users/models/user.schema';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDocument>,private JwtService:JwtService) {}

  async signup(body:SigninDto) {
    let userExist = await this.userModel.findOne({email:body.email})
    if(userExist) throw new HttpException("user is already exist",409) ;
    const hash = bcrypt.hashSync(body.password, 5);
    body.password = hash
    return await this.userModel.insertMany(body)
  }

  async signin(body:SigninDto) {
  let userExist = await this.userModel.findOne({email:body.email})
  if(!(userExist&&bcrypt.compareSync(body.password,userExist.password)))throw new HttpException("incorrect email or password",409) ;
  let token= await this.JwtService.sign({name:userExist.email},{secret:"nest"})
  return {token}
}

}
