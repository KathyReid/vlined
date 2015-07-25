reasonsList = {

	    //general settings
	    xml: "reasons.xml",
     display: '1', //number of items to be displayed
	    random: true, //display randomly {true|false}
     appendTo: '#reason', //set the id/class to insert XML data

    init: function () {

        //jQuery ajax call to retrieve the XML file
	        $.ajax({
	            type: "GET",
	            url: "reasons.xml",
	            dataType: "xml",
	            success:reasonsList.parseXML
        });

	    }, // end: init()

	    parseXML: function (xml) {

	        //Grab every single excuse tags in the XML file
	        var data = $('reason', xml).get();

	        //Allow user to toggle display randomly or vice versa
	        var list = (reasonsList.random) ? reasonsList.randomize(data) : data;
	        var i = 1;


        //Loop through all the excuses
	        $(list).each(function () {


	            //Parse data and embed it with HTML
	            reasonsList.insertHTML($(this));


	            //If it reached user predefined total of display item, stop the loop, job done.
            if (i == reasonsList.display) return false;
	            i++;
	        });


	    }, // end: parseXML()

    insertHTML: function (reason) {

	        //retrieve each of the data field from excuse
        var text = reason.find('text').text();
        var html;



        //Embed them into HTML code
        html = '<div class="reason">';
        html +='<h3>' ;
	        html += text;
	        html += '</h3>';
        html += '</div>';

	        //Append it to user predefined element
	        $(html).appendTo(reasonsList.appendTo);

	    }, // end: insertHTML()


	    randomize: function(arr) {

	        //randomize the data
	        //Credit to JSFromHell http://jsfromhell.com/array/shuffle
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	            return arr;

	    } // end: randomize()


	}

//Run this script
reasonsList.init();
