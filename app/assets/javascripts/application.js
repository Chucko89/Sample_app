// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

<script type="text/javascript"> window.outbound=window.outbound||[];window.outbound.methods=["identify","track","registerApnsToken","registerGcmToken","disableApnsToken","disableGcmToken"];window.outbound.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);o.unshift(t);window.outbound.push(o);return window.outbound}};for(var i=0;i<window.outbound.methods.length;i++){var key=window.outbound.methods[i];window.outbound[key]=window.outbound.factory(key)}if(!document.getElementById("outbound-js")){var script=document.createElement("script");script.type="text/javascript";script.id="outbound-js";script.async=true;script.src="//cdn.outbound.io/pub-83458db70404d4221c66878c35ac80f8.js";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first)} </script>