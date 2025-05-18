export type User = {
  email: string;
  password: string;
  id: string;
  createdAt: string;
};

export type NewUser = Omit<User, 'id' | 'createdAt'>;
