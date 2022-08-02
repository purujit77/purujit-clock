function displayTime() {
    var dateTime = new Date()
    var hour = dateTime.getHours()
    var minute = dateTime.getMinutes()
    var second = dateTime.getSeconds()
    var session = document.getElementById("ampm")

    // if(hour >=12){
    //     session.innerHTML = "PM"
    // }
    // else{
    //     session.innerHTML = "AM"
    // }
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute
    document.getElementById("seconds").innerHTML = second
}
setInterval(displayTime, 10)
