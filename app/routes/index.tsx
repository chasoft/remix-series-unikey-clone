
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { index_mdx } from "~/content/index.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/">Trang chủ</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(index_mdx)
}

export default function Index() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg prose-a:no-underline prose-a:text-blue-600 hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
