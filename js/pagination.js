
      var main_page;
      var div_num;
new Vue({
  el: '#conteiner',
    
  data: {
    count : localStorage.getItem("count")?localStorage.getItem("count"):0,
    cnt : 5,
    page : ""
  },
  methods: {
    pagination(event) {
        var e = event || window.event;
        var target = e.target;
        var id = target.id;
      
        if (target.tagName.toLowerCase() != "span") return;
      
        var num_ = id.substr(4);
        var data_page = +target.dataset.page;
        document.getElementById("page1").classList.remove("paginator_active");
        main_page.classList.remove("paginator_active");
        main_page = document.getElementById(id);
        main_page.classList.add("paginator_active");

        var j = 0;
        for (var i = 0; i < div_num.length; i++) {
          var data_num = div_num[i].dataset.num;
          if (data_num <= data_page || data_num >= data_page)
            div_num[i].style.display = "none";
        }
      for (var i = data_page; i < div_num.length; i++) {
        if (j >= this.cnt) break;
        div_num[i].style.display = "block";
        j++;
      }
    },
    Pages(){
      for (var i = 0; i < Math.ceil(this.count / this.cnt); i++) {
        this.page += "<span data-page=" + i * this.cnt + "  id=\"page" + (i + 1) + "\" v-on:click='pagination'>" + (i + 1) + "</span>";
      }

      paginator[0].innerHTML = this.page;
      div_num = document.querySelectorAll(".num");
      for (var i = 0; i < div_num.length; i++) {
        if (i <this.cnt) {
          div_num[i].style.display = "block";
        }
      }

      main_page = document.getElementById("page1");
      if(main_page!=null)
      main_page.classList.add("paginator_active");
    }
  },
  created() {
    this.Pages();
  }
})


   