import styles from "./style.css";
// alert("hello java");
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    var setClasses = !this.classList.contains("active"); //true
    console.log(setClasses, "first");
    setClass(acc, "active", "remove");
    setClass(panel, "show", "remove");
    console.log(setClasses, "second");

    if (setClasses) {
      console.log(setClasses, "third");
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
