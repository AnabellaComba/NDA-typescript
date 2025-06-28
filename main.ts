window.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const textModal = document.getElementById('modal-text');

    let date = new Date();

    function renderCalendar() {
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        if(!monthYear) throw new Error('Element HTML cannot be null');

        monthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        if(!calendarGrid) throw new Error('No se cargo el calendario');

        calendarGrid.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            calendarGrid.appendChild(empty);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');

            dayEl.textContent = day.toString();

            const today = new Date();
            if (
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) {
                dayEl.classList.add('today');
            }

            dayEl.addEventListener('click', () => {
                if(!textModal) throw new Error('No existe textModal');
                
                textModal.textContent = `Seleccionaste el ${day} de ${monthNames[month]} de ${year}`;
                modal?.classList.remove('hidden');
            })

            closeModal?.addEventListener('click', () => {
                modal?.classList.add('hidden');
            })

            calendarGrid.appendChild(dayEl);
        }
    }

    if (!prevBtn || !nextBtn) throw new Error('No se cargo el elemento HTML');

    prevBtn.addEventListener('click', () => {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
        });

    nextBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
