
import React from "react"
import { Link, useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import getPageData from "~/utils/getPageData"
import { linux_mdx } from "~/content/linux.md.js"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export const loader: LoaderFunction = () => {
	return getPageData(linux_mdx)
}

export default function LinuxPage() {
	const { attributes, html } = useLoaderData()
	return (
		<div dangerouslySetInnerHTML={{ __html: html }} />
	)
}
