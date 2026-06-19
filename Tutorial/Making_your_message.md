# Quick message guidelines

**THANK YOU for wanting to contribute!**

This guide assumes that you have a GitHub account and you have git installed, and you know how to use it, and that you know how to make a proper pull request. This guide will only explain what you need to push for your message to appear on the webpage. **Make sure you read everything below so your pull request will be accepted.**

## How the webpage works

The webpage works by first looking at the content_dir.json file situated in the "content" folder in the root directory (make sure not to edit this file!). This file holds an array with all the names of the folders situated in the "content" folder. Each of these folders represents a single message. Let's call these folders "message folders" from now on. 

Each message folder must contain at least one file, namely a "message.json" file. This file **must** have this name, it cannot be named differently. This message.json file should have the following structure:

![
    {
        "image_filename": "",
        "uses_styling": false,
        "title": "",
        "author": "",
        "message": ""
    }
](./readme_images/message_json_structure.png)

The example above can also be found in [`Example_folders/Empty_message.json`](../Example_folders/Empty_message.json).

Each message folder may also have a single image file, which will be loaded above the message. The filename or filetype of this image does not matter, as long as it can be rendered by the browser.

Each message folder also must have a unique name, which should be clear why.

## Adding your message

Start by creating a folder with a unique name inside the "content" folder. Inside this folder, create a file named "message.json" (without the quotes), and copy the contents of [`Example_folders/Empty_message.json`](../Example_folders/Empty_message.json) into the message.json file you just created. If you want to add a picture to your message (like a group picture with your friends or mentors), also add your picture in this folder (make sure everybody in the picture is okay with you using that picture, it will be visible to the entire internet after all). 

---

**Note!**

Make sure not to edit the content_dir.json file! Editing it may result in merge conflicts with people who have forked the repo before you. I wwill make sure the file gets edited to include your message.

---

You can now write your message inside the message.json file you've created! And also, you can use inline CSS to style your message! (Please follow the short CSS guidelines: [`CSS_guidelines.md`](./CSS_guidelines.md)). Here is a description of the fields you may use:

| Field | Mandatory? | How to use | Example |
|:-----:|:----------:|:-----------|:-------:|
| "image_filename" | Depends | If you've added a picture to your folder, write down the file name and file type in this field (see examples). Else, just leave the field empty | [`Example_with_image`](../Example_folders/Example_with_image/) [`Example_without_image`](../Example_folders/Example_no_image/) |
| "uses_styling" | Yes | This field is either true or false. Write true if your message uses CSS styling, leave it on false if your message is just plain text | [`Example_with_styling`](../Example_folders/Example_with_styling/) |
| "title" | Yes | Write a title to your message in this field | [`Example_with_title`](../Example_folders/Example_no_image/) |
| "author" | No | Write your name, a pseudonym or leave this field blank to stay fully anonymous | [`Example_with_author`](../Example_folders/Example_no_image/) [`Èxample_without_author`](../Example_folders/Example_no_author/) |
| "message" | Yes | Write your kind message to the mentors! The examples contain some idea's to get you started, but don't be scared to write your own thing! (Try not to exceed 100 words). If you want to style your image, write some HTML with inline CSS here! (again, [please read the `CSS guidelines`](./CSS_guidelines.md)). If you just want to leave a message without styling, just write plain text :) | [`Example_message`](../Example_folders/Example_no_image/) |

The example message folders together would look like this on the final webpage:

![Image of the example message folder webpage](./readme_images/Example_folders_outcome.png)

**THANK YOU again for contributing! The more people add their message to this webpage, the better of a gift it becomes!**

## Reasons your pull request may be declined

Here are some reasons your pull request may be declined:
- Your message contains nonsense (random letters)
- You are spamming pull requests (if you are making pull requests for other people, make this very clear, and indicate who you are making a pull request for)
- You are editing files (please only upload files. If at some point there are tens of folders all with the same structure and filenames, it becomes hard for me to check if you are editing your own submission or someboody elses. Editing webpage files is not allowed.)

## I can't/don't want to make a pull request

You can also submit your message through this form: [https://klm1318.limesurvey.net/141387?lang=en&newtest=Y](https://klm1318.limesurvey.net/141387?lang=en&newtest=Y).