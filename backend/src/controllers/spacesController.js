const SpacesModel = require("../models/SpacesModel.js");

class SpacesController {
  constructor() {
    this.model = new SpacesModel("nf-xfc-dt"); 
  }

  async upload(req, res) {
    try {
      const file = req.file;

      const result = await this.model.uploadFile(
        file.buffer,
        file.originalname
      );

      res
        .status(200)
        .json({ message: "Archivo subido con éxito", data: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al subir el archivo", error: error.message });
    }
  }

  async download(req, res) {
    try {
      const fileName = req.params.fileName;

      const fileBuffer = await this.model.downloadFile(fileName);

      res.status(200).send(fileBuffer);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al descargar el archivo",
          error: error.message,
        });
    }
  }

 
  async viewPdf(req, res) {
    try {
      const fileName = req.params.fileName; 

      const fileStream = await this.model.getFileStream(fileName);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'inline; filename="' + fileName + '"'
      );
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error serving PDF file: ", error);
      res
        .status(500)
        .json({
          message: "Error al visualizar el archivo PDF",
          error: error.message,
        });
    }
  }
}

module.exports = SpacesController;
