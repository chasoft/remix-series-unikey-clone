import { motion } from "framer-motion"
import React from "react"
import { LoaderFunction, useLoaderData } from "remix"
import getBlogData from "~/utils/getBlogData"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => ""
}

export const loader: LoaderFunction = async ({ params }) => {
	return getBlogData(params.slug)
}

export default function BlogDetails() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg prose-a:no-underline prose-a:text-blue-600 hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
