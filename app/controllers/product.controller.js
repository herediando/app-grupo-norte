const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Creamos y guardamos el producto
exports.create = (req, res) => {
  // validacion del request
  if (!req.body.title) {
    res.status(400).send({
      message: "No puede estar vacío!"
    });
    return;
  }

  // Creamos el producto
  const product = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // guardo el producto en la bd
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algún error ocurrio al guardar el producto."
      });
    });
};

// Mostrar los productos
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al mostrar los productos."
      });
    });
};

//  encontrar producto por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al mostrar el id=" + id
      });
    });
};

// Actualizar el producto
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Producto actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se puede actualizar el producto con el ID=${id}. Revise bien los parametros`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar el Producto con el ID=" + id
      });
    });
};

// Borrar algun producto
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "el Producto fue eliminado!"
        });
      } else {
        res.send({
          message: `Imposible borrar el Producto con el ID=${id}. Verificar`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se puede eliminar el Producto con el ID=" + id
      });
    });
};

// Eliminar todos los productos
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Productos Eliminados!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ups, algo salió mal"
      });
    });
};

// Encontrar todos
exports.findAllPublished = (req, res) => {
  Product.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algo salió mal"
      });
    });
};
