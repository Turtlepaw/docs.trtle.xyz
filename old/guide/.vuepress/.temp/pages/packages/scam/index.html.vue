<template><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide" aria-hidden="true">#</a> Guide</h1>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>First step is installing @horizon/scam. You can do this by running the following command:</p>
<CodeGroup>
<CodeGroupItem title="npm">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @horizon/scam
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="yarn">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @horizon/scam
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="pnpm">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> @horizon/scam
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h1 id="checking-a-link" tabindex="-1"><a class="header-anchor" href="#checking-a-link" aria-hidden="true">#</a> Checking a link</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> scam <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@horizon/scam'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">scam</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fullText</span><span class="token operator">:</span> <span class="token string">"Whos getting it first? https://nitrogifz.xyz/nitro"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
