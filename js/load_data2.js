
var hotElement = document.querySelector('#hot2');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
    data: data2,
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
        {
            data: 'Chart Type',
            type: 'text',
            width: 40,
            editor: false,
        },
        {
            data: 'News media',
            type: 'text',
            width: 180,
            editor: false
        },
        {
            data: 'Edited',
            type: 'text',
            width: 40,
            renderer: cellcolorRenderer,
            editor: false
        },
        {
            data: 'Cropped',
            type: 'text',
            width: 40,
            renderer: cellcolorRenderer,
            editor: false
        },
        {
            data: 'Resized',
            type: 'text',
            width: 40,
            renderer: cellcolorRenderer,
            editor: false
        },
        {
            data: 'URL',
            width: 20,
            renderer: safeHtmlRenderer,
            editor: false
        },
        {
            data: 'id',
            type: 'text',
            width: 20,
            editor: false,
        }
    ],
    stretchH: 'all',
    width: 800,
    autoWrapRow: true,
    //height: 1440,
    maxRows: 25,
    dontSortFixedRows: true,
    className: "htCenter",
    dropdownMenu: true,
    rowHeaders: true,
    colWidths: [10, 100, 20, 30, 30, 30, 30],
    manualColumnResize: true,
    multiColumnSorting: {
        indicator: false
    },
    autoColumnSize: {
        samplingRatio: 25
    },
    exportFile: true,
    nestedHeaders: [
        [
            'Chart Type',
            {
                label: 'News',
                colspan: 1
            },
            {
                label: 'Editing Type',
                colspan: 3
            },
            ' ',
        ],
        [
            'sort',
            'sort',
            'Modified(8)',
            'Cropped(14)',
            'Resized(3)',
            'URL',
            'id'
        ]
    ],
    collapsibleColumns: true,
    hiddenColumns: {
        columns: [5],
        indicators: true
    },
    hiddenColumns: true,
    filters: true,
    afterOnCellMouseOver :function(event, coords, TD) {
        //console.log(event);
        //console.log(n.col);
        if(coords.row > -1) {
            if (coords.col == 0 || coords.col == 1) {
                var value = hot.getDataAtRow(coords.row)[6];
                //console.log(value);
                var src = "../src/" + value + ".png";
                //console.log(src);
                $(".show").fadeIn();
                $(".img-show").attr("src", src);
                $(".img-show").css("left", event.clientX + $('.img-show').width() / 2 + 150);
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
}

var hot = new Handsontable(hotElement, hotSettings);
//document.getElementById("export-csv").addEventListener("click", function(event) { hot.getPlugin("exportFile").downloadFile("csv", {filename: "Handsontable CSV Export example"});})
//document.getElementById("export-string").addEventListener("click", function(event) {console.log(hot.getPlugin("exportFile").exportAsString("csv"));})


// update spreadsheet setting
function cellcolorRenderer (instance, td, row, col, value, cellProperties) {

    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.setAttribute("hovered", "popover");

    if (td.innerHTML == 'TRUE')
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