# Meteor Clean Blog

by Kirk Sefchik

-----------------------------

This is a project I'm completing for fun and learning. Keep an eye on it right here!

### Goals

I have a few simple goals in mind for this project.

* Create a simple CMS system
  * Use mongo as a data store
  * Support image uploads/display via mongo
  * Store and display content in markdown format
* Create a simple comment system
  * I'm not too concerned about how this is implemented
  * I might use `accounts-ui-bootstrap` for this
* Create an admin panel
  Features:
    * User management
    * Comment management
    * Creation/editing posts
    * Deleting posts
    * Modifying blog settings
    * (optional) Site Statistics/Analytics
* Create a post viewing system
  * Separate routes for tags **[done!]**
  * Pagination using _Older Posts_ and _Newer Posts_ on `tag` route and `postsList` route
