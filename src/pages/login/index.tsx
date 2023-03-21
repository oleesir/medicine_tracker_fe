import { useRouter } from "next/router";
import { LoginInputs } from "@/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/login";


const Login =()=> {

    const router = useRouter();

    const {
        handleSubmit,register,
        formState: { errors, isDirty, isValid }
    } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });


    const onSubmitForm = (data:LoginInputs) => {
        console.log(data);

    }

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
                    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col">
                        <div className="mb-5">
                            <label className="text-gray-700 mb-2">Email</label>
                            <input type="email" {...register("email")}  className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                            <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.email?.message}</span></div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="text-gray-700 mb-2">Password</label>
                            <input type="password" {...register("password")} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                            <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.password?.message}</span></div>
                        </div>
                        <div className="flex w-full justify-center mt-3"><p className="text-gray-700 text-sm">If you dont have an account <span onClick={pushToSignup} className="text-[#224559] cursor-pointer">Signup</span></p></div>
                        <div className="w-full mt-8 flex items-center">
                            <button
                                type="submit"
                                disabled={!isDirty || !isValid}
                                className={!isDirty || !isValid ? "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] focus:outline-none disabled:opacity-25" : "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]"}>
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