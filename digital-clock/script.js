function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

updateClock();

setInterval(updateClock, 1000);