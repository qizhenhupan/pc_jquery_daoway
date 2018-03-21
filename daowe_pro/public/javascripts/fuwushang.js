$(function(){
    var search = window.location.search;
    var serviceId = search.replace(/\?serviceId=/,'');
    function appendTemplate(){
        $.get('/getItem'+search,function(data){

        });
    }
    function getComment(page){
        var p = page  || 1;
        $.get('/getComment'+search,{page:p},function(data){
            var $list = $('#comment-list');
            var newData = data.map(function(c){
                // c.createtime = moment(c.createtime).format('YYYY-MM-DD');
                var red = './images/item/red_star.png';
                var gray = './images/item/gray_star.png';
                var star = [];
                for(var i=0;i<c.star;i++){
                    star.push(red)
                }
                while(star.length<5){
                    star.push(gray);
                }
                c.star = star;
                return c
            });
            //注册过滤器
            template.defaults.imports.dateFormat = function(date,format){
                return moment(date).format(format)
            };
            var t = template('commentTemplate',{list:newData});
            $list.html(t);
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
    function qrCode(){
        $('#code').qrcode({
            render:'canvas',
            text:'192.168.1.104:3000/service.html',
            width:115,
            height:115,
            foreground:'#000',
            background:'#fff'
        })
    }
    function bindPaginationClick(){
        var $pagination = $('.pagination','#comment');
        $pagination.page = 1;
        $pagination.children().attr('href','#comment');
        $pagination.on('click','a',function(){
            //disabled return
            if($(this).hasClass('disabled')){return;}
            var context = $(this).text();
            var nextPage,prePage;
            //默认从零开始
            var $children = $pagination.children();
            prePage = $pagination.page*1;
            if(context.indexOf('上一页')>-1){
                //previous page
                nextPage = prePage - 1;
            }
            else if(context.indexOf('下一页')>-1){
                //next page
                nextPage = prePage + 1;
            }
            else{
                //page num
               nextPage = context*1
            }
            //next === pre return
            if(nextPage === prePage){return }
            //  去除上一个
            $($children.get(prePage)).removeClass('active');
            //添加下一个
            $($children.get(nextPage)).addClass('active');
            $pagination.page = nextPage;
            //四个边界条件！
            if(prePage === 1){
                $children.first().removeClass('disabled');
            }
            if(nextPage===9){
                $children.last().addClass('disabled');
            }
            if(prePage===9){
                $children.last().removeClass('disabled');
            }
            if(nextPage===1){
                $children.first().addClass('disabled');
            }

            getComment(nextPage);
        });
    }
    bindPaginationClick();
    getComment();
    qrCode();
    appendTemplate();
    fixedHeader();
});