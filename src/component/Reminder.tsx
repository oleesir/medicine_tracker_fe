import { Dispatch, SetStateAction } from "react";
import { BsDot } from "react-icons/bs";
import { ReminderProps } from "@/types";


const  Reminder =({ title, isActive, setIsActive, initialHour, setHour, initialMin, setMin, initialDayOrNight, setDayOrNight }:ReminderProps)=> {


    return (
        <div className="mb-5 bg-gray-100 rounded-lg">
                    <div className="flex justify-between py-4 px-2 items-center" onClick={() => setIsActive(!isActive)}>
                        <p>{title}</p><span>{`${initialHour}:${initialMin} ${initialDayOrNight}`}</span>
                    </div>

                    <div className={ isActive ? " ease-in duration-300 max-h-[100px] overflow-hidden" : "overflow-hidden ease-in duration-300 max-h-0"}>
                        <div className=" py-5 px-20">
                            <div className="flex justify-between">
                                <div className="w-full">
                                    <select value={initialHour}
                                            defaultValue={initialHour}
                                            onChange={(e:any) => setHour(e.target.value)}  className="w-full p-3 p bg-[#FFF] outline-none rounded-l-lg appearance-none text-2xl">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08" >08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="flex flex-col items-center bg-[#FFF] justify-center">
                                    <BsDot fontSize={15}/>
                                    <BsDot fontSize={15}/>
                                </div>

                                <div className="w-full">
                                    <select
                                        value={initialMin}
                                        defaultValue={initialMin}
                                        onChange={(e:any) => setMin(e.target.value)} className="w-full p-3 bg-[#FFF] outline-none appearance-none text-2xl">
                                        <option value="" ></option>
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                    </select>

                                </div>
                                <div className=" w-full">
                                    <select value={initialDayOrNight}
                                            defaultValue={initialMin}
                                            onChange={(e:any) => setDayOrNight(e.target.value)} className="w-full p-3 bg-[#FFF]  outline-none  rounded-r-lg appearance-none text-2xl">
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
    )
}
export default Reminder;