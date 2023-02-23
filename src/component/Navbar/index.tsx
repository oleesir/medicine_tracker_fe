import { useRouter } from 'next/router'
import { useState } from "react";


const  Navbar =()=> {
    const router = useRouter();
    const [menuOpen,setMenuOpen]= useState<boolean>(false);

    const pushToLogin = async() => {
        await router.push("/login")
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
                             <button onClick={handleNav}>
                                 <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-[#224559]">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                 </svg>
                             </button>

                         </div>

                     </div>
                     <div className={menuOpen ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#FFF] p-10 ease-out duration-500 z-[1035]" :
                         "fixed left-[-100%] top-0 p-10 ease-out duration-500 z-[1035]"}>
                        <h1>READ</h1>
                         <h1>READ</h1>
                     </div>
                 </div>

             </div>

         )}

     </>

    )
}
export default  Navbar;