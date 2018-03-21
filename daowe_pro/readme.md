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
    ###
        问题：
            使用swiper创建轮播图，
            但是无法禁止交互！
            noSwiping true,
            但是没有效！
    ### 关于图片居中
        + 1. 将图片作为背景，background-position center
             此方法可以将任意图片居中，不用考虑是否溢出！

        - 2. 使用定位，transform 50%

    ### 第二天
        + 关于package-lock.json
            这是一个npm 5版本以上的文件，用于记录依赖安装。
            防止npm i 时，重复安装！
            但是某些版本可能会有问题，会将原来的依赖缓存删除，但是
            npm start是按照package-lock.json寻找，
            出现找不到依赖的情况！
        - 2 access-allow-control-origin
            解决跨域问题
        * 3 关于pre标签（预设文本！）
            white-space pre
            保留预设文本，与pre标签效果一致！
                wrap
                nowrap
                pre
                pre-line 保留换行符（换行符正常，不合并）
                pre-wrap 保留空白符（空格符正常，不合并）
