gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const btn_chapter = document.querySelector(".nav-chapter");
const btn_gallery = document.querySelector(".nav-gallery");
const btn_about = document.querySelector(".nav-about");
const btn_form = document.querySelector(".nav-form");
const outers = document.querySelectorAll(".outer");

let load_images = true;
let forms = [
	"/static/home/images/forms/gis-officers.jpg",
	"/static/home/images/forms/gis-p1.jpg",
	"/static/home/images/forms/gis-p2.jpg",
	"/static/home/images/forms/gis-p3.jpg",
	"/static/home/images/forms/gis-p4.jpg",
	"/static/home/images/forms/gis-p5.jpg",
	"/static/home/images/forms/gis-p6.jpg",
	"/static/home/images/forms/or.jpg",
	"/static/home/images/forms/sec.jpg",
];
let docs = [
	"/static/home/docs/IPO-Intellectual-Property-Office.pdf",
	"/static/home/docs/03-GBI-Official-Seal-or-Logo.Fina.Final-NC-Res.-12-05-dated-Apri-15-2012-1.pdf",
	"/static/home/docs/06-GBI-2019-New-Amended-By-Laws-NHQ-GBI-Sgd.pdf",
	"/static/home/docs/08-issuance-of-ID.pdf",
	"/static/home/docs/09-GBI-NC-Res.-11-12-Re-GBI-Proper-ID.-Final.pdf",
	"/static/home/docs/11-Panunumpa-ng-Katapatan.pdf",
	"/static/home/docs/14-Panunumpa-sa-Katungkulan.pdf",
	"/static/home/docs/15-GBI-INVESTITURE-Response.pdf",
];
const forms_overlay = document.querySelector(".forms-overlay");
const forms_container = document.querySelector(
	".forms-overlay .forms-container .reader"
);
const forms_dropdown = document.querySelector(
	".forms-overlay .forms-container .button-container .dropdown"
);
const forms_dropdown_items = document.querySelector(
	".forms-overlay .forms-container .button-container .dropdown .items"
);
const btn_close_form = document.querySelector(
	".forms-overlay .forms-container .button-container > i"
);
const btn_print_form = document.querySelector(
	".forms-overlay .forms-container .button-container .button"
);
const btn_forms_footer = document.querySelector("footer .title span");

let event_slider = document.querySelector(".left .events");
let mouse_down = false;
let start_x, scroll_left;

// ! HISTORY
const history = document.querySelector("#history");
const history_reader = document.querySelector(".history .reader");
const history_reader_children = [
	...document.querySelector(".history .reader").children,
];
const history_nav_first = document.querySelector(
	".history .nav-first"
).children;
const history_nav_last = document.querySelector(".history .nav-last").children;
const history_min_page_number = document.querySelector(
	".history .page-number .min-page"
);

// ! DOCTRINES
const doctrines_reader = document.querySelector(".doctrines .reader");
const doctrines_reader_children = [
	...document.querySelector(".doctrines .reader").children,
];
const doctrines_nav_first = document.querySelector(
	".doctrines .nav-first"
).children;
const doctrines_nav_last = document.querySelector(
	".doctrines .nav-last"
).children;
const doctrines_min_page_number = document.querySelector(
	".doctrines .page-number .min-page"
);

// ! LUMAD
const lumad_reader = document.querySelector(".lumad .reader");
const lumad_reader_children = [
	...document.querySelector(".lumad .reader").children,
];
const lumad_nav_first = document.querySelector(".lumad .nav-first").children;
const lumad_min_page_number = document.querySelector(
	".lumad .page-number .min-page"
);

const page_indices = {
	history: {
		page_index: 0,
		min: 1,
		max: 89,
	},
	doctrines: {
		page_index: 0,
		min: 1,
		max: 11,
	},
	lumad: {
		page_index: 0,
		min: 1,
		max: 10,
	},
};
const bookmarks = {
	history: [
		{ page_index: 1, page_class: ".page-2", range: [1, 24] },
		{ page_index: 25, page_class: ".page-26", range: [25, 45] },
		{ page_index: 46, page_class: ".page-47", range: [46, 88] },
	],
	doctrines: [
		{ page_index: 1, page_class: ".page-2", range: [1, 1] },
		{ page_index: 2, page_class: ".page-3", range: [2, 2] },
		{ page_index: 3, page_class: ".page-4", range: [3, 3] },
		{ page_index: 4, page_class: ".page-5", range: [4, 4] },
		{ page_index: 5, page_class: ".page-6", range: [5, 5] },
		{ page_index: 6, page_class: ".page-7", range: [6, 6] },
		{ page_index: 7, page_class: ".page-8", range: [7, 7] },
		{ page_index: 8, page_class: ".page-9", range: [8, 8] },
		{ page_index: 9, page_class: ".page-10", range: [9, 9] },
		{ page_index: 10, page_class: ".page-11", range: [10, 10] },
	],
};

const burger = document.querySelector(".burger");
const nav_overlay = document.querySelector(".nav-overlay");
const btn_overlay_event = document.querySelector(".nav-overlay-event");
const btn_overlay_chapter = document.querySelector(".nav-overlay-chapter");
const btn_overlay_gallery = document.querySelector(".nav-overlay-gallery");
const btn_overlay_about = document.querySelector(".nav-overlay-about");

// ! EVENT LISTENERS
btn_print_form.addEventListener("click", (e) => {
	let file_url = "";
	let filename = "";
	if (forms_container.querySelector(".doc")) {
		file_url = forms_container.querySelector(".doc").src;
		filename = file_url.split("/").pop();
	} else {
		file_url = forms_container.querySelector(".form").src;
		filename = file_url.split("/").pop();
	}
	let a = document.createElement("a");
	a.href = file_url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
});

btn_forms_footer.addEventListener("click", (e) => {
	document.querySelector("body").style.overflow = "hidden";
	forms_overlay.classList.add("active");
	btn_form.parentElement.classList.remove("inactive");
	btn_form.parentElement.classList.add("active");
	btn_form.parentElement.classList.add("scroll-active");
});

btn_form.addEventListener("click", (e) => {
	document.querySelector("body").style.overflow = "hidden";
	forms_overlay.classList.add("active");
	btn_form.parentElement.classList.remove("inactive");
	btn_form.parentElement.classList.add("active");
	btn_form.parentElement.classList.add("scroll-active");
});

btn_close_form.addEventListener("click", (e) => {
	document.querySelector("body").style.overflow = "auto";
	forms_overlay.classList.remove("active");
	btn_form.parentElement.classList.remove("active");
	btn_form.parentElement.classList.remove("scroll-active");
	btn_form.parentElement.classList.add("inactive");
});

forms_dropdown.addEventListener("click", (e) => {
	forms_dropdown_items.classList.toggle("active");
});

for (let child of forms_dropdown_items.children) {
	child.addEventListener("click", (e) => {
		let child_index = [...forms_dropdown_items.children].indexOf(e.target);
		try {
			forms_container.querySelector(".form").remove();
		} catch {}
		try {
			forms_container.querySelector(".doc").remove();
		} catch {}

		if (child_index > 8) {
			if (!forms_container.querySelector(".doc")) {
				let iframe = document.createElement("iframe");
				iframe.classList.add("doc");
				forms_container.appendChild(iframe);
			}
			forms_container.querySelector(".doc").frameBorder = 0;
			forms_container.querySelector(".doc").src = docs[child_index - 9];
		} else {
			if (!forms_container.querySelector(".form")) {
				let img = document.createElement("img");
				img.classList.add("form");
				forms_container.appendChild(img);
			}
			forms_container.querySelector(".form").src = forms[child_index];
		}
		forms_dropdown.querySelector(".display p").innerHTML = e.target.innerText;
	});
}

event_slider.addEventListener("mousemove", (e) => {
	e.preventDefault();
	if (!mouse_down) {
		return;
	}
	const x = e.pageX - event_slider.offsetLeft;
	const scroll = x - start_x;
	event_slider.scrollLeft = scroll_left - scroll;
});

event_slider.addEventListener("mousedown", start_dragging, false);
event_slider.addEventListener("mouseup", stop_dragging, false);
event_slider.addEventListener("mouseleave", stop_dragging, false);

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

// ! HISTORY
history_nav_first[0].addEventListener("click", (e) =>
	nav_left_clicked(
		e,
		"history",
		history_reader,
		history_reader_children,
		page_indices,
		history_min_page_number,
		history_nav_first,
		history_nav_last,
		bookmarks,
		"rgb(29,29,29)"
	)
);
history_nav_first[1].addEventListener("click", (e) =>
	nav_right_clicked(
		e,
		"history",
		history_reader,
		history_reader_children,
		page_indices,
		history_min_page_number,
		history_nav_first,
		history_nav_last,
		bookmarks,
		"rgb(29,29,29)"
	)
);
for (let i = 0; i < history_nav_last.length; i++) {
	history_nav_last[i].addEventListener("click", (e) =>
		nav_last_clicked(
			e,
			"history",
			history_reader,
			i,
			page_indices,
			bookmarks,
			history_nav_first,
			history_nav_last,
			history_min_page_number,
			"rgb(29,29,29)"
		)
	);
}

// ! DOCTRINES
doctrines_nav_first[0].addEventListener("click", (e) =>
	nav_left_clicked(
		e,
		"doctrines",
		doctrines_reader,
		doctrines_reader_children,
		page_indices,
		doctrines_min_page_number,
		doctrines_nav_first,
		doctrines_nav_last,
		bookmarks,
		"rgb(1, 0, 65)"
	)
);
doctrines_nav_first[1].addEventListener("click", (e) =>
	nav_right_clicked(
		e,
		"doctrines",
		doctrines_reader,
		doctrines_reader_children,
		page_indices,
		doctrines_min_page_number,
		doctrines_nav_first,
		doctrines_nav_last,
		bookmarks,
		"rgb(1, 0, 65)"
	)
);
for (let i = 0; i < doctrines_nav_last.length; i++) {
	doctrines_nav_last[i].addEventListener("click", (e) =>
		nav_last_clicked(
			e,
			"doctrines",
			doctrines_reader,
			i,
			page_indices,
			bookmarks,
			doctrines_nav_first,
			doctrines_nav_last,
			doctrines_min_page_number,
			"rgb(1, 0, 65)"
		)
	);
}

// ! LUMAD
lumad_nav_first[0].addEventListener("click", (e) =>
	nav_left_clicked(
		e,
		"lumad",
		lumad_reader,
		lumad_reader_children,
		page_indices,
		lumad_min_page_number,
		lumad_nav_first,
		null,
		null,
		"rgb(202, 202, 202)"
	)
);
lumad_nav_first[1].addEventListener("click", (e) =>
	nav_right_clicked(
		e,
		"lumad",
		lumad_reader,
		lumad_reader_children,
		page_indices,
		lumad_min_page_number,
		lumad_nav_first,
		null,
		null,
		"rgb(202, 202, 202)"
	)
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

gsap.to("#gallery", {
	scrollTrigger: {
		scroller: "#gallery",
		trigger: "#gallery .display",
		start: "top top",
		end: "95% bottom",
		onLeave: populate_images,
	},
});

// ABOUT
gsap.to(window, {
	scrollTrigger: {
		trigger: "#about",
		start: "top center",
		end: `96% center`,
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

gsap.set(".history .reader", { scrollTo: ".history .page-1" });
gsap.set(".doctrines .reader", { scrollTo: ".doctrines .page-1" });
gsap.set(".lumad .reader", { scrollTo: ".lumad .page-1" });

// ! FUNCTIONS
function nav_clicked(e, target, is_overlay = false) {
	if (is_overlay) {
		nav_overlay.classList.remove("active");
		gsap.to(".line-1", 0.5, { rotate: "0", y: 0, backgroundColor: "red" });
		gsap.to(".line-2", 0.5, { rotate: "0", y: 0, backgroundColor: "blue" });
	}
	gsap.to(window, { duration: 0.2, scrollTo: { y: target } });
}

function nav_left_clicked(
	e,
	section,
	reader,
	reader_children,
	page_indices,
	target_min_page_number,
	nav_first,
	nav_last,
	page_bookmarks,
	color
) {
	page_indices[section].page_index -= 1;
	let page_index = page_indices[section].page_index;
	let min = page_indices[section].min;
	let max = page_indices[section].max;

	if (page_index < min) {
		e.target.classList.add("inactive");
		e.target.classList.remove("active");
	}
	if (page_index + 1 <= max) {
		nav_first[1].classList.remove("inactive");
		nav_first[1].classList.add("active");
	}
	const prev_page = reader_children[page_index];
	gsap.to(reader, {
		duration: 0.2,
		scrollTo: `.${section} .${prev_page.className}`,
	});

	update_page_number(page_index, target_min_page_number);
	if (nav_last) {
		let target = "";
		for (let i = 0; i < page_bookmarks[section].length; i++) {
			console.log(i);
			if (page_index == 0) {
				target = "zero";
				break;
			}
			if (
				page_index >= page_bookmarks[section][i]["range"][0] &&
				page_index <= page_bookmarks[section][i]["range"][1]
			) {
				target = nav_last[i];
				break;
			}
		}
		update_last_nav(target, nav_last, color);
	}
}

function nav_right_clicked(
	e,
	section,
	reader,
	reader_children,
	page_indices,
	target_min_page_number,
	nav_first,
	nav_last,
	page_bookmarks,
	color
) {
	page_indices[section].page_index += 1;
	let page_index = page_indices[section].page_index;
	let min = page_indices[section].min;
	let max = page_indices[section].max;

	if (page_index + 1 > min) {
		nav_first[0].classList.remove("inactive");
		nav_first[0].classList.add("active");
	}
	if (page_index + 1 == max) {
		e.target.classList.add("inactive");
		e.target.classList.remove("active");
	}

	const next_page = reader_children[page_index];
	gsap.to(reader, {
		duration: 0.2,
		scrollTo: `.${section} .${next_page.className}`,
	});

	update_page_number(page_index, target_min_page_number);
	if (nav_last) {
		let target = "";
		for (let i = 0; i < page_bookmarks[section].length; i++) {
			console.log(i);
			if (page_index == 0) {
				target = "zero";
				break;
			}
			if (
				page_index >= page_bookmarks[section][i]["range"][0] &&
				page_index <= page_bookmarks[section][i]["range"][1]
			) {
				target = nav_last[i];
				break;
			}
		}
		update_last_nav(target, nav_last, color);
	}
}

function update_page_number(page_index, target_min_page_number) {
	let page_number = (page_index + 1).toString();
	if (page_number.length < 2) {
		target_min_page_number.innerHTML = `0${page_number}`;
	} else {
		target_min_page_number.innerHTML = page_number;
	}
}

function nav_last_clicked(
	e,
	section,
	reader,
	target,
	page_indices,
	page_bookmarks,
	nav_first,
	nav_last,
	target_min_page_number,
	color
) {
	gsap.to(reader, {
		duration: 0.2,
		scrollTo: `.${section} ${page_bookmarks[section][target]["page_class"]}`,
	});
	page_indices[section].page_index =
		page_bookmarks[section][target]["page_index"];

	update_last_nav(e.target, nav_last, color);
	update_page_number(page_indices[section].page_index, target_min_page_number);
	if (page_indices[section].page_index === reader.children.length - 1) {
		nav_first[0].classList.add("active");
		nav_first[0].classList.remove("inactive");
		nav_first[1].classList.add("inactive");
		nav_first[1].classList.remove("active");
	} else {
		nav_first[0].classList.add("active");
		nav_first[0].classList.remove("inactive");
		nav_first[1].classList.add("active");
		nav_first[1].classList.remove("inactive");
	}
}

function update_last_nav(target, children, color) {
	for (let child of children) {
		if (child === target) {
			child.style.backgroundColor = "white";
			continue;
		}
		child.style.backgroundColor = color;
	}
}

function populate_images() {
	const images = JSON.parse(document.getElementById("images").textContent);
	let unloaded_images = images.slice(4);
	if (load_images) {
		load_images = false;
		for (let image of unloaded_images) {
			let gallery_children =
				document.querySelector(".gallery .display").children;
			let col_1 = gallery_children[1];
			let col_2 = gallery_children[2];

			let img = document.createElement("img");
			img.src = image;

			if (col_1.offsetHeight <= col_2.offsetHeight) {
				col_1.appendChild(img);
			} else {
				col_2.appendChild(img);
			}
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

function start_dragging(e) {
	mouse_down = true;
	start_x = e.pageX - event_slider.offsetLeft;
	scroll_left = event_slider.scrollLeft;
	event_slider.style.cursor = "grabbing";
}

function stop_dragging(e) {
	mouse_down = false;
	event_slider.style.cursor = "grab";
}
