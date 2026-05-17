import https from "node:https";

const host = "mangpahang.com.np";
const key = "6f2b8e9c4a7d4f10b1e6a2c9d5f30871";
const keyLocation = `https://${host}/${key}.txt`;
const urlList = [
  `https://${host}/`,
  `https://${host}/services`,
  `https://${host}/gallery`,
  `https://${host}/about`,
  `https://${host}/contact`,
];

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList,
});

const request = https.request(
  {
    hostname: "api.indexnow.org",
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (response) => {
    let body = "";

    response.setEncoding("utf8");
    response.on("data", (chunk) => {
      body += chunk;
    });
    response.on("end", () => {
      const ok = response.statusCode >= 200 && response.statusCode < 300;
      const status = `${response.statusCode} ${response.statusMessage}`;

      if (!ok) {
        console.error(`IndexNow submission failed: ${status}`);
        if (body) {
          console.error(body);
        }
        process.exit(1);
      }

      console.log(`IndexNow submission accepted: ${status}`);
      console.log(`Submitted ${urlList.length} URLs for ${host}`);
    });
  },
);

request.on("error", (error) => {
  console.error(`IndexNow submission error: ${error.message}`);
  process.exit(1);
});

request.write(payload);
request.end();
