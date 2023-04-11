// Importamos la librería "mysql"
const mysql = require('mysql');

// Configuramos la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'contraseña',
  database: 'basedatos'
});

// Generamos 6 números aleatorios del 1 al 38
const numerosAleatorios = [];
for (let i = 0; i < 6; i++) {
  let numero = Math.floor(Math.random() * 38) + 1;
  numerosAleatorios.push(numero);
}

// Creamos una consulta SQL para insertar los números en una tabla
const sql = `INSERT INTO numeros_aleatorios (numero1, numero2, numero3, numero4, numero5, numero6) VALUES (${numerosAleatorios[0]}, ${numerosAleatorios[1]}, ${numerosAleatorios[2]}, ${numerosAleatorios[3]}, ${numerosAleatorios[4]}, ${numerosAleatorios[5]})`;

// Ejecutamos la consulta
connection.query(sql, (error, results, fields) => {
  if (error) throw error;
  console.log('Números aleatorios insertados correctamente.');
});

// Cerramos la conexión a MySQL
connection.end();
