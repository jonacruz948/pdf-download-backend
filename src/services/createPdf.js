var docxConverter = require('docx-pdf');

const convert = (docFilepath, pdfFilepath) => {
  return new Promise((resolve, reject) => {
    docxConverter(docFilepath, pdfFilepath, function (err, result) {
      if (err) {
        console.log(err);
        reject();
      }
      console.log('result' + result);
      resolve();
    });
  });
};

const createPdf = async (docFilename) => {
  const docFilepath = `${__dirname}/../assets/${docFilename}`;

  const pdfFilename = docFilename.replace('docx', 'pdf');
  const pdfFilepath = `${__dirname}/../assets/${pdfFilename}`;

  try {
    await convert(docFilepath, pdfFilepath);
    console.log('pdfFilename', pdfFilename);
    return pdfFilename;
  } catch (err) {
    console.log('error', err);
    return null;
  }
};

module.exports = {
  createPdf,
};
