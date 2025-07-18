import RestaurantesModel from '../models/restaurantesModel.js';

class RestaurantesController {
  static async getAll(req, res) {
    try {
      const restaurantes = await RestaurantesModel.findAllRestaurantes();
      res.status(200).json(restaurantes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar restaurantes.' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const restaurante = await RestaurantesModel.findRestauranteById(id);
      if (!restaurante) {
        return res.status(404).json({ error: 'Restaurante não encontrado.' });
      }
      res.status(200).json(restaurante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar restaurante por ID.' });
    }
  }

  static async create(req, res) {
    try {
      const { nome, cidade } = req.body;
      const novoRestaurante = await RestaurantesModel.createRestaurante({ nome, cidade });
      res.status(201).json(novoRestaurante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar restaurante.' });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, cidade } = req.body;
      const restauranteAtualizado = await RestaurantesModel.updateRestaurante(id, { nome, cidade });
      if (!restauranteAtualizado) {
        return res.status(404).json({ error: 'Restaurante não encontrado para atualização.' });
      }
      res.status(200).json(restauranteAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar restaurante.' });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const restaurante = await RestaurantesModel.findRestauranteById(id);
      if (!restaurante) {
        return res.status(404).json({ error: 'Restaurante não encontrado para exclusão.' });
      }
      await RestaurantesModel.deleteRestaurante(id);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar restaurante.' });
    }
  }
}

export default RestaurantesController;
