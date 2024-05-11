const express = require('express') ; 
const getUser = require("../util/dbscripts") ;
const router = express.Router() ; 


router.get('/AccountEdit',(req,res) => {
    
      res.render("AccountEdit.ejs",{id : getUser.User.id , 

      })
      console.log("U r here") ; 
 

}) ;




module.exports = router ; 