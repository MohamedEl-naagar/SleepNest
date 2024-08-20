import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SigninDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;
}
