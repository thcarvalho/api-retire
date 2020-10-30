import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Destinations from "../models/Destinations";

export default {
  async create(req: Request, res: Response) {
    const destinationsRepository = getRepository(Destinations);

    const destination = destinationsRepository.create(req.body);

    await destinationsRepository.save(destination);

    return res.status(201).json(destination);
  },

  async index(req: Request, res: Response) {
    const destinationsRepository = getRepository(Destinations);

    const destinations = await destinationsRepository.find();

    return res.json(destinations);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const destinationsRepository = getRepository(Destinations);

    const destination = await destinationsRepository.findOneOrFail(id);

    return res.json(destination);
  }
}