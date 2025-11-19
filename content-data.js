// ============================================
// GDIPlus Functions Data
// All functions organized by category
// ============================================

const functionsData = {
  stateManagement: [
    {
      name: "GDIpResetDefaults",
      signature: "GDIpResetDefaults()",
      descVi: "Reset tất cả cài đặt về mặc định.",
      descEn: "Reset all settings to defaults.",
      params: [],
      returns: null,
      defaultState: {
        brush: "Trắng, alpha = 255 (solid)",
        pen: "Đen, alpha = 255, độ dày = 1",
        font: "Arial, 12pt"
      },
      exampleVi: `<span class="function">GDIpResetDefaults</span>();  <span class="comment">// Bắt đầu với cài đặt sạch</span>`,
      exampleEn: `<span class="function">GDIpResetDefaults</span>();  <span class="comment">// Start with clean settings</span>`,
      notes: "Khuyến nghị: Gọi hàm này ở đầu mỗi AFL file để đảm bảo không bị kế thừa cài đặt từ file khác."
    },
    {
      name: "GDIpClearCache",
      signature: "GDIpClearCache()",
      descVi: "Xóa tất cả file PNG cache trong thư mục temp.",
      descEn: "Clear all PNG cache files in temp directory.",
      params: [],
      returns: "Số lượng file đã xóa",
      exampleVi: `filesDeleted = <span class="function">GDIpClearCache</span>();
<span class="function">printf</span>(<span class="string">"Đã xóa %d files cache"</span>, filesDeleted);`,
      exampleEn: `filesDeleted = <span class="function">GDIpClearCache</span>();
<span class="function">printf</span>(<span class="string">"Deleted %d cache files"</span>, filesDeleted);`,
      notes: "Khi nào cần dùng: Sau khi cập nhật plugin, Khi ảnh hiển thị không đúng, Để giải phóng dung lượng ổ cứng"
    }
  ],

  colors: [
    {
      name: "GDIpSelectBrushColor",
      signature: "GDIpSelectBrushColor(color, alpha)",
      descVi: "Chọn màu tô đầy (brush) dạng solid.",
      descEn: "Select solid brush color.",
      params: [
        { name: "color", desc: "Mã màu - có thể dùng ColorRGB(r, g, b) hoặc hằng số màu AmiBroker" },
        { name: "alpha", desc: "Độ trong suốt (0-255), 0 = trong suốt hoàn toàn, 255 = đặc" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Dùng ColorRGB</span>
<span class="function">GDIpSelectBrushColor</span>(<span class="function">ColorRGB</span>(<span class="number">255</span>, <span class="number">0</span>, <span class="number">0</span>), <span class="number">200</span>);  <span class="comment">// Đỏ, alpha 200</span>

<span class="comment">// Dùng hằng số màu</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);      <span class="comment">// Đỏ, alpha 200</span>
<span class="function">GDIpSelectBrushColor</span>(colorYellow, <span class="number">128</span>);   <span class="comment">// Vàng, nửa trong suốt</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">255</span>);     <span class="comment">// Xanh dương, đặc</span>`,
      exampleEn: `<span class="comment">// Using ColorRGB</span>
<span class="function">GDIpSelectBrushColor</span>(<span class="function">ColorRGB</span>(<span class="number">255</span>, <span class="number">0</span>, <span class="number">0</span>), <span class="number">200</span>);  <span class="comment">// Red, alpha 200</span>

<span class="comment">// Using color constants</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);      <span class="comment">// Red, alpha 200</span>
<span class="function">GDIpSelectBrushColor</span>(colorYellow, <span class="number">128</span>);   <span class="comment">// Yellow, semi-transparent</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">255</span>);     <span class="comment">// Blue, solid</span>`
    },
    {
      name: "GDIpSelectPenColor",
      signature: "GDIpSelectPenColor(color, alpha, width)",
      descVi: "Chọn màu và độ dày viền (pen).",
      descEn: "Select pen color and width.",
      params: [
        { name: "color", desc: "Mã màu" },
        { name: "alpha", desc: "Độ trong suốt (0-255)" },
        { name: "width", desc: "Độ dày viền (pixels)" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Viền đen, đặc, độ dày 2 pixels</span>
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">255</span>, <span class="number">2</span>);

<span class="comment">// Viền vàng, trong suốt một phần, độ dày 3 pixels</span>
<span class="function">GDIpSelectPenColor</span>(colorYellow, <span class="number">150</span>, <span class="number">3</span>);

<span class="comment">// Không viền (alpha = 0)</span>
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">0</span>, <span class="number">1</span>);`,
      exampleEn: `<span class="comment">// Black border, solid, 2 pixels width</span>
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">255</span>, <span class="number">2</span>);

<span class="comment">// Yellow border, semi-transparent, 3 pixels width</span>
<span class="function">GDIpSelectPenColor</span>(colorYellow, <span class="number">150</span>, <span class="number">3</span>);

<span class="comment">// No border (alpha = 0)</span>
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">0</span>, <span class="number">1</span>);`
    }
  ],

  gradients: [
    {
      name: "GDIpSelectLinearGradientBrush",
      signature: "GDIpSelectLinearGradientBrush(color1, alpha1, color2, alpha2, angle)",
      descVi: "Chọn gradient tuyến tính (chuyển màu theo đường thẳng).",
      descEn: "Select linear gradient brush (color transition along a straight line).",
      params: [
        { name: "color1", desc: "Màu bắt đầu / Start color" },
        { name: "alpha1", desc: "Độ trong suốt màu bắt đầu (0-255) / Start alpha" },
        { name: "color2", desc: "Màu kết thúc / End color" },
        { name: "alpha2", desc: "Độ trong suốt màu kết thúc (0-255) / End alpha" },
        { name: "angle", desc: "Góc chuyển màu (độ) / Gradient angle (degrees): 0°=ngang, 90°=dọc, 45°=chéo" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Gradient ngang: đỏ sang vàng</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorYellow, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Gradient dọc: xanh lá sang xanh dương</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorGreen, <span class="number">200</span>, colorBlue, <span class="number">200</span>, <span class="number">90</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">200</span>, <span class="number">80</span>);`,
      exampleEn: `<span class="comment">// Horizontal gradient: red to yellow</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorYellow, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Vertical gradient: green to blue</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorGreen, <span class="number">200</span>, colorBlue, <span class="number">200</span>, <span class="number">90</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">200</span>, <span class="number">80</span>);`
    },
    {
      name: "GDIpSelectRadialGradientBrush",
      signature: "GDIpSelectRadialGradientBrush(color1, alpha1, color2, alpha2)",
      descVi: "Chọn gradient hướng tâm (chuyển màu từ tâm ra ngoài).",
      descEn: "Select radial gradient brush (color transition from center outward).",
      params: [
        { name: "color1", desc: "Màu ở tâm / Center color" },
        { name: "alpha1", desc: "Độ trong suốt màu tâm (0-255) / Center alpha" },
        { name: "color2", desc: "Màu ở viền ngoài / Outer edge color" },
        { name: "alpha2", desc: "Độ trong suốt màu viền (0-255) / Outer alpha" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Gradient tâm trắng, viền xanh dương</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorBlue, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">150</span>, <span class="number">100</span>);

<span class="comment">// Gradient tâm vàng, viền đỏ (hiệu ứng mặt trời)</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorYellow, <span class="number">255</span>, colorRed, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">300</span>, <span class="number">150</span>, <span class="number">80</span>);`,
      exampleEn: `<span class="comment">// Gradient white center, blue edge</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorBlue, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">150</span>, <span class="number">100</span>);

<span class="comment">// Gradient yellow center, red edge (sun effect)</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorYellow, <span class="number">255</span>, colorRed, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">300</span>, <span class="number">150</span>, <span class="number">80</span>);`
    },
    {
      name: "GDIpSelectSliceGradientBrush",
      signature: "GDIpSelectSliceGradientBrush(color1, alpha1, color2, alpha2, angle)",
      descVi: "Chọn gradient slice - loại gradient đặc biệt cho hiệu ứng tự nhiên.",
      descEn: "Select slice gradient brush - special gradient for natural effects.",
      params: [
        { name: "color1", desc: "Màu bắt đầu / Start color" },
        { name: "alpha1", desc: "Độ trong suốt màu bắt đầu (0-255)" },
        { name: "color2", desc: "Màu kết thúc / End color" },
        { name: "alpha2", desc: "Độ trong suốt màu kết thúc (0-255)" },
        { name: "angle", desc: "Góc gradient (0-360°)" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Slice gradient cho Area Chart</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpAreaChart</span>(<span class="string">"100,180,200,120,300,200,400,80"</span>, <span class="number">250</span>, <span class="number">0.8</span>, <span class="number">1</span>);

<span class="comment">// Slice gradient cho Rectangle với góc 45°</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorGreen, <span class="number">220</span>, colorYellow, <span class="number">220</span>, <span class="number">45</span>);
<span class="function">GDIpRectangle</span>(<span class="number">100</span>, <span class="number">300</span>, <span class="number">300</span>, <span class="number">200</span>);`,
      exampleEn: `<span class="comment">// Slice gradient for Area Chart</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpAreaChart</span>(<span class="string">"100,180,200,120,300,200,400,80"</span>, <span class="number">250</span>, <span class="number">0.8</span>, <span class="number">1</span>);

<span class="comment">// Slice gradient for Rectangle with 45° angle</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorGreen, <span class="number">220</span>, colorYellow, <span class="number">220</span>, <span class="number">45</span>);
<span class="function">GDIpRectangle</span>(<span class="number">100</span>, <span class="number">300</span>, <span class="number">300</span>, <span class="number">200</span>);`
    },
    {
      name: "GDIpSelectLinearGradientColor",
      signature: "GDIpSelectLinearGradientColor(colorString, alphaString, positionString, angle)",
      descVi: "Chọn gradient tuyến tính với nhiều màu và vị trí tùy chỉnh.",
      descEn: "Select linear gradient with multiple colors and custom positions.",
      params: [
        { name: "colorString", desc: "Chuỗi màu phân cách bằng dấu phẩy (hỗ trợ ColorRGB format)" },
        { name: "alphaString", desc: "Chuỗi alpha tương ứng" },
        { name: "positionString", desc: "Chuỗi vị trí (0.0-1.0)" },
        { name: "angle", desc: "Góc gradient" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Gradient 3 màu: đỏ -> vàng -> xanh</span>
<span class="function">GDIpSelectLinearGradientColor</span>(<span class="string">"ColorRGB(255,0,0),ColorRGB(255,255,0),ColorRGB(0,255,0)"</span>,
                              <span class="string">"255,255,255"</span>,
                              <span class="string">"0.0,0.5,1.0"</span>,
                              <span class="number">90</span>);
<span class="function">GDIpRectangle</span>(<span class="number">100</span>, <span class="number">100</span>, <span class="number">300</span>, <span class="number">150</span>);`,
      exampleEn: `<span class="comment">// 3-color gradient: red -> yellow -> green</span>
<span class="function">GDIpSelectLinearGradientColor</span>(<span class="string">"ColorRGB(255,0,0),ColorRGB(255,255,0),ColorRGB(0,255,0)"</span>,
                              <span class="string">"255,255,255"</span>,
                              <span class="string">"0.0,0.5,1.0"</span>,
                              <span class="number">90</span>);
<span class="function">GDIpRectangle</span>(<span class="number">100</span>, <span class="number">100</span>, <span class="number">300</span>, <span class="number">150</span>);`
    }
  ],

  fonts: [
    {
      name: "GDIpSelectFont",
      signature: "GDIpSelectFont(fontName, size, bold, italic)",
      descVi: "Chọn font chữ cho hàm vẽ text.",
      descEn: "Select font for text drawing functions.",
      params: [
        { name: "fontName", desc: "Tên font (string), ví dụ: \"Arial\", \"Times New Roman\", \"Consolas\"" },
        { name: "size", desc: "Kích thước font (points)" },
        { name: "bold", desc: "True = in đậm, False = bình thường / True = bold, False = normal" },
        { name: "italic", desc: "True = in nghiêng, False = thẳng / True = italic, False = straight" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Font Arial, 24pt, đậm, không nghiêng</span>
<span class="function">GDIpSelectFont</span>(<span class="string">"Arial"</span>, <span class="number">24</span>, True, False);
<span class="function">GDIpText</span>(<span class="string">"Hello World"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">24</span>);

<span class="comment">// Font Times New Roman, 32pt, không đậm, nghiêng</span>
<span class="function">GDIpSelectFont</span>(<span class="string">"Times New Roman"</span>, <span class="number">32</span>, False, True);
<span class="function">GDIpText</span>(<span class="string">"Italic Text"</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">32</span>);`,
      exampleEn: `<span class="comment">// Arial font, 24pt, bold, not italic</span>
<span class="function">GDIpSelectFont</span>(<span class="string">"Arial"</span>, <span class="number">24</span>, True, False);
<span class="function">GDIpText</span>(<span class="string">"Hello World"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">24</span>);

<span class="comment">// Times New Roman, 32pt, not bold, italic</span>
<span class="function">GDIpSelectFont</span>(<span class="string">"Times New Roman"</span>, <span class="number">32</span>, False, True);
<span class="function">GDIpText</span>(<span class="string">"Italic Text"</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">32</span>);`
    }
  ],

  shapes: [
    {
      name: "GDIpRectangle",
      signature: "GDIpRectangle(x, y, width, height)",
      descVi: "Vẽ hình chữ nhật.",
      descEn: "Draw rectangle.",
      params: [
        { name: "x, y", desc: "Tọa độ góc trên-trái / Top-left coordinates" },
        { name: "width", desc: "Chiều rộng / Width" },
        { name: "height", desc: "Chiều cao / Height" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Hình chữ nhật solid</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Hình chữ nhật gradient ngang</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorGold, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">200</span>, <span class="number">200</span>, <span class="number">100</span>);`,
      exampleEn: `<span class="comment">// Solid rectangle</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Rectangle with horizontal gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorGold, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">200</span>, <span class="number">200</span>, <span class="number">100</span>);`
    },
    {
      name: "GDIpRoundRect",
      signature: "GDIpRoundRect(x, y, width, height, cornerRadius)",
      descVi: "Vẽ hình chữ nhật bo góc tròn.",
      descEn: "Draw rounded rectangle.",
      params: [
        { name: "x, y", desc: "Tọa độ góc trên-trái / Top-left coordinates" },
        { name: "width", desc: "Chiều rộng / Width" },
        { name: "height", desc: "Chiều cao / Height" },
        { name: "cornerRadius", desc: "Bán kính bo góc (pixels) / Corner radius" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Bo góc nhẹ (10px)</span>
<span class="function">GDIpSelectBrushColor</span>(colorGreen, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpRoundRect</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>, <span class="number">10</span>);

<span class="comment">// Bo góc mạnh (30px) với gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorViolet, <span class="number">200</span>, colorTeal, <span class="number">200</span>, <span class="number">45</span>);
<span class="function">GDIpRoundRect</span>(<span class="number">300</span>, <span class="number">50</span>, <span class="number">180</span>, <span class="number">120</span>, <span class="number">30</span>);`,
      exampleEn: `<span class="comment">// Light rounding (10px)</span>
<span class="function">GDIpSelectBrushColor</span>(colorGreen, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorBlack, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpRoundRect</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>, <span class="number">10</span>);

<span class="comment">// Heavy rounding (30px) with gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorViolet, <span class="number">200</span>, colorTeal, <span class="number">200</span>, <span class="number">45</span>);
<span class="function">GDIpRoundRect</span>(<span class="number">300</span>, <span class="number">50</span>, <span class="number">180</span>, <span class="number">120</span>, <span class="number">30</span>);`
    },
    {
      name: "GDIpCircle",
      signature: "GDIpCircle(centerX, centerY, radius)",
      descVi: "Vẽ hình tròn.",
      descEn: "Draw circle.",
      params: [
        { name: "centerX, centerY", desc: "Tọa độ tâm / Center coordinates" },
        { name: "radius", desc: "Bán kính / Radius" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Hình tròn solid</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">150</span>, <span class="number">80</span>);

<span class="comment">// Hình tròn gradient radial (hiệu ứng cầu 3D)</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorBlue, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">350</span>, <span class="number">150</span>, <span class="number">80</span>);`,
      exampleEn: `<span class="comment">// Solid circle</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">150</span>, <span class="number">80</span>);

<span class="comment">// Circle with radial gradient (3D sphere effect)</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorBlue, <span class="number">255</span>);
<span class="function">GDIpCircle</span>(<span class="number">350</span>, <span class="number">150</span>, <span class="number">80</span>);`
    },
    {
      name: "GDIpEllipse",
      signature: "GDIpEllipse(x, y, width, height)",
      descVi: "Vẽ hình elip (hình bầu dục).",
      descEn: "Draw ellipse (oval).",
      params: [
        { name: "x, y", desc: "Tọa độ góc trên-trái của hình chữ nhật bao / Top-left coordinates of bounding rectangle" },
        { name: "width", desc: "Chiều rộng / Width" },
        { name: "height", desc: "Chiều cao / Height" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Elip nằm ngang</span>
<span class="function">GDIpSelectBrushColor</span>(colorGold, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorBrown, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpEllipse</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Elip đứng dọc với gradient</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorPurple, <span class="number">255</span>);
<span class="function">GDIpEllipse</span>(<span class="number">300</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">200</span>);`,
      exampleEn: `<span class="comment">// Horizontal ellipse</span>
<span class="function">GDIpSelectBrushColor</span>(colorGold, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorBrown, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpEllipse</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Vertical ellipse with gradient</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorPurple, <span class="number">255</span>);
<span class="function">GDIpEllipse</span>(<span class="number">300</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">200</span>);`
    },
    {
      name: "GDIpLine",
      signature: "GDIpLine(x1, y1, x2, y2)",
      descVi: "Vẽ đường thẳng.",
      descEn: "Draw straight line.",
      params: [
        { name: "x1, y1", desc: "Tọa độ điểm đầu / Start point coordinates" },
        { name: "x2, y2", desc: "Tọa độ điểm cuối / End point coordinates" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Đường ngang</span>
<span class="function">GDIpSelectPenColor</span>(colorRed, <span class="number">255</span>, <span class="number">3</span>);
<span class="function">GDIpLine</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">250</span>, <span class="number">100</span>);

<span class="comment">// Đường chéo</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">200</span>, <span class="number">5</span>);
<span class="function">GDIpLine</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">250</span>, <span class="number">200</span>);`,
      exampleEn: `<span class="comment">// Horizontal line</span>
<span class="function">GDIpSelectPenColor</span>(colorRed, <span class="number">255</span>, <span class="number">3</span>);
<span class="function">GDIpLine</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">250</span>, <span class="number">100</span>);

<span class="comment">// Diagonal line</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">200</span>, <span class="number">5</span>);
<span class="function">GDIpLine</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">250</span>, <span class="number">200</span>);`
    }
  ],

  polygons: [
    {
      name: "GDIpPolygon3",
      signature: "GDIpPolygon3(cornerRadius, x1, y1, x2, y2, x3, y3)",
      descVi: "Vẽ tam giác.",
      descEn: "Draw triangle.",
      params: [
        { name: "cornerRadius", desc: "Bán kính bo góc (0 = góc nhọn) / Corner radius (0 = sharp)" },
        { name: "x1, y1", desc: "Tọa độ điểm thứ 1 / Point 1 coordinates" },
        { name: "x2, y2", desc: "Tọa độ điểm thứ 2 / Point 2 coordinates" },
        { name: "x3, y3", desc: "Tọa độ điểm thứ 3 / Point 3 coordinates" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Tam giác góc nhọn</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon3</span>(<span class="number">0</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">200</span>, <span class="number">150</span>);

<span class="comment">// Tam giác bo góc với gradient radial</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorYellow, <span class="number">255</span>, colorRed, <span class="number">255</span>);
<span class="function">GDIpPolygon3</span>(<span class="number">15</span>, <span class="number">400</span>, <span class="number">50</span>, <span class="number">350</span>, <span class="number">150</span>, <span class="number">450</span>, <span class="number">150</span>);`,
      exampleEn: `<span class="comment">// Sharp-cornered triangle</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon3</span>(<span class="number">0</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">200</span>, <span class="number">150</span>);

<span class="comment">// Rounded triangle with radial gradient</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorYellow, <span class="number">255</span>, colorRed, <span class="number">255</span>);
<span class="function">GDIpPolygon3</span>(<span class="number">15</span>, <span class="number">400</span>, <span class="number">50</span>, <span class="number">350</span>, <span class="number">150</span>, <span class="number">450</span>, <span class="number">150</span>);`
    },
    {
      name: "GDIpPolygon4",
      signature: "GDIpPolygon4(cornerRadius, x1, y1, x2, y2, x3, y3, x4, y4)",
      descVi: "Vẽ tứ giác (hình vuông, hình chữ nhật, hình thoi, v.v.).",
      descEn: "Draw quadrilateral (square, rectangle, diamond, etc.).",
      params: [
        { name: "cornerRadius", desc: "Bán kính bo góc / Corner radius" },
        { name: "x1-x4, y1-y4", desc: "Tọa độ 4 điểm / Coordinates of 4 points" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Hình vuông góc nhọn</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">200</span>);
<span class="function">GDIpPolygon4</span>(<span class="number">0</span>, <span class="number">50</span>, <span class="number">50</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">150</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">150</span>);

<span class="comment">// Hình thoi với gradient radial</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorDarkBlue, <span class="number">255</span>);
<span class="function">GDIpPolygon4</span>(<span class="number">10</span>, <span class="number">450</span>, <span class="number">100</span>, <span class="number">500</span>, <span class="number">50</span>, <span class="number">550</span>, <span class="number">100</span>, <span class="number">500</span>, <span class="number">150</span>);`,
      exampleEn: `<span class="comment">// Sharp-cornered square</span>
<span class="function">GDIpSelectBrushColor</span>(colorBlue, <span class="number">200</span>);
<span class="function">GDIpPolygon4</span>(<span class="number">0</span>, <span class="number">50</span>, <span class="number">50</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">150</span>, <span class="number">150</span>, <span class="number">50</span>, <span class="number">150</span>);

<span class="comment">// Diamond with radial gradient</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorWhite, <span class="number">255</span>, colorDarkBlue, <span class="number">255</span>);
<span class="function">GDIpPolygon4</span>(<span class="number">10</span>, <span class="number">450</span>, <span class="number">100</span>, <span class="number">500</span>, <span class="number">50</span>, <span class="number">550</span>, <span class="number">100</span>, <span class="number">500</span>, <span class="number">150</span>);`
    },
    {
      name: "GDIpPolygon5",
      signature: "GDIpPolygon5(cornerRadius, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)",
      descVi: "Vẽ ngũ giác.",
      descEn: "Draw pentagon.",
      params: [
        { name: "cornerRadius", desc: "Bán kính bo góc / Corner radius" },
        { name: "x1-x5, y1-y5", desc: "Tọa độ 5 điểm / Coordinates of 5 points" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Ngũ giác đều bo góc với gradient chéo 45°</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorViolet, <span class="number">200</span>, colorTeal, <span class="number">200</span>, <span class="number">45</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon5</span>(<span class="number">12</span>,
    <span class="number">150</span>, <span class="number">50</span>,    <span class="comment">// Điểm 1 (đỉnh trên)</span>
    <span class="number">200</span>, <span class="number">90</span>,    <span class="comment">// Điểm 2</span>
    <span class="number">180</span>, <span class="number">140</span>,   <span class="comment">// Điểm 3</span>
    <span class="number">120</span>, <span class="number">140</span>,   <span class="comment">// Điểm 4</span>
    <span class="number">100</span>, <span class="number">90</span>     <span class="comment">// Điểm 5</span>
);`,
      exampleEn: `<span class="comment">// Regular pentagon with 45° diagonal gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorViolet, <span class="number">200</span>, colorTeal, <span class="number">200</span>, <span class="number">45</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon5</span>(<span class="number">12</span>,
    <span class="number">150</span>, <span class="number">50</span>,    <span class="comment">// Point 1 (top)</span>
    <span class="number">200</span>, <span class="number">90</span>,    <span class="comment">// Point 2</span>
    <span class="number">180</span>, <span class="number">140</span>,   <span class="comment">// Point 3</span>
    <span class="number">120</span>, <span class="number">140</span>,   <span class="comment">// Point 4</span>
    <span class="number">100</span>, <span class="number">90</span>     <span class="comment">// Point 5</span>
);`
    },
    {
      name: "GDIpPolygon6",
      signature: "GDIpPolygon6(cornerRadius, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6)",
      descVi: "Vẽ lục giác.",
      descEn: "Draw hexagon.",
      params: [
        { name: "cornerRadius", desc: "Bán kính bo góc / Corner radius" },
        { name: "x1-x6, y1-y6", desc: "Tọa độ 6 điểm / Coordinates of 6 points" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Lục giác đều với gradient radial</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorOrange, <span class="number">255</span>, colorDarkGreen, <span class="number">255</span>);
<span class="function">GDIpSelectPenColor</span>(colorYellow, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon6</span>(<span class="number">8</span>,
    <span class="number">150</span>, <span class="number">50</span>,    <span class="comment">// Điểm 1</span>
    <span class="number">180</span>, <span class="number">100</span>,   <span class="comment">// Điểm 2</span>
    <span class="number">180</span>, <span class="number">150</span>,   <span class="comment">// Điểm 3</span>
    <span class="number">150</span>, <span class="number">200</span>,   <span class="comment">// Điểm 4</span>
    <span class="number">120</span>, <span class="number">150</span>,   <span class="comment">// Điểm 5</span>
    <span class="number">120</span>, <span class="number">100</span>    <span class="comment">// Điểm 6</span>
);`,
      exampleEn: `<span class="comment">// Regular hexagon with radial gradient</span>
<span class="function">GDIpSelectRadialGradientBrush</span>(colorOrange, <span class="number">255</span>, colorDarkGreen, <span class="number">255</span>);
<span class="function">GDIpSelectPenColor</span>(colorYellow, <span class="number">255</span>, <span class="number">2</span>);
<span class="function">GDIpPolygon6</span>(<span class="number">8</span>,
    <span class="number">150</span>, <span class="number">50</span>,    <span class="comment">// Point 1</span>
    <span class="number">180</span>, <span class="number">100</span>,   <span class="comment">// Point 2</span>
    <span class="number">180</span>, <span class="number">150</span>,   <span class="comment">// Point 3</span>
    <span class="number">150</span>, <span class="number">200</span>,   <span class="comment">// Point 4</span>
    <span class="number">120</span>, <span class="number">150</span>,   <span class="comment">// Point 5</span>
    <span class="number">120</span>, <span class="number">100</span>    <span class="comment">// Point 6</span>
);`
    }
  ],

  text: [
    {
      name: "GDIpText",
      signature: "GDIpText(text, x, y, size)",
      descVi: "Vẽ text với hiệu ứng gradient.",
      descEn: "Draw text with gradient effects.",
      params: [
        { name: "text", desc: "Chuỗi text cần vẽ / Text string to draw" },
        { name: "x, y", desc: "Tọa độ góc trên-trái / Top-left coordinates" },
        { name: "size", desc: "Kích thước font (override font size đã chọn) / Font size (overrides selected font size)" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Text solid</span>
<span class="function">GDIpSelectBrushColor</span>(colorWhite, <span class="number">255</span>);
<span class="function">GDIpSelectFont</span>(<span class="string">"Arial"</span>, <span class="number">32</span>, True, False);
<span class="function">GDIpText</span>(<span class="string">"HELLO"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">32</span>);

<span class="comment">// Text gradient ngang</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorBlue, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpText</span>(<span class="string">"GRADIENT"</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">48</span>);`,
      exampleEn: `<span class="comment">// Solid text</span>
<span class="function">GDIpSelectBrushColor</span>(colorWhite, <span class="number">255</span>);
<span class="function">GDIpSelectFont</span>(<span class="string">"Arial"</span>, <span class="number">32</span>, True, False);
<span class="function">GDIpText</span>(<span class="string">"HELLO"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">32</span>);

<span class="comment">// Horizontal gradient text</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorRed, <span class="number">255</span>, colorBlue, <span class="number">255</span>, <span class="number">0</span>);
<span class="function">GDIpText</span>(<span class="string">"GRADIENT"</span>, <span class="number">100</span>, <span class="number">150</span>, <span class="number">48</span>);`
    },
    {
      name: "GDIpDrawText",
      signature: "GDIpDrawText(text, left, top, right, bottom, format)",
      descVi: "Vẽ text trong vùng chữ nhật với format alignment.",
      descEn: "Draw text in rectangular area with alignment format.",
      params: [
        { name: "text", desc: "Chuỗi text / Text string" },
        { name: "left, top, right, bottom", desc: "Tọa độ vùng chữ nhật / Rectangle area coordinates" },
        { name: "format", desc: "Format alignment: 37=Center, 33=Left, 34=Right" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Text căn giữa</span>
<span class="function">GDIpSelectBrushColor</span>(colorWhite, <span class="number">255</span>);
<span class="function">GDIpDrawText</span>(<span class="string">"CENTER"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">300</span>, <span class="number">150</span>, <span class="number">37</span>);

<span class="comment">// Text căn trái</span>
<span class="function">GDIpDrawText</span>(<span class="string">"LEFT"</span>, <span class="number">100</span>, <span class="number">200</span>, <span class="number">300</span>, <span class="number">250</span>, <span class="number">33</span>);`,
      exampleEn: `<span class="comment">// Center-aligned text</span>
<span class="function">GDIpSelectBrushColor</span>(colorWhite, <span class="number">255</span>);
<span class="function">GDIpDrawText</span>(<span class="string">"CENTER"</span>, <span class="number">100</span>, <span class="number">100</span>, <span class="number">300</span>, <span class="number">150</span>, <span class="number">37</span>);

<span class="comment">// Left-aligned text</span>
<span class="function">GDIpDrawText</span>(<span class="string">"LEFT"</span>, <span class="number">100</span>, <span class="number">200</span>, <span class="number">300</span>, <span class="number">250</span>, <span class="number">33</span>);`
    }
  ],

  lines: [
    {
      name: "GDIpSmoothLine",
      signature: "GDIpSmoothLine(xystr, smoothRatio, dotMode)",
      descVi: "Vẽ đường cong mượt mà từ chuỗi tọa độ.",
      descEn: "Draw smooth curve from coordinate string.",
      params: [
        { name: "xystr", desc: "Chuỗi tọa độ \"x1,y1,x2,y2,x3,y3,...\" / Coordinate string" },
        { name: "smoothRatio", desc: "Độ mượt (0.0-1.0), 0=thẳng, 1=mượt nhất / Smoothness (0=straight, 1=smoothest)" },
        { name: "dotMode", desc: "Hiển thị điểm (0=không, 1=cùng màu pen, >1=màu custom) / Show dots" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Đường cong mượt</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">255</span>, <span class="number">3</span>);
<span class="function">GDIpSmoothLine</span>(<span class="string">"100,200,200,150,300,180,400,120,500,160"</span>, <span class="number">0.8</span>, <span class="number">1</span>);`,
      exampleEn: `<span class="comment">// Smooth curve</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">255</span>, <span class="number">3</span>);
<span class="function">GDIpSmoothLine</span>(<span class="string">"100,200,200,150,300,180,400,120,500,160"</span>, <span class="number">0.8</span>, <span class="number">1</span>);`
    },
    {
      name: "GDIpSmoothLineXY",
      signature: "GDIpSmoothLineXY(xstr, ystr, smoothRatio, dotMode)",
      descVi: "Vẽ đường cong mượt mà từ 2 chuỗi tọa độ X và Y riêng biệt.",
      descEn: "Draw smooth curve from separate X and Y coordinate strings.",
      params: [
        { name: "xstr", desc: "Chuỗi tọa độ X \"x1,x2,x3,...\" / X coordinates string" },
        { name: "ystr", desc: "Chuỗi tọa độ Y \"y1,y2,y3,...\" / Y coordinates string" },
        { name: "smoothRatio", desc: "Độ mượt (0.0-1.0) / Smoothness" },
        { name: "dotMode", desc: "Hiển thị điểm (0=không, 1=cùng màu pen, >1=màu custom) / Show dots" }
      ],
      returns: null,
      isNew: true,
      exampleVi: `<span class="comment">// Đường cong mượt với X và Y riêng biệt</span>
<span class="function">GDIpSelectPenColor</span>(colorRed, <span class="number">255</span>, <span class="number">4</span>);
x_coords = <span class="string">"100,200,300,400,500"</span>;
y_coords = <span class="string">"200,150,180,120,160"</span>;
<span class="function">GDIpSmoothLineXY</span>(x_coords, y_coords, <span class="number">0.8</span>, <span class="number">1</span>);

<span class="comment">// Line chart với dots màu khác</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">200</span>, <span class="number">2</span>);
<span class="function">GDIpSmoothLineXY</span>(x_coords, y_coords, <span class="number">0.6</span>, colorYellow);`,
      exampleEn: `<span class="comment">// Smooth curve with separate X and Y</span>
<span class="function">GDIpSelectPenColor</span>(colorRed, <span class="number">255</span>, <span class="number">4</span>);
x_coords = <span class="string">"100,200,300,400,500"</span>;
y_coords = <span class="string">"200,150,180,120,160"</span>;
<span class="function">GDIpSmoothLineXY</span>(x_coords, y_coords, <span class="number">0.8</span>, <span class="number">1</span>);

<span class="comment">// Line chart with different color dots</span>
<span class="function">GDIpSelectPenColor</span>(colorBlue, <span class="number">200</span>, <span class="number">2</span>);
<span class="function">GDIpSmoothLineXY</span>(x_coords, y_coords, <span class="number">0.6</span>, colorYellow);`
    }
  ],

  charts: [
    {
      name: "GDIpAreaChart",
      signature: "GDIpAreaChart(xystr, baselineY, smoothRatio, dotMode)",
      descVi: "Vẽ area chart với gradient tự nhiên.",
      descEn: "Draw area chart with natural gradient.",
      params: [
        { name: "xystr", desc: "Chuỗi tọa độ điểm \"x1,y1,x2,y2,...\" / Point coordinates string" },
        { name: "baselineY", desc: "Tọa độ Y của baseline" },
        { name: "smoothRatio", desc: "Độ mượt đường cong (0.0-1.0) / Curve smoothness" },
        { name: "dotMode", desc: "Hiển thị điểm (0=không, 1=có) / Show dots (0=no, 1=yes)" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Area chart với slice gradient</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">200</span>, <span class="number">2</span>);
<span class="function">GDIpAreaChart</span>(<span class="string">"100,180,200,120,300,200,400,80,500,160"</span>, <span class="number">250</span>, <span class="number">0.8</span>, <span class="number">1</span>);`,
      exampleEn: `<span class="comment">// Area chart with slice gradient</span>
<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">200</span>, <span class="number">2</span>);
<span class="function">GDIpAreaChart</span>(<span class="string">"100,180,200,120,300,200,400,80,500,160"</span>, <span class="number">250</span>, <span class="number">0.8</span>, <span class="number">1</span>);`
    },
    {
      name: "GDIpPieChart",
      signature: "GDIpPieChart(strValue, strColor, strAlpha, x, y, radius, roundCorner, offset)",
      descVi: "Vẽ biểu đồ tròn (pie chart).",
      descEn: "Draw pie chart.",
      params: [
        { name: "strValue", desc: "Chuỗi giá trị phân cách bằng dấu phẩy / Comma-separated values" },
        { name: "strColor", desc: "Chuỗi màu tương ứng / Corresponding colors" },
        { name: "strAlpha", desc: "Chuỗi alpha tương ứng / Corresponding alphas" },
        { name: "x, y", desc: "Tọa độ tâm / Center coordinates" },
        { name: "radius", desc: "Bán kính / Radius" },
        { name: "roundCorner", desc: "Bo góc (pixels) / Corner rounding" },
        { name: "offset", desc: "Khoảng cách giữa các phần / Gap between slices" }
      ],
      returns: null,
      exampleVi: `<span class="function">GDIpPieChart</span>(<span class="string">"30,25,20,25"</span>,
             <span class="string">"colorRed,colorBlue,colorGreen,colorYellow"</span>,
             <span class="string">"200,200,200,200"</span>,
             <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">5</span>, <span class="number">2</span>);`,
      exampleEn: `<span class="function">GDIpPieChart</span>(<span class="string">"30,25,20,25"</span>,
             <span class="string">"colorRed,colorBlue,colorGreen,colorYellow"</span>,
             <span class="string">"200,200,200,200"</span>,
             <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">5</span>, <span class="number">2</span>);`
    },
    {
      name: "GDIpDonutChart",
      signature: "GDIpDonutChart(strValue, strColor, strAlpha, x, y, radius, width, roundCorner, offset)",
      descVi: "Vẽ biểu đồ donut (pie chart có lỗ giữa).",
      descEn: "Draw donut chart (pie chart with center hole).",
      params: [
        { name: "width", desc: "Độ dày vành / Ring width" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Tương tự PieChart + thêm tham số width</span>
<span class="function">GDIpDonutChart</span>(<span class="string">"30,25,20,25"</span>,
                <span class="string">"colorRed,colorBlue,colorGreen,colorYellow"</span>,
                <span class="string">"200,200,200,200"</span>,
                <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">25</span>, <span class="number">5</span>, <span class="number">2</span>);`,
      exampleEn: `<span class="comment">// Similar to PieChart + width parameter</span>
<span class="function">GDIpDonutChart</span>(<span class="string">"30,25,20,25"</span>,
                <span class="string">"colorRed,colorBlue,colorGreen,colorYellow"</span>,
                <span class="string">"200,200,200,200"</span>,
                <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">25</span>, <span class="number">5</span>, <span class="number">2</span>);`
    },
    {
      name: "GDIpGaugeChart",
      signature: "GDIpGaugeChart(pct, x, y, radius, width, color1, color2, colorDisable, colorNeedle, a1, a2, aDisable, aNeedle, roundCornerEnd)",
      descVi: "Vẽ đồng hồ đo (gauge) với kim chỉ.",
      descEn: "Draw gauge chart with needle.",
      params: [
        { name: "pct", desc: "Phần trăm (0-100) / Percentage" },
        { name: "color1, color2", desc: "Màu gradient của vùng active / Active area gradient colors" },
        { name: "colorDisable", desc: "Màu vùng disable / Disabled area color" },
        { name: "colorNeedle", desc: "Màu kim chỉ / Needle color" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Gauge RSI</span>
rsiValue = <span class="function">RSI</span>(<span class="number">14</span>);
<span class="function">GDIpGaugeChart</span>(rsiValue, <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">20</span>,
               colorGreen, colorRed, colorGray, colorWhite,
               <span class="number">255</span>, <span class="number">255</span>, <span class="number">100</span>, <span class="number">255</span>, <span class="number">5</span>);`,
      exampleEn: `<span class="comment">// RSI Gauge</span>
rsiValue = <span class="function">RSI</span>(<span class="number">14</span>);
<span class="function">GDIpGaugeChart</span>(rsiValue, <span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">20</span>,
               colorGreen, colorRed, colorGray, colorWhite,
               <span class="number">255</span>, <span class="number">255</span>, <span class="number">100</span>, <span class="number">255</span>, <span class="number">5</span>);`
    },
    {
      name: "GDIpProcessCircleChart",
      signature: "GDIpProcessCircleChart(pct, x, y, radius, width, posStart, color1, color2, colorDisable, a1, a2, aDisable, roundCorner)",
      descVi: "Vẽ biểu đồ tròn tiến trình với gradient góc.",
      descEn: "Draw circular progress chart with angle gradient.",
      params: [
        { name: "pct", desc: "Phần trăm (0-100) / Percentage" },
        { name: "posStart", desc: "Góc bắt đầu / Start angle" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Progress circle 75%</span>
<span class="function">GDIpProcessCircleChart</span>(<span class="number">75</span>, <span class="number">200</span>, <span class="number">200</span>, <span class="number">60</span>, <span class="number">15</span>, <span class="number">0</span>,
                       colorBlue, colorRed, colorGray,
                       <span class="number">255</span>, <span class="number">255</span>, <span class="number">100</span>, <span class="number">8</span>);`,
      exampleEn: `<span class="comment">// Progress circle 75%</span>
<span class="function">GDIpProcessCircleChart</span>(<span class="number">75</span>, <span class="number">200</span>, <span class="number">200</span>, <span class="number">60</span>, <span class="number">15</span>, <span class="number">0</span>,
                       colorBlue, colorRed, colorGray,
                       <span class="number">255</span>, <span class="number">255</span>, <span class="number">100</span>, <span class="number">8</span>);`
    },
    {
      name: "GDIpRadarChart",
      signature: "GDIpRadarChart(strField, strValue, maxValue, x, y, radius, roundCorner, radiusDot, mode)",
      descVi: "Vẽ biểu đồ radar (spider chart).",
      descEn: "Draw radar chart (spider chart).",
      params: [
        { name: "strField", desc: "Tên các trường (phân cách bằng dấu phẩy) / Field names (comma-separated)" },
        { name: "strValue", desc: "Giá trị tương ứng / Corresponding values" },
        { name: "maxValue", desc: "Giá trị tối đa / Maximum value" },
        { name: "mode", desc: "Chế độ hiển thị (0=chỉ lưới, 1=đầy đủ) / Display mode" }
      ],
      returns: null,
      exampleVi: `<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">180</span>, colorRed, <span class="number">180</span>, <span class="number">90</span>);
<span class="function">GDIpRadarChart</span>(<span class="string">"Speed,Power,Skill,Defense,Health"</span>,
               <span class="string">"85,92,78,88,95"</span>,
               <span class="number">100</span>, <span class="number">300</span>, <span class="number">300</span>, <span class="number">80</span>, <span class="number">5</span>, <span class="number">3</span>, <span class="number">1</span>);`,
      exampleEn: `<span class="function">GDIpSelectSliceGradientBrush</span>(colorBlue, <span class="number">180</span>, colorRed, <span class="number">180</span>, <span class="number">90</span>);
<span class="function">GDIpRadarChart</span>(<span class="string">"Speed,Power,Skill,Defense,Health"</span>,
               <span class="string">"85,92,78,88,95"</span>,
               <span class="number">100</span>, <span class="number">300</span>, <span class="number">300</span>, <span class="number">80</span>, <span class="number">5</span>, <span class="number">3</span>, <span class="number">1</span>);`
    },
    {
      name: "GDIpArc",
      signature: "GDIpArc(x, y, radius, width, posStart, posEnd, color1, color2, a1, a2, roundCorner)",
      descVi: "Vẽ cung tròn với gradient góc.",
      descEn: "Draw arc with angle gradient.",
      params: [
        { name: "x, y", desc: "Tọa độ tâm / Center coordinates" },
        { name: "radius", desc: "Bán kính / Radius" },
        { name: "width", desc: "Độ dày cung / Arc width" },
        { name: "posStart, posEnd", desc: "Góc bắt đầu và kết thúc (0-360 độ) / Start and end angles" },
        { name: "color1, color2", desc: "Màu gradient / Gradient colors" },
        { name: "a1, a2", desc: "Alpha transparency (0-255)" },
        { name: "roundCorner", desc: "Bo góc (-1=auto, 0=vuông, >0=bo tròn) / Rounding" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Cung tròn đơn giản (90 độ)</span>
<span class="function">GDIpArc</span>(<span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">20</span>, <span class="number">0</span>, <span class="number">90</span>, colorBlue, colorRed, <span class="number">255</span>, <span class="number">255</span>, <span class="number">10</span>);

<span class="comment">// Progress bar dạng cung</span>
progress = <span class="number">75</span>; <span class="comment">// 75%</span>
<span class="function">GDIpArc</span>(<span class="number">300</span>, <span class="number">350</span>, <span class="number">50</span>, <span class="number">12</span>, <span class="number">-90</span>, <span class="number">-90</span> + (progress * <span class="number">360</span> / <span class="number">100</span>),
        colorBlue, colorCyan, <span class="number">255</span>, <span class="number">255</span>, <span class="number">8</span>);`,
      exampleEn: `<span class="comment">// Simple arc (90 degrees)</span>
<span class="function">GDIpArc</span>(<span class="number">200</span>, <span class="number">200</span>, <span class="number">80</span>, <span class="number">20</span>, <span class="number">0</span>, <span class="number">90</span>, colorBlue, colorRed, <span class="number">255</span>, <span class="number">255</span>, <span class="number">10</span>);

<span class="comment">// Arc-style progress bar</span>
progress = <span class="number">75</span>; <span class="comment">// 75%</span>
<span class="function">GDIpArc</span>(<span class="number">300</span>, <span class="number">350</span>, <span class="number">50</span>, <span class="number">12</span>, <span class="number">-90</span>, <span class="number">-90</span> + (progress * <span class="number">360</span> / <span class="number">100</span>),
        colorBlue, colorCyan, <span class="number">255</span>, <span class="number">255</span>, <span class="number">8</span>);`
    },
    {
      name: "GDIpPlotFlow",
      signature: "GDIpPlotFlow(x1, y1, x2, y2, x3, y3, x4, y4, colorFlow, alpha, adjCurve)",
      descVi: "Vẽ dòng chảy Sankey giữa hai edge.",
      descEn: "Draw Sankey flow between two edges.",
      params: [
        { name: "x1, y1, x2, y2", desc: "Edge bắt đầu (từ điểm 1 đến điểm 2) / Start edge" },
        { name: "x3, y3, x4, y4", desc: "Edge kết thúc (từ điểm 3 đến điểm 4) / End edge" },
        { name: "colorFlow", desc: "Màu dòng chảy / Flow color" },
        { name: "alpha", desc: "Độ trong suốt (0-255) / Transparency" },
        { name: "adjCurve", desc: "Điều chỉnh độ cong (-1.0 đến 1.0) / Curve adjustment" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Sankey flow cơ bản</span>
<span class="function">GDIpPlotFlow</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">50</span>, <span class="number">150</span>,   <span class="comment">// Edge trái (dọc)</span>
             <span class="number">250</span>, <span class="number">120</span>, <span class="number">250</span>, <span class="number">180</span>, <span class="comment">// Edge phải (dọc)</span>
             colorBlue, <span class="number">180</span>, <span class="number">0.0</span>);

<span class="comment">// Money flow example</span>
<span class="function">GDIpPlotFlow</span>(<span class="number">150</span>, <span class="number">300</span>, <span class="number">150</span>, <span class="number">350</span>, <span class="comment">// Revenue source</span>
             <span class="number">350</span>, <span class="number">280</span>, <span class="number">350</span>, <span class="number">320</span>, <span class="comment">// Profit target</span>
             colorGreen, <span class="number">220</span>, <span class="number">0.2</span>);`,
      exampleEn: `<span class="comment">// Basic Sankey flow</span>
<span class="function">GDIpPlotFlow</span>(<span class="number">50</span>, <span class="number">100</span>, <span class="number">50</span>, <span class="number">150</span>,   <span class="comment">// Left edge (vertical)</span>
             <span class="number">250</span>, <span class="number">120</span>, <span class="number">250</span>, <span class="number">180</span>, <span class="comment">// Right edge (vertical)</span>
             colorBlue, <span class="number">180</span>, <span class="number">0.0</span>);

<span class="comment">// Money flow example</span>
<span class="function">GDIpPlotFlow</span>(<span class="number">150</span>, <span class="number">300</span>, <span class="number">150</span>, <span class="number">350</span>, <span class="comment">// Revenue source</span>
             <span class="number">350</span>, <span class="number">280</span>, <span class="number">350</span>, <span class="number">320</span>, <span class="comment">// Profit target</span>
             colorGreen, <span class="number">220</span>, <span class="number">0.2</span>);`
    }
  ],

  advanced: [
    {
      name: "GDIpDrawSVG",
      signature: "GDIpDrawSVG(svgPath, x, y, width, height)",
      descVi: "Vẽ file SVG tại vị trí và kích thước chỉ định.",
      descEn: "Draw SVG file at specified position and size.",
      params: [
        { name: "svgPath", desc: "Đường dẫn đến file SVG / Path to SVG file" },
        { name: "x, y", desc: "Tọa độ góc trên-trái / Top-left coordinates" },
        { name: "width, height", desc: "Kích thước hiển thị / Display size" }
      ],
      returns: null,
      exampleVi: `<span class="comment">// Vẽ logo/icon SVG</span>
<span class="function">GDIpDrawSVG</span>(<span class="string">"C:\\\\Icons\\\\logo.svg"</span>, <span class="number">50</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">100</span>);

<span class="comment">// Chart symbols</span>
<span class="function">GDIpDrawSVG</span>(<span class="string">"C:\\\\Charts\\\\arrow_up.svg"</span>, <span class="number">200</span>, <span class="number">150</span>, <span class="number">32</span>, <span class="number">32</span>);

<span class="comment">// Status indicators</span>
status = <span class="function">IIf</span>(Close > <span class="function">Ref</span>(Close, <span class="number">-1</span>), <span class="string">"green"</span>, <span class="string">"red"</span>);
status_icon = <span class="string">"C:\\\\Status\\\\"</span> + status + <span class="string">"_circle.svg"</span>;
<span class="function">GDIpDrawSVG</span>(status_icon, <span class="number">400</span>, <span class="number">100</span>, <span class="number">48</span>, <span class="number">48</span>);`,
      exampleEn: `<span class="comment">// Draw logo/icon SVG</span>
<span class="function">GDIpDrawSVG</span>(<span class="string">"C:\\\\Icons\\\\logo.svg"</span>, <span class="number">50</span>, <span class="number">50</span>, <span class="number">100</span>, <span class="number">100</span>);

<span class="comment">// Chart symbols</span>
<span class="function">GDIpDrawSVG</span>(<span class="string">"C:\\\\Charts\\\\arrow_up.svg"</span>, <span class="number">200</span>, <span class="number">150</span>, <span class="number">32</span>, <span class="number">32</span>);

<span class="comment">// Status indicators</span>
status = <span class="function">IIf</span>(Close > <span class="function">Ref</span>(Close, <span class="number">-1</span>), <span class="string">"green"</span>, <span class="string">"red"</span>);
status_icon = <span class="string">"C:\\\\Status\\\\"</span> + status + <span class="string">"_circle.svg"</span>;
<span class="function">GDIpDrawSVG</span>(status_icon, <span class="number">400</span>, <span class="number">100</span>, <span class="number">48</span>, <span class="number">48</span>);`
    }
  ]
};

// Export for use in builder
window.functionsData = functionsData;
