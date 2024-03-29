var express = require('express');
var router = express.Router();

const Allproducts = require('../Model/allProducts');
const Category = require('../Model/categories');

module.exports = {

    getUserHomePage : async(req,res)=>{
        try{
            res.render('user/index')
        }catch(error){
            console.log(error);
        }
    },

    getAllProductsPage : async(req,res)=>{
        try{
            const products = await Allproducts.find().populate('category');
            const categories = await Category.find()
            console.log(products,'hhhhhhhhhh1');
            console.log(categories,'hhhhhhhhhh');

            res.render('user/allproducts',{products, categories});
        }catch(error){
            console.log(error);
        }
    },

    getProductDetails : async(req,res)=>{
        try{
            res.render('user/productdetails')
        }catch(error){
            console.log(error);
        }
    },

    getContactPage : async(req,res)=>{
        try{
            res.render('user/contact')
        }catch(error){
            console.log(error);
        }
    },

    getCartPage  :async(req,res)=>{
        try{
            res.render('user/cart')
        }catch(error){
            console.log(error);
        }
    },

    getCheckOut : async(req,res)=>{
        try{
            res.render('user/checkout')
        }catch(error){
            console.log(error);
        }
    },

    categoryFilter: async(req,res)=>{
        try{
            const categoryId= req.params.id
            const categories = await Category.find()
             const products = await Allproducts.find({ 'category': categoryId });
     console.log(products,"ttttttttttttttttttjjjjjjjjjjjjjj");

     res.render('user/categoryfilterpage',{products,categories});
        }catch(error){
      console.log(error);
        }
    }

    
}