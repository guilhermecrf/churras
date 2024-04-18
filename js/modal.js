export const Modal = {
    wrapper: document.querySelector('.modal-result'),
    message: document.querySelector('#change'),
    buttonClose: document.querySelector('#close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}