var day = "Saturday";
var dayOfWeek;
if (day === 'Sunday') {
    dayOfWeek = "Sunday";
}
else if (day === 'Monday') {
    dayOfWeek = "Monday";
}
else if (day === 'Tuesday') {
    dayOfWeek = "Tuesday";
}
else if (day === 'Wednesday') {
    dayOfWeek = "Wednesday";
}
else if (day === 'Thursday') {
    dayOfWeek = "Thursday";
}
else if (day === "Friday") {
    dayOfWeek = "Friday";
}
else if (day === "Saturday") {
    dayOfWeek = "Saturday";
}
else {
    dayOfWeek = 'Invalid Day';
}
console.log('Day of week: ' + dayOfWeek);
var myDay = 'Wednesday';
switch (myDay.toLowerCase()) {
    case 'sunday':
        console.log('its sunday');
        break;
    case 'Monday':
        console.log('its monday');
        break;
    case 'Tuesday':
        console.log('its tuesday');
        break;
    case 'Wednesday':
        console.log('its wednesday');
        break;
    case 'Thursday':
        console.log('its thursday');
        break;
    case 'Friday':
        console.log('its friday');
        break;
    case 'Saturday':
        console.log('its saturday');
        break;
    default:
        console.log('wrong day');
        break;
}
var marks = 100.2;
switch (marks) {
    case 100:
        console.log('my mark is ' + marks);
        break;
    case 100:
        console.log('my mark is ' + marks);
        break;
    default:
        console.log('wrong marks');
        break;
}
var flag = true;
switch (flag) {
    case true:
        console.log();
        break;
    default:
        break;
}
//switch case with Enum
var Browser;
(function (Browser) {
    Browser["Firefox"] = "firefox";
    Browser["Safari"] = "safari";
    Browser["Edge"] = "edge";
    Browser["Chrome"] = "chrome";
})(Browser || (Browser = {}));
var browserName = Browser.Firefox;
switch (browserName) {
    case Browser.Firefox:
        console.log('launch firefox');
        break;
    case Browser.Chrome:
        console.log('launch Chrome');
        break;
    case Browser.Edge:
        console.log('launch edge');
        break;
    case Browser.Safari:
        console.log('launch safari');
        break;
    default:
        console.log('wrong browser');
        break;
}
