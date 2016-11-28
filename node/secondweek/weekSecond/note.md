## 1.events事件库
>1.引用events库：

var EventEmitter=require('events');
或者var EventEmitter=require('events').EventEmitter;（兼容低版本）
- 库中找function EventEmitter;
> 2.库上的方法：

on(addListener);once;emit;removeListener;removeAllListener;
> 3.util库：

util.inherits(Man,EventEmitter); 继承
## 2.流
- fs一次性读完；流：分批读取
### 2.1特点：
应用广泛：request、response
### 2.2
- 1) createReadStream(path,opt) 创建可读流;同步，有返回值(可读流信息)
fs:可读流信息
highwatermark 最高水位线 64*1024=64k；设置的值不能小于编码格式的最小值
encoding:null 编码格式为null =》buffer
start、end 读取的开始和结束位置，包前不包后
flag:'r' 默认为可读
- 默认非流动模式，不读数据
- 流动模式 data
```
rs.on('data',function(data){});
```
- 读取结束,触发end
```
rs.on('end',function(){});
```
- 暂停 pause
```
rs.pause();
```
- 恢复 resume
```
rs.resume();
```
rs.setEncoding('utf8'); 设置可读流的编码格式


highwatermark:4,start:0,end:5,   1 1 峰
- 2)createWriteStream
ws:可写流的内容
```
highwatermark:默认写入的大小  16*1024=16384 w
defaultEnconding:'utf8' 默认写入编码格式：utf8
```
write end response  on('data') on('end') request
- 写入内容 write (buffer或字符串)
```apple js
ws.write();
// 里面只能放buffer或字符串；
// 写的过程同步；返回布尔值同步，告诉内存还能不能再写进去了
```
- 抽干 drain(可执行多次，end前调用)
```apple js
ws.on('drain',function(){
    
})
```
> 内存里面的内容已经处理完
- 关闭掉 end(仅一次，最后执行)
```apple js
ws.end('关闭前最后写入的内容');  
```
> 调用end,会将内存中的内容全部写入；如果写的内存已经关闭掉，就不能再写入了(也不能重复调用end)

## 3.pipe
- 1)原理
- 2)内置方法pipe
```apple js
rs.pipe(ws); //直接将...
```
会防止淹没可用内存，异步操作

## 4.server
- 服务器监听的端口号，最好在1000以上；

nslookup
ping www.baidu.com
ip config
//net.internals//dns  查看谷歌缓存
window->system32->drivers->etc->hosts:  缓存的 域名：ip
## 5. http
node中自带的一个创建服务的模块 http

数据类型
```
text/plain 普通文本
text/javacscript
application/javacscript
application/x-javacscript
```
favicon.ico 标题栏的小图标；各个浏览器默认发送的；
userAgent 浏览器内核

如果HTML引用了额外的文件，向服务器端再次发送请求；
如果默认访问http://localhost:8080 相当于访问/
 
 '.'+pathname  否则根目录
 
 
## 6.
 npm install mime --save
 
## 7.
 typeof json =>object.3
 xhr.res =>字符串
 xhr.send =>json
 
 
 
 
 
 
 
 
 
 
 