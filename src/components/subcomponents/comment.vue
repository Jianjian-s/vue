<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（最多120字）" maxlength="120"
        v-model="msg">

        </textarea>

        <mt-button type="primary" size="large" @click="postComment" >发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time |dateFormat }}
                </div>
                <div class="cmt-body">
                    {{item.content==='undefined'?'此用户很懒，什么也米有说':item.content}}
                </div>
            </div>
        </div>



        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import{Toast}from "mint-ui";
export default{
    data(){
        return{
            pageIndex:1,//默认展示第一页的数组
            comments:[],//评论数据
            msg:''//评论内容
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){//获取评论
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+
            this.pageIndex).then(result =>{
                if(result.body.status ===0){
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast('获取失败')
                }
            });
        },
        getMore(){//加载更多
            this.pageIndex++;
            this.getComments();
        },
        postComment(){//提交评论的方法
            if(this.msg.trim().length===0){
                Toast('评论内容不能为空')
            }

            this.$http
                .post("api/postcomment/"+this.$route.params.id,{
                    content:this.msg.trim()
                })
                .then(function(result)
                {
                    if(result.body.status ===0){
                        var cmt = {user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg='';
                    }
                })

           
                
            
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size :18px;
    }

    textarea{
        font-size :14px;
        height :85px;
        margin :0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
             font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }

        }
    }

}
</style>