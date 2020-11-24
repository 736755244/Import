import Vue from 'vue'

const WebSql=function(){
    if(window.openDatabase){
        //openDatabase('数据库名称','版本','数据库描述','数据库大小')
        var db = openDatabase('TC','1.0','taicang',200*1024*1024);
       
        Vue.prototype.$db=db;
        
        if(!db){
            console.log("数据库创建失败！");
        }else{
            console.log('本地数据库创建成功！');
        }
    }else{
        console.log('不支持本地存储！');
    }
};
export default WebSql;