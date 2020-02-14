const docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const ImageModule = require("docxtemplater-image-module-free");

exports.CreateDoc = (input, dataSet , output) => {
  //(templateFile, dataSet, idSolicitud) => {
  var content = fs.readFileSync(
    path.resolve(input),
    "binary"
  );
  var opts = {};
  opts.centered = false;
  opts.fileType = "docx";
  opts.getImage = function(tagValue, tagName) {
    return fs.readFileSync(tagValue);
  };

  
  opts.getSize = function(img, tagValue, tagName) {
    return [120, 120];
  };

  var imageModule = new ImageModule(opts);
  var zip = new PizZip(content);
  var doc = new docxtemplater();
  doc.loadZip(zip);
  doc.attachModule(imageModule)
  doc.setData(dataSet);

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
