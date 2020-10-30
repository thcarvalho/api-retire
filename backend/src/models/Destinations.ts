import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('destinations')
export default class Destinations {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  opening_hours: string;

  @Column()
  address: string;

  @Column()
  cep: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number
}