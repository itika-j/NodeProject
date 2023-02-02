var ResultDb= require('../model/model');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: 'Content cant be empty'});
        return;
    }

    //new result
    const result = new ResultDb({
        rollno:req.body.rollno,
        name : req.body.name,
        dob : req.body.dob,
        score : req.body.score
    })

    //save data in DB
    result
        .save(result)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-result')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while create operation",
                
            })
        })
}

//retrive and return all user/single user
exports.find = (req,res)=>{
   ResultDb.find()
   .then(result=>{
    res.send(result)
   })
   .catch(err=>{
    res.status(500).send({message: err.message || "error occured whilr retriving"})
   }) 
}

//update a result by rollno
exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: 'Data to update cant be empty'});
        return;
    }

    const id = req.params.id;
    ResultDb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message : `cannot update user with ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update user info"})
    })
}

//Delete result with rollno
exports.delete = (req,res)=>{

}