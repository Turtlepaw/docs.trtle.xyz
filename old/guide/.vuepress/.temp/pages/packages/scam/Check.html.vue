<template><h1 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h1>
<table>
<thead>
<tr>
<th>Properties</th>
<th>Methods</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href=""></a></td>
<td><a href="#checkoptions">.check</a></td>
</tr>
</tbody>
</table>
<h2 id="check-options" tabindex="-1"><a class="header-anchor" href="#check-options" aria-hidden="true">#</a> .check(options)</h2>
<p>Checks the given text for URLs and then checks the URLs.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>options</td>
<td><a href="#scamcheckoptions">ScamCheckOptions</a></td>
<td>The options.</td>
</tr>
</tbody>
</table>
<p>Returns <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href="/packages/scam/ScamLink">ScamLink</a>[]&gt;</p>
<h2 id="scamcheckoptions" tabindex="-1"><a class="header-anchor" href="#scamcheckoptions" aria-hidden="true">#</a> ScamCheckOptions</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">fullText</span><span class="token operator">:</span> <span class="token string">"Text can have multiple\nlines and spaces."</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deepScan</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><em>Example usage of ScamCheckOptions</em></p>
<h2 id="scamcheckoptions-fulltext" tabindex="-1"><a class="header-anchor" href="#scamcheckoptions-fulltext" aria-hidden="true">#</a> ScamCheckOptions#fullText</h2>
<table>
<thead>
<tr>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>The raw text to process.</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">string<OutboundLink/></a></td>
<td>None</td>
</tr>
</tbody>
</table>
<h2 id="scamcheckoptions-deepscan" tabindex="-1"><a class="header-anchor" href="#scamcheckoptions-deepscan" aria-hidden="true">#</a> ScamCheckOptions#deepScan</h2>
<table>
<thead>
<tr>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><RouterLink to="/packages/scam/deepscan/">Learn more about Deep scan</RouterLink></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">string<OutboundLink/></a></td>
<td>None</td>
</tr>
</tbody>
</table>
</template>
