let name = "sakib al ah";
let birthDay = "1987-03-24";
let monthlySalary = 200000;
let noOfMonths = 12;


function calculate_age(dob) {
    const diff_ms = Date.now() - new Date(dob).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970)
}


function getSalary(monthlySalary, noOfMonths) {
    return (monthlySalary * noOfMonths).toLocaleString();
}



console.log(calculate_age(noOfMonths));

console.log(getSalary(monthlySalary, noOfMonths))