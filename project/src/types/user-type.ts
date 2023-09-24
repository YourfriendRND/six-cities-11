export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
};

export type UserLogin = {
  email: string;
  password: string;
}

export type CreatedUser = {
  name: string;
  email: string;
  password: string;
  isPro: false;
  avatar?: string;
}
