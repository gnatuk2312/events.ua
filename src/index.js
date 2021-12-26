import Modals from './modules/modals';
import ChangePages from './modules/changePages';
import './sass/main.scss';

window.addEventListener('DOMContentLoaded', () => {
	const changePages = new ChangePages('.header-events', '.header-my-cabinet', '.events', '.my-cabinet');
	changePages.init();

	const modals = new Modals('.events__item', '.modal', '.modal__close');
	modals.init();
})
