import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone', {
    dictDefaultMessage: 'Sube aquí tu imágen',
    acceptedFiles: '.png,.jpg,.jpeg,.gif',
    addRemoveLinks: true,
    dictRemoveFile: 'Borrar Archivo',
    maxFiles: 1,
    uploadMultiple: false,
})

dropzone.on('sending', function (file, xhr, formData) {
    console.log(file);
});

dropzone.on('success', function (file, response) {
    console.log(response);
});

dropzone.on('error', function (file, response) {
    const message = 'El tamaño de la imagen debe ser menor a 1MB'
    const elements = document.querySelectorAll('.dz-error-message span')
    const lastElement = elements[elements.length - 1]
    lastElement.textContent = message
});

dropzone.on('removedfile', function (file, response){
    console.log(response);
});


