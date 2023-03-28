import { RiArrowDownSLine } from "react-icons/ri";

const NewPrescription =()=> {

    return (
        <div className="flex w-full border-2 py-4 px-5">
            <form className="flex flex-col w-full">
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">Name</label>
                    <input type="text"  className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg text-sm"/>
                    {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                </div>



                <div className="flex justify-between items-center mb-5">
                    <div className="w-1/4">
                        <label className="text-gray-700 mb-2">Dose</label>
                        <div>
                            <select  className="w-full py-3 bg-gray-100 px-1 outline-none rounded-lg appearance-none">
                                <option value=""></option>
                                <option value="+234">1</option>
                                <option value="+22">2</option>
                                <option value="+22">3</option>
                            </select>
                        </div>

                        {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                    </div>


                    <div className="w-1/3">
                        <label className="text-gray-700 mb-2">Unit</label>
                        <div>
                            <select  className="w-full py-3 bg-gray-100 pl-0.5 outline-none rounded-lg">
                                <option value=""></option>
                                <option value="+234">mg</option>
                                <option value="+22">ml</option>
                                <option value="+22">micrograms</option>
                            </select>
                        </div>

                        {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                    </div>


                    <div className="w-1/3">
                        <label className="text-gray-700 mb-1">Form</label>
                        <div>
                            <select  className="w-full py-3 bg-gray-100 px-1 outline-none rounded-lg">
                                <option value="" ></option>
                                <option value="+234">Capsule</option>
                                <option value="+22">Injection</option>
                                <option value="+22">Tablet</option>
                                <option value="+22">Cream</option>
                                <option value="+22">Drops</option>
                            </select>

                        </div>

                        {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                    </div>
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">End date</label>
                    <input type="text" placeholder="YYYY-MM-DD"  className="w-full py-3 bg-gray-100 placeholder:text-gray-500 px-4 outline-none rounded-lg "/>
                    {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                </div>
                <div className="inline-block relative mb-5">
                    <label className="text-gray-700 mb-2">Number of intakes a day</label>
                    <select  className="w-full py-3 bg-gray-100 px-5 outline-none rounded-lg appearance-none">
                        <option value="" ></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-2 flex top-6 items-center text-gray-700">
                        <RiArrowDownSLine/>
                    </div>
                    {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">End date</label>
                    <input type="text" placeholder="YYYY-MM-DD"  className="w-full py-3 bg-gray-100 placeholder:text-gray-500 px-5 outline-none rounded-lg "/>
                    {/*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*/}
                </div>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2">Reminder 1</label>
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

                {/*<div className="mb-5">*/}
                {/*    <label className="text-gray-700 mb-2">Reminder 2</label>*/}
                {/*    <input type="text" placeholder="YYYY-MM-DD"  className="w-full py-2 bg-gray-100 placeholder:text-gray-500 px-5 outline-none rounded-lg "/>*/}
                {/*    /!*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*!/*/}
                {/*</div>*/}
                {/*<div className="mb-5">*/}
                {/*    <label className="text-gray-700 mb-2">Reminder 3</label>*/}
                {/*    <input type="text" placeholder="YYYY-MM-DD"  className="w-full py-2 bg-gray-100 placeholder:text-gray-500 px-5 outline-none rounded-lg "/>*/}
                {/*    /!*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*!/*/}
                {/*</div>*/}

                {/*<div className="mb-5">*/}
                {/*    <label className="text-gray-700 mb-2">Reminder 4</label>*/}
                {/*    <input type="text" placeholder="YYYY-MM-DD"  className="w-full py-2 bg-gray-100 placeholder:text-gray-500 px-5 outline-none rounded-lg "/>*/}
                {/*    /!*<div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.firstName?.message}</span></div>*!/*/}
                {/*</div>*/}

            </form>
        </div>
    )
}
export default NewPrescription;