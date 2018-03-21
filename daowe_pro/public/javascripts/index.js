$(function(){
    var carousel = new Swiper('#carousel',{
        effect:'fade',
        noSwiping:true,
        noSwipingClass:'stop-swiping',
        pagination:{
            el:'.swiper-pagination',
        }
    });
    var $carousel = $('#carousel');
    function fixedHeader() {
        var $header = $(document.body.firstElementChild).clone(true).addClass('fixed');
        $(document.body).append($header);
        $(document).scroll(function(){
            var scrollTop = window.scrollY;
            console.log(scrollTop)
            var hasClass = $header[0].classList.contains('show');
            if(scrollTop>100){
                !hasClass&&$header.addClass('show');
            }else{
                hasClass&&$header.removeClass('show');
            }
        });
    }
    function appendCityTemplate(){
        var $cityList = $('#city-list');
        $.get('/getCity',function(data){
            console.log('city',data);
            var t = template('templateCity',{list:data});
            $cityList.html(t)
        });
    }
    function appendHomePageTemplate(){
        $.get('/getShop',function(data,err){
            var t = template('templateList',{
                list:data
            });
            $('#service-list').html(t)
                .find('.home-service-box:odd')
                .addClass('color')
        });
    }
    appendCityTemplate();
    appendHomePageTemplate();
    fixedHeader();
});