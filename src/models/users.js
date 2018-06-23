const pool = require("../config/connectDB");

async function getAllUserData () {
  const [result] = await pool.query(`
    SELECT * 
    FROM users
    `);

  return result;
}

async function getUserDataById (id) {
  const result = await pool.query(`
    SELECT * 
    FROM users 
    WHERE id = ?
    `, [id]);

  return result[0];
}

async function getUserDataByEmail (email) {
  const result = await pool.query(`
    SELECT * 
    FROM users 
    WHERE email = ?
    `, [email]);

  return result[0];
}

async function removeUserById (id) {
  const result = await pool.query(`
    DELETE 
    FROM users 
    WHERE id = ?
    `, [id]);

  return result;
}

async function insertUser (email, password) {
  const result = await pool.query(`
    INSERT INTO users (email, password) 
    VALUES (?, ?)
    `, [email, password]);

  return result;
}

module.exports = {
  getAllUserData,
  getUserDataById,
  getUserDataByEmail,
  removeUserById,
  insertUser
};
