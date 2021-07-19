import { Nullable } from './types'

let accessToken = ''

export const getAccessToken = () => accessToken
export const setAccessToken = (token: string) => {
  accessToken = token
}

export const requestPost = async (
  input: RequestInfo,
  withAuth: boolean,
  body?: Nullable<BodyInit> | object,
  headers?: HeadersInit,
) =>
  fetch(input, {
    method: 'POST',
    body: typeof body === 'object' && body !== null ? JSON.stringify(body) : body,
    headers: {
      'content-type': 'application/json',
      ...(withAuth ? { 'authorization': `Bearer ${getAccessToken()}` } : {}),
      ...headers,
    },
  })

export const refreshAuth = (walletAddress: string) =>
  requestPost('/api/auth/refresh', false, JSON.stringify({ walletAddress }))

export const withRefresh = async (
  request: () => Promise<Response>,
  walletAddress: string,
  onStatus: number[] = [401],
) => {
  const response = await request()
  if (onStatus.includes(response.status)) {
    const refreshResponse = await refreshAuth(walletAddress)
    if (refreshResponse.status === 200) {
      const { accessToken: token } = await refreshResponse.json() as { accessToken: string }
      setAccessToken(token)
      return request()
    }
  }
  return response
}
