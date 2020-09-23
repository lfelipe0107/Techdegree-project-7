
const send = document.getElementById('send');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const close = document.getElementsByClassName('close');

for(let i=0; i<close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.opacity= "0";
        setTimeOut(function () {
            div.style.display = "none";
        }, 600);
    };
}

send.addEventListener("click", (e) =>{
    e.preventDefault();
    let messages = [];
    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message field before sending");
    } else if(user.value === ""){
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
})

