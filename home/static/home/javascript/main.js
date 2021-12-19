gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const btn_chapter = document.querySelector(".nav-chapter");
const btn_gallery = document.querySelector(".nav-gallery");
const btn_logo = document.querySelector(".nav-logo");
const btn_about = document.querySelector(".nav-about");
const btn_statement = document.querySelector(".nav-statement");
const btn_history = document.querySelector(".nav-history");
const btn_form = document.querySelector(".nav-form");
const outers = document.querySelectorAll(".outer");

const btn_left = document.querySelector(".history nav .left");
const btn_right = document.querySelector(".history nav .right");
const min_page_number = document.querySelector(
	".history .page-number .min-page"
);
const max_page_number = document.querySelector(
	".history .page-number .max-page"
);

let page_index = 0;
let min_page = 1;
let max_page = 89;

const history_one = document.querySelector(".nav-last .one");
const history_two = document.querySelector(".nav-last .two");
const history_three = document.querySelector(".nav-last .three");

const burger = document.querySelector(".burger");
const nav_overlay = document.querySelector(".nav-overlay");
const btn_overlay_event = document.querySelector(".nav-overlay-event");
const btn_overlay_chapter = document.querySelector(".nav-overlay-chapter");
const btn_overlay_gallery = document.querySelector(".nav-overlay-gallery");
const btn_overlay_logo = document.querySelector(".nav-overlay-logo");
const btn_overlay_about = document.querySelector(".nav-overlay-about");
const btn_overlay_statement = document.querySelector(".nav-overlay-statement");
const btn_overlay_history = document.querySelector(".nav-overlay-history");

// ! EVENT LISTENERS
for (let outer of outers) {
	outer.addEventListener("mouseenter", (e) => {
		let outer_classes = [...outer.classList];
		if (
			outer_classes.includes("inactive") &&
			!outer_classes.includes("scroll-active")
		) {
			outer.classList.add("active");
			outer.classList.remove("inactive");
		}
	});
	outer.addEventListener("mouseleave", (e) => {
		let outer_classes = [...outer.classList];
		if (
			outer_classes.includes("active") &&
			!outer_classes.includes("scroll-active")
		) {
			outer.classList.add("inactive");
			outer.classList.remove("active");
		}
	});
}

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		max_page_number.innerHTML = max_page.toString();
		populate_images();
	}
};

btn_overlay_event.addEventListener("click", (e) =>
	nav_clicked(e, "#events", true)
);

btn_chapter.addEventListener("click", (e) => nav_clicked(e, "#chapters"));
btn_overlay_chapter.addEventListener("click", (e) =>
	nav_clicked(e, "#chapters", true)
);

btn_gallery.addEventListener("click", (e) => nav_clicked(e, "#gallery"));
btn_overlay_gallery.addEventListener("click", (e) =>
	nav_clicked(e, "#gallery", true)
);

btn_about.addEventListener("click", (e) => nav_clicked(e, "#about"));
btn_overlay_about.addEventListener("click", (e) =>
	nav_clicked(e, "#about", true)
);

btn_logo.addEventListener("click", (e) => nav_clicked(e, "#logo"));
btn_overlay_logo.addEventListener("click", (e) =>
	nav_clicked(e, "#logo", true)
);

btn_statement.addEventListener("click", (e) => nav_clicked(e, "#statements"));
btn_overlay_statement.addEventListener("click", (e) =>
	nav_clicked(e, "#statements", true)
);

btn_history.addEventListener("click", (e) => nav_clicked(e, "#history"));
btn_overlay_history.addEventListener("click", (e) =>
	nav_clicked(e, "#history", true)
);

btn_left.addEventListener("click", nav_left_clicked);
btn_right.addEventListener("click", nav_right_clicked);

history_one.addEventListener("click", (e) =>
	history_nav_clicked(e, history_one.className)
);
history_two.addEventListener("click", (e) =>
	history_nav_clicked(e, history_two.className)
);
history_three.addEventListener("click", (e) =>
	history_nav_clicked(e, history_three.className)
);

burger.addEventListener("click", burger_clicked);

// ! SCROLL TRIGGERS
// CHAPTERS
gsap.to(window, {
	scrollTrigger: {
		trigger: "#chapters",
		start: "top center",
		end: "bottom center",
		onEnter: () => {
			btn_chapter.parentElement.classList.add("active");
			btn_chapter.parentElement.classList.remove("inactive");
			btn_chapter.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_chapter.parentElement.classList.add("inactive");
			btn_chapter.parentElement.classList.remove("active");
			btn_chapter.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_chapter.parentElement.classList.add("active");
			btn_chapter.parentElement.classList.remove("inactive");
			btn_chapter.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_chapter.parentElement.classList.add("inactive");
			btn_chapter.parentElement.classList.remove("active");
			btn_chapter.parentElement.classList.remove("scroll-active");
		},
	},
});

// GALLERY
gsap.to(window, {
	scrollTrigger: {
		trigger: "#gallery",
		start: "top center",
		end: "bottom center",
		onEnter: () => {
			btn_gallery.parentElement.classList.add("active");
			btn_gallery.parentElement.classList.remove("inactive");
			btn_gallery.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_gallery.parentElement.classList.add("inactive");
			btn_gallery.parentElement.classList.remove("active");
			btn_gallery.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_gallery.parentElement.classList.add("active");
			btn_gallery.parentElement.classList.remove("inactive");
			btn_gallery.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_gallery.parentElement.classList.add("inactive");
			btn_gallery.parentElement.classList.remove("active");
			btn_gallery.parentElement.classList.remove("scroll-active");
		},
	},
});

// ABOUT
gsap.to(window, {
	scrollTrigger: {
		trigger: "#about",
		start: "top center",
		end: "85% center",
		onEnter: () => {
			btn_about.parentElement.classList.add("active");
			btn_about.parentElement.classList.remove("inactive");
			btn_about.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_about.parentElement.classList.add("inactive");
			btn_about.parentElement.classList.remove("active");
			btn_about.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_about.parentElement.classList.add("active");
			btn_about.parentElement.classList.remove("inactive");
			btn_about.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_about.parentElement.classList.add("inactive");
			btn_about.parentElement.classList.remove("active");
			btn_about.parentElement.classList.remove("scroll-active");
		},
	},
});

// LOGO
gsap.to(window, {
	scrollTrigger: {
		trigger: "#logo",
		start: "top center",
		end: "bottom center",
		onEnter: () => {
			btn_logo.parentElement.classList.add("active");
			btn_logo.parentElement.classList.remove("inactive");
			btn_logo.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_logo.parentElement.classList.add("inactive");
			btn_logo.parentElement.classList.remove("active");
			btn_logo.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_logo.parentElement.classList.add("active");
			btn_logo.parentElement.classList.remove("inactive");
			btn_logo.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_logo.parentElement.classList.add("inactive");
			btn_logo.parentElement.classList.remove("active");
			btn_logo.parentElement.classList.remove("scroll-active");
		},
	},
});

// STATEMENTS
gsap.to(window, {
	scrollTrigger: {
		trigger: "#statements",
		start: "top center",
		end: "bottom center",
		onEnter: () => {
			btn_statement.parentElement.classList.add("active");
			btn_statement.parentElement.classList.remove("inactive");
			btn_statement.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_statement.parentElement.classList.add("inactive");
			btn_statement.parentElement.classList.remove("active");
			btn_statement.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_statement.parentElement.classList.add("active");
			btn_statement.parentElement.classList.remove("inactive");
			btn_statement.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_statement.parentElement.classList.add("inactive");
			btn_statement.parentElement.classList.remove("active");
			btn_statement.parentElement.classList.remove("scroll-active");
		},
	},
});

// HISTORY
gsap.to(window, {
	scrollTrigger: {
		trigger: "#history",
		start: "top center",
		end: "85% center",
		onEnter: () => {
			btn_history.parentElement.classList.add("active");
			btn_history.parentElement.classList.remove("inactive");
			btn_history.parentElement.classList.add("scroll-active");
		},
		onLeave: () => {
			btn_history.parentElement.classList.add("inactive");
			btn_history.parentElement.classList.remove("active");
			btn_history.parentElement.classList.remove("scroll-active");
		},
		onEnterBack: () => {
			btn_history.parentElement.classList.add("active");
			btn_history.parentElement.classList.remove("inactive");
			btn_history.parentElement.classList.add("scroll-active");
		},
		onLeaveBack: () => {
			btn_history.parentElement.classList.add("inactive");
			btn_history.parentElement.classList.remove("active");
			btn_history.parentElement.classList.remove("scroll-active");
		},
	},
});

gsap.set(".reader", { scrollTo: `.page-1` });

// ! FUNCTIONS
function nav_clicked(e, target, is_overlay = false) {
	if (is_overlay) {
		nav_overlay.classList.remove("active");
		gsap.to(".line-1", 0.5, { rotate: "0", y: 0, backgroundColor: "red" });
		gsap.to(".line-2", 0.5, { rotate: "0", y: 0, backgroundColor: "blue" });
	}

	offset =
		(window.innerHeight - document.querySelector(target).offsetHeight) / 2;
	gsap.to(window, { duration: 0.2, scrollTo: { y: target, offsetY: offset } });
}

function nav_left_clicked(e) {
	page_index -= 1;
	if (page_index + 1 == min_page) {
		btn_left.classList.add("inactive");
		btn_left.classList.remove("active");
	}
	if (page_index + 1 < max_page) {
		btn_right.classList.remove("inactive");
		btn_right.classList.add("active");
	}
	const prev_page = [...document.querySelector(".history .reader").children][
		page_index
	];
	gsap.to(".history .reader", {
		duration: 0.2,
		scrollTo: `.${prev_page.className}`,
	});

	update_page_number();
	if (page_index == 0) {
		update_history_nav("zero");
	} else if (page_index + 1 >= 1 && page_index + 1 <= 25) {
		update_history_nav("one");
	} else if (page_index + 1 >= 26 && page_index + 1 <= 46) {
		update_history_nav("two");
	} else if (page_index + 1 >= 47) {
		update_history_nav("three");
	}
}

function nav_right_clicked(e) {
	page_index += 1;

	if (page_index + 1 > min_page) {
		btn_left.classList.remove("inactive");
		btn_left.classList.add("active");
	}
	if (page_index + 1 == max_page) {
		btn_right.classList.add("inactive");
		btn_right.classList.remove("active");
	}

	const next_page = [...document.querySelector(".history .reader").children][
		page_index
	];
	gsap.to(".history .reader", {
		duration: 0.2,
		scrollTo: `.${next_page.className}`,
	});

	let page_number = (page_index + 1).toString();
	if (page_number.length < 2) {
		min_page_number.innerHTML = `0${page_number}`;
	} else {
		min_page_number.innerHTML = page_number;
	}

	update_page_number();
	if (page_index == 0) {
		update_history_nav("zero");
	} else if (page_index + 1 >= 1 && page_index + 1 <= 25) {
		update_history_nav("one");
	} else if (page_index + 1 >= 26 && page_index + 1 <= 46) {
		update_history_nav("two");
	} else if (page_index + 1 >= 47) {
		update_history_nav("three");
	}
}

function update_page_number() {
	let page_number = (page_index + 1).toString();
	if (page_number.length < 2) {
		min_page_number.innerHTML = `0${page_number}`;
	} else {
		min_page_number.innerHTML = page_number;
	}
}

function history_nav_clicked(e, target) {
	switch (target) {
		case "one":
			gsap.to(".reader", { duration: 0.2, scrollTo: ".page-2" });
			page_index = 1;
			break;
		case "two":
			gsap.to(".reader", { duration: 0.2, scrollTo: ".page-26" });
			page_index = 25;
			break;
		case "three":
			gsap.to(".reader", { duration: 0.2, scrollTo: ".page-47" });
			page_index = 46;
			break;
	}
	update_history_nav(target);
	update_page_number();
	if (btn_right.classList.contains("inactive")) {
		btn_right.classList.remove("inactive");
		btn_right.classList.add("active");
	}
	if (btn_left.classList.contains("inactive")) {
		btn_left.classList.remove("inactive");
		btn_left.classList.add("active");
	}
}

function update_history_nav(target) {
	switch (target) {
		case "one":
			history_one.style.backgroundColor = "white";
			history_two.style.backgroundColor = "rgb(29, 29, 29)";
			history_three.style.backgroundColor = "rgb(29, 29, 29)";
			break;
		case "two":
			history_one.style.backgroundColor = "rgb(29, 29, 29)";
			history_two.style.backgroundColor = "white";
			history_three.style.backgroundColor = "rgb(29, 29, 29)";
			break;
		case "three":
			history_one.style.backgroundColor = "rgb(29, 29, 29)";
			history_two.style.backgroundColor = "rgb(29, 29, 29)";
			history_three.style.backgroundColor = "white";
			break;
		default:
			history_one.style.backgroundColor = "rgb(29, 29, 29)";
			history_two.style.backgroundColor = "rgb(29, 29, 29)";
			history_three.style.backgroundColor = "rgb(29, 29, 29)";
	}
}

function populate_images() {
	const images = JSON.parse(document.getElementById("images").textContent);

	for (let image of images) {
		let gallery_children = document.querySelector(".gallery div").children;
		let col_1 = gallery_children[0];
		let col_2 = gallery_children[1];

		let img = document.createElement("img");
		img.src = image;

		if (col_1.offsetHeight <= col_2.offsetHeight) {
			col_1.appendChild(img);
		} else {
			col_2.appendChild(img);
		}
	}
}

function burger_clicked(e) {
	if (!nav_overlay.classList.contains("active")) {
		gsap.to(".line-1", 0.5, { rotate: "45", y: 5, backgroundColor: "white" });
		gsap.to(".line-2", 0.5, { rotate: "-45", y: -5, backgroundColor: "white" });
		nav_overlay.classList.add("active");
	} else {
		gsap.to(".line-1", 0.5, { rotate: "0", y: 0, backgroundColor: "red" });
		gsap.to(".line-2", 0.5, { rotate: "0", y: 0, backgroundColor: "blue" });
		nav_overlay.classList.remove("active");
	}
}
