import { Provider } from "@/app/provider";
import { Toaster } from "@/components/ui/Toater";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Toaster />
			<Component {...pageProps} />
		</Provider>
	);
}
