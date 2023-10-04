const Express = require("express");

const app = Express();

app.get("/", (req, res) =>
  res
    .status(200)
    .send(
      "hello now change this code it will automatically deployed over internet"
    )
);

app.listen(3000, () => {
  console.log("app is listing over port 3000");
});
