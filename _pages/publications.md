---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
years: [2024, 2023, 2022, 2021, 2020, 2018, 2017, 2016, 2014, 2010, 2008]
kinds: [0, 1, 2, 3] 
sortby: "Y"
---

<!-- kinds: 1 = Journals, 2 = Conferences, 3 = Others -->
<!-- _pages/publications.md -->
<div>
			<span id="binit-text">Publications ordered by year. Click this button to change. </span>
				<div class = "btn-group btn-group-sm btnlink">
					<a class="btn btn-sm" role="button" id="bsort-toggle">
					   <span class="fas fa-sort"></span>	
					   <span id="bsort-span">Sort by type</span>
					</a>
				</div>
		<br>
		 <!-- <strong><sup>&#42;</sup></strong> indicates equal first-author contribution.  -->
			<p id="demo"></p>
</div>

<div class="publications" id="div-by-year">
	{%- for y in page.years %}
	<div id={{y}}>
	  <!-- <h2 class="year">{{y}}
				<span class="fake-icon">
					<a>
						<i id="bsec-toggle-{{y}}" onclick="closeyeardiv({{y}})" style="color:var(--global-divider-color)" class="fas fa-angle-down">
						</i>
					</a>
				</span>
		</h2> -->
		<div id="papers-{{y}}">
			{% bibliography -f papers -q @*[year={{y}}]* %}
		</div>
	</div>
	{% endfor %}
</div>

<div class="publications" id="div-by-kind" style="display:none">
	{%- for k in page.kinds -%}
				{%- if k == 0 -%}
					<div id={{k}}>
						<h2 class="year">Book Chapters<span class="fake-icon"><a><i id="bsec-toggle-{{k}}" onclick="closeyeardiv({{k}})" style="color:var(--global-divider-color)" class="fas fa-angle-down"></i></a></span></h2>
						<div id="papers-{{k}}">
								{%- bibliography -f papers -q @*[kind=Chapter]* -%}
						</div>
					</div>
								{%- elsif k == 1 -%}
									<div id={{k}}>
										<h2 class="year">Journals<span class="fake-icon"><a><i id="bsec-toggle-{{k}}" onclick="closeyeardiv({{k}})" style="color:var(--global-divider-color)" class="fas fa-angle-down"></i></a></span></h2>
										<div id="papers-{{k}}">
												{%- bibliography -f papers -q @*[kind=Journal]* -%}
										</div>
									</div>
									{%- elsif k == 2 -%}
									<div id={{k}}>
										<h2 class="year">Conferences<span class="fake-icon"><a><i id="bsec-toggle-{{k}}" onclick="closeyeardiv({{k}})" style="color:var(--global-divider-color)" class="fas fa-angle-down"></i></a></span></h2>
										<div id="papers-{{k}}">
												{%- bibliography -f papers -q @*[kind=Conference]* -%}
										</div>
									</div>
									{%- else -%}
									<div id={{k}}>
										<h2 class="year">Others<span class="fake-icon"><a><i id="bsec-toggle-{{k}}" onclick="closeyeardiv({{k}})" style="color:var(--global-divider-color)" class="fas fa-angle-down"></i></a></span></h2>
										<div id="papers-{{k}}">
												{%- bibliography -f papers -q @*[kind=Other]* -%}
										</div>
									</div>
									{%- endif -%}
		{%- endfor -%}
</div>	

