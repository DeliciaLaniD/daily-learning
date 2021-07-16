大致流程
文档地址

API协同工作流时序图
https://cbb.rd.qianxin-inc.cn/api-workspace/api-workflow-doc/assets/img/api-workflow-sequence-diagram.3f66cff9.png
访问http://codegen.bbfe.group/#/config 填写模板信息



npmScope为npm的scope名称 （@xxgl/performance-api 中的 xxgl ，不能带@ ，否则会这样）

npmName为真正生产的仓库的名称（@xxgl/performance-api 中的 - performance-api）

保存 → 复制生成的URL

找项目负责人，开通eolinker（需要eolinker空间管理员webhook权限），主要是填入以下三项

填写版本信息（需要eolinker webhook权限），生成npm包







！！！空间管理员才能设置



！！！项目管理员才能设置

查看状态是否成功，以及失败原因





查看代码是否推送到git仓库



查看git仓库cicd是否走通



查看npm私有库是否有对应库产生





需要注意的地方 || 可能踩的坑
配置webhook修改版本，codegen查询状态啥都没有
！！！检查eolinker的接口是否正确，eolinker发版本只是把接口导出来，但是api工作台需要依赖正确的接口才能生成代码

gitlab cicd报错但是codegen却成功了，npm模块没更新 gitlab-job
原因：生成webhook时模板参数填写错误，注意标点符号，以及参数名称的正确性



package.json生产的文件的名称



git仓库要填ssh方式，否则会报username错误


npm包发布不成功
这里是版本填写的不规范，不能带v，具体可以查看cicd页面



后端接口字段变更怎么办


如果能够拿到项目编辑权限是最好的，这样就不用后端每次更新字段，还要找人 重 新 发 版……，然后等……等……

1、需要在eolinker项目管理中更新版本号 (!!! 需要空间管理员权限，找对应部门的运维，比如信息管理部 - 黄杰昌 )，然后触发重新发包，同时在npm中验证版本是否发布



2、项目中更新对应的包 （可以在项目中配置个script）



项目中使用

注意接口字段要和eolinker中定义的字段一样，否则会报错或者调用错误


eolinker中定义了字段



如果没有传递对应参数 报错 & 不会发送对应请求



头部信息要特别处理下

一个工作空间下多个项目是如何区分webhook的
首先，工作空间可以配置多个webhook

codegen生成的webhook是由项目名称+参数生成的md5，所以不会重复，后续会根据这个md5，触发codegen服务，生成-构建工作流



生成code的时候，cicd流程报错
根据具体情况分析，可以找@靳晓培

之前碰到过这种情况  eolinker配置POST请求响应参数打包报错