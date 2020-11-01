import { Request, Response } from 'express';
import { getRepository, Like } from 'typeorm';
import Destinations from '../models/Destinations';
import DestinationsView from '../views/DestinationsView';

export default {
  async index(req: Request, res: Response) {
    const { address } = req.query;

    const destinationsRepository = getRepository(Destinations);

    const destinations = await destinationsRepository.find({
      where: {
        address: Like(`%${address}%`)
      },
      relations: ['images']
    });

    return res.json(DestinationsView.renderMany(destinations));
  }
}