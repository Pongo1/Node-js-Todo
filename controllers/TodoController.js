var database = ['Go to work','Create some acronym','Do some code','Do some shit'];
module.exports = (app) => {
//this is the controller, but its also kinda the route folder lol!

    app.get('/',(request, response)=>{
        response.render('home',{ items: database });
    });

    app.get('/add',(request, response)=>{
        database.push(request.query.item);  
        response.render('home',{ items: database});
    });
    app.get('/delete', (request, response) => {
        var itemDel = request.query.item; 
        var newDB = database.filter((item)=>{
            return item !== itemDel;
        });
        database = newDB;
        console.log(newDB)
        response.render('home', { items: database })
    });



    app.get('/eject-data',(request, response )=>{
        console.log(request.query);
       // response.send(request.query);
    });
};