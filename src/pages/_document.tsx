import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="ja">
			<Head>
				<title>tl-todo-app</title>
				<meta name="description" content="Exam for Timeleap Inc." />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
