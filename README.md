# DOCS WRITTER

_Docs Writter es un modulo que permite crear documentos msword

  ## Crear Documento (.Docx)

  _Este metodo esta basado en docx-templater para el paso de valor para las variables integradas en el documento template.

  _**Parametros**

  * **input** = Aqui se ingresa la ruta de almacemaniento incluido el nombre y extension del archivo, ej: ./input.docx
  * **data** = Este parametro contendra la informacion que se asignara a las variables declaradas en el archivo template 
    _( template basado en docx-templater)
  * **output** = Aqui se ingresa la ruta de almacemaniento incluido el nombre y extension del archivo, ej: ./output.docx

```
  const docsWritter = require('docs-writter')
  
  docsWritter.CreateDoc(input ,data ,output)
```

**Ejemplo**

```
  const docsWritter = require('docs-writter')
  
  const data = {
    "nombres": "Maria",
    "apellidos": "Garcias Melendez"
  }

  docsWritter.CreateDoc('./input.docx' ,data ,'./output.docx')
```


## Convertir Documento (.Docx) a PDF
  _Este metodo te permite convertir un documento msword (docx) a PDF.

   _**Parametros**

  * **input** = Aqui se ingresa la ruta de almacemaniento incluido el nombre y extension del archivo, ej: ./input.docx
  * **output** = Aqui se ingresa la ruta de almacemaniento incluido el nombre y extension del archivo, ej: ./output.docx

```
  const docsWritter = require('docs-writter')
  
  docsWritter.DocsToPDF(input,output)
```

**Ejemplo**

```
  const docsWritter = require('docs-writter')
  
  const data = {
    "nombres": "Maria",
    "apellidos": "Garcias Melendez"
  }

  docsWritter.CreateDoc('./input.docx' ,data ,'./output.docx')
```



## Generar Codigo QR en PNG
  _Este metodo te permite generar un codigo qr en tipo de image png.

   _**Parametros**

  * **name** = Aqui se ingresa el nombre que recibira el archivo de imagen del qr.
  * **stringURL** = Este parametro contendra la informacion o url que se visualizara al escanear el codigo qr
  * **output** = Aqui se ingresa la ruta de almacemaniento incluido el nombre y extension del archivo, ej: `/public/`

```
  const docsWritter = require('docs-writter')
  
  docsWritter.QRCode(name,stringURL,output)
```

**Ejemplo**

```
  const docsWritter = require('docs-writter')
  
  QRCode('qrcode1','qrcode.com/', `${__dirname}/`)
```