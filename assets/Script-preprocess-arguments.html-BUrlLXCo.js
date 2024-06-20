import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,e as d}from"./app-CRiGVLTm.js";const r={},a=d(`<h1 id="腳本預處理參數-kubejs-6" tabindex="-1"><a class="header-anchor" href="#腳本預處理參數-kubejs-6"><span>腳本預處理參數 [KubeJS 6+]</span></a></h1><p>可在腳本開頭使用預處理參數，如下</p><table><thead><tr><th style="text-align:center;">名稱</th><th>用途</th><th>參數類別</th><th>說明</th><th style="text-align:center;">預設值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>priority</code></td><td>載入優先度</td><td>整數(Number)</td><td>數字越大越先載入</td><td style="text-align:center;"><code>0</code></td></tr><tr><td style="text-align:center;"><code>ignored</code></td><td>忽略載入</td><td>布林(Boolean)</td><td>如果是true則跳過載入</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>packmode</code></td><td>模組包模式</td><td>字串(String)</td><td>若模組包模式不等於輸入值內則跳過載入</td><td style="text-align:center;"><code>default</code></td></tr><tr><td style="text-align:center;"><code>requires</code></td><td>命名空間需求</td><td>字串(String)</td><td>若未載入該命名空間則跳過載入</td><td style="text-align:center;"><code></code> (無)</td></tr><tr><td style="text-align:center;"></td><td></td><td></td><td></td><td style="text-align:center;"></td></tr></tbody></table><h2 id="範例" tabindex="-1"><a class="header-anchor" href="#範例"><span>範例</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// priority: 100</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// ignored: false</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// packmode: dev</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// requires: forge</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// requires: create</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[a];function c(o,i){return n(),e("div",null,s)}const g=t(r,[["render",c],["__file","Script-preprocess-arguments.html.vue"]]),h=JSON.parse('{"path":"/posts/kubejs/tips-and-tricks/Script-preprocess-arguments.html","title":"腳本預處理參數 [KubeJS 6+]","lang":"zh-TW","frontmatter":{"isOriginal":true,"category":["KubeJS"],"tag":["技巧","JavaScript"],"description":"腳本預處理參數 [KubeJS 6+] 可在腳本開頭使用預處理參數，如下 範例","head":[["meta",{"property":"og:url","content":"https://Mango-Projects.github.io/Blog/Blog/posts/kubejs/tips-and-tricks/Script-preprocess-arguments.html"}],["meta",{"property":"og:site_name","content":"芒果的部落格"}],["meta",{"property":"og:title","content":"腳本預處理參數 [KubeJS 6+]"}],["meta",{"property":"og:description","content":"腳本預處理參數 [KubeJS 6+] 可在腳本開頭使用預處理參數，如下 範例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-06-20T09:50:07.000Z"}],["meta",{"property":"article:author","content":"芒果凍布丁"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2024-06-20T09:50:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"腳本預處理參數 [KubeJS 6+]\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-20T09:50:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"芒果凍布丁\\",\\"url\\":\\"https://github.com/EvanHsieh0415\\"}]}"]]},"headers":[{"level":2,"title":"範例","slug":"範例","link":"#範例","children":[]}],"git":{"createdTime":1718877007000,"updatedTime":1718877007000,"contributors":[{"name":"Mango","email":"evan940415@gmail.com","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"posts/kubejs/tips-and-tricks/Script-preprocess-arguments.md","localizedDate":"2024年6月20日","excerpt":"\\n<p>可在腳本開頭使用預處理參數，如下</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">名稱</th>\\n<th>用途</th>\\n<th>參數類別</th>\\n<th>說明</th>\\n<th style=\\"text-align:center\\">預設值</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\"><code>priority</code></td>\\n<td>載入優先度</td>\\n<td>整數(Number)</td>\\n<td>數字越大越先載入</td>\\n<td style=\\"text-align:center\\"><code>0</code></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>ignored</code></td>\\n<td>忽略載入</td>\\n<td>布林(Boolean)</td>\\n<td>如果是true則跳過載入</td>\\n<td style=\\"text-align:center\\"><code>false</code></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>packmode</code></td>\\n<td>模組包模式</td>\\n<td>字串(String)</td>\\n<td>若模組包模式不等於輸入值內則跳過載入</td>\\n<td style=\\"text-align:center\\"><code>default</code></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>requires</code></td>\\n<td>命名空間需求</td>\\n<td>字串(String)</td>\\n<td>若未載入該命名空間則跳過載入</td>\\n<td style=\\"text-align:center\\"><code> </code> (無)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"></td>\\n<td></td>\\n<td></td>\\n<td></td>\\n<td style=\\"text-align:center\\"></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{g as comp,h as data};