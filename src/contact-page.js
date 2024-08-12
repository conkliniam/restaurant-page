const contactInfo = [
  { title: "Delivery:", content: "+1 (555) Pizza Me | +1 (555) 749-9263" },
  { title: "Carryout:", content: "+1 (555) Me Pizza | +1 (555) 637-4992" },
  {
    title: "Job Inquiry:",
    content: "Send resumes to FakePizzaJobs@Example.com",
  },
  {
    title: "Feedback:",
    content: "Send any feedback to FakePizzaFeedback@Example.com",
  },
];

const getContent = function () {
  const content = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "Contact";
  content.appendChild(title);

  for (const info of contactInfo) {
    const container = document.createElement("div");
    const title = document.createElement("p");
    const value = document.createElement("p");

    container.className = "contact";
    title.className = "title";
    value.className = "value";

    title.textContent = info.title;
    value.textContent = info.content;

    container.appendChild(title);
    container.appendChild(value);
    content.appendChild(container);
  }

  return content;
};

const closeTab = function () {
  const button = document.querySelector("#contact-button");
  button.className = "";
};

export { getContent, closeTab };
