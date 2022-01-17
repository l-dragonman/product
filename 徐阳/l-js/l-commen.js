window.addEventListener('load',function(){
    (function(){
        var big_activity = document.querySelector('.big_activity')
        var activity = document.querySelector('.activity')
        activity.addEventListener('mouseover',function(){
            big_activity.style.display = 'block'
        })
        big_activity.addEventListener('mouseout',function(){
            big_activity.style.display = 'none'
        })
    })();
    (function(){

        // 恢复
        var ost_rank = document.querySelector('.ost-rank')
        var hotlist_open = document.querySelector('.hotlist_open')
        hotlist_open.addEventListener('mouseenter',function(){
            ost_rank.style.display = 'block'
        })
        
        ost_rank.addEventListener('mouseleave',function(){
            ost_rank.style.display = 'none'
        })
       
    })();
    (function(){
        var rank_btn_bars = document.querySelectorAll('.rank-btn-bar')
        var rank_mings = document.querySelectorAll('.rank-ming')
        var rank_items = document.querySelectorAll('.rank-item')
        var rank_orders = document.querySelectorAll('.rank-order')
       
        // }
        // for(var i = 0; i < rank_orders.length; i++){
        //     if (rank_orders[i].innerHTML === 1 || 2 || 3){
        //        this.style.backgroundColor = '#c62828'
        //        }
        // }
       function change (ele,n) {
        $(ele).mouseenter(function () {
            var that = $(this).index()
            $(this).find('img').addClass('rank-img1').parent().siblings('li').find('img').removeClass('rank-img1')
            if(that == n) {
                $(ele).eq(that).find('p').removeClass('game-name1').parent().siblings('li').find('p').removeClass('game-name1')
            }else {
                $(ele).eq(that + 1).find('p').addClass('game-name1').parent().siblings('li').find('p').removeClass('game-name1')
            }
           
        })
       }
       change('.rank-item',4)
       change('.rank-item1',4)
    //    change('.rank-item2',3)
    //    change('.rank-item3',4)

    
        
       
       
    
        $('.rank-item2').mouseenter(function () {
            var that = $(this).index()
            $(this).find('img').addClass('rank-img1').parent().siblings('li').find('img').removeClass('rank-img1')

            // if(that == 3) {
                
            //         $('.rank-item2').eq(that).find('p').removeClass('game-name1').parent().siblings('li').find('p').removeClass('game-name1')
    
            //         $('.rank-sub-title').addClass('game-name1')

            // }else if(that == 8) {
                if(that == 8){
                console.log(that);
                $('.rank-item2').eq(that).find('p').removeClass('game-name1').parent().siblings('li').find('p').removeClass('game-name1')

                  
             }else {
                    $('.rank-item2').eq(that + 1).find('p').addClass('game-name1').parent().siblings('li').find('p').removeClass('game-name1')
    
                    $('.rank-sub-title').removeClass('game-name1')
                }
          
           
           
        })

       

    })();
})