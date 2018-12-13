# Feed Reader Testing Project

For this project, I was provided a web-based application that reads RSS feeds and tasked with completing the rest of the test suites. Udacity simulated the following scenario: _The original developer of this application saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite._

## Testing and Development Strategy

The following is the list of tests added to the `feedreader.js` file.
Detailed in-line comments accompany each test script, in addition to the following strategy explanations below.

1. A test suite for `"RSS Feeds"`
   This initial test, was part of the provided code, the script was tested manually to ensure that the `addFeeds` variable was defined.     
    The suite also contains:
    * a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL property is not empty

    * a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name property is not empty

2. A test suite for `"Menu"` element
   This suite contains:
    * a test that ensures the menu element is hidden by default
    * a test that ensures the menu changes visibility when the menu icon is clicked
      This test has two expectations:
          * the menu displays itself when clicked
          * and the menu hides when clicked again

3. A test suite for `"Initial Entries"`
    * This suite incorporates a test that ensures when the `loadFeed` function is       called and completes its work, there is at least a single `.entry` element within the `.feed` container.

4. A test suite for `"New Feed Selection"`
    * This test suite that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes. This specific script examines whether the first feed loaded and the second feed loaded are, in fact, different.

## What I've Learned

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." I've learned how to create test scripts for an existing application and have sharpened my skills to understand the challenge of understanding underlying business logic of the application as well as event handling and DOM manipulation. I've also learned that good tests provide the skills to analyze whether new code breaks an existing feature without the tedious task of manually testing all functionality. This was a great step in becoming more familiar was _red, green, refactor_ approach.

## Contributing

Feedback for this project is highly encouraged. Please submit a pull request or contact me with questions. Thanks for taking a look at this project.

Firstly, familiarize yourself with the repo. Investigate the `index.html` and review the functionality of the application within the browser. Examine the Jasmine spec file, `feedreader.js` to inspect the existing test scripted described above.


## Acknowledgements

- Udacity & Google for this opportunity
- Udacity FEND Program Staff
- [@MatthewCranford](https://github.com/matthewcranford)'s  blog
