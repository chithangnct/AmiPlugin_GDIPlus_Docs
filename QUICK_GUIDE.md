# GDIPlus Documentation - Quick Guide

## 🚀 Mở Documentation

### Cách Nhanh Nhất
1. Mở File Explorer
2. Vào thư mục: `H:\AmibrokerDLL\GDIPlus\docs\`
3. **Double-click** vào `index.html`

✅ Website sẽ mở trong trình duyệt mặc định của bạn!

---

## 🎨 Các Tính Năng Mới

### 1. Chuyển Đổi Ngôn Ngữ (🌐)

**Vị trí:** Góc phải trên cùng, bên cạnh nút theme

**Cách dùng:**
- Click vào icon 🌐 hoặc chữ "EN"/"VI"
- Ngôn ngữ sẽ chuyển ngay lập tức
- Tất cả nội dung đều được dịch (kể cả comments trong code!)

**Ngôn ngữ hỗ trợ:**
- 🇻🇳 **Tiếng Việt** (mặc định)
- 🇬🇧 **English**

### 2. Code Blocks Với Màu Sắc

Tất cả code hiện có syntax highlighting chuyên nghiệp:

```afl
// Comments: Màu xanh lá, in nghiêng
GDIpResetDefaults();  // Tên hàm: Màu xanh lơ (cyan)

x_value = 100;  // Số: Màu xanh nhạt
text = "Hello"; // String: Màu cam
```

**Màu sắc:**
- 🔵 **Tên hàm**: Cyan (#4EC9B0) - dễ nhận biết
- 🟢 **Comments**: Green (#6A9955) - in nghiêng
- 🟡 **Số**: Light Green (#B5CEA8)
- 🟠 **String**: Orange (#CE9178)

### 3. Nút Copy Code (📋)

**Vị trí:** Góc phải trên mỗi code block

**Cách dùng:**
1. Click vào icon 📋 hoặc chữ "Copy"
2. Code được copy vào clipboard
3. Nút sẽ hiển thị "Copied!" trong 2 giây

### 4. Icons Mới (Lucide)

Tất cả icons đã được thay bằng **Lucide Icons**:
- ✅ Thiết kế đơn sắc, chuyên nghiệp
- ✅ Hiệu ứng hover mượt mà
- ✅ Nhất quán trên toàn site

### 5. Font Mới: Inter

Website giờ dùng **Inter font** - rất dễ đọc và hiện đại:
- ✅ Text: Inter (Google Fonts)
- ✅ Code: JetBrains Mono / Fira Code

---

## 📖 Hàm Mới: GDIpSmoothLineXY

### Tính Năng Mới v2.0

```afl
GDIpSmoothLineXY(xstr, ystr, smoothRatio, dotMode)
```

**Mô tả:** Vẽ đường cong mượt từ 2 chuỗi tọa độ X và Y riêng biệt

**Tham số:**
- `xstr`: Chuỗi X "x1,x2,x3,..."
- `ystr`: Chuỗi Y "y1,y2,y3,..."
- `smoothRatio`: Độ mượt (0.0-1.0)
- `dotMode`: Hiện điểm (0/1)

**Ví dụ:**
```afl
// Tiếng Việt mode
// Đường cong mượt với X và Y riêng biệt
GDIpSelectPenColor(colorRed, 255, 4);
x_coords = "100,200,300,400,500";
y_coords = "200,150,180,120,160";
GDIpSmoothLineXY(x_coords, y_coords, 0.8, 1);

// English mode
// Smooth curve with separate X and Y
GDIpSelectPenColor(colorRed, 255, 4);
x_coords = "100,200,300,400,500";
y_coords = "200,150,180,120,160";
GDIpSmoothLineXY(x_coords, y_coords, 0.8, 1);
```

**Lợi ích:**
- ✅ Linh hoạt hơn khi X và Y tính toán riêng
- ✅ Dễ dàng vẽ chart từ AmiBroker arrays
- ✅ Tương thích với `WriteVal()` và các hàm khác

---

## 🎯 Các Phím Tắt

| Phím | Chức Năng |
|------|-----------|
| `Ctrl/Cmd + K` | Focus vào ô tìm kiếm |
| `Ctrl/Cmd + /` | Bật/tắt sidebar (mobile) |
| `Esc` | Xóa ô tìm kiếm |

---

## 🌓 Dark/Light Theme

**Vị trí:** Góc phải trên, icon ☀️/🌙

**Cách dùng:**
- Click để chuyển đổi theme
- Theme được lưu tự động
- Code highlighting tối ưu cho cả 2 themes

---

## 📱 Responsive Design

Website hoạt động hoàn hảo trên:
- 💻 **Desktop**: Full sidebar navigation
- 📱 **Tablet**: Tối ưu spacing
- 📱 **Mobile**: Menu hamburger

**Mobile:**
- Click icon ≡ (3 gạch) góc trái trên để mở menu
- Click ra ngoài để đóng menu
- Tất cả tính năng đều hoạt động

---

## 🔍 Tìm Kiếm

**Vị trí:** Ô search ở đầu sidebar

**Cách dùng:**
1. Click vào ô search (hoặc `Ctrl+K`)
2. Gõ từ khóa (ví dụ: "gradient", "circle")
3. Kết quả hiển thị ngay lập tức
4. Press `Esc` để xóa

**Tips:**
- Tìm theo tên hàm: "GDIpRectangle"
- Tìm theo tính năng: "transparency", "cache"
- Tìm theo loại: "chart", "polygon"

---

## 📚 Cấu Trúc Documentation

### Getting Started
- 📖 Giới Thiệu - Tổng quan về plugin
- 💾 Cài Đặt - Hướng dẫn cài đặt
- ⚡ Quick Start - Ví dụ nhanh

### Core Functions
- 🔄 Quản Lý Trạng Thái
- 🎨 Màu Sắc
- 🌈 Gradient Brushes
- 🔤 Font Settings

### Drawing Functions
- ▭ Hình Chữ Nhật
- ○ Hình Tròn & Elip
- ╱ Đường Thẳng
- ⬟ Đa Giác
- T Vẽ Text
- 〰 Smooth Lines (NEW!)

### Advanced Charts
- ◔ Pie & Donut
- ⌚ Gauge Charts
- ✧ Radar Charts
- 📊 Area Charts

### Examples & Reference
- 📚 Ví Dụ Tổng Hợp
- 🎨 Color Constants
- 🔧 Khắc Phục Sự Cố
- ⭐ Best Practices

---

## 💡 Tips & Tricks

### 1. Bookmark Website
- **Chrome**: `Ctrl+D`
- **Firefox**: `Ctrl+D`
- **Edge**: `Ctrl+D`

### 2. Copy Code Nhanh
- Hover vào code block
- Click nút "Copy" góc phải
- Paste vào AmiBroker: `Ctrl+V`

### 3. Chuyển Ngôn Ngữ Nhanh
- Nhớ vị trí nút 🌐 góc phải
- 1 click = chuyển ngôn ngữ
- Comments trong code cũng đổi theo!

### 4. Tìm Hàm Nhanh
- `Ctrl+K` → Gõ tên hàm
- Ví dụ: "smooth" → Tìm thấy `GDIpSmoothLine` và `GDIpSmoothLineXY`

### 5. Dark Mode Cho Đọc Tối
- Click icon 🌙
- Dễ đọc hơn ban đêm
- Code highlighting vẫn rõ ràng

---

## 🆘 Troubleshooting

### Website không hiển thị đúng?
1. Refresh: `Ctrl+F5` (xóa cache)
2. Thử trình duyệt khác
3. Check JavaScript có bật không

### Ngôn ngữ không đổi?
1. Check JavaScript console (F12)
2. Xóa localStorage: `localStorage.clear()`
3. Refresh lại page

### Code không copy được?
1. Check quyền clipboard của browser
2. Thử click lại nút Copy
3. Fallback: Select text + `Ctrl+C`

### Icons không hiển thị?
1. Check internet connection (Inter font từ Google)
2. Lucide icons là inline SVG (không cần internet)
3. Refresh page

---

## 📊 So Sánh Versions

### v1.0 → v2.0

| Feature | v1.0 | v2.0 |
|---------|------|------|
| Icons | Emoji | Lucide SVG |
| Font | System | Inter + JetBrains Mono |
| Code Highlighting | Basic | Advanced AFL |
| Languages | Vietnamese only | Vietnamese + English |
| Copy Button | ❌ | ✅ |
| GDIpSmoothLineXY | ❌ | ✅ |
| Comment Translation | ❌ | ✅ |

---

## 🎓 Học Nhanh

### 5 Phút Đầu Tiên:
1. ✅ Mở `index.html`
2. ✅ Đọc phần "Giới Thiệu"
3. ✅ Xem "Quick Start"
4. ✅ Thử copy code example
5. ✅ Test trong AmiBroker

### 15 Phút Tiếp Theo:
1. ✅ Đọc "State Management"
2. ✅ Học "Colors & Gradients"
3. ✅ Xem "Drawing Functions"
4. ✅ Thử vẽ hình đơn giản
5. ✅ Kiểm tra kết quả

### 1 Giờ Hoàn Chỉnh:
1. ✅ Đọc hết tất cả sections
2. ✅ Xem tất cả examples
3. ✅ Thử all drawing functions
4. ✅ Làm chart phức tạp
5. ✅ Master GDIPlus! 🎉

---

## 🌟 Pro Tips

### Tip 1: Sử Dụng Code Templates
Copy code examples và modify theo nhu cầu:
```afl
// Template: Drawing với gradient
GDIpResetDefaults();
GDIpSelectLinearGradientBrush(color1, 255, color2, 255, 90);
GDIpSelectPenColor(colorWhite, 255, 2);
GDIp[YourShape](...);  // Thay bằng hình bạn muốn
```

### Tip 2: Comment Code Bằng Tiếng Việt
Khi copy code từ documentation (EN mode), comment sẽ là tiếng Anh. Switch về VI mode để có comments tiếng Việt!

### Tip 3: Bookmark Hay Dùng
- `#quickstart` - Quick Start
- `#colors` - Colors
- `#gradients` - Gradients
- `#examples` - Examples

### Tip 4: Test Trên Chart Nhỏ
Khi học hàm mới, test trên chart nhỏ (size 400x300) để dễ debug.

### Tip 5: Dùng GDIpResetDefaults()
**Luôn luôn** gọi `GDIpResetDefaults()` ở đầu AFL file để tránh conflict!

---

## 📞 Support

Gặp vấn đề? Tham khảo:
- 📖 [Troubleshooting Section](#troubleshooting) trong docs
- 📚 [Best Practices](#best-practices) section
- 🔧 [Color Constants](#color-constants) reference

---

**Chúc bạn vẽ đồ họa đẹp với GDIPlus! 🎨**

© 2025 GDIPlus Plugin Documentation
