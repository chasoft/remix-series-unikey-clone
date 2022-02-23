/************************************************************************************************ */

import React from "react"
import { Link, json, useLoaderData } from "remix"
import { motion } from "framer-motion"
import type { LoaderFunction, MetaFunction } from "remix"

/* import components */
import { MetaType } from "~/types"
import getMdxMeta from "~/utils/getMdxMeta"
import MotionPageWrapper from "~/components/MotionPageWrapper"

/* import data */
import * as chung_thuc_UniKey from "./__posts/chung_thuc_UniKey.md"
import * as UniKey_43_RC5_Release from "./__posts/UniKey_43_RC5_Release.md"
import * as UniKey_43_RC4_Release from "./__posts/UniKey_43_RC4_Release.md"
import * as UniKey_43_RC3_Release from "./__posts/UniKey_43_RC3_Release.md"
import * as UniKey_43_Release from "./__posts/UniKey_43_Release.md"
import * as Unikey_voi_quyen_admin from "./__posts/Unikey_voi_quyen_admin.md"

/************************************************************************************************ */

export const loader: LoaderFunction = async ({ params }) => {
	const unSortedBlogList = [
		getMdxMeta(chung_thuc_UniKey),
		getMdxMeta(UniKey_43_RC5_Release),
		getMdxMeta(UniKey_43_RC4_Release),
		getMdxMeta(UniKey_43_RC3_Release),
		getMdxMeta(UniKey_43_Release),
		getMdxMeta(Unikey_voi_quyen_admin),
	]

	const sortedBlogList = unSortedBlogList.sort((i1, i2) => {
		return Date.parse(i2.attributes.date ?? "") - Date.parse(i1.attributes.date ?? "")
	})

	return json(sortedBlogList)
}

/************************************************************************************************ */

export default function BlogPage() {
	const blogPost: MetaType[] = useLoaderData()
	return (
		<MotionPageWrapper>
			<ul>
				{blogPost.map(({ attributes, filename }) => (
					<li>
						<Link to={`/blog/${filename}`}>
							{attributes.title}
						</Link>
						<span className="block">{attributes.description}</span>
					</li>
				))}
			</ul>
		</MotionPageWrapper>
	)
}
