# Thanksgiving – Site 1 (Single-product landing page)

Q4 calibration e-commerce site for the **Thanksgiving** event.
Site 1 of 2: a focused sales page that sells **one hero product or bundle**.

| | |
|---|---|
| **Event** | Thanksgiving |
| **Type** | Single-product / bundle landing page |
| **Owner** | Person 3 |
| **Stack** | React + Vite |
| **Hosting** | Netlify (auto-deploy from `main`) |
| **Deliver by** | 3:00 AM WAT, 30 Sept 2026 |
| **Live URL** | _TBD_ |

## Concept

- **Brand name:** Récolte
- **Hero product / bundle:** Le Coffret Récolte: 6 stoneware plates, 6 bowls, 6 linen napkins, 1 serving platter, 1 "Merci" card
- **Offer:** Thanksgiving pre-sale, 54 900 FCFA instead of 89 000 FCFA (-38 %), free 48 h delivery, 27 boxes left
- **Target customer:** hosts in Benin preparing a festive family meal, or looking for a gift for their hosts
- **Mood / palette:** minimal, cream `#f6f1e9`, ink `#1f1b16`, terracotta `#b5532c`
- **Fonts:** Instrument Serif (headings) + Inter (body), self-hosted
- **Language:** French
- **Images:** AI-generated, see [IMAGES.md](IMAGES.md) for the prompts and file names
- **Content:** all text and prices live in `src/data/product.js`

## Page sections (top to bottom)

1. **Announcement bar**: offer + countdown
2. **Hero**: headline, product image, old/new price, "Buy now" button
3. **Benefits**: 3–4 reasons to buy (benefits, not features)
4. **Product details**: photos, what's included in the bundle
5. **Social proof**: customer reviews, star rating
6. **Guarantees**: delivery, returns, secure payment
7. **FAQ**
8. **Final call to action**: urgency ("only X left") + "Buy now"
9. **Footer**: contact / WhatsApp, payment logos, © 2026 team

## Conversion checklist

Graded on 10 points across the buyer journey. A beautiful site isn't enough; it has to sell.

**Attract**
- [ ] Themed hero with a clear offer
- [ ] Loads in under 3s (compressed images)
- [ ] Works on mobile

**Retain**
- [ ] Countdown timer to end of offer
- [ ] Strong product visuals, Thanksgiving storytelling

**Convince**
- [ ] Old price crossed out, new price shown
- [ ] Customer reviews + star rating
- [ ] Guarantee, returns, delivery, secure-payment badges
- [ ] FAQ

**Convert**
- [ ] "Buy now" visible straight away, sticky on mobile
- [ ] Urgency ("only X left")
- [ ] Short checkout flow, payment logos, WhatsApp/contact button

## Planned structure

```
src/
  assets/          images, icons
  components/      AnnouncementBar, Hero, Benefits, ProductDetails,
                   Reviews, Guarantees, FAQ, FinalCTA, Footer, Countdown
  data/            product.js (name, prices, images, reviews)
  styles/          global styles, theme colours
  App.jsx
  main.jsx
```

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
```

## Deploy

Netlify → *Add new site* → *Import from GitHub* → `team-q4-calibrage/thanksgiving-1`

- Build command: `npm run build`
- Publish directory: `dist`
- Site name: random, not guessable (e.g. `tg1-xxxx.netlify.app`)

## Rules

- Keep this repo **private**; share the live link only in the team group.
- Commit and push often (commit times prove the work is ours).
- No password on the live site: the organizers must be able to open it.
