Template.postPreview.helpers({
  assignTagColor: function (tag) {
    switch (tag) {
      case 'code':
        return 'primary';
        break;
      case 'design':
        return 'info';
        break;
      case 'lifestyle':
        return 'success';
        break;
      default:
        return 'default'
    }
  }
});
