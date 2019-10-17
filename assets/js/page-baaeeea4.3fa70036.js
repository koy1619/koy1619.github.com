(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{377:function(t,n,e){"use strict";e.r(n);var r=e(1),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"树莓派实现ddns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树莓派实现ddns","aria-hidden":"true"}},[t._v("#")]),t._v(" 树莓派实现ddns")]),t._v(" "),e("p",[t._v("##dnspod.php")]),t._v(" "),e("p",[t._v("PHP脚本实现DNSPOD动态域名解析")]),t._v(" "),e("pre",[e("code",[t._v("<?php\nheader(\"Content-type: text/html; charset=utf8\");\n\nclass Dns\n{\n#Dnspod账户\nprivate $dnspod_user = 'user@example.com';\n#Dnspod密码\nprivate $dnspod_pwd = 'password';\n#Dnspod主域名，注意：是你注册的域名\nprivate $domain = 'example.com';\n#子域名，如www，如果要使用根域名，用@\nprivate $sub_domain = 'www';\n\nfunction getMyIp()\n{\n\ttry\n\t{\n\t\t$ip = file_get_contents('http://www.leadnt.com/tools/ip.php');\n\t\treturn $ip;\n\t}\n\tcatch(Exception $e)\n\t{\n\t\techo $e->getMessage();\n\t\treturn null;\n\t}\n}\n\nfunction api_call($api, $data) \n{\n\tif ($api == '' || !is_array($data)) {\n\texit('内部错误：参数错误');\n\t}\n\n\t$api = 'https://dnsapi.cn/' . $api;\n\t$data = array_merge($data, array('login_email' => $this->dnspod_user, 'login_password' => $this->dnspod_pwd, 'format' => 'json', 'lang' => 'cn', 'error_on_empty' => 'no'));\n\n\t$result = $this->post_data($api, $data);\n\tif (!$result) {\n\texit('内部错误：调用失败');\n\t}\n\n\t$results = @json_decode($result, 1);\n\tif (!is_array($results)) {\n\texit('内部错误：返回错误');\n\t}\n\n\tif ($results['status']['code'] != 1) {\n\texit($results['status']['message']);\n\t}\n\n\treturn $results;\n}\n\nprivate function post_data($url, $data) \n{\n\tif ($url == '' || !is_array($data)) {\n\treturn false;\n\t}\n\n\t$ch = @curl_init();\n\tif (!$ch) {\n\texit('内部错误：服务器不支持CURL');\n\t}\n\n\tcurl_setopt($ch, CURLOPT_URL, $url);\n\tcurl_setopt($ch, CURLOPT_POST, 1);\n\tcurl_setopt($ch, CURLOPT_HEADER, 0);\n\tcurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\tcurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);\n\tcurl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);\n\tcurl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));\n\tcurl_setopt($ch, CURLOPT_USERAGENT, 'LocalDomains_PHP/1.0.0(roy@leadnt.com)');\n\t$result = curl_exec($ch);\n\tcurl_close($ch);\n\n\treturn $result;\n}\n\n\npublic function exec()\n{\n\t$ip = $this->getMyIp();\n\t$domainInfo = $this->api_call('domain.info',array('domain' => $this->domain));\n\t$domainId = $domainInfo['domain']['id'];\n\t$record = $this->api_call('record.list',array('domain_id'=> $domainId,'offset' =>'0','length' => '1','sub_domain' =>$this->sub_domain));\n\tif($record['info']['record_total'] == 0)\n\t{\n\t\t$this->api_call('record.create',\n\t\t\tarray(\n\t\t\t\t'domain_id' => $domainId,\n\t\t\t\t'sub_domain' => $this->sub_domain,\n\t\t\t\t'record_type' => 'A',\n\t\t\t\t'record_line' => '默认',\n\t\t\t\t'value' => $ip,\n\t\t\t\t'ttl' => '3600'\n\t\t\t\t));\n\t}\n\telse\n\t{\n\t\tif($record['records'][0]['value'] != $ip)\n\t\t{\n\t\t\t$this->api_call('record.modify',\n\t\t\tarray(\n\t\t\t\t'domain_id' => $domainId,\n\t\t\t\t'record_id' => $record['records'][0]['id'],\n\t\t\t\t'sub_domain' => $this->sub_domain,\n\t\t\t\t'record_type' => 'A',\n\t\t\t\t'record_line' => '默认',\n\t\t\t\t'value' => $ip\n\t\t\t\t));\n\t\t}\n\t\telse\n\t\t{\n\t\t\techo '指向正常';\n\t\t}\n\t}\n}\n}\n$dns = new Dns();\n$dns->exec();\n")])]),t._v(" "),e("p",[t._v("sudo chmod 777 dnspod.php")]),t._v(" "),e("p",[t._v("加入到定时任务，每个小时执行一次")]),t._v(" "),e("p",[t._v("vi /etc/crontab")]),t._v(" "),e("pre",[e("code",[t._v("*/55 * * * *  root  /usr/bin/php  /home/pi/dnspod.php  >>  /home/pi/dnspod.log   2>&1\n")])])])}),[],!1,null,null,null);n.default=a.exports}}]);