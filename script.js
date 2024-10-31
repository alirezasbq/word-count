let orginText = document.querySelector("#text");
let word = document.querySelector("#word-count");
let char = document.querySelector("#char-count");

orginText.addEventListener('input', (e) => {
    char.innerHTML = e.target.value.length;
    let words = e.target.value.split(" ").filter(() => {
        return orginText.value.length > 0;
    });
    word.innerHTML = words.length;
});

