export type registerType = {
  pseudo: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
};

export type loginType = {
  email: string;
  password: string;
  userId: number;
};
