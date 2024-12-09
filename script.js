myForm = document.forms['myform'];

pwInput1 = myForm['password'];
pwInput2 = myForm['confirm-password'];

pwInput2.oninput = (obj) => {
    pwInput2.setCustomValidity(pwInput1.value != pwInput2.value ? 'Passwords do not match.' : '');
}

rightTop = document.querySelector('#right_side_1');
logo = document.querySelector('#logo');
logoHeight = window.getComputedStyle(logo).height

window.addEventListener('resize', function () {
    let topOffset = rightTop.offsetHeight - logo.offsetHeight;
    logo.style.marginTop = topOffset + "px";
});
