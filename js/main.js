(() => {
	console.log('fired');

	//variables at the top const -> never change FOREVER
	const sigils = document.querySelectorAll('.sigilContainer'),
		banner = document.querySelector('#houseImages');

	//functions go here multipier change
	function animateBanner(event) {
		let multiplier = this.dataset.offset,
			offset = 600;
		//0, 600, 1200, 1800 move 600px씩
		banner.style.right = `${multiplier * offset}px`;
	
	}

	sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

})();