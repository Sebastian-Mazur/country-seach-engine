var url = 'https://restcountries.eu/rest/v2/name/';
var $countryList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
    console.log(url);
}

function showCountriesList(resp) {
    console.log(resp);
    function createObiect(item) {
        console.log(item);
        var $createList = $('<ul>').addClass('countries-one').appendTo($countryList);
        var $img = $('<img>').attr('src', item.flag);
        var $name = $('<li>').text('Name: ' + item.name);
        var $nativeName = $('<li>').text('Native name: ' + item.nativeName);
        var $altSpellings = $('<li>').text('Alternative spelling: ' + item.altSpellings);
        var $region = $('<li>').text('Region: ' + item.region);
        var $subregion = $('<li>').text('Subregion: ' + item.subregion);
        var $capital = $('<li>').text('Capital: ' + item.capital);
        var $area = $('<li>').text('Area: ' + item.area + ' km²');
        var $population = $('<li>').text('Population: ' + item.population);
        
        $createList.append($img)
                    .append($name)
                    .append($nativeName)
                    .append($altSpellings)
                    .append($region)
                    .append($subregion)
                    .append($capital)
                    .append($area)
                    .append($population);

        return $createList;
    };

    $countryList.empty();

    for (var i = 0; i < resp.length; i++) {
        createObiect(resp[i]);
    }     
}
