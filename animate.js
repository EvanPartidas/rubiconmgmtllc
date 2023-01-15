

const arr = document.querySelectorAll(".scroll-animable");

const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animate");
      }
    })
  }

console.log(arr);

let rootMarginBottom = -200;
if(window.innerWidth<window.innerHeight){
  rootMarginBottom = -80;
}
console.log(rootMarginBottom);

const animObserver = new IntersectionObserver(callback, {rootMargin: `0% 0% ${rootMarginBottom}px 0%`});
  
for(let i=0;i<arr.length;i++){
    let el = arr[i];
    console.log(el);
    animObserver.observe(el);
}