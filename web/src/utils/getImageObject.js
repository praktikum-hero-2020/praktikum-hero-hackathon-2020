export default context =>
  context.keys().reduce((images, path) => {
    images[path] = context(path);
    return images;
  }, {});
