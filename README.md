<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-4683763693438850">
  <title>Live Sports App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      text-align: center;
      background-color: #f0f0f0;
    }
    h1 {
      padding: 20px;
      background-color: #007BFF;
      color: white;
      margin: 0;
    }
    .buttons {
      margin: 20px;
    }
    .buttons button {
      padding: 15px 30px;
      margin: 10px;
      font-size: 18px;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      background-color: #007BFF;
      color: white;
    }
    .buttons button:hover {
      background-color: #0056b3;
    }
    iframe {
      width: 100%;
      height: 85vh;
      border: none;
      display: none;
    }
    iframe.active {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Live Sports App</h1>
  <div class="buttons">
    <button onclick="showIframe('score')">Live Match Score</button>
    <button onclick="showIframe('news')">News</button>
  </div>
  <iframe id="score" class="active" src="https://widget.crictimes.org/" title="Live Match Score"></iframe>
  <iframe id="news" src="https://www.yupptv.com/" title="Live News"></iframe>

  <script>
    function showIframe(id) {
      document.getElementById('score').classList.remove('active');
      document.getElementById('
      
