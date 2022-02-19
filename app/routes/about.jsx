import React from "react"
import { Link, useLoaderData } from "remix"
import getData from "~/utils/getData"

export const handle = {
	mainPages: () => <Link to="/about">Giới thiệu</Link>
}

export async function loader() {
	return { content: getData() }
}

export default function AboutPage() {
	const { content } = useLoaderData()

	return (
		<>
			{content}
		</>
	)
}
