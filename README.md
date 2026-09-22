# 📦 Quản Lý Hàng Đi Bán - HUY DUNG

Ứng dụng PWA (Progressive Web App) quản lý hàng hóa, hàng đi bán, hàng trả về và tổng kết doanh thu theo ngày.

## ✨ Tính năng

- **📦 Quản lý hàng hóa**: Thêm/sửa/xóa loại hàng và mặt hàng với đơn giá, đơn vị tính
- **🚚 Hàng đưa đi**: Ghi nhận các mặt hàng đưa đi bán, xem tổng tiền từng loại
- **🔄 Hàng trả về**: Ghi nhận các mặt hàng trả về, xem tổng tiền từng loại
- **📊 Tổng kết theo ngày**: 
  - Xem dữ liệu của bất kỳ ngày nào
  - Tính tiền phải trả = Tổng hàng đi - Tổng hàng về
  - Thống kê doanh thu từng mặt hàng đã bán
- **📱 PWA**: Cài đặt như ứng dụng native, hoạt động offline
- **💾 Dữ liệu lưu trữ local**: Không cần server, dữ liệu lưu trên điện thoại

## 🚀 Cách upload lên GitHub Pages

### Bước 1: Tạo repository trên GitHub
1. Đăng nhập GitHub → Click dấu `+` → `New repository`
2. Đặt tên repo (ví dụ: `huy-dung-quan-ly`)
3. Chọn `Public` → Click `Create repository`

### Bước 2: Upload file
Có 2 cách:

**Cách A: Upload trực tiếp trên web**
1. Vào trang repo vừa tạo
2. Click `Add file` → `Upload files`
3. Kéo thả 3 file: `index.html`, `manifest.json`, `sw.js`
4. Click `Commit changes`

**Cách B: Dùng Git**
```bash
git init
git add index.html manifest.json sw.js
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/huy-dung-quan-ly.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages
1. Vào repo → Click `Settings`
2. Cuộn xuống tìm `Pages` ở menu bên trái
3. `Source`: chọn `Deploy from a branch`
4. `Branch`: chọn `main` / `root` → Click `Save`
5. Chờ 1-2 phút, trang web sẽ hoạt động tại:
   `https://YOUR_USERNAME.github.io/huy-dung-quan-ly/`

## 📱 Cách cài đặt lên điện thoại

### Android (Chrome)
1. Mở trang web bằng Chrome
2. Nhấn menu 3 chấm → `Cài đặt ứng dụng`
3. Hoặc nhấn nút "Cài đặt" xuất hiện trên màn hình
4. Ứng dụng sẽ xuất hiện trên màn hình chính

### iOS (Safari)
1. Mở trang web bằng Safari
2. Nhấn nút chia sẻ `🔗` → `Thêm vào Màn hình chính`
3. Đặt tên → Nhấn `Thêm`

## 📁 Cấu trúc file

```
huy-dung-pwa/
├── index.html      # Giao diện và logic chính
├── manifest.json   # Cấu hình PWA (tên, icon, màu sắc)
├── sw.js           # Service Worker (cache, offline)
└── README.md       # Hướng dẫn này
```

## 🎨 Giao diện

- Giao diện tối hiện đại với gradient màu vàng-xanh lá
- Thiết kế responsive tối ưu cho điện thoại
- Animation mượt mà, hiệu ứng chuyển tab
- Thông báo Toast khi thao tác thành công
- Modal xác nhận trước khi xóa

## 💾 Lưu trữ dữ liệu

Dữ liệu được lưu trong `localStorage` của trình duyệt:
- Danh mục loại hàng, mặt hàng: lưu vĩnh viễn
- Giao dịch hàng đi, hàng về: lưu theo ngày
- Không cần đăng nhập, không cần server

## 📝 Ghi chú

- Khi xóa trình duyệt/cache, dữ liệu sẽ bị mất
- Nên định kỳ chụp màn hình tổng kết để sao lưu
- Dữ liệu chỉ tồn tại trên thiết bị đó, không đồng bộ giữa các máy
