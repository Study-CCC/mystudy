function ajax(){
    // 1.创建ajax对象
    var ajax = new XMLHttpRequest()
    // 2.连接服务器
    ajax.open('get','./a.txt',true)
    // 3.发送请求
    ajax.send()
    // 4.接收返回
    ajax.onreadystatechange=function(){
        //ajax.readyState
        if(ajax.readyState==4)
        {
            if(ajax.status==200)
            {
                // fnSucc(ajax.responseText)
                console.log(ajax.responseText)
            }
            else{
                if(fnFail)
                {
                    console.error('失败')
                }
            }
        }
    }
}