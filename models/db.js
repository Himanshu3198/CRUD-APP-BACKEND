var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
    if(!err) {console.log('mongodb connection success')}
    else {console.log('error in db connection'+err)}
})
require('./employee.model');