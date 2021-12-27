import './sass/main.scss';
import Modals from './modules/modals';
import ChangePages from './modules/changePages';
import CreateEvent from './modules/createEvents';

window.addEventListener('DOMContentLoaded', () => {
	const changePages = new ChangePages('.header-events', '.header-my-cabinet', '.events', '.my-cabinet');
	changePages.init();

	const modals = new Modals('.events__item', '.modal', '.modal__close');
	modals.init();

	const createEvent = new CreateEvent('.create-event__form', '.your-events__wrapper');
	createEvent.init();
})
