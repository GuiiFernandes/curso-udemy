function myProject() {
    const resultado=document.querySelector('.resultado');
    const data= new Date();
    const weekDay= data.getDay();
    const monthDay= data.getDate();
    const month= data.getMonth();
    const year= data.getFullYear();
    const hour= data.getHours();
    const minute= data.getMinutes();
    
    const weekDayText= getWeekDay(weekDay);
    const monthDateText= getMonth(month);
    const minuteText= getMinute(minute);
    resultado.innerHTML=`${weekDayText}, ${monthDay} de ${monthDateText} de ${year}<br>${hour}:${minuteText}`;

    function getMinute(minute) {
        return minute<10 ? `0${minute}` : minute;
    }

    function getWeekDay (weekDay) {
        let weekDayText;
        switch (weekDay) {
            case 0:
                weekDayText='Domingo';
                return weekDayText;
            case 1:
                weekDayText='Segunda-Feira';
                return weekDayText;
            case 2:
                weekDayText='Terça-Feira';
                return weekDayText;
            case 3:
                weekDayText='Quarta-feira';
                return weekDayText;
            case 4:
                weekDayText='Quinta-Feira';
                return weekDayText;
            case 5:
                weekDayText='Sexta-Feira';
                return weekDayText;
            case 6:
                weekDayText='Sábado';
                return weekDayText;
        }
    }

    function getMonth (month) {
        let monthDateText;
        switch (month) {
            case 0:
                monthDateText='janeiro';
                return monthDateText;
            case 1:
                monthDateText='fevereiro';
                return monthDateText;
            case 2:
                monthDateText='março';
                return monthDateText;
            case 3:
                monthDateText='abril';
                return monthDateText;
            case 4:
                monthDateText='maio';
                return monthDateText;
            case 5:
                monthDateText='junho';
                return monthDateText;
            case 6:
                monthDateText='julho';
                return monthDateText;
            case 7:
                monthDateText='agosto';
                return monthDateText;
            case 8:
                monthDateText='setembro';
                return monthDateText;
            case 9:
                monthDateText='outubro';
                return monthDateText;
            case 10:
                monthDateText='novembro';
                return monthDateText;
            case 11:
                monthDateText='dezembro';
                return monthDateText;
        }

    }
}
myProject();