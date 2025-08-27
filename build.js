const fs = require('fs');
const path = require('path');

// Create build directory if it doesn't exist
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy public files to build directory
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  copyFolderSync(publicDir, buildDir);
}

// Copy necessary server files
const serverFiles = ['index.js', 'app.js', 'server.js'].filter(file => 
  fs.existsSync(path.join(__dirname, file))
);

serverFiles.forEach(file => {
  fs.copyFileSync(
    path.join(__dirname, file),
    path.join(buildDir, file)
  );
});

// Create a package.json for production
const pkg = require('./package.json');
const prodPkg = {
  name: pkg.name,
  version: pkg.version,
  dependencies: pkg.dependencies,
  scripts: {
    start: "node index.js"
  }
};

fs.writeFileSync(
  path.join(buildDir, 'package.json'),
  JSON.stringify(prodPkg, null, 2)
);

console.log('Build completed successfully!');

// Helper function to copy folders recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}
