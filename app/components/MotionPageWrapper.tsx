import { motion } from "framer-motion"

export const pageMotion = {
	hidden: {
		y: -100,
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { ease: "easeOut" }
	}
}

export default function MotionPageWrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="max-w-screen-md mx-auto prose">
				{children}
			</div>
		</motion.div>
	)
}