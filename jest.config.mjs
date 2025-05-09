/** @type {import('jest').Config} */

const config = {
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
};

export default config;
