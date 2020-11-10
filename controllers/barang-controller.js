const { Barang } = require('../models')
class BarangController{
  static addBarang(res,req) {
    Barang.create({
      Nama_Barang: req.body.Nama_Barang,
      Qty: Number(req.body.Qty),
      Exp_date: new Date(req.body.Exp_date),
      Harga: Number(req.body.Harga)
    })
    .then(data =>{
      res.status(201).json({
        message:'Barang Has Added',
        name:req.body.name
      })
    })
    .catch(err =>{
      res.status(500).json({
        message: "insternal server errpr"
      })
    })
  }
  static getBarang(req,res){
    Barang.findAll({
      attributes:{
        exclude: ['createdAt','updatedAt']
      }
    })
    .then(barang =>{
      res.status(200).json(barang)
    })
    .catch(err =>{
      res.status(500).json({
        message: "insternal server errpr"
      })
    })
  }
  static getBarangId(req,res) {
    Barang.findOne({
      where: {
        id: req.params.idbarang
      }
    })
    .then(barang => {
      if(barang) {
        res.status(200).json(barang)
      } else {
        res.status(404).json({
          message: "Barang Not Found"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "insternal server errpr"
      })
    })
  }
  static putBarang(req,res) {
    Barang.update({
      Nama_Barang: req.body.Nama_Barang,
      Qty: Number(req.body.Qty),
      Exp_date: new Date(req.body.Exp_date),
      Harga: Number(req.body.Harga)
    },{
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      res.status(201).json({
        message: "Data has been updated"
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "insternal server errpr"
      })
    })
  }
  static deleteBarang(req,res) {
    Barang.destroy({
      where: {
        id: req.params.idbarang
      }
    })
    .then(data =>{
      res.status(200).json({
        message:'Data Has been delete'
      })
    })
    .catch(err =>{
      res.status(500).json({
        message: "insternal server errpr"
      })
    })
  }
}
module.exports = BarangController
