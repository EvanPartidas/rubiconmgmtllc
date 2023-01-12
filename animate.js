

const arr = document.querySelectorAll(".scroll-animable");

const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let children = entry.target.children;
        for(let i=0;i<children.length;i++){
            let child = children[i];
            child.classList.add("scroll-animate");
        }
      }
    })
  }

console.log(arr);
const animObserver = new IntersectionObserver(callback, {threshold: 0.3});

for(let i=0;i<arr.length;i++){
    let el = arr[i];
    //We need to actually detect when container is in view
    console.log(el);
    animObserver.observe(el.parentElement);
}