let navBarUl = document.getElementById('container');
let option = ["Login", "Sign", "Invite"]
let icon = document.createElement('img');

option.forEach((e)=>{
    let listManin = document.createElement('li');
    listManin.textContent = e
    console.log(e);

    navBarUl.appendChild(listManin);
})

