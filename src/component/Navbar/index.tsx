import { useRouter } from 'next/router'
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const  Navbar =()=> {
    const router = useRouter();
    const [nav, setNav] = useState(false);

    const pushToLogin = async() => {
        await router.push("/login");
    }

    const pushToSignup = async() => {
        await router.push("/signup");
    }

    const handleNav = () => {
        setNav(!nav);
    };

    return (
     <>
         {router.pathname === "/signup" || router.pathname === "/login" ? null :(
             <div className="bg-[#FFF] pt-[10px] pb-[10px] z-[1035]">
                 <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex justify-between py-4 items-center  mb-[10px]" >
                         <div className="flex">
                             <div>
                                 <p className=" text-2xl lg:text-3xl">Remindme</p>
                             </div>
                         </div>
                         <div className="hidden lg:block">
                             <button
                                 onClick={pushToLogin}
                                 type="button"
                                 className="inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]">
                                 Login
                             </button>

                             <button
                                 onClick={pushToSignup}
                                 type="button"
                                 className="inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] ml-4">
                                 Signup
                             </button>
                         </div>
                         <div onClick={handleNav} className='flex lg:hidden z-30'>
                             {nav ? (
                                 <AiOutlineClose size={28} color={'#fff'} />
                             ) : (
                                 <AiOutlineMenu size={28}  color={'#000'}/>
                             )}
                         </div>
                     </div>

                         {/* Mobile Menu */}
                         <div
                             className={
                                 nav
                                     ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-20'
                                     : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-20'
                             }
                         >
                             <ul>
                                 <li onClick={handleNav} className='p-4 text-4xl text-[#fff] hover:text-gray-500'>
                                     <Link href='/'>Home</Link>
                                 </li>
                                 <li onClick={handleNav} className='p-4 text-4xl text-[#fff] hover:text-gray-500'>
                                     <Link href='/signup'>Signup</Link>
                                 </li>
                                 <li onClick={handleNav} className='p-4 text-4xl text-[#fff] hover:text-gray-500'>
                                     <Link href='/login'>Login</Link>
                                 </li>

                             </ul>
                         </div>
                 </div>

             </div>

         )}

     </>

    )
}
export default  Navbar;