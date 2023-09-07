const express = require("express");
const app = express();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get("/api", (req, res)=>{
  const d = new Date();                             let day = weekday[d.getDay()]
  res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: day,
    utc_time: d.toISOString().split(".")[0] + "Z",
    track: req.query.track,
    github_file_url: "https://github.com/coder1967/hng_simple_api/app.js",
    github_repo_url: "https://github.com/coder1967/hng_simple_api",
    status_code: 200
  }
  );
});

app.listen(5000, ()=>{
  console.log("running on port 5000")
})
