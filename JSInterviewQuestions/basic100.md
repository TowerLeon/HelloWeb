100 道题已生成，按 12 个章节分类，覆盖了 TypeScript 从入门到进阶的核心知识点：

| 章节 | 题号 | 重点内容 |
|------|------|----------|
| 第一章 基础类型与变量声明 | 1–10 | string/number/boolean/联合类型/类型推断 |
| 第二章 数组与元组 | 11–20 | 数组操作/元组/map/filter/reduce |
| 第三章 对象与接口 | 21–30 | interface/继承/可选/只读/工具类型 |
| 第四章 函数 | 31–40 | 参数类型/重载/箭头函数/类型收窄 |
| 第五章 类 | 41–50 | 继承/访问修饰符/抽象类/implements |
| 第六章 枚举 | 51–55 | 数字枚举/字符串枚举/常量枚举 |
| 第七章 泛型 | 56–65 | 泛型函数/泛型类/约束/keyof |
| 第八章 高级类型 | 66–75 | 类型别名/交叉类型/条件类型/映射类型 |
| 第九章 类型断言与守卫 | 76–80 | as/is/typeof/instanceof |
| 第十章 模块与命名空间 | 81–85 | import/export/命名空间 |
| 第十一章 装饰器 | 86–90 | 类/方法/属性/参数装饰器 |
| 第十二章 综合练习 | 91–100 | 工具类型综合应用 |

建议按章节顺序练习，前五章打好基础后，泛型和高级类型会更容易理解。


TypeScript 初学者 100 道编程题
=====================================

【第一章：基础类型与变量声明】

1. 声明一个 string 类型的变量 name，赋值为你的名字，并打印出来。
2. 声明一个 number 类型的变量 age，赋值为 25，并打印出来。
3. 声明一个 boolean 类型的变量 isStudent，赋值为 true，并打印出来。
4. 用 const 声明一个不可变的圆周率 PI，值为 3.14159。
5. 声明一个 null 类型变量和一个 undefined 类型变量，分别打印。
6. 使用联合类型声明一个变量 id，它可以是 string 或 number。
7. 声明一个 bigint 类型变量，值为 9007199254740991n。
8. 声明一个 symbol 类型的变量，并打印其描述。
9. 用 let 声明变量，演示 TypeScript 的类型推断（不手动指定类型）。
10. 声明一个变量，类型为 string | number | boolean 的联合类型，并赋予不同类型的值测试。


【第二章：数组与元组】

11. 声明一个 number[] 类型的数组，包含 1 到 5，并打印每个元素。
12. 声明一个 string[] 类型的数组，包含三种水果名称，使用 for...of 遍历。
13. 使用 Array<number> 泛型语法声明一个数字数组，并求总和。
14. 声明一个元组 [string, number]，存储姓名和年龄，并分别打印。
15. 声明一个元组 [string, number, boolean]，表示一条用户记录。
16. 对一个字符串数组使用 .map() 将所有字符串转为大写。
17. 对一个数字数组使用 .filter() 筛选出所有偶数。
18. 对一个数字数组使用 .reduce() 计算乘积。
19. 声明一个二维数组 number[][]，表示 3x3 的矩阵，并打印对角线元素。
20. 使用展开运算符合并两个数字数组，并去除重复元素。


【第三章：对象与接口（Interface）】

21. 声明一个接口 Person，包含 name: string 和 age: number，创建一个符合该接口的对象。
22. 在接口中添加可选属性 email?: string，创建有和没有 email 的两个对象。
23. 在接口中添加只读属性 readonly id: number，尝试修改它（观察报错）。
24. 声明接口 Animal，包含 name 和 sound 方法，创建一个 dog 对象实现它。
25. 使用接口继承：创建 Employee 接口继承 Person 接口，并添加 salary 属性。
26. 声明一个对象字面量类型 { x: number; y: number }，表示一个二维坐标点。
27. 用接口描述一个函数类型：接收两个数字，返回数字。
28. 用接口描述一个索引签名：键为 string，值为 number 的字典对象。
29. 创建一个嵌套接口：Address 嵌套在 Person 中，并创建对应对象。
30. 用 Partial<T> 工具类型将一个接口的所有属性变为可选，并演示其用法。


【第四章：函数】

31. 声明一个函数 add，接收两个 number 参数，返回它们的和，并标注返回类型。
32. 声明一个函数，返回类型为 void，只打印一条消息。
33. 声明一个带可选参数的函数 greet(name: string, greeting?: string)。
34. 声明一个带默认参数的函数 power(base: number, exp: number = 2)，计算 base 的 exp 次方。
35. 声明一个使用剩余参数的函数 sum(...nums: number[])，计算任意多个数的总和。
36. 使用箭头函数改写第 31 题的 add 函数。
37. 声明一个函数重载：multiply(a: number, b: number): number 和 multiply(a: string, b: number): string。
38. 写一个高阶函数 applyTwice，接收一个函数和一个值，将该函数应用两次。
39. 声明一个返回类型为 never 的函数（抛出错误）。
40. 写一个函数，参数类型为联合类型 string | number，根据类型做不同处理（类型收窄）。


【第五章：类（Class）】

41. 创建一个 Animal 类，包含 name 属性和 speak() 方法，并实例化。
42. 使用 constructor 简写，在参数中直接声明并初始化属性（public name: string）。
43. 演示类的 public、private、protected 三种访问修饰符。
44. 创建一个 Dog 类继承 Animal 类，重写 speak() 方法。
45. 在子类构造函数中使用 super() 调用父类构造函数。
46. 在类中使用 get 和 set 访问器，封装一个私有属性 _age。
47. 声明一个抽象类 Shape，包含抽象方法 getArea()，分别用 Circle 和 Rectangle 实现它。
48. 让一个类实现接口（implements），创建 Car 类实现 Vehicle 接口。
49. 声明类的静态属性和静态方法，并通过类名直接访问。
50. 使用 readonly 修饰符声明一个类属性，只在构造函数中赋值。


【第六章：枚举（Enum）】

51. 声明一个数字枚举 Direction，包含 Up、Down、Left、Right，打印各值。
52. 声明一个字符串枚举 Color，包含 Red = "RED"、Green = "GREEN"、Blue = "BLUE"。
53. 声明一个常量枚举 const enum Status，包含 Active、Inactive、Pending。
54. 通过枚举值反向查找枚举名称（数字枚举特有功能）。
55. 使用枚举作为函数参数类型，写一个根据 Direction 打印方向的函数。


【第七章：泛型（Generics）】

56. 写一个泛型函数 identity<T>(arg: T): T，使其能返回任意类型的参数。
57. 写一个泛型函数 getFirst<T>(arr: T[]): T，返回数组的第一个元素。
58. 写一个泛型接口 Pair<T, U>，包含 first: T 和 second: U 两个属性。
59. 写一个泛型类 Stack<T>，实现 push、pop 和 peek 方法。
60. 使用泛型约束 <T extends { length: number }>，写一个获取长度的函数。
61. 写一个泛型函数 merge<T, U>，将两个对象合并为一个（使用交叉类型）。
62. 使用 keyof 约束，写一个函数 getProperty<T, K extends keyof T>(obj: T, key: K): T[K]。
63. 写一个泛型函数，接收数组和谓词函数，返回过滤后的数组（泛型 + 高阶函数）。
64. 使用默认泛型参数，声明 Response<T = string>，T 默认为 string。
65. 写一个泛型工具函数 toArray<T>(val: T | T[]): T[]，统一转为数组。


【第八章：类型别名与高级类型】

66. 使用 type 关键字声明一个类型别名 Point = { x: number; y: number }。
67. 使用交叉类型 A & B 合并两个接口，创建一个同时满足两者的对象。
68. 使用联合类型 + 字面量类型，声明 Direction = "up" | "down" | "left" | "right"。
69. 使用 typeof 操作符，从一个已有对象推导出其类型。
70. 使用 keyof 操作符，打印一个接口的所有键名组成的联合类型。
71. 使用条件类型 T extends U ? X : Y，写一个判断类型是否为数组的条件类型。
72. 使用映射类型，将接口所有属性变为只读（手动实现 Readonly<T>）。
73. 使用 infer 关键字，写一个提取函数返回类型的条件类型（类似 ReturnType<T>）。
74. 使用模板字面量类型，声明 EventName = `on${string}`。
75. 使用 Exclude<T, U> 和 Extract<T, U> 工具类型，演示其效果。


【第九章：类型断言与类型守卫】

76. 使用 as 语法进行类型断言，将 unknown 类型断言为 string。
77. 使用 ! 非空断言操作符，告诉编译器某个值不为 null 或 undefined。
78. 写一个类型守卫函数 isString(val: unknown): val is string，并在条件判断中使用。
79. 使用 typeof 作为类型守卫，在函数中区分 string 和 number 的处理逻辑。
80. 使用 instanceof 作为类型守卫，区分 Dog 和 Cat 两个类的实例。


【第十章：模块与命名空间】

81. 创建一个 mathUtils.ts 模块，导出 add 和 subtract 函数，在另一个文件中导入使用。
82. 使用默认导出（export default）导出一个类，并在另一个文件中导入。
83. 使用 export * from './module' 重新导出一个模块的所有内容。
84. 使用 import type 仅导入类型，避免运行时依赖。
85. 声明一个命名空间 Geometry，在其中定义 Circle 和 Rectangle 接口。


【第十一章：装饰器（Decorators）】

86. 声明一个类装饰器 @sealed，阻止类被继承或修改（使用 Object.seal）。
87. 声明一个方法装饰器 @log，在方法调用前后打印日志。
88. 声明一个属性装饰器，为类属性添加验证逻辑。
89. 声明一个参数装饰器，记录被装饰的参数索引。
90. 组合多个装饰器，观察它们的执行顺序。


【第十二章：实用工具类型与综合练习】

91. 使用 Required<T> 将接口所有可选属性变为必填，并演示效果。
92. 使用 Pick<T, K> 从接口中挑选部分属性，创建新的类型。
93. 使用 Omit<T, K> 从接口中排除部分属性，创建新的类型。
94. 使用 Record<K, V> 声明一个以字符串为键、数字为值的字典类型。
95. 使用 NonNullable<T> 去除类型中的 null 和 undefined。
96. 综合练习：用泛型 + 接口实现一个简单的链表节点 LinkedListNode<T>。
97. 综合练习：用类 + 泛型实现一个简单的事件发射器 EventEmitter<T>。
98. 综合练习：用接口 + 联合类型模拟一个 Result<T> 类型（成功/失败两种状态）。
99. 综合练习：用映射类型 + 条件类型实现 DeepReadonly<T>，递归将所有属性变为只读。
100. 综合练习：实现一个类型安全的简单状态机，状态和转换都用字面量类型约束。

=====================================
共 100 题，涵盖 TypeScript 核心知识点
祝学习顺利！
