<template>
    <div class="login_contaner">
        <ul class="nav">
            <li class="names">RuoYi</li>
            <li class="admin">
                <div class="img_box">
                    <img class="pic1" src="../assets/img/headpic.jpg" alt="">
                </div>
                <div class="admin_info">
                    <p class="username">{{admin}}</p>
                    <i class="layui-icon layui-icon-circle-dot"></i>
                    <span class="icon_nav">在线</span>
                    <i class="layui-icon layui-icon-circle"></i>
                    <span class="icon_nav">注销</span>
                </div>
                
            </li>
            <li class="nav_items" :key="key" v-for="(item,index,key) in navs" @click="changeColor(index)">
                <i class="layui-icon" :class="item.class"></i>
                <span class="item_list">{{item.title}}</span>
                <i class="layui-icon nav_icon layui-icon-left"></i>
                <dl class="sub" :key="key" v-for="(sub,key) in item.sub">
                    <dd class="sub_item" :class="{active:isShow == index}">{{sub}}</dd>
                </dl>
            </li>
        </ul>
        <div class="content">
            <div class="header">
                <div class="header-left">
                    <i class="layui-icon icon layui-icon-spread-left"></i>
                    <i class="layui-icon icon layui-icon-shrink-right"></i>
                </div>
                <ul class="header-right">
                    <li class="header-item" :key="key" v-for="(item,key) in headerItems">
                        <i class="layui-icon" :class="item.class"></i>
                        <span class="item-tit">{{item.title}}</span>
                    </li>
                    <li class="header-item username_list">
                        <img class="pic" src="../assets/img/headpic.jpg" alt="">
                        <span class="username">{{admin}}</span>
                        <ul class="user_list">
                            <li class="user_list_item">
                                <i class="layui-icon layui-icon-about"></i>
                                <span class="user_item">个人密码</span>
                            </li>
                            <li class="user_list_item">
                                <i class="layui-icon layui-icon-about"></i>
                                <span class="user_item">个人密码</span>
                            </li>
                            <hr/>
                            <li class="user_list_item">
                                <i class="layui-icon layui-icon-about"></i>
                                <span class="user_item">个人密码</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="cut_page">
                <div class="cut_right">
                    <i class="layui-icon cut_icon layui-icon-prev"></i>
                </div>
                <ul class="cut_left">
                    <li>
                        <i class="layui-icon left_icon cut_icon layui-icon-next"></i>
                    </li>
                    <li class="closes" @click="isShowf">
                        <span>标签操作</span> 
                        <i class="layui-icon left_icon layui-icon-triangle-d"></i>
                        <ul class="cut_tog" v-show="isShows">
                            <li class="cut_tog_item" :key="key" v-for="(item,key) in close">{{item}}</li>
                        </ul>
                    </li>
                    <li>
                        <span>刷新</span> 
                        <i class="layui-icon left_icon layui-icon-refresh"></i>
                    </li>
                </ul>
                <div class="center">
                   <div class="layui-tab" lay-allowClose="true">
                        <ul class="layui-tab-title">
                            <li class="layui-this">网站设置</li>
                            <li>用户基本管理</li>
                            <li>权限分配</li>
                            <li>全部历史商品管理文字长一点试试</li>
                            <li>订单管理</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div class="section">
                <ry-code></ry-code>
            </div>
            <div class="footer">
                © 2019 RuoYi Copyright
            </div>
        </div>
    </div>
</template>
<script>
import RyCode from "./ry-systemtool/ry-code"
export default {
    name:"RyIndex",
    components:{
        RyCode
    },
    data(){
        return{
            headerItems:[
                {title:'视频教程',class:"layui-icon-video",},
                {title:'开发文档',class:"layui-icon-about"},
                {title:'全屏显示',class:"layui-icon-about"}
            ],
            navs:[
                {title:'系统工具',class:"layui-icon-spread-left",sub:['表单构建','代码生成','系统接口']},
                {title:'系统监控',class:"layui-icon-spread-left",sub:['表单构建','代码生成','系统接口']},
            ],
            isShow:-1,
            active:{
                height: 'auto',
                transition:'all .5s'
            },
            admin:"若依",
            close:[ 
                '关闭当前',
                '关闭其他', 
                '关闭全部', 
                '全屏显示'
            ],
            isShows:false
        }
    },
    methods:{
        changeColor:function(index){
             this.isShow = index
        },
        isShowf:function(){
            this.isShows = !this.isShows
        }
    },
    mounted(){
        layui.use('element',()=>{
            var element = layui.element
        })
    }
}
</script>
<style scoped>
.login_contaner{
    width: 100%;
    height: 100%;
}

.nav{
    float: left;
    height: 100%;
    background: #2f4050;
}
.names{
    height: 50px;
    width: 220px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background:  #367fa9;
    color: #fff;
}
.nav_items{
    background: #2f4050;
    font-size: 13px;
    min-height: 46px;
    padding:0 20px 0 25px;
    color: #a7b1c2;
    position: relative;
    line-height: 46px;
    font-weight: 600;
    transition:all .5s;
}
.nav_items:hover{
    color:#fff;
    background: #232f3a;
}
.admin{
    height: 75px;
    padding:0 15px;
    line-height: 75px;
    background: #2f4050;
}
.pic1{
    height: 45px;
    width: 45px;
    border-radius: 50px;
    line-height: 50px;
}
.img_box{
    float: left;
}
.admin_info{
    float: left;
    margin-left:10px;
    padding:20px 0;
    line-height: 1;
   
}
.username{
    font-size: 14px;
    line-height: 14px;
    color:#fff;
    font-weight: 600; 
    padding-bottom: 5px;
}
.icon_nav{
    font-size: 12px;
    color:#fff;
}
.layui-icon-circle-dot{
    color: red;
}
.item_list{
    padding-left: 5px;
}
.nav_icon{
    position: absolute;
    right: 20px;
    top: 0px;
    font-size: 12px;
}

.sub_item{
    font-size: 13px;
    color: #a7b1c2;
    line-height: 46px;
    font-weight: 600;
    height: 0;
    text-align: center;
    overflow: hidden;
    transition: .5s;
}
.active{
    height: auto;
    transition:all .5s;
}
.sub_item:hover{
    color:#fff;
}



.content{
    margin-left:220px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    padding-left: 20px;
    line-height: 50px;
    background: #3c8dbc;
    height: 50px;
}
.icon{
    color:#fff;
    background: #3c8dbc;
}
.header-left{
    float: left;
}
.header-right{
    float: right;
    height: 50px;
}
.header-item{
    float:left;
    font-size: 14px;
    height: 50px;
    color:#fff;
    font-weight: 600;
    padding:0 15px;
    position: relative;
}
.user_list{
    position: absolute;
    top: 50px;
    right:0;
    width: 138px;
    background: #fff;
    color:#2f4050;
    border:1px solid #ccc;
    border-top:none;
    height: 0;
    overflow: hidden;
    z-index: 5;
}
.user_list_item{
    margin:4px;
    font-weight: 100;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    
}
.user_list_item:hover{
    background: #ccc;
}
.username_list:hover .user_list{
    height:auto ;
}

.header-item:hover{
    background:  #367fa9; 
}
.pic{
    height: 27px;
    width:27px;
    border-radius: 50px;
    line-height: 50px;
}

/* 切页 */
.cut_page{
    height: 40px;
    width: 100%;
    background: #fafafa;
    position: relative;
    border-bottom: 1px solid #e7eaec;
}
.cut_right{
    height: 40px;
    padding:0 6px;
    line-height: 40px;
    text-align: center;
    float: left;
    background: #fff;
}
.cut_left{
    height: 40px;
    line-height: 40px;
    text-align: center;
    float: right;
    background: #fff;
}
.cut_left li{
    display: inline-block;
    padding:0 6px;
    line-height: 40px;
    color: #999999;
    border-left: 1px solid #e7eaec;
}

.cut_page::-webkit-scrollbar{
    display: none;
}
.layui-tab{
    margin:0;
}
.center{
    overflow: hidden;
    position: relative;
}
.cut_icon{
    font-size: 12px;
}
.layui-tab-title li{
    font-size: 13px;
    color:#999999;
    padding:0 6px;
    border-right: 1px solid #e7eaec;
}
.layui-tab-title li:hover{
    background: #eaedf1;
}
.left_icon{
    font-size: 12px;
}
.closes{
    position: relative;
}
.cut_tog{
    position: absolute;
    top: 40px;
    right:-5px;
    width: 118px;
    border:1px solid #e7eaec;
    z-index: 2;
}
.cut_tog_item{
    display: block;
    height:30px ;
    width: 100px;
    line-height: 30px!important;
    text-align: center;
    font-size: 13px;
    color:#999999;
    border-radius: 5px;
    border:none!important;
    margin:1px;
}
.cut_tog_item:hover{
    background: #e7eaec;
}

.section{
    flex: 1;
    background: #ebebeb;
    padding:20px;
    overflow-y: auto;
    overflow-x: auto;
}
.footer{
    height: 36px;
    text-align: right;
    padding:0 20px;
    color:#999999;
    line-height: 36px;
}
</style>
