function checkform() {
    let nameinput = document.getElementById('username');
    let probleminput = document.getElementById('problem');
    
    let namevalue = nameinput.value.trim();
    let problemvalue = probleminput.value.trim(); 
    
    if (!namevalue) {
        showalert('Name Required', 'Please enter your name first');
        shakeelement(nameinput);
        return;
    }
    
    if (!problemvalue) {
        showalert('Problem Required', 'Please describe your health problem');
        shakeelement(probleminput); 
        return;
    }
}

function showalert(title, message) {
    document.getElementById('alerttitle').textContent = title;
    document.getElementById('alertmessage').textContent = message;
    
    let alertbox = document.getElementById('alertbox');
    alertbox.style.display = 'flex';
    
    setTimeout(function() {
        alertbox.style.display = 'none';
    }, 3000);
}

function shakeelement(element) {
    element.style.animation = 'shake 0.5s';
    element.style.borderColor = '#ff6b6b';
    
    setTimeout(function() {
        element.style.animation = '';
        element.style.borderColor = '#6a11cb';
        element.focus();
    }, 500);
}

let style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);


let namefield = document.getElementById('username');
let problemfield = document.getElementById('problem');

namefield.addEventListener('focus', function() {
    this.parentElement.querySelector('.line').style.width = '100%';
});

namefield.addEventListener('blur', function() {
    if (!this.value) {
        this.parentElement.querySelector('.line').style.width = '0';
    }
});

problemfield.addEventListener('focus', function() {
    this.parentElement.querySelector('.line').style.width = '100%';
});

problemfield.addEventListener('blur', function() {
    if (!this.value) {
        this.parentElement.querySelector('.line').style.width = '0';
    }
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById('username').focus();
    }, 500);
};