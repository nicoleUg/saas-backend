export class RegisterDto {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export class LoginDto {
  email: string;
  password: string;
}