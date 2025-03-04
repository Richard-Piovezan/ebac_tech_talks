AOS.init();

const eventDate = new Date("Mar 13, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();

const hours = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const untilEvent = eventTimeStamp - currentTimeStamp;

    const msDay = 1000 * 60 * 60 * 24;
    const msHour = 1000 * 60 * 60;
    const msMinute = 1000 * 60;

    const daysToEvent = Math.floor(untilEvent / msDay);
    const hourToEvent = Math.floor((untilEvent % msDay) / msHour);
    const minsToEvent = Math.floor((untilEvent % msHour) / msMinute);
    const secsToEvent = Math.floor((untilEvent % msMinute) / 1000);

    document.getElementById("cont").innerHTML = `${daysToEvent}d ${hourToEvent}h ${minsToEvent}m ${secsToEvent}s`;

    if (untilEvent < 0) {
        clearInterval(hours);
        document.getElementById("cont").innerHTML = "Tempo Expirado";
        document.getElementById("cont").style.color = "#808080";
        
        document.getElementById("btn").style.pointerEvents = "none";
        document.getElementById("btn").style.backgroundColor = "#8D8D8D";
        document.getElementById("btn").style.color = "rgba(255, 255, 255, 0.7)";
        document.getElementById("btn").style.cursor = "default";
        document.getElementById("btn").style.boxShadow = "none";
        document.getElementById("btn").innerHTML = "vagas esgotadas";
    }
}, 1000);