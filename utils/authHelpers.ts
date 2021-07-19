import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { NextApiResponse } from 'next'
import { ACCESS_TOKEN_EXPIRATION_SEC, HIGHSTREET_REFRESH_COOKIE, REFRESH_TOKEN_EXPIRATION_SEC } from './constants'

export const serializeCookie = (cookie: string, value: string, maxAge: number) =>
  serialize(cookie, value, {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge,
    httpOnly: true,
    path: '/',
  })

export const signToken = (payload: string | object, secret: string, expiresIn?: string | number) =>
  jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn })

export const verifyToken = (token: string, secret: string) => {
  try {
    return { success: true, payload: jwt.verify(token, secret) }
  } catch (e) {
    return { success: false, payload: null }
  }
}

export const getAccessTokenSecret = () => {
  if (process.env.ACCESS_TOKEN_SECRET)
    return process.env.ACCESS_TOKEN_SECRET
  throw new Error('Please define the ACCESS_TOKEN_SECRET environment variable')
}

export const getRefreshTokenSecret = () => {
  if (process.env.REFRESH_TOKEN_SECRET)
    return process.env.REFRESH_TOKEN_SECRET
  throw new Error('Please define the REFRESH_TOKEN_SECRET environment variable')
}

export const signAccessToken = (payload: string | object) => signToken(payload, getAccessTokenSecret(), ACCESS_TOKEN_EXPIRATION_SEC)
export const signRefreshToken = (payload: string | object) => signToken(payload, getRefreshTokenSecret(), REFRESH_TOKEN_EXPIRATION_SEC)

export const setRefreshTokenCookie = (res: NextApiResponse, refreshToken: string) =>
  res.setHeader('Set-Cookie', serializeCookie(HIGHSTREET_REFRESH_COOKIE, refreshToken, REFRESH_TOKEN_EXPIRATION_SEC))
