/**
 * @method 图片下载
 * @param {string} src 图片路径
 */
export default function downloadPicture(src) {
  var image = new Image();

  // 解决跨域 canvas 污染问题，加 crossOrigin = anonymous 表明想跨域获取这张图片，好用在canvas.toDataURL()上，但是服务端不一定同意，故需要服务器端支持，请求返回头部要有：Access-Control-Allow-Origin: *
  image.setAttribute('crossOrigin', 'anonymous');

  image.onload = () => {
    var canvas = document.createElement('canvas');

    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);

    var url = canvas.toDataURL('image/png'); // 得到图片的 base64 编码数据
    var a = document.createElement('a'); // 生成一个 a 标签
    var event = new MouseEvent('click'); // 创建一个点击事件

    a.download = new Date().getTime(); // 设置下载后的图片名称，此处使用时间戳
    a.href = url; // 将生成的 URL 设置为 a.href 属性
    a.dispatchEvent(event); // 触发 a 的点击事件
  };

  image.src = src;
};

