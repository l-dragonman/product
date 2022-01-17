window.addEventListener('load', function () {

    (function () {
        var u_ft = document.querySelector('.u-ft')
        var u_ft_1 = document.querySelector('.u-ft-1')
        var u_ft_2 = document.querySelector('.u-ft-2')
        var u_ft_3 = document.querySelector('.u-ft-3')
        var u_ft_4 = document.querySelector('.u-ft-4')
        var sniper = document.querySelector('.u-sniper')
        // var u_bigtp = document.querySelector('.u-bigtp')
        var u_video3 = document.querySelector('.u-video3')
        u_ft_4.addEventListener('click', function (e) {
            // u_bigtp.style.display = 'block'
            // u_video3.style.display = 'none'
            this.style.display = 'none'
            e.stopPropagation()
            u_video3.pause()
            animate(u_ft_1, 120)
            setInterval(function () {
                animate(u_ft_2, 120)
            }, 100)
            setInterval(function () {
                animate(u_ft_3, 150)
            }, 200)
            sniper.style.opacity = '1'
            var part1 = document.querySelector('.part1')
            var part2 = document.querySelector('.part2')
            var part3 = document.querySelector('.part3')
            var part4 = document.querySelector('.part4')
            var part5 = document.querySelector('.part5')
            var rifle1 = document.querySelector('.rifle1')
            var rifle2 = document.querySelector('.rifle2')
            var rifle3 = document.querySelector('.rifle3')
            var rifle4 = document.querySelector('.rifle4')
            var rifle5 = document.querySelector('.rifle5')

            var count = 0

            getPart(part1, 6)
            getPart(part2, 6)
            getPart(part3, 6)
            getPart(part4, 6)
            getPart(part5, 6)
            getPart(rifle1, 6)
            getPart(rifle2, 6)
            getPart(rifle3, 6)
            getPart(rifle4, 6)
            getPart(rifle5, 6)

            function getPart(ele, num) {
                var num3 = 0
                var timer = setInterval(function () {
                    num3++
                    if (count < num) {
                        if (ele == part1 || ele == rifle1) {
                            ele.style.backgroundPosition = count * (-61) + 'px' + ' -820' + 'px'
                        } else if (ele == part2 || ele == rifle2) {
                            ele.style.backgroundPosition = count * (-63) + 'px' + ' -940' + 'px'
                        } else if (ele == part3 || ele == rifle3) {
                            ele.style.backgroundPosition = count * (-63) + 'px' + ' -1060' + 'px'
                        } else if (ele == part4 || ele == rifle4) {
                            ele.style.backgroundPosition = count * (-63) + 'px' + ' -1000' + 'px'
                        } else if (ele == part5 || ele == rifle5) {
                            ele.style.backgroundPosition = count * (-63) + 'px' + ' -1120' + 'px'
                        }
                        count++
                    } else if (count == num) {
                        count = 0
                    }
                    if (num3 == 22) {
                        clearInterval(timer)
                    }
                }, 300)



            }

            var u_gun1 = document.querySelector('.u-gun1')
            var u_gun2 = document.querySelector('.u-gun2')
            setGun(u_gun1, 3)
            setGun(u_gun2, 3)
            var count1 = 0

            function setGun(gun, num2) {
                var num4 = 0
                var timergun = setInterval(function () {
                    if (count1 < num2) {
                        if (gun == u_gun1) {
                            gun.style.backgroundPosition = count1 * (-600) + 'px ' + 0 + 'px'
                        } else if (gun == u_gun2) {
                            gun.style.backgroundPosition = count1 * (-620) + 'px ' + (-120) + 'px'
                        }
                    }
                    count1++
                    if (count1 == 3) {
                        count1 = 0
                    }
                    num4++
                    if (num4 == 22) {
                        clearInterval(timergun)
                    }
                }, 300)
            }

            getover(part1, 6)
            getover(part2, 6)
            getover(part3, 6)
            getover(part4, 6)
            getover(part5, 6)
            getover(rifle1, 6)
            getover(rifle2, 6)
            getover(rifle3, 6)
            getover(rifle4, 6)
            getover(rifle5, 6)


            var num6 = 0

            function getover(e, num5) {
                e.addEventListener('mouseenter', function () {
                    var timeover = setInterval(function () {
                        if (num6 < num5) {
                            if (e == part1 || e == rifle1) {
                                e.style.backgroundPosition = num6 * (-61) + 'px' + ' -820' + 'px'
                            } else if (e == part2 || e == rifle2) {
                                e.style.backgroundPosition = num6 * (-63) + 'px' + ' -940' + 'px'
                            } else if (e == part3 || e == rifle3) {
                                e.style.backgroundPosition = num6 * (-63) + 'px' + ' -1060' + 'px'
                            } else if (e == part4 || e == rifle4) {
                                ele.style.backgroundPosition = num6 * (-63) + 'px' + ' -1000' + 'px'
                            } else if (e == part5 || e == rifle5) {
                                e.style.backgroundPosition = num6 * (-63) + 'px' + ' -1120' + 'px'
                            }
                            num6++
                        } else if (num6 == num5) {
                            num6 = 0
                        }
                    }, 200)
                    e.addEventListener('mouseleave', function () {
                        clearInterval(timeover)
                    })
                })

            }

            getenter(u_gun1, 3)
            getenter(u_gun2, 3)
            var num8 = 0
            var num9 = 0
            var num10 = 0
            var num11 = 0
            var num12 = 0
            var num13 = 0

            var num14 = 0
            var num15 = 0
            var num16 = 0
            var num17 = 0
            var num18 = 0

            function getenter(u_gun, num7) {

                u_gun.addEventListener('mouseenter', fn)

                function fn() {
                    if (u_gun == u_gun1) {
                        var stime1 = setInterval(function () {
                            part1.style.backgroundPosition = num9 * (-61) + 'px' + ' -820' + 'px'
                            num9++
                            if (num9 == 6) {
                                num9 = 0
                            }
                        }, 250)
                        var stime2 = setInterval(function () {
                            part2.style.backgroundPosition = num10 * (-63) + 'px' + ' -940' + 'px'
                            num10++
                            if (num10 == 4) {
                                num10 = 0
                            }
                        }, 250)
                        var stime3 = setInterval(function () {
                            part3.style.backgroundPosition = num11 * (-63) + 'px' + ' -1060' + 'px'
                            num11++
                            if (num11 == 3) {
                                num11 = 0
                            }
                        }, 250)
                        var stime4 = setInterval(function () {
                            part4.style.backgroundPosition = num12 * (-63) + 'px' + ' -1000' + 'px'
                            num12++
                            if (num12 == 4) {
                                num12 = 0
                            }
                        }, 250)
                        var stime5 = setInterval(function () {
                            part5.style.backgroundPosition = num13 * (-63) + 'px' + ' -1120' + 'px'
                            num13++
                            if (num13 == 4) {
                                num13 = 0
                            }
                        }, 250)
                    }
                    if (u_gun == u_gun2) {
                        var stime6 = setInterval(function () {
                            rifle1.style.backgroundPosition = num14 * (-61) + 'px' + ' -820' + 'px'
                            num14++
                            if (num14 == 6) {
                                num14 = 0
                            }
                        }, 250)
                        var stime7 = setInterval(function () {
                            rifle2.style.backgroundPosition = num15 * (-63) + 'px' + ' -940' + 'px'
                            num15++
                            if (num15 == 4) {
                                num15 = 0
                            }
                        }, 250)
                        var stime8 = setInterval(function () {
                            rifle3.style.backgroundPosition = num16 * (-63) + 'px' + ' -1060' + 'px'
                            num16++
                            if (num16 == 3) {
                                num16 = 0
                            }
                        }, 250)
                        var stime9 = setInterval(function () {
                            rifle4.style.backgroundPosition = num16 * (-63) + 'px' + ' -1000' + 'px'
                            num16++
                            if (num16 == 4) {
                                num16 = 0
                            }
                        }, 250)
                        var stime10 = setInterval(function () {
                            rifle5.style.backgroundPosition = num17 * (-63) + 'px' + ' -1120' + 'px'
                            num17++
                            if (num17 == 4) {
                                num17 = 0
                            }
                        }, 250)
                    }
                    clearInterval(timergun)
                    var timergun = setInterval(function () {
                        if (num8 < num7) {
                            if (u_gun == u_gun1) {
                                u_gun.style.backgroundPosition = num8 * (-600) + 'px ' + 0 + 'px'
                            } else if (gun == u_gun2) {
                                u_gun.style.backgroundPosition = num8 * (-620) + 'px ' + (-120) + 'px'
                            }
                        }
                        num8++
                        if (num8 == num7) {
                            num8 = 0
                        }
                    }, 250)
                    u_gun.addEventListener('mouseleave', function () {
                        clearInterval(timergun)
                        clearInterval(stime1)
                        clearInterval(stime2)
                        clearInterval(stime3)
                        clearInterval(stime4)
                        clearInterval(stime5)
                        clearInterval(stime6)
                        clearInterval(stime7)
                        clearInterval(stime8)
                        clearInterval(stime9)
                        clearInterval(stime10)
                    })
                }
            }
        })
    })()

    // 天气页面动画效果

    var u_climate = document.querySelector('.u-climate')
    var u_cloud = document.querySelector('.u-cloud')
    var u_tianqi = document.querySelector('.u-tianqi')
    var u_xian1 = document.querySelector('.u-xian1')
    var u_wenzi1 = document.querySelector('.u-wenzi1')
    var u_weather = document.querySelector('.u-weather')

    var u_terrain = document.querySelector('.u-terrain')
    var u_hill = document.querySelector('.u-hill')
    var u_dixing = document.querySelector('.u-dixing')
    var u_xian2 = document.querySelector('.u-xian2')
    var u_wenzi2 = document.querySelector('.u-wenzi2')
    var u_terrain = document.querySelector('.u-terrain')

    getclick(u_cloud, u_tianqi, u_xian1, u_wenzi1, u_hill, u_dixing, u_xian2, u_wenzi2)
    getclick(u_hill, u_dixing, u_xian2, u_wenzi2, u_cloud, u_tianqi, u_xian1, u_wenzi1)

    function getclick(ele, ele2, ele3, ele4, ele5, ele6, ele7, ele8) {
        ele.addEventListener('click', function () {
            if (ele == u_cloud) {
                ele5.style.backgroundPosition = (-111) + 'px ' + (-679) + 'px'
                ele6.style.color = "#fff"
                ele7.style.backgroundColor = '#fff'
                ele8.style.color = '#fff'
                u_cloud.style.backgroundPosition = 0 + 'px ' + (-762) + 'px'
                ele2.style.color = "#e69800"
                ele3.style.backgroundColor = '#e69800'
                ele4.style.color = '#e69800'
                u_terrain.style.display = 'none'
                u_weather.style.display = 'flex'
            } else if (ele == u_hill) {
                ele5.style.backgroundPosition = 0 + 'px ' + (-679) + 'px'
                ele6.style.color = "#fff"
                ele7.style.backgroundColor = '#fff'
                ele8.style.color = '#fff'
                u_hill.style.backgroundPosition = (-111) + 'px ' + (-764) + 'px'
                ele2.style.color = "#e69800"
                ele3.style.backgroundColor = '#e69800'
                ele4.style.color = '#e69800'
                u_terrain.style.display = 'flex'
                u_weather.style.display = 'none'
            }
        })
    }


    var u_weather1 = document.querySelector('.u-weather1')
    var u_weather2 = document.querySelector('.u-weather2')
    var u_weather3 = document.querySelector('.u-weather3')
    var u_pic1 = document.querySelector('.u-pic1')
    // var u_pic2 = document.querySelector('.u-pic2')
    // var u_pic3 = document.querySelector('.u-pic3')
    // var u_word1 = document.querySelector('.word1')
    // var u_word2 = document.querySelector('.word2')
    // var u_word3 = document.querySelector('.word2')

    u_weather1.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(' + (126) + 'px) scaleX(1.7)'
        u_weather2.style.transform = 'translateX(' + (250) + 'px) scaleX(0.8)'
        u_weather3.style.transform = 'translateX(' + (200) + 'px)'
        // u_pic1.style.transform = 'translateX('+100+'px)'
        // u_word1.style.display = 'none'
        // u_word1.style.transform = 'translateX(' + 100 + 'px)'
        // u_word2.style.display = 'block'
        // u_word3.style.display = 'block'
    })
    u_weather1.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(' + (0) + 'px) scaleX(1)'
        u_weather2.style.transform = 'translateX(' + (0) + 'px) scaleX(1)'
        u_weather3.style.transform = 'translateX(' + (0) + 'px)'
        // u_word1.style.display = 'block'

    })
    u_weather2.addEventListener('mouseenter', function () {
        this.style.transform = 'scaleX(1.7)'
        u_weather1.style.transform = 'translateX(' + (-180) + 'px)'
        u_weather3.style.transform = 'translateX(' + (180) + 'px)'
        // u_word2.style.display = 'none'
        // u_word1.style.display = 'block'
        // u_word3.style.display = 'block'
    })
    u_weather2.addEventListener('mouseleave', function () {
        this.style.transform = 'scaleX(1)'
        u_weather1.style.transform = 'translateX(' + (0) + 'px)'
        u_weather3.style.transform = 'translateX(' + (0) + 'px)'
        // u_word2.style.display = 'block'

    })
    u_weather3.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(' + (-126) + 'px) scaleX(1.7)'
        u_weather2.style.transform = 'translateX(' + (-250) + 'px) scaleX(0.8)'
        u_weather1.style.transform = 'translateX(' + (-200) + 'px)'
        // u_word3.style.display = 'none'
        // u_word3.style.transform = 'translateX(' + -100 + 'px)'
        // u_word2.style.display = 'block'
        // u_word1.style.display = 'block'
    })
    u_weather3.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(' + (0) + 'px) scaleX(1)'
        u_weather2.style.transform = 'translateX(' + (0) + 'px) scaleX(1)'
        u_weather1.style.transform = 'translateX(' + (0) + 'px)'
    })

    var u_chevron1 = document.querySelector('.u-chevron1')
    var u_chevron2 = document.querySelector('.u-chevron2')
    var u_chevron3 = document.querySelector('.u-chevron3')
    var u_chevron4 = document.querySelector('.u-chevron4')
    var u_chevron5 = document.querySelector('.u-chevron5')

    u_chevron1.addEventListener('mouseenter',function(){
        this.style.transform = 'translateX('+ 120 +'px) scaleX(1.8)'
        u_chevron2.style.transform = 'translateX('+ 200 +'px) scaleX(.9)'
        u_chevron3.style.transform = 'translateX('+ 120 +'px) scaleX(.9)'
        u_chevron4.style.transform = 'translateX('+ 40 +'px) scaleX(.9)'
    })
    u_chevron1.addEventListener('mouseleave',function(){
        this.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron2.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron3.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron4.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
    })
    u_chevron2.addEventListener('mouseenter',function(){
        this.style.transform = 'translateX('+ 60 +'px) scaleX(1.8)'
        u_chevron1.style.transform = 'translateX('+ -30 +'px) scaleX(.9)'
        u_chevron3.style.transform = 'translateX('+ 160 +'px) scaleX(.9)'
        u_chevron4.style.transform = 'translateX('+ 60 +'px) scaleX(.9)'
    })
    u_chevron2.addEventListener('mouseleave',function(){
        this.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron1.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron3.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron4.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
    })
    u_chevron3.addEventListener('mouseenter',function(){
        this.style.transform = 'scaleX(1.9)'
        u_chevron1.style.transform = 'translateX('+ -60 +'px) scaleX(.9)'
        u_chevron2.style.transform = 'translateX('+ -120 +'px) scaleX(.9)'
        u_chevron4.style.transform = 'translateX('+ 120 +'px) scaleX(.9)'
        u_chevron5.style.transform = 'translateX('+ 60 +'px) scaleX(.9)'

    })
    u_chevron3.addEventListener('mouseleave',function(){
        this.style.transform = 'scaleX(1)'
        u_chevron1.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron2.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron4.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron5.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
    })
    u_chevron4.addEventListener('mouseenter',function(){
        this.style.transform = 'translateX('+ -60 +'px) scaleX(1.8)'
        u_chevron5.style.transform = 'translateX('+ 30 +'px) scaleX(.9)'
        u_chevron3.style.transform = 'translateX('+ -160 +'px) scaleX(.9)'
        u_chevron2.style.transform = 'translateX('+ -60 +'px) scaleX(.9)'
    })
    u_chevron4.addEventListener('mouseleave',function(){
        this.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron5.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron3.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron2.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
    })
    u_chevron5.addEventListener('mouseenter',function(){
        this.style.transform = 'translateX('+ -120 +'px) scaleX(1.8)'
        u_chevron4.style.transform = 'translateX('+ -200 +'px) scaleX(.9)'
        u_chevron3.style.transform = 'translateX('+ -120 +'px) scaleX(.9)'
        u_chevron2.style.transform = 'translateX('+ -40 +'px) scaleX(.9)'
    })
    u_chevron1.addEventListener('mouseleave',function(){
        this.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron4.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron3.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
        u_chevron2.style.transform = 'translateX('+ 0 +'px) scaleX(1)'
    })
})