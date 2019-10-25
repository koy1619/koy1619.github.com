(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{434:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("一开始使用源码编译安装，哪知道编译了一下午mysql都还没编译ok，")]),s._v(" "),t("p",[s._v("于是采用二进制deb安装")]),s._v(" "),t("p",[s._v("sudo apt-get install nginx php5-fpm php5-cli php5-curl php5-gd php5-mcrypt php5-mysql php5-cgi mysql-server")]),s._v(" "),t("p",[s._v("期间会提示设置mysql密码，下载安装好nginx和mysql后在/etc/nginx/sites-available/目录下创建文件wordpress写入如下代码并保存。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Upstream to abstract backend connection(s) for php")]),s._v("\nupstream php "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nserver unix:/var/run/php5-fpm.sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Your only path reference.")]),s._v("\nroot /srv/www/wordpress/public_html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlisten "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Your website name goes here. Change to domain.ltd in VPS")]),s._v("\nserver_name rpi.maxiaolei.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\naccess_log /srv/www/wordpress/logs/access.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nerror_log /srv/www/wordpress/logs/error.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## This should be in your http block and if it is, it’s not needed here.")]),s._v("\nindex index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nlocation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /favicon.ico "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nlog_not_found off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /robots.txt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nallow all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlog_not_found off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is cool because no php is touched for static content")]),s._v("\ntry_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ~ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#NOTE: You should have “cgi.fix_pathinfo = 0;” in php.ini")]),s._v("\ninclude fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfastcgi_intercept_errors on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfastcgi_pass php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation ~* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ico"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nexpires max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlog_not_found off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("p",[s._v("然后将此文件复制到/etc/nginx/sites-sites-enabled/目录下，分别删除两个文件夹中的default文件。")]),s._v(" "),t("p",[s._v("服务启动和停止")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php5-fpm start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);