import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { download_mdx } from "~/content/download.md.js"

export const handle = {
	mainPages: () => <Link to="/download">Download</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(download_mdx)
}

export default function DownloadPage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
