'user strict';
var dbConn = require('../../config/db.config');

//blog_data object create
var Blog = function(blog_data){
    this.id = blog_data.id;
    this.title = blog_data.title;
    this.description = blog_data.description;
};
Blog.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO blog_table set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Blog.findById = function (id, result) {
    dbConn.query("Select * from blog_table where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Blog.findAll = function (result) {
    dbConn.query("Select * from blog_table", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('blog_table : ', res);  
            result(null, res);
        }
    });   
};
Blog.update = function(id, blog_data, result){
  dbConn.query("UPDATE blog_table SET title=?,description=? WHERE id = ?", [blog_data.title,blog_data.description, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Blog.delete = function(id, result){
     dbConn.query("DELETE FROM blog_table WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Blog;