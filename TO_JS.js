const arr = localStorage.getItem("ite")
  ? JSON.parse(localStorage.getItem("ite"))
  : {
      ite: [],
    };

const s = document.getElementById("s");
s.addEventListener("click", (e) => {
  console.log(e.target.value);
  let t = document.getElementById("title").value;
  let d = document.getElementById("desc").value;
  createitem(t, d);
  display_list();
  // console.log("-", t);
});
function createitem(name, age) {
  arr.push({ name: name, age: age });
  localStorage.setItem("ite", JSON.stringify(arr));
  location.reload();
}
function display_list() {
  arr.forEach((element, index) => {
    const su = document.createElement("summary");
    const de = document.createElement("details");
    const del = document.createElement("button");
    del.innerHTML = "Delete";
    del.style.position = "relative";
    del.style.right = "-150px";
    del.style.backgroundColor = "red";
    de.textContent = element.age;
    su.textContent = element.name;
    de.appendChild(su);
    su.appendChild(del);
    document.body.appendChild(de);
    console.log(arr);
    del.addEventListener("click", (e) => {
      JSON.parse(localStorage.getItem("arr"));
      // const myData = JSON.parse(localStorage.getItem("to"));
      let index = arr.findIndex(function (item) {
        return item.name == e.name;
      });
      arr.splice(index, 1);
      document.body.removeChild(de);
      localStorage.setItem("ite", JSON.stringify(arr));
    });
  });
  console.log(arr);
}
window.onload = function () {
  display_list();
  // Delete_list();
};
