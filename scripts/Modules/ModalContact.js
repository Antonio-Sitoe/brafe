export default function ModalContact(
  selector = "[data-contatos]",
  classe = "ative"
) {
  const removeModal = (event) => {
    const currentTarget = event.currentTarget === event.target;
    if (currentTarget) event.currentTarget.classList.remove(classe);
  };

  const getEventModal = (modal) => {
    if (modal.classList.contains("ative")) {
      modal.addEventListener("click", removeModal);
      modal.addEventListener("touch", removeModal);
    }
  };

  const addModal = (event) => {
    event.preventDefault();
    const modal = document.querySelector(".modal-container");
    modal.classList.add(classe);
    getEventModal(modal);
  };

  const contacto = document.querySelector(selector);
  contacto.addEventListener("click", addModal);

  return { selector, classe, addModal, getEventModal, removeModal };
}
