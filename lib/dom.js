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


const printOut = (element, msg, index, interval) => {
    if (index < msg.length) {
      element.innerHTML += msg[index++];
    }
    setTimeout(() => printOut(element, msg, index, interval), interval);
  };

