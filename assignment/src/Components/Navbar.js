import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
	const [show, setShow] = useState(false);
	return (
		<header className='border-b-[1px] p-4 flex justify-between inter'>
			<div className='flex itmes-center cursor-pointer justify-center gap-2'>
				<img
					src='https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
					alt='logo'
					className='w-10 h-10'
				/>
				<p className='md:hidden mt-1 inline text-[22px] outfit font-semibold'>
					ManageWise
				</p>
			</div>

			<div className='hidden md:flex items-center justify-between gap-8'>
				<div className='flex items-center   gap-6'>
					<p className='text-[16px] font-medium hover:text-[#8247FF] duration-300 cursor-pointer'>
						Features
					</p>
					<span className='w-1 h-1 rounded-[1px] bg-gray-400'></span>
				</div>

				<div className='flex items-center   gap-6'>
					<p className='text-[16px] font-medium hover:text-[#8247FF] duration-300 cursor-pointer'>
						FAQ
					</p>
					<span className='w-1 h-1 rounded-[1px] bg-gray-400'></span>
				</div>

				<div className='flex items-center   gap-6'>
					<p className='text-[16px] font-medium hover:text-[#8247FF] duration-300 cursor-pointer'>
						Pricing
					</p>
					<span className='w-1 h-1 rounded-[1px] bg-gray-400'></span>
				</div>

				<div className='flex items-center   gap-2'>
					<p className='text-[16px] font-medium hover:text-[#8247FF] duration-300 cursor-pointer'>
						Testimonials
					</p>
				</div>

				<button className='hover:border-[1px] duration-300  hover:border-gray-600  bg-white text-[17px] font-semibold py-[8px] w-[150px] rounded-xl'>
					Buy Template
				</button>
			</div>

			<div className='md:hidden inline'>
				<GiHamburgerMenu
					className='cursor-pointer text-4xl '
					onClick={() => {
						setShow(!show);
					}}
				/>
			</div>
			{show && (
				<div className='p-5 bg-white absolute top-0 bottom-0 right-0 left-0 fixed h-screen w-full'>
					<RxCross1
						className='text-4xl font-bold float-right cursor-pointer'
						onClick={() => {
							setShow(!show);
						}}
					/>

					<div className='flex inter font-medium items-center justify-between flex-col gap-10 mt-10'>
						<p className='hover:text-[#8247FF] duration-300 cursor-pointer'>
							Features
						</p>
						<p className='hover:text-[#8247FF] duration-300 cursor-pointer'>
							FAQ
						</p>
						<p className='hover:text-[#8247FF] duration-300 cursor-pointer'>
							Pricing
						</p>
						<p className='hover:text-[#8247FF] duration-300 cursor-pointer'>
							Testimonials
						</p>
						<div className='group w-full'>
							<button className='sh flex rounded-[18px] items-center justify-center w-full gap-2 p-3 bg-[#8247FF] outfit text-white text-[18px]  '>
								Buy Template
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
