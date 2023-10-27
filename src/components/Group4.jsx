import React from 'react'

const Group4 = () => {
  return (
    <div className='mt-[50px] xl:flex xl:mb-[50px]'>
        <img src='../../images/Rectangle 17.png' className='w-[380px] h-[281px] absolute lg:w-[850px] lg:h-[500px] lg:rounded-[50px] lg:ml-[90px] xl:w-[450px]'/>
      {/* profile banner */}
      <div className=" rounded-xl h-[170px] w-[300px] bg-[#D27722] relative top-[220px] lg:top-[400px] left-[40px] p-[10px]">
            <div className="w-[277px] h-[67px] flex flex-wrap">
                    
                    <div className="ml-[20px] flex flex-wrap">
                        <p className="font-bold mt-[5px] text-[24px] text-white ml-[120px]">Level up</p>
                        <img src='../../images/image 20.png' className='h-[20px] mt-[18px] ml-[10px]'/>
                    </div>
            </div>
            <div className="w-[277px] h-[80px] ml-[10px] -mt-[5px]">
                <p className="text-[15px] text-white">I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
            </div>
            </div>
        <p className='text-[30px] font-bold mt-[250px] m-[20px] ml-[30px] lg:mt-[450px] xl:hidden'>Other Benefits</p>
        {/*  */}
        <div className=''>
            <p className='text-[20px] ml-[300px] font-bold hidden xl:block'>Other Advantages</p>
            <div className='m-[20px] border border-[#FFDBB8] rounded-xl p-[20px] xl:w-[700px] xl:ml-[290px] xl:h-[160px]'>
                <img src='../../images/Rectangle 21.png'/>
                <p className='font-bold text-[20px] mt-[20px] xl:mt-[0px] mb-[10px]'>Diverse Range of Classes</p>
                <p>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
            </div>

            <div className='m-[20px] border border-[#FFDBB8] rounded-xl p-[20px] xl:w-[700px] xl:ml-[290px] xl:h-[160px]'>
                <img src='../../images/Rectangle 22.png'/>
                <p className='font-bold text-[20px] mt-[20px] xl:mt-[0px] mb-[10px]'>Opportunity to Teach </p>
                <p>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
            </div>

            <div className='m-[20px] border border-[#FFDBB8] rounded-xl p-[20px] xl:w-[700px] xl:ml-[290px] xl:h-[160px]'>
                <img src='../../images/Rectangle 23.png'/>
                <p className='font-bold text-[20px] mt-[20px] xl:mt-[0px] mb-[10px]'>Interactive Lessons</p>
                <p>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Group4