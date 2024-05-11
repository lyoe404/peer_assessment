const db = require("../../util/database") ; 
const getUser = require("../../util/dbscripts") ; 
let password ; 
exports.verify = (req,res) => {
  const user_id = req.body.login_user_id ; 
  const user_pass = req.body.login_user_pass ; 
  db.execute('SELECT pass FROM members WHERE id = ? ',[user_id]).then(data => {
     password = data[0][0].pass ;
    let check = true ; 
    let index = 0 ;
    let outerloop = true ;
    
    while (1) {

      if (outerloop == false) break ; 
      if (password[index] == user_pass[index]){
          if (password[index] == undefined) {
                outerloop = false ;
                continue ; 
          }
      }
      else {
        check = false ;
        break ; 
      }
      index++ ; 
    }

    if (check == true) {
            getUser.getUser(user_id) ; 
            res.redirect("/AccountEdit") ;
    }  
    else {
      console.log("yanlis1") ; 
      res.render('AccountLogin.ejs',{check : check}) ;
    } ;


  }).catch((err) => {
      check = false ; 
       res.render('AccountLogin.ejs',{check : check , }) ;
       console.log("yanlis2")
  }) ;
  

} ;


