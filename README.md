# DIANA STORE

Ini adalah proyek e-commerce modern yang dibuat dengan React dan TailwindCSS.

## Fitur
- Beranda dengan daftar produk
- Halaman detail produk
- Keranjang belanja fungsional
- Manajemen state keranjang dengan Context API & localStorage
- Desain responsif dengan TailwindCSS

## Cara Menjalankan Secara Lokal
1. Clone repositori ini.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
4. Buka `http://localhost:5173` (atau port yang ditampilkan di terminal) di browser Anda.

## Cara Deploy ke VPS (Ubuntu)

Berikut adalah langkah-langkah untuk mendeploy aplikasi ini ke server VPS yang menjalankan Ubuntu.

### 1. Persiapan Server
Pastikan Anda memiliki `Node.js` dan `npm` terinstal di VPS Anda. Jika belum, instal menggunakan perintah berikut:
```bash
# Update package list
sudo apt update

# Install Node.js (versi LTS direkomendasikan) dan npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Upload File Proyek
Upload semua file proyek ke direktori di VPS Anda, misalnya `/var/www/diana-store`. Anda bisa menggunakan `scp` atau `rsync` untuk ini.

### 3. Build Aplikasi
Masuk ke direktori proyek dan build aplikasi React:
```bash
cd /var/www/diana-store
npm install
npm run build
```
Perintah ini akan membuat folder `dist` yang berisi file statis yang siap untuk di-serve.

### 4. Serve Aplikasi dengan `serve`
Cara termudah untuk men-serve file statis dari folder `dist` adalah dengan menggunakan paket `serve`.

1. **Instal `serve` secara global:**
   ```bash
   npm install -g serve
   ```

2. **Jalankan server:**
   ```bash
   serve -s dist
   ```
   Secara default, server akan berjalan di port 3000. `-s` memastikan bahwa semua permintaan akan diarahkan ke `index.html`, yang penting untuk aplikasi single-page (SPA) seperti React.

### 5. (Opsional) Menjalankan Server di Latar Belakang dengan `pm2`
Agar aplikasi tetap berjalan bahkan setelah Anda menutup terminal SSH, gunakan `pm2`.

1. **Instal `pm2` secara global:**
   ```bash
   npm install -g pm2
   ```

2. **Jalankan aplikasi menggunakan `pm2`:**
   ```bash
   pm2 serve dist --spa --name "diana-store"
   ```
   - `pm2 serve dist`: Men-serve konten dari folder `dist`.
   - `--spa`: Mengarahkan semua rute ke `index.html`.
   - `--name "diana-store"`: Memberi nama pada proses agar mudah dikelola.

Aplikasi Anda sekarang akan berjalan di latar belakang. Anda bisa mengelolanya dengan perintah seperti `pm2 list`, `pm2 stop diana-store`, `pm2 restart diana-store`.
