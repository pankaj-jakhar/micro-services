import pool from "./db";

async function  checkDomains (req, res ,next){
    try
    {
        const isPublic = req.headers.isPublic;
        const secure = req.protocol === 'https';
        const host = req.get('host').includes(':') ? req.get('host').split(":")[0] :  req.get('host')
        const port = req.get('host').includes(':') ? req.get('host').split(":")[1] :  80
        const domains = await pool.query( 
            `SELECT *
            FROM domains
            WHERE status = TRUE AND secure = ${secure}
            AND (secure = TRUE AND hostname = '${host}')
            OR (secure = FALSE AND hostname = '${host}' AND port = '${port}');`);

        if( domains.rows.length || isPublic){
            next()
            return
        }
        res.status(404).send("Not found")
    }

    catch(error){
        res.send("Error: "+error);
    }
}

export default checkDomains