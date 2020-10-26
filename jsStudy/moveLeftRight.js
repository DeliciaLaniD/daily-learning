// index表示要移动到的目的索引，container.children表示要处理的数组
// 上移、左移
function moveUpLeft(index, container) {
  if (index === 0) {
    return;
  }
  // 在上一项插入该项
  container.children.splice(index - 1, 0, (container.children[index]));
  // 删除后一项
  container.children.splice(index + 1, 1);
}

// 下移、右移
function moveDownRight(index, container) {
  if (index === (container.children.length - 1)) {
    return;
  }
  container.children.splice(index + 2, 0, (container.children[index]));
  container.children.splice(index, 1);
}