const allSelects = document.querySelectorAll(".select");

allSelects.forEach((el) => {
	el.addEventListener("click", (event) => {
		allSelects.forEach((element) => {
			element.classList.remove("active");
		});

		event.target.classList.add("active");
	});
});
