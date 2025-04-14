// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
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
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-started-a-ph-d-position-with-matthijs-spaan-at-the-tu-delft",
          title: 'Started a Ph.D. position with Matthijs Spaan at the TU Delft!',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-iros-2021",
          title: 'One paper accepted at IROS 2021.',
          description: "",
          section: "News",},{id: "news-attended-the-ellis-doctoral-symposium-in-tuebingen",
          title: 'Attended the ELLIS Doctoral Symposium in Tuebingen.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-ewrl-2023-in-brussels",
          title: 'One paper accepted at EWRL 2023 in Brussels.',
          description: "",
          section: "News",},{id: "news-our-technical-report-on-epistemic-ai-passed-the-halftime-review-of-eu-horizons",
          title: 'Our technical report on Epistemic AI passed the halftime review of EU Horizons....',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-iclr-2024-in-vienna",
          title: 'One paper accepted at ICLR 2024 in Vienna!',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-ewrl-2024-in-toulouse",
          title: 'One paper accepted at EWRL 2024 in Toulouse.',
          description: "",
          section: "News",},{id: "news-contextual-similarity-distillation-is-on-arxiv",
          title: 'Contextual Similarity Distillation is on Arxiv!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
