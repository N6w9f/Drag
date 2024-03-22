const form = document.querySelector(".add");
const add = document.querySelector("#add");
const boxes = document.querySelector(".boxes");
let lis = document.querySelectorAll(".boxes li");
let dragged = null;
add.addEventListener("click", () => {
  if (form.children[0].value !== "") {
    const li = document.createElement("li");
    li.textContent = form.children[0].value;
    li.setAttribute("draggable", "true");
    boxes.children[form.children[1].value].append(li);
  }
  lis = document.querySelectorAll(".boxes li");
  dragEvents();
});
[...boxes.children].forEach((ele) => {
  ele.addEventListener("dragover", (e) => {
    e.preventDefault();
    ele.style.scale = 1.02;
  });
  ele.addEventListener("dragleave", () => {
    ele.style.scale = 1;
  });
  ele.addEventListener("drop", () => {
    ele.append(dragged);
  });
});
function dragEvents() {
  lis.forEach((ele) => {
    ele.addEventListener("dragstart", () => {
      ele.style.opacity = 0.5;
      dragged = ele;
    });
    ele.addEventListener("dragend", () => {
      ele.style.opacity = 1;
      dragged = null;
    });
    ele.addEventListener("drop", () => {
      boxes.children[numberOfBox].append(ele);
      console.log(boxes.children[numberOfBox]);
      console.log("hello");
    });
  });
}
