function random_color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function click_to_change() {
    var randomColor = random_color();
    document.body.style.backgroundColor = randomColor;
}