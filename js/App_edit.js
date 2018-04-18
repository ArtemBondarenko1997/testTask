var  titles=localStorage.titles ? JSON.parse(localStorage.titles) : [], authorNames=localStorage.authorNames ? JSON.parse(localStorage.authorNames) : [], descriptions=localStorage.descriptions ? JSON.parse(localStorage.descriptions) : [], datetimes=localStorage.datetimes ? JSON.parse(localStorage.datetimes) : [];
	new Vue({
  			el: '#app2',
  			data: {
  				currentUser: localStorage.getItem("currentUser")
  			},
  			methods: {
  				Out(){
		            this.chek=false;
		            this.currentUser="";
		            localStorage.setItem("currentUser","");
		            location.href = 'index.html';
        		},
  				New(){

  					localStorage.setItem('thisTitle', document.getElementById('title').value);
  					localStorage.setItem('thisDescription', document.getElementById('description').value);
  					localStorage.setItem('thisDatetime', new Date().toISOString() );
  					localStorage.setItem('thisAuthorName', localStorage.getItem('currentUser'));
  					titles.push(document.getElementById('title').value);
  					descriptions.push(document.getElementById('description').value);
  					datetimes.push(localStorage.getItem('thisDatetime'));
  					authorNames.push(localStorage.getItem('currentUser'));
  					localStorage.titles = JSON.stringify(titles);
  					localStorage.descriptions = JSON.stringify(descriptions);
  					localStorage.datetimes = JSON.stringify(datetimes);
  					localStorage.authorNames = JSON.stringify(authorNames);

  					location.href = 'ad.html';
  				}
  			}
		})