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
    let sectionPosition, sectionOffset;
    const navigationHeight = document.querySelector("header nav").offsetHeight;
    const pageWidth = window.innerWidth;
    if (sectionId !== "#") {
      sectionOffset = document.querySelector(sectionId).offsetTop; // returns the top position (in pixels) relative to the top of the offsetParent element.
      sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
    } else {
      sectionPosition = 0;
    }
    window.scrollTo({
      'behavior': 'smooth', //Allows a smooth animated "scroll effect"
      'left': 0,
      'top': sectionPosition
    })
  }

  const onTestimonialChange = () => {
    let fistChild, lastChild;
    let prevArrow = document.querySelector("#aw-testimonials-prev");
    let nextArrow = document.querySelector("#aw-testimonials-next");
    const testimonials = document.querySelector(".aw-testimonials ul");
    document.addEventListener('click', () => {
      if (event.target === prevArrow) {
        lastChild = testimonials.lastElementChild; //  returns the last child element of the specified element
        testimonials.insertAdjacentElement("afterbegin", lastChild); // method inserts a the specified element into a specified position;
      } else if (event.target === nextArrow) {
        fistChild = testimonials.firstElementChild;
        testimonials.insertAdjacentElement("beforeend", fistChild);
      }
    })
  }

  const onGalleryImageClick = () => {
    const galleryImageList = document.querySelectorAll("#aw-gallery li");
    const galleryImages = [...galleryImageList];
    galleryImages.forEach(image => {
      image.addEventListener("click", event => {
        galleryImageOpen(event.target);
      })
    })
  };
  const galleryImageOpen = image => {
    const imageSrc = image.getAttribute("src");
    const openedImage = `<div class='aw-backdrop'><img src='${imageSrc}' alt=''/>
                        <span class='aw-backdrop-close'>X</span></div>`;
    document.body.insertAdjacentHTML("beforeend", openedImage);
    galleryImageClose();
  }
  const galleryImageClose = () => {
    const closeButton = document.querySelector(".aw-backdrop-close");
    closeButton.addEventListener('click', () => {
      const backdrop = document.querySelector(".aw-backdrop");
      backdrop.remove();
    })
  }


  window.addEventListener("scroll", () => { // event fires when the document view or an element has been scrolled.
    addMenuBackground()
  });

  onNavItemClick();
  onTestimonialChange();
  onGalleryImageClick();
})();