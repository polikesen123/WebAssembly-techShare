# 启动
npm run serve


# 目录结构
```
.
├── assembly
│   ├── index.ts     //编译前和文件
│   └── tsconfig.json
├── build
│   ├── optimized.wasm   //编译后的文件
│   ├── optimized.wasm.map
│   ├── optimized.wat
│   ├── untouched.wasm
│   ├── untouched.wasm.map
│   └── untouched.wat
├── index.html   //网页测试文件
├── index.js     
├── package-lock.json
├── package.json
├── readmd.md
├── test.js
└── tests
    └── index.js
```