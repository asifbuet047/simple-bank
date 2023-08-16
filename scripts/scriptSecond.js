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


let currentBalance = checkAndReturnIfNumber(getContentTextById('balanceValue'));

const depositButton = window.document.getElementById('depositButton');
depositButton.addEventListener('click', function () {
    let depositValue = checkAndReturnIfNumber(getInputFieldValueById('depositField'));
    if (depositValue == false) {
        window.alert('Please input valid number');
    } else {
        console.log(depositValue);
        replaceContentTextWithId('depositValue', depositValue.toString());
        currentBalance = currentBalance + depositValue;
        console.log('Balance after deposit', currentBalance);
        replaceContentTextWithId('balanceValue', currentBalance.toString());
    }
});

const withdrawButton = window.document.getElementById('withdrawButton');
withdrawButton.addEventListener('click', function () {
    let withdrawValue = checkAndReturnIfNumber(getInputFieldValueById('withdrawField'));
    if (withdrawValue == false) {
        window.alert('Please input valid number');
    } else {
        console.log(withdrawValue);
        replaceContentTextWithId('withdrawValue', withdrawValue.toString());
        currentBalance = currentBalance - withdrawValue;
        if (currentBalance >= 0) {
            console.log('Balance after withdraw', currentBalance);
            replaceContentTextWithId('balanceValue', currentBalance.toString());
        } else {
            replaceContentTextWithId('balanceValue', "00");
            window.alert("You cant withdraw more than Your balance");
        }
    }
});