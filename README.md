> ### 测试环境准备
* ECMAScript ^6
ES6是比较新的且较之以前是变动比较大的一个版本，添加了很多新的语法特性，而且现在我所在的项目也在使用，更为熟悉，悬疑选择ES6.

* Karma
其实三个框架我都没有接触过，对Appium也是只知道一点点，所以基本都是从零开始，在搜索资料的过程中发现Karma＋Jasmine有较多的教程，并且vuejs的官网介绍单元测试也建议了Karma，所以选择了这个框架以提高学习效率。

* 安装成功截图请参考<preparation.png>

> ### 测试项目准备
* 运行命令行结果和web截图请参考<yarn_install+run_dev.png>
* 模拟iPhone X、Galaxy X5后的界面截图请参考<mobile_simulate.png>

> ### 测试脚本开发
* 选择测试组件: badge, cell-box, check-icon
主要验证组件名，classname，props，页面元素渲染及模拟点击事件。

* 脚本运行
* * 安装相关依赖karma-jasmine karma-chrome-launcher jasmine-core karma-cli @vue/test-utils
* * 修改已有的test/unit/karma.conf.js如下
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: ['./*.spec.js'],
    preprocessors: {
      './*.spec.js': ['webpack', 'sourcemap']
    },
* * 用以下命令执行case，  karma start test/unit/karma.conf.js
* * 测试结果如<result.png>
* * 在浏览器中模拟iPhone X、Galaxy X5界面的运行结果截图。这个我不太了解如何模拟手机来运行单元测试的case。只是做了下尝试如修改分辨率和起chrome的时候添加useragent。 如下， 结果如<result_mobile.png>。请指教下，谢谢！
    browsers: ['Chrome_Android'],

    // you can define custom flags
    customLaunchers: {
      Chrome_Android: {
        base: 'Chrome',
        flags: [
          // '--auto-open-devtools-for-tabs',
          '--window-size=360,640',
          '--user-agent=Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19'
      ]}
    },
