import { marked } from "marked"
import parseFrontMatter from "front-matter"
import { blogList } from "~/content/blog/index.js"

export default function getBlogData(slug: string | undefined) {
	const blogItem = blogList.filter(blogItem => blogItem.slug === slug)
	const { attributes, body } = parseFrontMatter(blogItem[0].content)
	//convert markdown to html
	const html = marked.parse(body)
	return { attributes, html }
}