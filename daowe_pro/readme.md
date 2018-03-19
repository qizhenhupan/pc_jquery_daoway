###
    第一天：
        background-position center
        优：
        可以快速居中图片！
        并且能自适应居中！
            缺：
            但是不能显示溢出部分！
    # swiper 制作轮播---effect fade 渐变消失！
               effect: fade
    #多行文本溢出
         1. 使用jq限制字符数，
            字符数达到极限，爱后面添加省略号！
         2. -webkit-line-clamp 文本行数目
            display -webkit-box
            -webkit-box-orient vertical
            overflow hidden
            仅限于webkit内核的浏览器，
            一般浏览器还是用jq方法限制文本长度吧！

    #art-template 前端模版
        1. 基本语法
            {{}}基本渲染
            {{@ 非转义渲染}}
            {{if value}} {{/if}}
            {{each target [val] [key]}} {{/each}}
            $value $index
        2. 基本流程
            1. 引入template.js
            2. script id='t' type='text/html' 定义t模版
            3. template('t',{name})
                渲染模版，模版内能直接使用{name}中的属性名
            4. div.innerHTML = template();

    # $.get(url,function(data,statusText){})
        利用$发送ajax