import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface ICity {
    name: string;
    estate: string;
}
interface IFilter {
    filter?: string;
}
const bodyValidation: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    estate: yup.string().required().min(3),
});

export const createValidation = validation ((getSchema) => ({
    body: getSchema<ICity>(yup.object().shape({
        name: yup.string().required().min(3),
        estate: yup.string().required().min(3),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3),
    })),
}));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    console.log(req.body);
    return res.send('Create!');
};