
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { support_mdx } from "~/content/support.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/support">Trợ giúp</Link>
}

export const meta: MetaFunction = () => {
	return { title: "Trợ giúp | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(support_mdx)
}

export default function SupportPage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose prose-a:text-blue-600" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
