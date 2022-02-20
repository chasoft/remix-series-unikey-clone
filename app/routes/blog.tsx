import React from "react"
import { Link, Outlet } from "remix"

export const handle = {
	mainPages: () => <Link to="/blog">Blog</Link>
}

export default function BlogPage() {
	return (
		<>
			<h1>Blog</h1>
			<Outlet />
		</>
	)
}
