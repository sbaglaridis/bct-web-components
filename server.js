const express = require('express');
const app = express();

const hydrate = require('./hydrate');

app.get('/bct-socials', async (req, res) => {
  const srcHtml = `<bct-socials facebook="#" twitter="#" instagram="#" youtube="#" />`;
  const results = await hydrate.renderToString(srcHtml);

  res.send(results.html)
});

app.get('/bct-author-block', async (req, res) => {
  const srcHtml = `
      <bct-author-block
        avatar="https://via.placeholder.com/150"
        name="Scarlett Johansson"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt dolore est laudantium nulla perferendis quae quis recusandae, repellat saepe sequi veritatis voluptatum? Dicta error explicabo modi omnis, quos rerum."
      />
  `;
  const results = await hydrate.renderToString(srcHtml);

  res.send(results.html)
});

app.listen(3000, () => {
  console.log('server is up')
});
