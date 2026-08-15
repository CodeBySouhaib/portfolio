import fs from 'fs';
const path = 'D:\\cursorOpen\\portfolio\\content\\blog\\crowdanswer-flutter-supabase.mdx';
const content = fs.readFileSync(path, 'utf16le');
fs.writeFileSync(path, content);
console.log('Done');