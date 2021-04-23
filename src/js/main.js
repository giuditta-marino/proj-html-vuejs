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
      ],

      latestCourses:
      [
        {
          title: "How to be Successful: Create A Growth Mindset For Success",
          price: '$30',
          priceCents:'00',
          previewFile: 'motivation-course-06-480x298.jpg',
          lessonsNumber: '3',
          studentsNumber: '50'
        },

        {
          title: "How to Build Confidence in Your Abilities",
          price: '$30',
          priceCents:'00',
          previewFile: 'motivation-course-05-480x298.jpg',
          lessonsNumber: '1',
          studentsNumber: '50'
        },

        {
          title: "Productivity Machine - Focus in a Distracted World",
          price: '$20',
          priceCents:'00',
          previewFile: 'motivation-course-04-480x298.jpg',
          lessonsNumber: '5',
          studentsNumber: '50'
        },

        {
          title: "Effective Time Management Mastery - Complete Guide",
          price: '$20',
          priceCents:'00',
          previewFile: 'motivation-course-03-480x298.jpg',
          lessonsNumber: '18',
          studentsNumber: '50'
        },

        {
          title: "Body Language Secrets for Entrepeneurs",
          price: '$25',
          priceCents:'99',
          previewFile: 'motivation-course-02-480x298.jpg',
          lessonsNumber: '19',
          studentsNumber: '50'
        },

        {
          title: "Management Skills: The Science of Leadership",
          price: '$19',
          priceCents:'99',
          previewFile: 'motivation-course-01-480x298.jpg',
          lessonsNumber: '17',
          studentsNumber: '50'
        }
      ],

      books:
      [
        {
          title: 'Alpha man',
          author: 'Maxcoach',
          price: '$29',
          priceCents: '00',
          previewFile: 'book-1.jpg'
        },

        {
          title: 'Real man 4.0',
          author: 'Maxcoach',
          price: '$39',
          priceCents: '00',
          previewFile: 'book-2.jpg'
        },

      ],

      articles:
      [
        {
          title: 'How to Stay True to Your Personal Brand',
          textPreview: 'When it comes to your business or career, you want...',
          date: 'May 13, 2020',
          imageFile: 'motivation-blog-04-480x325.jpg'
        },

        {
          title: '5 Vital Lessons in 5 Years of Freelancing',
          textPreview: "Being self-employed and working from home, it's easy to get...",
          date: 'May 13, 2020',
          imageFile: 'motivation-blog-03-480x325.jpg'
        },

        {
          title: '11 Super Useful Tips for Small-Business Owners',
          textPreview: 'Being a small-business owner poses a ton of challenges. We...',
          date: 'May 13, 2020',
          imageFile: 'motivation-blog-02-480x325.jpg'
        },

        {
          title: 'How to Give Yourself Grace to Start Again',
          textPreview: 'Forgive yourself for bad habits you may started or...',
          date: 'May 13, 2020',
          imageFile: 'motivation-blog-01-480x325.jpg'
        }

      ]

    },

    mounted(){

    },

    methods: {

    }


});
