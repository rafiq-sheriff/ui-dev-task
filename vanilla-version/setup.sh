#!/bin/bash

# ========================================
# Setup Script for GTG Perfumes Vanilla Version
# ========================================

echo "🚀 Setting up GTG Perfumes Vanilla Version..."
echo ""

# Check if running from vanilla-version directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the vanilla-version directory"
    echo "   cd vanilla-version && bash setup.sh"
    exit 1
fi

# Create assets directory if it doesn't exist
if [ ! -d "assets" ]; then
    echo "📁 Creating assets directory..."
    mkdir -p assets
fi

# Check if public/assets exists in parent directory
if [ -d "../public/assets" ]; then
    echo "📦 Copying assets from ../public/assets/..."
    cp -r ../public/assets/* assets/
    echo "✅ Assets copied successfully!"
else
    echo "⚠️  Warning: ../public/assets/ not found"
    echo "   Please manually copy assets to vanilla-version/assets/"
    echo ""
    echo "   From project root:"
    echo "   cp -r public/assets vanilla-version/assets"
fi

# Update asset paths in files
echo ""
echo "🔧 Updating asset paths in files..."

# Update paths in HTML
if command -v sed &> /dev/null; then
    sed -i.bak 's|../public/assets/|assets/|g' index.html
    sed -i.bak 's|../public/assets/|assets/|g' css/styles.css
    sed -i.bak 's|../public/assets/|assets/|g' js/main.js

    # Remove backup files
    rm -f index.html.bak css/styles.css.bak js/main.js.bak

    echo "✅ Paths updated successfully!"
else
    echo "⚠️  sed not found, please manually update paths:"
    echo "   Replace '../public/assets/' with 'assets/' in:"
    echo "   - index.html"
    echo "   - css/styles.css"
    echo "   - js/main.js"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 To run the project:"
echo ""
echo "   Option 1 - Python:"
echo "   python -m http.server 8000"
echo ""
echo "   Option 2 - Node.js:"
echo "   npx http-server -p 8000"
echo ""
echo "   Option 3 - VS Code Live Server:"
echo "   Right-click index.html > Open with Live Server"
echo ""
echo "📖 See README.md for more information"
echo ""
