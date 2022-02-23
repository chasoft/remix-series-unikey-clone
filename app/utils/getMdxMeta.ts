import type { MetaType } from "~/types"

export default function getMdxMeta(module: MetaType) {
	return {
		attributes: module.attributes,
		filename: module.filename.replace(/\.mdx?$/, '')
	}
}