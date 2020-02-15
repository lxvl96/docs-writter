const { CreateDoc, DocsToPDF, QRCode } = require('./docs')


const setData = {
    "nombres": "Yadira",
    "apellidos": "Toledo Ordaz"
}

// CreateDoc('./input.docx', setData, './output.docx')
// DocsToPDF('./output.docx','./output.pdf')
QRCode('qrcode1','qrcode.com/', `${__dirname}/`)