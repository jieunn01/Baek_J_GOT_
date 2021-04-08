(() => {
	console.log('fired');

	//variables at the top const -> never change FOREVER
	const sigils = document.querySelector('#navList'),
		banner = document.querySelector('#houseImages');

	//functions go here multipier change
	function animateBanner(event) {
		if (event.target.className.includes('sigilContainer')) {
			let multiplier = event.target.dataset.offset,
				offset = 600;
		//0, 600, 1200, 1800 move 600px씩
		banner.style.right = `${multiplier * offset}px`;
		}
	}
	// sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));
	sigils.addEventListener('click', animateBanner);

})();