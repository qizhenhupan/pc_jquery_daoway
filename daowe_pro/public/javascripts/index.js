$(function(){
    var carousel = new Swiper('#carousel',{
        effect:'fade',
        noSwiping:true,
        pagination:{
            el:'.swiper-pagination',
        }
    });
    var $carousel = $('#carousel');


    function fixedHeader() {
        $('.header-box')
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
    appendHomePageTemplate()
});