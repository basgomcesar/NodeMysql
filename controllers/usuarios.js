const connection = require('../models/database');

const usuariosGet = (req, res) => {
    connection.query('SELECT * FROM estudiante', (err, results) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                msg: 'Error connecting to database'
            });
        }

        res.json({
            ok: true,
            usuarios: results
        });
    });
}

module.exports = { usuariosGet };