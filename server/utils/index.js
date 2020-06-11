const nodemailer = require('nodemailer');
const path = require('path');
const setCookie = ctx => {
  ctx.cookies.set(
    'cid', //name
    'hello world', // value
    {
      domain: 'localhost', // 写cookie所在的域名
      path: '/index', // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'), // cookie失效时间
      httpOnly: false, // 是否只用于http请求中获取
      overwrite: false // 是否允许重写
    }
  );
};

const sendMail = auth => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.126.com', //邮箱服务的主机，如smtp.qq.com
    port: '25', //对应的端口号
    //开启安全连接
    secure: false,
    //secureConnection:false,
    //用户信息
    auth: {
      user: '',
      pass: '',
      ...auth
    }
  });
  //设置收件人信息
  let mailOptions = {
    from: 'embaobao@126.com', //谁发的
    to: '1132067567@qq.com', //发给谁
    subject: '测试邮件', //主题是什么
    text: '测试邮件', //文本内容
    html: '', //html模板
    //附件信息
    attachments: [
      {
        filename: 'kindle.text',
        path: path.resolve(__dirname, '../data/kindle.text')
      }
    ]
  };

  //发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error, info);
  });
};

// ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
// ctx.cookies.set(name, value, [options]) 在上下文中写入cookie
module.exports = {
  setCookie,
  sendMail
};
