<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>AI おみくじWeb制作</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>AI おみくじWeb制作</h1>
    <nav><a href="#">Home</a> · <a href="#">About</a></nav>
  </header>

  <main>
    <section id="hero">
      <h2>ようこそ</h2>
      <p>ニックネームを入力しておみくじを引いてください。</p>

      <label for="nickname">ニックネーム：</label>
      <input id="nickname" type="text" placeholder="例: 太郎" />

      <button id="cta">おみくじを引く</button>

      <div id="result" aria-live="polite"></div>
    </section>
  </main>

  <footer>© 2026</footer>
  <script src="script.js"></script>
</body>
</html>