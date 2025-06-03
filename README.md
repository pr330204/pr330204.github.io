<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-4683763693438850">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Sports App</title>
  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #e9ecef;
    }

    header, .buttons {
      transition: all 0.3s ease;
    }

    header {
      background-color: #0d6efd;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 15px;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      flex-wrap: wrap;
    }

    .buttons button {
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background-color: #0d6efd;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    .buttons button:hover {
      background-color: #0b5ed7;
      transform: scale(1.05);
    }

    iframe {
      width: 100vw;
      height: 100vh;
      border: none;
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
    }

    iframe.active {
      display: block;
    }

    .hidden {
      display: none !important;
    }

    .back-button {
      position: fixed;
      top: 15px;
      left: 15px;
      z-index: 1000;
      background-color: rgba(0,0,0,0.7);
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      display: none;
    }

    .back-button.show {
      display: block;
    }

    @media (max-width: 600px) {
      .buttons {
        flex-direction: column;
        gap: 10px;
      }
      .buttons button {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <header id="mainHeader">Live Sports App</header>

  <div class="buttons" id="mainButtons">
    <button onclick="showIframe('score')">📊 Live Match Score</button>
    <button onclick="showIframe('news')">📰 News</button>
  </div>

  <button class="back-button" id="backBtn" onclick="goBack()">⬅ Back</button>

  <iframe id="score" src="https://widget.crictimes.org/" title="Live Match Score"></iframe>
  <iframe id="news" src="https://www.yupptv.com/" title="Live News"></iframe>

  <script>
    function showIframe(id) {
      // Hide both iframes first
      document.getElementById('score').classList.remove('active');
      document.getElementById('news').classList.remove('active');

      // Show only the selected iframe
      document.getElementById(id).classList.add('active');

      // Hide main header and buttons
      document.getElementById('mainHeader').classList.add('hidden');
      document.getElementById('mainButtons').classList.add('hidden');

      // Show back button
      document.getElementById('backBtn').classList.add('show');
    }

    function goBack() {
      // Hide both iframes
      document.getElementById('score').classList.remove('active');
      document.getElementById('news').classList.remove('active');

      // Show main UI
      document.getElementById('mainHeader').classList.remove('hidden');
      document.getElementById('mainButtons').classList.remove('hidden');
      document.getElementById('backBtn').classList.remove('show');
    }
  </script>
</body>
</html>
