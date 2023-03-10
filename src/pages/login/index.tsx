import { useRouter } from "next/router";

const Login =()=> {

    const router = useRouter();

    const pushToSignup = async() => {
        await router.push("/signup")
    }

    const pushToHome = async() => {
        await router.push("/")
    }


    return (
        <div className="flex bg-[#FCFCFC] justify-center pt-[80px] px-[10px] h-screen lg:pt-[100px]">
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col w-full border bg-[#FFF] rounded-md py-8 px-4  md:px-8 md:w-3/5 lg:w-1/3">
                    <div className="flex flex-col text-center w-full justify-center mb-5">
                        <button onClick={pushToHome}>
                            <p className="text-2xl mb-3">Remindme</p>
                        </button>
                        <p className="text-sm">Welcome back please enter your details.</p>
                    </div>
                    <form className="flex flex-col">
                        <label className="text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                        <label className="text-gray-700 mb-2">Password</label>
                        <input type="password" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"/>
                        <div className="flex w-full justify-center mt-3"><p className="text-gray-700 text-sm">If you dont have an account <span onClick={pushToSignup} className="text-[#224559] cursor-pointer">Signup</span></p></div>
                        <div className="w-full mt-8 flex items-center">
                            <button
                                type="button"
                                className="w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login;