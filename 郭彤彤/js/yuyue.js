// (function(){
//     var tab_list = document.querySelector('.tab_list')
//     var as = tab_list.querySelectorAll('a')
//     var items=document.querySelectorAll('.item')
//     for(var i=0;i<as.length;i++){
//         as[i].setAttribute('index',i)
//         as[i].onclick=function(){
//             for(var i =0;i<as.length;i++){
//                 as[i].className=''
//             }
//             this.className='current'
//             var index=this.getAttribute('index')
//             for(var i =0;i<items.length;i++){
//                 items[i].style.display='none'
//             }
//             items[index].style.display='block'
//         }
//     }
// })();
$(function () {
    $('.tab_list a').click(function () {

        $(this).addClass('current').siblings().removeClass('current')
        var index = $(this).index();
        $('.tab_con .item').eq(index).show().siblings().hide()
    })

});

(function () {
    var g_popGuanjian = document.querySelector('.g_popGuanjian')
    // var g_headr1= document.querySelector('.g_headr1')
    // var g_headr1Top = g_headr1.offsetTop
    document.addEventListener('scroll', function () {

        console.log(window.pageYOffset);
        if (window.pageYOffset >= 100) {

            g_popGuanjian.style.display = 'block';
        } else {
            g_popGuanjian.style.display = 'none';
        }

    })
})();

// 弹出框
(function(){
    var g_tanchu = document.querySelector('.g_tanchu')
    var close = document.querySelector('.close')
    var g_login_bg = document.querySelector('.g_login_bg')
    close.onclick=function(){
        g_tanchu.style.display='none'
        g_login_bg.style.display='none'
    }
})();



// 张锐龙新加操作 可删除
// 有奖预约国服内测
$(function(){
    $('.yuyue1,.yqhysc').click(function(){
        /* g_tanchu.style.display='block'
        g_login_bg.style.display='block' */
        $('.g_tanchu').css('display','block')
        $('.g_login_bg').css('display','block')
    })
})