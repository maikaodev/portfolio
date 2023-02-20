window.onload = async (event) => {
  const response = await fetch("https://api.github.com/users/maikaodev/repos");
  const data = await response.json();

  try {
    if (response.ok) {
      console.log(data);
      creatingTheProjectList(data);
    } else {
      throw new Error("Ocorreu um erro inesperado, tente novamente.");
    }
  } catch (error) {
    alert(error.message);
  }
};

const creatingTheProjectList = (repos) => {
  repos.reverse().forEach((item) => {
    creatingListItems(item.html_url, item.name);
  });
};

const creatingListItems = (deploy, name) => {
  const list = document.querySelector("#projects_list");

  const newLi = document.createElement("li");
  const newAnchor = document.createElement("a");
  const newSpan = document.createElement("span");
  const newParagraph = document.createElement("p");
  const _name = document.createTextNode(name);

  newAnchor.setAttribute("href", deploy);
  newAnchor.setAttribute("target", "_blank");

  newSpan.appendChild(_name);

  newLi.classList.add("card");

  list.appendChild(newLi);
  newLi.appendChild(newAnchor);
  newAnchor.appendChild(newSpan);
  newAnchor.appendChild(newParagraph);
};
