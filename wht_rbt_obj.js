//imported for zachary_roberts_portfolio, it has been optimized to run in a stand alone environment. 
/*wht_rbt_obj.js IS NOT AN OBJECT. It is is a cinematic transition from modern.ccs to retro.ccs that outputs on transition/index.html.
 Named after the notorious Jurassic Park bug "wht_rbt.obj" from Michael Crichton's Jurassic Park.*/

/*Proudly Engineered by Zachary Roberts, inspired by Dennis Nedry 12 NOV 2025
"It's the kicker. wht_rbt.obj, whatever it is, it did it all." -Ray Arnold, Jurassic Park*/

const TERMINAL = document.getElementById("terminal");

// create element
TERMINAL.textContent = `
...ACCESSING THE 90's\n
BUT....
\n
\n
\n
\n
\n`

//let greet = "......." +"<br>"+"BUT...";

//terminal.innerHTML += greet + "<br>".repeat(5);
//declaration of for loop, set string (ydstmw), counter (iteration) and robust sentinel value (sentinel)
//const CRAWL = document.getElementById('i_hate_this_hacker_crap');
const YDSTMW = "YOU DIDN'T SAY THE MAGIC WORD!\n";
let iteration = 0;
const SENTINEL = 90;
//set cascading scree interval, effect must be cinematic
//output string, increment counter
let timing = setInterval(() => {
    //terminal.innerHTML += ydstmw + "<br>";
    TERMINAL.textContent = YDSTMW;
    iteration++;

/*exit loop when iteration is greater than or equal to sentinel value, creates two conditions for the loop to exit if iteration
 exceeds sentinel some reason. returns to root index.*/

if (iteration >= SENTINEL) {
    clearInterval(timing);
    window.location.href ="terminus/index.html";
    }
}, 30);
