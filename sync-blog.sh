#!/bin/bash

# Blog sync script
# This script copies markdown files from src/content/blog to public/blog
# Run this whenever you edit markdown files

echo "Syncing blog markdown files..."

# Create public/blog directory if it doesn't exist
mkdir -p public/blog

# Copy all markdown files
cp src/content/blog/*.md public/blog/

echo "✅ Blog files synced successfully!"
echo "Your edited markdown files are now available to the blog system."