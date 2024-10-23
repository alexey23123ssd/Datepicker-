$(document).ready(function(){
  
let firstDay = moment().startOf('month')
let lastDay = moment().add(1,'month').startOf('month')
  

  $(".date").daterangepicker({
    autoClose: true,
    showShortcuts: false,
    startDate:firstDay,
    endDate:lastDay,
    showCustomRangeLabel:false,
	alwaysShowCalendars: true,
    locale: {
      format: 'DD.MM.YYYY',
      daysOfWeek: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
			monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    },
    ranges: {
			'Сегодня': [moment()],
			'Вчера': [moment().subtract(1, 'days'),moment().subtract(1,'days')],
			'Последние 7 дней': [moment().subtract(8, 'days'), moment().subtract(1,'days')],
			'Последние 30 дней': [moment().subtract(31, 'days'), moment().subtract(1,'days')],
			'Последние 90 дней': [moment().subtract(93, 'days'), moment().subtract(1, 'days')],
      'От начала работы': [moment().subtract(93, 'days'), moment().subtract(1, 'days')],
	},
  })
  $(".date").on('apply.daterangepicker', function(ev, picker) {
    console.log('Start Date: ' + picker.startDate.format('DD.MM.YYYY'));
    console.log('End Date: ' + picker.endDate.format('DD.MM.YYYY'));
  });
});


