# Jet Listing Custom SVG

**Contributors:** Dev Mohsan  
**Version:** 1.0 
**Requires:** WordPress 6.0+, Elementor, JetEngine  
**Tested up to:** WordPress 6.x  
**License:** GPLv2 or later  

---

## 📌 Overview

Jet Engine Custom Functionalities extends **JetEngine’s Listing Grid slider** by adding a new **“Custom SVG”** option to the **Arrow Icon** dropdown.

When selected, the plugin injects **hard-coded SVG arrows** into the slider on the frontend — without any media upload fields, icon pickers, or UI clutter.

This approach is:
- Faster
- More consistent across sites
- Fully code-controlled
- Brand-safe (no user uploads)

---

## ✨ Features

- Adds **Custom SVG** to JetEngine → Listing Grid → Slider → Arrow Icon
- Uses **hard-coded SVGs defined in PHP**
- No SVG upload field
- Fully compatible with **JetEngine Slick slider**
- Works in:
  - Frontend
  - Elementor editor preview
- Optimized JavaScript (no polling, no heavy observers)
- Clean separation of PHP and JS

---

## 🧩 How It Works (Technical)

1. **Editor side (PHP)**
   - Detects the Arrow Icon dropdown inside JetEngine Listing Grid
   - Appends a new option: `custom_svg`

   <img width="392" height="895" alt="image" src="https://github.com/user-attachments/assets/aa7e948b-3ab0-4949-a7fa-1965e53d6895" />
   <img width="527" height="113" alt="image" src="https://github.com/user-attachments/assets/17cc5b30-75b7-4b01-a5d2-14aa5440e158" />



2. **Frontend (JavaScript)**
   - Reads JetEngine’s real slider configuration from the `data-nav` attribute
   - Checks for:
     ```json
     "arrow_icon":"custom_svg"
     ```
   - Injects SVG markup into:
     ```html
     .jet-listing-grid__slider-icon.prev-arrow
     .jet-listing-grid__slider-icon.next-arrow
     ```

This avoids unreliable Elementor wrapper data and works across JetEngine versions.

---

