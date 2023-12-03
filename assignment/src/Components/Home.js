import React from "react";
import Navbar from "./Navbar";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
const Home = () => {
	return (
		<div className='h-full'>
			<Navbar />
			{/* home */}
			<div className='flex flex-col items-center  justify-center mt-28'>
				<div>
					<h2 className='p-1 px-5 rounded-lg outfit border-[1px] border-gray-400 bg-white text-[#8247FF] font-semibold text-[13px]'>
						👋 WELCOME TO MANAGE WISE!
					</h2>
				</div>

				<div>
					<p className='text-[50px] sm:text-[55px] md:text-[70px] lg:text-[85px] outfit text-center leading-[65px] md:leading-[85px]'>
						Empower your business with{" "}
						<span className='text-[#fe8162]'> Strategic </span>
						insights
					</p>
					<p className='text-[20px] mt-6 outfit text-[#767575] text-center'>
						Powerful management platform designed to streamline your business
						<br className='md:inline hidden '></br>
						operations, boost productivity, and drive success
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-4 mt-8 px-4 w-full md:w-auto'>
					<div className='group'>
						<button className='sh flex rounded-[18px] items-center transition-all duration-300 justify-center  w-full md:w-[200px] gap-2 p-3 bg-[#8247FF] outfit text-white text-[20px]  '>
							Get Started{" "}
							<FaArrowCircleRight className='hidden group-hover:inline  sh w-5 h-5 ss' />
						</button>
					</div>

					<div className='group'>
						<button className='group-hover:border-[1px] duration-300  group-hover:border-gray-600 flex rounded-2xl items-center font-semibold justify-center w-full md:w-[213px] gap-2 p-3 bg-white outfit text-black text-[18px]'>
							Watch Demo <FaPlayCircle />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
