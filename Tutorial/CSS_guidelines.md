# Using CSS in your message

You can also use inline CSS in your message! Here's how it works:

Your message is put inside a `<p class="light"></p>` HTML tag. Inside, you can put all kinds of HTML elements, such as another `<p>` element, or a `<span>` element so the message doesn't have a line break. Inside of these elements, you can place attributes, and in this case the most useful is the `style=''` attribute. You can use this attribute to assign a style to that specific element, such as change the text color, the font, the font weight, etc. You can find a list of all CSS properties at [w3schools.com](https://www.w3schools.com/cssref/index.php). You can find an example of how to use the inline styling in [`Example_with_styling`](../Example_folders/Example_with_styling/message.json).

If you are using HTML elements and inline styling, make sure that the `"uses_styling"` field in your message.json file is set to `true`! If it's set to `false`, the raw HTML and CSS will appear directly on the website.

The website is able to switch between light and dark mode, so make sure your text is visible in both versions of the website! If you have unstyled text somewhere, make sure to wrap it in either one of these elements:
- `<p class='light'></p>`
- `<span class='light'></span>`

Just to be safe, the website checks messages that have the `"uses_styling"` field set to `true` for elements that can introduce harmful content onto the website, and it will not load messages that contain such elements. To make sure your message does get loaded onto the website, make sure no text that appears in [`js/disallowed_substrings.json`](../js/disallowed_substrings.json) also appears in your message.

## CSS guidelines

Please make sure you follow these guidelines:
- Strictly no scripts, be it inline or with a `<script>` tag.
- Only inline CSS is allowed. CSS inside a `<style>` tag might overwrite the webpages CSS, which is not permitted.
- Make sure your message does not go out of bounds, so that it doesn't start overlapping with other people's messages.
- You only get one image at the top of your message. Images inserted into your message are not permitted, to make sure the website doesn't get overloaded with images and to create an even playing field with people who might not know how to write HTML and CSS.
- Keep it fun and nice for everybody. This is a place for everybody to collectively show their appreciation for what the mentors have done, not a place for you to show off your graphic design / hacking skills.

**With that out of the way, go turn your message into something beautiful!**