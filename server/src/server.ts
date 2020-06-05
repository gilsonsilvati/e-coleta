import express from 'express';

const app = express();

app.get('/users', (request, response) => {
      console.log('Listagem de usuário');

      response.json([
            'Gilson',
            'Lidy',
            'Leka',
            'Biel',
            'Test'
      ]);
});

app.listen(3333);
