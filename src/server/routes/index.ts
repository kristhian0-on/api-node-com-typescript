import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
    return res.status(StatusCodes.OK).send('Olá DEV!');
});

router.get("/cidades", CidadesController.getAllValidation, CidadesController.getAll);
router.post("/cidades", CidadesController.createValidation, CidadesController.create);

/* router.post("/test", (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).json(req.body);
}); */

export { router };