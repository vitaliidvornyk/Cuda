
// Проверка на поддержку WEBP //

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

// Табы //

document.querySelectorAll('.tabs-triggers__item').forEach((item) => 
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item_active')
        );
        document.querySelectorAll('.tabs-content__item').forEach(
            (child) => child.classList.remove('tabs-content__item_active')
        );

        item.classList.add('tabs-triggers__item_active');
        document.getElementById(id).classList.add('tabs-content__item_active');
    })
);

document.querySelector('.tabs-triggers__item').click();