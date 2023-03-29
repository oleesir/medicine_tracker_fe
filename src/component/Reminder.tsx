import {useState} from "react";
import Image from "next/image";
import {BsThreeDotsVertical} from "react-icons/bs";

import { RiArrowDownSLine } from "react-icons/ri";

const  Reminder =()=> {
    const [reminderOneActive, setReminderOneActive] = useState(false);

    return (
        <div className="mb-5">
                    <div className="flex justify-between bg-gray-100 rounded-t-lg py-4 px-2 items-center" onClick={() => setReminderOneActive(!reminderOneActive)}>
                        <p>Reminder 1</p><span>10:00AM</span>
                    </div>
                    <div className={ reminderOneActive ? "ease-in duration-500 max-h-[500px] overflow-hidden" : "overflow-hidden ease-in duration-500 max-h-0"}>
                        <div className="mt-5">
                            <div className="flex justify-between">
                                <div className="inline-block relative w-1/4">
                                    <select  className="w-full py-3 bg-gray-100 px-3 outline-none rounded-lg appearance-none">
                                        <option value="" ></option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-2 flex top-1 items-center text-gray-700">
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>

                                <div className="inline-block relative w-1/4">
                                    <select  className="w-full py-3 bg-gray-100 px-3 outline-none rounded-lg appearance-none">
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
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-2 flex top-1 items-center text-gray-700">
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>
                                <div className="inline-block relative w-1/4">
                                    <select  className="w-full py-3 bg-gray-100 pl-3 outline-none rounded-lg appearance-none">
                                        <option value="" ></option>
                                        <option value="1">AM</option>
                                        <option value="2">PM</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-2 flex top-1 items-center text-gray-700">
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


    )
}
export default Reminder;