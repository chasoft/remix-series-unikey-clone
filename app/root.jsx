import NProgress from "nprogress"
import nProgressStyles from "nprogress/nprogress.css"
import React from "react"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useTransition,
} from "remix"

export const links = () => {
	return [
		{ rel: "stylesheet", href: nProgressStyles }
	]
}

export function meta() {
	return { title: "Unikey - Bàn phím tiếng Việt" }
}

export default function App() {
	const transition = useTransition()

	React.useEffect(() => {
		// when the state is idle then we can to complete the progress bar
		if (transition.state === "idle") NProgress.done()
		// and when it's something else it means it's either submitting a form or
		// waiting for the loaders of the next location so we start it
		else NProgress.start()
	}, [transition.state])

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
