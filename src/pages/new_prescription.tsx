import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Reminder from "@/component/Reminder";
import Calender from "@/component/Calender";
import { format, isAfter, startOfToday } from "date-fns";
import { SlCalender } from "react-icons/sl";



const NewPrescription =()=> {
    let today = startOfToday()
    const [reminderOneActive, setReminderOneActive] = useState(false);
    const [reminderOneHour, setReminderOneHour] = useState("08");
    const [reminderOneMin, setReminderOneMin] = useState("00");
    const [reminderOneDayOrNight, setReminderOneDayOrNight] = useState("AM");
    const [reminderTwoActive, setReminderTwoActive] = useState(false);
    const [reminderTwoHour, setReminderTwoHour] = useState("12");
    const [reminderTwoMin, setReminderTwoMin] = useState("00");
    const [reminderTwoDayOrNight, setReminderTwoDayOrNight] = useState("PM");
    const [reminderThreeActive, setReminderThreeActive] = useState(false);
    const [reminderThreeHour, setReminderThreeHour] = useState("04");
    const [reminderThreeMin, setReminderThreeMin] = useState("00");
    const [reminderThreeDayOrNight, setReminderThreeDayOrNight] = useState("PM");
    const [value, setValue] = useState("1");
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{},[value]);

    const handleChange = (e:any) =>{
        setValue(e.target.value);
    }

    const handleBtn = () =>{
        setIsActive((isActive)=>!isActive);
    }

    const handleDate = ()=>{
        if(isAfter(selectedDate,today)){
            return format(selectedDate, 'yyyy-MM-dd')
        }
        return format(today, 'yyyy-MM-dd')
    }


    return (
        <div className="flex w-full py-4 px-5">
            <form className="flex flex-col w-full">
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">Name</label>
                    <input type="text"  className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg"/>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div className=" inline-block relative w-1/5">
                        <label className="text-gray-700 mb-2">Dose</label>
                        <div>
                            <select  className="w-full py-3 bg-gray-100 pl-6 outline-none rounded-lg appearance-none">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>

                    </div>
                    <div className="inline-block relative w-2/5">
                        <label className="text-gray-700 mb-2">Unit</label>
                        <div>
                            <select  className="w-full py-3 bg-gray-100 pl-4 outline-none rounded-lg appearance-none">
                                <option value="micrograms">micrograms</option>
                                <option value="mg">mg</option>
                                <option value="ml">ml</option>
                            </select>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                    </div>
                    <div className=" inline-block relative w-1/3">
                        <label className="text-gray-700 mb-1">Form</label>
                        <div>
                            <select className="w-full py-3 bg-gray-100 pl-4 outline-none rounded-lg appearance-none">
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
                    </div>
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">End date</label>
                    <div className="rounded-lg bg-gray-100">
                        <button type="button" onClick={handleBtn} className="w-full flex justify-between py-3 bg-gray-100 placeholder:text-gray-500 px-4 outline-none text-left rounded-lg ">
                            <p>{handleDate()}</p>
                            <SlCalender fontSize={24}/>
                        </button>
                        <div className={ isActive ? "ease-in duration-500 max-h-[500px] overflow-hidden" : "overflow-hidden ease-in duration-500 max-h-0"}>
                            <Calender handleCalender={setIsActive} setSelectedDate={setSelectedDate}/>
                        </div>
                    </div>


                </div>



                <div className="inline-block relative mb-5">
                        <label className="text-gray-700 mb-2">Number of intakes a day</label>
                        <select className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg appearance-none" value={value} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                            <RiArrowDownSLine/>
                        </div>
                    </div>

                { value === "1" ? (
                    <Reminder
                        initialHour={reminderOneHour}
                        setHour={setReminderOneHour}
                        initialMin={reminderOneMin}
                        setMin={setReminderOneMin}
                        initialDayOrNight={reminderOneDayOrNight}
                        setDayOrNight={setReminderOneDayOrNight}
                        title="Reminder 1"
                        isActive={reminderOneActive}
                        setIsActive={setReminderOneActive}
                    />
                ):
                    null}

                { value === "2" ? (
                    <>
                        <Reminder
                            initialHour={reminderOneHour}
                            setHour={setReminderOneHour}
                            initialMin={reminderOneMin}
                            setMin={setReminderOneMin}
                            initialDayOrNight={reminderOneDayOrNight}
                            setDayOrNight={setReminderOneDayOrNight}
                            title="Reminder 1"
                            isActive={reminderOneActive}
                            setIsActive={setReminderOneActive}/>
                        <Reminder
                            initialHour={reminderTwoHour}
                            setHour={setReminderTwoHour}
                            initialMin={reminderTwoMin}
                            setMin={setReminderTwoMin}
                            initialDayOrNight={reminderTwoDayOrNight}
                            setDayOrNight={setReminderTwoDayOrNight}
                            title="Reminder 2"
                            isActive={reminderTwoActive}
                            setIsActive={setReminderTwoActive}/>
                    </>
                    ): null}

                { value === "3" ? (
                        <>
                            <Reminder
                                initialHour={reminderOneHour}
                                setHour={setReminderOneHour}
                                initialMin={reminderOneMin}
                                setMin={setReminderOneMin}
                                initialDayOrNight={reminderOneDayOrNight}
                                setDayOrNight={setReminderOneDayOrNight}
                                title="Reminder 1"
                                isActive={reminderOneActive}
                                setIsActive={setReminderOneActive}/>

                            <Reminder
                                initialHour={reminderTwoHour}
                                setHour={setReminderTwoHour}
                                initialMin={reminderTwoMin}
                                setMin={setReminderTwoMin}
                                initialDayOrNight={reminderTwoDayOrNight}
                                setDayOrNight={setReminderTwoDayOrNight}
                                title="Reminder 2"
                                isActive={reminderTwoActive}
                                setIsActive={setReminderTwoActive}/>

                            <Reminder
                                initialHour={reminderThreeHour}
                                setHour={setReminderThreeHour}
                                initialMin={reminderThreeMin}
                                setMin={setReminderThreeMin}
                                initialDayOrNight={reminderThreeDayOrNight}
                                setDayOrNight={setReminderThreeDayOrNight}
                                title="Reminder 3"
                                isActive={reminderThreeActive}
                                setIsActive={setReminderThreeActive}/>
                        </>
                    ): null}

                <div className="w-full mt-8 flex items-center">
                    <button
                        type="button"
                        className= "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]"
                    >
                        Done
                    </button>
                </div>
            </form>
        </div>
    )
}
export default NewPrescription;