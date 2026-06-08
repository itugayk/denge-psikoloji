# Denge Psikoloji & Terapi

Sakin, güven veren ve **gizlilik odaklı** bir psikolog / terapi merkezi demo sitesi.
Astro + Tailwind CSS + GSAP ile geliştirilmiştir.

> Premium portfolyo / demo çalışması · `psikolog.demo.dijifa.com`

## Özellikler

- **Sakinleştirici tasarım** — adaçayı yeşili + sıcak bej + toprak aksan paleti
- **Tipografi** — başlıklar Fraunces (serif), gövde Inter
- **Yumuşak animasyonlar** — GSAP + ScrollTrigger ile sakin reveal'lar (agresif değil)
- **Erişilebilirlik** — `prefers-reduced-motion`, klavye odağı, semantik HTML, skip link
- **SEO** — JSON-LD (`Psychologist` / `MedicalBusiness` + `FAQPage`), Open Graph, sitemap
- **Gizlilik vurgusu** — mahremiyet notlu randevu formu
- **7 sayfa** — Ana Sayfa, Hakkımızda, Uzmanlık Alanları, Terapi Yaklaşımı, SSS, Randevu, İletişim

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # build çıktısını önizle
```

## Yapı

```
src/
  components/   Header, Footer, Hero, Accordion, kartlar, form…
  data/site.ts  Tüm içerik (nav, uzmanlık alanları, SSS) tek yerde
  layouts/      Layout.astro — SEO + JSON-LD + font
  pages/        7 sayfa + 404
  scripts/      motion.ts — GSAP reveal/akordeon/mobil menü
  styles/       global.css — tasarım token'ları
```

## Deploy (Coolify)

Repo bir `Dockerfile` içerir (multi-stage: Astro build → nginx serve).

1. Coolify'da yeni kaynak → bu repo, branch `demo/psikolog`
2. Build pack: **Dockerfile**
3. Port: `80`
4. Domain: `psikolog.demo.dijifa.com`

İçerik tamamen kurgusaldır; gerçek bir sağlık hizmeti sunmaz.
