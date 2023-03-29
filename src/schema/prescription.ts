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
    reminderOneHours: yup
        .string()
        .required('Required'),
    reminderOneMins: yup
        .string()
        .required('Required'),
    reminderOneAmOrPm: yup
        .string()
        .required('Required'),
    reminderTwoHours: yup
        .string()
        .required('Required'),
    reminderTwoMins: yup
        .string()
        .required('Required'),
    reminderTwoAmOrPm: yup
        .string()
        .required('Required'),
    reminderThreeHours: yup
        .string()
        .required('Required'),
    reminderThreeMins: yup
        .string()
        .required('Required'),
    reminderThreeAmOrPm: yup
        .string()
        .required('Required'),
    reminderFourHours: yup
        .string()
        .required('Required'),
    reminderFourMins: yup
        .string()
        .required('Required'),
    reminderFourAmOrPm: yup
        .string()
        .required('Required'),
       endDate: yup.string()
           .required('Date is required')
           .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Invalid date format'),
});
