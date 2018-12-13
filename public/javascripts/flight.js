const flight = []

flight.database = {}

const loadAssests = function (){
    $.getJSON('/flight/', function(data){
        // console.log(data)
        flight.database = data
        flight.init()
    })
}

flight.init = function(){

flight.generateMarkup()

}


flight.generateMarkup = function(){
  
    var template = '';

    $.each(flight.database, function(index){
        db = flight.database
        id = db[index]
        
        template += '<div>'
        template += '<h3>'+ id.name+'</h3>'
        template += '<h5>'+ id.price+'</h5>'
        template += '</div>'
    })
    $('.content').append(template)

}

loadAssests()