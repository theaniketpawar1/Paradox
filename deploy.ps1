Write-Host "Initializing git repository..."
git init
Write-Host "Adding files..."
git add README.md
Write-Host "Creating commit..."
git commit -m "first commit"
Write-Host "Renaming branch to main..."
git branch -M main
Write-Host "Adding remote origin..."
git remote add origin https://github.com/theaniketpawar1/Paradox.git
Write-Host "Pushing to GitHub..."
git push -u origin main
Write-Host ""
Write-Host "Done! Repository: https://github.com/theaniketpawar1/Paradox"
