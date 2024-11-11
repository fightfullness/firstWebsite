
export function addObserver (element) {
    const observer = new IntersectionObserver (entries => {
        if (entries[0].isIntersecting){
            element.classList.add("in-view");
            console.log(entries);
            observer.disconnect();
        }
    });

    observer.observe(element);
}