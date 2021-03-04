1.安装Xshell，建立连接，连接的是10.95.29.38
    1. ppt: http://10.95.48.65:8093/reveal-ppt/work-in-server/#/
    2. 知识导图 https://www.processon.com/view/link/5d5d54b0e4b0869fa41d6bbd#map
相关命令
    查看当前目录磁盘的使用情况 df -h
使用命令上传下载文件
    ①检查是否已经安装了上传下载的命令，#rpm -qa |grep lrzsz，如下表示已经安装了。
    [root@mjy logs]# rpm -qa |grep lrzsz
    lrzsz-0.12.20-27.1.el6.i686

    如果未安装有，可使用yum安装，#yum install  lrzsz -y

    ②上传文件，使用#rz，然后会弹出选择对话框，选择好文件后
    ③下载使用sz，例如要下载当前目录下的error_logs，就使用#sz error_logs，然后弹出对话框，选择保存的路径后点击确定即可下载文件。
    ④如果不想每次都填写保存的路径，就可以在属性对话框中设置默认的下载路径，这样使用sz命令下载文件就能自动保存到默认的路径下了
    sz：将选定的文件发送（send）到本地机器
    rz：运行该命令会弹出一个文件选择窗口，从本地选择文件上传到服务器(receive)

    另外可以使用Xftp来上传和下载更方便，在Xshell的工具栏中可以找到Xftp，但是我安装xftp失败了