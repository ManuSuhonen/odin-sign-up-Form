console.clear();

console.log("Helo World");

myForm = document.forms['myform'];

myForm ? null : console.error("myForm is", myForm);

pwInput1 = myForm['password'];
pwInput2 = myForm['confirm-password'];

pwInput1 ? null : console.error("pwInput1 is", pwInput1);
pwInput2 ? null : console.error("pwInput2 is", pwInput2);

pwInput2.oninput = (obj) => {
    pwInput2.setCustomValidity(pwInput1.value != pwInput2.value ? 'Passwords do not match.' : '');
}
