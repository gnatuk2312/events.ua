export default class CreateEvent {
	constructor(formSelector, eventsWrapper) {
		this.form = document.querySelector(formSelector);
		this.submit = this.form.querySelector('.create-event__submit');
		this.titleInput = this.form.querySelector('[name="title"]');
		this.fileInput = this.form.querySelector('[name="file"]');
		this.dateInput = this.form.querySelector('[name="date"]');
		this.placeInput = this.form.querySelector('[name="place"]');
		this.aboutInput = this.form.querySelector('[name="about"]');
		this.wrapper = document.querySelector(eventsWrapper);

	}

	createElement(title, photo, place) {
		const yourEventsItem = document.createElement('DIV');
		yourEventsItem.classList.add('your-events__item');
		const yourEventsImgSpan = document.createElement('SPAN');
		yourEventsImgSpan.textContent = 'Image isn`t uploaded';
		const yourEventsImgImg = document.createElement('IMG');
		yourEventsImgImg.src = photo;
		const yourEventsImg = document.createElement('DIV');
		yourEventsImg.classList.add('your-events__img');
		const yourEventsTitle = document.createElement('H2');
		yourEventsTitle.classList.add('your-events__title');
		yourEventsTitle.classList.add('your-events-text');
		yourEventsTitle.textContent = title;
		const yourEventsPlace = document.createElement('P');
		yourEventsPlace.classList.add('your-events__place');
		yourEventsPlace.classList.add('your-events-text');
		yourEventsPlace.textContent = place;
		const yourEventsClose = document.createElement('DIV');
		yourEventsClose.classList.add('your-events__close');
		yourEventsClose.innerHTML = '<img class="events__image" src="/x.30950c9b.png" alt="">';
		yourEventsImg.appendChild(yourEventsImgSpan);
		yourEventsImg.appendChild(yourEventsImgImg);
		yourEventsItem.appendChild(yourEventsImg);
		yourEventsItem.appendChild(yourEventsTitle);
		yourEventsItem.appendChild(yourEventsPlace);
		yourEventsItem.appendChild(yourEventsClose);
		this.wrapper.appendChild(yourEventsItem);
	}

	deleteEvent(e) {
		const item = e.target;

		if (item.classList[0] === 'events__image') {
			const todo = item.parentElement.parentElement;
			todo.remove();
		};
	}

	init() {
		this.submit.addEventListener('click', (e) => {
			e.preventDefault();
			this.createElement(this.titleInput.value, null, this.placeInput.value);
		});
		this.wrapper.addEventListener('click', (e) => {
			this.deleteEvent(e);
		})
	}
}