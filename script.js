//adding images to the list items//

const items = []

// adding the images//



const $gallery = document.getElementById('gallery')
for (let i = 1; i < 13; i++ ) {
    items.push(`<li class='puppy'><img tabindex=${i} src = 'images/${i}.jpg'></li>`)

}

$gallery.innerHTML = items.join('')