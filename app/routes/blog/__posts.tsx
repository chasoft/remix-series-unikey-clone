import { Outlet } from "remix";

export default function BlogWrapper() {
	return (
		<div>
			<Outlet />
		</div>
	)
}