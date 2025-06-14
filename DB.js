const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ถ้ามีรหัสผ่านใส่ตรงนี้
    database: 'orderdonut'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('เชื่อมต่อฐานข้อมูลแล้ว');
});

module.exports = connection;
