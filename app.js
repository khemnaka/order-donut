const express = require('express');
const app = express();
const path = require('path');

// ตั้งค่าให้ใช้ EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware สำหรับรับข้อมูล form
app.use(express.urlencoded({ extended: true }));

// หน้าแรก
app.get('/', (req, res) => {
  res.render('welcome');
});

// รับจำนวนแล้วส่งไปหน้าต่อไป
app.get('/select-donut', (req, res) => {
  const quantity = req.query.quantity;
  res.send(`คุณเลือกสั่ง ${quantity} ชิ้น (ยังไม่สร้างหน้าเลือกโดนัทนะ)`);
});

// เริ่มเซิร์ฟเวอร์
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
