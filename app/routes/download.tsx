import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { download_mdx } from "~/content/download.md.js"
import { motion } from "framer-motion"
import { pageMotion } from "~/utils/motionVariants"

export const handle = {
	breadcrumb: () => <Link to="/download">Download</Link>
}

export const meta: MetaFunction = () => {
	return { title: "Download UniKey | Unikey" }
}

export const loader: LoaderFunction = () => {
	return getPageData(download_mdx)
}

export default function DownloadPage() {
	const { attributes, html } = useLoaderData()
	return (
		<motion.div variants={pageMotion} initial="hidden" animate="visible">
			<div className="prose max-w-screen-lg" dangerouslySetInnerHTML={{ __html: html }} />
		</motion.div>
	)
}
