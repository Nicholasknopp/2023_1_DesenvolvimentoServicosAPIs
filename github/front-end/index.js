import axios from "axios";
import qs from "query-string"

function redirectToGitHub() {
  console.log("oi");
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL
  };
  console.log("ola");
  const queryStrings = qs.stringify(params);
  const authURL = `${GITHUB_URL}?${queryStrings}`;
  window.location.href = authURL;
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}


window.onload = async () => {
  document.querySelector(".login").addEventListener("click", redirectToGitHub);

  const { code } = qs.parseUrl(window.location.href).query;
  if(code) {
    try {
      console.log("1");
      sleep(2000);

      const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code });

      //const user = response.data;
      //console.log(user);
      
    } catch (error) {
      alert("Deu erro _");
      console.log("error", error);
    }   
  }


}