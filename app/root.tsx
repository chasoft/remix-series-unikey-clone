import React from "react"
import PropTypes from "prop-types"
import NProgress from "nprogress"
import nProgressStyles from "nprogress/nprogress.css"
import styles from "./styles/app.css"
import { MetaFunction, NavLink } from "remix"
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
	useTransition,
} from "remix"

export const links = () => {
	return [
		{ rel: "stylesheet", href: styles },
		{ rel: "stylesheet", href: nProgressStyles },
	]
}

export const meta: MetaFunction = () => {
	return { title: "Unikey - Bàn phím tiếng Việt" }
}

interface DocumentProps {
	children: React.ReactNode
	title?: string
}

const menuItems = [
	{ to: "/about", text: "Giới thiệu" },
	{ to: "/blog", text: "Blog" },
	{ to: "/linux", text: "Linux" },
	{ to: "/apple", text: "Apple" },
	{ to: "/support", text: "Trợ giúp" },
	{ to: "/source", text: "Mã nguồn" }
]

function Document({ children, title }: DocumentProps) {
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
				{title ? <title>{title}</title> : null}
				<Links />
			</head>
			<body>
				<nav className="bg-zinc-100 py-10">
					<div className="container max-w-screen-lg flex justify-between mx-auto">
						<div className="">
							<a href="/"><strong>UniKey</strong></a>
						</div>
						<ul className="flex space-x-8">
							{menuItems.map(menuItem => {
								return (
									<li key={menuItem.to}>
										<NavLink to={menuItem.to}>{menuItem.text}</NavLink>
									</li>
								)
							})}
						</ul>
					</div>
				</nav>

				<main className="mb-20">
					<div className="container max-w-screen-md mx-auto">

						{children}
					</div>

				</main>

				<footer className="mt-auto p-6 bg-slate-500">
					<div className="container max-w-screen-lg mx-auto text-white">© 2021 Pham Kim Long.</div>
				</footer>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body >
		</html >
	)
}

Document.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

export function CatchBoundary() {
	const caught = useCatch()

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<div className="error-container">
				<h1>
					{caught.status} {caught.statusText}
				</h1>
			</div>
		</Document>
	)
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error)

	return (
		<Document title="Uh-oh!">
			<div className="error-container">
				<h1>App Error</h1>
				<pre>{error.message}</pre>
			</div>
		</Document>
	)
}

ErrorBoundary.propTypes = {
	error: PropTypes.object,
}
