var bodyParser=require('body-parser');
var mongoose  =require('mongoose');

//Connecting to database

mongoose.connect('mongodb://test:protap1@ds213705.mlab.com:13705/todo', 
    {useNewUrlParser: true },function(err){
    {
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    }});
//mongoose.connect('mongodb://jacky:Jacky1@1297>@ds213705.mlab.com:13705/todo') ;


// create schema - this is like a blueprint

var todoSchema= new mongoose.Schema({

	item: String
});

var todo= mongoose.model('TodoList',todoSchema);



var urlencodedParser = bodyParser.urlencoded({ extended: false });



module.exports=function(app)

{
	//get data from database 

	app.get('/todo', function(req,res)
	{
       todo.find({}, function(err,data){

        if (err) throw err;
        res.render('todo',{todos:data});

       });
      
	});


	app.post('/todo', urlencodedParser,function(req,res)
	{
		var newTodo= todo(req.body).save(function(err,data){

			if (err) throw err;

		 todo.find({}, function(err,data){

        if (err) throw err;
        res.render('todo',{todos:data});

       });

		});

		

	});

	app.get('/tododelete', function(req,res)
	{
		var qs= req.query;
		var itemm=qs.item;
		todo.find({item:itemm.replace(/\-/g," ")}).remove(function(err,data){
			if (err) throw err;
		});


		 todo.find({}, function(err,data){

        if (err) throw err;
        res.render('todo',{todos:data});

       });
		
     
	});

};