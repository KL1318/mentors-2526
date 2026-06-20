const dir = "https://kl1318.github.io/mentors-2526/content/";     // Change to http://127.0.0.1:5500/content/ when hosting locally and https://kl1318.github.io/mentors-2526/content/ when pushing


document.getElementById("message-container").addEventListener("click", (event) => {
    if (event.target.nodeName == "IMG" && innerWidth > 600) {
        document.getElementById("image-view").style.display = "flex";
        document.getElementById("image-view-image").src = event.target.src;
    }
});
document.getElementById("img-close-btn").addEventListener("click", () => {
    document.getElementById("image-view").style.display = "none";
});
document.getElementsByTagName("body")[0].addEventListener("contextmenu", (event) => {
    if (event.target.nodeName == "IMG" && innerWidth > 600) {
        event.preventDefault();
    }
});


async function fetchItem(directory) {
    const response = await fetch(directory);
    if (!response.ok) {
        return "404";
    }
    const result = await response.json();
    return result;
}

async function checkForScripts(message_obj) {
    const root_dir = dir.replace("content/", "");
    
    const disallowed_substrings_obj = await fetchItem(root_dir + "js/disallowed_substrings.json");
    const disallowed_substrings = disallowed_substrings_obj.disallowed_substrings;

    const full_string = (message_obj.title + message_obj.author + message_obj.message).replace(/\s/g, "");
    let contains_disallowed_string = false;

    for (let i = 0; i < disallowed_substrings.length; i++) {
        const contains_substring = full_string.includes(disallowed_substrings[i]);
        if (contains_substring) {
            return true;
        }
    }

    return false;
}


async function loadContentToWebpage() {
    const content_folder_structure = await fetchItem(dir + "content_dir.json");
    const folder_arr = content_folder_structure.folders;

    let column_lengths = [0, 0, 0];

    for (let curr_folder = 0; curr_folder < folder_arr.length; curr_folder++) {
        const message_obj = await fetchItem(dir + folder_arr[curr_folder] + "/message.json");
        let message_contains_scripts = await checkForScripts(message_obj);
        
        if (message_obj !== "404") {
            if (message_obj.uses_styling == true && !message_contains_scripts) {
                let card = ``;
                
                if (message_obj.image_filename !== "" && message_obj.author !== "") {
                    card = 
                        `<div class="card card-light" id="${curr_folder}">
                            <img src="${dir + folder_arr[curr_folder] + "/" + message_obj.image_filename}">
                            <div class="card-text">
                                <h2 class="card-title light">${message_obj.title}</h2>
                                <p class="card-author light"><i>${message_obj.author}</i></p>
                                <p class="light">${message_obj.message}</p>
                            </div>
                        </div>`;
                } else if (message_obj.image_filename === "" && message_obj.author !== "") {
                    card = 
                        `<div class="card card-light" id="${curr_folder}">
                            <div class="card-text">
                                <h2 class="card-title light">${message_obj.title}</h2>
                                <p class="card-author light"><i>${message_obj.author}</i></p>
                                <p class="light">${message_obj.message}</p>
                            </div>
                        </div>`;
                } else if (message_obj.image_filename !== "" && message_obj.author === "") {
                    card = 
                        `<div class="card card-light" id="${curr_folder}">
                            <img src="${dir + folder_arr[curr_folder] + "/" + message_obj.image_filename}">
                            <div class="card-text">
                                <h2 class="card-title light">${message_obj.title}</h2>
                                <p class="light">${message_obj.message}</p>
                            </div>
                        </div>`;
                } else if (message_obj.image_filename === "" && message_obj.author === "") {
                    card = 
                        `<div class="card card-light" id="${curr_folder}">
                            <div class="card-text">
                                <h2 class="card-title light">${message_obj.title}</h2>
                                <p class="light">${message_obj.message}</p>
                            </div>
                        </div>`;
                }

                const smallest_col_size = Math.min(column_lengths[0], column_lengths[1], column_lengths[2]);
                let column_num = 1;
                if (smallest_col_size === column_lengths[1]) {
                    column_num = 2;
                } else if (smallest_col_size === column_lengths[2]) {
                    column_num = 3;
                }
                document.getElementById("column" + column_num).innerHTML += card;
            } else if (message_obj.uses_styling == true && message_contains_scripts) {
                console.error("Message contained illegal items. Script didn't load to prevent script injection.");
            } else if (message_obj.uses_styling == false) {
                let image_dir = "";

                if (message_obj.image_filename !== "") {
                    image_dir = dir + folder_arr[curr_folder] + "/" + message_obj.image_filename;
                } else {
                    image_dir = "No image";
                }

                const card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("card-light");
                card.id = curr_folder;
                if (image_dir !== "No image") {
                    const card_image = document.createElement("img");
                    card_image.src = image_dir;
                    card.appendChild(card_image);
                }
                const card_message_container = document.createElement("div");
                card_message_container.classList.add("card-text");
                card.appendChild(card_message_container);
                const card_message_header = document.createElement("h2");
                card_message_header.classList.add("card-title");
                card_message_header.classList.add("light");
                card_message_header.innerText = message_obj.title;
                card_message_container.appendChild(card_message_header)
                if (message_obj.author !== "") {
                    const card_message_author = document.createElement("p");
                    card_message_author.classList.add("card-author");
                    card_message_author.classList.add("light");
                    const card_message_author_italic = document.createElement("i");
                    card_message_author_italic.innerText = "From: " + message_obj.author;
                    card_message_author.appendChild(card_message_author_italic);
                    card_message_container.appendChild(card_message_author);
                }
                const card_message_message = document.createElement("p");
                card_message_message.classList.add("light");
                card_message_message.innerText = message_obj.message;
                card_message_container.appendChild(card_message_message);


                const smallest_col_size = Math.min(column_lengths[0], column_lengths[1], column_lengths[2]);
                let column_num = 1;
                if (smallest_col_size === column_lengths[1]) {
                    column_num = 2;
                } else if (smallest_col_size === column_lengths[2]) {
                    column_num = 3;
                }
                document.getElementById("column" + column_num).appendChild(card);
            }
    
            const column = Number(document.getElementById(curr_folder).parentElement.id.replace("column", "")) - 1;
            column_lengths[column] += document.getElementById(curr_folder).offsetHeight;

            console.log(column_lengths);
        } else {
            console.error(`Couldn't load ${dir + folder_arr[curr_folder] + "/message.json"}, file was not found.`);
        }
    }
}


loadContentToWebpage();