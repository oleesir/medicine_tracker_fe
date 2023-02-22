
export default function Home() {
  return (
      <>
          <div className="grid grid-cols-2 gap h-screen bg-[#224559] clip-path-polygon-[_0_0,_100%_0%,_100%_100%,_0%_55%]">
             <div className=" flex pt-[300px] pl-[100px] pr-[100px] pb-[0] flex-col">
                 <p className="text-2xl text-[#fff] mb-[50px]">RemindMe is a task management web app developed by Olive Inc. The platforms that allows users to create lists of medications and set notifications for themselves.</p>
                 <div className="border-solid">
                     <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#224559] rounded-md hover:bg-white group  border-solid border-2">
                         <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-md"></span>
                         <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#224559] text-1xl">Sign up</span>
                     </button>
                 </div>

             </div>
              <div className="bg-[#FFF] pt-[150px]">
                  <img src={'./undraw_mobile.png'}/>
              </div>
          </div>
      </>

  )
}
