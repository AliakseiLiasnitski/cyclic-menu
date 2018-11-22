function moveFocus(container, oldIndex, newIndex, nameClassFocus) {
    const arrEelemDOM = container.children;
    arrEelemDOM[oldIndex].classList.remove(nameClassFocus);
    arrEelemDOM[newIndex].classList.add(nameClassFocus);
    arrEelemDOM[newIndex].focus();
}

export { moveFocus };