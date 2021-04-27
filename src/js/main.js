Vue.config.devtools = true;

var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      menuNavigation: menuNavigation,
      socials: socials,
      latestCourses: latestCourses,
      books: books,
      testimonials: testimonials,
      articles: articles,
      footerSocials: footerSocials,
      footerExplore: footerExplore,
      footerInformation: footerInformation,
    },

    mounted(){
      setInterval(() => {
        this.next()
      }, 4000);
    },

    methods: {
      prev: function() {
        if (this.index == 0) {
          this.index = this.testimonials.length - 1;
        } else {
          this.index = this.index - 1;
        }
      },

      next: function() {
        if (this.index == this.testimonials.length - 1) {
          this.index = 0;
        } else {
          this.index = this.index + 1;
        }
      },

      // swap: function(array) {
      //   const newSocials =
      //     var temp = this.socials[0];
      //     this.socials[0] = this.socials[1];
      //     this.socials[1] = temp;
      //
      //   this.socials = newSocials;
      //
      // }

    }


});
