function getInputFieldValueById(id) {
    return document.getElementById(id).value;
}


function matchWithCredentials(credentials) {
    const mail = 'asifbuet047@gmail.com';
    const pass = '570996';
    console.log(credentials);
    if ((mail == credentials[0]) && (pass == credentials[1])) {
        return true;
    } else {
        return false;
    }
}


const submitButton = window.document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
    var mail = getInputFieldValueById('mailField');
    var pass = getInputFieldValueById('passwordField');
    if (matchWithCredentials([mail, pass])) {
        window.location.href = 'bankboard.html';
    } else {
        window.alert('Mail or pass mismatch with daabase');
    }

});




