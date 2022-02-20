
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { index_mdx } from "~/content/index.md.js"

export const handle = {
	mainPages: () => <Link to="/">Trang chủ</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(index_mdx)
}

export default function Index() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
