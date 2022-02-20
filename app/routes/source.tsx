
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { source_mdx } from "~/content/source.md.js"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(source_mdx)
}

export default function SourcePage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
