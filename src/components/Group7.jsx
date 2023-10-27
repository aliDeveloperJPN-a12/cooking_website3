import React from "react";

const Group7 = () => {
  return (
    <div className="w-full bg-[#D27722] lg:flex xl:w-[1300px] xl:ml-[35px] xl:rounded-[30px]">
      <img src="../../images/Rectangle 28.png" className="h-[350px] w-full lg:w-[400px] lg:h-[600px] lg:ml-[20px] xl:-ml-[5px] lg:mt-[20px] xl:mt-[0px] lg:rounded-[20px] xl:rounded-[30px]" />


      <div>
        <div className="m-[27px]">
          <div className="">
            <p className="text-white text-[25px] font-bold mb-[10px]">
              Become A Student
            </p>
            <p className="text-white">
              Kick-start your culinary adventure with COOK. We provide a space
              for cooking enthusiasts of all levels to learn, explore, and
              master culinary arts from professional chefs worldwide. So dive in
              and transform your kitchen into a playground of flavors.
            </p>
          </div>
        </div>

        <div className="w-[326px] h-[87px] justify-center items-start gap-2 inline-flex m-[21px]">
          <div className="pt-[3px] justify-start items-start gap-2.5 flex">
            <img
              className="w-[22px] h-[22px]"
              src="../../images/image 23.png"
            />
          </div>
          <div className="grow shrink basis-0 font-bold text-white">
            Build Your Brand
            <span className="font-normal">
              {" "}
              Showcase your culinary skills and build your brand within our
              community.
            </span>
          </div>
        </div>

        <div className="w-[326px] h-[87px] justify-center items-start gap-2 inline-flex m-[21px] -mt-[20px]">
          <div className="pt-[3px] justify-start items-start gap-2.5 flex">
            <img
              className="w-[22px] h-[22px]"
              src="../../images/image 23.png"
            />
          </div>
          <div className="grow shrink basis-0 font-bold text-white">
            Expand Your Reach
            <span className="font-normal">
              {" "}
              Connect with cooking enthusiasts across the globe and expand your
              audience beyond geographical limits.
            </span>
          </div>
        </div>

        <div className="w-[326px] h-[87px] justify-center items-start gap-2 inline-flex m-[21px]">
          <div className="pt-[3px] justify-start items-start gap-2.5 flex">
            <img
              className="w-[22px] h-[22px]"
              src="../../images/image 23.png"
            />
          </div>
          <div className="grow shrink basis-0 font-bold text-white">
            Grow Your Business Faster
            <span className="font-normal">
              {" "}
              Utilize our platform's features and resources to accelerate your
              growth and increase your income.
            </span>
          </div>
        </div>

        <div>
            <button className="w-[350px] lg:ml-[40px] xl:ml-[20px] lg:w-[150px] h-[40px] border border-white ml-[15px] mb-[30px] text-white mt-[20px]">
            Sign up
            </button>
        </div>
      </div>


      
    </div>
  );
};

export default Group7;
