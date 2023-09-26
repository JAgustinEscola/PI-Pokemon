const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const pRoute = require("./routePokemon")
const tRoute = require("./routeTypes")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/types", tRoute);
router.use("/pokemons", pRoute);


module.exports = router;
