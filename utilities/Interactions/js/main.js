let link = document.getElementById("link-test-click");
let input = document.getElementById("input-test-change");
let button = document.getElementById("button-test-focus");
let child = document.getElementById("element-child");
let link_two = document.getElementById("link-two");

link.addEventListener("click", () => {
	alert("are you sure  you want to go to google ?");
});

input.addEventListener("change", (input) => {
	alert(
		"The input value has changed. The new value is: " + input.target.value
	);
});

button.addEventListener("focus", () => {
	button.style.backgroundColor = "red";
	button.style.borderColor = "red";
	button.style.boxShadow = "none";
});

child.addEventListener("click", () => {
	child.style.backgroundColor = "green";
});

link_two.addEventListener("focus", () => {
	link_two.style.textDecoration = "none";
});
