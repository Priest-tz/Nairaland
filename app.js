document.addEventListener("DOMContentLoaded", function () {
	// Variables
	const hamburger = document.querySelector(".hamburger");
	const sidebarMenu = document.querySelector(".sidebar");
	const topicPoints = document.querySelectorAll(".topic-point");
	const dateDisplay = document.querySelector("#date-display");

	// Toggle the sidebar menu and hamburger icon when the hamburger is clicked
	hamburger.addEventListener("click", () => {
		sidebarMenu.classList.toggle("active");
		hamburger.classList.toggle("active");

		document.body.style.overflow = sidebarMenu.classList.contains("active")
			? "hidden"
			: "auto";
	});

	// Remove "active" class from the sidebar and hamburger when a topic point is clicked
	topicPoints.forEach((topicPoint) => {
		topicPoint.addEventListener("click", () => {
			hamburger.classList.remove("active");
			sidebarMenu.classList.remove("active");
		});
	});

	// Get the current date
	const currentDate = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	const formattedDate = currentDate.toLocaleDateString("en-US", options);

	// Display the formatted date
	dateDisplay.textContent = formattedDate;

	// Comment textarea display toggle for all elements with class "comment"
	const commentElements = document.querySelectorAll(".comment");
	const textAreaElements = document.querySelectorAll(".textarea");

	commentElements.forEach((commentEl, index) => {
		const textAreaEl = textAreaElements[index];
		let isTextareaVisible = false;

		textAreaEl.style.display = "none";

		commentEl.addEventListener("click", () => {
			isTextareaVisible = !isTextareaVisible;
			textAreaEl.style.display = isTextareaVisible ? "block" : "none";
		});
	});
});
