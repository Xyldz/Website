let boxes = document.getElementsByClassName("body-box");

let hoverAnim = (selectedBox, scaleup, scaledown, grayscale) => {
    let newStyle = selectedBox.style;
    newStyle.transform = "scale(" + scaleup + ")";
    for (let j = 0; j < boxes.length; j++) {
        if (boxes[j] !== selectedBox) {
            boxes[j].style.transform = "scale(" + scaledown + ")";
            boxes[j].style.filter = "grayscale(" + grayscale + ")";
        }
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
        hoverAnim(boxes[i], "1.01", "0.99", "1");
    });

    boxes[i].addEventListener("mouseleave", () => {
        hoverAnim(boxes[i], "1", "1", "0");
    });
}