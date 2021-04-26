/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    menuNavigation: [{
      name: 'Home',
      link: 'https://maxcoach.thememove.com/'
    }, {
      name: 'Pages',
      link: 'https://maxcoach.thememove.com/main/courses/#'
    }, {
      name: 'Courses',
      link: 'https://maxcoach.thememove.com/main/courses/'
    }, {
      name: 'Features',
      link: 'https://maxcoach.thememove.com/main/events/'
    }, {
      name: 'Blog',
      link: 'https://maxcoach.thememove.com/main/blog/'
    }, {
      name: 'Shop',
      link: 'https://maxcoach.thememove.com/main/product/use-seo-to-boost-your-business/'
    }],
    socials: [{
      name: 'Twitter',
      iconName: 'twitter',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://twitter.com/'
    }, {
      name: 'Facebook',
      iconName: 'facebook-f',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://www.facebook.com/'
    }, {
      name: 'Instagram',
      iconName: 'instagram',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://www.instagram.com/'
    }, {
      name: 'Linkedin',
      iconName: 'linkedin',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://it.linkedin.com/'
    }],
    latestCourses: [{
      title: "How to be Successful: Create A Growth Mindset For Success",
      price: '$30',
      priceCents: '00',
      previewFile: 'motivation-course-06-480x298.jpg',
      lessonsNumber: '3',
      studentsNumber: '50'
    }, {
      title: "How to Build Confidence in Your Abilities",
      price: '$30',
      priceCents: '00',
      previewFile: 'motivation-course-05-480x298.jpg',
      lessonsNumber: '1',
      studentsNumber: '50'
    }, {
      title: "Productivity Machine - Focus in a Distracted World",
      price: '$20',
      priceCents: '00',
      previewFile: 'motivation-course-04-480x298.jpg',
      lessonsNumber: '5',
      studentsNumber: '50'
    }, {
      title: "Effective Time Management Mastery - Complete Guide",
      price: '$20',
      priceCents: '00',
      previewFile: 'motivation-course-03-480x298.jpg',
      lessonsNumber: '18',
      studentsNumber: '50'
    }, {
      title: "Body Language Secrets for Entrepeneurs",
      price: '$25',
      priceCents: '99',
      previewFile: 'motivation-course-02-480x298.jpg',
      lessonsNumber: '19',
      studentsNumber: '50'
    }, {
      title: "Management Skills: The Science of Leadership",
      price: '$19',
      priceCents: '99',
      previewFile: 'motivation-course-01-480x298.jpg',
      lessonsNumber: '17',
      studentsNumber: '50'
    }],
    books: [{
      title: 'Alpha man',
      author: 'Maxcoach',
      price: '$29',
      priceCents: '00',
      previewFile: 'book-1.jpg'
    }, {
      title: 'Real man 4.0',
      author: 'Maxcoach',
      price: '$39',
      priceCents: '00',
      previewFile: 'book-2.jpg'
    }],
    testimonials: [{
      name: 'Mina Hollace',
      role: 'Freelancer',
      reviewText: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
      imageFile: 'testimonial-avata-1.jpg',
      number: '1'
    }, {
      name: 'Steven Malkovich',
      role: 'Web developer',
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageFile: 'testimonial-avata-2.jpg',
      number: '2'
    }, {
      name: 'Anthony Ballack',
      role: 'Photographer',
      reviewText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      imageFile: 'testimonial-avata-3.jpg',
      number: '3'
    }, {
      name: 'John Smith',
      role: 'Teacher',
      reviewText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageFile: 'testimonial-avata-4.jpg',
      number: '4'
    }],
    articles: [{
      title: 'How to Stay True to Your Personal Brand',
      textPreview: 'When it comes to your business or career, you want...',
      date: 'May 13, 2020',
      imageFile: 'motivation-blog-04-480x325.jpg'
    }, {
      title: '5 Vital Lessons in 5 Years of Freelancing',
      textPreview: "Being self-employed and working from home, it's easy to get...",
      date: 'May 13, 2020',
      imageFile: 'motivation-blog-03-480x325.jpg'
    }, {
      title: '11 Super Useful Tips for Small-Business Owners',
      textPreview: 'Being a small-business owner poses a ton of challenges. We...',
      date: 'May 13, 2020',
      imageFile: 'motivation-blog-02-480x325.jpg'
    }, {
      title: 'How to Give Yourself Grace to Start Again',
      textPreview: 'Forgive yourself for bad habits you may started or...',
      date: 'May 13, 2020',
      imageFile: 'motivation-blog-01-480x325.jpg'
    }],
    footerSocials: [{
      name: 'Facebook',
      iconName: 'facebook-f',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://www.facebook.com/'
    }, {
      name: 'Twitter',
      iconName: 'twitter',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://twitter.com/'
    }, {
      name: 'Instagram',
      iconName: 'instagram',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://www.instagram.com/'
    }, {
      name: 'Linkedin',
      iconName: 'linkedin',
      iconPrefix: 'fa-',
      iconFamily: 'fab',
      link: 'https://it.linkedin.com/'
    }],
    footerExplore: [{
      title: 'Start here',
      link: '#'
    }, {
      title: 'Blog',
      link: '#'
    }, {
      title: 'About us',
      link: '#'
    }, {
      title: 'Success story',
      link: '#'
    }, {
      title: 'Courses',
      link: '#'
    }, {
      title: 'Contact us',
      link: '#'
    }],
    footerInformation: [{
      title: 'Membership',
      link: '#'
    }, {
      title: 'Purchase guide',
      link: '#'
    }, {
      title: 'Privacy policy',
      link: '#'
    }, {
      title: 'Terms of service',
      link: '#'
    }]
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      _this.next();
    }, 3000);
  },
  methods: {
    prev: function prev() {
      if (this.index == 0) {
        this.index = this.testimonials.length - 1;
      } else {
        this.index = this.index - 1;
      }
    },
    next: function next() {
      if (this.index == this.testimonials.length - 1) {
        this.index = 0;
      } else {
        this.index = this.index + 1;
      }
    } // swap: function(array) {
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

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/main": 0,
/******/ 			"assets/css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;