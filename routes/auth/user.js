import sqlFn from "../../modules/database.js";
import jwt from "jsonwebtoken";
const privateKey = "userhwertetqw";
export default {
  register: () => {
    console.log("sgin up");
  },

  login: (req, res) => {
    let { username, password } = req.body;
    // const username = req.body.username;

    // const password = req.body.password;
    const sql = "select *  from userinfo where username=? and password = ?";
    const arr = [username, password];
    sqlFn(sql, arr, (result) => {
      if (result.length > 0) {
        let token = jwt.sign(
          {
            username: result[0].username,
            id: result[0].id,
          },

          privateKey,
          {
            expiresIn: 3600,
          }
        );

        res.send({
          status: 200,
          token: "Bearer " + token,
        });
      } else {
        res.send({
          status: 403,
          msg: "no data send back",
        });
      }
    });
    // console.log("sgin in");
  },
};
