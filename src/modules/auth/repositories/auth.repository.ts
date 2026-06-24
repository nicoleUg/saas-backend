import { Injectable } from '@nestjs/common';
import { createUser, getUserByEmail } from '@dataconnect/admin-generated';

@Injectable()
export class AuthRepository {
  
  async findByEmail(email: string) {
    const response = await getUserByEmail({ email });
    return response.data.users[0] || null; 
  }

  async createUser(email: string, passwordHash: string, name: string, role?: string) {
    const response = await createUser({ email, passwordHash, name, role });
    return response.data;
  }
}