excusesList = {
	  
	    //general settings
	    xml: "excuses.xml",
     display: '1', //number of items to be displayed
	    random: true, //display randomly {true|false}
     appendTo: '#excuse', //set the id/class to insert XML data
     
    init: function () {
     
        //jQuery ajax call to retrieve the XML file
	        $.ajax({
	            type: "GET",
	            url: "excuses.xml",
	            dataType: "xml",          
	            success:excusesList.parseXML
        });
	      
	    }, // end: init()
      
	    parseXML: function (xml) {
	      
	        //Grab every single excuse tags in the XML file
	        var data = $('excuse', xml).get();

	        //Allow user to toggle display randomly or vice versa
	        var list = (excusesList.random) ? excusesList.randomize(data) : data;
	        var i = 1;


        //Loop through all the excuses
	        $(list).each(function () {
	              

	            //Parse data and embed it with HTML
	            excusesList.insertHTML($(this));    
      
	  
	            //If it reached user predefined total of display item, stop the loop, job done.
            if (i == excusesList.display) return false;
	            i++;
	        });
  
	      
	    }, // end: parseXML()
  
    insertHTML: function (excuse) {
	  
	        //retrieve each of the data field from excuse
        var destination = excuse.find('destination').text();
        var line = excuse.find('line').text();
	        var status = excuse.find('status').text();
	        var text = excuse.find('text').text();
        var html;
        


        //Embed them into HTML code
        html = '<div class="excuse">';
        html +='<h3>' ;
	        html += 'Your V/line service to ' + destination +  ' is ' + status  + ' ' +  text;
	        html += '</h3>';
        html += '</div>';
	          
	        //Append it to user predefined element
	        $(html).appendTo(excusesList.appendTo);
	          
	    }, // end: insertHTML()
	  
     
	    randomize: function(arr) {
	          
	        //randomize the data
	        //Credit to JSFromHell http://jsfromhell.com/array/shuffle
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	            return arr;
	    
	    } // end: randomize()  
	      
	  
	}
	  
//Run this script
excusesList.init();
