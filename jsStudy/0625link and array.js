// 数组是有下标索引和data两部分组成
// 链表是有data和指向下一个数据的指针地址两部分组成

//          链表	                数组
// 内存占用	不需要连续的内存空间	需要连续的内存空间
// 大小可变	链表的大小可动态变化	数组大小固定，不能动态扩展
// 增删	较快，只需要修改前一个元素的指针即可	较慢，需要移动修改元素只有的所有元素
// 查询	 较慢，只能遍历查找	较快，可以通过下标直接访问
// 在访问方式上	 必须是顺序访问，不能随机访问 	可以随机访问其中的元素
// 空间的使用上	可以随意扩大	不能 