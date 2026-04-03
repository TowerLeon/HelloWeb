最直接安装方式

👉 安装 TypeScript（全局）：

npm install -g typescript
✅ 验证是否成功
tsc -v

👉 能看到版本号就 OK，比如：

Version 5.x.x


接下来怎么用？
1️⃣ 新建一个 TS 文件
touch hello.ts

写点代码：

const msg: string = "Hello TS";
console.log(msg);
2️⃣ 编译成 JS
tsc hello.ts

👉 会生成：

hello.js

运行
node hello.js






更推荐的方式（开发用）

👉 不用每次手动编译，直接运行 TS：

安装：

npm install -g ts-node

运行：

ts-node hello.ts







项目里更规范的做法（重要）

👉 一般不会全局装，而是：

npm init -y
npm install typescript --save-dev
npx tsc --init

👉 这样：

有 tsconfig.json
更适合项目开发
