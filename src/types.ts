import { Dispatch, SetStateAction } from "react";

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


export type ReminderProps ={
    title:string,
    isActive: boolean,
    setIsActive:Dispatch<SetStateAction<boolean>>,
    initialHour:string,
    setHour:Dispatch<SetStateAction<string>>,
    initialMin:string,
    setMin:Dispatch<SetStateAction<string>>,
    initialDayOrNight:string,
    setDayOrNight:Dispatch<SetStateAction<string>>
}