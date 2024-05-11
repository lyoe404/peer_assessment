const db = require("./database") ; 
//Get USER INFO

exports.User = {} ;

exports.getUser = (id) => {
  db.execute("Select * From members where id = ?" , [id]).then(UserData => {
const user = UserData[0][0] ; 
 exports.User = {
  id : user.id , 
  pass : user.pass , 
  gpa : user.gpa , 
  tc : user.tc , 
  name : user.name , 
  surname : user.surname , 
  mail : user.mail ,
  role : user.role , 
  department : user.department , 
  grade : user.grade 
}
}).catch((err)=> {
  console.log(err) ; 
})
} ;

