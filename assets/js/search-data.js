// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "A selection of talks",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "courses-col352-amp-ndash-introduction-to-automata-amp-amp-theory-of-computation",
          title: 'COL352 &amp;amp;ndash; Introduction to Automata &amp;amp;amp; Theory of Computation',
          description: "January 2025 &amp;ndash; May 2025",
          section: "Courses",handler: () => {
              window.location.href = "/courses/col352-jan25.html";
            },},{id: "courses-col352-amp-ndash-introduction-to-automata-amp-amp-theory-of-computation",
          title: 'COL352 &amp;amp;ndash; Introduction to Automata &amp;amp;amp; Theory of Computation',
          description: "January 2026 &amp;ndash; May 2026",
          section: "Courses",handler: () => {
              window.location.href = "/courses/col352-jan26.html";
            },},{id: "courses-col703-amp-ndash-logic-for-computer-science",
          title: 'COL703 &amp;amp;ndash; Logic for Computer Science',
          description: "July 2024 &amp;ndash; November 2024",
          section: "Courses",handler: () => {
              window.location.href = "/courses/col703-jul24.html";
            },},{id: "courses-col703-amp-ndash-logic-for-computer-science",
          title: 'COL703 &amp;amp;ndash; Logic for Computer Science',
          description: "July 2025 &amp;ndash; November 2025",
          section: "Courses",handler: () => {
              window.location.href = "/courses/col703-jul25.html";
            },},{id: "courses-formal-verification-of-security-protocols-col876-amp-ndash-special-topics-in-formal-methods",
          title: 'Formal Verification of Security Protocols (COL876 &amp;amp;ndash; Special Topics in Formal Methods)',
          description: "July 2023 &amp;ndash; December 2023",
          section: "Courses",handler: () => {
              window.location.href = "/courses/col876-jul23.html";
            },},{id: "courses-col750-foundations-of-automatic-verification",
          title: 'COL750 - Foundations of Automatic Verification',
          description: "January 2024 &amp;ndash; May 2024",
          section: "Courses",handler: () => {
              window.location.href = "/courses/scrapped_col750-jan24.html";
            },},{id: "news-our-work-on-analyzing-the-edhoc-protocol-was-published-in-the-ccis-book-series-by-springer-access-it-here",
          title: 'Our work on analyzing the EDHOC protocol was published in the CCIS book...',
          description: "",
          section: "News",},{id: "news-our-paper-about-the-insecurity-problem-for-assertions-has-been-accepted-at-ieee-csf-2024-arxiv-version",
          title: 'Our paper about the insecurity problem for assertions has been accepted at IEEE...',
          description: "",
          section: "News",},{id: "news-i-am-teaching-introduction-to-automata-and-theory-of-computation-col352-this-semester-more-details-here",
          title: 'I am teaching Introduction to Automata and Theory of Computation (COL352) this semester....',
          description: "",
          section: "News",},];
