const fs = require('fs');
const { exec } = require('child_process');
const os = require('os');

let timer;

const isDir = (dir) => {
  try {
    return fs.lstatSync(dir).isDirectory();
  } catch (ignore) {
    return false;
  }
};

const checkGitStatus = (dir) => {
  exec('git status', {
    cwd: dir
  }, (err, stdout, stderr) => {
    document.getElementById('status').innerText = stdout;
  });
};

const formatDir = (dir) => {
  return /^~/.test(dir.trim()) ?
    os.homedir() + dir.substr(1).trim() :
    dir.trim();
};

document.getElementById('input').addEventListener('keyup', (evt) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const dir = formatDir(evt.target.value);
    if(isDir(dir)) {
      checkGitStatus(dir);
    }
  }, 500);
}, false);
