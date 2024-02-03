var express = require('express');
var router = express.Router();

const {

  getUserHomePage,
  getAllProductsPage,
  getProductDetails,
  getContactPage,
  getCartPage,
  getCheckOut,
  categoryFilter

} = require('../Controllers/userController')

router.get('/',getUserHomePage);
router.get('/allproducts',getAllProductsPage);
router.get('/productdetails',getProductDetails);
router.get('/contacts',getContactPage);
router.get('/getcart',getCartPage);
router.get('/getcheckout',getCheckOut)
router.get('/categoryfilter/:id',categoryFilter);

module.exports = router;
