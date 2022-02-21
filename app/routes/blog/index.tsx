import React from "react"
import { Link } from "remix"
import { blogList } from "~/content/blog/index.js"

export default function BlogPageIndex() {
	return (
		<>
			<ul>
				{blogList.map(blogItem => (
					<li key={blogItem.slug}>
						<Link to={`/blog/${blogItem.slug}`}>{blogItem.title}</Link>
						<span className="block">
							{blogItem.description}
						</span>
					</li>
				))}
			</ul>
		</>
	)
}
