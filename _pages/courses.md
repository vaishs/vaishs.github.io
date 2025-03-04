---
layout: page
title: Courses
permalink: /courses/
nav: false
---

<!-- pages/projects.md -->
<div class="projects">
<!-- Display projects without categories -->
  {%- assign sorted_courses = site.courses | sort: "importance" -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses.html %}
    {%- endfor %}
    </div>
  </div>
</div>