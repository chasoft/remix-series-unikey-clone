import React from "react"
import PropTypes from "prop-types"
import NProgress from "nprogress"
import nProgressStyles from "nprogress/nprogress.css"
import styles from "./styles/app.css"
import type { MetaFunction } from "remix"
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
				<div className="flex flex-col min-h-screen w-full justify-center bg-blue-100">
					<nav className="container flex bg-zinc-50">
						<ul className="bg-zinc-100">
							<li><a href="/"><strong>UniKey</strong></a></li>
						</ul>
						<ul className="flex flex-1 bg-zinc-200">
							<li><Link to="/about">Giới thiệu</Link></li>
							<li><Link to="/download">Download</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/linux">Linux</Link></li>
							<li><Link to="/apple">Apple</Link></li>
							<li><Link to="/support">Trợ giúp</Link></li>
							<li><Link to="/source">Mã nguồn</Link></li>
						</ul>
					</nav>

					<main className="container mb-20">

						{children}

					</main>

					<footer className="container mt-auto p-6 bg-slate-300">
						<small>© 2021 Pham Kim Long.</small>
					</footer>
				</div>

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
