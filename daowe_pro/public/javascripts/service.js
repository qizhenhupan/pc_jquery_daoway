$(function(){
    //创建模版
    var $showMore  = $('#show-more');
    $showMore.click(function(){
        appendTemplate();
    });
    function appendTemplate(){
        $.get('/getService',function(data,statusText){
            var t = template('template',{list:data.map(function(d){
                    d.imgUrl += '?serviceId='+d.id;
                    return d
                })}) ;

            var $box = $('#service-box');
            if($box.children().length){
                $box.html($box.html()+t)
            }else{
                $box.html(t)
            }
        });
    }
    function fixedHeader() {
        var $header = $(document.body.firstElementChild).clone(true).addClass('fixed');
        $(document.body).append($header);
        $(document).scroll(function(){
            var scrollTop = window.scrollY;
            var hasClass = $header[0].classList.contains('show');
            if(scrollTop>100){
                !hasClass&&$header.addClass('show');
            }else{
                hasClass&&$header.removeClass('show');
            }
        });
    }
    fixedHeader();
    appendTemplate();
});