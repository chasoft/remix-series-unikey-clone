/************************************************************************************************ */

import { json, Link, Outlet } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"

/* import components */
import MotionPageWrapper from "~/components/MotionPageWrapper"

/* import data */


/************************************************************************************************ */

export const meta: MetaFunction = ({ data }) => {
	return { title: "Blog | Unikey" }
}

/************************************************************************************************ */

export default function BlogPage() {
	return (
		<MotionPageWrapper>
			<Link to="/blog"><h1 className="no-underline">Blog</h1></Link>
			<Outlet />
		</MotionPageWrapper>
	)
}
