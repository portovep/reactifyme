class BasePageObject {

  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  _clickOnButton(selector) {
    return new Promise((resolve) => {
      this.wrapper.find(selector).simulate('click', {button: 0});
      setTimeout(() => {
        resolve();
      }, 0)
    });
  };
}

export {BasePageObject};