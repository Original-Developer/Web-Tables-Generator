window.addEventListener("load", function () {
    const upload = document.getElementById("upload");
    if (upload) upload.addEventListener("change", function () {
        if (upload.files.length > 0) {
          var reader = new FileReader();
          reader.addEventListener('load', function() {
            var result = JSON.parse(reader.result); 
            createTables(result);
          });
          reader.readAsText(upload.files[0]);
        }
    });
});