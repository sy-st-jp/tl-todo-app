export const appConfig = {
	env: process.env.NEXT_PUBLIC_ENV || "local",
	todoApiHost: process.env.NEXT_PUBLIC_TODO_API_HOST || "http://localhost:3000",
};
