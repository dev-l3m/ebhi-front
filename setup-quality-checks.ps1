# Setup Code Quality & Review Checks for Windows

Write-Host "🔧 Setting up Code Quality & Review Checks..." -ForegroundColor Cyan

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
yarn add -D eslint @vue/eslint-config-prettier eslint-plugin-vue prettier husky lint-staged

# Initialize Husky
Write-Host "🐕 Initializing Husky..." -ForegroundColor Yellow
npx husky init

# Make hooks executable (if on Git Bash)
if (Get-Command git -ErrorAction SilentlyContinue) {
    git config core.hooksPath .husky
}

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: yarn install"
Write-Host "2. Run: npx husky install"
Write-Host "3. Your code quality checks are now active!"
