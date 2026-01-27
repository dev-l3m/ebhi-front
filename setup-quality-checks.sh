#!/bin/bash

echo "🔧 Setting up Code Quality & Review Checks..."

# Install dependencies
echo "📦 Installing dependencies..."
yarn add -D eslint @vue/eslint-config-prettier eslint-plugin-vue prettier husky lint-staged

# Initialize Husky
echo "🐕 Initializing Husky..."
npx husky init

# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/pre-push

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Run: yarn install"
echo "2. Run: npx husky install"
echo "3. Your code quality checks are now active!"
