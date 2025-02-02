import * as Yup from 'yup';
// Validation Schema with Yup
export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
