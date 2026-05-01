import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto) {
    // Mock logic: Always succeeds for demo purposes
    return {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      user: {
        id: '1',
        email: loginDto.email,
        role: 'INTERN'
      }
    };
  }

  async register(registerDto: RegisterDto) {
    return {
      id: '2',
      email: registerDto.email,
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
    };
  }
}
