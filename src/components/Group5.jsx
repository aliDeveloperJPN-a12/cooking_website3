import React from 'react'

const Group5 = () => {
  return (
    <div>
        <div className='flex flex-wrap'>
        <svg className='ml-[22px] mt-[11px]' xmlns="http://www.w3.org/2000/svg" width="39" height="22" viewBox="0 0 39 22" fill="none">
            <path d="M5 17C5 17 11.4919 5 19.5 5C27.5081 5 34 17 34 17" stroke="#D27722" stroke-width="9" stroke-linecap="round"/>
        </svg>
        <p className='text-[30px] ml-[10px] font-bold'>How It works</p>
        </div>
    {/*  */}
    <div>

    <div className='xl:flex'>
        <div>
        <span className='bg-[#D27722] lg:p-[15px] rounded-[10px] text-white text-[50px] lg:px-[40px] absolute lg:left-[20px] lg:top-[4420px] xl:top-[2550px] xl:ml-[60px] hidden lg:block'>1</span>
        <img src='../../images/Rectangle 24.png' className=' lg:w-[790px] lg:h-[500px] lg:ml-[130px] lg:mt-[70px] ml-[20px] mt-[20px] xl:w-[600px]' />
        </div>
        <div className='m-[25px] xl:ml-[80px] xl:mt-[120px]'>
            <p className='text-[30px] font-bold mt-[20px] mb-[10px]'>Explore Our Culinary Experts</p>
            <p className='xl:w-[500px]'>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
            <button className='bg-[#D27722] w-[170px] rounded-sm h-[40px] text-white font-bold ml-[82px] mt-[25px] lg:ml-[0px]'>Browse Tutors</button>
        </div>
    </div>

    <div className='xl:flex xl:flex-row-reverse'>
        <div className=''>
            <div className='bg-[#D27722] lg:p-[15px] rounded-[10px] text-white text-[50px] lg:px-[40px] absolute lg:ml-[20px] lg:-mt-[90px] xl:mt-[150px]  hidden lg:block'>2</div>
            <img src='../../images/Rectangle 25.png' className='h-[254px] mt-[70px] lg:w-[790px] lg:h-[500px] lg:ml-[130px] xl:ml-[0px] lg:mt-[200px] w-[380px]' />
        </div>
        <div className='m-[25px] xl:ml-[80px] xl:mt-[120px]'>
            <p className='text-[30px] font-bold mt-[20px] mb-[10px] xl:mt-[80px]'>Select Your Perfect Match</p>
            <p className='xl:w-[500px]'>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>
        </div>
    </div>

    <div className='xl:flex'>
    <div>
        <div className='bg-[#D27722] lg:p-[15px] rounded-[10px] text-white text-[50px] lg:px-[40px] absolute lg:ml-[20px] lg:-mt-[10px]  hidden lg:block xl:mt-[50px] xl:ml-[90px]'>3</div>
        <img src='../../images/Rectangle 26.png' className='h-[254px] mt-[70px] lg:w-[790px] lg:h-[500px] lg:ml-[130px] lg:mt-[0px] xl:w-[600px]' />
    </div>
        <div className='m-[25px] lg:ml-[70px]'>
            <p className='text-[30px] font-bold mt-[20px] mb-[10px] xl:mt-[0px]'>Enjoy Your Interactive Lesson</p>
            <p className=' lg:w-[900px] xl:w-[500px]'>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
            <button className='bg-[#D27722] w-[170px] rounded-sm h-[40px] text-white font-bold ml-[82px] mt-[25px] lg:ml-[0px]'>Sign up for free</button>
        </div>
    </div>


    </div>
    </div>
  )
}

export default Group5