var Child = {
    	props: ['canDel'],
  		template: '<div><button type="button" class="btn btn-danger" v-if="canDel == authorName" v-on:click="del">Delete</button><h1 class="title">{{ title }}</h1> <span class="description">{{ description }}</span>	<div class="conteiner"><div class="row"><div class="col"><span class="authorName">{{authorName}}</span>	<span class="datetime">{{datetime}}</span></div></div></div></div>',
  		data(){
  			return {
  				title: localStorage.getItem('thisTitle'),
  				authorName: localStorage.getItem('thisAuthorName'),
  				description: localStorage.getItem('thisDescription'),
  				datetime: localStorage.getItem('thisDatetime'),
  			}
  		}
	}
	var count=localStorage.getItem("count")?localStorage.getItem("count"):0;
	new Vue({
  			el: '#app3',
  			data: {
  				currentUser: localStorage.getItem("currentUser"),
  				
  			},
  			 components: {
						    'my-component': Child
						  },
			 methods:{
		del(){
           location.href = 'index.html';
          },
			 	  Out(){
		            this.chek=false;
		            this.currentUser="";
		            localStorage.setItem("currentUser","");
		            location.href = 'index.html';
        		}
			 }
		})