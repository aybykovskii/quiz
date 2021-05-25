export type TSingUpInput = {
  email: string;
  password: string;
};

export type TSignUpResponse = {
  err?: "invalid_params" | "user_already_exists";
};
