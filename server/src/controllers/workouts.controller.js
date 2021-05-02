import {
  getAllWorkouts,
  getWorkout,
  search,
} from '../services';

export default class WorkoutsController {
  static async get(req, res) {
    if (req.params.id) res.status(404);
    const item = await getWorkout(req.params.id);

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(400).send();
    }
  }

  static async getAll(req, res) {
    const data = await getAllWorkouts();
    res.status(200).json(data);
  }

  static async search(req, res) {
    const { page, limit, category, start_date } = req.query;
    const data = await search(page, limit, category, start_date);
    res.status(200).json(data);
  }
}
