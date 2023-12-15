import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("8080");
});
