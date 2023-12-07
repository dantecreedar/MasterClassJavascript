/* const images = document.getElementById('images'); */
const container = document.getElementById('container');
/* const getImages = ()=>{
    axios('https://picsum.photos/v2/list?page=2&limit=5')
        .then(res => {
            const fragment = document.createDocumentFragment();
            res.data.array.forEach(element => {
                const newImages = document.createElement('IMG')
                newImages.src = element.downloaded_url;
                fragment.appendChild(newImages);
            });
            images.appendChild(fragment);
            setObserver();
        })
} */

const getImages = async() =>{
    const fetchApi = await fetch('https://picsum.photos/v2/list?page=2&limit=10');
    const fetchRes = await fetchApi.json()
    /* console.log(fetchRes); */

    /* fragment */

    fetchRes.forEach(element => {

        const fragments = document.createDocumentFragment();
        /* images */
        /* console.log(element); */

        const newImages = document.createElement('img');
        newImages.setAttribute('src',element.download_url);
        /* console.log(newImages);
 */     fragments.appendChild(newImages);
        container.appendChild(fragments);

        setObserver();
        /* images.setAttribute('src', element.download_url) */


    });
   /*  console.log(fetchApi); */
}


const callback = (entries) => {
    entries.forEach((entry) => {
        /* console.log(entries); */
        if (entry.isIntersecting){
            getImages();
            console.log(entry, "Imagen is intersecting");
        }
    })
}


setObserver = ()=>{
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(container.lastElementChild)
}
getImages()
/* const callback = (entries) =>{
    entries.forEach(entry =>{
        if(entry.isItersecting){
            getImages();
        }else{
            //Quitar animacion
        }
    })
}

const setObserver = () =>{
    const options = {
        threshold: 0.5

    }
}

getImages() */