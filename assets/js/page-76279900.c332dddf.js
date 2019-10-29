(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{482:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.bitnami.com/files/stacks/gitlab/7.4.3-0/bitnami-gitlab-7.4.3-0-linux-x64-installer.run\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x bitnami-gitlab-7.4.3-0-linux-x64-installer.run\n./bitnami-gitlab-7.4.3-0-linux-x64-installer.run\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"备份和恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份和恢复"}},[a._v("#")]),a._v(" 备份和恢复")]),a._v(" "),t("p",[t("strong",[a._v("备份以及恢复的操作，以下操作使用root用户执行")])]),a._v(" "),t("p",[a._v("1、指定备份路径")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /opt/gitlab-7.4.3-0/apps/gitlab/htdocs/config/gitlab.yml\n           \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Backup settings")]),a._v("\nbackup:\npath: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tmp/backups"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Relative paths are relative to Rails.root (default: tmp/backups/)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##可自定义路径")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("2、执行备份")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/gitlab-7.4.3-0/\n./use_gitlab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/gitlab-7.4.3-0/apps/gitlab/htdocs\nbundle "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" bin/rake gitlab:backup:create "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RAILS_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("production\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("操作执行完毕，会在/opt/gitlab-7.4.3-0/apps/gitlab/htdocs/tmp/backups/目录下生产一个备份文件，类似1438917368_gitlab_backup.tar")]),a._v(" "),t("p",[a._v("3、恢复备份的数据")]),a._v(" "),t("p",[a._v("需要先把备份的tar包拷贝到backu—path")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/gitlab-7.4.3-0/\n./use_gitlab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/gitlab-7.4.3-0/apps/gitlab/htdocs\nbundle "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" bin/rake gitlab:backup:restore "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RAILS_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("production \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" git:git -R /opt/gitlab-7.4.3-0/apps/gitlab/repositories\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("如果备份的目录下不止一个备份文件，则RAILS_ENV=production后面需要指定备份文件 BACKUP=xxx。\n至此备份恢复完毕。")]),a._v(" "),t("p",[a._v("ps：经过我自己的研究发现可以直接拷贝repositories目录到新机器也是OK的;也成功测试通过。至于正式迁移还是要按照官方文档！")]),a._v(" "),t("h2",{attrs:{id:"迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迁移"}},[a._v("#")]),a._v(" 迁移")]),a._v(" "),t("p",[a._v("以上备份可以整理成备份脚本，定期备份，也可以用于gitlab服务器迁移（迁移必须使用相同gitlab版本方可兼容）")]),a._v(" "),t("p",[a._v("迁移过程：")]),a._v(" "),t("p",[a._v("1、安装版本一致的bitnami-gitlab")]),a._v(" "),t("p",[a._v("2、设置gitlab服务器hosts和git客户端hosts指向新server")]),a._v(" "),t("p",[a._v("3、启动postfix用来发邮件")]),a._v(" "),t("p",[a._v("4、拷贝备份数据到新server，并导入")]),a._v(" "),t("p",[a._v("5、客户端进行测试")]),a._v(" "),t("p",[a._v("6、测试成功方可正式迁移")]),a._v(" "),t("h3",{attrs:{id:"迁移过程中碰到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迁移过程中碰到的问题"}},[a._v("#")]),a._v(" 迁移过程中碰到的问题")]),a._v(" "),t("h3",{attrs:{id:"客户端git-pull-提示-gitlab-shell-log-permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端git-pull-提示-gitlab-shell-log-permission-denied"}},[a._v("#")]),a._v(" 客户端git pull 提示 gitlab-shell.log Permission denied")]),a._v(" "),t("p",[t("code",[a._v("chown -R git.git /dbdata/gitlab-7.13.1-0/apps/gitlab/gitlab-shell/gitlab-shell.log")])]),a._v(" "),t("h3",{attrs:{id:"客户端提示指纹对不上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端提示指纹对不上"}},[a._v("#")]),a._v(" 客户端提示指纹对不上")]),a._v(" "),t("p",[t("code",[a._v("rm -rf /root/.ssh/known_hosts")])]),a._v(" "),t("h3",{attrs:{id:"gitlab首页不显示commit更新事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab首页不显示commit更新事件"}},[a._v("#")]),a._v(" gitlab首页不显示commit更新事件")]),a._v(" "),t("p",[a._v("那是因为备份出来的repositories里的hook的软链接还指向的是老server的hook路径")]),a._v(" "),t("p",[a._v("需要依次重新设置每个git仓库的hook，如果新server的gitlab安装路径和老server一样，请忽略")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /dbdata/gitlab-7.13.1-0/apps/gitlab/repositories/ops/opslegend.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf hooks\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /dbdata/gitlab-7.13.1-0/apps/gitlab/gitlab-shell/hooks hooks\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"gitlab上传头像报500错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab上传头像报500错误"}},[a._v("#")]),a._v(" gitlab上传头像报500错误")]),a._v(" "),t("p",[a._v("查看apache的log显示权限不足")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tail -f /dbdata/gitlab-7.13.1-0/apps/gitlab/htdocs/log/production.log ")]),a._v("\n\nErrno::EACCES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Permission denied - /dbdata/gitlab-7.13.1-0/apps/gitlab/htdocs/public/uploads/tmp/1459914127-98234-4213"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n  app/controllers/profiles_controller.rb:21:in "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("update"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("解决")]),a._v(" "),t("p",[t("code",[a._v("chown -R git.git /dbdata/gitlab-7.13.1-0/apps/gitlab/htdocs/public/uploads")])]),a._v(" "),t("p",[a._v("bitnami-gitlab官网: https://bitnami.com/stack/gitlab/installer")])])}),[],!1,null,null,null);s.default=n.exports}}]);