'use strict';

const Blog = require('../models/blog.model');

exports.findAll = function(req, res) {
  Blog.findAll(function(err, blog) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', blog);
    res.send(blog);
  });
};


exports.create = function(req, res) {
    const new_blog = new Blog(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Blog.create(new_blog, function(err, blog) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Blog added successfully!",data:blog});
        });
    }
};


exports.findById = function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if (err)
        res.send(err);
        res.json(blog);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Blog.update(req.params.id, new Blog(req.body), function(err, blog) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'blog successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Blog.delete( req.params.id, function(err, employee) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Employee successfully deleted' });
  });
};