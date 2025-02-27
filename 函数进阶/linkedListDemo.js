// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/linkedListDemo.js

// 定义链表节点
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 定义链表类
class LinkedList {
  constructor() {
    this.head = null;
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    this._appendRecursive(this.head, newNode);
  }

  _appendRecursive(current, newNode) {
    if (current.next === null) {
      current.next = newNode;
    } else {
      this._appendRecursive(current.next, newNode);
    }
  }

  // 递归打印链表
  print() {
    this._printRecursive(this.head);
    console.log("NULL");
  }

  _printRecursive(node) {
    if (node === null) return;
    console.log(node.value + " -> ");
    this._printRecursive(node.next);
  }

  // 递归计算链表长度
  length() {
    return this._lengthRecursive(this.head);
  }

  _lengthRecursive(node) {
    if (node === null) return 0;
    return 1 + this._lengthRecursive(node.next);
  }

  // 递归搜索值
  search(value) {
    return this._searchRecursive(this.head, value);
  }

  _searchRecursive(node, value) {
    if (node === null) return false;
    if (node.value === value) return true;
    return this._searchRecursive(node.next, value);
  }
}

// 使用链表
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("链表内容：");
list.print();

console.log("链表长度：", list.length());

console.log("搜索值 3：", list.search(3));
console.log("搜索值 6：", list.search(6));
