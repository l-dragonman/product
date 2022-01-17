//配置tab栏切换
(function () {
    var tab_list = document.querySelector('.tab_list')
    var as = tab_list.querySelectorAll('a')
    var items = document.querySelectorAll('.item')
    for (var i = 0; i < as.length; i++) {
        as[i].setAttribute('index', i);
        as[i].onclick = function () {
            for (var i = 0; i < as.length; i++) {
                as[i].className = ''
            };
            this.className = 'current'
            var index = this.getAttribute('index');
            // console.log(index);
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none'
            }
            items[index].style.display = 'block'
        }
    }
})();

//新闻tab切换
(function () {

    var clearfix = document.querySelector('.clearfix')
    var as = clearfix.querySelectorAll('a')
    var newCons = document.querySelectorAll('.newCon')
    for (var i = 0; i < as.length; i++) {
        as[i].setAttribute('index', i);
        as[i].onmouseover = function () {
            for (var i = 0; i < as.length; i++) {
                as[i].className = '';
            }
            this.className = 'active'
            var index = this.getAttribute('index');
            for (var i = 0; i < newCons.length; i++) {
                newCons[i].style.display = 'none'
            }
            newCons[index].style.display = 'block'
        }
    }
})();
// /轮播图js/ 
(function(){
    var swiper = new Swiper('.swiper-container', {
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})();




