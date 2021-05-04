import { Op } from 'sequelize';
import models from '../db';

export const getAllWorkouts = async () => {
  let result = {
    data: [],
    error: null,
  };

  try {
    result.data = await models.Workout.findAll();
  } catch (error) {
    result.error;
  }
  return result;
}

export const getWorkout = async id => {
  let workout = null;
  try {
    workout = await models.Workout.findByPk(id);
  } catch {}
  return workout;
}

export const search = async (page = 1, limit = 50, category = '', start_date = null) => {
  const pageNumber = Math.abs(parseInt(page));
  const limitItems = Math.abs(parseInt(limit));
  const categories = category?.length ? category.split(',') : [];
  const startDate = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/gi.test(start_date) ? start_date : null;
  const startDateObj = new Date(startDate);
  const query = {};

  if (categories.length) {
    query.category = categories;
  }

  if (startDate && startDateObj) {
    query.start_date = {
      [Op.between]: [
        startDateObj,
        new Date(new Date(startDate).setMonth(startDateObj.getMonth() + 1))
      ],
    }
  }

  const result = {
    data: null,
    error: null,
  }
  try {
    result.data = await models.Workout.findAndCountAll({
      where: query,
      order: ['start_date'],
      limit: limitItems,
      offset: (pageNumber - 1) * limit,
    });
  } catch (error) {
    result.error = error.message;
  }
  return result;
}
