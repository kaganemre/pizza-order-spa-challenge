# 🍕 Pizza Ordering App  
**React + Vite** ile geliştirilmiş, kullanıcıların pizza siparişi verebildiği, modern ve etkileşimli bir SPA uygulamasıdır.

---

## 🚀 Proje Özeti  

Kullanıcıların pizza boyutu, hamur ve ek malzemeleri seçerek sipariş oluşturabildiği bir **tek sayfa uygulamasıdır (SPA)**.  
Form doğrulama ve sahte API entegrasyonu (mock API) kullanılarak **gerçek bir sipariş akışı** simüle edilir.  

🎯 **Amaç:**  
Modern React yapısıyla kullanıcı dostu form ve state yönetimi örneği sunmak.

---

## 🧱 Kullanılan Teknolojiler  

| Teknoloji | Açıklama |
|------------|-----------|
|⚛️ **React** | Kullanıcı arayüzü oluşturma |
| 🚀 **Vite** | Hızlı geliştirme ortamı ve derleme aracı |
| 🔗 **Axios** | HTTP istekleri |
| 🌐 **React Router** | Sayfa yönlendirmeleri |
| 💅 **CSS / SASS** | Stil düzeni |
| 📜 **JavaScript (ES6+)** | Geliştirme dili |

---

## 🗂 Proje Yapısı
 
```
📦 root
├── 📁 images/
├── 📁 node_modules/
├── 📁 public/
│   └── 🎨 workintech.svg
├── 📁 sample-interfaces/
│   ├── 📁 iteration-1/
│   └── 📁 iteration-2/
├── 📁 src/
│   ├── 📁 assets/
│   │   └── ⚛️ react.svg
│   ├── 📁 components/
│   │   ├── 🧱 Footer.jsx
│   │   ├── 🧭 Header.jsx
│   │   ├── 🧾 OrderForm.jsx
│   │   └── 🎉 Success.jsx
│   ├── 🎨 index.css
│   ├── ⚙️ App.jsx
│   └── 🚀 main.jsx
├── ⚙️ vite.config.js
├── 🧾 package.json
├── 🧾 package-lock.json
├── 🧩 .gitignore
├── 🧾 LICENSE
├── 🏠 index.html
└── 📘 README.md
```

---

## 🧩 Bileşenler & Mimari

### 🧱 Temel Yapı

Header → Logo ve navigasyon

OrderForm → Form bileşeni (isim, boyut, hamur, malzeme, özel not)

Success → Sipariş özeti gösterimi

###	🧭 Veri Akışı

Form verilerinin yönetimi için React'ın useState hook'u kullanılmıştır.

Submit işlemi sonrası form verisi `onSubmit` prop’u aracılığıyla `App.jsx`’e aktarılır.

onSubmit fonksiyonu, form verilerini mock API'ye axios.post("https://reqres.in/api/pizza", payload) ile gönderir.

Başarılı yanıt alındığında kullanıcı `/success`  sayfasına yönlendirilir ve `Success` bileşeni render edilir.

---

## 🧭 Veri Yönetimi Notu

Bu projede form verisi OrderForm bileşeninden App.jsx'e prop lifting yöntemiyle aktarılmıştır. Uygulama küçük ölçekli olduğu ve yalnızca tek yönlü veri akışı gerektiği için global state yönetimi tercih edilmemiştir.

Daha büyük projelerde Context API veya Redux Toolkit gibi çözümlerle prop drilling önlenebilir ve daha sürdürülebilir bir yapı kurulabilir.

---

## 📦 Kurulum ve Çalıştırma

### Bağımlılıkları yükleme:

```bash
npm install
```

### Uygulamayı çalıştırma:

```bash
npm run dev
```

---

## 🌐 Canlı

🔗 [Canlı Uygulama - Vercel](https://fsweb-s8-challenge-pizza-mauve.vercel.app/)

---

## 📄 Lisans

Bu proje, Workintech tarafından sunulan [fsweb-s8-challenge-pizza](https://github.com/Workintech/fsweb-s8-challenge-pizza) kriterlerine uygun şekilde, **Figma tasarımı referans alınarak sıfırdan geliştirilmiştir.**  
Kodlar tamamen tarafımdan yazılmıştır.  
MIT lisansı ile paylaşılmıştır.
