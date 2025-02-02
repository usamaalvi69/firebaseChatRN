
export interface AuthValues {
  email: string;
  password: string;
}

export interface FormProps {
  onSubmit: (values: AuthValues, actions: any) => Promise<void>;
  buttonText: string;
}