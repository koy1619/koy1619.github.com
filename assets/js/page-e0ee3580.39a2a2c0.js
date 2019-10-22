(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{395:function(n,t,e){"use strict";e.r(t);var r=e(1),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"树莓派django试玩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树莓派django试玩","aria-hidden":"true"}},[n._v("#")]),n._v(" 树莓派Django试玩")]),n._v(" "),e("p",[n._v("=========================================")]),n._v(" "),e("p",[n._v("由于博主最近在学习python，所以顺手玩了下Django")]),n._v(" "),e("p",[n._v("Django是Python下的一款网络服务器框架。Python下有许多款不同的框架。Django是重量级选手中最有代表性的一位。许多成功的网站和APP都基于Django。")]),n._v(" "),e("h3",{attrs:{id:"安装pip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装pip","aria-hidden":"true"}},[n._v("#")]),n._v(" "),e("strong",[n._v("安装pip")])]),n._v(" "),e("pre",[e("code",[n._v("sudo apt-get install python-pip python-dev build-essential \nsudo pip install --upgrade pip\n")])]),n._v(" "),e("h3",{attrs:{id:"安装django"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装django","aria-hidden":"true"}},[n._v("#")]),n._v(" "),e("strong",[n._v("安装Django")])]),n._v(" "),e("pre",[e("code",[n._v("sudo pip install django\n")])]),n._v(" "),e("p",[n._v("安装成功之后我们可以进入python命令行查看django版本")]),n._v(" "),e("pre",[e("code",[n._v('pi@raspberrypi ~/python_test $ python\nPython 2.7.3 (default, Mar 18 2014, 05:13:23) \n[GCC 4.6.3] on linux2\nType "help", "copyright", "credits" or "license" for more         information.\n>>> import django\n>>> print(django.VERSION)\n(1, 6, 5, \'final\', 0)\n>>> \n')])]),n._v(" "),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[n._v("#")]),n._v(" "),e("strong",[n._v("启动")])]),n._v(" "),e("p",[n._v("使用下面的命令创建项目：")]),n._v(" "),e("pre",[e("code",[n._v("django-admin.py startproject django_site\n")])]),n._v(" "),e("p",[n._v("在当前目录下，将生成django_site文件夹。其文件树结构如下:")]),n._v(" "),e("pre",[e("code",[n._v("pi@raspberrypi ~ $ tree django_site/\ndjango_site/\n├── django_site\n│   ├── __init__.py\n│   ├── settings.py\n│   ├── urls.py\n│   └── wsgi.py\n└── manage.py\n\n1 directory, 5 files\n")])]),n._v(" "),e("p",[n._v("进入django_site，启动服务器：")]),n._v(" "),e("pre",[e("code",[n._v("pi@raspberrypi ~ $ cd django_site/\npi@raspberrypi ~/django_site $ python manage.py runserver 8000\nValidating models...\n\n0 errors found\nMay 24, 2014 - 12:46:51\nDjango version 1.6.5, using settings 'django_site.settings'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL-C.\n")])]),n._v(" "),e("p",[n._v("进入树莓派桌面并打开浏览器，访问"),e("a",{attrs:{href:"http://127.0.0.1:8000%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B7%B2%E7%BB%8F%E5%9C%A8%E8%BF%90%E8%A1%8C%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://127.0.0.1:8000，可以看到服务器已经在运行："),e("OutboundLink")],1)]),n._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/10/16/r96wK7UJG84pHgV.jpg",alt:""}})]),n._v(" "),e("h3",{attrs:{id:"第一个网页’hello-word’"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一个网页’hello-word’","aria-hidden":"true"}},[n._v("#")]),n._v(" "),e("strong",[n._v("第一个网页’hello word’")])]),n._v(" "),e("p",[n._v("修改urls.py")]),n._v(" "),e("pre",[e("code",[n._v("pi@raspberrypi ~/django_site/django_site $ vim /home/pi/django_site/django_site/urls.py\n\nfrom django.conf.urls import patterns, include, url\n\nfrom django.contrib import admin\nadmin.autodiscover()\n\nurlpatterns = patterns('',\n    # Examples:\n    # url(r'^$', 'mysite.views.home', name='home'),\n    # url(r'^blog/', include('blog.urls')),\n\n    url(r'^admin/', include(admin.site.urls)),\n    url(r'^$', 'django_site.views.first_page'),\n)\n")])]),n._v(" "),e("p",[n._v("我们添加了最后一行。它将根目录的URL分配给一个对象进行处理，这个对象是django_site.first_page。")]),n._v(" "),e("p",[n._v("用以处理HTTP请求的这一对象还不存在，我们在django_site/django_site下创建views.py，并在其中定义first_page函数:")]),n._v(" "),e("pre",[e("code",[n._v('pi@raspberrypi ~/django_site/django_site $ vim views.py \n# -*- coding: utf-8 -*-\n\nfrom django.http import HttpResponse\n\ndef first_page(request):\n    return HttpResponse("<p>Hello World</p>")\n')])]),n._v(" "),e("p",[n._v("第一行说明字符编码为utf-8，为下面使用中文做准备。first_page函数的功能，是返回http回复，即这里的"),e("strong",[n._v("Hello World")]),n._v(" 。first_page有一个参数request，该参数包含有请求的具体信息，比如请求的类型等，这里并没有用到。")]),n._v(" "),e("p",[n._v("页面效果如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/10/16/sQVjONghmLT2roq.jpg",alt:""}})]),n._v(" "),e("p",[n._v("到此就可以尽情感受在树莓派上Django的编程乐趣了！")])])}),[],!1,null,null,null);t.default=a.exports}}]);