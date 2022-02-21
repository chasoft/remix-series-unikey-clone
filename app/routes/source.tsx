
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { source_mdx } from "~/content/source.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/source">UniKey Source Code</Link>
}

export const meta: MetaFunction = () => {
	return { title: "UniKey Source Code | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(source_mdx)
}

export default function SourcePage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
