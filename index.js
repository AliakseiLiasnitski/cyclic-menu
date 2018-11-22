import './style.css';
import { Menu } from './src/index';

const arrElemMenu = [
    { name: 'MAIN', attributes: { href: '#MAIN', class: 'elem_menu' } },
    { name: 'SEARCH', attributes: { href: '#SEARCH', class: 'elem_menu' } },
    { name: 'LIBRARY', attributes: { href: '#LIBRARY', class: 'elem_menu' } },
    { name: 'SETTINGS', attributes: { href: '#SETTINGS', class: 'elem_menu' } },
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.body;
    const cyclicMenu = new Menu(arrElemMenu, container, 'focus_elem_menu');
    cyclicMenu.drowMenu();
    cyclicMenu.bindListener();
})