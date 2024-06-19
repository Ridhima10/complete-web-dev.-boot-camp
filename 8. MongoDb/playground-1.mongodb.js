
// Select the database to use.
use('blogsDatabase');

// Insert a few documents into the sales collection.
db.getCollection('blog1').insertMany([
  { "title": "First blog", "desc": "Lorem20" },
  { "title": "Second blog", "desc": "Lorem ipsum dolor sit amet" },
  { "title": "Third blog", "desc": "Consectetur adipiscing elit" },
  {"title": "Fourth blog","desc": "Sed do eiusmod tempor" },
  {"title": "Fifth blog", "desc": "Incididunt ut labore et dolore"},
  {"title": "Sixth blog","desc": "Magna aliqua"},
  {"title": "Seventh blog","desc": "Ut enim ad minim veniam"},
  {"title": "Eighth blog","desc": "Quis nostrud exercitation"},
  {"title": "Ninth blog","desc": "Ullamco laboris nisi"},
  {"title": "Tenth blog","desc": "Ut aliquip ex ea commodo consequat"}
]);

// Print a message to the output window.
console.log("done insering data");

