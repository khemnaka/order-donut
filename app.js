const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./DB');

// ตั้งค่าการใช้ EJS และ static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// เส้นทางไปยังหน้าแรก (Main)
app.get('/', (req, res) => {
    res.render('index'); // ไปที่ views/index.ejs
});

// เพิ่มเส้นทางอื่น ๆ เช่น step1, step2, confirm, payment
app.get('/step1', (req, res) => {
    res.render('step1');
});

app.get('/step2', (req, res) => {
    res.render('step2');
});

// รันเซิร์ฟเวอร์
app.listen(3000, () => {
    console.log('Server รันที่ http://localhost:3000');
});
