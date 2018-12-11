# Feed Reader Testing Project

In this project I was given a web-based application that reads RSS feeds. The original developer of this application saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite.
I was tasked with completing the rest of the test suites.


## What I've Learned

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." I've learned to create test scripts for an existing application. I also sharpened my skills to understand the challenge or understanding underlying business logic of the application as well as event handling and DOM manipulation. I've also learned that good tests provide the skills to analyze whether new code breaks an exisiting feature without the tedious task of manyally testing all functionality. This was a great step in becoming more familiar was _red, green, refactor_ approach.

# Testing and Development Strategy

Firstly, I familiarized myself with the starter code. I opened up `index.html` and reviewed the functionality of the application within the browser. I also examied the Jasmine spec file in `feedreader.js`

The following is a sequential list of the tests added to the `feedreader.js` file.
In addition, to this document, detailed comments accompany each test script.

1. A test suite for `"RSS Feeds"`
  The initial test, was part of the provided code, I manually tested that the   `addFeeds` variable was defined.     
    The suite also contains:
    * a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty.

    * a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty

2. A test suite for `"Menu"`
  The suite contains:
  * a test that ensures the menu element is hidden by default
  * a test that ensures the menu changes visibility when the menu icon is clicked.
    This test has two expectations:
      * does the menu display itself when clicked,
      * and does it hide when clicked again?

3. A test suite for `"Initial Entries"`
    * This suite incorporates a test that ensures when the `loadFeed` function is     called and completes its work, there is at least a single `.entry` element within the `.feed` container.

4. A test suite for `"New Feed Selection"`
    * This test suite that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes. This specific script examines whether the first feed loaded and the second feed loaded are different.

# Contributing

For suggestions of other tests that would be useful, please contact me directly.
