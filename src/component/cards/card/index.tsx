import { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";




const  Card =()=> {
    const [open, setOpen] = useState(false);

    const handleChange = () =>{
        setOpen(!open);
    }

    return (
   <div className="w-full flex rounded-xl drop-shadow-xl py-5 px-3 border-2 bg-[#fff] mb-3 items-center justify-between">
       <div className="flex items-center">
           <div className="w-12 h-12 mr-2"><Image src='/ointiment.png' alt='undraw'  quality={10} width={200} height={100}/></div>
           <div>
               <p className="text-sm mb-1">Omeprazole(250mg)</p>
               <p className="text-xs text-[#73777B]">1 capsule | 4 times</p>
           </div>
       </div>
            <div className="relative">
                <button onClick={handleChange}>
                    <BsThreeDotsVertical fontSize={25}/>
                </button>
                {open ? <div className="absolute bg-[#FFF] right-7 -top-1  w-20 rounded-lg drop-shadow-xl z-40 p-3">
                    <button className="mb-2 text-sm" onClick={handleChange}>Edit</button>
                    <button className="text-sm" onClick={handleChange}>Delete</button>
                </div> : null}
            </div>


   </div>
    )
}
export default Card;