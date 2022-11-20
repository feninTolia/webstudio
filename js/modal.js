(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  function removeListeners() {
    document.removeEventListener('keydown', onEscapeInModalClick);
    refs.closeModalBtn.removeEventListener('click', closeModal);
    refs.modal.removeEventListener('click', onModalBackdropClick);
  }

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscapeInModalClick);
    refs.closeModalBtn.addEventListener('click', closeModal);
    refs.modal.addEventListener('click', onModalBackdropClick);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    removeListeners();
  }

  function onModalBackdropClick(e) {
    if (e.target.classList.value !== 'backdrop') {
      return;
    }
    refs.modal.classList.toggle('is-hidden');
    removeListeners();
  }

  const onEscapeInModalClick = (e) => {
    if (e.key !== 'Escape') {
      return;
    }
    refs.modal.classList.toggle('is-hidden');
    removeListeners();
  };

  refs.openModalBtn.addEventListener('click', openModal);
})();
