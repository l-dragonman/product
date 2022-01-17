$(document).ready(function () {
    // 导航栏固定
    $(window).scroll(function () {
        var top_nav = $(".z-nav").offset().top;
        if ($(window).scrollTop() < top_nav) {
            $(".nav-f").removeClass("fixed");
            $('.atop').hide();
        } else {
            $(".nav-f").addClass("fixed");
            $('.atop').show();
        }
    })

    // 点击TOP返回顶部
    $('.atop').click(function(){
		$('html,body').animate({scrollTop:0},'slow');
		return false;
	});

    // 敬请期待
    $('.wait').click(function (){
        // alert('敬请期待')
        /*  function alert (e) {
            var html =''
            html += "<div class='alertTile'>提示</div>"
        } */
            alert('敬请期待');
    })

    // 步骤演示
    $('.buzhou_link,.buzhou_div,.qiehuan2').hover(function(){
        $('.qiehuan2').show()
        $('.qiehuan1').hide()
    },function(){
        $('.qiehuan2').hide()
        $('.qiehuan1').show()
    })

    // 查看绑定状态
    $(".state").click(function(){
        $(".changeway").hide();
    });
    // 开始绑定
    $('.start-bind').click(function(){
        $(".changeway").show();
    })

     // QQ登录方式切换——密码帐号登录
    $('.zhanghao').click(function(){
        $('.lo-login1').hide()
        $('.lo-login2').show()
    })
    // QQ登录方式切换——快速登录
    $('.link-tips2').click(function(){
        $('.lo-login1').show()
        $('.lo-login2').hide()
    })

    // 视频弹窗
    $('.avideo,.onevideo,.twovideo').click(function(){
        $('.video_box').show()
        $('.overplay').css('background-color','rgb(0, 0, 0)') 
        $('.overplay').show()
    })
    // 关闭视频弹窗
    $('.video_close').click(function(){
        $('.video_box').hide()
        $('.overplay').hide()
    })

    // QQ登录弹窗
    $('.qqdenglu,.click-denglu').click(function(){
        $('.z-login').show()
        $('.overplay').css('background-color','rgb(230, 245, 255)') 
        $('.overplay').show()
    })

    // 关闭QQ登录弹窗
    $('.lo-close').click(function(){
        $('.z-login').hide()
        $('.overplay').hide()
    })
    $('window').load(function(){
        $('.z-login').show()
        $('.overplay').show()
    })
});