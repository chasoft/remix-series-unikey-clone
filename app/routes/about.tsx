
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { about_mdx } from "~/content/about.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/about"></Link>
}

export const meta: MetaFunction = () => {
	return { title: "Giới thiệu Unikey | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(about_mdx)
}

export default function AboutPage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
