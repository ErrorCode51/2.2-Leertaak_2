$(document).ready(function() {
    function csvtoxml(file) {
        //todo: csv to xml

    }


    $(".download-btn").click(function() {
        //todo: download xml file
        //window.location.href = xmlfile
    });


    const date = $('.date').text();
    const date_split = date.split('-');
    const hour = $('.time').text();
    const location = $('.location').text();

    const csvfile = ("http://localhost/2.2-Leertaak_3/webapp/_database_/"+date_split[0]+"/"+date_split[1]+"/"+date_split[2]+"/"+location+"/"+date+"_h"+hour+".csv").toString();

});

