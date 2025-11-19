# GDIPlus Example Images

This folder contains example images for all GDIPlus functions that appear on the back of flip cards.

## 📁 Image Naming Convention

Each image file should be named exactly as the function name with `.png` extension:

```
GDIpResetDefaults.png
GDIpClearCache.png
GDIpSelectBrushColor.png
GDIpSelectPenColor.png
...etc
```

## 🎨 How to Generate Placeholder Images

1. **Open the image generator**:
   - Navigate to the root documentation folder
   - Open `image-generator.html` in your web browser

2. **Generate all images**:
   - Click "Generate All Images" button
   - Wait for all 31 placeholder images to be created
   - Click "Download All as ZIP" button

3. **Extract to this folder**:
   - Extract the downloaded ZIP file
   - Copy all `.png` files to this `images/examples/` folder

## 📋 Required Images (31 total)

### State Management (2)
- GDIpResetDefaults.png
- GDIpClearCache.png

### Colors (2)
- GDIpSelectBrushColor.png
- GDIpSelectPenColor.png

### Gradients (4)
- GDIpSelectLinearGradientBrush.png
- GDIpSelectRadialGradientBrush.png
- GDIpSelectSliceGradientBrush.png
- GDIpSelectLinearGradientColor.png

### Text (1)
- GDIpSelectFont.png

### Shapes (9)
- GDIpRectangle.png
- GDIpRoundRect.png
- GDIpCircle.png
- GDIpEllipse.png
- GDIpLine.png
- GDIpPolygon3.png
- GDIpPolygon4.png
- GDIpPolygon5.png
- GDIpPolygon6.png

### Text Rendering (2)
- GDIpText.png
- GDIpDrawText.png

### Advanced Lines (2)
- GDIpSmoothLine.png
- GDIpSmoothLineXY.png

### Charts (7)
- GDIpAreaChart.png
- GDIpPieChart.png
- GDIpDonutChart.png
- GDIpGaugeChart.png
- GDIpProcessCircleChart.png
- GDIpRadarChart.png
- GDIpArc.png

### Advanced Features (2)
- GDIpPlotFlow.png
- GDIpDrawSVG.png

## 🔄 Replacing Placeholder Images

Later, you can replace these placeholder images with actual screenshots:

1. Create a chart/visualization using the function in AmiBroker
2. Take a screenshot
3. Save it with the exact function name (e.g., `GDIpPieChart.png`)
4. Replace the placeholder in this folder

## ✅ Image Specifications

- **Format**: PNG
- **Recommended size**: 800x600 pixels (or similar ratio)
- **Background**: Any (the viewer will handle it)
- **Quality**: Medium to high

## 🎯 Fallback Behavior

If an image is missing, the flip card will display:
- "Chưa có hình minh họa" (Vietnamese)
- "No example image available" (English)

This ensures the documentation works even with missing images.
