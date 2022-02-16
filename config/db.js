const {createPool} = require('mysql');
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'connec1107',
    port: 3306,
    database: "wn_offical",
});

pool.getConnection((err) => {
    if(err){
        console.log("Error conntecting to db...");
    }
    console.log("Connected to db...");
});

const excuteQuery= (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if(err){
                    console.log("error in executing the query");
                    reject(err);
                }
                resolve(data);
            });
        } catch (error) {
            reject(err);
        }
    });
};

module.exports = { excuteQuery };

// import mysql from 'serverless-mysql';
// const db = mysql({
//     config: {
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD
//     }
// });
// export default async function excuteQuery({ query, values }) {
//     try {
//         const results = await db.query(query, values);
//         await db.end();
//         return results;
//     } catch (error) {
//         return { error };
//     }
// }