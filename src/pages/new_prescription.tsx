import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PrescriptionInputs } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { prescriptionSchema } from "@/schema/prescription";
import { RiArrowDownSLine } from "react-icons/ri";
import Reminder from "@/component/Reminder";


const NewPrescription =()=> {
    // const [reminderOneActive, setReminderOneActive] = useState(false);
    // // const [reminderTwoActive, setReminderTwoActive] = useState(false);
    // // const [reminderThreeActive, setReminderThreeActive] = useState(false);
    // // const [reminderFourActive, setReminderFourActive] = useState(false);

    const {
        handleSubmit,register,
        formState: { errors, isDirty, isValid }
    } = useForm<PrescriptionInputs>({ resolver: yupResolver(prescriptionSchema) });


    const [value, setValue] = useState("1");

    useEffect(()=>{},[value])


    const onSubmitForm = (data:PrescriptionInputs) => {
        console.log(data);

    }
    const handleChange = (e:any) =>{
        setValue(e.target.value);

    }

    return (
        <div className="flex w-full py-4 px-5">
            <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col w-full">
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">Name</label>
                    <input type="text" {...register("name")}   className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg"/>
                    <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.name?.message}</span></div>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div className=" inline-block relative w-1/5">
                        <label className="text-gray-700 mb-2">Dose</label>
                        <div>
                            <select {...register("dose")}  className="w-full py-3 bg-gray-100 pl-6 outline-none rounded-lg appearance-none">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                        <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.dose?.message}</span></div>
                    </div>
                    <div className="inline-block relative w-2/5">
                        <label className="text-gray-700 mb-2">Unit</label>
                        <div>
                            <select {...register("unit")}   className="w-full py-3 bg-gray-100 pl-4 outline-none rounded-lg appearance-none">
                                <option value=""></option>
                                <option value="mg">mg</option>
                                <option value="ml">ml</option>
                                <option value="micrograms">micrograms</option>
                            </select>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                        <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.unit?.message}</span></div>
                    </div>
                    <div className=" inline-block relative w-1/3">
                        <label className="text-gray-700 mb-1">Form</label>
                        <div>
                            <select {...register("form")}   className="w-full py-3 bg-gray-100 pl-4 outline-none rounded-lg appearance-none">
                                <option value="" ></option>
                                <option value="capsule">Capsule</option>
                                <option value="injection">Injection</option>
                                <option value="tablet">Tablet</option>
                                <option value="cream">Cream</option>
                                <option value="drops">Drops</option>
                            </select>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                        <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.form?.message}</span></div>
                    </div>
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">End date</label>
                    <input type="text" {...register("endDate")}  placeholder="YYYY-MM-DD"  className="w-full py-3 bg-gray-100 placeholder:text-gray-500 px-4 outline-none rounded-lg "/>
                    <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.endDate?.message}</span></div>
                </div>

                <div className="inline-block relative mb-5">
                        <label className="text-gray-700 mb-2">Number of intakes a day</label>
                        <select className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg appearance-none" value={value} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                    </div>

                { value === "1" ? (
                    <Reminder/>
                ): null}

                { value === "2" ? (
                    <>
                        <Reminder/>
                        <Reminder/>
                    </>
                    ): null}

                { value === "3" ? (
                        <>
                            <Reminder/>
                            <Reminder/>
                            <Reminder/>
                        </>
                    ): null}


                { value === "4" ? (
                    <>
                        <Reminder/>
                        <Reminder/>
                        <Reminder/>
                        <Reminder/>
                    </>): null}




                <div className="w-full mt-8 flex items-center">
                    <button
                        type="submit"
                        disabled={!isDirty || !isValid}
                        className={!isDirty || !isValid ? "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] focus:outline-none disabled:opacity-25" : "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]"}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
export default NewPrescription;