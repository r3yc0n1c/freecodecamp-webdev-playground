const setData = myTime => {
    document.getElementById("timeBox").innerHTML = myTime;
}

const pad = val => (val < 10) ? ('0' + val) : val;

const getTime = () => {
    const date = new Date();

    const hr = pad(date.getHours());
    const min = pad(date.getMinutes());
    const sec = pad(date.getSeconds());

    const myTime = hr + ':' + min + ':' + sec;

    // console.log(myTime);
    setData(myTime);
    setTimeout('getTime()', 900);
}