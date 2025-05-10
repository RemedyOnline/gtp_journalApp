/** @type {import('jest').Config} */

const config = {
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
};

export default config;
