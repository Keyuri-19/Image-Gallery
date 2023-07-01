var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(number)
{
    displaySlides(currentIndex += number);
}

function displaySlides(number)
{
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (number > slides.length) { currentIndex = 1}
    if (number < 1) {currentIndex = slides.length}
    for (x=0 ; x < slides.length ; x++)
    {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}