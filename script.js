const mainDiv = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const multipleDivs = document.createElement('div');
    multipleDivs.className = "sketchPad";
    mainDiv.appendChild(multipleDivs);
}