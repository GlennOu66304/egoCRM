import sqlFn from "../../modules/database.js";

export default {
  goodsList: (req, res) => {
    // res.send("hello");

    // sql data use
    // output:print a list of goods data, include the pagination
    // 1. use the sqlFun function

    // 2. define the sql, arr, pagination, and the call back function
    // const page = req.query.page;
    const page = req.query.page | 1;
    const sqlLen = "select * from sp_attribute where attr_id";

    // 3.sql length is the sql script to load the sql data from mysql ego database

    // 4.res.send out put the data (call back function handle the data output)
    sqlFn(sqlLen, null, (data) => {
      // console.log(data) // print the output of the const sqlLen
      let len = data.length; // toal number on the pagination
      const sql =
      // space offset and " there is a space
        "select * from sp_attribute order by attr_id desc limit 8 offset " + (page - 1) * 8;
        

      sqlFn(sql, null, (result) => {
        // condition check if the output value is 0, then return 0 otherwise, res.send out data

        if (result.length > 0) {
          res.send({
            status: 200,
            data: result,
            pagesise: 8,
            total: len,
          });
          
        } else{
          res.send({
            status: 403,
            msg:"no data send back"
          });
        }
      });
    });
  },
};
