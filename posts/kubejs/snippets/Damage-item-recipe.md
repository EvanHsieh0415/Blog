---
isOriginal: true
category:
  - KubeJS
tag:
  - 程式碼片段
  - JavaScript
---

# 合成時消耗物品耐久

![damage ingredient recipe](https://hackmd.io/_uploads/H1KHEFIca.png)

```js
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("stripped_oak_log", ["oak_log", "#minecraft:axes"])
    .damageIngredient("#minecraft:axes");
});
```

::: info
僅限 `kubejs:shaped` 和 `kubejs:shapeless` 配方可使用 `.damageIngredient`
:::