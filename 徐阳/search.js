
window.addEventListener('load', function () {
    (function () {
        var x_plogin = document.querySelector('#x-plogin');
        var x_loginDiv = document.querySelector('#x-loginDiv');
        var _overlay_ = document.querySelector('#_overlay_');
        var x_dologin = document.querySelector('#x-dologin');
        var loginqq = document.querySelector('#loginqq')
        var x_close = document.querySelector('#x-close')
        var x_close1 = document.querySelector('#x-close1')
        var qlogin = document.querySelector('#x-qlogin')
        var switch_btn_focus = document.querySelector('.switch_btn_focus')
        var x_bottom_qlogin = document.querySelector('#x-bottom_qlogin')
        var x_web_qr_login = document.querySelector('#x-web_qr_login')
        var x_switcher_plogin = document.querySelector('#x-switcher_plogin')
        var eeee = document.querySelector('.eeee')
        var xx = document.querySelector('.xx')
        var bbb=document.querySelector('.bbb')
        var x_switcher_plogin=document.querySelector('#x-switcher_plogin')
        // 弹出框
        x_plogin.addEventListener('click', function () {
            x_loginDiv.style.display = 'block';
            _overlay_.style.display = 'block';
            qlogin.style.display = 'block'
            x_bottom_qlogin.style.display = 'block'
        })
        x_dologin.addEventListener('click', function () {
            x_loginDiv.style.display = 'block';
            _overlay_.style.display = 'block';
            qlogin.style.display = 'block'
            x_bottom_qlogin.style.display = 'block'
        })
        loginqq.addEventListener('click', function () {
            x_loginDiv.style.display = 'block';
            _overlay_.style.display = 'block';
            qlogin.style.display = 'block'
            x_bottom_qlogin.style.display = 'block'


        })
        x_close.addEventListener('click', function () {
            x_loginDiv.style.display = 'none';
            _overlay_.style.display = 'none';
        })
        x_switcher_plogin.addEventListener('click', function () {
            x_web_qr_login.style.display = 'block'
            qlogin.style.display = 'none'
            x_bottom_qlogin.style.display = 'none'
            xx.focus()
        })
        switch_btn_focus.addEventListener('click', function () {
            // x_loginDiv.style.display = 'none';
            x_web_qr_login.style.display = 'none'
            qlogin.style.display = 'block'
            x_bottom_qlogin.style.display = 'block'
        })
        x_close1.addEventListener('click', function () {
            x_loginDiv.style.display = 'none';
            _overlay_.style.display = 'none';
            x_web_qr_login.style.display = 'none'
            console.log(1);
        })
        // 登录密码框
        xx.addEventListener('keyup', function () {
            if (this.value == '') {
                eeee.style.display = 'none'
            } else {
                eeee.style.display = 'block'

            }
        })
        // 失去焦点就影藏盒子
        // xx.addEventListener('blur', function () {
        //     eeee.style.display = 'none'
        // })
        // 获取就出现
        var bbb = document.querySelector('.bbb')
        bbb.focus()
        xx.addEventListener('focus', function () {
            if (this.value !== '') {
                eeee.style.display = 'block'
            }
        })
        xx.focus()
        eeee.addEventListener('click', function () {
            xx.value = ''
            eeee.style.display = 'none'
            xx.focus()
        })

    })()


})