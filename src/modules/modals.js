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
				document.body.classList.add('modal-open');
			})
		})
		this.close.addEventListener('click', () => {
			this.modal.classList.add('visually-hidden');
			document.body.classList.remove('modal-open');
		})
		this.modal.addEventListener('click', (e) => {
			if (e.target === this.modal) {
				this.modal.classList.add('visually-hidden');
				document.body.classList.remove('modal-open');
			}
		})

	}
}

