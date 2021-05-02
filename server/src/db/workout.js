import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

const workout = (sequelize, DataTypes) => {
  const Workout = sequelize.define('workouts', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
    },
    name: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'name',
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'description',
      allowNull: true,
    },
    startDate: {
      type: Sequelize.DATE,
      field: 'start_date',
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    category: {
      type: DataTypes.STRING,
      field: 'category',
      allowNull: false,
    },
  });
  return Workout;
};

export default workout;
