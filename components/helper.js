
export function observerInview (element, _class) {
    const observer = new IntersectionObserver (entries => {
        if (entries[0].isIntersecting){
            element.classList.add(_class);
            observer.disconnect();
        }
    });

    observer.observe(element);
}

export function observerNavbar (element, observee, _class) {
    const observer = new IntersectionObserver (entries => {
        if (!entries[0].isIntersecting){
            element.classList.add(_class);
            // elementHide.classList.add("hidden")
        } else {
            element.classList.remove(_class);
            // elementHide.classList.remove("hidden");
        }
    });

    observer.observe(observee);
}

export function getRandom (max) {
    return Math.ceil(Math.random() * max);
  }

  