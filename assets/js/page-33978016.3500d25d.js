(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{514:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",{staticClass:"blockquote-center"},[s._v("Write Through和Write Back是阵列卡Cache的两种使用方式，也称为透写和回写。当选用write through方式时，系统的写磁盘操作并不利用阵列卡的Cache，而是直接与磁盘进行数据的交互。而write Back方式则利用阵列Cache作为系统与磁盘间的二传手，系统先将数据交给Cache，然后再由Cache将数据传给磁盘。")]),s._v(" "),t("p",[s._v("最近在部署马来西亚DBServer的时候发现DB1的硬盘写入速度比DB2要慢好多")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/VnUZ7n.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/Yj6Zbm.png",alt:""}})]),s._v(" "),t("p",[s._v("两台服务器在导入数据的过程中对硬盘测速结果如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/vYj2ye.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/BniYFf.png",alt:""}})]),s._v(" "),t("p",[s._v("机房给出的解释也是一切正常")]),s._v(" "),t("p",[s._v("后来老大帮忙推荐MegaCli工具去排查问题所在")]),s._v(" "),t("p",[s._v("发现DB1的Cache写机制为Write-through而DB2为Write-back")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./MegaCli64 -Ldinfo -lall -aall")]),s._v("\n                                     \n\nAdapter "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -- Virtual Drive Information:\nVirtual Drive: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Target Id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nName                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\nRAID Level          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Primary-5, Secondary-0, RAID Level Qualifier-3\nSize                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("557.75")]),s._v(" GB\nSector Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\nParity Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("278.875")]),s._v(" GB\nState               "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Optimal\nStrip Size          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" KB\nNumber Of Drives    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSpan Depth          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nDefault Cache Policy: WriteThrough, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nCurrent Cache Policy: WriteThrough, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nDefault Access Policy: Read/Write\nCurrent Access Policy: Read/Write\nDisk Cache Policy   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Disk's Default\nEncryption Type     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" None\nIs VD Cached: No\n\n\n\nExit Code: 0x00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer2 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./MegaCli64 -Ldinfo -lall -aall")]),s._v("\n                                     \n\nAdapter "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -- Virtual Drive Information:\nVirtual Drive: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Target Id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nName                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\nRAID Level          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Primary-5, Secondary-0, RAID Level Qualifier-3\nSize                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("557.75")]),s._v(" GB\nSector Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\nParity Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("278.875")]),s._v(" GB\nState               "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Optimal\nStrip Size          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" KB\nNumber Of Drives    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSpan Depth          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nDefault Cache Policy: WriteBack, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nCurrent Cache Policy: WriteBack, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nDefault Access Policy: Read/Write\nCurrent Access Policy: Read/Write\nDisk Cache Policy   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Disk's Default\nEncryption Type     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" None\nIs VD Cached: No\n\n\n\nExit Code: 0x00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer2 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[t("strong",[s._v("以下为搜到的科普内容")])]),s._v(" "),t("p",[s._v("Cache写机制")]),s._v(" "),t("p",[s._v("参考 http://en.wikipedia.org/wiki/Cache#Writing_Policies 上的说明，"),t("strong",[s._v("Cache")]),s._v("写机制分为"),t("strong",[s._v("write through")]),s._v("和"),t("strong",[s._v("write back")]),s._v("两种。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[s._v("Write-through")]),s._v(" Write is done synchronously both to the cache and to the backing store.")]),s._v(" "),t("li",[t("strong",[s._v("Write-back")]),s._v(" (or Write-behind) – Writing is done only to the cache. A modified cache block is written back to the store, just before it is replaced.")])])]),s._v(" "),t("p",[t("strong",[s._v("Write-through")]),s._v("（直写模式）在数据更新时，同时写入缓存Cache和后端存储。此模式的优点是操作简单；缺点是因为数据修改需要同时写入存储，数据写入速度较慢。")]),s._v(" "),t("p",[t("strong",[s._v("Write-back")]),s._v("（回写模式）在数据更新时只写入缓存Cache。只在数据被替换出缓存时，被修改的缓存数据才会被写到后端存储。此模式的优点是数据写入速度快，因为不需要写存储；缺点是一旦更新后的数据未被写入存储时出现系统掉电的情况，数据将无法找回。")]),s._v(" "),t("p",[t("strong",[s._v("Write-misses写缺失的处理方式")])]),s._v(" "),t("p",[s._v("对于写操作，存在写入缓存缺失数据的情况，这时有两种处理方式：")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[s._v("Write allocate")]),s._v(" (aka Fetch on write) – Datum at the missed-write location is loaded to cache, followed by a write-hit operation. In this approach, write misses are similar to read-misses.")]),s._v(" "),t("li",[t("strong",[s._v("No-write allocate")]),s._v(" (aka Write-no-allocate, Write around) – Datum at the missed-write location is not loaded to cache, and is written directly to the backing store. In this approach, actually only system reads are being cached.")])])]),s._v(" "),t("p",[t("strong",[s._v("Write allocate")]),s._v("方式将写入位置读入缓存，然后采用write-hit（缓存命中写入）操作。写缺失操作与读缺失操作类似。")]),s._v(" "),t("p",[t("strong",[s._v("No-write allocate")]),s._v("方式并不将写入位置读入缓存，而是直接将数据写入存储。这种方式下，只有读操作会被缓存。")]),s._v(" "),t("p",[s._v("无论是Write-through还是Write-back都可以使用写缺失的两种方式之一。只是通常Write-back采用Write allocate方式，而Write-through采用No-write allocate方式；因为多次写入同一缓存时，Write allocate配合Write-back可以提升性能；而对于Write-through则没有帮助。")]),s._v(" "),t("p",[t("strong",[s._v("处理流程图")])]),s._v(" "),t("p",[s._v("Write-through模式处理流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/y67vYf.png",alt:""}})]),s._v(" "),t("p",[s._v("Write-back模式处理流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/2mU3Yb.png",alt:""}})]),s._v(" "),t("p",[s._v("在创建raid阵列可选择Write Policy的策略")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://r.loli.io/BZRNRf.jpg",alt:""}})]),s._v(" "),t("p",[s._v("在了解了原理之后可以通过"),t("strong",[s._v("MegaCli")]),s._v("来设置DB1的"),t("strong",[s._v("Write Policy")]),s._v("为"),t("strong",[s._v("WriteBack")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./MegaCli64 -LDSetProp WB -LAll -aAll")]),s._v("\n                                     \nSet Write Policy to WriteBack on Adapter "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", VD "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" success\n\nExit Code: 0x00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("此时在查看DB1的"),t("strong",[s._v("Write Policy")]),s._v("已经成功设置为"),t("strong",[s._v("WriteBack")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./MegaCli64 -Ldinfo -lall -aall")]),s._v("\n                                     \n\nAdapter "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -- Virtual Drive Information:\nVirtual Drive: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Target Id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nName                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\nRAID Level          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Primary-5, Secondary-0, RAID Level Qualifier-3\nSize                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("557.75")]),s._v(" GB\nSector Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\nParity Size         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("278.875")]),s._v(" GB\nState               "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Optimal\nStrip Size          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" KB\nNumber Of Drives    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSpan Depth          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nDefault Cache Policy: WriteBack, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nCurrent Cache Policy: WriteBack, ReadAheadNone, Direct, No Write Cache "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Bad BBU\nDefault Access Policy: Read/Write\nCurrent Access Policy: Read/Write\nDisk Cache Policy   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Disk's Default\nEncryption Type     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" None\nIs VD Cached: No\n\n\n\nExit Code: 0x00\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DBServer1 MegaCli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("然后在测试DB1的写入速度，看以看到正常了\n"),t("img",{attrs:{src:"http://r.loli.io/2uYfMf.png",alt:""}})]),s._v(" "),t("p",[s._v("下一篇文章会着重记录一下"),t("strong",[s._v("MegaCli")]),s._v("工具的安装与使用")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("继续科普记录一下")]),s._v(" "),t("p",[s._v("Write Through和Write Back是阵列卡Cache的两种使用方式，也称为透写和回写。当选用write through方式时，系统的写磁盘操作并不利用阵列卡的Cache，而是直接与磁盘进行数据的交互。而write Back方式则利用阵列Cache作为系统与磁盘间的二传手，系统先将数据交给Cache，然后再由Cache将数据传给磁盘。 在配置阵列的时候，如果不是很清楚的话，默认就可以了，系统会根据磁盘类型进行默认设置。")]),s._v(" "),t("p",[s._v("生产环境中的配置要根据具体的业务类型及环境进行配置，比如：如果有外置UPS电源，选Write Back，如果没有外置电源，并且对数据安全性要求很高，不要求太高性能，就选Write Through。Write caching 或 write-through write-through意思是写操作根本不使用缓存。数据总是直接写入磁盘。关闭写缓存，可释放缓存用于读操作。（缓存被读写操作共用） Write caching可以提高写操作的性能。数据不是直接被写入磁盘；而是写入缓存。从应用程序的角度看，比等待完成磁盘写入操作要快的多。因此，可以提高写性能。由控制器将缓存内未写入磁盘的数据写入磁盘。表面上看，Write cache方式比write-through方式的读、写性能都要好，但是也要看磁盘访问方式和磁盘负荷了。 write-back（write cache）方式通常在磁盘负荷较轻时速度更快。负荷重时，每当数据被写入缓存后，就要马上再写入磁盘以释放缓存来保存将要写入的新数据，这时如果数据直接写入磁盘，控制器会以更快的速度运行。因此，负荷重时，将数据先写入缓存反而会降低吞吐量。 Starting and stopping cache flushing levels 这两个设置影响控制器如何处理未写入磁盘的缓存内数据，并且只在write-back cache方式下生效。缓存内数据写入磁盘称为flushing.你可以配置Starting and stopping cache flushing levels值，这个值表示占用整个缓存大小的百分比。当缓存内未写入磁盘的数据达到starting flushing value时，控制器开始flushing（由缓存写入磁盘）。当缓存内未写入磁盘数据量低于stop flush value时，flushing过程停止。控制器总是先flush旧的缓存数据。缓存内未写入数据停留超过20秒钟后被自动flushing. 典型的start flushing level是80%。通常情况下，stop flushing level也设置为80%。也就是说，控制器不允许超过80%的缓存用于write-back cache,但还是尽可能保持这一比例。如果你使用此设置，可以在缓存内存更多的未写入数据。这有利于提高写操作的性能，但是要牺牲数据保护。如果要得到数据保护，你可以使用较低的start and stop values。通过对这两个参数的设置，你可以调整缓存的读、写性能。经测试表明，使用接近的start and stop flushing levels时性能较好。如果stop level value远远低于start value，在flushing时会导致磁盘拥塞。 Cache block size 这个值指缓存分配单元大小，可以是4K或16K。选择合适的值，可以明显的改善缓存使用性能。 如果应用程序更多时候访问小于8K的数据，而将cache block size设置为16K，每次访问仅使用一部分cache block。在16K的cache block里总是存储8K或更小的数据，意味着只有50%的缓存容量被有效使用，使性能下降。对于随机I/O和小数据块的传送，4K比较合适。另一方面，如果是连续I/O 并使用大的segment size，最好选择16K。大的cache block size意味着cache block数量少并可缩短缓存消耗延时。另外，对于同样大小的数据，cache block size大一些，需要的缓存数据传送量更小。")]),s._v(" "),t("p",[s._v("其他相关说明：")]),s._v(" "),t("p",[s._v("保护内存里的数据")]),s._v(" "),t("p",[s._v("备援电池的功能是确保万一当主电源故障或突然断电时内存里的数据不流失，因此如何确保备援电池的正常运行就显得格外重要。备援电池在2种情况下，系统视为无法正常运行以保护内存里的数据。一是坏掉的时候，背板的LED灯将亮起红灯。一是电池充电的时候，背板的LED灯将亮起黄灯。备援电池的使用寿命是根据充电的次数及电力释放的周期而变化的，这取决于用户本身对盘阵的使用情况，一般而言我们建议最好在盘阵使用了12个月之后更换备援电池模块（BBU）。备援电池在正常情况下充满电的时候是3.5V，当其电力降至2.7V的时候将自动进入充电状态，此时系统因为保护内存数据不流失的电力消失，自动地将数据的写入切换成“Write-Through”模式；当充完电后，又自动切换回“Write-Back”模式。这个动作是在事件启动装置（Event Trigger）功能来执行的，在安装管理软件的时候，事件启动装置对备援电池的管理初始值是打开的（Enable）。如果你没有更改过初始设置，那么上述的动作就会正常的运行。如果备援电池已经坏掉，不能正常保护内存里的数据时，而事件启动装置对备援电池的管理是设定在关闭的状态下，我们建议你手动将数据写入模式更改为“Write-Through”模式，以免数据写入没有电力保护的内存中而主电源故障或突然断电时，这些正在写入的数据就遗失了。")]),s._v(" "),t("p",[s._v("减少延迟 当关闭内存“Write-Back”功能时就进入了“Write-Through”的模式，这时候主机数据是不会写入内存而直接写入硬盘的。在“Write-Through”模式下，所有的硬盘将与其相关的主机以适当的方式存取数据块，而大多数的时候硬盘处于接受写命令的状态。此时盘阵只要从主机接收到写入的命令，硬盘的读写头就会去寻找读写的位置，并等待硬盘处于可写入的状态，这个等待的现象就是所谓的延迟（Latency Time)，而硬盘经常处于等待写入的状态，增加了延迟的时间，不但缩短硬盘的使用寿命，并且系统也比较耗电。当打开内存的“Write-Back”功能时，从主机写入硬盘的数据先被写在内存里，在内存写满数据时盘阵控制器会将存在于内存的数据大量地写入硬盘。这个内存“Write-Back”的模式将主机写入的命令以写入内存来取代，可以大幅减少硬盘延迟的时间，并且相较于“Write-Through”模式，在大多数的时候提供更佳的写入政策。")]),s._v(" "),t("p",[s._v("附上安装方法")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://docs.avagotech.com/docs-and-downloads/raid-controllers/raid-controllers-common-files/8-07-14_MegaCLI.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("-07-14_MegaCLI.zip\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Linux\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh MegaCli-8.07.14-1.noarch.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /opt/MegaRAID/MegaCli/           \nCmdTool.log  install.log  libstorelibir-2.so  libstorelibir-2.so.14.07-0  MegaCli64  MegaSAS.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R * +x /opt/MegaRAID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("raid更换硬盘查看同步进度")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('./MegaCli64 -PDlist -aAll | grep -E "Slot|state:|ID:"\n./MegaCli64 -PDRbld -ShowProg -PhysDrv [32:3] -a0\n#32即Enclosure Device ID，3即Slot Number\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);