// inside this file we are going to specify our chef and restaurant model
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from "sequelize-typescript";

// the @table is the decorator syntax
@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "chefs"
})
export class Chef extends Model<Chef> {
  // notice that this matches what is in the sequelize migrations
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @HasMany(() => Restaurant)
  restaurants!: Restaurant[];
}

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "restaurants"
})
export class Restaurant extends Model<Restaurant> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(() => Chef)
  chefId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @BelongsTo(() => Chef)
  chef!: Chef;
}

export default [Chef, Restaurant]; // you can then import the models as just 'models' in connection.ts
