'use strict'

function onGallery() {
    const gallery = document.querySelector('.gallery')
    const imgCount = 16
    let strHtml = ''

    for (let i = 1; i <= imgCount; i++) {
        strHtml += `<img src="style/img/meme-imgs (square)/${i}.jpg" alt="Image ${i}" style="display: block;">`
    }

    gallery.innerHTML = strHtml
}
