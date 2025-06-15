import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type JwtPayload = {
  sub: string;
  email?: string;
  name?: string;
  picutre?: null;
  iat?: number;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  // access-token.guard.ts에서 쓰는 이름과 일치해야 함
  'jwt-access-token',
) {
  constructor() {
    super({
      // header에서 bearerToken을 빼서 자동으로 분석해준다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // token expire 무시할것인가?
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH_SECRET!,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
