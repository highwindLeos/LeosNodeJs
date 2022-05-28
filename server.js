const express = require('express');
const app = express();

app.listen(8090, () => {
    console.log('Port 8090 Server Start~! ');
});

// URL 요청 : /
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html'); // 파일전송
});

// URL 요청 : /write
app.get('/write', (req, res)=>{
    res.sendFile(__dirname + '/write.html');
});
