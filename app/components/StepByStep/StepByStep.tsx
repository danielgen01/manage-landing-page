import React from "react"

const StepByStep = () => {
	return (
		<section className="grid grid-cols-1">
			<Step
				headline="Track company-wide progress"
				number={1}
				text="See how your day-to-day tasks fit into the wider vision. Go from
				tracking progress at the milestone level all the way done to the
				smallest of details. Never lose sight of the bigger picture again."
			/>
			<Step
				headline="Advanced built-in reports"
				number={2}
				text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
			/>
			<Step
				headline="Everything you need in one place"
				number={3}
				text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
			/>
		</section>
	)
}

export default StepByStep

type StepProps = {
	headline: string
	text: string
	number: number
}
const Step: React.FC<StepProps> = ({ headline, text, number }) => {
	return (
		<article className="px-10 py-10 flex flex-col w-full gap-5">
			<div className="number-headline flex items-center gap-5 bg-very-bright-orange rounded-full">
				<span className="bg-dark-orange text-white font-bold px-8 py-3 rounded-full text-xl">
					0{number}
				</span>
				<span className="text-[#242D52] font-bold tacking-[-.286px]">
					{headline}
				</span>
			</div>
			<p className="text-[#242D52] font-normal opacity-[0.5025343894958496;]">
				{text}
			</p>
		</article>
	)
}
