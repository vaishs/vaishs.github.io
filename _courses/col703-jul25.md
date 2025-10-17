---
layout: page
title: COL703 &ndash; Logic for Computer Science
description: July 2025 &ndash; November 2025
# img: assets/img/12.jpg
importance: 1
# category: work
---

<header>
	<h2><strong>Course timings &amp; Venue:</strong></h2> <h3><p style="display:inline">B slot: Mondays &amp; Thursdays 0930 &ndash; 1100, in LH121.</p></h3>
</header>

<hr style="border: 1px dashed; color: orange" />

<!-- <strong>
		If you want to but cannot register (perhaps because you do not fulfil the system-required prerequisites, which are different from the ones <a href="#prereq">here</a>), please fill out a General Request on the portal and mention me as the course coordinator. I will approve your request and the admin will eventually register you for the course.
</strong>

<hr style="border: 1px dashed; color: orange" /> -->

<br>

<header>
    <h2> <strong>What is this course about, and why should I take it?</strong> </h2>
</header>

<p>Logicians will often tell you that the primary raison d'être of logic is to systematically evaluate arguments for deductive validity, or something equally abstruse along those lines. So why should you, a computer scientist, bother with logic at all? Because, as anyone who has ever written a program beyond "Hello, world!" knows, writing code is hard. Writing <em>good</em> code is even harder, and this starts even before we have written any code at all! Are you sure that what you <em>think</em> you want is really what you want? Will your code actually work? How reasonable are the assumptions you have made along the way? These are questions that logic can help you think about in a systematic way.</p>

<p>The objective of this course is to learn fundamental ideas that help us create abstract models of systems in the real world, so we can then ensure that they behave as they should. This course will essentially cover concepts related to how to model complex systems abstractly while making good choices, as well as how to reason about these systems automatically, with a view to formal verification.
</p>

<br>

<header>
    <h2 id="prereq"><strong> Prerequisites </strong></h2>
</header>
<p> This fundamental material covered in this course is fairly abstract and theoretical, and will therefore require some mathematical acumen -- students should, at the very least, be able to write and understand rigorous formal proofs, especially those involving various kinds of induction. There will also be some programming involved to implement various concepts. You should have taken <strong>at least one</strong> of the following courses (or equivalents thereof):
<ul>
		<li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL106" target="_blank">COL106 (Data Structures & Algorithms)</a>.</p></li>
    <li><p><a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL202" target="_blank">COL202 (Discrete Mathematical Structures)</a></p></li>
</ul>
</p>

<br>

<header>
		<h2><strong> Evaluation policy </strong></h2>
</header>
<p>
	<ul>
			<li><p>Minor: 20%. No re-minor will be conducted. If you miss the minor for a medical reason (with appropriate documentation produced within one week of the minor), the major marks will be scaled up accordingly.</p></li> 
			<li><p>Major: 40%. The syllabus for the major exam will include everything covered in the course.</p></li>
			<li><p>Quizzes: 15&ndash;20%. There will be some surprise quizzes conducted in class on various days during the semester. Best n-1 out of n will be considered. Absence in a quiz is directly marked 0. No make-up quizzes will be conducted.</p></li>
			<li><p>Practicals: 20%. Described in the first lecture.</p></li>
			<li><p>In-class participation, attendance etc: 0&ndash;5%.</p></li>
			<li><p>Best example(s) of real-world situations modelled in logic: 0&ndash;5% <strong>Bonus</strong>.</p></li>
	</ul>
</p>

<p>Audit pass needs at least a B- overall, including at least 10% out of the 15&ndash;20% earmarked for quizzes.</p>
	
<p>Deviation of any sort from the IIT Delhi honour code (copying, plagiarism, collaborating on gradable items where explicitly disallowed etc. &ndash; see <a href="https://t.ly/jACWG" target="_blank">here</a> for more examples) will result in some manner of grade docking (potentially as bad as a summary fail), and potentially further disciplinary action.</p>

<header>
	<h2><strong> Reference material </strong></h2>
</header>
<p>
	We will follow notes presented in class, for the most part, which will be uploaded here. Some external references for much of the course are listed below (caveat emptor: notation used in these notes/books might significantly differ from the ones used in class).
</p>
<p>
	<ul> 
		<li><p><a href="https://www.logicmatters.net/ifl/" target="_blank">Introduction to Formal Logic</a>, by Peter Smith</p></li>
		<li><p><a href="https://archive.org/details/formallogicitssc0000jeff_d0z0/" target="_blank">Formal Logic: Its Scope and Limits</a>, by Richard C. Jeffrey (also available in the IIT library)</p></li>
		<li><p><a href="https://www.cse.iitd.ac.in/~sak/courses/ilcs/2020-21/ilcs.pdf" target="_blank">Hyper-notes for Logic in Computer Science</a>, by Prof. S. Arun-Kumar</p></li>
		<li><p><a href="https://softwarefoundations.cis.upenn.edu" target="_blank">Software Foundations</a>, by various authors</p></li>
		<li><p><a href="https://github.com/lean-forward/logical_verification_2025/blob/76421700cb010aeddeb2b2a4a93e538b92b0e585/hitchhikers_guide_2025_desktop.pdf" target="_blank">The Hitchhiker's Guide to Logical Verification</a>, by various authors</p></li>
	</ul>
</p>

<header>
    <h2><strong> Lecture Notes &amp; Reference Material </strong></h2>
</header>
<div class="table-responsive">
<table class="table table-sm table-bordered">
  <thead class="thead-dark">
    <tr>
      <th style="width:150px; text-align:center">Date</th>
      <th style="width:200px; text-align:center">Slides</th>
      <th>References and suggested follow-up reading (if any)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; vertical-align: middle;">28 July, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p><a href="../../assets/pdf/lecnotes/col703-diw25/lec0.pdf" target="_blank">Course policy and introduction</a></p></td>
      <td>
						<p>
								<ul>
										<li><p><a href="https://archive.org/details/ladyortigeran00smul" target="_blank">The Lady or the Tiger</a>, by <a href="https://en.wikipedia.org/wiki/Raymond_Smullyan" target="_blank">Raymond Smullyan</a></p></li>
										<li><p><a href="https://douxnet.weebly.com/uploads/2/0/4/1/20418601/raymond_m._smullyan-to_mock_a_mockingbird_and_other_logic_puzzles__including__an_amazing_adventure_in_combinatory_logic-knopf_1985.pdf" target="_blank">To Mock A Mockingbird</a>, also by Raymond Smullyan</p></li>
								</ul>
						</p>
				</td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">31 July, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p><a href="../../assets/pdf/lecnotes/col703-diw25/lec1.pdf" target="_blank">Preliminaries</a></p></td>
      <td>
						<p>
								<ul>
										<li><p>Chapters 4 and 8 of <a href="https://courses.csail.mit.edu/6.042/spring18/mcs.pdf" target="_blank">Mathematics for Computer Science</a>, by Eric Lehman, F Thomas Leighton, and Albert R Meyer</p></li>
								</ul>
								<ul>
										<li><p><a href="https://www.sydney.edu.au/content/dam/students/documents/mathematics-learning-centre/mathematical-induction.pdf" target="_blank">Introductory notes on Mathematical Induction</a> by Mary Barnes and Sue Gordon</p></li>
								</ul>
								<ul>
										<li><p>Section 14 in Naive Set theory by Paul Halmos, PDF found <a href="https://github.com/matheusgirola/Halmos-Naive-Set-Theory-OCR-LaTeX-Reedition" target="_blank">here</a> </p></li>
								</ul>
						</p>
				</td>
    </tr>
 <tr>
   <td style="text-align: center; vertical-align: middle;">4 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw25/lec2.pdf" target="_blank">Propositional logic</a></p></td>
   <td></td>
 </tr>
<tr>
   <td style="text-align: center; vertical-align: middle;">7 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec3.pdf" target="_blank">Propositional logic (contd.)</a></p></td>
   <td></td>
 </tr>
 <tr>
   <td style="text-align: center; vertical-align: middle;">11 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec4.pdf" target="_blank">More propositional logic</a></p></td>
   <td>
   	<p><a href="https://ideas.science.uu.nl/logex/#" target="_blank">Here</a> is a link where you can play around with equivalences and normal forms for various expressions. Make sure that you use the English language toggle on the top right if it loads in Dutch. Most of the conversion rules should be easy enough to figure out (they are identities we have covered in class). The only exception is the rule for bidirectional implication, which is: p &hArr; q iff (p &and; q) &or; (&not;p &and; &not;q).
			</p>
   </td>
 </tr>
<tr>
   <td style="text-align: center; vertical-align: middle;">18 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec5.pdf" target="_blank">Resolution</a></p></td>
   <td>
   </td>
 </tr>
 <tr>
   <td style="text-align: center; vertical-align: middle;">21 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec6.pdf" target="_blank">The Hilbert system</a></p></td>
   <td>
   </td>
 </tr>
<tr>
   <td style="text-align: center; vertical-align: middle;">25 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec7.pdf" target="_blank">Completeness for the Hilbert system</a></p></td>
   <td>
			<p><a href="../../assets/pdf/lecnotes/col703-diw24/ref/dtproofs.pdf" target="_blank">Here</a> is a list of proofs you should try to do using the Deduction Theorem. These are fairly fundamental statements and are often useful. Try to do the proofs in order, since some later ones might need you to invoke the ones that came prior.</p>
   	<p><a href="https://ideas.science.uu.nl/logax/" target="_blank">Here</a> is a link where you can play around with proofs in the Hilbert system. Make sure that you use the English language toggle on the top right if it loads in Dutch. The three axioms are called A, B, and C. A and B are the same as our H1 and H2, but axiom C is taken to be (NOT p IMPLIES not q) IMPLIES (q IMPLIES p).</p>
   </td>
 </tr>
 <tr>
   <td style="text-align: center; vertical-align: middle;">28 August, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec8.pdf" target="_blank">Propositional logic: Wrap up</a></p></td>
   <td>
			<p><a href="https://www.cs.ox.ac.uk/people/james.worrell/lecture08.pdf" target="_blank">This link</a> has an excellent write-up about the Compactness Theorem and the Graph Colouring application.</p>
   	<p><a href="https://www.murdle.com" target="_blank">Murdle</a> is an excellent, fun way to sharpen your logical inference skills. Try to code up today's Murdle in propositional logic! (You need to come up with the right propositions and the right connectives. This will often require some human meta-reasoning using the given clues.)
			</p>
   </td>
 </tr>
 <!-- <tr>
   <td style="text-align: center; vertical-align: middle;">31 August, 2024</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="https://microsoft.github.io/z3guide/playground/Freeform%20Editing/" target="_blank">Z3 Walkthrough</a></p></td>
   <td>
			<p>You can play around with other Z3 exercises <a href="https://systems-rg.github.io/wss23-logic-labs.html" target="_blank">here</a>. Z3 is a solver that primarily tries to solve the Satisfiability problem, which is <a href="https://en.wikipedia.org/wiki/Cook-Levin_theorem" target="_blank">known to be hard</a>. However, the problem is so common across subfields that enterprising computer scientists have come up with inventive ways to solve this problem anyway. Recommended reading related to SAT solving includes <a href="https://en.wikipedia.org/wiki/DPLL_algorithm" target="_blank">the DPLL algorithm</a> (which is related to Resolution) and <a href="https://en.wikipedia.org/wiki/Conflict-Driven_Clause_Learning" target="_blank">Conflict-Driven Clause Learning</a> (which tries to "learn" a satisfying valuation for the given expression). Come talk to me if you're interested in learning more or working on extensions of any of these!
			</p>
   </td>
 </tr> -->
 <tr>
   <td style="text-align: center; vertical-align: middle;">1 September, 2025</td>
   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec9.pdf" target="_blank">First-order logic</a></p></td>
   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">4 September, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec10.pdf" target="_blank">More first-order logic</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">8 September, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec11.pdf" target="_blank">FO: Truth and models</a></p></td>
	   <td>Chapters 21 through 24 of Introduction to Formal Logic by Peter Smith contain many examples.</td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">11 September, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p>Review lecture</p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">18 September, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec12.pdf" target="_blank">FO: Normal forms</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">6 October, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec13.pdf" target="_blank">Unification</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">9 October, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec14.pdf" target="_blank">Unification and resolution</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">13&ndash;16 October, 2025</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec15.pdf" target="_blank">FO resolution</a></p></td>
	   <td>
					<p><a href="https://www.cs.utexas.edu/~novak/reso.html" target="_blank">This link</a> is an excellent repository of exercises that you can try out to get better both at modelling "real life" statements in FOL, and at performing resolution (to prove the conclusion from the axioms). </p>
					<p>FO Resolution is often used in automated theorem proving. <a href="https://github.com/evhub/pyprover" target="_blank">Here</a> is a nice little implementation in Python. Caveat: Theorem proving using resolution is not complete, since the rule does not yield a complete proof system for FOL (unlike the PL resolution rule), so you might not be able to prove everything you might want to. </p>
			</td>
	</tr>
	<!-- <tr>
	   <td style="text-align: center; vertical-align: middle;">14 October, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec16.pdf" target="_blank">FO completeness</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">17 October, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec17.pdf" target="_blank">FO completeness</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">21 October, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec18.pdf" target="_blank">Natural deduction for FOL</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">24 October, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec19.pdf" target="_blank">More natural deduction</a></p></td>
	   <td>
				<p><a href="../../assets/pdf/lecnotes/col703-diw24/ref/ndproofs.pdf" target="_blank">Here</a> is a list of proofs you should try to do using the natural deduction proof system.</p>
	   </td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">28 October, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec20.pdf" target="_blank">First-order theories</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">4 November, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec21.pdf" target="_blank">More about First-order theories</a></p></td>
	   <td></td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">7 November, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec22.pdf" target="_blank">Incompleteness</a></p></td>
	   <td>
				<p><a href="https://www.logicmatters.net/resources/pdfs/godelbook/GodelBookLM.pdf" target="_blank">This book</a> by Peter Smith provides a lovely, concise introduction to G&ouml;del's Incompleteness theorem. The technique is slightly different from the ones in the notes, but it is a thoroughly approachable text.</p>
				<p><a href="https://www.ams.org/notices/200604/fea-franzen.pdf" target="_blank">This</a> very interesting piece by Torkel Franz&eacute;n presents a view of the overall context into which the Incompleteness theorem fits. <a href="https://www.logic.at/goedel2006/files/picsatexhibition.pdf" target="_blank">This</a> cute article by Karl Sigmund describes setting up an <a href="https://www.logic.at/goedel2006/index.php?exhibition" target="_blank">exhibition in Vienna</a> in 2006 on the centenary of G&ouml;del's birth, with a very entertaining tapestry of the history of his life and times. These pieces appeared in the <a href="https://www.ams.org/notices/200604/200604FullIssue.pdf" target="_blank">Notices of the AMS, volume 53, number 4 (A tribute to Kurt G&ouml;del)</a>.
				</p>
	   </td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">11 November, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec23.pdf" target="_blank">Hoare logic</a></p></td>
	   <td>
					<p>
							The original CACM article by Tony Hoare, which introduced Hoare logic can be found <a href="http://sunnyday.mit.edu/16.355/Hoare-CACM-69.pdf" target="_blank">here</a>.
						</p>
					<p>
						<a href="https://dl.acm.org/doi/pdf/10.1007/s00165-019-00501-3" target="_blank">This</a> is a fairly comprehensive survey about Hoare logic, written in 2019 to mark fifty years of the CACM article by Tony Hoare which originally introduced the logic. It gives some history of what had come before, and how Hoare logic applies to various kinds of systems one might want to develop and verify.
						</p>
	   	<p>
						There are a couple of pedagogical tools one can use to learn Hoare logic better. One is <a href="https://haha.mimuw.edu.pl" target="_blank">the HAHA system</a>, developed at the University of Warsaw. Another, which helpfully has an in-browser version, is the <a href="https://formal.kastel.kit.edu/key/download/hoare/" target="_blank">KeY-Hoare</a> tool, developed by folks from Karlsruhe Institute of Technology, Chalmers University of Technology, and TU Darmstadt.
				</p>
	  </td>
	</tr>
	<tr>
	   <td style="text-align: center; vertical-align: middle;">14 November, 2024</td>
	   <td style="text-align: center; vertical-align: middle"><p><a href="../../assets/pdf/lecnotes/col703-diw24/lec24.pdf" target="_blank">Hoare logic, more logic</a></p></td>
	   <td></td>
	</tr> -->
	</tbody>
</table>
</div>


<br>
