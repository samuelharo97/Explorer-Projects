export interface UserEntity {
  name: string;
  email: string;
  avatar: string;
  password: string;
  salt: string;
}

export interface Credentials {
  email: string;
  password: string;
}
