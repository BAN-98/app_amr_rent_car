const { Router } = require("express");
const {
  login,
  register,
  logout,
  profile,
} = require("../controllers/auth.controller");
const authRequired = require("../middlewares/validateToken");
const { validateSchema } = require("../middlewares/validatorMiddleware");
const { registerSchema, loginSchema } = require("../schemas/authSchema");

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

module.exports = router;
