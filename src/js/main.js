var app = new Vue(
  {
    el: '#root',
    data: {
      menuNavigation:
      [
        {
          name: 'Home',
          link: 'https://maxcoach.thememove.com/'
        },

        {
          name: 'Pages',
          link: 'https://maxcoach.thememove.com/main/courses/#'
        },

        {
          name: 'Courses',
          link: 'https://maxcoach.thememove.com/main/courses/'
        },

        {
          name: 'Features',
          link: 'https://maxcoach.thememove.com/main/events/'
        },

        {
          name: 'Blog',
          link: 'https://maxcoach.thememove.com/main/blog/'
        },

        {
          name: 'Shop',
          link: 'https://maxcoach.thememove.com/main/product/use-seo-to-boost-your-business/'
        }
      ],

      socials:
      [
        {
          name: 'Twitter',
          iconName: 'twitter',
          iconPrefix: 'fa-',
          iconFamily: 'fab',
          link: 'https://twitter.com/'
        },

        {
          name: 'Facebook',
          iconName: 'facebook-f',
          iconPrefix: 'fa-',
          iconFamily: 'fab',
          link: 'https://www.facebook.com/'
        },

        {
          name: 'Instagram',
          iconName: 'instagram',
          iconPrefix: 'fa-',
          iconFamily: 'fab',
          link: 'https://www.instagram.com/'
        },

        {
          name: 'Linkedin',
          iconName: 'linkedin',
          iconPrefix: 'fa-',
          iconFamily: 'fab',
          link: 'https://it.linkedin.com/'
        }
      ]

    },

    mounted(){

    },

    methods: {

    }


});
