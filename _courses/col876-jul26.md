---
layout: page
title: Automatic theorem proving using Lean (COL876/COL8271 &ndash; Special Topics in Formal Methods)</h3>
description: July 2026 &ndash; December 2026
# img: assets/img/12.jpg
importance: 1
# category: work
---

<header>
	<h2><strong>Course timings &amp; Venue:</strong></h2> <h3><p style="display:inline">Mondays &amp; Thursdays 1530 &ndash; 1700, in LH413.4.</p></h3>
</header>

<hr style="border: 1px dashed; color: orange" />

<strong>
Important:
</strong>
The first lecture will be held on Monday the 27th of July. There will be no class on Thursday the 23rd.

<!-- <strong>
		If you want to but cannot register (perhaps because you do not fulfil the system-required prerequisites, which are different from the ones <a href="#prereq">here</a>), please fill out a General Request on the portal and mention me as the course coordinator. I will approve your request and the admin will eventually register you for the course.
</strong>

<hr style="border: 1px dashed; color: orange" /> -->

<br>

<header>
    <h2> <strong>What is this course about?</strong> </h2>
</header>

<p>Automatically generating and verifying proofs of correctness has been steadily gaining prominence in mathematics and computer science, especially with LLMs pervading all aspects of our lives. Proof assistants like Rocq and Lean are at the forefront of this effort, but being able to generate proofs of correctness requires a lot of scaffolding and the encoding of fundamental structures to build things up from the ground up. This course is designed to be a primer to learn how to write proofs in the proof assistant Lean. 
</p>

<p>In this course, we will see how to encode basic discrete structures like graphs, trees, and orders in Lean, and prove theorems about them. This will give us a hands-on introduction to Lean and the way various constructs work in Lean, and we will slowly build up to proving statements about more complex data structures and algorithms, with a view to how such proofs can be used in mathematics and computer science. We will also get a flavour of how Lean works behind the scenes, and the dependent type theory that is used for it. Finally, we will look at GenAI techniques for Lean, and see if we can use some of these to generate (correct) proofs of interest.
</p> 

<br>

<header>
    <h2 id="prereq"><strong> Prerequisites </strong></h2>
</header>
<p> You should have some working understanding of the syntax of propositional/first order logic, a basic idea of what graphs and orders are, and an interest in coming up with rigorous mathematical proofs. It is helpful to have done a discrete mathematics course, but not necessary. </p>

<br>

<!-- <header>
    <h2><strong> Lecture Notes &amp; Reference Material </strong></h2>
</header>
<div class="table-responsive">
<table class="table table-sm table-bordered">
  <thead class="thead-dark">
    <tr>
      <th>Date</th>
      <th>Slides</th>
      <th>References (if any)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>24 July, 2023</td>
      <td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec1.pdf" target="_blank">Lecture 1</a></p></td>
      <td></td>
    </tr>
    <tr>
      <td>27 July, 2023</td>
      <td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec2.pdf" target="_blank">Lecture 2</a></p></td>
      <td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/normsub.pdf" target="_blank">Normalization and subterm property</a></p></td>
    </tr>
		<tr>
			<td>3 August, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec3.pdf" target="_blank">Lecture 3</a></p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/quiz1-with-answers.pdf" target="_blank">Quiz 1 (with solutions)</a></p></td>
		</tr>
		<tr>
			<td>7 August, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec4.pdf" target="_blank">Lecture 4</a></p></td>
			<td></td>
		</tr>
		<tr>
			<td>10 August, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec5.pdf" target="_blank">Lecture 5</a></p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/appliedpi.pdf" target="_blank">Notes on the applied-pi calculus</a></p></td>
		</tr>
		<tr>
			<td>14 August, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec6.pdf" target="_blank">Lecture 6</a></p></td>
			<td></td>
		</tr>
		<tr>
			<td>17 August, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec7.pdf" target="_blank">Lecture 7</a></p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/newns.pv" target="_blank">ProVerif code</a></p></td>
		</tr>
		<tr>
			<td>21 August, 2023</td>
			<td><p>Applied-pi Calculus Review</p></td>
			<td></td>
		</tr>
		<tr>
			<td>24 August, 2023</td>
			<td><p>ProVerif Review</p></td>
			<td></td>
		</tr>	
		<tr>
			<td>28 August, 2023</td>
			<td><p>Review &amp; discussion</p></td>
			<td></td>
		</tr>	
		<tr>
			<td>31 August, 2023</td>
			<td><p>Lecture 8, Undecidability of the secrecy problem</p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/undec-2count.pdf" target="_blank">Notes</a></p></td>
		</tr>
		<tr>
			<td>4 September, 2023</td>
			<td><p>Assignment 1 Review</p></td>
			<td></td>
		</tr>
		<tr>
			<td>18 September, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec9.pdf" target="_blank">Lecture 9</a></p></td>
			<td></td>
		</tr>
		<tr>
			<td>25 September, 2023</td>
			<td><p>More about multiset rewriting and Tamarin</p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/try.spthy" target="_blank">Tamarin Code</a></p></td>
		</tr>
		<tr>
			<td>28 September, 2023</td>
			<td><p>Some more Tamarin</p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/ns-toy.spthy" target="_blank">Tamarin Code</a></p></td>
		</tr>
		<tr>
			<td>9 October, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec10.pdf" target="_blank">Lecture 10</a>, Constraint satisfaction</p></td>
			<td></td>
		</tr>
		<tr>
			<td>12 October, 2023</td>
			<td><p>Guest lecture by Mr. Karl Normann, Ericsson Research</p></td>
			<td></td>
		</tr>
		<tr>
			<td>16 October, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec11.pdf" target="_blank">Lecture 11</a>, Computational soundness (part 1)</p></td>
			<td></td>
		</tr>
		<tr>
			<td>19 October, 2023</td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/lec12.pdf" target="_blank">Lecture 12</a>, Computational soundness (part 2)</p></td>
			<td><p><a href="../../assets/pdf/lecnotes/col876-diw23/ref/comp-sound.pdf" target="_blank">Original paper</a></p></td>
		</tr>
  </tbody>
</table>
</div> -->


<br>

<header>
    <h2><strong> Evaluation Policy </strong></h2>
</header>
<p>
<ul>
<li> In-class quizzes (at most 5): 0&ndash;5% </li>
<li> Programming tests: 20% </li>
<li> Minor exam: Around 25% </li>
<li> Final project + deliverables: Around 50% </li>
</ul>
Academic dishonesty is taken very seriously in the department, and can lead to severe penalties and reporting to the disciplinary committee. If you are dishonest in a programming test, proctored exam, or in-class quiz, you get an F grade in the course. Academic dishonesty/similar submissions/unauthorized use of LLMs on the project will yield two grades down for all members of the project team, regardless of who committed the offence.

No retests will be done for any gradable items. Missing the minor exam for a medical reason upon submission of certificate will lead to the in-person part of the project deliverable being scaled up. Missing any part of the project deliverable will result in a zero for that part.
</p>

<p> <strong> Audit policy: </strong> Audit pass needs at least a B- overall, including at non-zero marks in all deliverable items.</p>



