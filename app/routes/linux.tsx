
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { linux_mdx } from "~/content/linux.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/linux">UniKey Software for Linux</Link>
}

export const meta: MetaFunction = () => {
	return { title: "UniKey Software for Linux | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(linux_mdx)
}

export default function LinuxPage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
