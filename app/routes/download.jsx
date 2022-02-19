import React from "react"
import { Link } from "remix"

export const handle = {
	mainPages: () => <Link to="/download">Download</Link>
}

export default function DownloadPage() {
	return (
		<>
			<h1>Download UniKey</h1>
		</>
	)
}
