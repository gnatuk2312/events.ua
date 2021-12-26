export default class ChangePages {
	constructor(eventsBtnSelector, myCabinetBtnSelector, eventsHtml, myCabinetHtmls) {
		this.eventsBtn = document.querySelector(eventsBtnSelector);
		this.myCabinetBtn = document.querySelector(myCabinetBtnSelector);
		this.eventsHtmls = document.querySelectorAll(eventsHtml);
		this.myCabinetHtmls = document.querySelectorAll(myCabinetHtmls);
	}


	showPage(shownPage, removedPage, shownBtn, removedBtn, ifMyCabinet = false) {
		shownBtn.addEventListener('click', () => {
			removedBtn.classList.remove('header-button-active');
			shownBtn.classList.add('header-button-active');
			shownPage.forEach(html => {
				html.classList.remove('is-hidden')
			});
			removedPage.forEach(html => {
				html.classList.add('is-hidden')
			});
			if (ifMyCabinet == true) {
				document.querySelector('.header__search').classList.add('is-hidden')
			} else {
				document.querySelector('.header__search').classList.remove('is-hidden')
			};

		})
	}

	init() {
		this.showPage(this.myCabinetHtmls, this.eventsHtmls, this.myCabinetBtn, this.eventsBtn, true)
		this.showPage(this.eventsHtmls, this.myCabinetHtmls, this.eventsBtn, this.myCabinetBtn)
	}
}