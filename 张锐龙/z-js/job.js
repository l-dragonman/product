(function () {
    // 点击关闭广告
    var z_adv = document.querySelector('.z-adv')
    var close = document.querySelector('.close')
    close.addEventListener('click', function () {
        z_adv.style.display = 'none'
    })

    // 交互
    var weal = document.querySelector('.weal')
    var sweal = weal.querySelector('.s-weal')
    var app_pic = weal.querySelector('.app-pic')
    var game = document.querySelector('.assist').querySelector('.game')
    window.onscroll = function (e) {
        var e = e
        scrollTop = document.documentElement.scrollTop
        console.log(scrollTop);
        if (scrollTop >= 70) {
            sweal.style.animation = 'weal 0.7s  1 forwards'
        }
        if (scrollTop >= 400) {
            app_pic.style.animation = 'app 0.7s ease-in 1 forwards'
            // app_pic.style.animation = 'app 0.7s ease-in-out 1 forwards'
        }
        if (scrollTop >= 1080) {
            game.style.animation = 'weal 0.7s  1 forwards'
        }
        var liss = document.querySelector('.list').querySelectorAll('li')
        for(var i= 0; i < liss.length; i++){
            if(scrollTop >= 1270){
                liss[i].children[0].style.animation = `lis 0.9s ${i/6}s 1 forwards`
            }
        }
    }
})()    