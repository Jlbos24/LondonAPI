exports.error405s = (req, res, next) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};
exports.serverErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal Server Error" });
};
exports.error404s = (req, res, next) => {
  res.status(404).send({ msg: "Path Does Not Exist" });
};
