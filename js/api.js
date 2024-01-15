async function listVideos() {
  const connection = await fetch("http://localhost:3000/videos");
  const objectCon = await connection.json();
  return objectCon;
}

export const connectApi = { listVideos };

//const http = new XMLHttpRequest();
//
//http.open("GET", "https://zzr90rrg-3000.brs.devtunnels.ms/videos");
//
//http.responseType = "json";
//http.setRequestHeader("Accept", "*/*");
//http.setRequestHeader("Content-type", "application/json");
//http.setRequestHeader("Access-Control-Allow-Origin", "*");
//
//http.send();
//
//http.onload = () => {
//  const data = http.response;
//
//  console.log(data);
//};
//
