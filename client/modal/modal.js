Template.modal1.events({
    'click #cancelButton': function (e) {
        var destination = $('.' + 'servicesMain').offset().top;
        var minus = destination - 95;
        $("body,html").animate({scrollTop: minus }, 800);
    }
});
Template.modal1.helpers({
    modalNewCollections:function () {
            return NewCollections.find({_id: Session.get('tovarId')});
        }
    
  });
/*Template.modal1.onRendered(function () {
 $('.colorPhoto img').click(function (e) {
    $(".colorPhoto img").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass('active');

     


    })

  
})*/

Template.modal1.events({
    'click .modalPhoto img': function (e, tmpl) {
         var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});


Template.modal1.events({
    'click #tableSize': function (e, tmpl) {
       var imgSrc = $(e.target).attr('name');
            $('.tablSize').attr('src', imgSrc);
    }
});
Template.modal1.events({
    'click .colorPhoto img': function (e, tmpl) {
           $(".colorPhoto img").removeClass("colorActive"); //удаляем класс во всех вкладках
        $(e.target).addClass('colorActive');
        var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});
Template.modal1.events({
    'click .close': function (e) {
        $('#modal1').closeModal();
            

    }
});
Template.modal2.events({
    'click .close': function (e) {
        $('#modal2').closeModal();

    }
});
Template.modal3.events({
    'click .close': function (e) {
        $('#modal3').closeModal();
    }
});
Template.modal2.events({
    'click .modalSendButt': function (e) {
        var modal = {
            name: $('#name1').val(),
            number:$('#number1').val(),
            email: $('#email1').val()
        }
       
        if(modal.name && modal.number && modal.email){
            Meteor.call('Calls',modal, function (err, res) {
                if(err){
                    console.log('error methods moadal2');
                }else{
                     $('#modal2').closeModal();
                     ga('send', 'event', 'zvonok', 'zakaz_zvonka');
                     yaCounter35842265.reachGoal('zvonok');
                     $('#modal3').openModal();
                     
                }

            });       
        }else{
            alert('Вы не заполнели все поля');
        }
    }
});


Template.modal1.events({
    'click .modalButt': function (e, tmpl) {
            var modalVal = {
                header: $('.ModalTovarHeader').text(),
                firma: $('.modalFirma').text(),
                price: $('.mPirce').text(),
                sizeByst: $('.selectSizeByst').val(),
                sizeTrysu: $('.selectSizeTrysu').val(),
                quantity: $('.quantity').val(),
                color: $('.colorPhoto .colorActive').attr('src'),
                name: $('#name').val(),
                number: $('#namber').val()
            }
            console.log(modalVal.header,
            modalVal.firma,
            modalVal.price,
            modalVal.sizeByst,
            modalVal.sizeTrysu,
            modalVal.name,
            modalVal.number);     
            if(modalVal.name && modalVal.number && modalVal.color){
            Meteor.call('Orders',modalVal, function (err, res) {
                if(err){
                    console.log('error methods');
                }else{
                     $('#modal1').closeModal();
                     ga('send', 'event', 'zakaz', 'buy_kypalnik');
                    yaCounter35842265.reachGoal('zakaz');
                     $('#modal3').openModal();
                     
                }
            });       
        }else{
            alert('Вы не выбрали цвет или не ввели имя и телефон');
        }
    }
});