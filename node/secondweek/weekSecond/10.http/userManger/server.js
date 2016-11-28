var http=require('http');
var fs=require('fs');
var url=require('url');
var users=[
    { name:'zfpx',password:'zfpx',id:1 },
    { name:'zfpx1',password:'zfpx',id:2 },
    { name:'zfpx2',password:'zfpx',id:3 },
    { name:'zfpx3',password:'zfpx',id:4 },
]
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true); //true:query是对象格式的
    console.log(urlObj);
    var pathname=urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-type',"text/html;charset:utf8");
        fs.createReadStream('./index.html').pipe(res); //自动调用res.end();
    }else if(pathname =='/getUser'){
        // res.end();

    }else{
        fs.exists('.'+pathname,function(exists){ //exists异步
            if(exists){
                res.setHeader('content-type',require('mime').lookup(pathname)+";charset:utf8");
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode=404;
                res.end();
            }
        })
    }
}).listen(3000);
