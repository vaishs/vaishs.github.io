---
layout: page
title: COL750 - Foundations of Automatic Verification
description: January 2024 &ndash; May 2024
# img: assets/img/12.jpg
importance: 1
# category: work
---

<header>
	<h2><strong>Course timings &amp; Venue:</strong></h2> <h3><p style="display:inline">AC slot: Tuesdays &amp; Fridays 1400 &ndash; 1530, in LHC603.</p></h3>
</header>

<hr style="border: 1px dashed; color: orange" />

<!-- <strong>
		If you want to but cannot register (perhaps because you do not fulfil the system-required prerequisites, which are different from the ones <a href="#prereq">here</a>), please fill out a General Request on the portal and mention me as the course coordinator. I will approve your request and the admin will eventually register you for the course.
</strong>

<hr style="border: 1px dashed; color: orange" /> -->

<br>

<header>
    <h2> <strong>What is this course about?</strong> </h2>
</header>

<p>The objective of this course is to learn basic concepts related to ensuring that systems behave as they are expected to. Ensuring that systems behave in a reliable, correct manner is crucial for  safety-critical applications. For such applications, all possible operation scenarios must be considered, and bugs can prove to be very costly. Traditional testing can often overlook some unlikely behaviour that might prove disastrous later, and does not suffice to provide the kind of definitive guarantees that we require of such systems.
</p>

<p>One way to get guarantees about safe operation is via the use of formal verification. In this course, we will study how to formally represent real-world systems using various abstract models like logic and automata, and how to express and verify properties that capture desirable system behaviour. In addition, since verification by hand is cumbersome and often error-prone, we will study tools that are often used to automate this process.
</p> 

<p>Topics we hope to cover in this course include various temporal logics, Hoare logic, SMT solving, and theorem proving. </p>
<br>

<header>
    <h2 id="prereq"><strong> Prerequisites </strong></h2>
</header>
<p> The course involves concepts from logic, automata theory, algorithms, proof theory, and programming languages. Understanding the material will, therefore, require some mathematical acumen -- students should, at the very least, be able to write and understand rigorous formal proofs, especially those involving induction. Students will also be required to be conversant with basic concepts of propositional/predicate logic, syntax/semantics, automata, and algorithms. A very basic idea of complexity theory is also necessary; notions like reductions, (un-)decidability, and NP-completeness should not seem unfamiliar. You should have taken <strong>both</strong> of the following courses (or equivalents thereof):
<ul>
    <li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL202" target="_blank">COL202 (Discrete Mathematical Structures)</a>, and</p></li>
    <li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL352" target="_blank">COL352 (Introduction to Automata & Theory of Computation)</a>.</p></li>
</ul>
It will help if you have taken <a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL703" target="_blank">COL703 (Logic for Computer Science)</a>, but this is not a necessary prerequisite.
</p>

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
</div>


<br> -->

<header>
    <h2><strong> Evaluation Policy </strong></h2>
</header>
<p>
<ul>
<li> In-class participation and quizzes: 20% </li>
<li> Assignments: 40% </li>
<li> Mid-term exam: 20% </li>
<li> Project: 20% </li>
</ul>
</p>
<p> <strong> Audit policy: </strong> B- or above, with at least 80% in the first quiz.</p>
<p> <strong> Pass criterion for credit: </strong> 40% or above, with at least 80% in the first quiz.</p>
