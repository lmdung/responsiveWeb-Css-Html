(() => {
  const mobileWidth = 680;

  const addMenuBackground = () => {
    const pageWidth = window.innerWidth; //Get the current frame's height and width
    const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop // Safari || Chrome, Firefox, IE and Opera...
    const navigation = document.querySelector("header nav"); // first element in the document with tag nav in header
    if (pageWidth > mobileWidth) {
      bodyOffset > 0 ? navigation.classList.add('aw-nav-fixed') : navigation.classList.remove('aw-nav-fixed') // add or remove class
    }
  }

  const onNavItemClick = () => {
    const navItemList = document.querySelectorAll(".aw-section-link"); // all element with class aw-section-link
    const navItems = [...navItemList];
    navItems.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href') || event.target.dataset.href; // returns the element that triggered the event
        scrollToSection(sectionId);
      })
    })
  }

  const scrollToSection = sectionId => {
    console.log(sectionId)
  }

  window.addEventListener("scroll", () => { // event fires when the document view or an element has been scrolled.
    addMenuBackground()
  });

  onNavItemClick();
})();