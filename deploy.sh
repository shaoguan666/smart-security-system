#!/bin/bash

# 确保脚本在出错时退出
set -e

# 变量定义
REPO_URL="替换为你的GitHub仓库URL"
BRANCH="gh-pages"
COMMIT_MSG="部署到GitHub Pages: $(date +'%Y-%m-%d %H:%M:%S')"

# 确保工作目录干净
echo "检查工作目录..."
if [ -d ".git" ]; then
  # 如果当前目录已经是git仓库
  echo "当前目录是git仓库，将直接提交修改"
  
  # 添加所有HTML文件和资源
  git add *.html css/ js/ images/ .nojekyll README.md
  
  # 提交更改
  git commit -m "$COMMIT_MSG"
  
  # 推送到GitHub
  echo "推送到GitHub..."
  git push origin main
  
  echo "部署完成！请访问 GitHub 仓库设置，确保已启用 GitHub Pages."
else
  # 如果当前目录不是git仓库，则初始化
  echo "初始化git仓库..."
  git init
  git add *.html css/ js/ images/ .nojekyll README.md
  git commit -m "初始化网站"
  
  # 添加远程仓库
  echo "添加远程仓库..."
  git remote add origin $REPO_URL
  
  # 推送到GitHub
  echo "推送到GitHub..."
  git push -u origin main
  
  echo "部署完成！请访问 GitHub 仓库设置，确保已启用 GitHub Pages."
fi 