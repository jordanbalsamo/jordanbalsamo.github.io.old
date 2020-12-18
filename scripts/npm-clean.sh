echo "Cleaning cache..."
npm cache clean --force
echo "Deleting node_modules and package-lock.json..."
rm -rf node_modules package-lock.json
echo "Re-installing dependencies..."
npm install
echo "Auditing dependencies..."
npm audit fix