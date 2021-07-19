//function akaneSubmit(){
    // var birthday = document.getElementById("birthday");
    // var arr = birthday.split('/');
    // var day = arr[0];
    // var month = arr[1];
    // var split_day = day.split('');
    // var split_month = month.split('');
    // var dd = parseInt(split_day[0] + split_day[1]);
    // var mm = parseInt(split_month[0] + split_month[1]);
    // var year = arr[2];
    // var split_year = year.split('');
    // var cc = parseInt(split_year[0] + split_year[1]);
    // var yy = parseInt(split_year[2] + split_year[3]);

 
//function maleAkane(){
    //console.log((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
//     console.log(( ( (cc/4) -2*cc-1) + ((5*(yy/4)) ) + ((26*(mm+1)/10)) + dd ) % 7);
// }
// akaneSubmit();

function akaneSubmit(){
    event.preventDefault();
    // var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    // var akaneMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    // var akaneFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    // var birthday = document.getElementById("birthday");
    // var DOB = new Date(birthday);
    // var male = document.getElementById("male")
    // var female = document.getElementById("female")
    
    // var results = DOB.getDate()
    
    // if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    //       output.innerHTML = "You were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
       
          
    //   }
    //   else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
    //     output.style.background ="yellowgreen"
    //     output.innerHTML = " You were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
   // }
    var date = new Date(inputDate);
    var birthday = date.getDay();
    let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("female").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML =
         "According to your gender, your Akan name is: " + "<strong>" +
         maleAkan[birthDate] + "</strong>";

        }

        
    // Find male Akan from birthDate


    else if(document.getElementById("male").checked && (inputDate != "")) {

        document.getElementById("results").innerHTML = 
        "According to your gender, your Akan name is: " + "<strong>" +
         femaleAkan[birthDate] + "</strong>";

        }


    // Warning
        

    else if(!document.getElementById("genderFemale").checked && !document.getElementById("genderMale").checked) {

        document.getElementById("warning").innerHTML = 
        "*Select your gender";
        
    }
}