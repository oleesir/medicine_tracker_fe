import { useState } from "react";
import Calender from "@/component/Calender";


const Home =()=> {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className="flex flex-col px-4 lg:pt-[100px]">
         <div className="w-full flex my-5"><p className="text-xl">Welcome Olisa,</p></div>
            <li className="list-none">
                <div className="flex justify-between bg-amber-500" onClick={() => setIsActive(!isActive)}>
                    <h3>Hello</h3><span>{isActive ? "-" : "+"}</span>
                </div>
                {isActive && <div className="rounded-2xl"><Calender/></div>}
            </li>
        </div>
    )
}
export default Home;