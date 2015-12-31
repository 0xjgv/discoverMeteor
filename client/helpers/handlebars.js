Template.registerHelper('pluralize', function(n, thing) {
  // Fairly stupid pluralizer
  return n === 1? '1 ' + thing: n + ' ' + thing + 's';
});

