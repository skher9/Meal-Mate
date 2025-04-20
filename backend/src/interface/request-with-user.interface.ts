import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    id: number;
    // Optional: Add more user properties here if needed
    // email?: string;
    // name?: string;
  };
}
