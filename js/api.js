async function getVideos() {
  const connection = await fetch("http://localhost:3000/videos");
  const objectCon = await connection.json();
  return objectCon;
}

async function postVideo(video) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(video),
  });

  return await connection.json();
}

async function searchVideo(busca) {
  const connection = await fetch(`http://localhost:3000/videos?q=${busca}`);
  return await connection.json();
}

export const connectApi = { getVideos, postVideo, searchVideo };

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
