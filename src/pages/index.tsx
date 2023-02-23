import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Home() {
    const router = useRouter();

    const pushToSignup = async() => {
       await router.push("/signup")
    }
  return (
      <>
          <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
             <div className="flex flex-col bg-[#224559] pt-[50px] pl-[10px] pr-[10px] pb-[50px] clip-path-polygon-[_0_0,_100%_0%,_100%_90%,_0_76%]
              lg:clip-path-polygon-[_0_0,_100%_0%,_100%_78%,_0_51%] lg:pt-[100px]
              lg:pl-[50px] lg:pr-[50px]
               ">
                 <p className=" lg:text-2xl text-[#fff] mb-[20px] text-lg">RemindMe is a task management web app developed by Olive Inc. The platforms that allows users to create lists of reminders for medications and set notifications for themselves.</p>

                 <div className="hidden lg:block">
                     <button onClick={pushToSignup} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#224559] rounded-md hover:bg-white group  border-solid border-2">
                         <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-md"></span>
                         <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#224559] text-1xl">Sign up</span>
                     </button>
                 </div>

             </div>
              <div className="bg-[#FCFCFC]  lg:pt-[80px]">
                  <Image src='/undraw_mobile.png' alt='undraw'  width={1000} height={1000} quality={100}/>
              </div>
          </div>
      </>

  )
}
