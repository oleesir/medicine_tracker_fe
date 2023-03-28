import { useState } from "react";
import { useRouter } from "next/router";
import Calender from "@/component/Calender";
import Card from "@/component/cards/card";
import { RiArrowDownSLine, RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";



const Home =()=> {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const routeToNewPrescription = async() => {
        await router.push("/new_prescription")
    }

    return (
        <div className="flex flex-col px-4 lg:pt-[100px]">
         <div className="w-full flex my-5 justify-between items-center">
             <p className="text-xl">Welcome Olisa,</p>
             <button className="text-xl py-2 px-4 rounded-lg flex items-center bg-[#539165]" onClick={routeToNewPrescription}> <MdOutlineAdd fontSize={25} color={"#FFF"}/><p className="text-[#fff]">New</p></button>
         </div>
            <div className="list-none">
                <div className="flex justify-between bg-[#539165] rounded-t-lg py-4 px-2 items-center" onClick={() => setIsActive(!isActive)}>
                    <p className="text-[#fff]">Todays date</p><span>{isActive ? <RiArrowDownSLine fontSize={25} color={"#FFF"} /> : <RiArrowLeftSLine fontSize={25} color={"#FFF"}/> }</span>
                </div>
                <Calender isActive={isActive}/>
                <div className="w-full flex justify-end mt-4"></div>
                <div className="mt-4">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}
export default Home;