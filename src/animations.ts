const imageFadeTransition = {
	duration: 1,
	ease: "easeOut"
}

export const imageFade = {
	hidden: {
		opacity: 0,
		scale: 2,
		transition: imageFadeTransition
	},
	show : {
		opacity: 1,
		scale: 1,
		transition: imageFadeTransition
	}
}