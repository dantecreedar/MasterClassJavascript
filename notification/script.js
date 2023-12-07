/* ******************************** Variable ************************************ */
const permission = document.getElementById('permissions');
/* ******************************** Notfication ************************************ */
/* event */
permission.addEventListener('click', () => {
    console.log("Notificacion! ");
    if(Notification.permission !=='granted') {
        getPermissions();

    }else{
        notify()
    }
}) 

/* getPermiss */
const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
/* notify */

const notify = () => {
    Notification.requestPermission()
    const options = {
        body:'Esta es una notificacion larga mas que todas...',
        icon: '/notification/word.png',
        data: 'Extra Data'
    }

    const notification = new Notification('Hello world', options)

    console.log(notification.data);
}

/* ******************************** Notfication ************************************ */
