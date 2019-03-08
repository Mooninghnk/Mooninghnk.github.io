//html page
addMessage(body, "<center><h1 class='msg'></h1></center>");
addMessage(body, `<button class="menu"><h1>---</h1></button>`)
addMessage(body, "<div class='terminal'></div>");
addMessage(body, "<br>", "");
addMessage(body, "<center><h3 class='intro'></h3></center>");
addMessage(body, `<center><div class="xeum-window" style ="display: none;"></div></center>`, "xeum");
addMessage(body, `<center><button class="xcontent"><h1>👇</h1></button></center>`)
addMessage(body, `
<center>


</center>

`, "othct")




const but = selector(".xcontent");

let msgg = selector(".msg");

$(document).ready(function () {
    let $ptty = $('.terminal').Ptty({
        i18n: {
            welcome: `<center>**** Welcome To The Terminal ****</center>`,
            error_not_found: `wrong comand type in <p>help<p>`
        },
        theme: 'my-theme',

    });
    $ptty.register('command', {
        name: 'ls',
        method: function (cmd) {
            cmd.out = "xeum | electron| meta | tgbot";
            return cmd;
        },
        options: [],
        help: 'Lists all my projects'
    });

    $ptty.register('command', {
        name: `run-meta`,
        method: function (cmd) {
            cmd.out = "running meta";
            return window.open("./meta/index.html");
        },
        options: [],
        help: 'runes xeum'
    });
});


//end of the html page
const colorLetter = element => {

};


//our divs and other elements

const header = selector(".intro");


slowPrint(msgg, "HI My Name Is Nick", 100);

setTimeout(() => {

    slowPrint(header, `I'am A 17 Year Old JavaScript Developer use this terminal to view my projects type in help to start if you are not expirianced with a terminal use a menu`, 30)
}, 4000);

but.addEventListener('click', () => console.log("hello"));