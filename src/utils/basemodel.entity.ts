import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }

  toJSON() {
    return { ...this, deletedAt: undefined };
  }
}
