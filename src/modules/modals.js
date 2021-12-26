export default class Modals {
	constructor(triggerSelector, modalSelector, closeSelector) {
		this.triggers = document.querySelectorAll(triggerSelector);
		this.modal = document.querySelector(modalSelector);
		this.close = document.querySelector(closeSelector);
	}

	init() {
		this.triggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				this.modal.classList.remove('visually-hidden');
			})
		})
		this.close.addEventListener('click', () => {
			this.modal.classList.add('visually-hidden');
		})
		this.modal.addEventListener('click', (e) => {
			if (e.target === this.modal) {
				this.modal.classList.add('visually-hidden');
			}
		})

	}
}

