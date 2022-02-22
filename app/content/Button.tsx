import React from "react"
export default function Button({ title }: { title: string | undefined }) {
	return (
		<div style={{ backgroundColor: "red", padding: "10px" }}>{title ?? "Hello"}</div>
	)
}