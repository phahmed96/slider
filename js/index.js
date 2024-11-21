// document.addEventListener('DOMContentLoaded', function() {
var imgList= Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer=document.querySelector('.lightbox-container');
var lightBoxItem=document.querySelector('.lightbox-item');
var nextBtn=document.getElementById('next');
var closeBtn=document.getElementById('close');
var prevBtn=document.getElementById('prev');
var currentSlideIndex;

    
    
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click',function(e)
    {
        lightBoxContainer.classList.replace('d-none','d-flex');
        currentSlideIndex = imgList.indexOf(e.target);
    
    
        var imgSrc= e.target.getAttribute('src');
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

    });

}
    
function closeSlider()
{
    lightBoxContainer.classList.replace('d-flex','d-none');
}

    
function slide(step)
{
    currentSlideIndex = currentSlideIndex + step;

if(currentSlideIndex == imgList.length)
        {
            currentSlideIndex = 0;
        }

if(currentSlideIndex < 0)
            {
                currentSlideIndex = imgList.length -1 ;
            }

var imgSrc = imgList[currentSlideIndex].getAttribute('src');
lightBoxItem.style.backgroundImage = `url(${imgSrc})`;


}

nextBtn.addEventListener('click' , function() {slide(1)});
prevBtn.addEventListener('click' , function() {slide(-1)});
closeBtn.addEventListener('click' , closeSlider);

document.addEventListener('keydown' , function(e){
    if(e.key == 'ArrowRight'){
        slide(1);
    }
   else if(e.key == 'ArrowLeft'){
        slide(-1);
    }
   else if(e.key == 'Escape'){
        closeSlider();
    }
});

lightBoxContainer.addEventListener('click' , function(e)
{
    closeSlider();
});
lightBoxItem.addEventListener('click' , function(e)
{
    e.stopPropagation();
    
});















    
    // function nextSlide() {
    //     currentSlideIndex++;
    //     if(currentSlideIndex == imgList.length)
    //         {
    //             currentSlideIndex = 0;
    //         }
    //     var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    //     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    // }

    // function prevSlide() {
    //     currentSlideIndex--;
    //     if(currentSlideIndex < 0)
    //         {
    //             currentSlideIndex = imgList.length -1 ;
    //         }
    //     var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    //     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    // }
    
    // nextBtn.addEventListener('click' , nextSlide)
    // prevBtn.addEventListener('click' , prevSlide)
    
    
    
    
    
    
     
// });


