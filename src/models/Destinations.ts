import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Images from "./Images";

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
  longitude: number;

  @OneToMany(() => Images, image => image.destination,  {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'destination_id'})
  images: Images[]
}