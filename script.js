
// Dark/Light mode

const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('myDark');
}

// coupon code

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.9';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1';
}

//Geo location




