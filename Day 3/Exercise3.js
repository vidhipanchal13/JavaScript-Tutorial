//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


    let currentTime = new Date('2000-1-3 5:7');

    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;

    let currentTimeStr = currentTime + "       " + currentHour + ":" + currentMinutes;

    document.getElementById('clock').innerHTML = currentTimeStr;
