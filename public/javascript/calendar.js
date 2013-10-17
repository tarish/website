var monthnames = new Array("January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber");
var monthabbrev = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var numdaysinmonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30,31, 30, 31);

var today = new Date();
var thisdate = today.getDate();
var dayofweek = today.getDay();
var thismonth = today.getMonth();

var daytemp = today;
daytemp.setDate(1);
var firstdayofmonth = daytemp.getDay();

var thisyear = today.getYear();
var thisyear = thisyear % 100;
var thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));

var numcalsquares = 42;
var daysinmonth = numdaysinmonth[thismonth];
var numdaysnotlastweek = numcalsquares - daysinmonth - firstdayofmonth;
var numdaysinweek = 7;
var daytemp = 1;

if (((thisyear % 4 == 0) && (thisyear % 100 != 0)) || (thisyear % 400 == 0)) numdaysinmonth[1]++;
document.write("<caption>" + monthnames[thismonth] + " " + thisyear + "</caption>");
document.write("<thead><tr>");
    document.write("<th abbr=\"Sunday\" scope=\"col\" title=\"Sunday\">S</th>");
    document.write("<th abbr=\"Monday\" scope=\"col\" title=\"Monday\">M</th>");
    document.write("<th abbr=\"Tuesday\" scope=\"col\" title=\"Tuesday\">T</th>");
    document.write("<th abbr=\"Wednesday\" scope=\"col\" title=\"Wednesday\">W</th>");
    document.write("<th abbr=\"Thursday\" scope=\"col\" title=\"Thursday\">T</th>");
    document.write("<th abbr=\"Friday\" scope=\"col\" title=\"Friday\">F</th>");
    document.write("<th abbr=\"Saturday\" scope=\"col\" title=\"Saturday\">S</th>");
document.write("</tr></thead>");

document.write("<tbody>");
for (var i = 0; i < numcalsquares; i++) {
        if(i % 7 == 0) { document.write("<tr>"); }
        if(i < firstdayofmonth && firstdayofmonth > 0) {
            for(r = 0; r < firstdayofmonth; r++) {
	            document.write("<td class=\"pad\"></td>");
	            numdaysinweek--;
            }
            i += r-1;
        }
        else if(i >= (daysinmonth + firstdayofmonth) && numdaysnotlastweek > 0) {
            i += numdaysnotlastweek;
            while(numdaysnotlastweek > 0) {
	            document.write("<td class=\"pad\"></td>");
	            numdaysnotlastweek--;
            }
        }
        else {
            if(daytemp == thisdate) {
                document.write("<td><a><b>" + daytemp + "</b></a></td>");
            } else {
            	document.write("<td>" + daytemp + "</td>");
            }
            daytemp++;
        }
        if(i != 0 && i % 34 == 0) {
            document.write("</tr>");
            numdaysinweek = 7;
        }
    }
document.write("</tbody>");