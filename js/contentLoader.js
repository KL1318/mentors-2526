const dir = "https://kl1318.github.io/mentors-2526/content/";     // Change to http://127.0.0.1:5500/content/ when hosting locally


document.getElementById("message-container").addEventListener("click", (event) => {
    if (event.target.nodeName == "IMG") {
        document.getElementById("image-view").style.display = "flex";
        document.getElementById("image-view-image").src = event.target.src;
    }
});
document.getElementById("img-close-btn").addEventListener("click", () => {
    document.getElementById("image-view").style.display = "none";
});


async function fetchItem(directory) {
    const response = await fetch(directory);
    if (!response.ok) {
        return "404";
    }
    const result = await response.json();
    return result;
}

async function loadContentToWebpage() {
    const content_folder_structure = await fetchItem(dir + "content_dir.json");

    const num_folders = content_folder_structure.folder_amount;
    const folder_arr = content_folder_structure.folders;

    for (let curr_folder = 0; curr_folder < num_folders; curr_folder++) {
        const message_obj = await fetchItem(dir + folder_arr[curr_folder] + "/message.json");
        let image_dir = "";

        if (message_obj !== "404") {
            if (message_obj.image_filename !== "") {
                image_dir = dir + folder_arr[curr_folder] + "/" + message_obj.image_filename;   
            } else {
                image_dir = "No image";
            }
    
            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("card-light");
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
    
            
            const column_num = (curr_folder % 3) + 1;
            document.getElementById("column" + column_num).appendChild(card);
    
            // console.log(card.offsetHeight);
        } else {
            console.error(`Couldn't load ${dir + folder_arr[curr_folder] + "/message.json"}, file was not found or wrongly filled in.`);
        }
    }
}


loadContentToWebpage();