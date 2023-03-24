import { useState } from "react";
import Calender from "@/component/Calender";
import Card from "@/component/cards/card";


const Home =()=> {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-col px-4 lg:pt-[100px]">
         <div className="w-full flex my-5"><p className="text-xl">Welcome Olisa,</p></div>
            <li className="list-none">
                <div className="flex justify-between bg-[#539165] rounded-t-lg p-2" onClick={() => setIsActive(!isActive)}>
                    <h3 className="text-[#fff]">Todays date</h3><span>{isActive ? "-" : "+"}</span>
                </div>
                <Calender isActive={isActive}/>
                <div className="mt-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </li>
        </div>
    )
}
export default Home;