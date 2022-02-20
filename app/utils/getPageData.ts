import { marked } from "marked"
import parseFrontMatter from "front-matter"

export default function getPageData(source: string) {
	//extract the data
	const { attributes, body } = parseFrontMatter(source)
	//convert markdown to html
	const html = marked.parse(body)

	return { attributes, html }
}