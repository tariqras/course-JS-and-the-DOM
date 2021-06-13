const mainDocument = document;

mainDocument.addEventListener('click', function (event) {
   console.log(event);
});

mainDocument.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});


