import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from "@/schema/signup";
import { SignupInputs } from "@/types";


const Signup =()=> {
    const router = useRouter();
    const {
        handleSubmit,register,
        formState: { errors, isDirty, isValid }
    } = useForm<SignupInputs>({ resolver: yupResolver(signupSchema) });

    const onSubmitForm = (data:SignupInputs) => {
        console.log(data);

    }
    const pushToHome = async() => {
        await router.push("/")
    }

    const pushToLogin = async() => {
        await router.push("/login")
    }

    return (
            <div className="flex bg-[#FCFCFC] h-screen justify-center pt-[30px] px-[10px] md:pt-[100px]">
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col w-full border bg-[#FFF] rounded-md py-8 px-4 md:px-8  md:w-3/5 lg:w-1/3">
                        <div className="flex flex-col w-full justify-center mb-5 text-center">
                            <button onClick={pushToHome}>
                                <p className="text-2xl mb-3">Remindme</p>
                            </button>
                            <p className="text-sm">Create an account,lets get started.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col">
                            <div className="mb-5">
                                <label className="text-gray-700 mb-2">Firstname</label>
                                <input type="text" {...register("firstName")} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none "/>
                                <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>

                            </div>
                            <div className="mb-5">
                                <label className="text-gray-700 mb-2">Lastname</label>
                                <input type="text" {...register("lastName")} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                                <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.lastName?.message}</span></div>
                            </div>
                            <div className="mb-5">
                                <label className="text-gray-700 mb-2">Email</label>
                                <input type="email" {...register("email")}  className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                                <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.email?.message}</span></div>
                            </div>
                            <div className="mb-5">
                                <label className="text-gray-700 mb-2">Phone number</label>
                                <div className="w-full flex flex-row items-center">
                                    <div className="w-1/4 flex flex-col">
                                        <select {...register("callingCode")} className="w-full py-2.5 bg-gray-100 text-gray-500 px-1 outline-none">
                                            <option value="" ></option>
                                            <option value="+234">+234</option>
                                            <option value="+22">+22</option>
                                        </select>
                                        <div className="h-1"> {errors.callingCode && <span className="text-xs text-[#FF0303]">required</span>}</div>
                                    </div>
                                  <div className="w-3/4 flex flex-col ml-2">
                                      <input {...register("phoneNumber")}  className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                                      <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.phoneNumber?.message}</span></div>
                                  </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <label className="text-gray-700 mb-2">Password</label>
                                <input type="password" {...register("password")} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                                <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.password?.message}</span></div>
                            </div>
                            <div className="flex w-full justify-center mt-3"><p className="text-gray-700 text-sm">If you already have an account <span onClick={pushToLogin} className="text-[#224559] cursor-pointer">Login</span></p></div>
                            <div className="w-full mt-8 flex items-center">
                                <button
                                    type="submit"
                                    disabled={!isDirty || !isValid}
                                    className={ !isDirty || !isValid ? "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] focus:outline-none disabled:opacity-25" : "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]"}>
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