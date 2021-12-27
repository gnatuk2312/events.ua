export default class Modals {
	constructor(triggerSelector, modalSelector, closeSelector) {
		this.triggers = document.querySelectorAll(triggerSelector);
		this.modal = document.querySelector(modalSelector);
		this.close = document.querySelector(closeSelector);
	}

	calcScroll() {
		let div = document.createElement('div');

		div.style.width = "50px";
		div.style.height = '50px';
		div.style.overflowY = "scroll";
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}



	init() {
		this.triggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				this.modal.classList.remove('visually-hidden');
				document.body.classList.add('modal-open');
				const scroll = this.calcScroll();
				document.body.style.paddingRight = `${scroll}px`;
			})
		})
		this.close.addEventListener('click', () => {
			this.modal.classList.add('visually-hidden');
			document.body.classList.remove('modal-open');
			document.body.style.paddingRight = `0px`;
		})
		this.modal.addEventListener('click', (e) => {
			if (e.target === this.modal) {
				this.modal.classList.add('visually-hidden');
				document.body.classList.remove('modal-open');
				document.body.style.paddingRight = `0px`;
			}
		})

	}
}

