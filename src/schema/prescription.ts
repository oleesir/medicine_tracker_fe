import * as yup from 'yup';

export const prescriptionSchema = yup.object({
    name: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, 'Input letters only.')
        .required('First name is required'),
    dose: yup
        .number()
        .required('Required'),
    unit: yup
        .string()
        .required('Required'),
    form: yup
        .string()
        .required('Required'),
       endDate: yup.string()
           .required('Date is required')
           .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Invalid date format'),
});
