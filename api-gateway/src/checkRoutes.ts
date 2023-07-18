import pool from "./db";

async function  checkRoutes (req, res ,next){
    try
    {
        const routes = await pool.query('SELECT * FROM public.routes where path=$1',[req.url]);
        if( !routes.rows.length ){
            res.status(404).send("Not found")
            return 
        }
        if( routes.rows.length === 1 ){
            req.headers.isPublic = routes.rows?.[0]?.public 
            req.headers.target_path = routes.rows?.[0]?.target_path 
            req.headers.target_host = routes.rows?.[0]?.hostname 
            req.headers.target_port = routes.rows?.[0]?.port
             
            req.headers.secure = routes.rows?.[0]?.secure 
            next()
        }
    }
    catch(error){
        res.send("Error: "+error);
    }
}

export default checkRoutes