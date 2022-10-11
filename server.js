var express = require('express');
var app = express();

app.use("/assets", express.static('./assets/'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/src/home.html" );
    //res.send('Hello World');
})

app.get('/process_get', function (req, res) {
    response = {
        age_18_25:req.query.age_18_25,
        age_25_35:req.query.age_25_35,
        age_35:req.query.age_35,
        junior:req.query.junior,
        senior:req.query.senior,
        great_diff:req.query.great_diff,
        soso_diff:req.query.soso_diff,
        bad_diff:req.query.bad_diff,
        great_interest:req.query.great_diff,
        soso_interest:req.query.soso_diff,
        bad_interest:req.query.bad_interest,
        yes_hours:req.query.yes_hours,
        ok_hours:req.query.ok_hours,
        no_hours:req.query.no_hours,
        trentemin:req.query.trentemin,
        trenteminuneh:req.query.trenteminuneh,
        uneh:req.query.uneh,
        rate_relation:req.query.rate_relation,
        presentiel:req.query.presentiel,
        balance_ok:req.query.balance_ok,
        distanciel:req.query.distanciel,
        none_reunion:req.query.none_reunion,
        few_reunion:req.query.few_reunion,
        lot_reunion:req.query.lot_reunion,
        great_deco:req.query.great_deco,
        ok_deco:req.query.ok_deco,
        no_deco:req.query.no_deco,
        no_meth:req.query.no_meth,
        few_meth:req.query.few_meth,
        lot_meth:req.query.lot_meth,
        few_acti:req.query.few_acti,
        soso_acti:req.query.soso_acti,
        lot_acti:req.query.lot_acti,
        ok_salary:req.query.ok_salary,
        not_ok_salary:req.query.not_ok_salary,
        soso_ok_salary:req.query.soso_ok_salary,
        yes_offday:req.query.yes_offday,
        no_offday:req.query.no_offday,
        ok_relation:req.query.ok_relation,
        soso_relation:req.query.soso_relation,
        bad_relation:req.query.bad_relation,
        yes_attente:req.query.yes_attente,
        no_attente:req.query.no_attente,
        admin:req.query.admin,
        itech:req.query.itech,
        management:req.query.management,
        commercial:req.query.commercial,
        feminin:req.query.feminin,
        masculin:req.query.masculin,
    };
    console.log(response);
    res.end(JSON.stringify(response));
    res.send('Page Questionnaire');
})

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/src/index.html" );
})


var app = app.listen(8081, function () {
    var host = app.address().address
    var port = app.address().port

    console.log("Server listening at http://127.0.0.1:8081", host, port)
})