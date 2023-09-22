import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone', {
    dictDefaultMessage: 'Sube aquí tu imágen',
    acceptedFiles: '.png,.jpg,.jpeg,.gif',
    addRemoveLinks: true,
    dictRemoveFile: 'Borrar Archivo',
    maxFiles: 1,
    uploadMultiple: false,

    init: function () {
        if (document.querySelector('[name="imagen"]').value.trim()) {
            const imagenPublicada = {};
            imagenPublicada.size = 1234;
            imagenPublicada.name = document.querySelector('[name="imagen"]').value;

            this.options.addedfile.call(this, imagenPublicada);
            this.options.thumbnail.call(this, imagenPublicada, `https://devstagram.s3.sa-east-1.amazonaws.com/${imagenPublicada.name}`);

            imagenPublicada.previewElement.classList.add('dz-success', 'dz-complete');

        }
    },
});

dropzone.on('success', function (file, response) {
    document.querySelector('[name="imagen"]').value = response.imagen;
});

dropzone.on('error', function (file, response) {
    const message = 'El tamaño de la imagen debe ser menor a 1MB'
    const elements = document.querySelectorAll('.dz-error-message span')
    const lastElement = elements[elements.length - 1]
    lastElement.textContent = message
});

dropzone.on('removedfile', function () {
    document.querySelector('[name="imagen"]').value = "";
});
