# dl-pictures

js 实现的图片下载效果

## Installment

```
npm install dl-pictures --save
```

Usage

```
 import downloadPicture from 'dl-pictures';

 // 待下载图片的路径，如果下载过程中提示跨域，则需要服务器端支持，请求返回头部要有：Access-Control-Allow-Origin: *
 const src = 'http://localhost:3000/static/F65D4CDA-366F-43CD-A149-DA45D6A0807C_1_102_o.jpeg';

 downloadPicture(src);
```

