echo "Generating images..."
yarn generate:icons
echo "Generated images"

echo ""

echo "Generating sitemap..."
yarn generate:sitemap
echo "Generated sitemap"

echo ""

echo "Now Linting..."
yarn lint
echo "Linted"

echo ""

echo "Building app..."
yarn build
echo "Built app"

echo ""

echo "Now serving..."
yarn serve
