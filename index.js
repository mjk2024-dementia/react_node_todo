const PORT = 8080; // 개발 테스트용 포트
const express = require('express'); //express 모듈을 가져옴
const database = require('./database/database');
const app = express(); //express 기능 app에 담기

app.use(express.json()); // express에 json 사용

app.get('/' , (req, res) => {
  res.send('Hello World node!!');
});

app.get('/test_db', async (req, res)=> {
  try {
    const result = await database.query('SELECT * FROM TEST_DB')
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
})
app.listen(PORT,  () => console.log(`server is running on port ${PORT}`)); // 서버가 돌아가는지 확인하는 코드