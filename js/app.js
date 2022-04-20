let genderAccept = false;
let ageAccept = false;
let welAccept = false;
let genderAnsr = '';

let fname = prompt('Please enter your name:');

const genderQ = gender => {
    while (genderAccept === false) {
        if (gender.toLowerCase() === 'male' || gender.toLowerCase() === 'female') {
            genderAccept = true;
            genderAnsr = gender;
        }
        else{
            alert('input not accepted, try again');
            gender = prompt('Please enter your gender: (male/female)');
            
        }
    }
}

const ageQ = age => {
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
}

const welMessageQ = () => {
    if (ageAccept) {
        let welMessage = prompt('Do you want to skip the welcoming message ? (yes/no)');
        while (welAccept === false) {
            if (welMessage.toLowerCase() === 'yes') {
                welAccept = true;
                alert('OK!');
            }
            else if (welMessage.toLowerCase() === 'no') {
                if (genderAnsr.toLowerCase() === 'male') {
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
}

const threeQs = () => {
    let arr = [];
    alert('Answer the upcoming questions with YES or NO.');
    let q1 = prompt('Are you a programmer ?');
    qTest(q1, arr);
    let q2 = prompt('Do you like pets?');
    qTest(q2, arr);
    let q3 = prompt('Do you have a pet ?');
    qTest(q3, arr);
    for (let i = 0; i < arr.length; i++) 
        console.log(arr[i]);
}

const qTest = (question, arr) => {
    if (question.toLowerCase() === 'yes' || question.toLowerCase() === 'no') {
        arr.push(question.toLowerCase());
    }
    else{
        arr.push('invalid');
    }
}

genderQ(prompt('Please enter your gender: (male/female)'));
ageQ(0);
welMessageQ();
threeQs();