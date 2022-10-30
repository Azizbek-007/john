import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  first_name: string;

  @Column()
  username: string;

  @Column()
  phone_number: string;

  @Column()
  lang: string;
}
