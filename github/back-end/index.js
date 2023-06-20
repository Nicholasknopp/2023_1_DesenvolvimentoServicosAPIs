import express, {json} from "express";
import cors from "cors";
import axios from "axios";
import qs from "query-string";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.post("/login", async (req, res) => {
  try {
    const token = await exchangeCodeForAcessToken(req.body.code);
    console.log(token);
    const user = await fetchUser(token);
    res.send(user);
  } catch (error) {
    console.log("error", error.response.data);
    res.sendStatus(500);
  }
});

async function exchangeCodeForAcessToken(code) {
  const GITHUB_ACESS_TOKEN_URL = 'https://github.com/login/oauth/acess_token';
  const {REDIRECT_URL, CLIENT_ID, CLIENT_SECRET} = process.env;
  const body = {
    code,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URL,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  };

  const {data}  = await axios.post(GITHUB_ACESS_TOKEN_URL, body, {
    headers: {
      'Content-Type': 'application/json'
    }
});
const parsedData = qs.parse(data);
return parsedData.acess_token;
}

async function fetchUser(token) {
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
   });
   
   return response.data
}

app.listen(5000, () => {
  console.log("Server is up and running.")
})