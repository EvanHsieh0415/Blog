---
isOriginal: true
category:
  - KubeJS
tag:
  - 程式碼片段
  - JavaScript
---

# 玩家死亡後掉落玩家頭顱

```js
EntityEvents.death("player", (event) => {
  const { player } = event;

  player.block.popItem(Item.playerHead(player.username));
});
```