const Node = require('./node');

const Tree = () => {
  this.root = null;

  this.getRoot = () => this.root;

  this.insert = (value) => {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        }
        if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  };

  this.print = (node) => {
    console.log(node.left);
    console.log(node.value);
    console.log(node.right);
  };
};

module.exports = {
  Tree,
};
