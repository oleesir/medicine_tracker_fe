import * as yup from 'yup';

export const signupSchema = yup.object({
    firstName: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, 'Input letters only.')
        .required('First name is required'),
    lastName: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, 'Input letters only.')
        .required('Last name is required'),
    email: yup.string().required('Email is Required').email('Invalid email address'),
    callingCode: yup.string().required('Calling code is Required'),
    phoneNumber: yup.string().required('Phone number is required').test('Phone number', 'Must be exactly 10 digits', val => val.length === 10),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters.'),
});
