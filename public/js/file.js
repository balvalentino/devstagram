var uploadField = document.getElementById("imagen");

uploadField.onchange = function() {
    if(this.files[0].size > 1048576){
        alert("El tamaño de la imagen debe ser menor a 1MB");
        this.value = "";
    }
};
