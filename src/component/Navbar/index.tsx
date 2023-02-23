import { useRouter } from 'next/router'
import { useState } from "react";


const  Navbar =()=> {
    const router = useRouter();
    const [menuOpen,setMenuOpen]= useState<boolean>(false);

    const pushToLogin = async() => {
        await router.push("/login");
    }

    const routeToLogin = async() => {
        await router.push("/login");
        setMenuOpen(!menuOpen);
    }
    const pushToSignup = async() => {
        await router.push("/signup");
        setMenuOpen(!menuOpen);
    }

    const handleNav = () => {
       setMenuOpen(!menuOpen);
    }

    return (
     <>

         {router.pathname === "/signup" || router.pathname === "/login" ? null :(
             <div className="bg-[#FFF] pt-[10px] pb-[10px] z-[1035]">
                 <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex justify-between h-16 items-center" >
                         <div className="flex">
                             <div>
                                 <p className="text-3xl">Remindme</p>
                             </div>
                         </div>
                         <div className="hidden lg:block">
                             <button onClick={pushToLogin}  className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#224559] rounded-md hover:bg-white group">
                                 <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-md"></span>
                                 <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#224559]">Login</span>
                             </button>
                         </div>
                         <div className="block lg:hidden">
                             <button onClick={ handleNav}>
                                 <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-[#224559]">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                 </svg>
                             </button>

                         </div>

                     </div>

                     <>
                         { !menuOpen && <div onClick={handleNav} className="fixed inset-0 bg-gray-800 opacity-75 ease-in-out duration-300"></div>}
                         <div
                             className={`top-0 left-0 w-60 bg-[#234559]  p-5  text-white fixed h-full z-40  ease-in-out duration-300 ${
                                 menuOpen ? "translate-x-[-100%] " : "translate-x-0"
                             }`}
                         >
                             <div className="flex ">
                                 <div className="w-full mt-20">
                                     <button
                                         onClick={routeToLogin}
                                         className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-[#fff] hover:text-[#234559] ">
                                         Login
                                     </button>
                                     <button
                                         onClick={pushToSignup}
                                         className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-[#fff] hover:text-[#234559] ">
                                         Signup
                                     </button>
                                 </div>
                             </div>
                         </div>
                     </>

                 </div>

             </div>

         )}

     </>

    )
}
export default  Navbar;