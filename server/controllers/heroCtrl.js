var app = require('./../server');
var db = app.get('db');

// console.log(Object.keys(db));
// console.log(Object.keys(db.init));
// console.log(Object.keys(db.product));

db.init.createProductTable(function(err){
  if(err){
    return console.log("Error Init Product Table", err);
  }
});

module.exports = {

  create:function(req, res){

    db.product.create_product(
      [req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl],
      function(err, results){
        if(err){
          console.error(err);
          return res.send(err);
        }
        console.log(results);
        res.send(results);
      }
    )
  },
  getOne:function(req, res){
    db.product.read_product([req.params.productId],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      res.send(results[0]);
    })
  },
  getAll:function(req, res){
    db.product.read_products([],function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      res.send(results);
    })
  },
  update:function(req, res){
    db.product.update_product([
      req.params.productId,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl
    ],
    function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      res.send(results[0]);
    })
  },
  delete:function(req, res){
    db.product.delete_product([req.params.productId], function(err, result){
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send("Product " +req.params.productId + " deleted.");
    })
  }

}
