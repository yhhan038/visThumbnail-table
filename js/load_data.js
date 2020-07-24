var beforeMouser = 0;
var hotElement = document.querySelector('#hot');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
    data: data,
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
        {
            data: 'ChartType',
            type: 'text',
            width: 40,
            editor: false,
        },
        {
            data: 'NewsMedia',
            type: 'text',
            width: 160,
            editor: false
        },
        {
            data: 'Y_AxisLabel',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'X_AxisLabel',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Y_GridLines',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'ChartTitle',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'LegendImplicit',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'X_TickMarks',
            type: 'text',
            width: 100,
            renderer: cellcolorRenderer,
            editor: false
        },
        {
            data: 'Y_AxisTitle',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'X_Axis',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'DataLabel',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'X_GridLines',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'X_AxisTitle',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Y_Axis',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'LegendExplicit',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Y_TickMarks',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Highlight',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Exp.text',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'GNRD',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'HRO',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'RowSum',
            type: 'numeric',
            width: 60,
            editor: false
        },
        {
            data: 'Modified',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Cropped',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'Resized',
            type: 'text',
            width: 100,
            renderer:cellcolorRenderer,
            editor: false
        },
        {
            data: 'URL',
            width: 50,
            renderer:safeHtmlRenderer,
            editor: false
        },
        {
            data: 'id',
            type: 'text',
            width: 20,
            editor: false
         }
    ],
    stretchH: 'all',
    //width: 100%,
    autoWrapRow: true,
   //height: 1440,
    maxRows: 69,
    className: "htCenter",
    dontSortFixedRows : true,
    dropdownMenu: true,
    rowHeaders: true,
    colWidths : [100, 100, 100],
    manualColumnResize: true,
    colHeaders: [
        'type',
        'site',
        'X Axis Label',
        'X Grid Lines',
        'X Tick Marks',
        'X Axis Title',
        'X Axis',
        'Y Grid Lines',
    ],
    multiColumnSorting: {
        indicator: false
    },
    hiddenColumns: {
    columns: [25],
    indicators: true
    },
    exportFile: true,
    nestedHeaders: [
        [
            'Chart Type',
            {
                label: 'News site',
                colspan: 1
            },
            {
                label: 'Basic Chart Component',
                colspan: 14
            },
            {
                label: 'Added Chart Component',
                colspan: 4
            },
            {
                label: 'Sum',
                colspan: 1
            },
            {
                label: 'Editing Strategy',
                colspan: 3
            },
        ],
        [
            'sort',
            'sort',
            'Y Axis<br/>Label(48)',
            'X Axis<br/>Label(42)',
            'Y Grid<br/>Lines(41)',
            'Chart<br/>Title(31)',
            'Implicit<br/>Legend(29)',
            'X Tick<br/>Marks(27)',
            'Y Axis<br/>Title(26)',
            'X Axis<br/>(24)',
            'Data<br/>Label(21)',
            'X Grid<br/>Lines(14)',
            'X Axis<br/>Title(12)',
            'Y Axis<br/>(10)',
            'Explicit<br/>Legend(9)',
            'Y Tick<br/>Marks(2)',
            'Highlight<br/>(36)',
            'Exp.text<br/>(36)',
            'GNRD<br/>(6)',
            'HRO<br/>(3)',
            'sort',
            'Modified<br/>(28)',
            'Cropped<br/>(29)',
            'Resized<br/>(18)',
            'URL',
            'id'
        ]
    ],
    collapsibleColumns: true,
    filters: true,
    afterOnCellMouseOver :function(event, coords, TD) {
        //console.log(event);
        //console.log(n.col);
        if(coords.row > -1) {
            if (coords.col == 0 || coords.col == 1) {
                var value = hot.getDataAtRow(coords.row)[25];
                //console.log(value);
                var src = "../src/" + value + ".png";
                //console.log(src);
                $(".show").fadeIn();
                $(".img-show").attr("src", src);
                $(".img-show").css("left", event.clientX + $('.img-show').width() / 2 +150);
                if (event.clientY + $('.img-show').height() + 200 > window.innerHeight)
                    $(".img-show").css("top", window.innerHeight - $('.img-show').height());
                else
                    $(".img-show").css("top", event.clientY);
                $(".img-show").fadeIn();
            }
            else
                $(".show").fadeOut();
        }
        else {
            $(".show").fadeOut();
    }
    },

};

var hot = new Handsontable(hotElement, hotSettings);
//document.getElementById("export-csv").addEventListener("click", function(event) { hot.getPlugin("exportFile").downloadFile("csv", {filename: "Handsontable CSV Export example"});})
//document.getElementById("export-string").addEventListener("click", function(event) {console.log(hot.getPlugin("exportFile").exportAsString("csv"));})
hot.render()

// update spreadsheet setting
function cellcolorRenderer (instance, td, row, col, value, cellProperties) {

    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.setAttribute("hovered", "popover");

    if (td.innerHTML == 'e')
        td.style.backgroundColor ="#BBBBBB";
    else if (td.innerHTML == 'a')
        td.style.backgroundColor = "#99B4DE";
    else if (td.innerHTML == 'r')
        td.style.backgroundColor = "#6E83AB";
    else if (td.innerHTML == 'TRUE')
        td.style.backgroundColor = "#CCB05A";
    return td;
}

$(".show").click(function() {
    $(".show").fadeOut();
});


function strip_tags(input, allowed) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function safeHtmlRenderer(instance, td, row, col, prop, value, cellProperties) {
    var escaped = Handsontable.helper.stringify(value);
    escaped = strip_tags(escaped, '<em><b><strong><a><big>'); //be sure you only allow certain HTML tags to avoid XSS threats (you should also remove unwanted HTML attributes)
    td.innerHTML = escaped;

    return td;
}

$("#inst-btn").click (function() {
    if ($("#instruction").css("display") == "block"){
        $("#instruction").css("display", "none");
    }
    else {
        $("#instruction").css("display", "block");
    }

});