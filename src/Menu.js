import { moveFocus } from './moveFocus';

class Menu {
    constructor(arrElem, container, nameStyleClassFocus = 'focus_elem_menu') {
        const containerNav = document.createElement('nav');
        container.appendChild(containerNav);

        this.containerNav = containerNav;
        this.arrElem = arrElem;
        this.containerForNav = container;
        this.indexFocus = 0;
        this.nameStyleClassFocus = nameStyleClassFocus;
        this.clickArraw = (e) => {
            if (e.keyCode === 37) {
                this.moveLeft();
            }

            if (e.keyCode === 39) {
                this.moveRight();
            }
        };
        this.clickEnter = (e) => {
            if (e.keyCode === 13) {
                this.transition();
            }
        }
    }

    drowMenu() {
        const frag = document.createDocumentFragment();
        this.arrElem.forEach((item, index) => {
            const a = document.createElement('a');
            a.innerText = item.name;
            if (index === this.indexFocus) {
                a.classList.add(this.nameStyleClassFocus);
            }
            Object.keys(item.attributes).forEach(itemAttrib => {
                if (itemAttrib === 'class') {
                    a.classList.add(item.attributes[itemAttrib]);
                } else {
                    a.setAttribute(itemAttrib, item.attributes[itemAttrib]);
                }
            })
            frag.appendChild(a);
        })
        if (this.containerNav.innerHTML !== '') {
            this.containerNav.innerHTML = '';
        }
        this.containerNav.appendChild(frag);
    }

    removeElements(...arrName) {
        const arrWithoutRemElem = [];
        this.arrElem.forEach(item => {
            if (arrName.indexOf(item.name) === -1) {
                arrWithoutRemElem.push(item);
            }
        })
        this.arrElem = arrWithoutRemElem;
    }

    addElements(...arrNewElem) {
        this.arrElem = this.arrElem.concat(...arrNewElem);
    }

    transition() {
        if (this.arrElem[this.indexFocus].attributes.href !== undefined) {
            window.location.href = this.arrElem[this.indexFocus].attributes.href
        }
    }

    moveLeft() {
        const oldIndexFocus = this.indexFocus;
        this.indexFocus = (oldIndexFocus - 1 === -1)
            ? this.arrElem.length - 1
            : oldIndexFocus - 1;
        moveFocus(this.containerNav, oldIndexFocus, this.indexFocus, this.nameStyleClassFocus);

    }

    moveRight() {
        const oldIndexFocus = this.indexFocus;
        this.indexFocus = (this.indexFocus + 1 === this.arrElem.length)
            ? 0
            : this.indexFocus + 1;
        moveFocus(this.containerNav, oldIndexFocus, this.indexFocus, this.nameStyleClassFocus);
    }

    bindListener() {
        document.body.addEventListener('keypress', this.clickEnter);
        document.body.addEventListener('keydown', this.clickArraw);
    }

    unbindListener() {
        document.body.removeEventListener('keypress', this.clickEnter);
        document.body.removeEventListener('keydown', this.clickArraw);
    }

    changeFocusClassName(str) {
        this.nameStyleClassFocus = str;
    }

    addClassForContNav(...className) {
        const arrClasName = [].concat(...className);
        arrClasName.forEach(item => {
            this.containerNav.classList.add(item);
        })
    }

    removeClassForContNav(...className) {
        const arrClasName = [].concat(...className);
        arrClasName.forEach(item => {
            this.containerNav.classList.remove(item);
        })
    }
}

export { Menu };