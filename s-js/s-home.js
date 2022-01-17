window.addEventListener('load', function () {
    (function () {
        var s_circle = document.querySelector('.s-circle')
        var s_texttop = document.querySelector('.s-texttop')
        var s_textunder = document.querySelector('.s-textunder')
        var s_endtext = document.querySelector('.s-endtext')
        var s_onevodie = document.querySelector('.s-onevodie')
        var s_person = document.querySelector('.s-person')
        var s_equip1 = document.querySelector('.s-equip1')
        var s_equip2 = document.querySelector('.s-equip2')
        var s_equip3 = document.querySelector('.s-equip3')
        var s_equip5 = document.querySelector('.s-equip5')
        var s_equip6 = document.querySelector('.s-equip6')
        var s_equip7 = document.querySelector('.s-equip7')
        var s_equip8 = document.querySelector('.s-equip8')
        var s_equip9 = document.querySelector('.s-equip9')
        var s_equip10 = document.querySelector('.s-equip10')
        var s_equip11 = document.querySelector('.s-equip11')
        var s_onevodie = document.querySelector('.s-onevodie')
        var s_onesec = document.querySelector('.s-onesec')
        var s_onetop = document.querySelector('.s-onetop')
        // 点击s_circle 文字位置发生变化
        s_circle.addEventListener('click', function () {
            s_onevodie.pause()
            animate(s_texttop, 120)
            setTimeout(function () {
                animate(s_textunder, 200)

                setTimeout(function () {
                    animate(s_endtext, 50)
                }, 50)
            }, 50)
            s_circle.style.display = 'none'
            // s_person.style.display = 'block'
            s_person.style.opacity = '1'
            s_onevodie.style.display = 'none'
            s_onetop.style.display = 'block'
            //  function change1 (ele,n, m ) {

            //         var num1 = 0
            //      var timer1 = setInterval (function () {

            //             if(num1 < n) {
            //               ele.style.backgroundPosition = num1 * -82 +'px ' + (-82 * m) + 'px'
            //               num1++
            //             }else{
            //                 clearInterval(timer1)
            //                 return
            //             }
            //         },500)
            //     }
            function change1(ele, n, m) {
                var num1 = 0
                var num2 = 0
                var timer1 = setInterval(function () {
                    num2++
                    if (num2 < n) {
                        ele.style.backgroundPosition = num1 * -82 + 'px ' + (-82 * m) + 'px'
                        num1++
                        console.log(num2);
                    } else if (num2 > n && num2 <= 14) {

                        if (num1 >= n) {
                            num1 = 0


                        } else if (num1 < n) {
                            ele.style.backgroundPosition = num1 * -82 + 'px ' + (-82 * m) + 'px'
                        }
                        num1++
                    } else if (num2 > 14) {
                        console.log(num2);

                        num1 = 0
                        ele.style.backgroundPosition = num1 * -82 + 'px ' + (-82 * m) + 'px'
                        clearInterval(timer1)
                        return
                    }

                }, 300)
            }



            // function change2 (ele,n, m ) {
            //     var num1 = 0

            //    var timer2= setInterval (function () {
            //         if(num1 < n) {
            //           ele.style.backgroundPosition = num1 * -69+'px ' +  (-82 * m) + 'px'
            //           num1++
            //         } else {
            //             clearInterval(timer2)
            //           return
            //         }
            //     },500) 
            // }

            function change2(ele, n, m) {
                var num1 = 0
                var num2 = 0
                var timer2 = setInterval(function () {
                    num2++
                    if (num2 < n) {
                        ele.style.backgroundPosition = num1 * -69 + 'px ' + (-82 * m) + 'px'
                        num1++
                    } else if (num2 > n && num2 <= 14) {

                        if (num1 >= n) {
                            num1 = 0
                        } else if (num1 < n) {
                            ele.style.backgroundPosition = num1 * -69 + 'px ' + (-82 * m) + 'px'
                        }
                        num1++
                    } else if (num2 > 14) {
                        console.log(num2);

                        num1 = 0
                        ele.style.backgroundPosition = num1 * -69 + 'px ' + (-82 * m) + 'px'
                        clearInterval(timer2)
                        return
                    }
                }, 300)
            }

            //     function change3 (ele,n, m ) {
            //         var num1 = 0
            //    var timer3 =  setInterval (function () {
            //             if(num1 < n) {
            //               ele.style.backgroundPosition = num1 * -69+'px ' +  ( -328 +( -69 * m)) + 'px'
            //               num1++
            //             } else {
            //                 clearInterval(timer3)
            //               return
            //             }
            //         },500) 
            //     }


            function change3(ele, n, m) {
                var num1 = 0
                var num2 = 0
                var timer3 = setInterval(function () {
                    num2++
                    if (num2 < n) {
                        ele.style.backgroundPosition = num1 * -69 + 'px ' + (-328 + (-69 * m)) + 'px'
                        num1++
                    } else if (num2 > n && num2 <= 14) {

                        if (num1 >= n) {
                            num1 = 0
                        } else if (num1 < n) {
                            ele.style.backgroundPosition = num1 * -69 + 'px ' + (-328 + (-69 * m)) + 'px'
                        }
                        num1++
                    } else if (num2 > 14) {
                        console.log(num2);

                        num1 = 0
                        ele.style.backgroundPosition = num1 * -69 + 'px ' + (-328 + (-69 * m)) + 'px'
                        clearInterval(timer3)
                        return
                    }

                }, 300)
            }
            change1(s_equip1, 8, 0)
            change1(s_equip2, 8, 1)
            change1(s_equip3, 4, 2)
            change2(s_equip5, 7, 4)
            change3(s_equip6, 5, 1)
            change3(s_equip7, 14, 2)
            change3(s_equip8, 14, 3)
            change3(s_equip9, 5, 4)
            change3(s_equip10, 11, 5)
            change3(s_equip11, 6, 6)



        })

    })()

    //  组队开车动画制作
})
window.addEventListener('load', function () {
    (function () {
        var s_fcircle = document.querySelector('.s-fcircle')
        var s_fourvodie = document.querySelector('.s-fourvodie')
        var s_fourbg = document.querySelector('.s-fourbg')
        var s_ftexttop = document.querySelector('.s-ftexttop')
        var s_ftextunder = document.querySelector('.s-ftextunder')
        var s_fendtext = document.querySelector('.s-fendtext')
        var s_car = document.querySelector('.s-car')
        var s_carpanel = document.querySelectorAll('.s-carpanel')
        var s_carone = document.querySelector('#s-carone')

        s_fcircle.addEventListener('click', function () {
            s_fourvodie.style.display = 'none'
            s_fourbg.style.display = 'block'
            s_fcircle.style.display = 'none'
            s_car.style.opacity = '1'
            $('.s-carpanel:eq(0)').addClass('s-carp')

            function move1(ele, m) {
                var timer = setInterval(function () {
                    if (ele.offsetLeft == m) {
                        clearInterval(timer)
                    }
                    ele.style.left = ele.offsetLeft - 2 + 'px'

                }, 1)
            }

            function move2(ele, n) {
                if (ele == s_fendtext) {
                    setTimeout(function () {
                        var timer = setInterval(function () {
                            if (ele.offsetTop == n) {
                                clearInterval(timer)
                            }
                            ele.style.top = ele.offsetTop - 4 + 'px'
                        }, 1)
                    }, 100)
                } else if (ele == s_ftextunder) {
                    var timer = setInterval(function () {
                        if (ele.offsetTop == n) {
                            clearInterval(timer)
                        }
                        ele.style.top = ele.offsetTop - 3 + 'px'
                    }, 1)
                } else {
                    var timer = setInterval(function () {
                        if (ele.offsetTop == n) {
                            clearInterval(timer)
                        }
                        ele.style.top = ele.offsetTop - 2 + 'px'
                    }, 1)
                }

            }

            function move3(ele, m) {
                var timer = setInterval(function () {
                    if (ele.offsetLeft == m) {
                        clearInterval(timer)
                    }
                    ele.style.left = ele.offsetLeft + 2 + 'px'

                }, 1)
            }

            function move4(ele, m) {
                var timer = setInterval(function () {
                    if (ele.offsetLeft == m) {
                        clearInterval(timer)
                    }
                    ele.style.left = ele.offsetLeft + 5 + 'px'

                }, 1)
            }
            move3(s_ftextunder, 960)
            move2(s_ftextunder, 160)
            move1(s_ftexttop, 582)
            move2(s_ftexttop, 160)

            move4(s_fendtext, 700)
            move2(s_fendtext, 260)
            $('.s-carhd .s-peo li').click(function () {
                $(this).addClass('s-on').siblings('li').removeClass('s-on')
                var that = $(this).index()
                $('.s-carpanel').eq(that).addClass('s-carp').siblings().removeClass('s-carp')

                $('.s-carhd .s-peo li:eq(' + that + ') i').addClass('s-show' + that + '').parent().siblings('li').find('i').removeClass('s-show0 || s-show1 || s-show2 || s-show3 || s-show4')
            })

        })
    })()
})
window.addEventListener('load', function () {

    (function () {
        var s_navleft = this.document.querySelector('.s-navleft')
        $('.s-halo ').mouseenter(function () {
            $('.s-mapvodie1').css('display', 'block')

            $('.s-halo ').mouseleave(function () {
                $('.s-mapvodie1').css('display', 'none')


            })

        })
        $('.s-halor').mouseenter(function () {
            $('.s-mapvodie2').css('display', 'block')

            $('.s-halor ').mouseleave(function () {
                $('.s-mapvodie2').css('display', 'none')


            })

        })

        document.addEventListener('scroll', function () {})

        var s_play = document.querySelector('.s-play')
        var s_x = document.querySelector('.s-x')
        var s_ship = document.querySelector('.s-ship')
        var s_zezhao = document.querySelector('.s-zezhao')
        s_play.addEventListener('click', function () {
            this.style.display = 'none'
            s_x.style.display = 'block'
            s_ship.style.display = 'block'
            s_zezhao.style.display = 'block'
        })

        s_x.addEventListener('click',function(){
            s_x.style.display = 'none'
            s_ship.style.display = 'none'
            s_zezhao.style.display = 'none'
            s_play.style.display = 'block'
        })
    })()
})