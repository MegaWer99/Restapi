const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'Admin123',
    database: 'restapi',
    port: '5432'
});

const UserGet = async ( req, res ) => {
    const response = await pool.query('SELECT * FROM users');
    //console.log(response.rows);
    // res.send('users');
    res.status(200).json(response.rows);
}

const UserById = async ( req, res ) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const CreateUser =  async ( req, res ) => {
    const {nombre, apellido, edad, email} = req.body;
    const response = await pool.query('INSERT INTO users (nombre, apellido, edad, email) VALUES ($1, $2, $3, $4)', [nombre, apellido, edad, email]);
    console.log(response);
    res.json({
        message: 'User Added Succefully',
        body: {
            user: {nombre, apellido, edad, email}
        }
    })

};

const UpdateUser = async ( req, res ) => {
    const id = req.params.id;
    const {nombre, apellido, edad, email} = req.body;
    const response = await pool.query('UPDATE users SET nombre = $1, apellido = $2, edad = $3, email = $4 WHERE id = $5', [
        nombre,
        apellido,
        edad,
        email,
        id
    ]);
    console.log(response);
    res.json('User Update Succefully');
}

const DeleteUser = async ( req, res ) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} Delete Succefully`);
};

module.exports = {
    UserGet,
    UserById,
    CreateUser,
    UpdateUser,
    DeleteUser
}