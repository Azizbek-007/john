import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column()
  user_id: string;
  
  @Column({
    type: 'datetime',    
    default: () => 'NOW()',
  })
  @Index()
  _date: string;
}  
