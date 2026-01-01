---
layout: page
title: Formal Verification of Security Protocols (COL876 &ndash; Special Topics in Formal Methods)</h3>
description: July 2023 &ndash; December 2023
# img: assets/img/12.jpg
importance: 1
# category: work
---

<header>
	<h2><strong>Course timings &amp; Venue:</strong></h2> <h3><p style="display:inline">Mondays &amp; Thursdays 1530 &ndash; 1700, in SIT006.</p></h3>
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

<p>Nowadays, we use smart devices and the internet to do everything from chatting with friends to booking movie tickets to transferring large amounts of money to each other. How does one ensure that these cryptographic mechanisms (often called "security protocols") are secure (“nobody but me should be able to access my bank account”), private (“nobody should be able to link a payment from my anonymous Ethereum wallet to my real life identity”) etc? 
</p>

<p>It has been shown that even if the underlying cryptographic mechanisms are assumed to be perfectly correct, security protocols can often admit very problematic logical flaws. Attacks have been demonstrated on critical protocols ranging from those used for e-voting to those used in RFID passports. To get guarantees about safe operation, one can use formal verification, in which we mathematically model these protocols and the desired properties, and see if the model satisfies these properties. In this course, we will study how to formally model security protocols using various abstract systems, and how to express and verify properties over such models. In addition, since verification by hand is cumbersome and often error-prone, we will see how to code up protocols and verify properties using some specialized software.
</p> 

<p>
We will also see how this analysis, which is based mostly in abstract logic and theoretical computer science, fits into the engineering workflow of a protocol going from design to deployment, and what challenges arise during this process. While this course concentrates on the formal analysis and verification of security protocols, many of the techniques used here provide a good introduction to the field of formal verification as a whole.
</p>


<br>

<header>
    <h2> <strong>Who should take this course?</strong> </h2>
</header>
<p>
This course is for you if 
<ul>
    <li><p>you have ever wondered how messaging systems like Signal or Whatsapp ensure that messages are "end-to-end encrypted", or</p></li>
    <li><p>you worry about whether banking systems <i>really</i> are as secure and correct as one would hope and expect, or</p></li>
    <li><p>you just have an interest in combining abstract tools like logic and automata theory with programming to solve real life problems.</p></li>
</ul>
</p>

<br>

<header>
    <h2 id="prereq"><strong> Prerequisites </strong></h2>
</header>
<p> The course involves concepts from automata theory, algorithms, logic, proof theory, and programming languages. Understanding the material will, therefore, require some mathematical acumen -- students should, at the very least, be able to write and understand rigorous formal proofs, especially those involving induction. Students will also be required to be conversant with basic concepts of syntax/semantics, automata, and algorithms. A very basic idea of logic and of complexity theory is also necessary; notions like inference, reductions, and NP-completeness should not seem unfamiliar. You should have taken the following courses at IIT Delhi:
<ul>
    <li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL202">COL202 (Discrete Mathematical Structures)</a>, and</p></li>
    <li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL352">COL352 (Introduction to Automata & Theory of Computation)</a>.</p></li>
</ul>
</p>
<p>
These courses are not a hard prerequisite. If you do not fulfil the above prerequisites, but think you have the necessary background to attend this course, feel free to get in touch.
</p>

<br>

<header>
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


<br>

<header>
    <h2><strong> Evaluation Policy </strong></h2>
</header>
<p>
<ul>
<li> In-class quizzes: 10% </li>
<li> Assignments: 40% </li>
<li> Project/Paper presentation: 50% </li>
</ul>
</p>
<p> <strong> Audit policy: </strong> 40% pass.</p>


<!-- For the project, two options exist:

- Team of two: Pick an RFC for a protocol in the wild (a list of potential suggestions will be provided), pick two properties (at least one "non-trivial"), and prove whether these properties hold of said protocol in some model. Justify your results and your choices. You will need to write a report and publicly host your code, based on which, there will be an individual oral exam.

- Individual: Read a paper related to the course (a list of potential suggestions will be provided) and make a presentation. In this presentation, you should convey what made you pick the paper, give an overview of what the paper is trying to achieve, set the contributions of the paper in the context of prior related work, and try to provide viable lines of future work, i.e. how the result of the paper might be extended. -->

