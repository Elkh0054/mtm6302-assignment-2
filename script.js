//adding images to the list items//

const items = []

// adding the images//


const $gallery = document.getElementById('gallery')
for (let i = 1; i < 13; i++ ) {
    items.push(`<li class='puppy'><img tabindex=${i} src = 'images/${i}.jpg'></li>`)

}

$gallery.innerHTML = items.join('')

//adding lightbox to photos 

const $lightbox = document.getElementById('lightbox')
$lightbox.style.visibility = 'hidden'

//adding function 

function imgClicked(myImage) {
    $lightbox.innerHTML = `<button id = 'imgClose'>close</button><img src = '${myImage}'>`
    $lightbox.style.visibility = 'visible'

 //closing the opened image
 const $closeDiv = document.getElementById('imgClose')
 $closeDiv.addEventListener('click', function(){
     $lightbox.innerHTML=''
     $lightbox.style.visibility = 'hidden'
 })   
}

//adding eventlistener to the gallery using delegation 

$gallery.addEventListener('click', function (event) {
    const $targetItem = event.target.closest('img');
    if($targetItem){
        imgClicked($targetItem.src)
    }
})


$gallery.addEventListener('mousOver', function (event) { 
    let $targetItem1 = event.target.closest('img');
    $targetItem1.classList.add('larger')

})

$gallery.addEventListener('mouseOut', function (event){
    let $targetItem1 = event.target.closest('img');
    $targetItem1.classList.remove('larger')
})