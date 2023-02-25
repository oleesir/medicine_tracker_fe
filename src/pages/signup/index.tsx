import { useRouter } from "next/router";

const Signup =()=> {

    const router = useRouter();
    const pushToHome = async() => {
        await router.push("/")
    }

    const pushToLogin = async() => {
        await router.push("/login")
    }

    return (
            <div className="flex bg-[#FCFCFC] h-screen justify-center pt-[30px] px-[15px] md:pt-[100px]">
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col w-full border bg-[#FFF] rounded-md py-8 px-4 md:px-8  md:w-3/5 lg:w-1/3">
                        <div className="flex flex-col w-full justify-center mb-5 text-center">
                            <button onClick={pushToHome}>
                                <p className="text-3xl mb-3">Remindme</p>
                            </button>
                            <p className="text-sm">Create an account,lets get started.</p>
                        </div>
                        <form className="flex flex-col">
                            <label className="text-gray-700 mb-2">Firstname</label>
                            <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                            <label className="text-gray-700 mb-2">Lastname</label>
                            <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                            <label className="text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                            <label className="text-gray-700 mb-2">Phone number</label>
                            <div className="mb-3 xl:w-full flex flex-row ">
                                <select data-te-select-init="" className="w-1/4 py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 w">
                                    <option value="+1">+1</option>
                                    <option value="+234">+234</option>
                                    <option value="+22">+22</option>
                                </select>
                                <input className="w-3/4 ml-2 py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                            </div>
                            <label className="text-gray-700 mb-2">Password</label>
                            <input type="password" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                            <div className="flex w-full justify-center mt-3"><p className="text-gray-700 text-sm">If you already have an account <span onClick={pushToLogin} className="text-[#224559] cursor-pointer">Login</span></p></div>
                            <div className="w-full mt-8">
                                <button
                                    type="button"
                                    className="w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] ml-4">
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
    )
}
export default Signup;