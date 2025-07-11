---
layout: page
title: COL352 &ndash; Introduction to Automata &amp; Theory of Computation
description: January 2025 &ndash; May 2025
# img: assets/img/12.jpg
importance: 1
# category: work
---

<header>
	<h2><strong>Course timings &amp; Venue:</strong> <p style="display:inline">H slot: Mondays &amp; Wednesdays 1100 &ndash; 1150 (LH 108), and Thursdays 1200 &ndash; 1250 (LH 121).</p></h2>
</header>

<hr style="border: 1px dashed; color: orange" />

<br>

<!-- <header>
    <h2> <strong>What is this course about, and why should I take it?</strong> </h2>
</header>

<p>Logicians will often tell you that the primary raison d'être of logic is to systematically evaluate arguments for deductive validity, or something equally abstruse along those lines. So why should you, a computer scientist, bother with logic at all? Because, as anyone who has ever written a program beyond "Hello, world!" knows, writing code is hard. Writing <em>good</em> code is even harder, and this starts even before we have written any code at all! Are you sure that what you <em>think</em> you want is really what you want? Will your code actually work? How reasonable are the assumptions you have made along the way? These are questions that logic can help you think about in a systematic way.</p>

<p>The objective of this course is to learn fundamental ideas that help us create abstract models of systems in the real world, so we can then ensure that they behave as they should. This course will essentially cover concepts related to how to model complex systems abstractly while making good choices, as well as how to reason about these systems automatically, with a view to formal verification.
</p>

<br> -->

<header>
    <h2 id="prereq"><strong> Prerequisites </strong></h2>
</header>
<p> This fundamental material covered in this course is fairly abstract and theoretical, and will therefore require some mathematical acumen &mdash; students should, at the very least, be able to write and understand rigorous formal proofs, especially those involving various kinds of induction. Various discrete maths concepts like closures, cardinality etc. will also feature strongly, so students should be familiar with these as well. The <a href="https://www.cse.iitd.ac.in/cse/newcurriculum-contents/newcourses.html#COL202" target="_blank">COL202 (Discrete Mathematical Structures)</a> course is a strict prerequisite.
</p>

<br>

<header>
		<h2><strong> Evaluation policy </strong></h2>
</header>
<p>
	<ul>
			<li><p>Minor: 25%. No re-minor will be conducted. If you miss the minor for a medical reason (with appropriate documentation produced within one week of the minor), the major marks will be scaled up accordingly.</p></li> 
			<li><p>Major: 35%. The syllabus for the major exam will include everything covered in the course.</p></li>
			<li><p>Quizzes: 35&ndash;40%. There will be both scheduled and surprise quizzes conducted at various points during the semester. The best n-1 out of n surprise quizzes will be considered. All scheduled quizzes will count towards the final grade. Absence in a quiz is directly marked 0. No make-up quizzes will be conducted.</p></li>
			<li><p>In-class tutorial questions: 0&ndash;5%. </p></li>
			<li><p><strong>Bonus</strong>: Asking questions and participating on Piazza and participating in Q&A in the TA-run tutorials: 0&ndash; 5%. This incentivizes an intent to learn &mdash; for questions to receive a bonus, students must have tried the problem by themselves beforehand and be willing to engage in a discussion with the teaching staff. This bonus will only be added to the final total, and is computed as (100-(your total))/100 * (instances of participation)/5 * constant, with a choice of constant such that this value normalizes to a maximum of 5%. </p></li>
<!--Computed as floor(2*(a/b - number of visits))/2. b will be the maximum number of visits + 1. a will be fixed so that the points for even one visit is non-zero. -->
	</ul>
</p>

<p>Audit pass needs at least a B- overall, including at least 25% out of the 35&ndash;40% earmarked for quizzes.</p>
	
<p>Deviation of any sort from the IIT Delhi honour code (copying, plagiarism, collaborating on gradable items where explicitly disallowed etc. &ndash; see <a href="https://t.ly/jACWG" target="_blank">here</a> and <a href="https://www.cse.iitd.ac.in/~sak/courses/general.html" target="_blank">here</a> for more examples) will summarily result in an F grade, or in case of audit, an NF, and potentially further disciplinary action. </p>

<header>
	<h2><strong> Reference material </strong></h2>
</header>
<p>
	We will follow notes presented in class, for the most part, which will be uploaded here. Some external references for much of the course are listed below (caveat emptor: notation used in these books might differ significantly from that used in class).
</p>
<p>
	<ul> 
		<li><p><a href="https://libcat.iitd.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=111085" target="_blank">Introduction to the theory of computation</a>, by Michael Sipser</p></li>
		<li><p><a href="https://libcat.iitd.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=117762" target="_blank">Theory of computation</a>, by Dexter C. Kozen</p></li>
		<li><p>Automata and computability, by Dexter C. Kozen</p></li>
	</ul>
</p>

<header>
		<h2><strong>TAs &amp; Office Hours </strong></h2>
<header>
<p> I will have my office hours on Mon, Thu 2&ndash;3PM in my office (412 Bharti Building). <br> The TAs (listed below) will hold their office hours at the General Computing Lab (GCL, 507 Bharti Building).  
	<ul>
		<li><p>Raghav Ajmera (2021CS10562): Tue, Fri 4&ndash;5PM &emsp; Tut: Fri 6&ndash;7PM</p></li>
		<li><p>Adithya Bijoy (2021CS10571): Tue, Fri 1&ndash;2PM &emsp; Tut: Wed 6&ndash;7PM</p></li>
		<li><p>Vatsal Jingar (2020CS50449): Mon, Thu 12&ndash;1PM &emsp; Tut: Mon 6.30&ndash;7.30PM</p></li>
		<li><p>Shreyash Satish Chikte (2024MCS2458): Mon, Wed 3&ndash;4PM</p></li>
		<li><p>Ramanuj Goel (2020CS50437): Mon, Thu 2&ndash;3PM &emsp; Tut: Wed 6&ndash;7PM</p></li>
		<li><p>Lakshay Saggi (2022CSZ8231): Wed, Thu 4&ndash;5PM &emsp; Tut: Wed 6&ndash;7PM</p></li>
		<li><p>Utkarsh Sharma (2021CS10098): Thu, Fri 2&ndash;3PM &emsp; Tut: Fri 6&ndash;7PM</p></li>
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
      <th style="width:200px; text-align:center">Material covered</th>
      <th>Slides and upplementary material (if any)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; vertical-align: middle;">2 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Preliminaries and introduction</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/0.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">6 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Deterministic finite-state automata</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/1.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">8 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Regular languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/2.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">9 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Nondeterminism</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/3.pdf" target="_blank">Slides</a> <br><p><a target="_blank" href="../../assets/pdf/lecnotes/col352-hol24/ref/tut/1.pdf">Tutorial sheet 1</a></p></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">13 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>NFAs and DFAs are equivalent</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/4.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
     <td style="text-align: center; vertical-align: middle;">15 January, 2025</td>
     <td style="text-align: center; vertical-align: middle;"><p>Regular expressions</p></td>
     <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/5.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
     <td style="text-align: center; vertical-align: middle;">20 January, 2025</td>
     <td style="text-align: center; vertical-align: middle;"><p>DFA minimization: The Myhill-Nerode theorem</p></td>
     <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/6.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
     <td style="text-align: center; vertical-align: middle;">22 January, 2025</td>
     <td style="text-align: center; vertical-align: middle;"><p>DFA minimization: Algorithm</p></td>
     <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/7.pdf" target="_blank">Slides</a> <br><p>The video linked to in the slides is <a target="_blank" href="https://www.youtube.com/watch?v=0XaGAkY09Wc">here</a>. <br> The L* DFA learning algorithm is closely connected to the Myhill-Nerode theorem and the techniques we have used for minimizing DFAs. <a href="https://pdf.sciencedirectassets.com/272575/1-s2.0-S0890540100X02039/1-s2.0-0890540187900526/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIALsUa%2Beh8mBXVtLl84Z1YGrVxBUZJhkwnhme6lytRpwAiAWaOtBDPv%2BLFwPZU9JNKmnBF3u97rXGBpStaeAZKArHyq8BQjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDA1OTAwMzU0Njg2NSIMHVIEEhQ%2B8qoPgBb6KpAFSzKoRltJronNtPjSiz4Km3Qfz9pKK3qQODWLUhkWW8%2FYgzbVj%2Bfh3osZeKo9QFlO%2BwovV0CKjUHj%2B7Y9dkc0fFjTBCoV4HThtyMfuLOwe2MZ8aAZPF5G69%2BjRCs%2BgTrlsmkXVojh3eggI6VB%2BQiLVijTkSXeUfh%2Btq9cIoWXnsgy4tPasjG040HNdG2vCdRAtnm6BeoS5KmVxapxmBMO8CfTqlV8z4YSux8%2B1bxbCijRYYksskCbr9OzSLD1A%2Buf7ru9DEo2KZLjGNhsC2l%2Fel6F4c%2B64o0nkKY1v2TtMasYEzitTvR050g6fx064%2Beja6aWBUnB2xbsC3%2BRr9G6z9IF8an2ESA9uAys8U0cb0fbuy1SC6ut%2BB7bz%2BVqVkH14J8VROAIR2uvcoCqG2fdoUt4tXH2t5JSwKdeGnkpA%2BSX4fBUI56ruJBV6Zs%2BjEOoHpx9chAU4S6gqwlPp85zog4g4ZIwCxll6SgZXqECNS4BEdF%2Bkq63QOe%2FaeBAdG4OYr4wzI7XWiz5bCNrTiP1GqbXzut72nzLoUEK7yacxv0KbCjvL3or5lFwPI0GBNABoKr86E2T7DSNzz0Yuauhe19XxkAPB8krobk1NhtrfliCVaS0EdSBVW%2BWiSp6DSf0x8aoZPtsAovXekz6j75I6RZcdOP56AMSwWRWrNoH879uLqkKg3vwEWKiYQB6QLkd%2B441mGXu9cq0Wgwsr8oaxSW50Q5RiDyTBjZe4orAKwzk3LBRbGVrJ2DrlTCYVlUauVRRRfboDvv2M99g7vbNVeY3zHYBj9za92nKPbN%2BrAMHetmLdaTC4h56izhQWEZfIoVNCimCjE%2BK4PLkd%2BeJJAn%2B4wesB36lcjoinjtkYocwto%2FHvAY6sgHC%2FPq0s23Oi3RUzt0ErUq4k3%2FNDxnAXtOWBTIYYT3RHmfsvqJp5uXZWzeGji3HMFhpqpZJ%2FonFK%2FjkJjSnL8AH2xEwOBrbmDZTTnDir%2FQVR%2FooWxPJiZWDPfZAWvl8twn809RgDqS3bgD%2BWhz%2F69TKU%2BpzEVaZMxXMY1E5WGtnzYyMbWwEtaq0toT%2BhhyA6zmIWPSAh85aEdEbtcyLpx%2B0TOMmOHoGTTTPzpG1GwhIjbZS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250123T055508Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY7TUTSF3D%2F20250123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6d51a0671751e98b8589b41dbaea7caf0309fca4a4953af874548c984628c5ee&hash=beea003e3130054579b2f968c87889998dd9f3dfd5e5b9b35381ef1ab2e59851&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0890540187900526&tid=spdf-54baef51-a290-4cc8-a3fb-b19490abdf01&sid=7872e7de847c914ed21a11f6215798a13868gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0f0957565256575f505b&rr=906588780f7f5475&cc=in" target="_blank">The original paper</a> is quite readable, and gives a nice overview of the procedure involved in learning a DFA from language membership queries. </p></td>
    </tr>
    <tr>
     <td style="text-align: center; vertical-align: middle;">23 January, 2025</td>
     <td style="text-align: center; vertical-align: middle;"><p>Limitations of DFAs</p></td>
     <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/8.pdf" target="_blank">Slides</a> <br><p><a target="_blank" href="https://iltis.cs.tu-dortmund.de/FoLa-WiSe2022-external/en/">This page</a> has an excellent compendium of tiny exercises you can try out to test your understanding of some of the material we cover in this course. Given the material we have covered so far, you should go through Part A. If you have ideas about extending/improving this webpage, come talk to me!</p></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">27 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Pumping lemma</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/9.pdf" target="_blank">Slides</a> <br><p><a target="_blank" href="../../assets/pdf/lecnotes/col352-hol24/ref/tut/2.pdf">Tutorial sheet 2</a></p></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">29 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Non-regular languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/10.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">30 January, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Context-free grammars</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/11.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">3 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Context-free languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/12.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">6 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Pushdown automata</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/13.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">10 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>More about pushdown automata</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/14.pdf" target="_blank">Slides</a> <br> <p> For details of how to show the equivalence between acceptance by empty stack and final state, see Supplementary Lecture E in Kozen's Automata and Computability. </p></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">12 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Languages accepted by PDAs</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/15.pdf" target="_blank">Slides</a> </td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">17 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Context-free = PDA-recognizable (part 1)</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/16.pdf" target="_blank">Slides</a> <br> <p> <a target="_blank" href="../../assets/pdf/lecnotes/col352-hol24/ref/tut/3.pdf">Tutorial sheet 3</a></p></td>
							<!-- <br> <p> Arbitrary grammars can be converted to Greibach Normal Form by first converting to Chomsky Normal Form (see Theorem 2.9 in Sipser) and then applying a series of transformations. See <a href="https://www.geeksforgeeks.org/converting-context-free-grammar-greibach-normal-form/" target="_blank">here</a>. These normal forms come in very handy for certain parsing algorithms; see for example the famous <a href="https://en.wikipedia.org/wiki/CYK_algorithm" target="_blank">CYK algorithm</a>.</p> --> 
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">19 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Context-free = PDA-recognizable (part 2)</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/17.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">20 February, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Context-free = PDA-recognizable (part 3)</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/18.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">3 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Normal forms (part 1)</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/19.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">5 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Normal forms (part 2)</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/20.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">6 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>CYK parsing</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/21.pdf" target="_blank">Slides</a></td>
    </tr>
        <tr>
      <td style="text-align: center; vertical-align: middle;">17 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Non-context-free languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/22.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">19 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>(More about) Non-context-free languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/23.pdf" target="_blank">Slides</a> <br> <p> <a target="_blank" href="../../assets/pdf/lecnotes/col352-hol24/ref/tut/4.pdf">Tutorial sheet 4</a></p></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">20 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Towards computability</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/24.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">24 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Computable functions</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/25.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">26 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>More about computability</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/26.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">27 March, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Turing-computability</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/27.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">2 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Turing machines</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/28.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">3 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Recognizability and decidability</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/29.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">7 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Decidable languages</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/30.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">9 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Turing machine variants</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/31.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">16 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>More variants of Turing machine</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/32.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">17 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Machines as input</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/33.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">21 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Undecidability</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/34.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">23 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>Reductions</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/35.pdf" target="_blank">Slides</a></td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle;">24 April, 2025</td>
      <td style="text-align: center; vertical-align: middle;"><p>More reductions</p></td>
      <td><a href="../../assets/pdf/lecnotes/col352-hol24/notes/36.pdf" target="_blank">Slides</a> <br> <p> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_undecidable_problems">Here</a> is a list of interesting problems known to be undecidable.</a></p> <br> <p> <a target="_blank" href="../../assets/pdf/lecnotes/col352-hol24/ref/tut/5.pdf">Tutorial sheet 5</a></p></td>
    </tr>
	</tbody>
</table>
</div>