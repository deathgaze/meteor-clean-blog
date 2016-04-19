Template.navbar.helpers({
  menuItem: () => {
    const cursor = Blog.findOne({_storeName: 'menuItems'});
    const menuItems = cursor['menu'];
    return menuItems;
  }
});
