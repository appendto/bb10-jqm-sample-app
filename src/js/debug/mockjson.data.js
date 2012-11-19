
var i = 0, j = 0, k = 0,
    num = "", rand;


$.mockJSON.data.COMPANY = [
    "Google", "appendTo", "Facebook", "Microsoft", "Apple", "O'Reilly", "Rackspace", "Github", "Research In Motion", "Brandlogic"
];

$.mockJSON.data.PHONE_NUMBER = [];

for (j = 0; j < 100; j++ ) {
    num = "";
    for (i = 0; i < 10; i++ ) {
        rand = Math.floor( Math.random() * 10 ).toString();
        num = num + rand;
    }
    $.mockJSON.data.PHONE_NUMBER.push( num );
}

$.mockJSON.data.STREET_NUMBER = [];
for ( k = 10; k < 1000; k++ ) {
    $.mockJSON.data.STREET_NUMBER.push( k );
}

$.mockJSON.data.STREET_ADDRESS = [
    "Havenwood Hollow Road", "Whitney Ridge Road", "Calkins Road", "Andrews Road", "Cambridge Street", "Ridge Road", "Main Street", "West Drive"
];

$.mockJSON.data.CITY = [
  "Waterloo", "Redmond", "Rochester", "Nashville", "Boston", "San Francisco", "New York", "Lockport", "Niagara Falls", "Toronto", "San Jose", "Seattle", "Portland", "Omaha", "Chicago", "Fairport"
];

$.mockJSON.data.PHONE_TYPE = [
    "Work", "Other", "Home"
];

$.mockJSON.data.US_STATE = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

$.mockJSON.data.SOCIAL = [
    "twitter", "facebook"
];

$.mockJSON.contactsTemplate = {
    "contacts|50-75": [{
        "id|0-9999": 0,
        "firstName": "@MALE_FIRST_NAME",
        "lastName": "@LAST_NAME",
        "emails|1-4": [{
            "email": "@EMAIL",
            "type": "@PHONE_TYPE"
        }],
        "phones|1-2": [{
            "type": "@PHONE_TYPE",
            "number": "@PHONE_NUMBER"
        }],
        "company": "@COMPANY",
        "street": "@STREET_NUMBER @STREET_ADDRESS",
        "city": "@CITY",
        "state": "@US_STATE",
        "ZIP|11111-99999": 0,
        "twitter": "@@MALE_FIRST_NAME@LAST_NAME",
        "picture": "http://picturesrus.com/photos/@MALE_FIRST_NAME@LAST_NAME.jpg"
    }]
};

// MOCK
(function() {

var data = amplify.store( "contactData" );

if ( !data ) {
    data = $.mockJSON.generateFromTemplate( $.mockJSON.contactsTemplate );
    amplify.store( "contactData", data );
}
//{"contacts": [{"firstName":"Anthony","lastName":"Jackson","company":"Microsoft","street":"573 Whitney Ridge Road","city":"New York","state":"MD","ZIP":70832,"twitter":"@GeorgeAllen","id":7813,"emails":[],"phone":[{"type":"Home","number":"9681163596"},{"type":"Mobile","number":"1751079231"}],"picture":"http://picturesrus.com/photos/ChristopherJohnson.jpg","phones":[]},{"firstName":"Anthony","lastName":"Walker","company":"appendTo","street":"41 Whitney Ridge Road","city":"Redmond","state":"PA","ZIP":90478,"twitter":"@JoseDavis","id":319,"emails":[],"phone":[{"type":"Home","number":"5692334058"}],"picture":"http://picturesrus.com/photos/MarkThomas.jpg","phones":[]},{"firstName":"Anthony","lastName":"Hernandez","company":"appendTo","street":"468 Cambridge Street","city":"Boston","state":"ID","ZIP":82495,"twitter":"@StevenWilliams","id":6527,"emails":[],"phone":[{"type":"Home","number":"7701440719"},{"type":"Mobile","number":"6205355843"}],"picture":"http://picturesrus.com/photos/MichaelJones.jpg","phones":[]},{"firstName":"Brian","lastName":"Clark","company":"Rackspace","street":"21 Whitney Ridge Road","city":"Redmond","state":"AL","ZIP":35289,"twitter":"@CharlesAllen","id":2293,"emails":[],"phone":[{"type":"Mobile","number":"3379654985"}],"picture":"http://picturesrus.com/photos/RobertLopez.jpg","phones":[]},{"firstName":"Brian","lastName":"Gonzalez","company":"Rackspace","street":"788 Havenwood Hollow Road","city":"Fairport","state":"ND","ZIP":63942,"twitter":"@ChristopherLopez","id":4040,"emails":[],"phone":[{"type":"Home","number":"7393830917"},{"type":"Work","number":"7057460439"}],"picture":"http://picturesrus.com/photos/RichardClark.jpg","phones":[]},{"firstName":"Charles","lastName":"Smith","company":"O'Reilly","street":"565 Havenwood Hollow Road","city":"Toronto","state":"ND","ZIP":26028,"twitter":"@WilliamHernandez","id":2584,"emails":[],"phone":[{"type":"Home","number":"1294464217"}],"picture":"http://picturesrus.com/photos/PaulMoore.jpg","phones":[]},{"firstName":"Charles","lastName":"Johnson","company":"Brandlogic","street":"516 Calkins Road","city":"San Jose","state":"MD","ZIP":92936,"twitter":"@ScottYoung","id":2649,"emails":[],"phone":[{"type":"Work","number":"3867314945"}],"picture":"http://picturesrus.com/photos/TimothyHernandez.jpg","phones":[]},{"firstName":"Christopher","lastName":"Smith","company":"Github","street":"627 West Drive","city":"Nashville","state":"NE","ZIP":17879,"twitter":"@RobertRodriguez","id":6711,"emails":[],"phone":[{"type":"Home","number":"9775449755"}],"picture":"http://picturesrus.com/photos/MatthewMartinez.jpg","phones":[]},{"firstName":"Christopher","lastName":"Thompson","company":"Google","street":"957 Whitney Ridge Road","city":"Niagara Falls","state":"RI","ZIP":37683,"twitter":"@WilliamJones","id":5690,"emails":[],"phone":[{"type":"Work","number":"5394961709"},{"type":"Home","number":"3335116680"}],"picture":"http://picturesrus.com/photos/JohnGonzalez.jpg","phones":[]},{"firstName":"Daniel","lastName":"Smith","company":"O'Reilly","street":"67 Andrews Road","city":"Seattle","state":"NM","ZIP":48084,"twitter":"@MatthewThompson","id":5875,"emails":[],"phone":[{"type":"Home","number":"2627893369"},{"type":"Home","number":"9952395043"}],"picture":"http://picturesrus.com/photos/DonaldMartin.jpg","phones":[]},{"firstName":"Daniel","lastName":"Garcia","company":"Brandlogic","street":"660 Havenwood Hollow Road","city":"Lockport","state":"IL","ZIP":81506,"twitter":"@FrankLewis","id":3705,"emails":[],"phone":[{"type":"Mobile","number":"8233220949"}],"picture":"http://picturesrus.com/photos/JosephLopez.jpg","phones":[]},{"firstName":"Daniel","lastName":"Thompson","company":"Github","street":"768 West Drive","city":"Toronto","state":"NV","ZIP":17726,"twitter":"@TimothyTaylor","id":3531,"emails":[],"phone":[{"type":"Work","number":"8753819696"}],"picture":"http://picturesrus.com/photos/JeffreyHarris.jpg","phones":[]},{"firstName":"Daniel","lastName":"Brown","company":"Rackspace","street":"335 Andrews Road","city":"San Jose","state":"WY","ZIP":86663,"twitter":"@MatthewMartin","id":6058,"emails":[],"phone":[{"type":"Home","number":"9681163596"},{"type":"Work","number":"0163067301"}],"picture":"http://picturesrus.com/photos/MatthewMartinez.jpg","phones":[]},{"firstName":"Daniel","lastName":"Jones","company":"Github","street":"405 Cambridge Street","city":"Rochester","state":"MI","ZIP":45751,"twitter":"@JohnGarcia","id":6183,"emails":[],"phone":[{"type":"Home","number":"8753819696"},{"type":"Work","number":"7806210866"}],"picture":"http://picturesrus.com/photos/JosephDavis.jpg","phones":[]},{"firstName":"David","lastName":"Williams","company":"Research In Motion","street":"492 West Drive","city":"Nashville","state":"NV","ZIP":37669,"twitter":"@AnthonyWalker","id":8950,"emails":[],"phone":[{"type":"Mobile","number":"9952395043"},{"type":"Work","number":"2833453406"}],"picture":"http://picturesrus.com/photos/RichardMoore.jpg","phones":[]},{"firstName":"David","lastName":"Smith","company":"Apple","street":"287 Calkins Road","city":"Portland","state":"ID","ZIP":55579,"twitter":"@JohnJones","id":7351,"emails":[],"phone":[{"type":"Mobile","number":"3829260572"},{"type":"Work","number":"4578694046"}],"picture":"http://picturesrus.com/photos/JeffreyGarcia.jpg","phones":[]},{"firstName":"Donald","lastName":"Wilson","company":"Google","street":"865 Main Street","city":"Portland","state":"IN","ZIP":85396,"twitter":"@StevenHernandez","id":6232,"emails":[],"phone":[{"type":"Home","number":"0720820810"},{"type":"Mobile","number":"8413498056"}],"picture":"http://picturesrus.com/photos/EdwardGarcia.jpg","phones":[]},{"firstName":"Edward","lastName":"Young","company":"appendTo","street":"32 Main Street","city":"Toronto","state":"AK","ZIP":74299,"twitter":"@RobertMartin","id":9008,"emails":[],"phone":[{"type":"Mobile","number":"9674374514"},{"type":"Home","number":"3062370480"}],"picture":"http://picturesrus.com/photos/JeffreyRobinson.jpg","phones":[]},{"firstName":"Edward","lastName":"Jackson","company":"Brandlogic","street":"187 Andrews Road","city":"Nashville","state":"NC","ZIP":80239,"twitter":"@RonaldMartin","id":4477,"emails":[],"phone":[{"type":"Work","number":"0720820810"},{"type":"Home","number":"4578694046"}],"picture":"http://picturesrus.com/photos/JeffreyMartinez.jpg","phones":[]},{"firstName":"Edward","lastName":"Lopez","company":"Research In Motion","street":"164 Cambridge Street","city":"Portland","state":"NM","ZIP":28349,"twitter":"@MarkWalker","id":9159,"emails":[],"phone":[{"type":"Mobile","number":"7379734227"},{"type":"Home","number":"5692334058"}],"picture":"http://picturesrus.com/photos/FrankAllen.jpg","phones":[]},{"firstName":"Eric","lastName":"Lewis","company":"Research In Motion","street":"705 Andrews Road","city":"Fairport","state":"NM","ZIP":60227,"twitter":"@JamesTaylor","id":3421,"emails":[],"phone":[{"type":"Mobile","number":"2169637313"}],"picture":"http://picturesrus.com/photos/KennethRodriguez.jpg","phones":[]},{"firstName":"Eric","lastName":"Smith","company":"Facebook","street":"625 West Drive","city":"Nashville","state":"DE","ZIP":71243,"twitter":"@KennethLopez","id":6288,"emails":[],"phone":[{"type":"Home","number":"7806210866"}],"picture":"http://picturesrus.com/photos/CharlesTaylor.jpg","phones":[]},{"firstName":"Eric","lastName":"Lopez","company":"Google","street":"424 Cambridge Street","city":"Redmond","state":"NH","ZIP":16827,"twitter":"@WilliamHall","id":6247,"emails":[],"phone":[{"type":"Work","number":"1818428190"}],"picture":"http://picturesrus.com/photos/MatthewHall.jpg","phones":[]},{"firstName":"Eric","lastName":"Perez","company":"Brandlogic","street":"821 Calkins Road","city":"Omaha","state":"WY","ZIP":73219,"twitter":"@WilliamWhite","id":6690,"emails":[],"phone":[{"type":"Work","number":"6290100759"}],"picture":"http://picturesrus.com/photos/TimothyMiller.jpg","phones":[]},{"firstName":"Frank","lastName":"Harris","company":"Research In Motion","street":"90 Andrews Road","city":"Omaha","state":"AL","ZIP":20238,"twitter":"@PaulThompson","id":9190,"emails":[],"phone":[{"type":"Work","number":"1294464217"},{"type":"Home","number":"6290100759"}],"picture":"http://picturesrus.com/photos/DavidAnderson.jpg","phones":[]},{"firstName":"Frank","lastName":"Lopez","company":"Brandlogic","street":"535 Havenwood Hollow Road","city":"Waterloo","state":"HI","ZIP":32201,"twitter":"@DanielGarcia","id":8576,"emails":[],"phone":[{"type":"Home","number":"7806210866"},{"type":"Work","number":"9952395043"}],"picture":"http://picturesrus.com/photos/ScottYoung.jpg","phones":[]},{"firstName":"Frank","lastName":"Hall","company":"Apple","street":"159 Havenwood Hollow Road","city":"Portland","state":"ID","ZIP":84579,"twitter":"@BrianLewis","id":6750,"emails":[],"phone":[{"type":"Home","number":"9892644090"}],"picture":"http://picturesrus.com/photos/JosephLewis.jpg","phones":[]},{"firstName":"Frank","lastName":"Thomas","company":"Research In Motion","street":"975 Havenwood Hollow Road","city":"Rochester","state":"UT","ZIP":58360,"twitter":"@MatthewDavis","id":5961,"emails":[],"phone":[{"type":"Home","number":"1751079231"}],"picture":"http://picturesrus.com/photos/JasonBrown.jpg","phones":[]},{"firstName":"Frank","lastName":"Martin","company":"Microsoft","street":"164 Main Street","city":"New York","state":"AK","ZIP":20309,"twitter":"@JamesHernandez","id":9408,"emails":[],"phone":[{"type":"Mobile","number":"7596302441"}],"picture":"http://picturesrus.com/photos/GeorgeGonzalez.jpg","phones":[]},{"firstName":"Gary","lastName":"Wilson","company":"Rackspace","street":"742 Calkins Road","city":"Boston","state":"TN","ZIP":59419,"twitter":"@JoseGonzalez","id":3188,"emails":[],"phone":[{"type":"Home","number":"4578694046"},{"type":"Mobile","number":"8599671948"}],"picture":"http://picturesrus.com/photos/RichardMoore.jpg","phones":[]},{"firstName":"Gary","lastName":"Martinez","company":"appendTo","street":"280 Cambridge Street","city":"Niagara Falls","state":"MA","ZIP":15369,"twitter":"@CharlesJackson","id":7796,"emails":[],"phone":[{"type":"Home","number":"8526973301"}],"picture":"http://picturesrus.com/photos/AnthonyTaylor.jpg","phones":[]},{"firstName":"Gary","lastName":"Martinez","company":"appendTo","street":"481 Main Street","city":"Toronto","state":"VT","ZIP":87428,"twitter":"@JohnLopez","id":9587,"emails":[],"phone":[{"type":"Work","number":"2134494613"}],"picture":"http://picturesrus.com/photos/TimothyLee.jpg","phones":[]},{"firstName":"George","lastName":"Walker","company":"Facebook","street":"185 Cambridge Street","city":"Omaha","state":"MT","ZIP":96356,"twitter":"@RichardWilliams","id":227,"emails":[],"phone":[{"type":"Home","number":"6290100759"},{"type":"Mobile","number":"8753819696"}],"picture":"http://picturesrus.com/photos/ChristopherBrown.jpg","phones":[]},{"firstName":"George","lastName":"Harris","company":"Research In Motion","street":"958 Whitney Ridge Road","city":"Redmond","state":"IA","ZIP":24580,"twitter":"@ChristopherMartinez","id":4431,"emails":[],"phone":[{"type":"Mobile","number":"0433765505"}],"picture":"http://picturesrus.com/photos/MichaelRodriguez.jpg","phones":[]},{"firstName":"James","lastName":"Rodriguez","company":"Github","street":"411 Main Street","city":"Portland","state":"NC","ZIP":37196,"twitter":"@LarryGarcia","id":6876,"emails":[],"phone":[{"type":"Work","number":"5490150979"}],"picture":"http://picturesrus.com/photos/DavidGarcia.jpg","phones":[]},{"firstName":"James","lastName":"Rodriguez","company":"Facebook","street":"580 West Drive","city":"Omaha","state":"IL","ZIP":68164,"twitter":"@MichaelMartin","id":8278,"emails":[],"phone":[{"type":"Home","number":"9458641212"}],"picture":"http://picturesrus.com/photos/JeffreyGarcia.jpg","phones":[]},{"firstName":"Jason","lastName":"Lewis","company":"Facebook","street":"144 Main Street","city":"Niagara Falls","state":"ID","ZIP":27756,"twitter":"@PaulPerez","id":5043,"emails":[],"phone":[{"type":"Work","number":"0883759805"}],"picture":"http://picturesrus.com/photos/RonaldHarris.jpg","phones":[]},{"firstName":"Jason","lastName":"Thomas","company":"Rackspace","street":"641 Cambridge Street","city":"Rochester","state":"CA","ZIP":94078,"twitter":"@ThomasYoung","id":4391,"emails":[],"phone":[{"type":"Home","number":"1818428190"},{"type":"Mobile","number":"8599671948"}],"picture":"http://picturesrus.com/photos/KennethBrown.jpg","phones":[]},{"firstName":"Jeffrey","lastName":"Smith","company":"Microsoft","street":"926 Main Street","city":"Niagara Falls","state":"MD","ZIP":34019,"twitter":"@RobertSmith","id":3329,"emails":[],"phone":[{"type":"Mobile","number":"0837311299"}],"picture":"http://picturesrus.com/photos/RobertSmith.jpg","phones":[]},{"firstName":"John","lastName":"Walker","company":"Github","street":"289 Cambridge Street","city":"Nashville","state":"WA","ZIP":76330,"twitter":"@DavidGonzalez","id":7866,"emails":[],"phone":[{"type":"Work","number":"8413498056"}],"picture":"http://picturesrus.com/photos/CharlesPerez.jpg","phones":[]},{"firstName":"John","lastName":"Moore","company":"Rackspace","street":"779 Andrews Road","city":"Omaha","state":"AZ","ZIP":67485,"twitter":"@EdwardMoore","id":7905,"emails":[],"phone":[{"type":"Work","number":"9193287692"}],"picture":"http://picturesrus.com/photos/JeffreyMartinez.jpg","phones":[]},{"firstName":"John","lastName":"Hall","company":"O'Reilly","street":"310 Ridge Road","city":"Chicago","state":"CO","ZIP":62972,"twitter":"@DavidThompson","id":7914,"emails":[],"phone":[{"type":"Work","number":"6492809608"},{"type":"Home","number":"9775449755"}],"picture":"http://picturesrus.com/photos/JoseGarcia.jpg","phones":[]},{"firstName":"John","lastName":"Taylor","company":"Rackspace","street":"849 West Drive","city":"Fairport","state":"OH","ZIP":94779,"twitter":"@RonaldWalker","id":6784,"emails":[],"phone":[{"type":"Work","number":"3076506810"},{"type":"Home","number":"8526973301"}],"picture":"http://picturesrus.com/photos/DonaldDavis.jpg","phones":[]},{"firstName":"Jose","lastName":"Thomas","company":"Github","street":"780 Andrews Road","city":"Seattle","state":"WV","ZIP":23718,"twitter":"@DonaldLee","id":3566,"emails":[],"phone":[{"type":"Mobile","number":"4578694046"}],"picture":"http://picturesrus.com/photos/KennethWilson.jpg","phones":[]},{"firstName":"Jose","lastName":"White","company":"Github","street":"41 Havenwood Hollow Road","city":"Redmond","state":"FL","ZIP":89580,"twitter":"@MichaelLopez","id":7395,"emails":[],"phone":[{"type":"Mobile","number":"6290100759"},{"type":"Mobile","number":"1374940636"}],"picture":"http://picturesrus.com/photos/JoseLopez.jpg","phones":[]},{"firstName":"Jose","lastName":"Lopez","company":"appendTo","street":"241 Andrews Road","city":"Redmond","state":"NM","ZIP":71052,"twitter":"@AnthonyAllen","id":5792,"emails":[],"phone":[{"type":"Mobile","number":"4221389026"},{"type":"Work","number":"3076506810"}],"picture":"http://picturesrus.com/photos/ThomasLopez.jpg","phones":[]},{"firstName":"Kenneth","lastName":"Johnson","company":"Brandlogic","street":"214 Whitney Ridge Road","city":"Portland","state":"TN","ZIP":45651,"twitter":"@MichaelHall","id":2363,"emails":[],"phone":[{"type":"Home","number":"6699511265"}],"picture":"http://picturesrus.com/photos/DonaldMartin.jpg","phones":[]},{"firstName":"Kenneth","lastName":"Anderson","company":"Research In Motion","street":"764 Calkins Road","city":"Fairport","state":"NE","ZIP":95543,"twitter":"@RonaldJones","id":5194,"emails":[],"phone":[{"type":"Home","number":"3218438825"},{"type":"Mobile","number":"4221389026"}],"picture":"http://picturesrus.com/photos/GeorgeRodriguez.jpg","phones":[]},{"firstName":"Kevin","lastName":"Jones","company":"Github","street":"912 Whitney Ridge Road","city":"Nashville","state":"MN","ZIP":28431,"twitter":"@JamesTaylor","id":83,"emails":[],"phone":[{"type":"Mobile","number":"3829260572"}],"picture":"http://picturesrus.com/photos/CharlesPerez.jpg","phones":[]},{"firstName":"Kevin","lastName":"White","company":"Research In Motion","street":"181 Andrews Road","city":"Waterloo","state":"SC","ZIP":41398,"twitter":"@RichardJones","id":5557,"emails":[],"phone":[{"type":"Work","number":"9533396479"},{"type":"Work","number":"1374940636"}],"picture":"http://picturesrus.com/photos/PaulSmith.jpg","phones":[]},{"firstName":"Kevin","lastName":"Lopez","company":"Github","street":"384 Andrews Road","city":"Omaha","state":"NH","ZIP":83462,"twitter":"@PaulYoung","id":6675,"emails":[],"phone":[{"type":"Work","number":"4578694046"},{"type":"Home","number":"7444261991"}],"picture":"http://picturesrus.com/photos/DanielJohnson.jpg","phones":[]},{"firstName":"Kevin","lastName":"Moore","company":"Research In Motion","street":"700 Andrews Road","city":"Omaha","state":"NC","ZIP":94279,"twitter":"@LarryJohnson","id":2235,"emails":[],"phone":[{"type":"Home","number":"2627893369"}],"picture":"http://picturesrus.com/photos/DonaldDavis.jpg","phones":[]},{"firstName":"Larry","lastName":"Wilson","company":"Apple","street":"14 Calkins Road","city":"Lockport","state":"VA","ZIP":89599,"twitter":"@RichardRobinson","id":2647,"emails":[],"phone":[{"type":"Mobile","number":"4730471201"}],"picture":"http://picturesrus.com/photos/JamesLewis.jpg","phones":[]},{"firstName":"Matthew","lastName":"Wilson","company":"O'Reilly","street":"892 Andrews Road","city":"Boston","state":"MT","ZIP":36449,"twitter":"@EricJones","id":3665,"emails":[],"phone":[{"type":"Home","number":"6205355843"}],"picture":"http://picturesrus.com/photos/GeorgeJones.jpg","phones":[]},{"firstName":"Matthew","lastName":"Walker","company":"O'Reilly","street":"979 Andrews Road","city":"Toronto","state":"AK","ZIP":44966,"twitter":"@MarkWilliams","id":926,"emails":[],"phone":[{"type":"Mobile","number":"7596302441"},{"type":"Home","number":"9681163596"}],"picture":"http://picturesrus.com/photos/RonaldGarcia.jpg","phones":[]},{"firstName":"Michael","lastName":"Robinson","company":"Brandlogic","street":"343 Whitney Ridge Road","city":"Rochester","state":"AZ","ZIP":86724,"twitter":"@FrankMartinez","id":8508,"emails":[],"phone":[{"type":"Work","number":"0163067301"},{"type":"Home","number":"2627893369"}],"picture":"http://picturesrus.com/photos/KevinWalker.jpg","phones":[]},{"firstName":"Michael","lastName":"Brown","company":"Research In Motion","street":"53 Main Street","city":"Fairport","state":"AL","ZIP":54297,"twitter":"@MatthewRodriguez","id":1128,"emails":[],"phone":[{"type":"Mobile","number":"3750381282"},{"type":"Work","number":"1294464217"}],"picture":"http://picturesrus.com/photos/RobertWalker.jpg","phones":[]},{"firstName":"Richard","lastName":"Young","company":"appendTo","street":"197 Whitney Ridge Road","city":"Chicago","state":"MS","ZIP":91551,"twitter":"@KevinMartinez","id":3204,"emails":[],"phone":[{"type":"Home","number":"2358530864"}],"picture":"http://picturesrus.com/photos/EricHernandez.jpg","phones":[]},{"firstName":"Richard","lastName":"Allen","company":"Research In Motion","street":"486 Ridge Road","city":"San Francisco","state":"AR","ZIP":61982,"twitter":"@MatthewThomas","id":4167,"emails":[],"phone":[{"type":"Home","number":"1374940636"}],"picture":"http://picturesrus.com/photos/GaryHall.jpg","phones":[]},{"firstName":"Richard","lastName":"Thomas","company":"Brandlogic","street":"601 Calkins Road","city":"Fairport","state":"RI","ZIP":95292,"twitter":"@ChristopherHarris","id":950,"emails":[],"phone":[{"type":"Work","number":"3829260572"},{"type":"Home","number":"7399058798"}],"picture":"http://picturesrus.com/photos/MatthewPerez.jpg","phones":[]},{"firstName":"Ronald","lastName":"Williams","company":"appendTo","street":"420 Ridge Road","city":"Rochester","state":"ND","ZIP":44528,"twitter":"@ChristopherLewis","id":5104,"emails":[],"phone":[{"type":"Mobile","number":"6954241331"}],"picture":"http://picturesrus.com/photos/JoseAllen.jpg","phones":[]},{"firstName":"Ronald","lastName":"Martin","company":"Github","street":"142 West Drive","city":"Toronto","state":"IN","ZIP":14561,"twitter":"@GaryBrown","id":366,"emails":[],"phone":[{"type":"Home","number":"9806868862"},{"type":"Home","number":"8753819696"}],"picture":"http://picturesrus.com/photos/RobertMiller.jpg","phones":[]},{"firstName":"Scott","lastName":"Clark","company":"Google","street":"677 Ridge Road","city":"Toronto","state":"AR","ZIP":65588,"twitter":"@JosephThompson","id":1748,"emails":[],"phone":[{"type":"Work","number":"4623871327"}],"picture":"http://picturesrus.com/photos/DonaldGarcia.jpg","phones":[]},{"firstName":"Scott","lastName":"Lewis","company":"Microsoft","street":"901 Whitney Ridge Road","city":"Portland","state":"HI","ZIP":59616,"twitter":"@JamesTaylor","id":4257,"emails":[],"phone":[{"type":"Mobile","number":"6205355843"},{"type":"Home","number":"1751079231"}],"picture":"http://picturesrus.com/photos/FrankHall.jpg","phones":[]},{"firstName":"Steven","lastName":"Thomas","company":"O'Reilly","street":"212 Andrews Road","city":"Waterloo","state":"WV","ZIP":19509,"twitter":"@MarkLopez","id":3299,"emails":[],"phone":[{"type":"Work","number":"0826798880"}],"picture":"http://picturesrus.com/photos/GeorgeLewis.jpg","phones":[]},{"firstName":"Thomas","lastName":"Rodriguez","company":"appendTo","street":"299 Ridge Road","city":"Nashville","state":"DE","ZIP":31653,"twitter":"@GaryBrown","id":8096,"emails":[],"phone":[{"type":"Work","number":"9681163596"}],"picture":"http://picturesrus.com/photos/RobertHarris.jpg","phones":[]},{"firstName":"Timothy","lastName":"White","company":"Microsoft","street":"176 Cambridge Street","city":"Omaha","state":"CT","ZIP":51547,"twitter":"@StevenMiller","id":1485,"emails":[],"phone":[{"type":"Mobile","number":"9533396479"}],"picture":"http://picturesrus.com/photos/RonaldHernandez.jpg","phones":[]},{"firstName":"Timothy","lastName":"Young","company":"Apple","street":"42 Main Street","city":"Redmond","state":"WV","ZIP":51642,"twitter":"@DanielJones","id":2624,"emails":[],"phone":[{"type":"Home","number":"7663555289"},{"type":"Work","number":"7057460439"}],"picture":"http://picturesrus.com/photos/DavidMoore.jpg","phones":[]},{"firstName":"Timothy","lastName":"Smith","company":"Facebook","street":"953 Calkins Road","city":"Lockport","state":"WY","ZIP":30004,"twitter":"@ScottMartin","id":2334,"emails":[],"phone":[{"type":"Mobile","number":"3774568302"}],"picture":"http://picturesrus.com/photos/DonaldJackson.jpg","phones":[]},{"firstName":"Timothy","lastName":"Allen","company":"Brandlogic","street":"378 Whitney Ridge Road","city":"Redmond","state":"TN","ZIP":84090,"twitter":"@JosephLopez","id":2875,"emails":[],"phone":[{"type":"Work","number":"7236813324"}],"picture":"http://picturesrus.com/photos/PaulWalker.jpg","phones":[]},{"firstName":"William","lastName":"Martinez","company":"Github","street":"676 Ridge Road","city":"Rochester","state":"MT","ZIP":87449,"twitter":"@BrianMartinez","id":6083,"emails":[],"phone":[{"type":"Mobile","number":"6124812334"},{"type":"Mobile","number":"3076506810"}],"picture":"http://picturesrus.com/photos/EdwardAnderson.jpg","phones":[]}]};

$.mockjax({
    url: "contacts",
    dataType: "JSON",
    contentType: "text/json",
    responseText: data
});

$.mockjax({
    url: /contact\/([0-9]*)/,
    dataType: "JSON",
    type: "GET",
    contentType: "text/json",
    response: function( settings ) {
        var contact = _.find( data.contacts, function( contact ) {
            return contact.id === +settings.url.split( "/" )[1];
        });

        if ( !contact ) {
            this.status = 500;
        }

        this.responseText = contact;
    },
    responseTime: 750
});

$.mockjax({
    url: /contact\/([0-9]*)/,
    dataType: "JSON",
    type: "PUT",
    contentType: "text/json",
    response: function( settings ) {
        var jsonData = JSON.parse( settings.data ),
            contact;

        contact = _.find( data.contacts, function( contact ) {
            return contact.id === jsonData.id;
        });

        _.extend( contact, jsonData );

        amplify.store( "contactData", data );
        
        this.responseText = contact;
    },
    responseTime: 750
});

$.mockjax({
    url: /contact/,
    dataType: "JSON",
    type: "DELETE",
    contentType: "text/json",
    response: function( settings ) {
        var index = -1;
        _.each( data.contacts, function( contact, val ) {
            if ( contact.id == settings.url.split( "/" ).pop() ) {
                index = val;
            }
        });

        if ( index > -1) {
            data.contacts.splice( index, 1 );
            amplify.store( "contactData", data );
        }

        this.responseText = {
            success: true
        };
    },
    responseTime: 750
});

$.mockjax({
    url: /contact/,
    dataType: "JSON",
    type: "POST",
    contentType: "text/json",
    response: function( settings ) {
        var contact = JSON.parse( settings.data );

        contact.id = Math.floor( Math.random() * 1000 );
        data.contacts.push( contact );

        amplify.store( "contactData", data );

        this.responseText = contact;
    },
    responseTime: 750
});

}());




