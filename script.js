/* generate random color code */
function random_color() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* change background color & color code in span tag */
function click_to_change() {
    let element = document.getElementById("color_code");
    let randomColor = random_color();
    document.body.style.backgroundColor = randomColor;
    element.textContent = randomColor
}

/* reset color button */
function reset_color(){
    let color = "#ffff";
    let element = document.getElementById("color_code");
    document.body.style.backgroundColor = color
    element.textContent = color
}