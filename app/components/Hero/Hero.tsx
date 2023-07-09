import React from "react"
import Image from "next/image"

const Hero = () => {
	return (
		<>
			<section className="grid grid-cols-1 justify-center py-5 items-center lg:grid-cols-2 ">
				<div className="chart-image flex justify-center lg:order-2">
					<Image
						src={"/images/illustration-intro.svg"}
						width={500}
						height={200}
						alt="charts"
						className="px-[28px]"
					/>
				</div>

				<div className="description flex flex-col gap-5 px-10">
					<h1 className="text-dark-blue font-bold tracking-[-1px] leading-[50px] text-center text-[40px] px-[32.5px]">
						Bring everyone together to build better products.
					</h1>
					<p className="text-dark-blue text-center text-[16px] font-light leading-[28px] px-[26px] mt-2">
						Manage makes it simple for software teams to plan day-to-day tasks
						while keeping the larger team goals in view.
					</p>

					<div className="buttons flex items-center justify-center">
						<button className="rounded-full bg-dark-orange px-8 py-4 text-white font-bold shadow-dark-orange shadow-sm hover:opacity-75 duration-150">
							Get Started
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
