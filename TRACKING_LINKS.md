# 流入元別ポートフォリオURL

Vercel Web Analytics の UTM Parameters で流入元を区別するための短縮URL。

## ポートフォリオトップ

- Lancers: `https://arisodenai.com/go/lancers`
- CrowdWorks: `https://arisodenai.com/go/crowdworks`
- Coconala: `https://arisodenai.com/go/coconala`

各URLは `/` に以下のUTMを付与して転送する。

- `utm_source`: `lancers` / `crowdworks` / `coconala`
- `utm_medium`: `profile`
- `utm_campaign`: `freelance_portfolio`

## 道案内さん開発事例へ直接送る場合

- Lancers: `https://arisodenai.com/go/lancers/michiansan`
- CrowdWorks: `https://arisodenai.com/go/crowdworks/michiansan`
- Coconala: `https://arisodenai.com/go/coconala/michiansan`

こちらは `/portfolio.html` に同じUTMを付与して転送する。

## 確認場所

Vercel → arisodenai → Analytics → UTM Parameters で `utm_source` を確認する。
