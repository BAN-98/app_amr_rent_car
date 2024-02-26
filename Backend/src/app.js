const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connect = require("./database");
const authRouter = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

connect();

app.use("/api", authRouter);
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
