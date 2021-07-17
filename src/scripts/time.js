(function(){
    var hours = (new Date).getHours();
    var minutes = (new Date).getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    document.getElementById("time").innerText = strTime;
    // updates every 10 seconds to have a lighter impact on performance
    setTimeout(arguments.callee, 10000);
})();