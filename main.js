window.addEventListener('DOMContentLoaded', function () {
    var monthYear = document.getElementById('month-year');
    var calendarGrid = document.getElementById('calendar-grid');
    var prevBtn = document.getElementById('prev');
    var nextBtn = document.getElementById('next');
    var modal = document.getElementById('modal');
    var closeModal = document.getElementById('close-modal');
    var textModal = document.getElementById('modal-text');
    var date = new Date();
    function renderCalendar() {
        var year = date.getFullYear();
        var month = date.getMonth();
        var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        if (!monthYear)
            throw new Error('Element HTML cannot be null');
        monthYear.textContent = "".concat(monthNames[month], " ").concat(year);
        var firstDay = new Date(year, month, 1).getDay();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        if (!calendarGrid)
            throw new Error('No se cargo el calendario');
        calendarGrid.innerHTML = '';
        for (var i = 0; i < firstDay; i++) {
            var empty = document.createElement('div');
            calendarGrid.appendChild(empty);
        }
        var _loop_1 = function (day) {
            var dayEl = document.createElement('div');
            dayEl.textContent = day.toString();
            var today = new Date();
            if (day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()) {
                dayEl.classList.add('today');
            }
            dayEl.addEventListener('click', function () {
                if (!textModal)
                    throw new Error('No existe textModal');
                textModal.textContent = "Seleccionaste el ".concat(day, " de ").concat(monthNames[month], " de ").concat(year);
                modal === null || modal === void 0 ? void 0 : modal.classList.remove('hidden');
            });
            closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener('click', function () {
                modal === null || modal === void 0 ? void 0 : modal.classList.add('hidden');
            });
            calendarGrid.appendChild(dayEl);
        };
        for (var day = 1; day <= daysInMonth; day++) {
            _loop_1(day);
        }
    }
    if (!prevBtn || !nextBtn)
        throw new Error('No se cargo el elemento HTML');
    prevBtn.addEventListener('click', function () {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });
    nextBtn.addEventListener('click', function () {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });
    renderCalendar();
});
