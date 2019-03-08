const selector = elem => document.querySelector(elem);
const body = selector("body");

const addMessage = (element, msg, cls) => {
	const patt = new RegExp("<");
	const messageElement = document.createElement("div");
	if (patt.test(msg)) {
		messageElement.innerHTML = msg
	} else messageElement.textContent = msg;
	if (cls) messageElement.classList.add(cls);
	element.appendChild(messageElement);
}

let x = 0;

function slowPrint(element, msg, time) {
    let timer = msg.length;
    let timeout = setTimeout(() => {
        x++;
        element.innerHTML += `${msg[x - 1]}`;
        console.log(msg[x - 1])
        slowPrint(element, msg, time);
    }, time);
    if (x >= timer) {
        clearTimeout(timeout)
        x = 0;
    };
}


