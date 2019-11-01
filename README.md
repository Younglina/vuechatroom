# Vue.js的实时聊天应用+netlify自动部署
### 简介
项目是跟着[sitepoint](https://www.sitepoint.com/pusher-vue-real-time-chat-app/)开发的一个Vue.js的实时聊天应用，核心[chatkit](https://pusher.com/chatkit)，使用netlify进行自动部署.
可在[pigchat](https://pigchat.netlify.com)体验，账号 test,test2
### 技术栈
* Vue
* Vuex
* Vue Router
* Pusher ChatKit
* SCSS
* ElementUI
### chatkit
项目的核心就是通过[chatkit](https://pusher.com/chatkit)开发的，能实时的反映用户的在线状态、发送的消息、哪些用户正在输入，都可以看看官网提供的[实例](https://pusher.com/docs/chatkit/reference/javascript)

### vue
vue的话用的是vue-cli3.0创建的，如果没有更新的话
```
npm install -g @vue/cli
//创建
vue create vue-chatkit
//或者使用可视化界面创建
vue ui
```
我常选的是这些
![](https://user-gold-cdn.xitu.io/2019/11/1/16e271eea8da5129?w=321&h=25&f=png&s=1395)
当然可以按自己喜欢的自己选择

### vuexLocal 
因为项目的数据基本都是存在vuex里的，所以在刷新的时候会丢失，
这个插件就是在刷新之前先把vuex存在本地的localstorage里

### ElementUI
原bo用的是bootstrap-vue，我用的是element
```
//安装
yarn add element-ui / npm i element-ui
//导入 main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```
### 预览
大体上就两个页面，电脑看会感觉很空，手机看还好，如果需要扩展，可以根据自己的需求进行扩展
![](https://user-gold-cdn.xitu.io/2019/11/1/16e2720aacfb2045?w=1353&h=550&f=png&s=30176)
![](https://user-gold-cdn.xitu.io/2019/11/1/16e2724809c2529f?w=1365&h=946&f=png&s=60743)

### 项目流程
先去[chatkit](https://dash.pusher.com/chatkit)官网注册一下，成功以后先创建一个chatkit

![](https://user-gold-cdn.xitu.io/2019/11/1/16e272f423f78f38?w=936&h=415&f=png&s=62799)
然后选择刚刚创建的实例再创建用户和房间
![](https://user-gold-cdn.xitu.io/2019/11/1/16e27319fa6e30c4?w=1175&h=905&f=png&s=104267)
![](https://user-gold-cdn.xitu.io/2019/11/1/16e2731de9a9a04c?w=331&h=309&f=png&s=16414)
注意这里的User Identifier，这是登陆时需要提供的，下面的就是昵称

![](https://user-gold-cdn.xitu.io/2019/11/1/16e2736d78125fea?w=858&h=480&f=png&s=62952)

然后比较关键的是INSTANCE_LOCATOR和TOKEN_URL

![](https://user-gold-cdn.xitu.io/2019/11/1/16e273972a1ec859?w=948&h=482&f=png&s=62987)
url是需要点击一下这里然后把它下面显示的链接整个复制出来

![](https://user-gold-cdn.xitu.io/2019/11/1/16e273a99f7796af?w=1136&h=905&f=png&s=119289)

到这里前期的配置都完成了，最后就是进行代码的编写了

### 附加netlify的部署
直接去[netlify](https://app.netlify.com)用github登陆，然后选择你要部署的项目

![](https://user-gold-cdn.xitu.io/2019/11/1/16e27478ed10f906?w=1514&h=905&f=png&s=102364)

![](https://user-gold-cdn.xitu.io/2019/11/1/16e274879d462dfa?w=1514&h=903&f=png&s=83899)

改名字
在site settings里可以看到change site name  
netlify部署的好处在于不用自己打包，而且在你每次代码更新到git以后它会自动帮你更新部署

### 最后
整体代码的编写并不难，基本上就是在对vuex进行操作，所以整个流程走下来会对vuex运用的更熟练，难的可能就在于chatkit那边，毕竟是第一接触的东西所以需要摸索一下，希望文章会对你有所帮助
