$(function(){
    $('#code').qrcode({
        render:'canvas',
        width:115,
        height:115,
        foreground:'#000',
        background:'#fff',
        text:'i deeply love this ground!'
    });
    function appendCityTemplate(){
        var $cityList = $('#city-list');
        $.get('/getCity',function(data){
            var t = template('templateCity',{list:data});
            $cityList.html(t)
        });
    }
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
    function getItem(){
        $.get('/getItem',function(data){

        });
    }
    fixedHeader();
    appendCityTemplate();
});