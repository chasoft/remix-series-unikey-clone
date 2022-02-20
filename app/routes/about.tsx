
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { about_mdx } from "~/content/about.md.js"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(about_mdx)
}

export default function AboutPage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
