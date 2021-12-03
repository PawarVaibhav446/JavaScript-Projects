function ageInDays() {
    let birthyear = prompt('Enter The Year in which You Had Born.. Good Friend');
    let ageInDayss = (2021 - birthyear) * 365;
    console.log(ageInDayss);
    document.getElementsByClassName('result').innerHTML = ageInDayss;
}