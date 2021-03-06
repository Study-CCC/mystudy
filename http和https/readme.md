相关文档链接:https://juejin.im/post/5e76bd516fb9a07cce750746#heading-6
1. http报文结构
    tcp在传输的时候分为TCP头和数据部分
    http也为header+body部分：起始行 + 头部 + 空行 + 实体
    http报文分为请求报文和响应报文
    起始行：
    请求报文起始行为方法+路径+http版本：Get/home Http/1.1
    响应报文起始行为http版本+状态码+原因: HTTP/1.1 200 OK
    在起始行中每两个部分用空格隔开,最后一个部分应该接换行
    头部字段的格式：
        1.不区分大小写
        2.字段名后面不可以出现空格不可以出现下划线_
        3.字段后面紧跟着：
    空行：
        用来区分实体和头部
    实体：
        具体的数据
2. http的请求方法
    http1.1/规定了以下请求方法(都是大写)：
        GET：通常用来获取资源
        HEAD： 获取资源的响应头
        POST： 提交数据
        PUT： 修改数据
        DELETE： 删除资源
        CONNECT： 建立连接隧道，用于代理服务器
        OPTIONS： 列出可对资源实行的请求方法，用来跨域请求
        TRACE： 追踪请求-响应的传输路径
    GET和POST的区别:
        GET是用来获取资源,POST是用来提交数据
        具体区别：
            1.缓存:GET请求会被浏览器主动缓存起来,而POST默认不会
            2.编码:GET只能进行URL编码，只能接收ASCII字符，而POST没有限制
            3.参数：GET一般放在URL中，因此不安全，POST放在请求体中，更适合传输敏感信息
            4.幂等：GET是幂等的，POST不是。(幂等表示执行相同的操作，结果也是相同的)
            5.TCP：GET请求会把请求报文一次性发出去,而POST会分为两个TCP数据包,首先发送header部分,服务器响应100然后再发送body(火狐浏览器除外,它的post只发一个包)
3. 如何理解URI
    URI被称为统一资源表示符
    URI完整的结构是: scheme:// user:password@ host:port path?query #fragment
        scheme 表示协议名，比如http, https, file等等。后面必须和://连在一起。
        user:password@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。
        host:port表示主机名和端口。
        path表示请求路径，标记资源所在位置。
        query表示查询参数，为key=val这种形式，多个键值对之间用&隔开。
        fragment表示 URI 所定位的资源内的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。
        举个例子:
            https://www.baidu.com/s?wd=HTTP&rsv_spt=1
        https 为scheme www.baidu.com为host:port  /s为path 后面的为query
    URI编码
        URI只能使用ASCII,ASCII之外的字符是不支持显示的,如果不加处理会报错.
        因此URI加入了编码机制,将所有的非ASCII和界定符转为了十六进制字节值,然后在前面加%
4. http状态码
    http的状态码为三位数，被分为五类：
        1xx: 表示目前是协议处理的中间状态，还需要后续操作。
        2xx: 表示成功状态。
        3xx: 重定向状态，资源位置发生变动，需要重新请求。
        4xx: 请求报文有误。
        5xx: 服务器端发生错误。
5. http特点
    1.灵活可扩展,体现在两个方面:1.语义上比较自由,只规定了基本格式,其他各个部分都没有严格的语法限制，
                              2.传输形式的多样性，不仅可以传输文本。还能传输图片、视频等
    2.简单快速：客户向服务器发起请求的时候，只需要传送请求方法和路径。由于，http协议简单，使得http服务器的程序规模小，因此通信更快
    3.无状态： http是无状态协议，无状态是只对事务处理没有记忆能力。缺少状态意味着后面如果需要处理前面的信息则必须重传，这样可能导致
              每次连接传送的数据量增大。另一方面如果仅仅是需要获取一些数据，不需要保存连接上下文信息，无状态反而可以减少网络开销
    4.支持客户/服务器模式
    5.无连接：无连接的含义是限制每次连接只处理一个请求，处理完客户请求，并收到客户的应答后，即断开连接，不再需要为多个对象创建多个连接，
             采用这种方式可以节省传输时间
6. http缺点
    1. 无状态: 在需要进行长连接的场景中,需要保存大量的上下文以避免传输大量的信息,这时候无状态就算http的缺点了
    2. 明文传输: 为了方便调试,http的报文头部不为2进制,而是直接的文本形式,这样就把信息直接http的报文信息暴露给了外界,给攻击者提供了便利。
                WiFi陷阱就是通过这种方式,诱导你连上热点,然后疯狂抓你流量,从而拿到你的敏感信息
    3. 队头堵塞问题： 当http开启长连接时,共用一个TCP连接,同一时刻只能处理一个请求,请求耗时长的情况下,其他请求处于堵塞状态
7. Accept系列字段    
    数据格式
        可以在content-type这个字段中标记发送的数据类型,接受方想要收到指定的数据类型也可以用Accept-type字段
    压缩方式
        将数据进行编码压缩,采用什么压缩方式体现在发送方的Content-Encoding中,接受什么养的压缩方式体现在接受方的Accpet-Encoding中
    支持语言
        发送方有content-language,接受方有accept-type
        // 发送端
        Content-Language: zh-CN, zh, en
        // 接收端
        Accept-Language: zh-CN, zh, en
    字符集
        在接收端对应为Accept-Charset，指定可以接受的字符集，而在发送端并没有对应的Content-Charset, 而是直接放在了Content-Type中，以charset
        属性指定。
        // 发送端
        Content-Type: text/html; charset=utf-8
        // 接收端
        Accept-Charset: charset=utf-8
8. 定长和不定长数据,http是怎么传输的
    定长数据
        通过Content-Length,若Content-Length大于实际数据长度，则会导致传输失败
    不定长数据
        通过Transfer-Encoding:chunked
        添加这个字段后会自动产生两个效果:
         content-length效果会失效
         基于长时间的推送传输内容
9. HTTP是如何处理大文件的传输
    