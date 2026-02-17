function changeText(){
	var text = document.querySelector(".links");
	var btn = document.querySelector("#menubtn");
	switch (text.style.display) {
		case "":
			case "none":
				text.style.display = "flex";
				text.classList.add("fade");
				btn.classList.add("active")

			break;
	
		default:
			text.style.display = "none";
			btn.classList.remove("active");
			break;
	}
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
