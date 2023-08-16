function getInputFieldValueById(id) {
    return document.getElementById(id).value;
}

function getContentTextById(id) {
    return document.getElementById(id).innerText;

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

function checkAndReturnIfNumber(valueString) {
    var valueFloat = parseFloat(valueString);
    if (valueFloat >= 0) {
        return valueFloat;
    } else {
        return false;
    }
}

function replaceContentTextWithId(id, text) {
    window.document.getElementById(id).innerText = text;
}



if (window.location.pathname.includes('index')) {
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

} else if (window.location.pathname.includes('bankboard')) {
    var currentBalance = checkAndReturnIfNumber(getContentTextById('balanceValue'));
    const depositButton = window.document.getElementById('depositButton');
    depositButton.addEventListener('click', function () {
        let depositValue = checkAndReturnIfNumber(getInputFieldValueById('depositField'));
        if (depositValue == false) {
            window.alert('Please input valid number');
        } else {
            console.log(depositValue);
            replaceContentTextWithId('depositValue', depositValue.toString());
            currentBalance = currentBalance + depositValue;
            console.log('sum of total deposit', currentBalance);
            replaceContentTextWithId('balanceValue', currentBalance.toString());
        }
    });

}


