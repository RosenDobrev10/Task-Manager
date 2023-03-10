function solve() {
    const input = {
        name: document.getElementById("task"),
        description: document.getElementById("description"),
        date: document.getElementById("date"),
    };
    const [_, openSection, progressSection, finishedSection] = Array.from(document.querySelectorAll("section")).map((e) => e.children[1]);
    document.getElementById("add").addEventListener("click", addTask);
    function addTask(event) {
        event.preventDefault();
        if (input.name.value === '' || input.description.value === '' || input.date.value === '') {
            return;
        }
        const article = document.createElement("article");
        article.appendChild(createElement("h3", input.name.value));
        article.appendChild(createElement("p", `Description: ${input.description.value}`));
        article.appendChild(createElement("p", `Due Date: ${input.date.value}`));
        const div = createElement("div", null, "flex");
        const startButton = createElement("button", "Start", "green");
        div.appendChild(startButton);
        const deleteButton = createElement("button", "Delete", "red");
        div.appendChild(deleteButton);
        const finishButton = createElement("button", "Finish", "orange");
        article.appendChild(div);
        openSection.appendChild(article);
        Object.values(input).forEach((input) => (input.value = ""));
        deleteButton.addEventListener("click", onDelete);
        startButton.addEventListener("click", onStart);
        finishButton.addEventListener("click", onFinish);
        function onDelete() {
            article.remove();
        }
        function onStart() {
            startButton.remove();
            div.appendChild(finishButton);
            progressSection.appendChild(article);
        }
        function onFinish() {
            div.remove();
            finishedSection.appendChild(article);
        }
    }
    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.classList.add(className);
        }
        return element;
    }
}
