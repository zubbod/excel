export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');

    this.components.forEach((Component) => {
      $root.insertAdjacentHTML('beforeend', new Component().toHTML());
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
