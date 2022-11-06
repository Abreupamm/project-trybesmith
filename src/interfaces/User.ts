export interface User {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Token {
  token: string,
}

export interface Login {
  username: string,
  password: string,
}