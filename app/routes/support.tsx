
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { support_mdx } from "~/content/support.md.js"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(support_mdx)
}

export default function SupportPage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
