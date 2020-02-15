const docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const ImageModule = require("docxtemplater-image-module-free");
const word2pdf = require("word2pdf");
const qrImage = require("qr-image");

//Metodo para generar documentos msword (docx) en el cual incluye la ruta de entrada , la informacion a escribir en el documento y la ruta de salida del archivo generado
exports.CreateDoc = (input, data, output) => {
  var content = fs.readFileSync(path.resolve(input), "binary");
  var opts = {};
  opts.centered = false;
  opts.fileType = "docx";
  opts.getImage = function (tagValue, tagName) {
    return fs.readFileSync(tagValue);
  };

  opts.getSize = function (img, tagValue, tagName) {
    return [120, 120];
  };

  var imageModule = new ImageModule(opts);
  var zip = new PizZip(content);
  var doc = new docxtemplater();
  doc.loadZip(zip);
  doc.attachModule(imageModule)
  doc.setData(data);

  try {
    doc.render();
  } catch (error) {
    function replaceErrors(key, value) {
      if (valueinstanceofError) {
        return Object.getOwnPropertyNames(value).reduce(function (error, key) {
          error[key] = value[key];
          return error;
        }, {});
      }
      return value;
    }
    console.log(JSON.stringify({ error: error }, replaceErrors));

    if (error.properties && error.properties.errorsinstanceofArray) {
      consterrorMessages = error.properties.errors
        .map(function (error) {
          return error.properties.explanation;
        })
        .join("\n");
      console.log("errorMessages", errorMessages);
    }
  }

  var buf = doc.getZip().generate({ type: "nodebuffer" });
  fs.writeFileSync(
    path.resolve(output),
    buf
  );

}

//Metodo para convertir documentos msword (docx) a pdf
exports.DocsToPDF = async (input, output) => {
  try {
    const data = await word2pdf(input)
    fs.writeFileSync(output, data);
  } catch (error) {
    console.log(error);

  }
}


//Genera codigos qr en tipo imagen con extension png 
exports.QRCode = async (name, stringURL, pathQR) => {
  try {
    const image = qrImage.image(
      JSON.stringify(stringURL),
      { type: "png", size: 10, margin: 0.5 }
    );
    const optionalObj = { fileName: name, type: "png" };
    image.pipe(
      require("fs").createWriteStream(
        `${pathQR}${optionalObj.fileName}.${optionalObj.type}`
      )
    );
    const nameQR = `${optionalObj.fileName}.${optionalObj.type}`;
    return nameQR;
  } catch (error) {
    console.log(error);

  }
};