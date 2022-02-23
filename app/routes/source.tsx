/************************************************************************************************ */

import { json } from "remix"
import type { LoaderFunction, MetaFunction } from "remix"

/* import components */
import MotionPageWrapper from "~/components/MotionPageWrapper"

/* import data */
import Component, { attributes } from "~/content/source.md"

/************************************************************************************************ */

export const meta: MetaFunction = ({ data }) => {
	return { title: `${data.title} | Unikey"` }
}

export const loader: LoaderFunction = async ({ params }) => {
	return json({ title: attributes.title })
}

/************************************************************************************************ */

export default function SourcePage() {
	return (
		<MotionPageWrapper>
			<Component />
		</MotionPageWrapper>
	)
}
