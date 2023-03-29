
export  type SignupInputs = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    callingCode: string,
    password: string
};

export type LoginInputs = {
    email: string,
    password: string
};


export type PrescriptionInputs = {
    name: string,
    dose: number,
    unit: string,
    form: string,
    endDate: string,
};