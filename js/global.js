/* Fundction to Append External Scripts */

function include(file) {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head')[0].appendChild(script);

}
/* Include Many js files */

include(/* "[URL to script goes here]" */);

include(/* "[URL to script goes here]" */);

/* 
  ##Sample:
  
  include("js/app.js");
  include("https://www.sample.min.js");

*/