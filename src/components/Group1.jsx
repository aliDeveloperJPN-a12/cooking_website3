import React from "react";
const Group1 = () => {
  return (
    <div className="">


    
      <div className="flex flex-wrap space-x-[210px] lg:space-x-[0px] p-[20px]">
        {/* navabar */}
        <div className="text-[32px] font-bold text-[#D27722] cursor-pointer">cook</div>


        {/* hamber icon for mobile */}
        <div className="bg-[#D27722] w-[44px] h-[44px] rounded-[10px] p-[9px]  sm:hidden">
          <img
            className="w-[25px] h-[25px] cursor-pointer"
            src={"/static/images/hamber_logo.jpg"}
          />
        </div>
        <div className="hidden lg:flex">
          <p className="text-[25px] font-bold  lg:ml-[500px] xl:ml-[850px]">Eng</p>
          <p className="text-[25px] font-bold lg:ml-[30px]">USD</p>
          <svg className="lg:ml-[30px] lg:mt-[10px]" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16.5V12.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8.5H12.01" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <button className="w-[150px] lg:ml-[40px] rounded-sm bg-[#D27722] text-[25px] font-bold text-white">Log In</button>
        </div>
      </div>





<div className="xl:flex xl:flex-row-reverse">


        {/* pic banner */}
      <div className="absolute xl:static">
        <img className="w-[380px] lg:w-[836px] lg:ml-[90px] lg:rounded-[50px] xl:w-[500px] xl:h-[410px] xl:mr-[80px]" src={"/static/images/Hero Img.png"}/>
      </div>

      
      {/* profile banner */}
      <div className="border border-[#FFDBB8] rounded-xl h-[170px] w-[300px] bg-[#FFFDF4] relative top-[220px] lg:top-[500px] left-[40px] p-[10px] xl:hidden">
            <div className="w-[277px] h-[67px] flex flex-wrap">
                    <img className="ml-[10px]" src={"/static/images/Rectangle 14.png"}></img>
                    <div className="ml-[20px]">
                        <p className="font-bold mt-[5px]">David Mitchell</p>
                        <div className="flex flex-wrap">
                            <p className="font-bold">4.8️</p>
                            <svg className="ml-[5px] mt-[3px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
            </div>
            <div className="w-[277px] h-[80px] ml-[10px] mt-[2px]">
                <p className="text-[15px]">I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
            </div>
            <svg className="relative lg:-top-[140px] lg:left-[770px]  hidden lg:flex xl:hidden" xmlns="http://www.w3.org/2000/svg" width="133" height="104" viewBox="0 0 133 104" fill="none">
            <path d="M5.03785 100.975C2.02881 81.2795 11.9516 61.8664 29.6775 52.7693L126.674 2.99013C129.335 1.62405 132.5 3.55692 132.5 6.54884V52C132.5 80.7188 109.219 104 80.5 104H8.56009C6.80003 104 5.30366 102.715 5.03785 100.975Z" fill="#D27722"/>
          </svg>
      </div>
      






            <div className="">
                <p className="xl:text-start mt-[250px] text-[30px] font-bold w-[360px] lg:w-[800px] text-center lg:mt-[500px] lg:text-[50px] lg:ml-[100px] xl:w-[600px] xl:ml-[0px] xl:mt-[0px]">Master the Art of Cooking with <span className="text-[#D27722]">Experts</span> Worldwide</p>
                <p className="text-center mt-[10px] lg:w-[800px] xl:w-[600px] lg:ml-[100px] xl:ml-[0px] xl:text-start">Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
                <div className="flex flex-wrap  mt-[20px] lg:ml-[380px] xl:ml-[0px] ml-[40px]">
                    <img className="ml-[65px] xl:ml-[0px]" src={"/static/images/play-circle.svg"}></img>
                    <p className="font-bold ml-[10px] xl:hidden">Watch a video</p>
                    <p className="font-bold ml-[10px] hidden xl:block">Learn more in the COOK video</p>
                </div>
                <div className="lg:flex lg:flex-wrap lg:ml-[270px] xl:ml-[0px]">
                    <div><button className="bg-[#D27722] text-white w-[320px] lg:mt-[15px] xl:w-[150px] lg:w-[220px] h-[40px] ml-[28px] mt-[20px]">Find Your Tutor</button></div>
                    <div><button className="text-[#D27722] border border-[#D27722] xl:w-[150px] lg:w-[220px] w-[320px] h-[40px] ml-[28px] mt-[15px]">Join Our Chefs</button></div>
                </div>
            </div>


</div>







            {/* group 1 */}
            <div className="ml-[28px] w-[320px] p-[30px] border border-[#D27722] m-[30px] rounded-xl bg-[#FFFDF4] xl:flex xl:flex-wrap xl:w-[1310px] lg:flex lg:flex-wrap lg:w-[970px]">

                <div className="w-[295px] h-[150px]  mt-[10px] -ml-[18px] lg:-ml-[70px] xl:-ml-[0px] p-[20px] pl-[90px]">
                    <div className="text-[50px] text-[#D27722] font-bold">100+</div>
                    <div className="text-[15px]">Talented Tutors</div>
                </div>

                <div className="w-[295px] h-[150px]  mt-[10px] -ml-[18px] lg:-ml-[70px] xl:-ml-[0px] p-[20px] pl-[80px]">
                    <div className="text-[50px] text-[#D27722] font-bold">1000+</div>
                    <div className="text-[15px]  ml-[20px]">Students</div>
                </div>


                <div className="w-[295px] h-[150px]  mt-[10px] -ml-[18px] lg:-ml-[70px] xl:-ml-[0px] p-[20px] pl-[90px]">
                    <div className="flex flex-wrap">
                        <p className="text-[50px] text-[#D27722] font-bold">4.8</p>
                        <svg className="ml-[10px] mt-[20px]" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                        <path d="M14.5 1L18.6715 9.88644L28 11.3202L21.25 18.2334L22.843 28L14.5 23.3864L6.157 28L7.75 18.2334L1 11.3202L10.3285 9.88644L14.5 1Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-[15px]  ml-[20px]">Rating</div>
                </div>


                <div className="w-[295px] h-[150px]  mt-[10px] -ml-[18px] lg:-ml-[70px] xl:-ml-[0px] p-[20px] pl-[90px]">
                    <div className="text-[50px] text-[#D27722] font-bold">20+</div>
                    <div className="text-[15px] -ml-[20px]">Cooking Categories</div>
                </div>

            </div>



    </div>
  );
};

export default Group1;
