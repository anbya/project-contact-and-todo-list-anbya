$('#inputFileButton').on('click', function() {
    $('#inputFile').trigger('click');
});
$("#inputFile").change(function(){
    validasiFile(this);
 });
 function validasiFile(input){
    let namaFile = input.files[0].name;
    let namaFileAfterSplit=namaFile.split(".");
    let cekEkstention = namaFileAfterSplit[1];
    if(cekEkstention == "PNG" || cekEkstention == "png" || cekEkstention == "jpg" || cekEkstention == "JPG"|| cekEkstention == "jpeg"|| cekEkstention == "JPEG"){
        bacaGambar(input);
    }
    else{
        alert("file tidak dapat di upload");
        document.getElementById("inputFile").value = "";
        $('#previewPict').attr('src', './assets/images/defaultImage.png');
    }
}
function bacaGambar(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
  
       reader.onload = function (e) {
           $('#previewPict').attr('src', e.target.result);
       }
  
       reader.readAsDataURL(input.files[0]);
    }
 }