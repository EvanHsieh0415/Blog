import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,e as t}from"./app-CRiGVLTm.js";const a={},c=t(`<h1 id="將腳本自動同步到-github" tabindex="-1"><a class="header-anchor" href="#將腳本自動同步到-github"><span>將腳本自動同步到 Github</span></a></h1><p>以下步驟皆以Prism Launcher為基礎</p><ol><li>備份 <code>.minecraft</code>；</li><li>清空原有的 <code>.minecraft</code>；</li><li>在 <code>.minecraft</code> 中輸入 <code>git clone &quot;儲存庫網址&quot; .</code>；</li><li>將備份的 <code>.minecraft</code> 內的檔案放回 <code>.minecraft</code>，視情況選擇覆蓋舊有的或保留舊有的；</li><li>新增以下檔案： <ul><li><code>.minecraft/.gitignore</code><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>*</span></span>
<span class="line"><span>!.gitignore</span></span>
<span class="line"><span>!kubejs/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>.minecraft/kubejs/.gitignore</code><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>!*</span></span>
<span class="line"><span>probe/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol>`,3),s=[c];function o(r,l){return n(),i("div",null,s)}const m=e(a,[["render",o],["__file","Sync-to-git.html.vue"]]),u=JSON.parse('{"path":"/posts/kubejs/tips-and-tricks/Sync-to-git.html","title":"將腳本自動同步到 Github","lang":"zh-TW","frontmatter":{"isOriginal":true,"category":["KubeJS"],"tag":["技巧","JavaScript"],"description":"將腳本自動同步到 Github 以下步驟皆以Prism Launcher為基礎 備份 .minecraft； 清空原有的 .minecraft； 在 .minecraft 中輸入 git clone \\"儲存庫網址\\" .； 將備份的 .minecraft 內的檔案放回 .minecraft，視情況選擇覆蓋舊有的或保留舊有的； 新增以下檔案： .minec...","head":[["meta",{"property":"og:url","content":"https://Mango-Projects.github.io/Blog/Blog/posts/kubejs/tips-and-tricks/Sync-to-git.html"}],["meta",{"property":"og:site_name","content":"芒果的部落格"}],["meta",{"property":"og:title","content":"將腳本自動同步到 Github"}],["meta",{"property":"og:description","content":"將腳本自動同步到 Github 以下步驟皆以Prism Launcher為基礎 備份 .minecraft； 清空原有的 .minecraft； 在 .minecraft 中輸入 git clone \\"儲存庫網址\\" .； 將備份的 .minecraft 內的檔案放回 .minecraft，視情況選擇覆蓋舊有的或保留舊有的； 新增以下檔案： .minec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-06-20T09:50:07.000Z"}],["meta",{"property":"article:author","content":"芒果凍布丁"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2024-06-20T09:50:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"將腳本自動同步到 Github\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-20T09:50:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"芒果凍布丁\\",\\"url\\":\\"https://github.com/EvanHsieh0415\\"}]}"]]},"headers":[],"git":{"createdTime":1718877007000,"updatedTime":1718877007000,"contributors":[{"name":"Mango","email":"evan940415@gmail.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"posts/kubejs/tips-and-tricks/Sync-to-git.md","localizedDate":"2024年6月20日","excerpt":"\\n<p>以下步驟皆以Prism Launcher為基礎</p>\\n<ol>\\n<li>備份 <code>.minecraft</code>；</li>\\n<li>清空原有的 <code>.minecraft</code>；</li>\\n<li>在 <code>.minecraft</code> 中輸入 <code>git clone \\"儲存庫網址\\" .</code>；</li>\\n<li>將備份的 <code>.minecraft</code> 內的檔案放回 <code>.minecraft</code>，視情況選擇覆蓋舊有的或保留舊有的；</li>\\n<li>新增以下檔案：\\n<ul>\\n<li><code>.minecraft/.gitignore</code><div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"background-color:#282c34;color:#abb2bf\\"><pre class=\\"shiki one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>*</span></span>\\n<span class=\\"line\\"><span>!.gitignore</span></span>\\n<span class=\\"line\\"><span>!kubejs/</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li><code>.minecraft/kubejs/.gitignore</code><div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"background-color:#282c34;color:#abb2bf\\"><pre class=\\"shiki one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>!*</span></span>\\n<span class=\\"line\\"><span>probe/</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{m as comp,u as data};