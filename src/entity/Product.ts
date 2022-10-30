import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  categoryId: number;

  @Column()
  image: string;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category[];
}
