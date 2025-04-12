#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const input = process.argv[2];
const params = JSON.parse(input);

const folderPath = params.folderPath || '.';

try {
  const files = fs.readdirSync(folderPath);
  console.log(JSON.stringify({ files }));
} catch (err) {
  console.error("讀取目錄失敗:", err.message);
  process.exit(1);
}
