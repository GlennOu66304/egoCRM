import mysql from "mysql";

// myqql connect
// 1.initailze the mysql configuration paramter
const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "ego",
});

// 1.function, sql arr, call back,
// 2.use the client above, if the call back and zero
function sqlFun(sql, arr, callback) {
  client.query(sql, arr, function (error, result) {
    if (error) {
      console.log(error);
      return;
    }

    callback(result);
  });
}

export default sqlFun