const h1 = () => {
    const header = document.createElement("h1")
    header.id = "main-heading"
    header.textContent = "Hello World!"
    document.body.appendChild(header)

}
const p = () => {
    const pTag = document.createElement("p")
    pTag.id = 'main-text';
    pTag.classList = "boring-text"
    pTag.textContent = "Look, I'm some text!";
    document.body.append(pTag)
};

const h1P = () => {
    h1();
    p();
};
h1P();