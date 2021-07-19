function(){
    var birthday = "11/01/2018";
    var arr = birthday.split('/');
    var day = arr[0];
    var month = arr[1];
    var split_day = day.split('');
    var split_month = month.split('');
    var dd = parseInt(split_day[0] + split_day[1]);
    var mm = parseInt(split_month[0] + split_month[1]);
    var year = arr[2];
    var split_year = year.split('');
    var cc = parseInt(split_year[0] + split_year[1]);
    var yy = parseInt(split_year[2] + split_year[3]);

 
function maleAkane(){
    //console.log((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    console.log(( ( (cc/4) -2*cc-1) + ((5*(yy/4)) ) + ((26*(mm+1)/10)) + dd ) % 7);
}
maleAkane();
