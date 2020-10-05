function Getthecounty() {
  var obj, dbParam, myObj, x, txt = "",
    Cnty, res;
  var gsKey = '1NXUmTdKRCn0H7lORQ-6sYUXlP4CnOwop';
  var zipcd = document.getElementById("zipcode").value;

  var gql = "G WHERE A = " + zipcd;

  var gq = 'SELECT ' + gql;
  var encodedgg = encodeURIComponent(gq);
  var url = 'https://docs.google.com/spreadsheets/d/' + gsKey + '/gviz/tq?tq=' + encodedgg;


  dbParam = JSON.stringify(obj);

  fetch(url)
    .then(data => data.text())
    .then(function(response) {
      var responseText = response.substring(response.indexOf("(") + 1, response.lastIndexOf(")"));
      var response = JSON.parse(responseText);
      var value = response['table']['rows'][0]['c'][0]['v'];

      Cnty = value;
      document.getElementById("county").innerHTML = value;
      a = LoadDetailInfo(Cnty);
      console.log(a);
    })


}

function LoadDetailInfo(Cnty) {
  res = Cnty.replace(" County", "");
  console.log(res);
  gsKey = '1NHtP5Dahfspt_TjpcdugErYa5Z3Jv1bG';

  gql = "B,C,D,E WHERE B = " + "'" + res + "'";
  gq = 'SELECT ' + gql;
  encodedgg = encodeURIComponent(gq);
  url = 'https://docs.google.com/spreadsheets/d/' + gsKey + '/gviz/tq?tq=' + encodedgg;
  console.log(url)

  fetch(url)
    .then(data => data.text())
    .then(function(response) {
      var recs = response.indexOf("c");
      var rec = recs / 4;
      var recrds = parseInt(rec);

      var responseText = response.substring(response.indexOf("(") + 1, response.lastIndexOf(")"));
      console.log("got here at 51");
      var response = JSON.parse(responseText);
      console.log(response['table']['rows'][0]['c'][1]['v']);
      console.log("got here at 53");
      var txt2 = "<table>";
      console.log("got here at 55");
      console.log(response['table']['rows'][0]['c'][2]['v']);


      for (i = 0; i < 29; ++i) {

        txt2 += "<tr><td>" + response['table']['rows'][i]['c'][1]['v'] + "</td>";
        txt2 += "<td>" + response['table']['rows'][i]['c'][2]['v'] + "</td>";
        txt2 += "<td>" + response['table']['rows'][i]['c'][3]['v'] + "</tr></td>";


      }
      txt2 += "</table>";

      console.log(txt2);


      document.getElementById("planinfo").innerHTML = txt2;
    })
  return txt2;
}

function CreateUrl(key, gql) {
  var gq = 'SELECT ' + gql;
  var encodedgg = encodeURIComponent(gq);
  var url = 'https://docs.google.com/spreadsheets/d/' + key + '/gviz/tq?tq=' + encodedgg;

  return url;



}

//https://docs.google.com/spreadsheets/d/1NXUmTdKRCn0H7lORQ-6sYUXlP4CnOwop/edit#gid=1388656719gviz/tq?tq=Select%20G%20where%20A%20=%203279
//https: //drive.google.com/file/d/1NHtP5Dahfspt_TjpcdugErYa5Z3Jv1bG/view?usp=sharing


