//conexao com o banco
import {pool} from '../config/db.js';

class RestaurantesModel {

    //buscar todos os restaurantes
    static async findAllRestaurantes() {
        try {
            const query = 'SELECT * FROM restaurantes';
            const result = await pool.query(query);
            //retorna as linhas em um objeto chamado QueryResult
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    //buscar por id
    static async findRestauranteById(id){
        try {
            const query = 'SELECT * FROM restaurantes WHERE id = $1';
            const values = [id];
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    //criar um novo restaurante
    static async createRestaurante({nome, cidade}){
        try{
            const query = 'INSERT INTO restaurantes (nome, cidade) VALUES ($1, $2) RETURNING *';
            const values = [nome, cidade];
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async updateRestaurante(id, {nome, cidade}){
        try {
            const query = 'UPDATE restaurantes SET nome = $1, cidade = $2 WHERE id = $3 RETURNING *';
            const values = [nome, cidade, id];
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async deleteRestaurante(id){
        try{
            const query = 'DELETE FROM restaurantes WHERE id = $1';
            const values = [id];
            await pool.query(query, values);
        } catch (error) {
            throw error;
        }
    }
}

export default RestaurantesModel;

/*
// Buscar todos os restaurantes
export async function findAllRestaurantes() {
  const result = await pool.query('SELECT * FROM restaurantes');
  return result.rows;
}

// Buscar restaurante por ID
export async function findRestauranteById(id) {
  const result = await pool.query('SELECT * FROM restaurantes WHERE id = $1', [id]);
  return result.rows[0]; // ou null se não encontrar
}

// Criar novo restaurante
export async function createRestaurante({ nome, cidade }) {
  const result = await pool.query(
    'INSERT INTO restaurantes (nome, cidade) VALUES ($1, $2) RETURNING *',
    [nome, cidade]
  );
  return result.rows[0];
}

// Atualizar restaurante
export async function updateRestaurante(id, { nome, cidade }) {
  const result = await pool.query(
    'UPDATE restaurantes SET nome = $1, cidade = $2 WHERE id = $3 RETURNING *',
    [nome, cidade, id]
  );
  return result.rows[0];
}

// Deletar restaurante
export async function deleteRestaurante(id) {
  await pool.query('DELETE FROM restaurantes WHERE id = $1', [id]);
}
*/