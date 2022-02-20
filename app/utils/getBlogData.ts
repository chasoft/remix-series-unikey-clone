import { marked } from "marked"
import parseFrontMatter from "front-matter"

export default function getBlogData(slug: string) {
	//get blog content
	const blogContent = ""
	//extract the data
	const { attributes, body } = parseFrontMatter(blogContent)
	//convert markdown to html
	const html = marked.parse(body)

	return { attributes, html }
}