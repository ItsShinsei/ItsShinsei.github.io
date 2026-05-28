# 🌐 Portfolio — Mushadiq Novarahman Erwinsyah

Website portofolio pribadi statis (single-page) yang clean, modern, dan minimalis.

## 📁 Struktur File

```
portfolio/
├── index.html     # Halaman utama
├── style.css      # Stylesheet lengkap
├── main.js        # JavaScript interaksi ringan
└── README.md      # Dokumentasi ini
```

## 🚀 Cara Deploy

### 1. GitHub Pages (Gratis & Mudah)

1. **Buat repository baru** di GitHub (contoh: `portfolio`)
2. **Upload semua file** (`index.html`, `style.css`, `main.js`) ke repository
3. Buka **Settings → Pages**
4. Di bagian *Source*, pilih branch `main` → folder `/ (root)`
5. Klik **Save** — website akan aktif di:
   ```
   https://username.github.io/portfolio
   ```

### 2. Deploy via Git (Terminal)

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

Lalu aktifkan GitHub Pages di Settings seperti langkah di atas.

### 3. Streamlit Community Cloud

> Catatan: Streamlit dirancang untuk aplikasi Python, bukan HTML statis.
> Cara termudah adalah membungkus HTML-mu dengan `streamlit.components`.

**Langkah-langkah:**

1. Install Streamlit:
   ```bash
   pip install streamlit
   ```

2. Buat file `app.py` di folder yang sama:
   ```python
   import streamlit as st

   st.set_page_config(
       page_title="Mushadiq Novarahman — Portfolio",
       page_icon="🌐",
       layout="wide"
   )

   # Baca file HTML
   with open("index.html", "r", encoding="utf-8") as f:
       html_content = f.read()

   # Render HTML di Streamlit
   st.components.v1.html(html_content, height=6000, scrolling=True)
   ```

3. Tambahkan `requirements.txt`:
   ```
   streamlit>=1.28.0
   ```

4. Push ke GitHub, lalu buka [share.streamlit.io](https://share.streamlit.io) dan deploy dari repo-mu.

---

## ✏️ Cara Kustomisasi

| Yang Ingin Diubah | Lokasi |
|---|---|
| Nama, tagline | `index.html` → bagian `#hero` |
| Email / GitHub / Instagram | `index.html` → bagian `#contact`, ganti `href="#"` |
| Link GitHub proyek | `index.html` → `.project-links a`, ganti `href="#"` |
| Warna aksen | `style.css` → variabel `--accent` dan `--accent-2` |
| Font | `index.html` → tag `<link>` Google Fonts & `style.css` `--font-*` |
| Tambah proyek baru | Copy-paste blok `.project-card` di `index.html` |
| Tambah sertifikasi | Copy-paste blok `.cert-card` di `index.html` |

## 🎨 Desain

- **Tema**: Dark mode elegan
- **Font**: DM Serif Display (judul) + DM Sans (body)
- **Warna Aksen**: Ungu digital (`#7c6cfc`) + Teal (`#5de0c5`)
- **Animasi**: Scroll reveal, hero blob, smooth scroll

## 📬 Kontak

Update link berikut di `index.html`:

```html
<!-- Email -->
<a href="mailto:emailmu@gmail.com" ...>

<!-- GitHub -->
<a href="https://github.com/usernamemu" ...>

<!-- Instagram -->
<a href="https://instagram.com/usernamemu" ...>
```

---

> Dibuat dengan ❤️ — siap push & deploy!
