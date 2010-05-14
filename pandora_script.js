    google.load("feeds", "1");
    
    /**
    /* edit your username here
     */
    var username = 'budu3';


    /**
    /* facebook share url
     */
    var fbsurl = 'http://www.facebook.com/sharer.php?&u=';
    var topic = 'I%27m+listening+to%20';
    var ahrf = '&nbsp;<a href=';
    var bhrf = '">facebook</a>';

    var googurl = 'http://www.google.com/reader/link?url=';
    var ghrf = '">google!</a>';
    
 
    function initialize() {

      var feed = new google.feeds.Feed("http://feeds.pandora.com/feeds/people/"+username+"/stations.xml");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.appendChild(document.createTextNode(entry.title));
	    var span1 = document.createElement("span");
	    span1.innerHTML = ahrf + fbsurl + entry.link + '&t=' + topic + bhrf;
	    div.appendChild(span1);
	    var span2 = document.createElement("span");
	    span2.innerHTML = ahrf + googurl + entry.link + '&title=' + topic + entry.title  + ghrf;
            div.appendChild(span2);
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);

