export type LoginPayload = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  dateOfBirth: string | null;
  type: string;
  status: string;
  bio: string | null;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
};

export type LoginResponse = {
  data: {
    user: User;
    tokens: Tokens;
  };
};
