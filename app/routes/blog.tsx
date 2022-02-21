import React from "react"
import { Link, Outlet } from "remix"
import type { MetaFunction } from "remix"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/blog">Blog</Link>
}

export const meta: MetaFunction = () => {
	return { title: "Blog | Unikey" }
}

export default function BlogPage() {
	return (
		<motion.div className="prose max-w-screen-lg" variants={pageMotion} initial="hidden" animate="visible">
			<Link to="/blog"><h1 className="no-underline">Blog</h1></Link>
			<Outlet />
		</motion.div>
	)
}
