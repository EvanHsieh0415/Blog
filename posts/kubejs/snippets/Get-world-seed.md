---
isOriginal: true
category:
  - KubeJS
tag:
  - 程式碼片段
  - JavaScript
---

<!-- #region world-seed -->

# 獲取精確的世界種子

```js
const seed = NBT.l(server.worldData.worldGenOptions().seed());
```

::: tip
只能儲存成 String 或 NBT，若存成 Number 則會因為 Java Double 浮點數精度誤差導致不精確
:::

<!-- #endregion world-seed -->