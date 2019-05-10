<template>
<div>
    <ul class="header">
        <li class="header_item">
            <label class="label_tit">输入框：</label>
            <input type="text" class="ry_msg"/>
        </li>
        <li class="header_item">
            <label class="label_tit">输入框：</label>
            <input type="text" class="ry_msg"/> 
        </li>
        <li class="header_item">
            <label class="label_tit">时间表：</label>
            <span id="testView"></span>
            <div id="test2"></div>
        </li>
        <li class="header_item">
            <button class="layui-btn  layui-btn-sm layui-btn-radius">
                <i class="layui-icon layui-icon-search"></i>
                搜索
            </button>
            <button class="layui-btn  layui-btn-sm layui-btn-radius layui-btn-warm">
                <i class="layui-icon layui-icon-refresh"></i>
                重置
            </button>
        </li>
    </ul>
</div>
        
</template>
<script>
import laydate from "@/static/layui/lay/modules/laydate.js"
export default {
    mounted(){
        laydate.render({
            elem: '#test2'
            ,position: 'static'
            ,change: function(value, date){ //监听日期被切换
                lay('#testView').html(value);
            }
        });
    }
}
</script>
<style scoped>
.header{
    background-color: #fff;
    border-radius: 5px;
    line-height: 50px;
    height: 50px;
    padding-top: 5px;
    padding-bottom: 13px;
    padding-left: 20px;
    padding-right: 20px;
}
.header_item{
    display: inline-block;
    padding-right: 20px;
}
.layui-input{
    height: 30px;
    width: 200px;
}
.label_tit{
    font-size: 13px;
}
.ry_msg{
    height: 30px;
    width: 200px;
    border:1px solid #e6e6e6;
    border-radius: 5px;
    outline: none;
    transition: all .5s;
    text-indent: 10px;
}

.ry_msg:focus{
     border:1px solid #8d8a8a;
}
</style>
