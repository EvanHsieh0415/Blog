from datetime import datetime

now = datetime.now()

now_string = now.strftime("%Y-%m-%d")

frontmatter = f"""---
# cover: /assets/images/cover2.jpg
icon: pen-to-square
date: {now_string}
category:
tag:
# star: true
# sticky: true
---

# {now_string}
"""

answer = (input("？日記類型文章 (Y/n)：") or "Y").lower()

if answer == "y":
    path = f"posts/daily/{now_string}.md"
else:
    f"posts/{now_string}.md"

with open(f"posts/daily/{now_string}.md", "w", encoding="utf8") as file:
    file.write(frontmatter)