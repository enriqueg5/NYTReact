var axios = require('axios');

var apiCode = 'a4a45edb5a264d8291dd90482a5f7c7d';

var Helpers = {
  runQuery: function(title){
      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json/&q='+ title + "/api-key="+apiCode;

      return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results;
		});
  },
  getSaved: function(){

		return axios.get('/api/saved')
			.then(function(response){

				console.log(response);
				return response;
			});
	},
  postSaved: function(title, URL, date) {

    return axios.post('/api/saved', {title: title, URL: URL, date: date}).then(function(result){
      console.log(result);
      return (result);
    });
  },
  deleteSaved: function() {
    return axios.delete('/api/saved' + article._id).then(function(result){
      console.log(result);
    });
  }
};

module.exports = Helpers;
