
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { apple_mdx } from "~/content/apple.md.js"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(apple_mdx)
}

export default function ApplePage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
