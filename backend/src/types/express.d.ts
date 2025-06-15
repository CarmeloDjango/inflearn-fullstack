// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Express } from 'express';

type JwtPayload = {
  sub: string;
  email: string;
  name?: string;
  picture?: null;
  iat?: number;
};

declare global {
  // Express.Usr type 재설정
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends JwtPayload {}
  }
}
