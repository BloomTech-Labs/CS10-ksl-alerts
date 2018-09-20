import React, { Component } from 'react';
import cheerio from 'cheerio';
import request from 'request';

class AlertDetail extends Component {
	constructor() {
		super();
		this.state = {
			url: 'https://classifieds.ksl.com/search/?keyword=guitar&zip=84101&miles=25&priceFrom=%240&priceTo=%24100&hasPhotos%5B%5D=Has+Photos&marketType%5B%5D=Sale&postedTimeFQ%5B%5D=1DAY&city=&state=&sort=0',
			title: 'Guitar'
		}
	}

	componentDidMount() {
		fetch('https://www.ksl.com', {mode:'no-cors'}).then(res => {
			console.log('res:', res.body);
		})
		// const options = {
		// 	url: this.state.url,
		// 	headers: {
		// 		'Access-Control-Allow-Origin': '*'
		// 	},
		// 	method: 'GET'
		// }

		// request(options, (error, response, body) => {
		// 	console.log('error:', error);
		// 	console.log('statusCode:', response && response.statusCode);
		// 	// console.log('body:', body);
		
		// 	const $ = cheerio.load(body);
		
		// 	// from view-source page, the data we need consist in script tag inside 'window.renderSearchSection'
		// 	const scripts = $('script').toArray();
		
		// 	scripts.find(script => {
		// 		if (script.children[0] !== undefined) {
		// 			if (script.children[0].data !== undefined)
		// 				if (script.children[0].data.includes('window.renderSearchSection')) {
		// 					let searchResults = script.children[0].data
		// 					// change the format to be json
		// 					const startIndex = searchResults.indexOf('(')
		// 					let results = eval(searchResults.substring(startIndex))
		// 					console.log(results);
		// 				}
		// 		}
		// 	});
		// });
	}

  render() {
    return (
      <div>
          Alert Detail!!!     
      </div>
  	);
  }
}

export default AlertDetail;