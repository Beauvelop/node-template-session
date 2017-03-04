module.exports = function(req, res, next) {
  const path = req.path;
  const id = req.params.id;
  const query = req.query;
  const body = req.body;

  console.log(`|-------A new call----------|`);
  console.log(`path: ${path}`);
  console.log(`id: ${id}`);
  console.log(`query:`, query);
  console.log(`body:`, body);

  next();

}
