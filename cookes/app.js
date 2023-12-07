function myFunction () {
    
    const str = document.getElementById('p1').innerHTML;

    const post = str.indexOf("Espacio");

    document.getElementById('demo').innerHTML = post;
}