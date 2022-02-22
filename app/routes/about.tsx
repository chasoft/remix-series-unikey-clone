
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
// import getPageData from "~/utils/getPageData"
// import Component, { attributes } from '~/content/about.md';
import Component, { attributes } from "~/content/about.mdx";
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/about"></Link>
}

export const meta: MetaFunction = () => {
	return { title: "Giới thiệu Unikey | Unikey" }
}

// function getPageData() {
// 	return [postA.attributes, postA.default]
// }

// export const loader: LoaderFunction = () => {
// 	return getPageData()
// }

export default function AboutPage() {
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			{/* <div className="max-w-screen-lg prose" dangerouslySetInnerHTML={{ __html: html }} /> */}
			<div className="prose">
				<Component />
			</div>
		</motion.div>
	)
}
