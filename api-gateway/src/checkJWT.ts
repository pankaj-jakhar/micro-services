
async function  checkJWT (req, res ,next){
    try
    {
        next()
        // res.status(404).send("Not found")
    }

    catch(error){
        res.send("Error: "+error);
    }
}

export default checkJWT