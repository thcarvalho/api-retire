import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Destinations from './Destinations';

@Entity('images')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Destinations, destination => destination.images)
  @JoinColumn({name: 'destination_id'})
  destination: Destinations;
}