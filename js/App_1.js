     var logins=localStorage.logins ? JSON.parse(localStorage.logins) : [], passwords=localStorage.passwords ? JSON.parse(localStorage.passwords) : [];
    var num=logins.length;
    var paginator = document.getElementsByClassName("paginator");
      var Child = {
         props: ['id', 'canDel', 'title','authorName','description','datetime'],
        template: '<div :data-num= id class=num><button type="button" class="btn btn-danger" v-if="canDel == authorName" v-on:click="del">Delete</button><h1 class="title">{{ title }}</h1> <span class="description">{{ description }}</span> <div class="conteiner"><div class="row"><div class="col"><span class="authorName">{{authorName}}</span> <span class="datetime">{{datetime}}</span></div></div></div></div>',
        methods: {
          del(){
            localStorage.setItem("delNow",this.id);
            localStorage.setItem("count", localStorage.getItem("count")-1);
            location.reload();
          }
          }
         }
      new Vue({
        el: '#app',
        data: {
          err: false,
          user:{
            email: "",
            password: ""
          },
          currentUser: "",
          chek:false,      
          titles:localStorage.titles ? JSON.parse(localStorage.titles) : [], 
          authorNames:localStorage.authorNames ? JSON.parse(localStorage.authorNames) : [], 
          descriptions:localStorage.descriptions ? JSON.parse(localStorage.descriptions) : [], 
          datetimes:localStorage.datetimes ? JSON.parse(localStorage.datetimes) : []
  
        },
        methods: {
          registUser(){
            
            this.user.email=$("#email").val();
            this.user.password=$("#password").val();
            this.err=false;

            for(var i=0;i<num;i++)
            {
              if(logins[i]==this.user.email){
                if(passwords[i]==this.user.password)
                  {this.currentUser=this.user.email; localStorage.setItem("currentUser", this.currentUser)}
                else
                  this.err=true;
              }
            }
            if(!this.chek && !this.err)
            {
              num++;
              logins.push(this.user.email);
              passwords.push(this.user.password);
              this.currentUser=this.user.email;
              localStorage.setItem("currentUser", this.currentUser);
              localStorage.logins = JSON.stringify(logins);
              localStorage.passwords = JSON.stringify(passwords);
          }
          if(this.currentUser!="")
            this.chek=true;
          },
          Out(){
            this.chek=false;
            this.currentUser="";
            localStorage.setItem("currentUser","")
          },
          
          Start(){
            this.currentUser=localStorage.getItem("currentUser","");
            if(this.currentUser!="" &&  this.currentUser!=null){
              this.currentUser=localStorage.getItem("currentUser");
              this.chek=true;
            }
            if(localStorage.getItem("delNow")!="")
            {
              this.titles.splice(localStorage.getItem("delNow"), 1);
              this.descriptions.splice(localStorage.getItem("delNow"), 1);
              this.authorNames.splice(localStorage.getItem("delNow"), 1);
              this.datetimes.splice(localStorage.getItem("delNow"), 1);
              localStorage.titles = JSON.stringify(this.titles);
              localStorage.descriptions = JSON.stringify(this.descriptions);
              localStorage.datetimes = JSON.stringify(this.datetimes);
              localStorage.authorNames = JSON.stringify(this.authorNames);
              localStorage.setItem("delNow", "");
            }
            document.getElementById("page").innerHTML+="";

            for (var i = this.titles.length - 1; i >= 0; i--) {
              document.getElementById("page").innerHTML+=" <my-component :id="+i+" :can-del=currentUser :title=titles["+i+"] :description=descriptions["+i+"] :author-name=authorNames["+i+"] :datetime=datetimes["+i+"]></my-component> </div>"
            }
          },
        },
        created() {
            this.Start();
        },
        components: {
               'my-component': Child
        }
                
    })