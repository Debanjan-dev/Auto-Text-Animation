const containerE1 = document.querySelector(".container");

const carr = ["Debanjan", "Youtuber", "Developer", "Editor", "Music Lover"];

let carrIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
	containerE1.innerHTML = `<h1>I am ${carr[carrIndex].slice(
		0,
		characterIndex
	)}</h1>`;

	if (characterIndex < carr[carrIndex].length) {
		characterIndex++;
		setTimeout(updateText, 100);
	} else {
		carrIndex++;
		if (carrIndex >= carr.length) {
			carrIndex = 0; // Reset carrIndex to 0 when it reaches the end of the array
		}
		setTimeout(() => {
			characterIndex = 0;
			updateText();
		}, 2000);
	}
}
