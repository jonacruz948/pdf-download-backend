const express = require('express');
const { createDocx, createPdf } = require('../services');

const router = express.Router();

router.route('/download').post(async (req, res) => {
  const docFilename = await createDocx(req.body.url);
  if (!docFilename) {
    res.status(500).send('docx creation error');
  }

  console.log('docFilename', docFilename)

  const pdfFilename = await createPdf(docFilename);

  const filepath = `${__dirname}/../assets/${pdfFilename}`;

  console.log('pdfFilename', pdfFilename);

  if (filepath) {
    res.download(filepath, pdfFilename);
  } else {
    res.status(500).send('pdf creation error');
  }
});

module.exports = router;
