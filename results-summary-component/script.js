var list = document.getElementById("score-list");

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load your data!");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const listItem = document.createElement("li");

      const icon = document.createElement("img");
      icon.src = element.icon;
      icon.alt = `${element.category} icon`;
      icon.style.width = "20px";
      icon.style.marginRight = "10px";

      listItem.appendChild(icon);

      listItem.appendChild(
        document.createTextNode(`${element.category} ${element.score} / 100`)
      );

      list.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error: ", error));
