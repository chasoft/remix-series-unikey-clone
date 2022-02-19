import React from "react"
import { Link } from "remix"

export default function AboutPageIndex() {
	return (
		<>
			<ul>
				<li><Link to="/blog/blog1">Blog1</Link></li>
				<li><Link to="/blog/blog2">Blog2</Link></li>
				<li><Link to="/blog/blog3">Blog3</Link></li>
			</ul>
		</>
	)
}
