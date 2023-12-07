const dropArea = document.querySelector('.drop-area');
const dragText = document.querySelector('h2')
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('#input-file');
let files;

/* buttonclick */
button.addEventListener('click', () => {
    input.click();
});


/* change */
input.addEventListener('change', (e) => {
    files = this.files;
    dropArea.classList.add("active");
    showfiles(files);
    dropArea.classList.remove("active");
})


/* ==================================droArea=============================== */

/* dragover */
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para subir los archivos!"
});

/* dragleave */
dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta las imagenes!"
});


/* drop */
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showfiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta las imagenes!"

})

/* ==================================Showfile=============================== */
function showfiles(files){
    if(files.length === undefined){
        processFiles(files);
    }else{
        for (const file of files){
            processFiles(file);
        }
    }
}

/* ==================================imagenes=============================== */
/* procesar imagenes */
function processFiles(file) {
    const docType = file.type
    const validarExtension = ["image/jpge", "image/jpg", "image/png","image/gif"]
    /* const id = `file-${Math.random().toString(32).substring(7)}`
 */

/* ==================================Validar extension=============================== */

    if (validarExtension.includes(docType)) {
        //archivo valido
        const fileReader = new FileReader(); //Objeto de lectura de propiedades y extracciones
        const id = `file-${Math.random().toString(32).substring(7)}`;

        //Evento de carga...
        fileReader.addEventListener('load', (e)=>{
            const fileUrl = fileReader.result;
            const image = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" width='50'/>
                        <div class="status">
                            <span>
                                ${file.name} 
                            </span>
                            <span>
                                Loading...
                            </span>
                        </div>
                </div>z
            `;
            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        })
        /* Leer Archivo */
        fileReader.readAsDataURL(file);
        uploadFile(file, id); // upload html file

    }else {
        //archivo no valido
        alert("Solo se permiten archivos JPG, JPEG, PNG y GIF") 
    }
}
const uploadFile = async (file)=> {
    const formData = new FormData();
    file.append("file", file);

    try {
        const respose = await fetch('htttp://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });
        const resposeText = await respose.text();
        console.log(resposeText);
        document.querySelector(`#${id}.status-text`.innerHTML = `<span class="succes">Archivo Subido correctamente...</span>`)
    }   catch (error) {
        document.querySelector(`#${id}.status-text`).innerHTML = `<span class="faile">El archivo no pudo registrase...</span>`;
    }
}


