export default class UI {
  constructor() {
    this.headerBtn = document.querySelector(".header__btn");
  }

  setEventtListeners() {
    this.headerBtn.addEventListener("click", () => this.toggleSidebar());
  }

  toggleSidebar() {
    const isExpanded = this.headerBtn.getAttribute("aria-expanded") === "true";
    this.headerBtn.setAttribute("aria-expanded", !isExpanded);
  }
}
