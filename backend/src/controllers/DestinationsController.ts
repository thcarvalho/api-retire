import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Destinations from "../models/Destinations";
import DestinationsView from "../views/DestinationsView";

export default {
  async create(req: Request, res: Response) {
    const {
      name,
      phone,
      email,
      opening_hours,
      address,
      cep,
      latitude,
      longitude
    } = req.body;

    const destinationsRepository = getRepository(Destinations);

    const reqImages = req.files as Express.Multer.File[];
    const images = reqImages.map(image => {
      return {
        path: image.filename
      }
    })

    const data = {
      name,
      phone,
      email,
      opening_hours,
      address,
      cep,
      latitude,
      longitude,
      images
    }

    const destination = destinationsRepository.create(data);

    await destinationsRepository.save(destination);

    return res.status(201).json(destination);
  },

  async index(req: Request, res: Response) {
    const destinationsRepository = getRepository(Destinations);

    const destinations = await destinationsRepository.find({
      relations: ['images']
    });

    return res.json(DestinationsView.renderMany(destinations));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const destinationsRepository = getRepository(Destinations);

    const destination = await destinationsRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return res.json(DestinationsView.render(destination));
  }
}