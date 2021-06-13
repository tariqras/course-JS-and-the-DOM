/*function myEventListeningFunction() {
    console.log('howdy');
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'red';
    console.log("you've clicked the document!");
}*/

const mainDocument = document;

mainDocument.addEventListener('click', function (event) {
   console.log(event);
});

mainDocument.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});


/*
// adds a listener for clicks, to run the `myEventListeningFunction` function
mainDocument.addEventListener('click', myEventListeningFunction);*/
