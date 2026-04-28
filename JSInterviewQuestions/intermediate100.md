中级 100 道题已生成，按 10 个章节分类，整体难度明显上台阶：

| 章节 | 题号 | 核心挑战 |
|------|------|----------|
| 第一章 深入泛型 | 1–10 | zip/groupBy/memoize/pipe/retry |
| 第二章 高级类型系统 | 11–20 | DeepPartial/UnionToIntersection/PickByValue |
| 第三章 条件类型与 infer | 21–30 | ReturnType/Awaited/元组操作 |
| 第四章 模板字面量类型 | 31–40 | 驼峰转换/路径生成/字符串操作 |
| 第五章 映射类型 | 41–50 | Mutable/Getters/Flip/Nullable |
| 第六章 类的高级用法 | 51–60 | LRU缓存/装饰器/Mixin/工厂模式 |
| 第七章 函数式编程 | 61–70 | curry/Maybe单子/Result类型/trampoline |
| 第八章 异步与Promise类型 | 71–80 | 并发控制/超时/可取消Promise |
| 第九章 声明文件与模块扩展 | 81–90 | .d.ts/模块扩展/声明合并 |
| 第十章 工程实践综合挑战 | 91–100 | 路由系统/ORM/状态机/类型级算术 |

**学习建议：** 第二至五章是纯"类型体操"，难度最高，建议搭配 [type-challenges](https://github.com/type-challenges/type-challenges) 仓库一起练习，效果更好。


TypeScript 中级编程题 100 道
=====================================

【第一章：深入泛型（Advanced Generics）】

1.  实现一个泛型函数 zip<T, U>(a: T[], b: U[]): [T, U][]，将两个数组逐一配对成元组数组。
2.  实现一个泛型函数 flatten<T>(arr: (T | T[])[]): T[]，将一层嵌套数组展平。
3.  实现泛型函数 groupBy<T>(arr: T[], key: keyof T): Record<string, T[]>，按对象属性分组。
4.  实现泛型函数 chunk<T>(arr: T[], size: number): T[][]，将数组按指定大小分块。
5.  实现泛型函数 unique<T>(arr: T[], keyFn?: (item: T) => unknown): T[]，支持自定义去重逻辑。
6.  实现泛型函数 pipe<T>(...fns: ((val: T) => T)[]): (val: T) => T，实现函数管道组合。
7.  实现泛型 memoize<T extends (...args: unknown[]) => unknown>(fn: T): T，为任意函数添加缓存。
8.  实现泛型 retry<T>(fn: () => Promise<T>, times: number): Promise<T>，失败时自动重试。
9.  实现泛型函数 partition<T>(arr: T[], pred: (item: T) => boolean): [T[], T[]]，将数组按条件分成两组。
10. 实现泛型 pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>，从对象中选取指定属性。


【第二章：高级类型系统（Advanced Type System）】

11. 实现 DeepPartial<T>：递归地将对象所有层级的属性变为可选。
12. 实现 DeepRequired<T>：递归地将对象所有层级的属性变为必填。
13. 实现 DeepReadonly<T>：递归地将对象所有层级的属性变为只读。
14. 实现 Flatten<T>：若 T 是数组则取其元素类型，否则返回 T 本身。
15. 实现 UnionToIntersection<U>：将联合类型 A | B | C 转换为交叉类型 A & B & C。
16. 实现 IsNever<T>：若 T 为 never 则返回 true，否则返回 false。
17. 实现 TupleToUnion<T extends unknown[]>：将元组类型 [A, B, C] 转换为联合类型 A | B | C。
18. 实现 UnionToTuple<U>：将联合类型转换为元组类型（提示：需利用函数重载推断）。
19. 实现 Promisify<T>：若 T 是函数，则将其返回值包装为 Promise。
20. 实现 PickByValue<T, V>：从对象类型中挑选值类型为 V 的属性。


【第三章：条件类型与 infer（Conditional Types & infer）】

21. 使用 infer 实现 ReturnType<T>：提取函数的返回值类型。
22. 使用 infer 实现 Parameters<T>：提取函数的参数类型元组。
23. 使用 infer 实现 FirstArg<T>：提取函数第一个参数的类型。
24. 使用 infer 实现 LastElement<T extends unknown[]>：提取元组最后一个元素的类型。
25. 实现 Awaited<T>：递归展开 Promise，提取最终 resolve 的类型。
26. 实现 IsArray<T>：若 T 是数组类型则返回 true，否则返回 false。
27. 实现 Head<T extends unknown[]>：提取元组的第一个元素类型。
28. 实现 Tail<T extends unknown[]>：提取元组去掉第一个元素后的剩余类型。
29. 实现 Concat<T extends unknown[], U extends unknown[]>：在类型层面合并两个元组类型。
30. 实现 Length<T extends unknown[]>：在类型层面获取元组的长度（返回数字字面量类型）。


【第四章：模板字面量类型（Template Literal Types）】

31. 声明类型 EventName<T extends string> = `on${Capitalize<T>}`，如 EventName<"click"> 得到 "onClick"。
32. 实现 CamelToSnake<S extends string>：将驼峰字符串类型转换为下划线类型，如 "helloWorld" → "hello_world"。
33. 实现 SnakeToCamel<S extends string>：将下划线字符串类型转换为驼峰类型。
34. 实现 Trim<S extends string>：去除字符串类型两端的空格。
35. 实现 Split<S extends string, D extends string>：按分隔符将字符串类型拆分为元组类型。
36. 实现 Join<T extends string[], D extends string>：将字符串元组类型用分隔符连接为一个字符串类型。
37. 声明 PropEventSource<T>：为对象的每个属性生成对应的 on + 属性名事件监听方法类型。
38. 实现 Replace<S extends string, From extends string, To extends string>：替换字符串类型中的子串。
39. 实现 StartsWith<S extends string, P extends string>：检查字符串类型是否以指定前缀开头，返回 boolean 类型。
40. 实现类型 Paths<T>：递归生成对象所有属性的点路径字符串字面量联合类型（如 "a" | "a.b" | "a.b.c"）。


【第五章：映射类型（Mapped Types）】

41. 实现 Mutable<T>：去除对象类型所有属性的 readonly 修饰符。
42. 实现 Optional<T, K extends keyof T>：仅将对象类型中指定的属性 K 变为可选，其余保持不变。
43. 实现 Required<T, K extends keyof T>：仅将对象类型中指定的属性 K 变为必填，其余保持不变。
44. 实现 Getters<T>：为对象类型的每个属性生成对应的 getter 方法类型（如 getName(): string）。
45. 实现 Setters<T>：为对象类型的每个属性生成对应的 setter 方法类型。
46. 实现 MapValues<T, U>：将对象类型所有属性的值类型映射为 U。
47. 实现 FilterKeys<T, U>：过滤掉值类型不符合 U 的属性键。
48. 实现 OmitByValue<T, V>：从对象类型中删除值类型为 V 的属性（与第20题相反）。
49. 实现 Nullable<T>：将对象类型每个属性的值类型加上 null。
50. 实现 Flip<T extends Record<string, string>>：将对象类型的键值互换（key 变 value，value 变 key）。


【第六章：类的高级用法（Advanced Classes）】

51. 实现一个泛型类 Observable<T>，支持 subscribe、unsubscribe 和 emit 方法，实现简单的观察者模式。
52. 实现一个 Singleton<T> 装饰器工厂，保证被装饰的类只能有一个实例。
53. 实现一个泛型类 LRUCache<K, V>，支持 get 和 set 操作，超出容量时淘汰最久未使用的条目。
54. 使用 Mixin 模式：定义 Serializable 和 Validatable 两个 mixin，将它们合并到 Model 类上。
55. 实现一个类装饰器 @deprecated(message: string)，在方法被调用时打印弃用警告。
56. 实现一个方法装饰器 @throttle(ms: number)，限制方法在指定毫秒内只能被调用一次。
57. 实现一个方法装饰器 @debounce(ms: number)，在最后一次调用后延迟指定毫秒执行。
58. 使用抽象工厂模式：声明抽象类 UIFactory，派生出 LightThemeFactory 和 DarkThemeFactory。
59. 实现一个带泛型的 Repository<T> 基类，包含 findById、save、delete 等方法。
60. 使用 Proxy 和 TypeScript 类型，实现一个类型安全的响应式对象包装器。


【第七章：函数式编程模式（Functional Programming Patterns）】

61. 实现类型安全的 curry 函数：curry((a: number, b: number) => a + b)(1)(2) 返回 3。
62. 实现 compose<T>(...fns: Function[])，将多个函数从右到左组合。
63. 实现一个类型安全的 Maybe<T> 单子，包含 map、flatMap 和 getOrElse 方法。
64. 实现一个 Result<T, E> 类型，包含 Ok<T> 和 Err<E> 两种状态，支持 map 和 mapErr。
65. 实现不可变的 update 工具函数：update<T>(obj: T, patch: Partial<T>): T，返回新对象而不修改原对象。
66. 实现 trampoline 函数，将递归函数转化为迭代执行，避免栈溢出。
67. 用函数式风格实现惰性求值列表（LazyList），支持 map、filter、take 操作且不立即执行。
68. 实现类型安全的事件总线 EventBus，键为事件名，值为对应的回调函数类型。
69. 实现函数 once<T extends Function>(fn: T): T，确保函数只被执行一次，后续调用返回首次结果。
70. 实现 partial<T extends Function>(fn: T, ...args: unknown[])，固定函数的部分参数（偏函数应用）。


【第八章：异步与 Promise 类型（Async & Promise Types）】

71. 封装 fetch 为类型安全的 request<T>(url: string): Promise<T>，自动解析 JSON 并标注返回类型。
72. 实现 promiseAll<T extends Promise<unknown>[]>(promises: T): Promise<UnwrapAll<T>>，类型安全版 Promise.all。
73. 实现 withTimeout<T>(promise: Promise<T>, ms: number): Promise<T>，超时后自动 reject。
74. 实现 asyncPipe<T>(...fns: ((val: T) => Promise<T>)[]): (val: T) => Promise<T>，异步管道。
75. 实现 concurrentLimit<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]>，限制并发数量。
76. 实现一个类型安全的 AsyncQueue<T>，支持 enqueue 和 dequeue，dequeue 返回 Promise<T>。
77. 实现 retry with backoff：每次重试等待时间指数增长（1s, 2s, 4s...）。
78. 封装一个 useAsync<T> 函数（非 React Hook），返回 { data, error, loading } 状态对象。
79. 实现 cancelable<T>(promise: Promise<T>): { promise: Promise<T>; cancel: () => void }，可取消的 Promise。
80. 实现 allSettledTyped<T extends Promise<unknown>[]>(promises: T)，返回类型完整标注的 settled 结果数组。


【第九章：声明文件与模块扩展（Declaration Files & Module Augmentation）】

81. 为一个纯 JavaScript 函数库 mathLib 手动编写 .d.ts 声明文件，包含函数、常量和接口声明。
82. 使用模块扩展（Module Augmentation）为 String 原型添加 toTitleCase() 方法并标注类型。
83. 使用声明合并（Declaration Merging），为已有接口 Window 添加自定义属性。
84. 编写全局声明文件 global.d.ts，声明全局变量 __APP_VERSION__: string。
85. 使用 declare module 为一个没有类型定义的第三方模块（如 "legacy-lib"）编写类型声明。
86. 使用命名空间（namespace）组织声明文件，将相关类型放入 MyApp 命名空间。
87. 编写一个类型声明，描述一个接受回调的 loadScript(url, callback) 函数。
88. 使用 export = 和 import = require() 语法，为 CommonJS 模块编写兼容声明。
89. 使用条件类型在声明文件中根据参数类型推断重载函数的返回类型。
90. 为一个 Express 中间件编写类型声明，扩展 Request 接口以添加自定义属性（如 req.user）。


【第十章：工程实践与综合挑战（Engineering & Challenges）】

91. 实现类型安全的路由系统：定义路由表类型，确保参数提取类型正确（如 "/user/:id" 推断出 { id: string }）。
92. 实现类型安全的 ORM 查询构造器：支持 select、where、orderBy 链式调用，且返回值类型随 select 变化。
93. 实现一个类型安全的状态机 StateMachine<States, Events>，用字面量类型约束合法的状态转换。
94. 实现 Schema 验证库的类型层：定义 StringSchema、NumberSchema 等，能从 schema 推断出对应的 TS 类型。
95. 实现类型安全的依赖注入容器 Container：register 时记录类型，resolve 时自动推断返回类型。
96. 为一个表单库实现类型：FormField<T> 根据数据模型类型自动生成表单字段配置类型。
97. 实现 Builder 模式：QueryBuilder<T> 支持链式调用，每次调用后返回携带已配置字段信息的新类型。
98. 实现类型安全的 JSON 序列化：JSONSerializable<T> 过滤掉 T 中无法被 JSON 序列化的类型（如 Function、Symbol）。
99. 综合挑战：实现一个迷你版类型安全的 Redux，包含 Action、Reducer、Store 的完整类型推断。
100. 综合挑战：实现 TypeScript 类型级别的加法运算（Type-Level Arithmetic），仅用类型系统（不用 JS 运算）实现 Add<2, 3> = 5。

=====================================
共 100 道中级题，涵盖 TypeScript 进阶核心知识点
建议在完成初级 100 题后练习，重点攻克第二至五章的类型体操。

