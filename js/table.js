

function fill_color() {

    for (i=0; i<1608; i++) {
        var cell_value = document.getElementsByTagName('td')[i].innerText;

        if (cell_value == 'a') {
            document.getElementsByTagName('td')[i].style.backgroundColor = "#BBBBBB";
        }
        else if (cell_value == 'b') {
            document.getElementsByTagName('td')[i].style.backgroundColor = "#99B4DE";
        }
        else if (cell_value == 'c') {
            document.getElementsByTagName('td')[i].style.backgroundColor = "#6E83AB";
        }
        else if (cell_value == '1') {
            document.getElementsByTagName('td')[i].style.backgroundColor = "#CCB05A";
        }


    }
}


//console.log("function loaded");

