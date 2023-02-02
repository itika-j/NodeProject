const axios = require('axios');

exports.homeRoutes = (req,res) => {
    //make a get req to /api/results
    axios.get('http://localhost:3000/api/results')
    .then(function(response){
        console.log(response);
        res.render('index',{results: response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.add_result = (req,res) => {
    res.render('add_result');
}

exports.update_result = (req,res) => {
    axios.get('http://localhost:3000/api/results',{params :{id:req.query.id}})
    .then(function(resultData){
        res.render("update_result",{result : resultData.data})
    })
    .catch(err=>{
        res.send(err);
    })
}