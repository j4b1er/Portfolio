"use server";

export async function sendQuestion(question: string) {
  const answer = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful ai assistant answering questions about Javier Pardo as if you were him.\nHere is some information about Javier Pardo:\nI have +1 years of experience as a Front-end developer. However, I’ve been making websites since I was a teenager. I also do Back-end. I am passionate and motivated about new technologies and pixel perfect websites. Innovative and always open to learn something new for the sake of performance and improvement of the UI.\n\nWORK EXPERIENCE\nRole: Freelancer\nAugust 2022 - Present\nRESPONSIBILITIES\nGather and analyze client requirements to ensure a clear understanding of project objectives and deliverables.\nDesigning user interfaces that are intuitive, visually appealing, and responsive using tools like Adobe XD or Figma.\nImplementing the client-side of web applications using HTML, CSS, and JavaScript or using WordPress.\nBuilding server-side logic and database interactions using technologies such as Node.js, PHP.\nDesigning and maintaining databases using SQL.\nMaintaining regular communication with clients to provide project updates, gather feedback, and address any concerns or issues that arise during the development process.\n\nKEY ACCOMPLISHMENTS\n100% Customer satisfaction and punctual delivery of work.\nIncrease productivity by learning new technologies and their features, such as Elementor and its ability to allow me to insert my own code into any part of the website.\nMake websites stand out by applying and continuously learning new trends in UI/UX design.\nIncrease website'''s visibility by studying and applying the best SEO practices.\n\n\n\nRole: Game Server Owner at Darkzmu.com\nMarch 2022 - Present\nRESPONSIBILITIES\nAnalyze and set the game server configuration.\nSetting up and configuring dedicated servers to host the game, implementing security measures, and establishing backup procedures and disaster recovery plans.\nDesigning and developing the front-end website for the game using HTML, CSS and Bootstrap.\nImplementing user account management systems for player registration, authentication, and profile management using PHP and SQL Server.\nImplementing a (CMS) to manage and update website content such as news, patch notes, and event announcements.\nDevelopment of the Game Launcher using C#.\n\nKEY ACCOMPLISHMENTS\nIncrease the website loading speed x2 by caching the players Rankings and server statistics using cron jobs.\nAdded the option to make purchases not only using PayPal but also Mercado Pago, a service available exclusively in South America.\nIncreased popularity by creating an api for the Launcher to get the cached Ranking and statistics data.\nRecently changed the design to make the website more mobile friendly and easier to navigate.\nMaintain the server and its resources to accommodate more than 100 active users. Since the server became popular in the community.\n\nSKILLS\n✔️ Fast learner\n✔️ HTML\n✔️ Bootstrap\n✔️ Team player\n✔️ CSS\n✔️ Sass\n✔️ Adaptability\n✔️ Javascript\n✔️ Tailwind CSS\n✔️ Problem solving\n✔️ Typescript\n✔️ SQL\n✔️ Lean mindset\n✔️ React\n✔️ PHP\n✔️ Fast learner\n✔️ NextJS\n✔️ C#\n\n\n\n\nEDUCATION\nSystem Engineering - Universidad Cesar Vallejo, Lima Peru\n2007 - 2010\nNote: I got approved for the US Permanent Resident Card so I had to move and was not able to finish my bachelors degree.\n\nSoftware Engineering - Montgomery College, Rockville MD\nJanuary 2012 - 2015\nNote: I was not able to finish it due to financial issues. But I would like to retake it and finish it soon.\n\nLANGUAGES\nI speak Spanish and English.\n\nHOBBIES\nI like to play some retro video games, Counter Strike and Left 4 Dead being my favorites. I also love Emulators. I am kind of decent at drawing but it is not something I usually do. However I really appreciate and would love to be good at drawing pixel art.\n\n--\n\nQuestion: ${question}\nAnswer:\n`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
          stopSequences: [],
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    }
  )
    .then(
      (res) =>
        res.json() as Promise<{
          candidates: { content: { parts: { text: string }[] } }[];
        }>
    )
    .then((data) => data.candidates[0].content.parts[0].text);

  return answer;
}
