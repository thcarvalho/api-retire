import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Destinations from "../models/Destinations";
import DestinationsView from "../views/DestinationsView";
import * as Yup from 'yup';

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

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.number().required().min(8),
      email: Yup.string().email(),
      opening_hours: Yup.string().required(),
      address: Yup.string().required(),
      cep: Yup.number().required().min(8),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      images:Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false,
    })

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