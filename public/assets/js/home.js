
$(document).ready(function(){


$('.list-item').on('click',function(){
    var item = $(this).attr('data-item'); 
    $.ajax({
        method: 'get',
        url: '/delete',
        data: { item: item }
    }).done(() => {
        location.reload();
    });

});
var deleteItem = function(item) {
    $.ajax({
        method:'get', 
        url:'/delete', 
        data: { item: item } 
    }).done(()=>{
        location.reload();
    });
};

});