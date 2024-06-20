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

# print(frontmatter)

with open(f"posts/{now_string}.md", "w", encoding="utf8") as file:
    file.write(frontmatter)