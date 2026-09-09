let startTime = 0;

let elapsed = 0;

let timer = null;

let running = false;


const display =
    document.getElementById("display");

const laps =
    document.getElementById("laps");


// Format time

function formatTime(ms) {

    const hours =
        Math.floor(ms / 3600000);

    const minutes =
        Math.floor(
            (ms % 3600000) / 60000
        );

    const seconds =
        Math.floor(
            (ms % 60000) / 1000
        );

    const centiseconds =
        Math.floor(
            (ms % 1000) / 10
        );


    return (

        [hours, minutes, seconds]
        .map(number =>
            String(number).padStart(2, "0")
        )
        .join(":")
        +
        "." +
        String(centiseconds).padStart(2, "0")

    );

}


// Update display

function update() {

    elapsed =
        Date.now() - startTime;

    display.textContent =
        formatTime(elapsed);

}


// START

document
    .getElementById("start")
    .onclick = () => {

        if (running) return;

        running = true;

        startTime =
            Date.now() - elapsed;

        timer =
            setInterval(update, 10);

    };


// PAUSE

document
    .getElementById("pause")
    .onclick = () => {

        if (!running) return;

        running = false;

        clearInterval(timer);

        update();

    };


// LAP

document
    .getElementById("lap")
    .onclick = () => {

        if (!running && elapsed === 0)
            return;


        const item =
            document.createElement("li");

        item.textContent =
            formatTime(elapsed);

        laps.prepend(item);

    };


// RESET

document
    .getElementById("reset")
    .onclick = () => {

        running = false;

        clearInterval(timer);

        elapsed = 0;

        display.textContent =
            "00:00:00.00";

        laps.innerHTML = "";

    };