import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: "/todo",
			permanent: false,
		},
	};
};

export default function Home() {
	return null;
}
