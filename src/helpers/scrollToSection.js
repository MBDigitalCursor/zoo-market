export const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		const sectionTop = section.getBoundingClientRect().top + window.scrollY;
		const start = window.scrollY;
		const duration = 500; // milliseconds
		const startTime = performance.now();

		const easeInOutCubic = (t) => {
			return t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) ** 2 + 1;
		};

		const animateScroll = (timestamp) => {
			const elapsedTime = timestamp - startTime;
			const scrollY = easeInOutCubic(Math.min(elapsedTime / duration, 1)) * (sectionTop - start) + start;
			window.scrollTo(0, scrollY);
			if (elapsedTime < duration) {
				requestAnimationFrame(animateScroll);
			}
		};

		requestAnimationFrame(animateScroll);
	}
};
