/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests have been placed within the $() function,
 * since some of these tests may require DOM elements. This will ensure
 * to ensure that the tests will not run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* This is initial test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
          */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url defined', function () {
          for(let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }
        });
        /* This test loops through each feed to make sure that the URL is defined
            for each feed item. This test ensures that the URL property
            is not empty.
         */
         it('name defined', function () {
           for(let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });

        /* This test loops through each feed and ensures
          a name defined for each feed item. This test ensures
          that the name property is not empty.
         */
    });

    describe('The Menu', function() {


      it('is hidden by default', function () {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });


      it('changes visibility', function () {
         const icon = document.querySelector('.menu-icon-link');
         const body = document.querySelector('body');
        //selects the button icon
        icon.click();
        //then check to see that the hidden is visible when the icon is clicked
        // then also check to see that it is hidden when clicked again
        expect(body.classList.contains('menu-hidden')).toBe(false);

        icon.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    /* These above tests, tests the menu item (triggered by the hamburger menu icon)
       The initial tests above ensures the menu element is hidden by default.

       The 'changes visibiilty' test ensures that the menu changes from hidden
       to visible when the icon is clicked and vice versa. Note, the click event is
       simulated in the tests to check each toggle.
          */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
          loadFeed(0, done);
        });

      it('at least one entry is added', function () {
        const feed = document.querySelectorAll('.feed .entry');
        expect(feed.length).toBeGreaterThan(0);
      });

    });
        /* The 'Initial Entries' test suite ensures that
          there is at least one single .entry element within the .feed container
          once the asynchronous loadFeed() has completed.
		*/

    describe("New Feed Selection", function (){
        let feedOne,
            feedTwo;

      beforeEach(function(done) {
          loadFeed(0, function (){
            feedOne = document.querySelector('.feed').innerHTML;
           
          loadFeed(1, function() {
			feedTwo = document.querySelector('.feed').innerHTML;
            done();
          });
      });
	   });
	   
      it("content changes", function(){
		expect(feedOne === feedTwo).toBe(false);
		      });
    });
        /* The final 'New Feed Selection' suite ensures that when a new feed
        is loaded by the loadFeed (asynchronous) function that the content
        actually changes. The test compares the first and second feeds' content
        to check to see if their content is different.
         */
}());
