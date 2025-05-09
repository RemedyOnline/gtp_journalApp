module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current", // Ensures Node-compatible transpilation
					esmodules: true, // Supports ES Modules
				},
			},
		],
	],
};
