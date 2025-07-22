---
layout: page
title: Courses
permalink: /courses/
description: 
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---


<div>
		<header>
			<h2>As Instructor</h2>
		</header>
		<ul style="text-align:left">
						<li><p>
							<strong>COL703/COL7203: Logic for Computer Science</strong> [<a href="../courses/col703-jul25" target="_blank">Course page</a>]<br>
							July 2025 &ndash; Nov 2025, IIT Delhi.<br>
							Instructor.
						</p></li>
						<li><p>
							<strong>COL352: Introduction to Automata and Theory of Computation</strong> [<a href="../courses/col352-jan25" target="_blank">Course page</a>]<br>
							January 2025 &ndash; May 2025, IIT Delhi.<br>
							Instructor.
						</p></li>
						<li><p>
							<strong>COL703: Logic for Computer Science</strong> [<a href="../courses/col703-jul24" target="_blank">Course page</a>]<br>
							July 2024 &ndash; Nov 2024, IIT Delhi.<br>
							Instructor.
						</p></li>
						<li><p>
							<strong>COL226: Programming Languages</strong>
							January 2024 &ndash; May 2024, IIT Delhi.<br>
							Co-instructor with <a href="https://www.cse.iitd.ac.in/~sanjiva/" target="_blank">Prof. Sanjiva Prasad</a>.
						</p></li>
						<li><p>
							<strong>COL876: Special Topics in Formal Methods</strong> [<a href="../courses/col876-jul23" target="_blank">Course page</a>]<br>
							July 2023 &ndash; Dec 2023, IIT Delhi.<br>
							Instructor.
						</p></li>
						<li><p>
							<strong>Introduction to Introduction to Programming Workshop</strong> [<a href="https://www.youtube.com/watch?v=Y7YSqVIyBvA&list=PLRog3t0AgDpR7fdhjgL3GFwnnVFEZ5I09" target="_blank">Youtube playlist</a>; <a href="https://discord.gg/dHaS5BRgas" target="_blank">Discord server</a>]<br>
							June 2022 &ndash; present, University of California Santa Cruz/online.<br>
							Instructor.
						</p></li>
						<li><p>
							<strong>Formal Methods for Cryptographic Protocols</strong> [<a href="http://www.cmi.ac.in/~spsuresh/teaching/security17/" target="_blank">Link</a>]<br>
							August &ndash; December 2017, Chennai Mathematical Institute.<br>
							Co-instructor (with Prof. S P Suresh).
						</p></li>
						<li><p>
							<strong>Security Protocol Design and Verification</strong><br>
							June 2016, <a href="http://india.acm.org/info-systems-security.html" target="_blank">ACM Summer School on Information and Systems Security</a>, VIT, Vellore.<br>
							Co-instructor (with Prof. S P Suresh).
						</p></li>
						<li id="lastnewteach"><p>
							<strong>Training on Functional Programming with Haskell</strong> [<a href="https://citytoday.news/training-on-functional-programming-with-haskell-at-nie/" target="_blank">News article</a>]<br>
							September 2016, National Institute of Engineering, Mysuru.<br>
							Co-instructor (with Prof. S P Suresh).
						</p></li>
		</ul>			
		<h2>As Teaching Assistant</h2>	
		<ul style="text-align:left">
				<li><p>
					<strong>Programming Language Concepts.</strong><br>
					January &ndash; April 2015, Chennai Mathematical Institute.<br>
					TA for Prof. S P Suresh.	
				</p></li>						
				<li><p>
					<strong>Programming in Haskell.</strong><br>
					August &ndash; December 2014, Chennai Mathematical Institute.<br>
					TA for Prof. S P Suresh.	
				</p></li>
				<li><p>
					<strong>EECS 376: Foundations of Computer Science.</strong><br>
					August &ndash; December 2011, University of Michigan, Ann Arbor.<br>
					GSI for Prof. Kevin Compton.	
				</p></li>
				<li><p>
					<strong>EECS 487: Interactive Computer Graphics.</strong><br>
					January &ndash; April 2011, University of Michigan, Ann Arbor.<br>
					GSI for Prof. Sugih Jamin.	
				</p></li>
		</ul>
</div>

<!-- pages/projects.md -->
<!-- <div class="projects"> -->
<!-- Display projects without categories -->
  <!-- {%- assign sorted_courses = site.courses | sort: "importance" -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses.liquid %}
    {%- endfor %}
    </div>
  </div>
</div>
 -->


<!-- <div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% assign sorted_projects = site.projects | sort: "importance" %}


{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div> -->
