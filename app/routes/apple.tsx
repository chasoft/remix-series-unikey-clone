
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { apple_mdx } from "~/content/apple.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/apple">UniKey cho macOS và iOS</Link>
}

export const meta: MetaFunction = () => {
	return { title: "UniKey cho macOS và iOS | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(apple_mdx)
}

export default function ApplePage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
