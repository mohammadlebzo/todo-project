let genderAccept = false;
let ageAccept = false;
let welAccept = false;

let fname = prompt('Please enter your name:');
let gender = prompt('Please enter your gender: (male/female)');
let age = 0;

while (genderAccept === false) {
    if (gender.toLowerCase() === 'male' || gender.toLowerCase() === 'female') {
        genderAccept = true;
    }
    else{
        alert('input not accepted, try again');
        gender = prompt('Please enter your gender: (male/female)');
        
    }
}

if (genderAccept) {
    age = prompt('Please enter your age:');
    while(ageAccept === false){
        if (age > 0) {
            ageAccept = true;
        }
        else{
            alert('input not accepted, try again');
            age = 0;
            age = prompt('Please enter your age:');
        }
    }
}

if (ageAccept) {
    let welMessage = prompt('Do you want to skip the welcoming message ? (yes/no)');
    while (welAccept === false) {
        if (welMessage.toLowerCase() === 'yes') {
            welAccept = true;
            alert('OK!');
        }
        else if (welMessage.toLowerCase() === 'no') {
            if (gender.toLowerCase() === 'male') {
                alert(`Hellow Mr ${fname}`);
            }
            else{
                alert(`Hellow Ms ${fname}`);
            }
            welAccept = true;
        }
        else{
            alert('input not accepted, try again');
            welMessage = prompt('Do you want to skip the welcoming message ? (yes/no)');
        }
    }
}
