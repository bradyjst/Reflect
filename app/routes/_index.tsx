import type { MetaFunction } from "@remix-run/node";
import { Container } from "../Book/Container/Container";

export const meta: MetaFunction = () => {
	return [
		{ title: "Reflect" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<>
			<Container />
		</>
	);
}
