// current date
function CurDay() {
    var curDate = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(curDate);
}

CurDay();
