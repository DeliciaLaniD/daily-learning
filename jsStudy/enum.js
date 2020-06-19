// 枚举类型
// 值是数字序号，从0开始；代码可读性强；可能会常用于下拉框
var DasWeek;
(function (DasWeek) {
    DasWeek[DasWeek["MON"] = 0] = "MON";
    DasWeek[DasWeek["TUE"] = 1] = "TUE";
    DasWeek[DasWeek["WHE"] = 2] = "WHE";
    DasWeek[DasWeek["THU"] = 3] = "THU";
    DasWeek[DasWeek["FRI"] = 4] = "FRI";
    DasWeek[DasWeek["SAT"] = 5] = "SAT";
    DasWeek[DasWeek["SUN"] = 6] = "SUN";
})(DasWeek || (DasWeek = {}));
var day;
day = DasWeek.SUN;
console.log(day);
console.log(DasWeek.SAT);
