export type registerType = {
  id: number;
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

export type recommandationType = {
  what: string;
  who: string;
  why: string;
};
