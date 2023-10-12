/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEARVIEWER; });
/* globals jQuery */
var DEARVIEWER = {
  version: '2.0.65',
  autoDetectLocation: true,
  slug: undefined,
  //this has to be defined by respective Viewer/Plugin, used in analytics
  locationVar: "dearViewerLocation",
  //this has to be defined by respective Viewer/Plugin
  locationFile: undefined,
  //this has to be defined by respective Viewer/Plugin , used to detect locationVar
  MOUSE_CLICK_ACTIONS: {
    NONE: "none",
    NAV: "nav"
  },
  ARROW_KEYS_ACTIONS: {
    NONE: "none",
    NAV: "nav"
  },
  MOUSE_DBL_CLICK_ACTIONS: {
    NONE: "none",
    ZOOM: "zoom"
  },
  MOUSE_SCROLL_ACTIONS: {
    NONE: "none",
    ZOOM: "zoom",
    NAV: "nav"
  },
  PAGE_SCALE: {
    PAGE_FIT: "fit",
    PAGE_WIDTH: 'width',
    AUTO: "auto",
    //page_width to a maximum of 125% zoom
    ACTUAL: 'actual',
    //100%
    MANUAL: 'manual'
  },
  READ_DIRECTION: {
    LTR: 'ltr',
    RTL: 'rtl'
  },
  TURN_DIRECTION: {
    LEFT: 'left',
    RIGHT: 'right',
    NONE: 'none'
  },
  INFO_TYPE: {
    INFO: "info",
    ERROR: "error"
  },
  FLIPBOOK_PAGE_MODE: {
    SINGLE: "single",
    DOUBLE: "double",
    AUTO: "auto"
  },
  FLIPBOOK_SINGLE_PAGE_MODE: {
    ZOOM: "zoom",
    BOOKLET: "booklet",
    AUTO: "auto"
  },
  FLIPBOOK_PAGE_SIZE: {
    AUTO: "auto",
    SINGLE: "single",
    DOUBLE_INTERNAL: "dbl_int",
    // |1|, |2-3|, |4-5|, |6-7|, |8| -- booklet modes , can be auto detected
    DOUBLE: "dbl",
    // |1-2|, |3-4|, |5-6|, |7-8| -- used from unorganized images , cannot be autodetected
    DOUBLE_COVER_BACK: "dbl_cover_back" // |8-1|, |2-3|, |4-5|, |6-7| -- used in printing , cannot be autodetected

  },
  LINK_TARGET: {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
  },
  //as per PDF.js standard
  CONTROLS_POSITION: {
    HIDDEN: 'hidden',
    TOP: 'top',
    BOTTOM: 'bottom'
  },
  //internals
  TURN_CORNER: {
    TL: "tl",
    TR: "tr",
    BL: "bl",
    BR: "br",
    L: "l",
    R: "r",
    NONE: "none"
  },
  REQUEST_STATUS: {
    OFF: "none",
    ON: "pending",
    COUNT: "counting"
  },
  TEXTURE_TARGET: {
    THUMB: 0,
    VIEWER: 1,
    ZOOM: 2
  },
  FLIPBOOK_CENTER_SHIFT: {
    RIGHT: 1,
    LEFT: -1,
    NONE: 0
  }
}; //_defaults that can be referenced but should not be changed

DEARVIEWER._defaults = {
  // When viewer is set to flipbook
  // use 3D flipbook(true) or normal CSS flipbook(false)
  is3D: true,
  // When viewer is set to flipbook, and 3D is on.
  // if you want to turn off shadow in 3d set it to false
  has3DShadow: true,
  color3DCover: "#777",
  color3DSheets: "#fff",
  //we use white if needed in future
  has3DCover: true,
  flexibility: 0.9,
  // if enable sound at start (true|false)
  enableSound: true,
  search: false,
  // height of the container
  // value(eg: 320) or percentage (eg: '50%')
  // calculation limit: minimum 320, max window height
  height: 'auto',
  // set to true to show outline on open (true|false)
  autoOpenOutline: false,
  // set to true to show thumbnail on open (true|false)
  autoOpenThumbnail: false,
  // enableDownload of PDF files (true|false)
  showDownloadControl: true,
  // duration of page turn in milliseconds
  duration: 800,
  pageRotation: 0,
  flipbookRotation: 0,
  //todo pending https://github.com/deepak-ghimire/dearviewer/issues/329
  flipbook3DTiltAngle: 0,
  readDirection: DEARVIEWER.READ_DIRECTION.LTR,
  pageMode: DEARVIEWER.FLIPBOOK_PAGE_MODE.AUTO,
  singlePageMode: DEARVIEWER.FLIPBOOK_SINGLE_PAGE_MODE.AUTO,
  //resizes the underlying pages to suit the top cover page after flip
  flipbookFitPages: false,
  //can be hard set to false
  //color value in hexadecimal
  backgroundColor: "transparent",
  flipbookHardPages: "none",
  //possible values are "all", "none", "cover"
  openPage: 1,
  //the page number where the book should open
  annotationClass: "",
  // texture settings
  maxTextureSize: 3200,
  //max page size to be rendered. for pdf files only
  minTextureSize: 256,
  //min page size to be rendered. for pdf files only
  rangeChunkSize: 524288,
  //pdf related options
  disableAutoFetch: true,
  disableStream: true,
  disableFontFace: false,
  // icons for the buttons
  icons: {
    'altnext': 'df-icon-arrow-right1',
    'altprev': 'df-icon-arrow-left1',
    'next': 'df-icon-arrow-right1',
    'prev': 'df-icon-arrow-left1',
    'end': 'df-icon-last-page',
    'start': 'df-icon-first-page',
    'share': 'df-icon-share',
    'outline-open': 'df-icon-arrow-right',
    'outline-close': 'df-icon-arrow-down',
    'help': 'df-icon-help',
    'more': 'df-icon-more',
    'download': 'df-icon-download',
    'zoomin': 'df-icon-add-circle',
    'zoomout': 'df-icon-minus-circle',
    'resetzoom': 'df-icon-minus-circle',
    'fullscreen': 'df-icon-fullscreen',
    'fullscreen-off': 'df-icon-fit-screen',
    'fitscreen': 'df-icon-fit-screen',
    'thumbnail': 'df-icon-grid-view',
    'outline': 'df-icon-list',
    'close': 'df-icon-close',
    'doublepage': 'df-icon-double-page',
    'singlepage': 'df-icon-file',
    'print': 'df-icon-print',
    'play': 'df-icon-play',
    'pause': 'df-icon-pause',
    'search': 'df-icon-search',
    'sound': 'df-icon-volume',
    'sound-off': 'df-icon-volume',
    'facebook': 'df-icon-facebook',
    'google': 'df-icon-google',
    'twitter': 'df-icon-twitter',
    'mail': 'df-icon-mail'
  },
  // TRANSLATION text to be displayed
  text: {
    toggleSound: "Turn on/off Sound",
    toggleThumbnails: "Toggle Thumbnails",
    toggleOutline: "Toggle Outline/Bookmark",
    previousPage: "Previous Page",
    nextPage: "Next Page",
    toggleFullscreen: "Toggle Fullscreen",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    resetZoom: "Reset Zoom",
    pageFit: 'Fit Page',
    widthFit: 'Fit Width',
    toggleHelp: "Toggle Help",
    search: "Search in PDF",
    singlePageMode: "Single Page Mode",
    doublePageMode: "Double Page Mode",
    downloadPDFFile: "Download PDF File",
    gotoFirstPage: "Goto First Page",
    gotoLastPage: "Goto Last Page",
    print: "Print",
    play: "Start AutoPlay",
    pause: "Pause AutoPlay",
    share: "Share",
    close: "Close",
    mailSubject: "I wanted you to see this FlipBook",
    mailBody: "Check out this site {{url}}",
    loading: "Loading",
    analyticsEventCategory: "DearPDF",
    analyticsViewerReady: "Document Ready",
    analyticsViewerOpen: "Document Opened",
    analyticsViewerClose: "Document Closed",
    analyticsFirstPageChange: "First Page Changed"
  },
  share: {
    'facebook': 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
    'twitter': 'https://twitter.com/share?url={{url}}',
    'mail': undefined // calculated based on translate text.mailSubject and text.mailBody or can be directly overridden

  },
  //valid control-names:
  //altPrev,pageNumber,altNext,outline,thumbnail,zoomIn,zoomOut,fullScreen,share
  //more,download,pageMode,startPage,endPage,sound
  allControls: "altPrev,pageNumber,altNext,play,outline,thumbnail,zoomIn,zoomOut,zoom,fullScreen,share,download,search,pageMode,startPage,endPage,sound,search,more",
  moreControls: "download,pageMode,pageFit,startPage,endPage,sound",
  hideControls: "",
  controlsPosition: DEARVIEWER.CONTROLS_POSITION.BOTTOM,
  paddingTop: 20,
  paddingLeft: 15,
  paddingRight: 15,
  paddingBottom: 20,
  enableAnalytics: false,
  //todo Analytics https://github.com/deepak-ghimire/dearviewer/issues/328
  zoomRatio: 2,
  pageScale: DEARVIEWER.PAGE_SCALE.PAGE_FIT,
  controlsFloating: true,
  sideMenuOverlay: true,
  enableAnnotation: true,
  enableAutoLinks: false,
  //ACTIONS
  arrowKeysAction: DEARVIEWER.ARROW_KEYS_ACTIONS.NAV,
  clickAction: DEARVIEWER.MOUSE_CLICK_ACTIONS.NAV,
  dblClickAction: DEARVIEWER.MOUSE_DBL_CLICK_ACTIONS.NONE,
  mouseScrollAction: DEARVIEWER.MOUSE_SCROLL_ACTIONS.NONE,
  linkTarget: DEARVIEWER.LINK_TARGET.BLANK,
  //Resources settings
  soundFile: "sound/turn2.mp3",
  imagesLocation: "images",
  imageResourcesPath: "images/pdfjs/",
  imagePlaceholder: undefined,
  cMapUrl: "js/libs/cmaps/",
  logo: "",
  logoUrl: "",
  sharePrefix: 'pdf-',
  pageSize: DEARVIEWER.FLIPBOOK_PAGE_SIZE.AUTO,
  // link to the images file that you want as background.
  // supported files are jpgs,png. smaller files are preffered for performance
  backgroundImage: "",
  //"images/textures/el.jpg",
  pixelRatio: window.devicePixelRatio || 1,

  /*3D settings*/
  spotLightIntensity: 0.22,
  ambientLightColor: "#fff",
  ambientLightIntensity: 0.8,
  shadowOpacity: 0.1,
  slug: undefined,
  headerElementSelector: undefined,
  //callbacks
  onReady: function onReady(app) {// after document and viewer is loaded
  },
  onPageChanged: function onPageChanged(app) {// when page change is detected
  },
  beforePageChanged: function beforePageChanged(app) {// when page change validated but before pages are changed
  },
  onCreate: function onCreate(app) {// after app is created and initialized, viewer and document loading is not included
  },
  onCreateUI: function onCreateUI(app) {// after UI is created
  },
  onFlip: function onFlip(app) {// after flip event is fired
  },
  beforeFlip: function beforeFlip(app) {// before flip event is fired
  },
  autoPDFLinktoViewer: false,
  autoLightBoxFullscreen: false,
  thumbLayout: 'book-title-hover',
  cleanupAfterRender: true,
  //creates issue in pdf.js version above 2.5.207
  canvasWillReadFrequently: true,
  providerType: 'pdf',
  loadMoreCount: -1,
  autoPlay: false,
  autoPlayDuration: 1000,
  autoPlayStart: false
}; //options that can be changed by users
//Needed for: When user changed text or icons and just changed one, it impacted all others.

DEARVIEWER.defaults = {};
jQuery.extend(true, DEARVIEWER.defaults, DEARVIEWER._defaults);
DEARVIEWER.viewers = {};
DEARVIEWER.providers = {};
DEARVIEWER.openFileOptions = {};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2D; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* globals jQuery, pdfjsLib,THREE  */

var DV = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"];
var utils = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].utils;

var Page = /*#__PURE__*/function () {
  function Page() {
    _classCallCheck(this, Page);

    this.textureLoadFallback = "blank";
    this.textureStamp = "-1";
    this.textureLoaded = false;
    this.texture = "blank";
    this.textureSrc = "blank";
    this.pageNumber = undefined;
    this.contentLayer = jQuery('<div>', {
      "class": "df-page-content"
    });
  }

  _createClass(Page, [{
    key: "reset",
    value: function reset() {
      this.resetTexture();
      this.resetContent();
    }
  }, {
    key: "resetTexture",
    value: function resetTexture() {
      this.textureLoaded = false;
      this.textureStamp = "-1";
      this.loadTexture({
        texture: this.textureLoadFallback
      });
      this.contentLayer.removeClass("df-content-loaded");
    }
  }, {
    key: "clearTexture",
    value: function clearTexture() {
      this.loadTexture({
        texture: this.textureLoadFallback
      });
    }
  }, {
    key: "resetContent",
    value: function resetContent() {}
  }, {
    key: "loadTexture",
    value: function loadTexture(param) {}
  }, {
    key: "getTexture",
    value: function getTexture() {
      var clone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var texture = this.textureSrc;

      if (clone === true && texture && texture.cloneNode) {
        texture = texture.cloneNode();
        if (texture.getContext) texture.getContext('2d').drawImage(this.textureSrc, 0, 0);
      }

      return texture;
    }
  }, {
    key: "setLoading",
    value: function setLoading() {}
  }, {
    key: "updateTextureLoadStatus",
    value: function updateTextureLoadStatus(textureLoaded) {
      this.textureLoaded = textureLoaded === true;
      utils.log((this.textureLoaded === true ? "Loaded " : "Loading ") + this.textureStamp + " for " + this.pageNumber);
      this.contentLayer.toggleClass("df-content-loaded", textureLoaded === true);
      this.setLoading();
    }
    /**
     *
     * @param pageNumber
     * @param textureSize
     * @returns {boolean} true if new stamp is set
     */

  }, {
    key: "changeTexture",
    value: function changeTexture(pageNumber, textureSize) {
      var page = this;
      var reqStamp = pageNumber + "|" + textureSize;

      if (page.textureStamp !== reqStamp) {
        utils.log("Page " + pageNumber + " : texture changed from - " + page.textureStamp + " to " + reqStamp);
        page.textureLoaded = false; // page.element.attr("stamp", reqStamp);

        page.textureStamp = reqStamp;
        page.updateTextureLoadStatus(false);
        return true;
      }

      return false;
    }
  }]);

  return Page;
}();

var Page2D = /*#__PURE__*/function (_Page) {
  _inherits(Page2D, _Page);

  var _super = _createSuper(Page2D);

  function Page2D(options) {
    var _this;

    _classCallCheck(this, Page2D);

    _this = _super.call(this);
    _this.canvasMode = null;
    if (options && options.parentElement) _this.parentElement = options.parentElement;

    _this.init();

    return _this;
  }

  _createClass(Page2D, [{
    key: "init",
    value: function init() {
      var element = this.element = jQuery('<div>', {
        "class": 'df-page'
      });
      element[0].appendChild(this.contentLayer[0]);
      this.texture = new Image();
      if (this.parentElement) this.parentElement[0].append(element[0]);
    }
  }, {
    key: "resetContent",
    value: function resetContent() {
      if (this.annotationElement !== undefined) this.annotationElement.html("");
      if (this.textElement !== undefined) this.textElement.html("");
    }
  }, {
    key: "setLoading",
    value: function setLoading() {
      this.element.toggleClass("df-loading", this.textureLoaded !== true);
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(param) {
      var page = this,
          texture = param.texture,
          callback = param.callback;

      function completed() {
        page.textureSrc = texture;
        page.element.css({
          backgroundImage: utils.bgImage(texture)
        });
        page.updateTextureLoadStatus(true);
        if (typeof callback == 'function') callback(param);
      }

      if (page.canvasMode === null && texture && texture.nodeName === "CANVAS") page.canvasMode = true;

      if (page.canvasMode === true) {
        page.element.find(">canvas").remove();

        if (texture !== page.textureLoadFallback) {
          page.textureSrc = texture;
          page.element.append(jQuery(texture)); // page.element.width(texture.width).height(texture.height);
        }

        page.updateTextureLoadStatus(true);
        if (typeof callback == 'function') callback(param);
      } else {
        if (texture === page.textureLoadFallback) {
          completed();
        } else {
          page.texture.onload = completed;
          page.texture.src = texture;
        }
      }
    }
  }, {
    key: "updateCSS",
    value: function updateCSS(css) {
      var page = this;
      page.element.css(css);
    }
  }, {
    key: "resetCSS",
    value: function resetCSS() {
      var page = this;
      page.element.css({
        transform: '',
        boxShadow: '',
        display: "block"
      });
    }
  }]);

  return Page2D;
}(Page);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseViewer; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DV = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"];
var utils = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].utils;

var BaseViewer = /*#__PURE__*/function () {
  function BaseViewer(options, appContext) {
    _classCallCheck(this, BaseViewer);

    this.pages = [];
    this.app = appContext;
    this.parentElement = this.app.viewerContainer;
    var viewerClass = "df-viewer " + (options.viewerClass || "");
    this.element = jQuery('<div>', {
      "class": viewerClass
    });
    this.parentElement.append(this.element);
    this.wrapper = jQuery('<div>', {
      "class": 'df-viewer-wrapper'
    });
    this.element.append(this.wrapper);
    this.oldBasePageNumber = 0;
    this.pages = [];
    this.minZoom = 1;
    this.maxZoom = 4;
    this.swipeThreshold = 20;
    this.stageDOM = null;
    this.events = {};
    this.arrowKeysAction = options.arrowKeysAction;
    this.clickAction = options.clickAction;
    this.scrollAction = options.scrollAction;
    this.dblClickAction = options.dblClickAction;
    this.pageBuffer = [];
    this.pageBufferSize = 10;
  }

  _createClass(BaseViewer, [{
    key: "init",
    value: function init() {}
  }, {
    key: "updateBuffer",
    value: function updateBuffer(page) {}
  }, {
    key: "pageResetCallback",
    value: function pageResetCallback(page) {}
  }, {
    key: "initCustomControls",
    value: function initCustomControls() {}
  }, {
    key: "_getInnerWidth",
    value: function _getInnerWidth() {
      return this.app.dimensions.containerWidth - this.app.dimensions.padding.width - this.app.dimensions.offset.width;
    }
  }, {
    key: "_getInnerHeight",
    value: function _getInnerHeight() {
      //individual viewers don't calculate on maxHeight
      return this.app.dimensions.maxHeight - this.app.dimensions.padding.height;
    }
  }, {
    key: "_getOuterHeight",
    value: function _getOuterHeight(height) {
      return height;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.stageDOM) {
        this.stageDOM.removeEventListener("mousemove", this.events.mousemove, false);
        this.stageDOM.removeEventListener("mousedown", this.events.mousedown, false);
        this.stageDOM.removeEventListener("mouseup", this.events.mouseup, false);
        this.stageDOM.removeEventListener("touchmove", this.events.mousemove, false);
        this.stageDOM.removeEventListener("touchstart", this.events.mousedown, false);
        this.stageDOM.removeEventListener("touchend", this.events.mouseup, false);
        this.stageDOM.removeEventListener("dblclick", this.events.dblclick, false);
        this.stageDOM.removeEventListener("scroll", this.events.scroll, false);
        this.stageDOM.removeEventListener("mousewheel", this.events.mousewheel, false);
        this.stageDOM.removeEventListener("DOMMouseScroll", this.events.mousewheel, false);
      }

      this.events = null;
      this.stageDOM = null;
      this.element.remove();
    }
    /**
     * Verify page size differences in the document
     */

  }, {
    key: "checkDocumentPageSizes",
    value: function checkDocumentPageSizes() {}
    /**
     * Determines which page to jump in viewer when a PDF link is clicked. Pagenumber passed from PDF provider.
     * Clicked link provides absolute number but a number relatiev to viewer is required.
     * @param pageNumber
     * @returns {number}
     */

  }, {
    key: "getViewerPageNumber",
    value: function getViewerPageNumber(pageNumber) {
      return pageNumber;
    }
    /**
     * Determines which page to render from PDF document. Pagenumber passed from viewer.
     * PDF document page and viewer page numbers are different in some cases.
     * @param pageNumber
     * @returns {number}
     */

  }, {
    key: "getDocumentPageNumber",
    value: function getDocumentPageNumber(pageNumber) {
      return pageNumber;
    }
  }, {
    key: "getRenderContext",
    value: function getRenderContext(pdfPage, param) {
      var app = this.app,
          provider = app.provider,
          pageNumber = param.pageNumber,
          textureTarget = utils.ifdef(param.textureTarget, _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TEXTURE_TARGET.VIEWER);
      var pageFit = app.dimensions.pageFit;
      var pageViewport = provider.viewPorts[pageNumber];
      var dimen = app.viewer.getTextureSize(param);
      var ratio = dimen.height / dimen.width;
      dimen.height = utils.limitAt(dimen.height, 1, app.dimensions.maxTextureHeight);
      dimen.width = dimen.height / ratio;
      var textureCacheIndex = null;

      if (textureTarget === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TEXTURE_TARGET.THUMB) {
        textureCacheIndex = app.thumbSize;
      } else {
        textureCacheIndex = Math.floor(dimen.height);
      }

      if (provider.getCache(pageNumber, textureCacheIndex) !== undefined) {
        return;
      }

      var scale = dimen.height / pageViewport.height;
      var canvas = document.createElement('canvas'),
          viewport = this.filterViewPort(pdfPage.getViewport({
        scale: scale,
        rotation: pdfPage._pageInfo.rotate + app.options.pageRotation
      }), pageNumber);

      if (textureTarget === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TEXTURE_TARGET.THUMB) {
        // in-case the thumb size is wider
        if (viewport.width / viewport.height > 180 / app.thumbSize) {
          scale = scale * 180 / viewport.width;
        } else {
          scale = scale * app.thumbSize / viewport.height;
        }

        viewport = this.filterViewPort(pdfPage.getViewport({
          scale: scale,
          rotation: pdfPage._pageInfo.rotate + app.options.pageRotation
        }), pageNumber);
      }

      canvas.height = Math.floor(viewport.height);
      canvas.width = Math.floor(viewport.width); // if (app.pageScaling === DEARVIEWER.PAGE_SCALE.PAGE_FIT) {

      var error = Math.abs(canvas.width - dimen.width) / dimen.width * 100;

      if (error > 0.001 && error < 2) {
        //1px error in upto 5000px is detected
        canvas.width = Math.floor(dimen.width);
        canvas.height = Math.floor(dimen.height);
      } // }


      app.viewer.filterViewPortCanvas(viewport, canvas, pageNumber);
      return {
        canvas: canvas,
        canvasContext: canvas.getContext('2d', {
          willReadFrequently: _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.canvasWillReadFrequently === true
        }),
        viewport: viewport
      };
    }
  }, {
    key: "filterViewPort",
    value: function filterViewPort(viewport, pageNumber) {
      return viewport;
    }
  }, {
    key: "getViewPort",
    value: function getViewPort(pageNumber) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var viewPort = this.app.provider.viewPorts[pageNumber];
      if (fallback) return viewPort !== null && viewPort !== void 0 ? viewPort : this.app.provider.coverPage.viewPort;
      return viewPort;
    }
  }, {
    key: "pagesReady",
    value: function pagesReady() {}
  }, {
    key: "onReady",
    value: function onReady() {}
  }, {
    key: "filterViewPortCanvas",
    value: function filterViewPortCanvas(viewport) {}
  }, {
    key: "finalizeAnnotations",
    value: function finalizeAnnotations() {}
  }, {
    key: "finalizeTextContent",
    value: function finalizeTextContent() {}
  }, {
    key: "initEvents",
    value: function initEvents() {
      var viewer = this;
      var stageDOM = viewer.stageDOM = utils.ifdef(viewer.stageDOM, viewer.parentElement[0]);

      if (stageDOM) {
        stageDOM.addEventListener("mousemove", viewer.events.mousemove = viewer.mouseMove.bind(viewer), false);
        stageDOM.addEventListener("mousedown", viewer.events.mousedown = viewer.mouseDown.bind(viewer), false);
        stageDOM.addEventListener("mouseup", viewer.events.mouseup = viewer.mouseUp.bind(viewer), false);
        stageDOM.addEventListener("touchmove", viewer.events.mousemove = viewer.mouseMove.bind(viewer), false);
        stageDOM.addEventListener("touchstart", viewer.events.mousedown = viewer.mouseDown.bind(viewer), false);
        stageDOM.addEventListener("touchend", viewer.events.mouseup = viewer.mouseUp.bind(viewer), false);
        stageDOM.addEventListener("dblclick", viewer.events.dblclick = viewer.dblclick.bind(viewer), false);
        stageDOM.addEventListener("scroll", viewer.events.scroll = viewer.onScroll.bind(viewer), false);
        stageDOM.addEventListener("mousewheel", viewer.events.mousewheel = viewer.mouseWheel.bind(viewer), false);
        stageDOM.addEventListener('DOMMouseScroll', viewer.events.mousewheel = viewer.mouseWheel.bind(viewer), false);
      }

      this.startTouches = null;
      this.lastScale = null;
      this.startPoint = null;
    }
  }, {
    key: "refresh",
    value: function refresh() {}
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "eventToPoint",
    value: function eventToPoint(event) {
      var point = {
        x: event.clientX,
        y: event.clientY
      };
      point.x = point.x - this.app.viewerContainer[0].getBoundingClientRect().left;
      point.y = point.y - this.app.viewerContainer[0].getBoundingClientRect().top;
      return {
        raw: point
      };
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      event = utils.fixMouseEvent(event);
      this.pinchMove(event);

      if (this.pinchZoomDirty === true) {
        event.preventDefault();
      }

      if (this.startPoint && this.pinchZoomDirty != true) {
        this.pan(this.eventToPoint(event));
        event.preventDefault();
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      event = utils.fixMouseEvent(event);
      this.pinchDown(event);
      this.startPoint = this.eventToPoint(event);
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      event = utils.fixMouseEvent(event);
      var viewer = this;

      if (viewer.pinchZoomDirty === true) {
        event.preventDefault();
      }

      var point = viewer.eventToPoint(event);
      var element = event.target || event.originalTarget; //check to see if the clicked element is a link, if so skip turn

      var isClick = viewer.startPoint && point.x === viewer.startPoint.x && point.y === viewer.startPoint.y && element.nodeName !== "A";

      if (event.ctrlKey === true && isClick) {
        this.zoomOnPoint(point);
      }

      this.pinchUp(event);
      this.startPoint = null;
    }
  }, {
    key: "pinchDown",
    value: function pinchDown(event) {//extened in pro
    }
  }, {
    key: "pinchUp",
    value: function pinchUp(event) {//extened in pro
    }
  }, {
    key: "pinchMove",
    value: function pinchMove(event) {//extened in pro
    }
  }, {
    key: "updateTemporaryScale",
    value: function updateTemporaryScale() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // return;
      if (reset === true) {
        this.parentElement[0].style.transform = "none";
      } else if (this.app.viewer.zoomCenter) {
        var scale = this.app.viewer.pinchZoomUpdateScale;
        this.parentElement[0].style.transformOrigin = this.app.viewer.zoomCenter.x + "px " + this.app.viewer.zoomCenter.y + "px";
        this.parentElement[0].style.transform = "scale3d(" + scale + "," + scale + ",1)";
      }
    }
  }, {
    key: "pan",
    value: function pan(point) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.panRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
      utils.pan(this, point, reset);
    }
  }, {
    key: "updatePan",
    value: function updatePan() {
      this.element.css({
        transform: "translate3d(" + this.left + "px," + this.top + "px,0)"
      });
    }
  }, {
    key: "dblclick",
    value: function dblclick(event) {}
  }, {
    key: "onScroll",
    value: function onScroll(event) {}
  }, {
    key: "mouseWheel",
    value: function mouseWheel(event) {
      var viewer = this,
          app = this.app,
          delta = utils.getMouseDelta(event); //detect trackpad or CTRL + mouse scroll zoom, both use CTRL + scroll method

      var isValidZoom = event.ctrlKey === true;

      if (app.options.mouseScrollAction === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].MOUSE_SCROLL_ACTIONS.NAV && isValidZoom === false) {
        if (delta > 0) {
          app.next();
        } else if (delta < 0) {
          app.prev();
        }
      } else if (app.options.mouseScrollAction === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].MOUSE_SCROLL_ACTIONS.ZOOM || isValidZoom === true) {
        if (delta > 0 || delta < 0) {
          event.preventDefault();
          app.viewer.zoomCenter = this.eventToPoint(event).raw;
          app.zoom(delta);
          app.ui.update();
        }
      }
    }
  }, {
    key: "zoomOnPoint",
    value: function zoomOnPoint(point) {
      this.app.viewer.zoomCenter = point.raw;
      this.app.zoom(1);
    }
  }, {
    key: "getVisiblePages",
    value: function getVisiblePages() {
      return {
        main: [],
        buffer: []
      };
    }
  }, {
    key: "getBasePage",
    value: function getBasePage() {
      return this.app.currentPageNumber;
    }
  }, {
    key: "isFirstPage",
    value: function isFirstPage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;
      return pageNumber === 1;
    }
  }, {
    key: "isLastPage",
    value: function isLastPage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;
      return pageNumber === this.app.pageCount;
    }
  }, {
    key: "isEdgePage",
    value: function isEdgePage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;
      return pageNumber === 1 || pageNumber === this.app.pageCount;
    }
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {
      var REQUEST_STATUS = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS;

      if (this.panRequestStatus === REQUEST_STATUS.ON) {
        this.updatePan();
        this.panRequestStatus = REQUEST_STATUS.OFF;
      }

      if (this.app.viewer.pinchZoomRequestStatus === REQUEST_STATUS.ON) {
        this.app.viewer.updateTemporaryScale();
        this.app.viewer.pinchZoomRequestStatus = REQUEST_STATUS.OFF;
      }
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return false;
    }
  }, {
    key: "updatePendingStatusClass",
    value: function updatePendingStatusClass(status) {
      if (status === void 0) status = this.isAnimating();
      this.app.container.toggleClass("df-pending", status);
    }
  }, {
    key: "initPages",
    value: function initPages() {}
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "zoom",
    value: function zoom() {}
  }, {
    key: "gotoPageCallBack",
    value: function gotoPageCallBack() {
      this.requestRefresh();
    }
  }, {
    key: "requestRefresh",
    value: function requestRefresh() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.app.refreshRequestStatus = status === true ? DV.REQUEST_STATUS.ON : DV.REQUEST_STATUS.OFF;
    }
  }, {
    key: "getPageByNumber",
    value: function getPageByNumber(pageNumber) {
      var pages = this.pages,
          page = undefined;

      for (var count = 0; count < pages.length; count++) {
        if (pageNumber === pages[count].pageNumber) {
          page = pages[count];
          break;
        }
      }

      return page;
    }
  }, {
    key: "changeAnnotation",
    value: function changeAnnotation() {
      return false;
    }
  }, {
    key: "getAnnotationElement",
    value: function getAnnotationElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var page = this.getPageByNumber(pageNumber);
      if (page === undefined) return undefined;

      if (page.annotationElement === undefined) {
        page.annotationElement = jQuery("<div class='df-link-content'>");
        page.contentLayer.append(page.annotationElement);
      }

      if (clean === true) {
        page.annotationElement.html("");
      }

      return page.annotationElement[0];
    }
  }, {
    key: "getTextElement",
    value: function getTextElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var page = this.getPageByNumber(pageNumber);
      if (page === undefined) return undefined;

      if (page.textElement === undefined) {
        page.textElement = jQuery("<div class='df-text-content'>");
        page.contentLayer.append(page.textElement);
      }

      if (clean === true) {
        page.textElement.html("");
      }

      return page.textElement[0];
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {}
  }, {
    key: "handleZoom",
    value: function handleZoom() {}
  }, {
    key: "getTextureSize",
    value: function getTextureSize(param) {
      console.error("Texture calculation missing!");
    }
  }, {
    key: "setPage",
    value: function setPage(param) {
      utils.log("Set Page detected", param.pageNumber);
      var page = this.getPageByNumber(param.pageNumber);

      if (page) {
        // page.texturePageNumber = param.pageNumber;
        param.callback = this.textureLoadedCallback.bind(this);
        page.loadTexture(param);
        this.updateBuffer(page);
        return true;
      }

      return false;
    }
  }, {
    key: "cleanPage",
    value: function cleanPage(pageNumber) {
      return true;
    }
    /**
     * Check if the Page change request really makes a page change if not returns false
     * @param pageNumber
     * @returns {boolean}
     */

  }, {
    key: "validatePageChange",
    value: function validatePageChange(pageNumber) {
      //Fixes issue #40 - validates only if the pageNumber has changed
      return pageNumber !== this.app.currentPageNumber;
    }
  }, {
    key: "afterControlUpdate",
    value: function afterControlUpdate() {}
  }]);

  return BaseViewer;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* globals requirejs, jQuery*/

var DV = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"];
/*VARIABLES*/

var has3d = 'WebKitCSSMatrix' in window || document.body && 'MozPerspective' in document.body.style,
    hasMouse = ('onmousedown' in window);
var utils = DV.utils = {
  mouseEvents: hasMouse ? {
    type: "mouse",
    start: "mousedown",
    move: "mousemove",
    end: "mouseup"
  } : {
    type: "touch",
    start: "touchstart",
    move: "touchmove",
    end: "touchend"
  },
  html: {
    div: "<div></div>",
    a: "<a>",
    input: "<input type='text'/>",
    select: "<select></select>"
  },
  //functions or so
  getSharePrefix: function getSharePrefix() {
    //-dearpdf is used for backward compatibility and safety
    var prefixes = utils.getSharePrefixes();
    return prefixes[0];
  },
  getSharePrefixes: function getSharePrefixes() {
    return (DV.defaults.sharePrefix + ',dflip-,flipbook-,dearflip-,dearpdf-').split(",").filter(function (e) {
      return e;
    });
  },
  toRad: function toRad(deg) {
    return deg * Math.PI / 180;
  },
  toDeg: function toDeg(rad) {
    return rad * 180 / Math.PI;
  },

  /**
   * Object Fallback when empty
   * @param {Object} checkVal Object to check if it's empty
   * @param {Object} ifEmpty Object to use if checkVal is empty
   * @returns {*}
   */
  ifdef: function ifdef(checkVal) {
    var ifEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (checkVal === null || checkVal === void 0) {
      return ifEmpty;
    }

    return checkVal;
  },
  createBtn: function createBtn(name, icon, text) {
    // icon = options.icons[icon];
    // text = options.text[text];
    // noinspection CheckTagEmptyBody
    var btn = jQuery(utils.html.div, {
      "class": "df-ui-btn df-ui-" + name,
      title: text,
      html: text !== void 0 ? '<span>' + text + '</span>' : ''
    });

    if (icon !== void 0 && icon.indexOf('<svg') > -1) {
      btn.html(icon.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg" '));
    } else {
      btn.addClass(icon);
    }

    return btn;
  },
  transition: function transition(hasTransition, duration) {
    return hasTransition ? duration / 1000 + "s ease-out" : "0s none";
  },
  display: function display(hasDisplay) {
    return hasDisplay ? "block" : "none";
  },
  resetTranslate: function resetTranslate() {
    return utils.translateStr(0, 0);
  },
  bgImage: function bgImage(src) {
    return src == null || src === "blank" ? '' : ' url("' + src + '")';
  },
  translateStr: function translateStr(x, y) {
    return has3d ? ' translate3d(' + x + 'px,' + y + 'px, 0px) ' : ' translate(' + x + 'px, ' + y + 'px) ';
  },
  httpsCorrection: function httpsCorrection(url) {
    if (url === null || url === void 0) return null;
    var location = window.location;

    if (location.href.indexOf("https://") > -1 && url.indexOf(location.hostname) > -1) {
      url = url.replace("http://", "https://");
    }

    if (location.href.indexOf("http://") > -1 && url.indexOf(location.hostname) > -1) {
      url = url.replace("https://", "http://");
    }

    return url;
  },
  rotateStr: function rotateStr(deg) {
    return ' rotateZ(' + deg + 'deg) ';
  },
  lowerPowerOfTwo: function lowerPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
  },
  nearestPowerOfTwo: function nearestPowerOfTwo(value, max) {
    return Math.min(max || 2048, Math.pow(2, Math.ceil(Math.log(value) / Math.LN2)));
  },
  getFullscreenElement: function getFullscreenElement() {
    //noinspection JSUnresolvedVariable
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  },
  hasFullscreenEnabled: function hasFullscreenEnabled() {
    //noinspection JSUnresolvedVariable
    return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
  },
  fixMouseEvent: function fixMouseEvent(event) {
    if (event) {
      var originalEvent = event.originalEvent || event; //noinspection JSUnresolvedVariable

      if (originalEvent.changedTouches && originalEvent.changedTouches.length > 0) {
        var _event = jQuery.event.fix(event); //noinspection JSUnresolvedVariable


        var touch = originalEvent.changedTouches[0];
        _event.clientX = touch.clientX;
        _event.clientY = touch.clientY;
        _event.pageX = touch.pageX;
        _event.touches = originalEvent.touches;
        _event.pageY = touch.pageY;
        _event.movementX = touch.movementX;
        _event.movementY = touch.movementY;
        return _event;
      } else {
        return event;
      }
    } else {
      return event;
    }
  },
  limitAt: function limitAt(x, min, max) {
    return x < min ? min : x > max ? max : x;
  },
  distOrigin: function distOrigin(x, y) {
    return utils.distPoints(0, 0, x, y);
  },
  distPoints: function distPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  },
  angleByDistance: function angleByDistance(distance, fullWidth) {
    var h = fullWidth / 2;
    var d = utils.limitAt(distance, 0, fullWidth);
    return d < h ? utils.toDeg(Math.asin(d / h)) : 90 + utils.toDeg(Math.asin((d - h) / h));
  },
  calculateScale: function calculateScale(startTouches, endTouches) {
    var startDistance = utils.distPoints(startTouches[0].x, startTouches[0].y, startTouches[1].x, startTouches[1].y),
        endDistance = utils.distPoints(endTouches[0].x, endTouches[0].y, endTouches[1].x, endTouches[1].y);
    return endDistance / startDistance;
  },

  /**
   * Calculates the average of multiple vectors (x, y values)
   */
  getVectorAvg: function getVectorAvg(vectors) {
    return {
      x: vectors.map(function (v) {
        return v.x;
      }).reduce(utils.sum) / vectors.length,
      y: vectors.map(function (v) {
        return v.y;
      }).reduce(utils.sum) / vectors.length
    };
  },
  sum: function sum(a, b) {
    return a + b;
  },

  /**
   * Returns the touches of an event relative to the container offset
   * @param event
   * @param position
   * @return array touches
   */
  getTouches: function getTouches(event, position) {
    position = position || {
      left: 0,
      top: 0
    };
    return Array.prototype.slice.call(event.touches).map(function (touch) {
      return {
        x: touch.pageX - position.left,
        y: touch.pageY - position.top
      };
    });
  },
  getScriptCallbacks: [],
  getScript: function getScript(source, callback, errorCallback) {
    var _callbacks = utils.getScriptCallbacks[source],
        script;

    function clean() {
      script.removeEventListener("load", load, false);
      script.removeEventListener("readystatechange", load, false);
      script.removeEventListener("complete", load, false);
      script.removeEventListener("error", onError, false);
      script.onload = script.onreadystatechange = null;
      script = null;
      script = null;
    }

    function load(_, isAbort) {
      if (script != null) {
        //IE 10 doesn't regard
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
          //console.log("aborted loading :" + source);
          if (!isAbort) {
            for (var i = 0; i < _callbacks.length; i++) {
              if (_callbacks[i]) _callbacks[i]();
              _callbacks[i] = null;
            }

            errorCallback = null;
          }

          clean();
        }
      }
    }

    function onError() {
      errorCallback();
      clean();
      errorCallback = null;
    }

    if (jQuery("script[src='" + source + "']").length === 0) {
      _callbacks = utils.getScriptCallbacks[source] = [];

      _callbacks.push(callback);

      script = document.createElement('script');
      var prior = document.body.getElementsByTagName('script')[0];
      script.async = true;
      script.setAttribute("data-cfasync", "false");

      if (prior != null) {
        prior.parentNode.insertBefore(script, prior);
        prior = null;
      } else {
        //sometimes if script are loaded in head and no scripts are present in body
        document.body.appendChild(script);
      }

      script.addEventListener("load", load, false);
      script.addEventListener("readystatechange", load, false);
      script.addEventListener("complete", load, false);

      if (errorCallback) {
        script.addEventListener("error", onError, false);
      } //Todo check if removing random(1) to random() has any effect


      script.src = source + (utils.prefix.dom === "MS" ? "?" + Math.random() : "");
    } else {
      _callbacks.push(callback);
    }
  },
  detectScriptLocation: function detectScriptLocation() {
    //Auto-detection if the folder structure is copied properly
    if (typeof window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar] == 'undefined') {
      jQuery("script").each(function () {
        var src = jQuery(this)[0].src; // noinspection HttpUrlsUsage

        if ((src.indexOf("/" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationFile + ".js") > -1 || src.indexOf("/" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationFile + ".min.js") > -1 || src.indexOf("js/" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationFile + ".") > -1) && (src.indexOf("https://") > -1 || src.indexOf("http://") > -1)) {
          var splits = src.split("/");
          window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar] = splits.slice(0, -2).join("/");
        }
      });
    } //if locationVar is relative, change it to absolute
    else if (window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar].indexOf(":") == -1) {
        var a = document.createElement("a");
        a.href = window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar];
        window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar] = a.href;
        a = null;
      }

    if (typeof window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar] !== 'undefined') {
      //add ending forward slash trail for safety
      if (window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar].length > 2 && window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar].slice(-1) !== "/") {
        window.window[_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].locationVar] += "/";
      }
    }
  },
  disposeObject: function disposeObject(object) {
    if (object && object.dispose) {
      object.dispose();
    }

    object = null;
    return object;
  },
  log: function log() {
    var _console;

    if (DV.defaults.enableDebugLog === true && window.console) (_console = console).log.apply(_console, arguments);
  },
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
  isIPad: function () {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Mac/.test(navigator.platform);
  }(),
  isSafari: function () {
    // noinspection JSCheckFunctionSignatures
    return /constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    }(!window['safari'] || window['safari']['pushNotification']);
  }(),
  isIEUnsupported: navigator.userAgent.match(/(MSIE|Trident)/),
  isSafariWindows: function isSafariWindows() {
    return !utils.isIOS && utils.isSafari;
  },
  prefix: function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
        pre = Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)[1],
        dom = 'WebKit|Moz|MS'.match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  }(),
  scrollIntoView: function scrollIntoView(element, reference, align) {
    reference = reference || element.parentNode;
    reference.scrollTop = element.offsetTop - reference.offsetTop + (align === false ? element.offsetHeight - reference.offsetHeight : 0);
    reference.scrollLeft = element.offsetLeft - reference.offsetLeft;
  },
  getVisibleElements: function getVisibleElements(options) {
    var container = options.container;
    var elements = options.elements;
    var visible = options.visible || [];
    var top = container.scrollTop,
        bottom = top + container.clientHeight;
    if (bottom == 0) return visible;
    var minIndex = 0,
        maxIndex = elements.length - 1;
    var element = elements[minIndex];
    var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;

    if (elementBottom < top) {
      //check first page
      while (minIndex < maxIndex) {
        var currentIndex = minIndex + maxIndex >> 1;
        element = elements[currentIndex];
        elementBottom = element.offsetTop + element.clientTop + element.clientHeight;

        if (elementBottom > top) {
          maxIndex = currentIndex;
        } else {
          minIndex = currentIndex + 1;
        }
      }
    }

    for (var i = minIndex; i < elements.length; i++) {
      element = elements[i];
      var elementTop = element.offsetTop + element.clientTop;

      if (elementTop <= bottom) {
        visible.push(i + 1);
      } else {
        break;
      }
    }

    return visible;
  },
  getMouseDelta: function getMouseDelta(event) {
    var delta = 0;

    if (event['wheelDelta'] != null) {
      // WebKit / Opera / Explorer 9
      delta = event['wheelDelta'];
    } else if (event.detail != null) {
      // Firefox
      delta = -event.detail;
    }

    return delta;
  },
  pan: function pan(viewer, point) {
    var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var origin = viewer.startPoint;
    var scale = viewer.app.zoomValue;
    var left = viewer.left + (reset === true ? 0 : point.raw.x - origin.raw.x),
        top = viewer.top + (reset === true ? 0 : point.raw.y - origin.raw.y); //round removes blur due to decimal value in transform.

    viewer.left = Math.ceil(utils.limitAt(left, -viewer.shiftWidth, viewer.shiftWidth));
    viewer.top = Math.ceil(utils.limitAt(top, -viewer.shiftHeight, viewer.shiftHeight));

    if (scale === 1) {
      viewer.left = 0;
      viewer.top = 0;
    }

    if (reset === false) {
      viewer.startPoint = point;
    } //requires updatePan to update in DOM

  }
};

utils.isChromeExtension = function () {
  return window.location.href.indexOf("chrome-extension://") === 0;
};

var NullCharactersRegExp = /\x00+/g;
var InvisibleCharactersRegExp = /[\x01-\x1F]/g;

utils.removeNullCharacters = function (str) {
  var replaceInvisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof str !== "string") {
    warn("The argument for removeNullCharacters must be a string.");
    return str;
  }

  if (replaceInvisible) {
    str = str.replace(InvisibleCharactersRegExp, " ");
  }

  return str.replace(NullCharactersRegExp, "");
};

_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].hashFocusBookFound = false;

utils.detectHash = function () {
  _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].preParseHash = window.location.hash; //parse hash and check if any exists

  /**
   * @type {boolean} - Introduced due to a user case where the same hash was detected twice and clicked twice.
   */

  Array.prototype.forEach.call(utils.getSharePrefixes(), function (prefix) {
    if (_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].preParseHash && _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].preParseHash.indexOf(prefix) >= 0 && _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].hashFocusBookFound === false) {
      var id = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].preParseHash.split(prefix)[1].split('/')[0];
      var page = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].preParseHash.split(prefix)[1].split('/')[1];

      if (page != null) {
        page = page.split('/')[0];
      }

      var book; //first check for slug pattern

      book = jQuery("[data-slug=" + id + "]"); //then id pattern

      if (book.length === 0) book = jQuery('#' + id); //then _slug pattern

      if (book.length === 0) book = jQuery("[data-_slug=" + id + "]");

      if (book.length > 0) {
        book = jQuery(book[0]);
        _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].hashFocusBookFound = true;
        page = parseInt(page, 10);

        if (page != null) {
          book.data("page", page);
        }

        if (book.data('lightbox') != null) {
          book.trigger("click");
        } else if (book.attr("href") != null && book.attr("href").indexOf(".pdf") > -1) {
          book.trigger("click");
        }

        book.data("hash_focused", true);
      }
    }
  });
};

utils.focusHash = function (element) {
  if (element.data("hash_focused") === true) {
    var _element$0$scrollInto, _element$;

    (_element$0$scrollInto = (_element$ = element[0]).scrollIntoView) === null || _element$0$scrollInto === void 0 ? void 0 : _element$0$scrollInto.call(_element$, {
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }
};
/**
 *
 * @param imageWidth
 * @param imageHeight
 * @param areaWidth
 * @param areaHeight
 * @returns {{width: number, height: number}}
 */


utils.contain = function (imageWidth, imageHeight, areaWidth, areaHeight) {
  var imageRatio = imageWidth / imageHeight;

  if (imageRatio >= areaWidth / areaHeight) {
    // longest edge is horizontal
    return {
      width: areaWidth,
      height: areaWidth / imageRatio
    };
  } else {
    // longest edge is vertical
    return {
      width: areaHeight * imageRatio,
      height: areaHeight
    };
  }
};

utils.containScale = function (imageWidth, imageHeight, areaWidth, areaHeight) {
  var dimen = utils.contain(imageWidth, imageHeight, areaWidth, areaHeight);
  return dimen.width / dimen.height;
};

utils.fallbackOptions = function (options) {
  //todo this could work without fallback
  if (options.share['mail'] === undefined) {
    options.share['mail'] = 'mailto:?subject=' + options.text.mailSubject + '&body=' + options.text.mailBody;
  }

  if (options.openPage) {
    options.openPage = parseInt(options.openPage, 10);
  }

  return options;
};

var getAttributes = function getAttributes(element) {
  var attrOptions = {}; //special attributes:
  //Validate Document URL

  var attrSource = element.data("source");
  attrOptions.source = attrSource == null || attrSource === "" ? undefined : attrSource;
  attrOptions.id = element.attr("id");
  attrOptions.openPage = element.data("page");
  attrOptions.pageMode = element.attr("pagemode");
  return attrOptions;
}; //getOptions of a specific book in DOM and merge with respective variable


utils.getOptions = function (element) {
  element = jQuery(element); //GetOption Variable

  var optionVar = element.data("option");
  var options = void 0;

  if (_typeof(optionVar) === "object") {
    options = optionVar;
  } else {
    options = optionVar == null || optionVar === "" || window[optionVar] == null ? {} : window[optionVar];
  } //get all options defined in attributes


  var attrOptions = getAttributes(element); //merge options, attribute options override variable options

  options = jQuery.extend(true, {}, options, attrOptions);
  return options;
};

utils.isTrue = function (val) {
  return val === "true" || val === true;
};

utils.parseInt = function (option) {
  return parseInt(option, 10);
};

utils.parseFloat = function (option) {
  return parseFloat(option);
};

utils.parseIntIfExists = function (option) {
  if (option !== void 0) {
    option = parseInt(option, 10);
  }

  return option;
};

utils.parseFloatIfExists = function (option) {
  if (option !== void 0) {
    option = parseFloat(option);
  }

  return option;
};

utils.parseBoolIfExists = function (option) {
  if (option !== void 0) {
    option = utils.isTrue(option);
  }

  return option;
};

utils.sanitizeOptions = function (options) {
  options.paddingLeft = utils.parseIntIfExists(options.paddingLeft);
  options.paddingRight = utils.parseIntIfExists(options.paddingRight);
  options.paddingTop = utils.parseIntIfExists(options.paddingTop);
  options.paddingBottom = utils.parseIntIfExists(options.paddingBottom);
  options.duration = utils.parseIntIfExists(options.duration);
  options.rangeChunkSize = utils.parseIntIfExists(options.rangeChunkSize);
  options.maxTextureSize = utils.parseIntIfExists(options.maxTextureSize);
  options.linkTarget = utils.parseIntIfExists(options.linkTarget);
  options.zoomRatio = utils.parseFloatIfExists(options.zoomRatio);
  options.enableAnalytics = utils.parseBoolIfExists(options.enableAnalytics);
  options.autoPlay = utils.parseBoolIfExists(options.autoPlay);
  options.autoPlayStart = utils.parseBoolIfExists(options.autoPlayStart);
  options.autoPlayDuration = utils.parseIntIfExists(options.autoPlayDuration);

  if (options.loadMoreCount !== void 0) {
    options.loadMoreCount = utils.parseInt(options.loadMoreCount);
    if (isNaN(options.loadMoreCount)) options.loadMoreCount = -1;
  }

  return options;
};

utils.finalizeOptions = function (options) {
  return options;
}; //Possible improvements: https://www.npmjs.com/package/linkifyjs


utils.urlify = function (text) {
  //https://regex101.com/r/cX0pJ8/1
  var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/g; // urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  // noinspection HttpUrlsUsage

  return text.replace(urlRegex, function (url, b, c, d, e) {
    url = url.toLowerCase();
    var url2 = url;

    if (url.indexOf(':') > 0 && url.indexOf('http:') === -1 && url.indexOf('https:') === -1) {
      utils.log("AutoLink Rejected: " + url2 + " for " + url);
      return url;
    } else if (url.indexOf('www.') === 0) {
      url2 = 'http://' + url;
    } else if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {} else if (url.indexOf('mailto:') === 0) {} else if (url.indexOf('@') > 0) {
      url2 = 'mailto:' + url;
      var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      if (url.match(mailformat) === null) {
        utils.log("AutoLink Rejected: " + url2 + " for " + url);
        return url;
      }
    }

    utils.log("AutoLink: " + url2 + " for " + url);
    return '<a href="' + url2 + '" class="df-autolink" target="_blank">' + url + '</a>';
  });
};

function getDataFromClass(el) {
  var classList = el.classList,
      className;

  for (var i = 0; i < classList.length; i++) {
    className = classList[i];
    if (className.indexOf("dvcss_e_") === 0) return className;
  }

  return null;
}

_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseCSSElements = function () {
  jQuery(".dvcss").each(function () {
    var el = jQuery(this);
    var cssData = getDataFromClass(el[0]);
    el.removeClass(cssData).removeClass("dvcss");
    cssData = cssData.replace("dvcss_e_", "");
    var data;

    try {
      data = JSON.parse(atob(cssData));
    } catch (e) {}

    if (data) {
      var option_id = "df_option_" + data.id;
      window[option_id] = jQuery.extend(true, {}, window[option_id], data);
      el.addClass("df-element");

      if (data.lightbox !== "none") {
        el.attr("data-lightbox", data.lightbox === void 0 ? "custom" : data.lightbox);
        if (data.lightbox == "thumb") el.attr("data-thumb", data.pdfThumb);
        if (data.thumbLayout) el.attr("data-thumb-layout", data.thumbLayout);
        if (data.apl) el.attr("apl", data.apl);
      }

      el.data("option", option_id); //attr is required, data("slug") cannot be used in selector

      el.attr("data-slug", data.slug);
      el.attr("id", "df_" + data.id);
    }
  });
};

_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseNormalElements = function () {
  jQuery('.df-posts').each(function () {
    if (_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.loadMoreCount === false || _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.loadMoreCount === -1) return;
    var postsWrapper = jQuery(this);
    var parsed = postsWrapper.data("parsed"); //skip if already parsed or failed

    if (parsed !== "true") {
      postsWrapper.data("parsed", "true");
      postsWrapper.attr("df-parsed", "true"); //backward-compatibility - issue #374 https://github.com/deepak-ghimire/dearviewer/issues/374

      var count = 0;
      var books = postsWrapper.find('.df-element');
      var totalBooks = books.length;
      books.each(function () {
        //skip first n books
        count++;
        if (count > _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.loadMoreCount) jQuery(this).attr("skip-parse", "true");
      });

      if (totalBooks > _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.loadMoreCount) {
        postsWrapper.append("<div class='df-load-more-button-wrapper'><div class='df-load-more-button'>Load More..</div></div>");
      }
    }
  });
  var placeholderImage = 'data:image/svg+xml,' + escape('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 297"><rect width="210" height="297" style="fill:#f1f2f2"/><circle cx="143" cy="95" r="12" style="fill:#e3e8ed"/><polygon points="131 138 120 149 95 124 34 184 176 185 131 138" style="fill:#e3e8ed"/></svg>');
  jQuery('.df-element').each(function () {
    var app = jQuery(this);
    if (app.attr("skip-parse") === "true") return;
    var isParsed = app.data("parsed");

    if (isParsed !== "true") {
      app.data("parsed", "true");
      app.attr("df-parsed", "true"); //backward-compatibility

      var lightboxType = app.data("lightbox");

      if (lightboxType === void 0) {
        app.dearviewer();
      } else {
        app.addClass("df-popup-" + lightboxType);

        if (lightboxType === "thumb") {
          var thumbLayout = app.data("thumb-layout") || _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.thumbLayout;
          var thumbURL = utils.httpsCorrection(app.data("thumb"));
          app.removeAttr("data-thumb").removeAttr("data-thumb-layout");
          var innerText = app.html().trim();

          if (innerText === undefined || innerText === "") {
            innerText = "Click to Open";
          }

          if (_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.displayLightboxPlayIcon === true) app.addClass("df-icon-play");

          if (thumbLayout !== "custom") {
            app.html("");
            var title = jQuery("<span class='df-book-title'>").html(innerText);
            var wrapper = jQuery("<div class='df-book-wrapper'>").appendTo(app);
            var cover = jQuery("<div class='df-book-cover'>").append(title).appendTo(wrapper);

            if (thumbURL == null || thumbURL.toString().trim() == '') {
              app.addClass("df-thumb-not-found");
              thumbURL = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.imagePlaceholder || placeholderImage;
            }

            var image = jQuery('<img alt="' + innerText + '"/>');
            image.attr('src', thumbURL);
            cover.append(image);
          }

          if (thumbLayout != "book-title-hover") {
            //book-title-hover is default
            app.addClass("df-tl-" + thumbLayout);
          }
        }
      }
    }
  });
}; //scan the whole document for un-parsed PDFs and convert them to viewer and flipbooks


_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseElements = utils.parseElements = function () {
  _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseCSSElements();
  _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseNormalElements();
}; //jQuery events


_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].initUtils = function () {
  utils.detectScriptLocation();
  var body = jQuery('body'); //assign webkit so that thumbs and other functions can be optimized

  if (utils.isSafari || utils.isIOS) {
    body.addClass("df-ios");
  }

  body.on('click', function () {});
  body.on('click', '.df-posts .df-load-more-button', function () {
    var postsWrapper = jQuery(this).closest(".df-posts");

    if (postsWrapper.length > 0) {
      var count = 0;
      var posts = postsWrapper.find('.df-element');
      posts.each(function () {
        var post = jQuery(this);

        if (post.attr("skip-parse") === "true") {
          //skip first 10
          if (count < _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.loadMoreCount) post.removeAttr("skip-parse");
          count++;
        }
      });
      _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].parseNormalElements();
    }
  });
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFlipBookViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookSheet; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _base_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var utils = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].utils;

var BaseFlipBookViewer = /*#__PURE__*/function (_BaseViewer) {
  _inherits(BaseFlipBookViewer, _BaseViewer);

  var _super = _createSuper(BaseFlipBookViewer);

  function BaseFlipBookViewer(options, appContext) {
    var _this;

    _classCallCheck(this, BaseFlipBookViewer);

    options.viewerClass = "df-flipbook " + (options.viewerClass || "");
    _this = _super.call(this, options, appContext);
    _this.isFlipBook = true;
    _this.sheets = [];
    _this.isRTL = _this.app.isRTL;
    _this.foldSense = 50;
    _this.isOneSided = false;
    _this.stackCount = 6;
    _this.annotedPage = null;
    _this.pendingAnnotations = [];
    _this.seamPosition = 0;
    _this.dragSheet = null;
    _this.drag = null;
    _this.soundOn = options.enableSound === true;
    _this.soundFile = null;
    _this.minZoom = 1;
    _this.maxZoom = 4;

    if (_this.app.options.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.AUTO || _this.app.options.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL) {
      _this.app.checkSecondPage = true;
    } // if (this.app.options.pageScale === null) {


    _this.app.pageScaling = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].PAGE_SCALE.PAGE_FIT; // }

    options.viewerClass = "";
    _this.zoomViewer = new ZoomViewer(options, appContext);
    return _this;
  }

  _createClass(BaseFlipBookViewer, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "init", this).call(this);

      this.initSound();
      var app = this.app;
      this.pageMode = app.options.pageMode === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.AUTO ? utils.isMobile || app.pageCount <= 2 ? _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.SINGLE : _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.DOUBLE : app.options.pageMode;
      this.singlePageMode = app.options.singlePageMode || (utils.isMobile ? _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_SINGLE_PAGE_MODE.BOOKLET : _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_SINGLE_PAGE_MODE.ZOOM);
      this.updatePageMode();
    }
  }, {
    key: "determineHeight",
    value: function determineHeight() {}
  }, {
    key: "initCustomControls",
    value: function initCustomControls() {
      _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "initCustomControls", this).call(this);

      var viewer = this;
      var app = this.app;
      var ui = app.ui;
      var controls = ui.controls;
      var text = app.options.text,
          icons = app.options.icons; //region Sound Button

      controls.sound = utils.createBtn('sound', icons['sound'], text.toggleSound).on("click", function () {
        viewer.soundOn = !viewer.soundOn;
        ui.updateSound();
      }); //Updates sound on click of sound button

      ui.updateSound = function () {
        if (viewer.soundOn === false) controls.sound.addClass("disabled");else controls.sound.removeClass("disabled");
      }; //immediate check


      ui.updateSound();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "dispose", this).call(this);

      for (var count = 0; count < this.sheets.length; count++) {
        var sheet = this.sheets[count];

        if (sheet && sheet.currentTween) {
          sheet.currentTween.stop();
          sheet.currentTween = null;
        }
      }

      this.zoomViewer.dispose();
      this.soundFile = null;
    }
  }, {
    key: "initSound",
    value: function initSound() {
      this.soundFile = document.createElement("audio");
      this.soundFile.setAttribute("src", this.app.options.soundFile + "?ver=" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].version);
      this.soundFile.setAttribute("type", "audio/mpeg");
    }
  }, {
    key: "playSound",
    value: function playSound() {
      var viewer = this;

      try {
        if (viewer.app.userHasInteracted === true && viewer.soundOn === true) {
          viewer.soundFile.currentTime = 0;
          viewer.soundFile.play();
        }
      } catch (error) {}
    }
  }, {
    key: "checkDocumentPageSizes",
    value: function checkDocumentPageSizes() {
      var provider = this.app.provider;

      if (provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.AUTO) {
        if (provider._page2Ratio && provider._page2Ratio > provider.coverPage.pageRatio * 1.5) {
          provider.pageSize = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL;
        } else {
          provider.pageSize = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.SINGLE;
        }
      }

      if (provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL) {
        provider.pageCount = provider.numPages === 1 ? 1 : provider.numPages * 2 - 2;
      }

      if (provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_COVER_BACK || provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE) {
        provider.pageCount = provider.numPages * 2;
      }
    }
  }, {
    key: "getViewerPageNumber",
    value: function getViewerPageNumber(pageNumber) {
      //case double internal
      if (this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL && pageNumber > 2) {
        pageNumber = pageNumber * 2 - 1;
      }

      if (this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_COVER_BACK && pageNumber > 2) {
        pageNumber = pageNumber * 2 - 1; //todo not sure, we don't have a document yet with links. Since this layout is only intended with printing
      }

      return pageNumber;
    }
  }, {
    key: "getDocumentPageNumber",
    value: function getDocumentPageNumber(pageNumber) {
      //case double internal
      if (this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL && pageNumber > 2) return Math.ceil((pageNumber - 1) / 2) + 1; //case double page

      if (this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_COVER_BACK && pageNumber > 1) {
        //case double page last page, it's on page 1
        if (pageNumber === this.app.pageCount) return 1; //case double page

        return Math.ceil((pageNumber - 1) / 2) + 1;
      }

      return pageNumber;
    }
  }, {
    key: "getViewPort",
    value: function getViewPort(pageNumber) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var filter = arguments.length > 2 ? arguments[2] : undefined;
      return this.filterViewPort(_get(_getPrototypeOf(BaseFlipBookViewer.prototype), "getViewPort", this).call(this, pageNumber, fallback), pageNumber, filter);
    }
  }, {
    key: "isDoubleInternal",
    value: function isDoubleInternal() {
      return this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL;
    }
  }, {
    key: "isDoubleCoverBack",
    value: function isDoubleCoverBack() {
      return this.app.provider.pageSize === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_SIZE.DOUBLE_COVER_BACK;
    }
  }, {
    key: "isDoubleInternalPage",
    value: function isDoubleInternalPage(pageNumber) {
      return this.isDoubleInternal() && pageNumber > 1 && pageNumber < this.app.provider.pageCount;
    }
  }, {
    key: "getDoublePageWidthFix",
    value: function getDoublePageWidthFix(pageNumber) {
      return this.isDoubleInternalPage(pageNumber) || this.isDoubleCoverBack() ? 2 : 1;
    }
  }, {
    key: "isDoublePageFix",
    value: function isDoublePageFix(pageNumber) {
      var fix = false;

      if (this.isDoubleCoverBack() || this.isDoubleInternalPage(pageNumber)) {
        if (this.app.isRTL) {
          if (pageNumber % 2 === 0) {
            fix = true;
          }
        } else {
          // canvas.width = canvas.width / doublePageWidthFix;
          if (pageNumber % 2 === 1) {
            fix = true;
          }
        }
      }

      return fix;
    }
  }, {
    key: "finalizeAnnotations",
    value: function finalizeAnnotations(element, pageNumber) {
      element.classList.toggle('df-double-internal', this.isDoubleInternalPage(pageNumber));
      element.classList.toggle('df-double-internal-fix', this.isDoublePageFix(pageNumber));
    }
  }, {
    key: "finalizeTextContent",
    value: function finalizeTextContent(element, pageNumber) {
      element.classList.toggle('df-double-internal', this.isDoubleInternalPage(pageNumber));
      element.classList.toggle('df-double-internal-fix', this.isDoublePageFix(pageNumber));
    }
  }, {
    key: "isSheetCover",
    value: function isSheetCover(sheetNumber) {
      var isBooklet = this.isBooklet;
      return sheetNumber === 0 || isBooklet && sheetNumber === 1 //front cover is 0
      || sheetNumber === Math.ceil(this.app.pageCount / (isBooklet ? 1 : 2)) - (isBooklet ? 0 : 1); //start with 0 so 1 minus
    }
  }, {
    key: "isSheetHard",
    value: function isSheetHard(sheetNumber) {
      var config = this.app.options.flipbookHardPages,
          isBooklet = this.isBooklet;

      if (config === "cover") {
        return this.isSheetCover(sheetNumber);
      } else if (config === "all") {
        return true;
      } else {
        var baseTest = ("," + config + ",").indexOf("," + (sheetNumber * 2 + 1) + ",") > -1;
        var nextTest = ("," + config + ",").indexOf("," + (sheetNumber * 2 + 2) + ",") > -1;
        return baseTest || nextTest;
      }
    }
  }, {
    key: "sheetsIndexShift",
    value: function sheetsIndexShift(oldBasePageNumber, basePageNumber, stackCount) {
      if (oldBasePageNumber > basePageNumber) {
        this.sheets[stackCount - 1].skipFlip = true;
        this.sheets.unshift(this.sheets.pop());
      } else if (oldBasePageNumber < basePageNumber) {
        this.sheets[0].skipFlip = true;
        this.sheets.push(this.sheets.shift());
      }
    }
  }, {
    key: "checkSwipe",
    value: function checkSwipe(point, event) {
      var viewer = this;
      if (viewer.pinchZoomDirty === true) return;

      if (viewer.app.zoomValue === 1 && viewer.canSwipe === true) {
        //todo only if touch is available
        var swipe_dist = point.x - viewer.lastPos;

        if (Math.abs(swipe_dist) > viewer.swipeThreshold) {
          //swipe has triggered
          if (swipe_dist < 0) {
            viewer.app.openRight();
          } else {
            viewer.app.openLeft();
          }

          viewer.canSwipe = false;
          event.preventDefault();
        }

        viewer.lastPos = point.x;
      }
    }
  }, {
    key: "checkCenter",
    value: function checkCenter() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var viewer = this,
          app = this.app,
          SHIFT = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_CENTER_SHIFT;
      var centerShift,
          isEven = app.currentPageNumber % 2 === 0,
          basePage = viewer.getBasePage(),
          isRTL = viewer.isRTL,
          isSingle = viewer.isSingle;

      if (basePage === 0 || viewer.isBooklet) {
        centerShift = viewer.isRTL ? SHIFT.RIGHT : SHIFT.LEFT;
      } else if (basePage === app.pageCount) {
        centerShift = isRTL ? SHIFT.LEFT : SHIFT.RIGHT;
      } else {
        centerShift = isSingle ? isRTL ? isEven ? SHIFT.LEFT : SHIFT.RIGHT : isEven ? SHIFT.RIGHT : SHIFT.LEFT : SHIFT.NONE;
      }

      if (viewer.centerNeedsUpdate !== true) {
        //in-case centerNeedsUpdate needs to be forced
        viewer.centerNeedsUpdate = viewer.centerShift !== centerShift;
      }

      if (viewer.centerNeedsUpdate) {
        viewer.centerShift = centerShift;
        viewer.updateCenter(flag);
        viewer.centerNeedsUpdate = false;
      }
    }
  }, {
    key: "updateCenter",
    value: function updateCenter() {
      console.log("UpdateCenter: missing implementation.");
    }
  }, {
    key: "reset",
    value: function reset() {
      var sheet;

      for (var count = 0; count < this.sheets.length; count++) {
        sheet = this.sheets[count];
        sheet.reset();
        sheet.pageNumber = -1;
        sheet.resetTexture();
      }

      this.annotedPage = null;
      this.oldBasePageNumber = -1;
      this.centerShift = null;
      this.refresh();
    }
  }, {
    key: "handleZoom",
    value: function handleZoom() {
      var app = this.app,
          dimensions = app.dimensions;
      var maxZoom = this.maxZoom = app.dimensions.maxTextureHeight / this._containCover.height,
          zoomValue = app.zoomValue,
          zoomChanged = false,
          exitZoom = false,
          enterZoom = false;

      if (maxZoom < this.minZoom) {
        //this happens when the texture height is smaller than window height
        maxZoom = this.maxZoom = this.minZoom;
      }

      if (app.pendingZoom === true && app.zoomDelta != null) {
        var delta = app.zoomDelta;
        zoomValue = delta > 0 ? zoomValue * app.options.zoomRatio : zoomValue / app.options.zoomRatio;
      } else if (this.lastScale != null) {
        zoomValue *= this.lastScale;
        this.lastScale = null;
      }

      zoomValue = utils.limitAt(zoomValue, this.minZoom, maxZoom);
      app.zoomValueChange = zoomValue / app.zoomValue;
      zoomChanged = app.zoomChanged = app.zoomValue !== zoomValue;

      if (zoomChanged && (zoomValue === 1 || app.zoomValue === 1)) {
        exitZoom = zoomValue === 1;
        enterZoom = app.zoomValue === 1;
      }

      app.zoomValue = zoomValue;

      if (enterZoom || exitZoom) {
        app.container.toggleClass("df-zoom-active", zoomValue !== 1);
        enterZoom && this.enterZoom();
        exitZoom && this.exitZoom();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var viewer = this,
          app = this.app;
      var stackCount = viewer.stackCount,
          isRTL = viewer.isRTL,
          isBooklet = viewer.isBooklet;
      var basePageNumber = viewer.getBasePage(),
          pageDivisor = isBooklet ? 1 : 2;
      if (isRTL) basePageNumber = app.pageCount - basePageNumber;

      var oldBasePageNumber = viewer.oldBasePageNumber,
          totalSheets = Math.ceil(app.pageCount / pageDivisor),
          _sheetCount,
          midPoint = Math.floor(stackCount / 2);

      if (basePageNumber !== viewer.oldBasePageNumber) {
        viewer.pageNumberChanged = true;
        this.updatePendingStatusClass(true);
        viewer.zoomViewer.reset();
      } //Pages index shifting


      viewer.sheetsIndexShift(oldBasePageNumber, basePageNumber, stackCount);
      var baseSheetNumber = Math.ceil(basePageNumber / pageDivisor);

      for (_sheetCount = 0; _sheetCount < stackCount; _sheetCount++) {
        var _sheet = void 0,
            sheetNumber = baseSheetNumber - midPoint + _sheetCount;

        if (isRTL) sheetNumber = totalSheets - sheetNumber - 1;
        _sheet = viewer.sheets[_sheetCount];
        if (_sheet == null) continue;
        _sheet.targetSide = _sheetCount < midPoint ? _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.LEFT : _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.RIGHT;
        var sideChanged = _sheet.side !== _sheet.targetSide,
            pageChanged = sheetNumber !== _sheet.pageNumber,
            needsFlip = sideChanged && _sheet.skipFlip === false && app.zoomValue === 1;

        if (!sideChanged && pageChanged && _sheet.isFlipping && _sheet.currentTween) {
          _sheet.currentTween.stop();
        }

        _sheet.isHard = viewer.isSheetHard(sheetNumber);
        _sheet.isCover = viewer.isSheetCover(sheetNumber);
        viewer.refreshSheet({
          sheet: _sheet,
          sheetNumber: sheetNumber,
          totalSheets: totalSheets,
          zIndex: this.stackCount + (_sheetCount < midPoint ? _sheetCount - midPoint : midPoint - _sheetCount),
          visible: isBooklet ? isRTL ? _sheetCount < midPoint || _sheet.isFlipping || needsFlip : _sheetCount >= midPoint || _sheet.isFlipping || needsFlip : sheetNumber >= 0 && sheetNumber < totalSheets || isBooklet && sheetNumber === totalSheets,
          index: _sheetCount,
          needsFlip: needsFlip,
          midPoint: midPoint
        }); //Determine Page Situation

        if (pageChanged) {
          //texture reset
          _sheet.resetTexture();

          var firstPage = this.app.isRTL ? _sheet.backPage : _sheet.frontPage;
          firstPage.pageNumber = this.isBooklet ? sheetNumber : sheetNumber * 2 + 1;
          var secondPage = this.app.isRTL ? _sheet.frontPage : _sheet.backPage;
          secondPage.pageNumber = this.isBooklet ? -1 : sheetNumber * 2 + 2;
          app.textureRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
        }

        _sheet.pageNumber = sheetNumber;
      }

      viewer.requestRefresh(false);
      app.textureRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
      viewer.oldBasePageNumber = basePageNumber;
      this.checkCenter();
      this.zoomViewer.refresh();
      viewer.pageNumberChanged = false;
    }
  }, {
    key: "validatePageChange",
    value: function validatePageChange(pageNumber) {
      var app = this.app,
          valid = !this.isFlipping() || app.oldPageNumber === undefined;
      valid = valid || app.currentPageNumber < pageNumber && app.oldPageNumber < app.currentPageNumber;
      valid = valid || app.currentPageNumber > pageNumber && app.oldPageNumber > app.currentPageNumber;
      return valid;
    }
  }, {
    key: "getVisiblePages",
    value: function getVisiblePages() {
      var viewer = this,
          visible = [];
      var page = viewer.getBasePage();
      var count = viewer.app.zoomValue > 1 ? 1 : viewer.isBooklet ? Math.min(viewer.stackCount / 2, 2) : viewer.stackCount / 2;

      for (var _count = 0; _count < count; _count++) {
        visible.push(page - _count);
        visible.push(page + _count + 1);
      }

      return {
        main: visible,
        buffer: []
      };
    }
  }, {
    key: "getBasePage",
    value: function getBasePage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;
      if (this.isBooklet) return pageNumber;else return Math.floor(pageNumber / 2) * 2;
    }
  }, {
    key: "afterFlip",
    value: function afterFlip() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isAnimating() !== true) {
        this.pagesReady();
        this.updatePendingStatusClass();
      }
    }
  }, {
    key: "isFlipping",
    value: function isFlipping() {
      var isFlipping = false;
      this.sheets.forEach(function (sheet) {
        if (sheet.isFlipping === true) isFlipping = true;
      });
      return isFlipping;
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.isFlipping();
    }
  }, {
    key: "mouseWheel",
    value: function mouseWheel(event) {
      if (this.app.options.mouseScrollAction === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].MOUSE_SCROLL_ACTIONS.ZOOM) {
        this.zoomViewer.mouseWheel(event);
      } else {
        _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "mouseWheel", this).call(this, event);
      }
    }
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {
      if (this.app.zoomValue > 1) this.zoomViewer.checkRequestQueue();else _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "checkRequestQueue", this).call(this);
    }
  }, {
    key: "updatePan",
    value: function updatePan() {}
  }, {
    key: "resetPageTween",
    value: function resetPageTween() {}
  }, {
    key: "gotoPageCallBack",
    value: function gotoPageCallBack() {
      this.resetPageTween(); // this.app.options.resetZoomBeforeFlip = true;

      if (this.app.zoomValue !== 1 && this.app.options.resetZoomBeforeFlip === true) {
        this.app.resetZoom();
      }

      this.beforeFlip();
      this.requestRefresh();
    }
  }, {
    key: "beforeFlip",
    value: function beforeFlip() {
      var viewer = this; //callback for before flip

      viewer.app.executeCallback('beforeFlip');
      if (viewer.app.zoomValue === 1) viewer.playSound();
    }
  }, {
    key: "onFlip",
    value: function onFlip() {
      var viewer = this; //callback for after flip

      viewer.app.executeCallback('onFlip');
    } //todo should be handled properly by zoomviewer directly

  }, {
    key: "getAnnotationElement",
    value: function getAnnotationElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.app.zoomValue > 1) return this.zoomViewer.getAnnotationElement(pageNumber, clean);else return _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "getAnnotationElement", this).call(this, pageNumber, clean);
    }
  }, {
    key: "getTextElement",
    value: function getTextElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.app.zoomValue > 1) return this.zoomViewer.getTextElement(pageNumber, clean);else return _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "getTextElement", this).call(this, pageNumber, clean);
    }
  }, {
    key: "enterZoom",
    value: function enterZoom() {
      this.exchangeTexture(this, this.zoomViewer);
    }
  }, {
    key: "exitZoom",
    value: function exitZoom() {
      this.exchangeTexture(this.zoomViewer, this);
    }
  }, {
    key: "exchangeTexture",
    value: function exchangeTexture(from, to) {
      var basePage = this.getBasePage();
      var fromPage = from.getPageByNumber(basePage);
      var toPage = to.getPageByNumber(basePage);

      if (toPage && toPage.textureStamp === "-1") {
        toPage.textureStamp = fromPage.textureStamp;
        toPage.loadTexture({
          texture: fromPage.getTexture(true)
        });
        utils.log("Texture Exchanging at " + basePage);
      } else {
        utils.log("Texture Exchanging Bypassed at " + basePage);
      }

      if (!this.isBooklet) {
        var _fromPage = from.getPageByNumber(basePage + 1);

        var _toPage = to.getPageByNumber(basePage + 1);

        if (_toPage && _toPage.textureStamp === "-1") {
          _toPage.textureStamp = _fromPage.textureStamp;

          _toPage.loadTexture({
            texture: _fromPage.getTexture(true)
          });

          utils.log("Texture Exchanging at " + (basePage + 1));
        } else {
          utils.log("Texture Exchanging Bypassed at " + (basePage + 1));
        }
      }

      to.pagesReady();
    }
  }, {
    key: "setPageMode",
    value: function setPageMode(args) {
      var isSingle = args.isSingle === true;
      this.pageMode = isSingle ? _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.SINGLE : _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.DOUBLE;
      this.updatePageMode();
      this.app.resizeRequestStart();
      this.requestRefresh();
    }
  }, {
    key: "updatePageMode",
    value: function updatePageMode() {
      if (this.app.pageCount < 3) this.pageMode = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.SINGLE;
      this.isSingle = this.pageMode === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.SINGLE;
      this.isBooklet = this.isSingle && this.singlePageMode === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_SINGLE_PAGE_MODE.BOOKLET;
      this.app.jumpStep = this.isSingle ? 1 : 2;
      this.totalSheets = Math.ceil(this.app.pageCount / (this.isBooklet ? 1 : 2));
    }
  }, {
    key: "setPage",
    value: function setPage(param) {
      if (param.textureTarget === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TEXTURE_TARGET.ZOOM) {
        return this.zoomViewer.setPage(param);
      } else {
        return _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "setPage", this).call(this, param);
      }
    }
  }, {
    key: "_getInnerHeight",
    value: function _getInnerHeight() {
      var viewPort = this.app.dimensions.coverPage.viewPort;
      var width = this.availablePageWidth(false, true),
          appHeight = this.app.dimensions.maxHeight - this.app.dimensions.padding.height;
      this._containCover = utils.contain(viewPort.width * 100, viewPort.height * 100, width, appHeight);
      this._containCover.width = Math.floor(this._containCover.width);
      this._containCover.height = Math.floor(this._containCover.height);
      var innerHeight = this.app.dimensions.isFixedHeight ? appHeight : this._containCover.height;
      this.app.coverScaleValue = this._containCover.height / viewPort.height;
      this.app.dimensions.stage.width = this.app.dimensions.stage.innerWidth + this.app.dimensions.padding.width;
      this.app.dimensions.stage.height = innerHeight + this.app.dimensions.padding.height;
      return innerHeight;
    }
  }, {
    key: "availablePageWidth",
    value: function availablePageWidth() {
      var zoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var ignoreSidemenuOverlay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var extraWidth = ignoreSidemenuOverlay === true ? this.app.dimensions.offset.width : 0;
      var pageWidth = this.app.dimensions.stage.innerWidth + extraWidth;
      pageWidth /= this.pageMode === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].FLIPBOOK_PAGE_MODE.SINGLE ? 1 : 2;
      return Math.floor(pageWidth * (zoom ? this.app.zoomValue : 1));
    }
  }, {
    key: "availablePageHeight",
    value: function availablePageHeight() {
      var zoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return Math.floor(this.app.dimensions.stage.innerHeight * (zoom ? this.app.zoomValue : 1));
    }
  }, {
    key: "getTextureSize",
    value: function getTextureSize(param) {
      var viewport = this.getViewPort(param.pageNumber, true);
      var dimen = utils.contain(viewport.width * 100, viewport.height * 100, window.devicePixelRatio * this.availablePageWidth(), window.devicePixelRatio * this.availablePageHeight());
      return {
        height: dimen.height,
        width: dimen.width
      };
    }
  }, {
    key: "filterViewPort",
    value: function filterViewPort(viewport, pageNumber) {
      var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (viewport === undefined) return undefined;
      if (filter != true) return viewport;

      var _viewport = viewport.clone();

      _viewport.width = _viewport.width / this.getDoublePageWidthFix(pageNumber);
      return _viewport;
    }
  }, {
    key: "filterViewPortCanvas",
    value: function filterViewPortCanvas(viewport, canvas, pageNumber) {
      if (this.isDoublePageFix(pageNumber)) {
        viewport.transform[4] = viewport.transform[4] - Math.floor(Math.min(canvas.width, viewport.width * 2 - canvas.width));
      }

      viewport.widthFix = this.isDoubleInternalPage(pageNumber) ? 2 : 1;
    }
  }, {
    key: "isClosedPage",
    value: function isClosedPage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;
      return pageNumber === 1 || pageNumber === this.app.jumpStep * Math.ceil(this.app.pageCount / this.app.jumpStep) && !this.isBooklet; //Booklets never close on the end
    }
  }, {
    key: "isLeftPage",
    value: function isLeftPage(pageNumber) {
      if (pageNumber === void 0) pageNumber = this.app.currentPageNumber;

      if (this.isBooklet) {
        return this.isRTL;
      } else {
        return pageNumber % 2 === (this.isRTL ? 1 : 0);
      }
    }
  }, {
    key: "cleanPage",
    value: function cleanPage(pageNumber) {
      if (this.isDoubleInternalPage(pageNumber)) {
        var otherPage = pageNumber + (pageNumber % 2 === 1 ? -1 : 1);
        return this.app.provider.requestedPages[pageNumber] === false && this.app.provider.requestedPages[otherPage] === false;
      } else {
        return _get(_getPrototypeOf(BaseFlipBookViewer.prototype), "cleanPage", this).call(this, pageNumber);
      }
    }
  }]);

  return BaseFlipBookViewer;
}(_base_viewer_js__WEBPACK_IMPORTED_MODULE_1__[/* BaseViewer */ "a"]);

var ZoomViewer = /*#__PURE__*/function (_BaseViewer2) {
  _inherits(ZoomViewer, _BaseViewer2);

  var _super2 = _createSuper(ZoomViewer);

  function ZoomViewer(options, appContext) {
    var _this2;

    _classCallCheck(this, ZoomViewer);

    options.viewerClass = "df-zoomview " + (options.viewerClass || "");
    _this2 = _super2.call(this, options, appContext);
    _this2.viewer = _this2.app.viewer;
    _this2.events = {};

    _this2.init();

    _this2.initEvents();

    _this2.left = 0;
    _this2.top = 0;
    return _this2;
  }

  _createClass(ZoomViewer, [{
    key: "init",
    value: function init() {
      this.leftPage = new _page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]();
      this.rightPage = new _page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]();
      this.pages.push(this.leftPage);
      this.pages.push(this.rightPage);
      this.leftPage.element.addClass('df-page-back');
      this.rightPage.element.addClass('df-page-front');
      this.wrapper.append(this.leftPage.element);
      this.wrapper.append(this.rightPage.element);
      this.bookShadow = jQuery('<div>', {
        "class": 'df-book-shadow'
      });
      this.wrapper.append(this.bookShadow);
      this.wrapper.addClass("df-sheet");
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.stageDOM = this.element[0];

      _get(_getPrototypeOf(ZoomViewer.prototype), "initEvents", this).call(this);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.element.remove();
    }
  }, {
    key: "resize",
    value: function resize() {
      var viewer = this;
      var dimensions = viewer.app.dimensions;
      var padding = dimensions.padding;
      var zoomHeight = this.app.viewer.availablePageHeight(),
          zoomWidth = this.app.viewer.availablePageWidth(),
          zoomFullWidth = viewer.fullWidth = zoomWidth * 2,
          stageWidth = dimensions.stage.innerWidth,
          stageHeight = dimensions.stage.innerHeight;
      var shiftHeight = viewer.shiftHeight = Math.ceil(utils.limitAt((zoomHeight - stageHeight) / 2, 0, zoomHeight)),
          shiftWidth = viewer.shiftWidth = Math.ceil(utils.limitAt((zoomFullWidth - stageWidth) / 2, 0, zoomFullWidth));

      if (viewer.app.zoomValue === 1) {
        viewer.left = 0;
        viewer.top = 0;
      }

      viewer.element.css({
        top: -shiftHeight,
        bottom: -shiftHeight,
        right: -shiftWidth,
        left: -shiftWidth,
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left,
        transform: "translate3d(" + viewer.left + "px," + viewer.top + "px,0)"
      });
      viewer.wrapper.css({
        width: zoomFullWidth,
        height: zoomHeight,
        //marginTop when the flipbook is smaller than the ViewArea it has to center align vertically
        marginTop: dimensions.height - zoomHeight - padding.height > 0 ? (dimensions.height - padding.height - zoomHeight) / 2 : 0
      });
      this.wrapper.height(zoomHeight).width(zoomFullWidth - zoomFullWidth % 2);

      if (viewer.app.pendingZoom === true) {
        viewer.zoom();
      }

      this.app.viewer.annotedPage = null;
      this.pagesReady();
    }
  }, {
    key: "zoom",
    value: function zoom() {
      var viewer = this,
          app = this.app;

      if (app.zoomChanged) {
        var origin = app.dimensions.origin,
            dz = app.zoomValueChange; //fix zoom to previous center

        if (app.zoomValue === 1) {
          viewer.left = 0;
          viewer.top = 0;
        } else {
          viewer.left *= dz;
          viewer.top *= dz;

          if (!app.viewer.zoomCenter) {
            app.viewer.zoomCenter = {
              x: origin.x,
              y: origin.y
            };
          }

          var pointOld = {
            raw: app.viewer.zoomCenter
          },
              pointNew = {
            raw: {}
          }; // pointOld.raw.x -= app.dimensions.offset.left / 2;
          //fix zoom to previous pointer

          var dx = (pointOld.raw.x - origin.x) * dz,
              dy = (pointOld.raw.y - origin.y) * dz;
          pointNew.raw.x = origin.x + dx;
          pointNew.raw.y = origin.y + dy;
          viewer.startPoint = pointNew;
          viewer.pan(pointOld);
          viewer.startPoint = null;
        }
      }

      app.viewer.zoomCenter = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.leftPage.resetTexture();
      this.rightPage.resetTexture();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var app = this.app,
          viewer = app.viewer;
      var basePageNumber = viewer.getBasePage(),
          isLeftBase = viewer.isBooklet ? !app.isRTL : app.isRTL,
          basePage = isLeftBase ? this.rightPage : this.leftPage,
          nextPage = isLeftBase ? this.leftPage : this.rightPage;
      basePage.pageNumber = basePageNumber;
      nextPage.pageNumber = basePageNumber + 1;
      basePage.updateCSS({
        display: basePageNumber === 0 ? "none" : "block"
      });
      nextPage.updateCSS({
        display: nextPage.pageNumber > app.pageCount || viewer.isBooklet ? "none" : "block"
      });
    }
  }, {
    key: "updateCenter",
    value: function updateCenter() {
      var viewer = this;
      if (viewer === null || viewer.app.viewer === null) return;
      var centerShift = viewer.app.viewer.centerShift,
          isRTL = viewer.app.viewer.isRTL,
          width = !isRTL && viewer.app.currentPageNumber > 1 || isRTL && viewer.app.currentPageNumber < viewer.app.pageCount ? viewer.leftSheetWidth : viewer.rightSheetWidth;
      var end = centerShift * width / 2;
      viewer.wrapper[0].style.left = end + "px";
    }
  }, {
    key: "isDoubleInternalPage",
    value: function isDoubleInternalPage(pageNumber) {
      return this.app.viewer.isDoubleInternalPage(pageNumber);
    }
  }, {
    key: "pagesReady",
    value: function pagesReady() {
      if (this.app.zoomValue !== 1) this.app.viewer.updatePendingStatusClass(false);

      if (this.app.options.flipbookFitPages === false) {
        var availableWidth = this.app.viewer.availablePageWidth(),
            availableHeight = this.app.viewer.availablePageHeight();
        var basePage = this.app.viewer.getBasePage();
        var leftViewPort = this.leftViewport = this.app.viewer.getViewPort(basePage + (this.app.viewer.isBooklet ? 0 : this.app.viewer.isRTL ? 1 : 0)),
            rightViewPort = this.rightViewPort = this.app.viewer.getViewPort(basePage + (this.app.viewer.isBooklet ? 0 : this.app.viewer.isRTL ? 0 : 1));

        if (leftViewPort) {
          var leftDimen = utils.contain(leftViewPort.width, leftViewPort.height, availableWidth, availableHeight);
          this.leftSheetWidth = Math.floor(leftDimen.width);
          this.leftSheetHeight = Math.floor(leftDimen.height);
        }

        this.leftSheetTop = (availableHeight - this.leftSheetHeight) / 2;

        if (rightViewPort) {
          var rightDimen = utils.contain(rightViewPort.width, rightViewPort.height, availableWidth, availableHeight);
          this.rightSheetWidth = Math.floor(rightDimen.width);
          this.rightSheetHeight = Math.floor(rightDimen.height);
        }

        this.rightSheetTop = (availableHeight - this.rightSheetHeight) / 2;
        this.leftPage.element.height(Math.floor(this.leftSheetHeight)).width(Math.floor(this.leftSheetWidth)).css({
          transform: 'translateY(' + Math.floor(this.leftSheetTop) + 'px)'
        });
        this.rightPage.element.height(Math.floor(this.rightSheetHeight)).width(Math.floor(this.rightSheetWidth)).css({
          transform: 'translateY(' + Math.floor(this.rightSheetTop) + 'px)'
        });
      }
    }
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {
      var page = this.getPageByNumber(param.pageNumber); //page.element.toggleClass("df-odd", param.oddPage === true);

      this.pagesReady();
    }
  }]);

  return ZoomViewer;
}(_base_viewer_js__WEBPACK_IMPORTED_MODULE_1__[/* BaseViewer */ "a"]);

var BookSheet = /*#__PURE__*/function () {
  function BookSheet(options) {
    _classCallCheck(this, BookSheet);

    this.parentElement = options.parentElement;
    this.isFlipping = false;
    this.isOneSided = false;
    this.viewer = options.viewer;
    this.frontPage = null;
    this.backPage = null;
    this.animateToReset = null;
  }

  _createClass(BookSheet, [{
    key: "init",
    value: function init() {}
  }, {
    key: "flip",
    value: function flip() {}
  }, {
    key: "frontImage",
    value: function frontImage(param) {
      this.frontPage.loadTexture({
        texture: param.texture,
        callback: param.callback
      });
    }
  }, {
    key: "backImage",
    value: function backImage(param) {
      this.backPage.loadTexture({
        texture: param.texture,
        callback: param.callback
      });
    }
  }, {
    key: "resetTexture",
    value: function resetTexture() {
      this.frontPage.resetTexture();
      this.backPage.resetTexture();
    }
  }, {
    key: "reset",
    value: function reset() {
      var sheet = this;
      sheet.animateToReset = null;
      sheet.isFlipping = false; // page.element[0].style.opacity = 1;

      sheet.currentTween = null;
      sheet.pendingPoint = null;
      sheet.magnetic = false;
      sheet.skipFlip = true;
      sheet.animateToReset = null;
      sheet.viewer.dragPage = null;
      sheet.viewer.flipPage = null;
      sheet.viewer.corner = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER.NONE;
    }
  }]);

  return BookSheet;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PDFLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PDFDocumentProvider; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* globals requirejs, jQuery*/

var utils = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].utils;
/**
 * @typedef {Object} PDFDocument
 * @property {Function} getPage - Gets the Page
 * @property {Function} numPages - Total number of pages
 * @property {Function} getPageIndex - Gets the Page Index
 * @property {Function} getOutline - Gets the Outline
 * @property {Function} getDestination - Gets the Destination
 */

/**
 * @typedef {Object} PDFPage
 * @property {Function} getViewport - Gets the Viewport
 * @property {Function} getAnnotations - Gets the Annotation
 */
//region Link Service

/**
 * Performs navigation functions inside PDF, such as opening specified page,
 * or destination.
 * @class
 */

var PDFLinkService = /*#__PURE__*/function () {
  /**
   * @constructs PDFLinkService
   */
  function PDFLinkService() {
    _classCallCheck(this, PDFLinkService);

    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfApp = null;
    this.pdfHistory = null;
    this.externalLinkRel = null;
    this.externalLinkEnabled = true;
    this._pagesRefCache = null;
  }

  _createClass(PDFLinkService, [{
    key: "dispose",
    value: function dispose() {
      this.baseUrl = null;
      this.pdfDocument = null;
      this.pdfApp = null;
      this.pdfHistory = null;
      this._pagesRefCache = null;
    }
  }, {
    key: "setDocument",
    value: function setDocument(pdfDocument, baseUrl) {
      this.baseUrl = baseUrl;
      this.pdfDocument = pdfDocument;
      this._pagesRefCache = Object.create(null);
    }
  }, {
    key: "setViewer",
    value: function setViewer(pdfApp) {
      this.pdfApp = pdfApp;
      this.externalLinkTarget = pdfApp.options.linkTarget;
    }
  }, {
    key: "setHistory",
    value: function setHistory(pdfHistory) {
      this.pdfHistory = pdfHistory;
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(dest) {
      //Deprecated in pdf.js 2.7.570
      this.goToDestination(dest);
    }
    /**
     * Wrapper around the `addLinkAttributes`-function in the API.
     * @param {HTMLAnchorElement} link
     * @param {string} url
     * @param {boolean} [newWindow]
     */

  }, {
    key: "addLinkAttributes",
    value: function addLinkAttributes(link, url) {
      var newWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /*    pdfjsLib.addLinkAttributes(link, {
            url,
            target: this.externalLinkTarget,
            rel: this.externalLinkRel,
            enabled: this.externalLinkEnabled,
          });*/
      var target = this.externalLinkTarget,
          rel = this.externalLinkRel,
          enabled = this.externalLinkEnabled;

      if (!url || typeof url !== "string") {
        throw new Error('A valid "url" parameter must provided.');
      }

      var urlNullRemoved = (0, utils.removeNullCharacters)(url);

      if (enabled) {
        link.href = link.title = urlNullRemoved;
      } else {
        link.href = "";
        link.title = "Disabled: ".concat(urlNullRemoved);

        link.onclick = function () {
          return false;
        };
      }

      var targetStr = "";

      switch (target) {
        case _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.NONE:
          break;

        case _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.SELF:
          targetStr = "_self";
          break;

        case _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.BLANK:
          targetStr = "_blank";
          break;

        case _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.PARENT:
          targetStr = "_parent";
          break;

        case _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.TOP:
          targetStr = "_top";
          break;
      }

      link.target = targetStr;
      link.rel = typeof rel === "string" ? rel : "noopener noreferrer nofollow";
    }
    /**
     * @param dest - The PDF destination object.
     */

  }, {
    key: "goToDestination",
    value: function goToDestination(dest) {
      var destString = '';
      var self = this;

      var goToDestination = function goToDestination(destRef) {
        utils.log("Requested: ", destRef); // dest array looks like that: <page-ref> </XYZ|FitXXX> <args..>

        var pageNumber = destRef instanceof Object ? self._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] : destRef + 1;

        if (pageNumber) {
          pageNumber = self.pdfApp.viewer.getViewerPageNumber(pageNumber);

          if (pageNumber > self.pdfApp.pageCount) {
            pageNumber = self.pdfApp.pageCount;
          }

          utils.log("Loading for:", destRef, " at page ", pageNumber);

          if (self.pdfApp.requestDestRefKey === destRef.num + ' ' + destRef.gen + ' R') {
            self.pdfApp.gotoPage(pageNumber);

            if (self.pdfHistory) {
              // Update the browsing history.
              self.pdfHistory.push({
                dest: dest,
                hash: destString,
                page: pageNumber
              });
            }
          } else {
            utils.log("Expired Request for ", pageNumber, " with ", destRef);
          }
        } else {
          self.pdfApp.container.addClass('df-fetch-pdf');
          self.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
            var pageNum = pageIndex + 1;
            var cacheKey = destRef.num + ' ' + destRef.gen + ' R';
            self._pagesRefCache[cacheKey] = pageNum;
            goToDestination(destRef);
          });
        }
      };

      var destinationPromise;

      if (typeof dest === 'string') {
        destString = dest;
        destinationPromise = this.pdfDocument.getDestination(dest);
      } else {
        destinationPromise = Promise.resolve(dest);
      }

      destinationPromise.then(function (destination) {
        utils.log("Started:", destination);
        dest = destination;

        if (!(destination instanceof Array)) {
          return; // invalid destination
        }

        self.pdfApp.requestDestRefKey = destination[0].num + ' ' + destination[0].gen + ' R';
        goToDestination(destination[0]);
      });
    }
  }, {
    key: "customNavigateTo",

    /**
     * @param dest - The PDF destination object.
     */
    value: function customNavigateTo(dest) {
      if (dest === '' || dest == null || dest === 'null') return;
      var pageNumber = null;

      if (!isNaN(Math.floor(dest))) {
        pageNumber = dest;
      } else if (typeof dest === 'string') {
        pageNumber = parseInt(dest.replace("#", ""), 10);

        if (isNaN(pageNumber)) {
          window.open(dest, this.pdfApp.options.linkTarget === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].LINK_TARGET.SELF ? "_self" : "_blank");
          return;
        }
      }

      if (pageNumber != null) this.pdfApp.gotoPage(pageNumber);
    }
  }, {
    key: "getDestinationHash",

    /**
     * @param dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
    value: function getDestinationHash(dest) {
      if (typeof dest === 'string') {
        return this.getAnchorUrl('#' + escape(dest));
      }

      if (dest instanceof Array) {
        var destRef = dest[0]; // see navigateTo method for dest format

        var pageNumber = destRef instanceof Object ? this._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] : destRef + 1;

        if (pageNumber) {
          var pdfOpenParams = this.getAnchorUrl('#page=' + pageNumber);
          var destKind = dest[1];

          if (_typeof(destKind) === 'object' && 'name' in destKind && destKind.name === 'XYZ') {
            var scale = dest[4] || this.pdfApp.pageScaleValue;
            var scaleNumber = parseFloat(scale);

            if (scaleNumber) {
              scale = scaleNumber * 100;
            }

            pdfOpenParams += '&zoom=' + scale;

            if (dest[2] || dest[3]) {
              pdfOpenParams += ',' + (dest[2] || 0) + ',' + (dest[3] || 0);
            }
          }

          return pdfOpenParams;
        }
      }

      return this.getAnchorUrl('');
    }
  }, {
    key: "getCustomDestinationHash",

    /**
     * @param dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
    value: function getCustomDestinationHash(dest) {
      //if (typeof dest === 'string') {
      return '#' + escape(dest); //}
      //return this.getAnchorUrl('');
    }
  }, {
    key: "getAnchorUrl",

    /**
     * Prefix the full url on anchor links to make sure that links are resolved
     * relative to the current URL instead of the one defined in <base href>.
     * @param {String} anchor The anchor hash, including the #.
     * @returns {string} The hyperlink to the PDF object.
     */
    value: function getAnchorUrl(anchor) {
      return (this.baseUrl || '') + anchor;
    }
  }, {
    key: "executeNamedAction",

    /**
     * @param {string} action
     */
    value: function executeNamedAction(action) {
      // See PDF reference, table 8.45 - Named action
      switch (action) {
        case 'GoBack':
          if (this.pdfHistory) {
            this.pdfHistory.back();
          }

          break;

        case 'GoForward':
          if (this.pdfHistory) {
            this.pdfHistory.forward();
          }

          break;

        case 'NextPage':
          this.page++;
          break;

        case 'PrevPage':
          this.page--;
          break;

        case 'LastPage':
          this.page = this.pagesCount;
          break;

        case 'FirstPage':
          this.page = 1;
          break;

        default:
          break;
        // No action according to spec
      }

      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('namedaction', true, true, {
        action: action
      });
      this.pdfApp.container.dispatchEvent(event);
    }
  }, {
    key: "cachePageRef",
    // noinspection JSUnusedGlobalSymbols

    /**
     * @param {number} pageNum - page number.
     * @param {Object} pageRef - reference to the page.
     */
    value: function cachePageRef(pageNum, pageRef) {
      var refStr = pageRef.num + ' ' + pageRef.gen + ' R';
      this._pagesRefCache[refStr] = pageNum;
    }
  }, {
    key: "pagesCount",

    /**
     * @returns {number}
     */
    get: function get() {
      return this.pdfDocument.numPages;
    }
  }, {
    key: "page",

    /**
     * @returns {number}
     */
    get: function get() {
      return this.pdfApp.currentPageNumber;
    },

    /**
     * @param {number} value
     */
    set: function set(value) {
      this.pdfApp.gotoPage(value);
    }
  }]);

  return PDFLinkService;
}();

var DocumentProvider = /*#__PURE__*/function () {
  function DocumentProvider(props, context) {
    _classCallCheck(this, DocumentProvider);

    this.props = props;
    this.app = context;
    this.textureCache = [];
    this.pageCount = 0;
    this.numPages = 0;
    this.outline = [];
    this.viewPorts = [];
    this.requestedPages = '';
    this.requestIndex = 0;
    this.pagesToClean = [];
    this.coverPage = undefined;
    this.pageSize = this.app.options.pageSize;
    this._page1Pass = false;
    this._page2Pass = false;
  }

  _createClass(DocumentProvider, [{
    key: "finalize",
    value: function finalize() {}
  }, {
    key: "setCache",
    value: function setCache(index, src, cacheIndexSize) {
      var provider = this;
      var cacheIndex = cacheIndexSize;

      if (cacheIndexSize) {
        if (provider.textureCache[cacheIndex] === undefined) provider.textureCache[cacheIndex] = [];
        provider.textureCache[cacheIndex][index] = src;
      }
    }
  }, {
    key: "getCache",
    value: function getCache(index, textureIndex) {
      var provider = this;
      return provider.textureCache[textureIndex] === undefined ? undefined : provider.textureCache[textureIndex][index];
    }
  }, {
    key: "_isValidPage",
    value: function _isValidPage(pageNumber) {
      return pageNumber > 0 && pageNumber <= this.pageCount;
    }
  }, {
    key: "processPage",
    value: function processPage(param) {}
  }, {
    key: "cleanUpPages",
    value: function cleanUpPages() {}
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {}
  }, {
    key: "processAnnotations",
    value: function processAnnotations() {}
  }, {
    key: "processTextContent",
    value: function processTextContent() {}
  }, {
    key: "loadDocument",
    value: function loadDocument() {}
  }, {
    key: "pagesLoaded",
    value: function pagesLoaded() {
      var provider = this;

      if (provider._page1Pass && provider._page2Pass) {
        provider.app.viewer.checkDocumentPageSizes();
        provider.finalize();
      }
    }
  }, {
    key: "_documentLoaded",
    value: function _documentLoaded() {
      this.finalizeOutLine(); //checks so that new providers fulfill all the required steps

      if (this.app && this.app.dimensions && this.app.dimensions.pageFit === undefined) utils.log("Provider needs to initialize page properties for the app");

      this.app._documentLoaded();
    }
  }, {
    key: "finalizeOutLine",
    value: function finalizeOutLine() {
      if (this.app === null || this.app.options === null) return;
      var outline = this.app.options.outline,
          provider = this;

      if (outline) {
        for (var count = 0; count < outline.length; count++) {
          outline[count].custom = true;
          provider.outline.push(outline[count]);
        }
      }
    }
  }]);

  return DocumentProvider;
}();

var PDFDocumentProvider = /*#__PURE__*/function (_DocumentProvider) {
  _inherits(PDFDocumentProvider, _DocumentProvider);

  var _super = _createSuper(PDFDocumentProvider);

  function PDFDocumentProvider(props, context) {
    var _this;

    _classCallCheck(this, PDFDocumentProvider);

    _this = _super.call(this, props, context);

    var app = _this.app,
        provider = _assertThisInitialized(_this);

    provider.pdfDocument = undefined;
    provider._page2Ratio = undefined;

    function getPDFScript(callback) {
      if (typeof pdfjsLib === "undefined") {
        app.updateInfo(app.options.text.loading + " PDF Service ...");
        utils.getScript(app.options.pdfjsSrc + "?ver=" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].version, function () {
          if (typeof define === 'function' && __webpack_require__(6) && window.requirejs) {
            app.updateInfo(app.options.text.loading + " PDF Service (require) ...");

            window.require.config({
              paths: {
                'pdfjs-dist/build/pdf.worker': app.options.pdfjsWorkerSrc.replace(".js", "")
              }
            });

            window.require(['pdfjs-dist/build/pdf'], function (pdfjsLib) {
              window.pdfjsLib = pdfjsLib;
              getWorkerScript(callback);
            });
          } else {
            getWorkerScript(callback);
          }
        }, function () {
          app.updateInfo("Unable to load PDF service..");
          provider.dispose();
        });
      } else {
        if (typeof callback === "function") callback();
      }
    }

    function getWorkerScript(callback) {
      app.options.pdfjsWorkerSrc += "?ver=" + _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].version;
      app.updateInfo(app.options.text.loading + " PDF Worker ...");
      var tmp = document.createElement('a');
      tmp.href = app.options.pdfjsWorkerSrc;

      if (tmp.hostname !== window.location.hostname && _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"]['loadCorsPdfjsWorker'] === true) {
        app.updateInfo(app.options.text.loading + " PDF Worker CORS ...");
        jQuery.ajax({
          url: app.options.pdfjsWorkerSrc,
          cache: true,
          success: function success(data) {
            app.options.pdfjsWorkerSrc = utils.createObjectURL(data, "text/javascript");
            if (typeof callback === "function") callback();
          }
        });
      } else {
        if (typeof callback === "function") callback();
      }
    }

    getPDFScript(function () {
      pdfjsLib.GlobalWorkerOptions.workerSrc = app.options.pdfjsWorkerSrc;
      pdfjsLib.canvasWillReadFrequently = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.canvasWillReadFrequently;
      provider.loadDocument();
    });
    return _this;
  }

  _createClass(PDFDocumentProvider, [{
    key: "dispose",
    value: function dispose() {
      if (this.pdfDocument) this.pdfDocument.destroy();
      this.linkService = utils.disposeObject(this.linkService);
      if (this.pdfLoadProgress) this.pdfLoadProgress.destroy();
      this.pdfLoadProgress = null;
      this.pdfDocument = null;
    }
  }, {
    key: "loadDocument",
    value: function loadDocument() {
      var app = this.app,
          options = this.app.options,
          provider = this;
      var parameters = options.pdfParameters || {};
      parameters.url = utils.httpsCorrection(parameters.url || options.source);
      parameters.rangeChunkSize = options.rangeChunkSize;
      parameters.cMapPacked = true;
      parameters.disableAutoFetch = options.disableAutoFetch;
      parameters.disableStream = options.disableStream;
      parameters.disableRange = options.disableRange === true;
      parameters.disableFontFace = options.disableFontFace;
      parameters.cMapUrl = options.cMapUrl;
      parameters.imagesLocation = options.imagesLocation;
      parameters.imageResourcesPath = options.imageResourcesPath; //region Loading Document

      if (!parameters.url && !parameters.data && !parameters.range) {
        //Display No PDF file found error
        app.updateInfo("ERROR : No PDF File provided! ", "df-error");
        return;
      } // app.updateInfo(app.options.text.loading + " PDF ...");


      var pdfLoadProcess = provider.pdfLoadProgress = pdfjsLib.getDocument(parameters);

      pdfLoadProcess._worker.promise.then(function (a) {
        app.updateInfo(app.options.text.loading + " PDF ...");
      });

      pdfLoadProcess.promise.then(
      /**
       * @constructs pdfLoaded
       * @param {PDFDocument} pdf
       */
      function pdfLoaded(pdf) {
        provider.pdfDocument = pdf;
        pdf.getPage(1).then(function (page) {
          var _options$maxTextureSi;

          //set coverPage details
          provider.coverPage = page;

          var _coverViewPort = provider.coverPage.viewPort = page.getViewport({
            scale: 1,
            rotation: page._pageInfo.rotate + app.options.pageRotation
          });

          var _coverPageRatio = provider.coverPage.pageRatio = _coverViewPort.width / _coverViewPort.height;

          var _isCoverWide = _coverPageRatio > 1;

          provider.viewPorts[1] = _coverViewPort;
          app.dimensions.coverPage = {
            ratio: _coverPageRatio,
            viewPort: _coverViewPort,
            width: _coverViewPort.width,
            height: _coverViewPort.height
          };
          app.dimensions.maxTextureHeight = ((_options$maxTextureSi = options.maxTextureSize) !== null && _options$maxTextureSi !== void 0 ? _options$maxTextureSi : 4096) / (!_isCoverWide ? 1 : _coverPageRatio);
          app.dimensions.autoHeightRatio = 1 / _coverPageRatio;
          provider.pageCount = pdf.numPages;
          provider.numPages = pdf.numPages;
          provider._page1Pass = true;
          provider.pagesLoaded();
        }); //check if internal pages are of double sizes.

        if (pdf.numPages > 1 && app.checkSecondPage === true) {
          /**
           * @constructs checkInternalPages
           * @param {PDFPageProxy} page
           */
          pdf.getPage(2).then(function checkInternalPages(page) {
            var _page2ViewPort = page.getViewport({
              scale: 1,
              rotation: page._pageInfo.rotate + app.options.pageRotation
            });

            provider._page2Ratio = _page2ViewPort.width / _page2ViewPort.height;
            provider.viewPorts[2] = _page2ViewPort;
            provider._page2Pass = true;
            provider.pagesLoaded();
          });
        } else {
          provider._page2Pass = true;
          provider.pagesLoaded();
        }
      })["catch"](function (error) {
        if (app !== null && app.options != null) {
          var _app$options;

          //Find errors condition
          var cors = "",
              _a = document.createElement('a');

          _a.href = app.options.source;
          if (_a.hostname !== window.location.hostname && _a.href.indexOf("file://") === -1 && !utils.isChromeExtension() && _a.href.indexOf("blob:") === -1) cors = "<strong>CROSS ORIGIN!! </strong>";
          var fileName = ((_app$options = app.options) === null || _app$options === void 0 ? void 0 : _app$options.fileName) || _a.href; //Display error reason

          app.updateInfo(cors + "<strong>Error: Cannot access file!  </strong>" + unescape(fileName) + "<br><br>" + error.message, "df-error");
          console.log(error);
          app.container.removeClass('df-loading').addClass("df-error");
          provider.dispose();
        }
      });

      pdfLoadProcess.onProgress = function getDocumentProgress(progressData) {
        if (app !== null) {
          var percentage = 100 * progressData.loaded / progressData.total;

          if (isNaN(percentage)) {
            //in case divided by zero/undefined -- don't have total value
            if (progressData && progressData.loaded) {
              app.updateInfo(app.options.text.loading + " PDF " + (Math.ceil(progressData.loaded / 10000) / 100).toFixed(2).toString() + "MB ...");
            } else {
              app.updateInfo(app.options.text.loading + " PDF ...");
            }
          } else {
            app.updateInfo(app.options.text.loading + " PDF " + Math.ceil(percentage).toString().split(".")[0] + "% ...");
          }

          if (app.finalizeRequested === true) {// provider.pdfFetchStarted();
          }
        }
      }; //endregion

    }
  }, {
    key: "pdfFetchStarted",
    value: function pdfFetchStarted() {
      this.pdfFetchStatusCount = 0;
      this.app.container.addClass('df-fetch-pdf');
      this.pdfFetchStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.COUNT;
    }
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {
      return;
      var REQUEST_STATUS = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS;

      if (this.pdfFetchStatus === REQUEST_STATUS.ON) {
        this.app.container.removeClass('df-fetch-pdf');
        this.pdfFetchStatus = REQUEST_STATUS.OFF;
      } else if (this.pdfFetchStatus === REQUEST_STATUS.COUNT) {
        this.pdfFetchStatusCount++;

        if (this.pdfFetchStatusCount > 30) {
          this.pdfFetchStatusCount = 0;
          this.pdfFetchStatus = REQUEST_STATUS.ON;
        }
      }
    }
  }, {
    key: "finalize",
    value: function finalize() {
      var app = this.app,
          provider = this;
      if (app === null || app.options === null) return;
      provider.linkService = new PDFLinkService();
      provider.linkService.setDocument(provider.pdfDocument, null);
      provider.linkService.setViewer(app);
      provider.pdfDocument.getOutline().then(function (pdfOutline) {
        if (app.options.overwritePDFOutline === true) {
          pdfOutline = [];
        }

        pdfOutline = pdfOutline || [];
        provider.outline = pdfOutline;

        provider._documentLoaded();
      });
    }
  }, {
    key: "processPage",
    value: function processPage(param) {
      var app = this.app,
          provider = this,
          pageNumber = param.pageNumber,
          startTime = performance.now(); //region determine page to render

      var pdfPageNumberToRender = app.viewer.getDocumentPageNumber(pageNumber); //endregion

      utils.log("Requesting PDF Page:" + pdfPageNumberToRender);
      provider.pdfDocument.getPage(pdfPageNumberToRender).then(function (pdfPage) {
        if (!provider.viewPorts[pageNumber]) {
          param.isFreshPage = true;
          provider.viewPorts[pageNumber] = pdfPage.getViewport({
            scale: 1,
            rotation: pdfPage._pageInfo.rotate + app.options.pageRotation
          });
        } //region Render the Page


        var renderContext = app.viewer.getRenderContext(pdfPage, param);

        if (param.isFreshPage) {
          var _app$viewer$getPageBy;

          (_app$viewer$getPageBy = app.viewer.getPageByNumber(param.pageNumber)) === null || _app$viewer$getPageBy === void 0 ? void 0 : _app$viewer$getPageBy.changeTexture(param.pageNumber, renderContext.canvas.height);
        }

        utils.log("Page " + pageNumber + " rendering - " + renderContext.canvas.width + "x" + renderContext.canvas.height);
        param.trace = provider.requestIndex++;
        provider.requestedPages += "," + param.trace + "[" + pdfPageNumberToRender + "|" + renderContext.canvas.height + "]";
        pdfPage.cleanupAfterRender = false; //needs to disable the cleanup after render code in pdf.js

        var pageRendering = pdfPage.render(renderContext);
        pageRendering.promise.then(function () {
          app.applyTexture(renderContext.canvas, param);

          if (app.options.cleanupAfterRender === true) {
            var checkString = "," + param.trace + "[" + pdfPageNumberToRender + "|" + renderContext.canvas.height + "]";
            utils.log("CleanUp Requesting for (" + pageNumber + ") actual " + pdfPageNumberToRender);

            if (provider.requestedPages.indexOf(checkString) > -1) {
              provider.requestedPages = provider.requestedPages.replace(checkString, "");

              if (provider.requestedPages.indexOf("[" + pdfPageNumberToRender + "|") == -1) {
                utils.log("CleanUp Passed for (" + pageNumber + ") actual " + pdfPageNumberToRender);
                provider.pagesToClean.push(pdfPage);
                if (provider.pagesToClean.length > 0) provider.cleanUpPages();
              } else {
                utils.log("CleanUp Cancelled waiting for (" + pageNumber + ") actual " + pdfPageNumberToRender + " : " + provider.requestedPages);
              }
            }
          }

          renderContext = null;
          utils.log("Rendered " + pageNumber + " in " + (performance.now() - startTime) + " milliseconds");
        })["catch"](function (error) {
          console.log(error);
        }); //endregion
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "cleanUpPages",
    value: function cleanUpPages() {
      while (this.pagesToClean.length > 0) {
        var page = this.pagesToClean.splice(-1)[0];
        utils.log("Cleanup Completed for PDF page: " + (page._pageIndex + 1));
        page.cleanup();
      }
    }
  }]);

  return PDFDocumentProvider;
}(DocumentProvider);

_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].providers['pdf'] = PDFDocumentProvider;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlipBook3D; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _flipbook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* globals jQuery, pdfjsLib,THREE  */



var DV = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"];
var utils = DV.utils;

var BookSheet3D = /*#__PURE__*/function (_BookSheet) {
  _inherits(BookSheet3D, _BookSheet);

  var _super = _createSuper(BookSheet3D);

  function BookSheet3D(options) {
    var _this;

    _classCallCheck(this, BookSheet3D);

    _this = _super.call(this, options);
    _this.flexibility = options.flexibility;
    _this.sheetAngle = 180;
    _this.curveAngle = 0;
    _this.parent3D = options.parent3D;
    _this.segments = options.segments || 50;
    _this.width = options.width || 100;
    _this.height = options.height || 100;
    _this.depth = options.depth || 0.5; //is overridden from options

    _this.matColor = "white";

    _this.init();

    _this.bumpScale = [0, 0, 0, 0, 1, 1];
    return _this;
  }

  _createClass(BookSheet3D, [{
    key: "init",
    value: function init() {
      var sheet = this;
      sheet.element = new MOCKUP.Paper({
        parent3D: sheet.parent3D,
        segments: sheet.segments,
        depth: sheet.depth,
        height: sheet.height,
        width: sheet.width,
        flatShading: sheet.flexibility === 0 ? true : false
      });
      sheet.element.sheet = sheet;
      sheet.frontPage = new Page3D({
        sheet: sheet,
        face: 5
      });
      sheet.backPage = new Page3D({
        sheet: sheet,
        face: 4
      });
      sheet.reset();
      sheet.updateAngle(); //sheet.element.loadBump("http://localhost/tmp/cardboard.png");
    }
  }, {
    key: "setMatColor",
    value: function setMatColor(val, face) {
      this.matColor = new THREE.Color(val);

      if (face === void 0) {
        for (var i = 0; i < 6; i++) {
          this.element.material[i].color = this.matColor;
        }
      } else {
        this.element.material[face].color = this.matColor;
      }
    }
  }, {
    key: "getBumpScale",
    value: function getBumpScale(face) {
      return this.bumpScale[face];
    }
  }, {
    key: "resetMatColor",
    value: function resetMatColor(face, applyMatColor) {
      this.element.material[face].color = applyMatColor ? this.matColor : MOCKUP.WHITE_COLOR;
    }
  }, {
    key: "frontImage",
    value: function frontImage(texture, callback) {
      this.element.frontImage(texture, callback);
    }
  }, {
    key: "backImage",
    value: function backImage(texture, callback) {
      this.element.backImage(texture, callback);
    }
  }, {
    key: "updateAngle",
    value: function updateAngle() {
      var sheet = this;
      if (this.viewer === undefined || this.viewer === null) return;
      var flexibility = sheet.isHard === true ? 0 : sheet.flexibility;
      var width = this.width * (1 - Math.sin(flexibility / 2 * (flexibility / 2)) / 2) - this.width * flexibility / 20;
      this.element.scale.y = this.height / this.element.geometry.parameters.height; // this.element.scale.x = this.width / this.element.geometry.parameters.width;
      // this.element.scale.z = 1;

      var segments = sheet.segments;
      var foldCount = 1;
      var foldWidth = width / foldCount; //fold-width

      var curveHandlePoint = foldWidth * flexibility; //bend control point distance

      var curveWidth = foldWidth; //curve width still not perfect
      //control pointsFront are a list of at least (degree+1)

      var curvesFront = [];
      var curvesBack = [];
      var verticesFront = [];
      var verticesBack = [];
      var pointsFront = [];
      var pointsBack = [];
      var sheetDepth = sheet.depth; // distance Bias
      //calculate folds controls points

      var sum = 0,
          distances = [];
      distances.push(sum); // let test = false;
      // region CalcPoints

      pointsFront[0] = [];
      pointsBack[0] = [];
      var sheetAngle = sheet.sheetAngle * Math.PI / 180; // the angle at which the sheet will turn

      var curveAngle = sheet.isHard === true ? sheetAngle : sheet.curveAngle * Math.PI / 180; // the angle at which curve will form due to curve handle point

      var pointAngle = sheet.sheetAngle * Math.PI / 180;
      var pointAngleB = pointAngle - Math.PI / 2,
          zShift = Math.sin(pointAngleB) * sheetDepth / 2;
      pointsFront[0][0] = pointsFront[0][1] = new THREE.Vector3(-curveWidth * Math.cos(sheetAngle), 0, Math.sin(sheetAngle) * curveWidth - zShift);
      pointsBack[0][0] = pointsBack[0][1] = new THREE.Vector3(pointsFront[0][0].x - Math.cos(pointAngleB) * sheetDepth, 0, pointsFront[0][0].z + zShift * 2);
      pointsFront[0][1] = new THREE.Vector3(-curveWidth / 2 * Math.cos(curveAngle), 0, curveWidth / 2 * Math.sin(curveAngle) - zShift);
      pointsBack[0][1] = new THREE.Vector3(pointsFront[0][1].x - Math.cos(pointAngleB) * sheetDepth, 0, pointsFront[0][1].z + zShift * 2);
      pointAngle = (45 + sheet.sheetAngle / 2) * Math.PI / 180;
      pointsFront[0][2] = new THREE.Vector3(-Math.cos(pointAngle) * curveHandlePoint / 2, 0, Math.sin(pointAngle) * curveHandlePoint - zShift);
      pointsBack[0][2] = new THREE.Vector3(pointsFront[0][2].x + Math.cos(pointAngleB) * sheetDepth, 0, pointsFront[0][2].z + zShift * 2);
      if (Math.abs(pointsBack[0][2].x - 0) < 0.0005) pointsBack[0][2].x = 0;
      pointsFront[0][3] = new THREE.Vector3(0, 0, -zShift);
      pointsBack[0][3] = new THREE.Vector3(pointsFront[0][3].x - Math.cos(pointAngleB) * sheetDepth, 0, pointsFront[0][3].z + zShift * 2); //pointsFront[0][3];

      if (Math.abs(pointsBack[0][3].x - 0) < 0.0005) pointsBack[0][3].x = 0; //endregion

      for (var curveCount = 0; curveCount < foldCount; curveCount++) {
        var length = Math.max(sheet.segments - 1, 1);
        curvesFront[curveCount] = new THREE.CubicBezierCurve3(pointsFront[curveCount][0], pointsFront[curveCount][1], pointsFront[curveCount][2], pointsFront[curveCount][3]);
        verticesFront[curveCount] = curvesFront[curveCount].getPoints(length);

        if (length > 2) {
          verticesFront[curveCount].push(new THREE.Vector3().copy(verticesFront[curveCount][length]));
        }

        var current = void 0,
            last = verticesFront[curveCount][0];

        for (var vcount = 1; vcount < verticesFront[curveCount].length; vcount++) {
          current = verticesFront[curveCount][vcount];
          sum += current.distanceTo(last);
          distances.push(sum);
          last = current;
        }

        curvesBack[curveCount] = new THREE.CubicBezierCurve3(pointsBack[curveCount][0], pointsBack[curveCount][1], pointsBack[curveCount][2], pointsBack[curveCount][3]);
        verticesBack[curveCount] = curvesBack[curveCount].getPoints(length);

        if (length > 2) {
          verticesBack[curveCount].push(new THREE.Vector3().copy(verticesBack[curveCount][length]));
        }
      }
      /*var test = true;
      if (test === true) {
        if (sheet.handlesf === void 0) {
            let material = new THREE.LineBasicMaterial({color: 0x00ff00});
            let geometry = new THREE.Geometry();
          geometry.vertices.push(
            pointsFront[0][0], pointsFront[0][1], pointsFront[0][2], pointsFront[0][3]
          );
            sheet.handlesf = new THREE.Line(geometry, material);
          sheet.element.add(sheet.handlesf);
          }
        else {
          let hvs = sheet.handlesf.geometry.vertices;
          for (let hcount = 0; hcount < hvs.length; hcount++) {
            hvs[hcount] = pointsFront[0][hcount];
          }
          sheet.handlesf.geometry.verticesNeedUpdate = true;
        }
        if (sheet.handlesb === void 0) {
            let material = new THREE.LineBasicMaterial({color: 0x0000ff});
            let geometry = new THREE.Geometry();
          geometry.vertices.push(
            pointsBack[0][0], pointsBack[0][1], pointsBack[0][2], pointsBack[0][3]
          );
            sheet.handlesb = new THREE.Line(geometry, material);
          sheet.element.add(sheet.handlesb);
          }
        else {
          let hvs = sheet.handlesb.geometry.vertices;
          for (let hcount = 0; hcount < hvs.length; hcount++) {
            hvs[hcount] = pointsBack[0][hcount];
          }
          sheet.handlesb.geometry.verticesNeedUpdate = true;
        }
      }
      */


      var bodyG = sheet.element.geometry;

      if (bodyG.attributes !== void 0) {
        //5 segments have 56 vertices

        /*
        * 5 segments have 56 vertices
        * 8 are side vertices
        * remaining 48 in 4 faces
        * each 12 vertices
        *rowvertices = segments + 1
        * 1,7   -   2,8   -   3,9   -   4,10  -   5,11  -   6,12    x + rowvertices*0 + count, x + rowvertices*1 + count
        * 13,19 -   14,20 -   15,21 -   16,22 -   17,23 -   18,24   x + rowvertices*2 + 1, x + rowvertices*3 + 1
        * 25,31 -   26,32 -   27,33 -   28,34 -   29,35 -   30,36
        * 37,43 -   38,44 -   39,45 -   40,46 -   41,47 -   42,48
        *
        * */
        var positions = bodyG.attributes.position;
        var uvs = bodyG.attributes.uv;
        var rowVertices = segments + 1;
        var offset = 8; //region basic side vertices
        //Update the geometry based on angles

        positions.setZ(0, verticesFront[0][segments].z);
        positions.setZ(2, verticesFront[0][segments].z);
        positions.setX(0, verticesFront[0][segments].x);
        positions.setX(2, verticesFront[0][segments].x); // verts[0].z = verts[2].z = verticesFront[0][segments].z;
        // verts[0].x = verts[2].x = verticesFront[0][segments].x;

        positions.setZ(1, verticesBack[0][segments].z);
        positions.setZ(3, verticesBack[0][segments].z);
        positions.setX(1, verticesBack[0][segments].x);
        positions.setX(3, verticesBack[0][segments].x); // verts[1].z = verts[3].z = verticesBack[0][segments].z;
        // verts[1].x = verts[3].x = verticesBack[0][segments].x;

        positions.setZ(5, verticesFront[0][0].z);
        positions.setZ(7, verticesFront[0][0].z);
        positions.setX(5, verticesFront[0][0].x);
        positions.setX(7, verticesFront[0][0].x); // verts[5].z = verts[7].z = verticesFront[0][0].z;
        // verts[5].x = verts[7].x = verticesFront[0][0].x;

        positions.setZ(4, verticesBack[0][0].z);
        positions.setZ(6, verticesBack[0][0].z);
        positions.setX(4, verticesBack[0][0].x);
        positions.setX(6, verticesBack[0][0].x); // verts[4].z = verts[6].z = verticesBack[0][0].z;
        // verts[4].x = verts[6].x = verticesBack[0][0].x;
        //endregion

        for (var fold = 0; fold < foldCount; fold++) {
          for (var count = 0; count < rowVertices; count++) {
            positions.setZ(offset + rowVertices * 0 + count, verticesFront[0][count].z);
            positions.setX(offset + rowVertices * 0 + count, verticesFront[0][count].x);
            positions.setZ(offset + rowVertices * 1 + count, verticesBack[0][count].z);
            positions.setX(offset + rowVertices * 1 + count, verticesBack[0][count].x);
            positions.setZ(offset + rowVertices * 2 + count, verticesFront[0][count].z);
            positions.setX(offset + rowVertices * 2 + count, verticesFront[0][count].x);
            positions.setZ(offset + rowVertices * 3 + count, verticesBack[0][count].z);
            positions.setX(offset + rowVertices * 3 + count, verticesBack[0][count].x);
            positions.setZ(offset + rowVertices * 4 + count, verticesFront[0][count].z);
            positions.setX(offset + rowVertices * 4 + count, verticesFront[0][count].x);
            positions.setZ(offset + rowVertices * 5 + count, verticesFront[0][count].z);
            positions.setX(offset + rowVertices * 5 + count, verticesFront[0][count].x);
            uvs.setX(offset + rowVertices * 4 + count, distances[count] / sum);
            uvs.setX(offset + rowVertices * 5 + count, distances[count] / sum);
            positions.setZ(offset + rowVertices * 6 + count, verticesBack[0][segments - count].z);
            positions.setX(offset + rowVertices * 6 + count, verticesBack[0][segments - count].x);
            positions.setZ(offset + rowVertices * 7 + count, verticesBack[0][segments - count].z);
            positions.setX(offset + rowVertices * 7 + count, verticesBack[0][segments - count].x);
            uvs.setX(offset + rowVertices * 6 + count, 1 - distances[segments - count] / sum);
            uvs.setX(offset + rowVertices * 7 + count, 1 - distances[segments - count] / sum); // verts[offset].z = verts[offset + rowVertices * 3].z = verticesBack[0][count].z;
            // verts[offset].x = verts[offset + rowVertices * 3].x = verticesBack[0][count].x;
            // verts[offset + rowVertices].z = verts[offset + rowVertices * 2].z = verticesFront[0][count].z;
            // verts[offset + rowVertices].x = verts[offset + rowVertices * 2].x = verticesFront[0][count].x;
            // offset++;
          }
        }

        bodyG.computeBoundingBox();
        sheet.element.scale.x = curveWidth * foldCount / sum; // sheet.element.scale.z = sheet.element.scale.x;//1 + (Math.cos(pointAngleB) * sheet.element.scale.x / sheet.element.scale.x);

        bodyG.computeBoundingSphere();
        positions.needsUpdate = true;
        uvs.needsUpdate = true;
        bodyG.computeVertexNormals();
      } else {
        var verts = bodyG.vertices;

        var _rowVertices = segments - 1;

        var _offset = 8; //Update the geometry based on angles

        verts[0].z = verts[2].z = verticesFront[0][segments].z;
        verts[0].x = verts[2].x = verticesFront[0][segments].x;
        verts[1].z = verts[3].z = verticesBack[0][segments].z;
        verts[1].x = verts[3].x = verticesBack[0][segments].x;
        verts[5].z = verts[7].z = verticesFront[0][0].z;
        verts[5].x = verts[7].x = verticesFront[0][0].x;
        verts[4].z = verts[6].z = verticesBack[0][0].z;
        verts[4].x = verts[6].x = verticesBack[0][0].x;

        for (var _fold = 0; _fold < foldCount; _fold++) {
          for (var _count = 1; _count < segments; _count++) {
            verts[_offset].z = verts[_offset + _rowVertices * 3].z = verticesBack[0][_count].z;
            verts[_offset].x = verts[_offset + _rowVertices * 3].x = verticesBack[0][_count].x;
            verts[_offset + _rowVertices].z = verts[_offset + _rowVertices * 2].z = verticesFront[0][_count].z;
            verts[_offset + _rowVertices].x = verts[_offset + _rowVertices * 2].x = verticesFront[0][_count].x;
            _offset++;
          }
        }

        var _uvs = bodyG.faceVertexUvs[0];
        var faces = bodyG.faces;
        var uvIndexFront = 0;

        for (var _count2 = 0; _count2 < _uvs.length; _count2++) {
          if (faces[_count2].materialIndex === MOCKUP.MATERIAL_FACE.BACK) {
            var dist = distances[uvIndexFront] / sum;

            if (_count2 % 2 === 0) {
              _uvs[_count2][0].x = _uvs[_count2][1].x = _uvs[_count2 + 1][0].x = dist;
              uvIndexFront++;
            } else {
              _uvs[_count2 - 1][2].x = _uvs[_count2][1].x = _uvs[_count2][2].x = dist;
            }
          } else if (faces[_count2].materialIndex === MOCKUP.MATERIAL_FACE.FRONT) {
            var _dist = 1 - distances[uvIndexFront] / sum; //console.log(dist);


            if (_count2 % 2 === 0) {
              _uvs[_count2][0].x = _uvs[_count2][1].x = _uvs[_count2 + 1][0].x = _dist;
              uvIndexFront--;
            } else {
              _uvs[_count2 - 1][2].x = _uvs[_count2][1].x = _uvs[_count2][2].x = _dist;
            }
          }
        }

        bodyG.computeBoundingBox();
        sheet.element.scale.x = curveWidth * foldCount / sum; // sheet.element.scale.z = sheet.element.scale.x;//1 + (Math.cos(pointAngleB) * sheet.element.scale.x / sheet.element.scale.x);

        bodyG.computeBoundingSphere();
        bodyG.verticesNeedUpdate = true;
        bodyG.computeFaceNormals();
        bodyG.computeVertexNormals();
        bodyG.uvsNeedUpdate = true;
        bodyG.normalsNeedUpdate = true;
      }

      curvesFront.forEach(function (curveF) {
        curveF = null;
      });
      curvesBack.forEach(function (curveB) {
        curveB = null;
      });
      verticesBack.forEach(function (vertexB) {
        vertexB = null;
      });
      verticesFront.forEach(function (vertexF) {
        vertexF = null;
      });
    }
  }, {
    key: "flip",
    value: function flip(oldAngle, newAngle) {
      var sheet = this;
      var isBooklet = sheet.viewer.isBooklet;
      var diff = newAngle - oldAngle; //170 -5 == 165 :  5-170 = -165

      var isRight = oldAngle > 90;
      var isRTL = sheet.viewer.isRTL;
      var pageNumber = isRight ? sheet.backPage.pageNumber : sheet.frontPage.pageNumber;
      var viewport = this.viewer.getViewPort(pageNumber);
      if (viewport) viewport = utils.contain(viewport.width, viewport.height, sheet.viewer.availablePageWidth(), sheet.viewer.availablePageHeight());
      var coverAdjustment = -(sheet.viewer.has3DCover && sheet.viewer.isClosedPage() ? sheet.viewer.coverExtraWidth : 0);
      sheet.init = {
        angle: oldAngle,
        angle2: !isRight ? 0 : 180,
        height: isRight ? sheet.viewer.rightSheetHeight : sheet.viewer.leftSheetHeight,
        width: isRight ? sheet.viewer.rightSheetWidth : sheet.viewer.leftSheetWidth,
        index: isRight && !isRTL || !isRight && isRTL ? 1 : 0,
        _index: 0
      };
      sheet.first = {
        angle: oldAngle + diff / 4,
        angle2: !isRight ? 90 : 90,
        index: isRight && !isRTL || !isRight && isRTL ? 1 : 0.25
      };
      sheet.mid = {
        angle: oldAngle + diff * 2 / 4,
        angle2: !isRight ? 135 : 45,
        index: isRight && !isRTL || !isRight && isRTL ? 0.5 : 0.5
      };
      sheet.mid2 = {
        angle: oldAngle + diff * 3 / 4,
        angle2: !isRight ? 180 : 0,
        index: isRight && !isRTL || !isRight && isRTL ? 0.25 : 1
      };
      sheet.end = {
        angle: newAngle,
        angle2: !isRight ? 180 : 0,
        index: isRight && !isRTL || !isRight && isRTL ? 0 : 1,
        height: coverAdjustment * 2 + (viewport ? viewport.height : sheet.height),
        width: coverAdjustment + (viewport ? viewport.width : sheet.width)
      }; //console.log(sheet.init, sheet.first, sheet.mid, sheet.end);

      sheet.isFlipping = true;

      var update = function update(tween) {
        sheet.sheetAngle = tween.angle;
        sheet.curveAngle = sheet.isHard ? tween.angle : tween.angle2;

        if (sheet.isHard === true) {
          sheet.flexibility = 0;

          if (sheet.isCover) {
            sheet.viewer.flipCover(sheet);
          }
        } else {
          sheet.flexibility = tween.angle < 90 ? sheet.leftFlexibility : sheet.rightFlexibility;
        }

        sheet.element.position.z = (tween.angle < 90 ? sheet.leftPos : sheet.rightPos) + sheet.depth;

        if (isBooklet) {
          sheet.element.material[5].opacity = sheet.element.material[4].opacity = tween.index;
          sheet.element.castShadow = isRight && !isRTL || !isRight && isRTL ? tween.index > 0.5 : tween.index > 0.5;
        }

        sheet.height = tween.height;
        sheet.width = tween.width;
        sheet.updateAngle(true);
      };

      if (isBooklet && (!isRight && !isRTL || isRight && isRTL)) {
        sheet.element.material[5].opacity = sheet.element.material[4].opacity = 0;
        sheet.element.castShadow = false;
      }

      sheet.currentTween = new TWEEN.Tween(sheet.init).to({
        angle: [sheet.first.angle, sheet.mid.angle, sheet.mid2.angle, sheet.end.angle],
        angle2: [sheet.first.angle2, sheet.mid.angle2, sheet.mid2.angle2, sheet.end.angle2],
        index: [sheet.first.index, sheet.mid.index, sheet.mid2.index, sheet.end.index],
        _index: 1,
        height: sheet.end.height,
        width: sheet.end.width
      }, sheet.viewer.app.options.duration).onUpdate(function (event) {
        update(this, event);
      }).easing(TWEEN.Easing.Sinusoidal.Out).onStop(function () {
        sheet.currentTween = null;
        sheet.isFlipping = false;

        if (sheet.isCover) {
          sheet.viewer.leftCover.isFlipping = false;
          sheet.viewer.rightCover.isFlipping = false;
        }

        sheet.element.material[5].opacity = sheet.element.material[4].opacity = 1;
      }).onComplete(function () {
        sheet.updateAngle();
        sheet.element.material[5].opacity = sheet.element.material[4].opacity = 1;
        sheet.element.castShadow = true;
        sheet.isFlipping = false;

        if (sheet.isCover) {
          sheet.viewer.leftCover.isFlipping = false;
          sheet.viewer.rightCover.isFlipping = false;
        }

        sheet.side = sheet.targetSide;
        sheet.viewer.onFlip();
        sheet.viewer.afterFlip();
        sheet.currentTween = null;
        if (sheet.viewer && sheet.viewer.requestRefresh) sheet.viewer.requestRefresh();
      }).start();
    }
  }]);

  return BookSheet3D;
}(_flipbook_js__WEBPACK_IMPORTED_MODULE_1__[/* BookSheet */ "b"]);

var FlipBook3D = /*#__PURE__*/function (_BaseFlipBookViewer) {
  _inherits(FlipBook3D, _BaseFlipBookViewer);

  var _super2 = _createSuper(FlipBook3D);

  function FlipBook3D(options, appContext) {
    var _options$flexibility, _options$texturePower, _this2$app$options$co;

    var _this2;

    _classCallCheck(this, FlipBook3D);

    options.viewerClass = "df-flipbook-3d";
    _this2 = _super2.call(this, options, appContext);
    _this2.flexibility = utils.limitAt((_options$flexibility = options.flexibility) !== null && _options$flexibility !== void 0 ? _options$flexibility : 0.9, 0, 10);
    _this2.drag3D = false; //todo complete this and take from options

    _this2.texturePowerOfTwo = (_options$texturePower = options.texturePowerOfTwo) !== null && _options$texturePower !== void 0 ? _options$texturePower : true;
    _this2.color3DSheets = (_this2$app$options$co = _this2.app.options.color3DSheets) !== null && _this2$app$options$co !== void 0 ? _this2$app$options$co : 'white';

    _this2.initMOCKUP(function () {
      appContext._viewerPrepared();
    });

    return _this2;
  }

  _createClass(FlipBook3D, [{
    key: "initMOCKUP",
    value: function initMOCKUP(callback) {
      var app = this.app;

      if (typeof THREE === "undefined") {
        app.updateInfo(app.options.text.loading + " WEBGL 3D ...");

        if (typeof define === 'function' && __webpack_require__(6) && window.requirejs) {
          window.requirejs.config({
            "paths": {
              "three": app.options.threejsSrc.replace(".js", "")
            },
            shim: {
              'three': {
                exports: 'THREE'
              }
            }
          });

          window.require(['three'], function (THREE) {
            window.THREE = THREE;
            MOCKUP.init();
            if (typeof callback === "function") callback();
            return THREE;
          });
        } else if (typeof define === 'function' && __webpack_require__(6)) {
          window.require(["three", app.options.threejsSrc.replace(".js", "")], function (ready) {
            ready(function () {
              MOCKUP.init();
              if (typeof callback === "function") callback();
            });
          });
        } else {
          utils.getScript(app.options.threejsSrc + "?ver=" + DV.version, function () {
            MOCKUP.init();
            if (typeof callback === "function") callback();
          }, function () {
            app.updateInfo("Unable to load THREE.js...");
          });
        }
      } else {
        MOCKUP.init();
        if (typeof callback === "function") callback();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var app = this.app;

      _get(_getPrototypeOf(FlipBook3D.prototype), "init", this).call(this);

      var _pageRatio = app.provider.coverPage.pageRatio;
      this.pageScaleX = 1;
      this.initDepth();
      this.initStage();
      this.initPages();
      this.initEvents();
      this.render(); //until render is called none of the css pages are added.
    }
  }, {
    key: "updatePageMode",
    value: function updatePageMode() {
      _get(_getPrototypeOf(FlipBook3D.prototype), "updatePageMode", this).call(this);

      var app = this.app;
      this.has3DCover = app.options.has3DCover && app.pageCount > 7 && !this.isBooklet;

      if (this.has3DCover && app.options.flipbookHardPages === "none") {
        app.options.flipbookHardPages = "cover";
      }
    }
  }, {
    key: "initDepth",
    value: function initDepth() {
      var _this$app$options$she, _this$app$options$she2;

      this.sheetDepth = this.pageScaleX * ((_this$app$options$she = this.app.options.sheetDepth) !== null && _this$app$options$she !== void 0 ? _this$app$options$she : 0.5);
      this.sheetSegments = (_this$app$options$she2 = this.app.options.sheetSegments) !== null && _this$app$options$she2 !== void 0 ? _this$app$options$she2 : 20;
      this.coverDepth = 2 * this.sheetDepth;
      this.sheetsDepth = Math.min(20, this.app.pageCount / 4) * this.sheetDepth;
    }
  }, {
    key: "initStage",
    value: function initStage() {
      var viewer = this;
      var stage = viewer.stage = new MOCKUP.Stage({
        pixelRatio: window.devicePixelRatio
      });
      var canvas = stage.canvas = jQuery(stage.renderer.domElement).addClass("df-3dcanvas");
      canvas.appendTo(this.element);
      stage.camera.position.set(0, 20, 600);
      stage.camera.lookAt(new THREE.Vector3(0, 0, 0));
      viewer.camera = stage.camera; //shadows are zigzag due to shadow camera position

      stage.spotLight.position.set(-220, 220, 550);
      stage.spotLight.castShadow = utils.isMobile ? false : viewer.app.options.has3DShadow;

      if (stage.spotLight.shadow) {
        stage.spotLight.shadow.bias = -0.0035;
      } // stage.spotLight.intensity = 0.22;


      stage.ambientLight.color = new THREE.Color("#fff");
      stage.ambientLight.intensity = 0.8;
      var material = new THREE.ShadowMaterial();
      material.opacity = viewer.app.options.shadowOpacity;
      stage.ground.oldMaterial = stage.ground.material;
      stage.ground.material = material;
      stage.ground.position.z = this.has3DCover ? -6 : -4; //Restrict right left camera movement.

      stage.orbitControl.maxAzimuthAngle = 0;
      stage.orbitControl.minAzimuthAngle = 0;
      stage.orbitControl.minPolarAngle = Math.PI / 2;
      stage.orbitControl.maxPolarAngle = 2.2;
      stage.orbitControl.mouseButtons.ORBIT = THREE.MOUSE.RIGHT;
      stage.orbitControl.mouseButtons.PAN = -1;
      stage.orbitControl.noPan = true;
      stage.orbitControl.maxDistance = 7000;
      stage.orbitControl.minDistance = 50;
      stage.orbitControl.noZoom = true;
      stage.selectiveRendering = true;
      stage.orbitControl.zoomSpeed = 5;
      stage.orbitControl.keyPanSpeed = 0;
      stage.orbitControl.center.set(0, 0, 0);
      stage.orbitControl.update();
      var cssRenderer = stage.cssRenderer = new THREE.CSS3DRenderer();
      jQuery(cssRenderer.domElement).css({
        position: "absolute",
        top: 0,
        pointerEvents: "none"
      }).addClass("df-3dcanvas df-csscanvas");
      viewer.element[0].appendChild(cssRenderer.domElement);
      stage.cssScene = new THREE.Scene();
      viewer.wrapper.remove();
      viewer.wrapper = new THREE.Group();
      viewer.stage.add(viewer.wrapper);
      viewer.wrapper.add(stage.ground); // viewer.wrapper.add(stage.spotLight);

      viewer.app.renderRequestStatus = DV.REQUEST_STATUS.ON;
    }
  }, {
    key: "initPages",
    value: function initPages() {
      var options = {
        parent3D: this.wrapper,
        viewer: this,
        segments: this.sheetSegments,
        depth: this.sheetDepth,
        flexibility: this.flexibility
      };

      for (var count = 0; count < 6; count++) {
        var sheet = new BookSheet3D(options);
        sheet.index = count; //just reference for debugging

        sheet.viewer = this;
        this.sheets.push(sheet);
        sheet.setMatColor(this.color3DSheets);
        this.pages.push(sheet.frontPage);
        this.pages.push(sheet.backPage);
        this.stage.cssScene.add(sheet.frontPage.cssPage);
        this.stage.cssScene.add(sheet.backPage.cssPage);
      }

      options.depth = this.sheetsDepth;
      options.segments = 1;
      options.flexibility = 0;
      this.leftSheets = new BookSheet3D(options); //to display sheet stack on left side of Realistic book

      this.rightSheets = new BookSheet3D(options); //to display sheet stack on right side of Realistic book

      this.leftSheets.setMatColor(this.color3DSheets);
      this.rightSheets.setMatColor(this.color3DSheets);
      options.depth = this.coverDepth;
      this.leftCover = new BookSheet3D(options);
      this.rightCover = new BookSheet3D(options);
      this.leftCover.bumpScale[4] = 10;
      this.rightCover.bumpScale[5] = 10;
      this.leftCover.isHard = true;
      this.rightCover.isHard = true;
      this.setcolor3DCover(this.app.options.color3DCover);
      this.stage.cssScene.add(this.leftCover.frontPage.cssPage);
      this.stage.cssScene.add(this.rightCover.backPage.cssPage);
    }
  }, {
    key: "setcolor3DCover",
    value: function setcolor3DCover(val) {
      this.leftCover.setMatColor(val);
      this.rightCover.setMatColor(val);
      this.leftCover.setMatColor(this.color3DSheets, 5);
      this.rightCover.setMatColor(this.color3DSheets, 4);
      this.app.renderRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.stageDOM = this.element[0];

      _get(_getPrototypeOf(FlipBook3D.prototype), "initEvents", this).call(this);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(FlipBook3D.prototype), "dispose", this).call(this);

      var viewer = this;

      if (viewer.stage) {
        viewer.stage.clearChild();
        viewer.stage.cssRenderer.domElement.parentNode.removeChild(viewer.stage.cssRenderer.domElement);
        viewer.stage.cssRenderer = null;
        viewer.stage.orbitControl = utils.disposeObject(viewer.stage.orbitControl);
        viewer.stage.renderer = utils.disposeObject(viewer.stage.renderer);
        jQuery(viewer.stage.canvas).remove();
        viewer.stage.canvas = null;
        viewer.stage = utils.disposeObject(viewer.stage);
      }

      if (viewer.centerTween && viewer.centerTween.stop) viewer.centerTween.stop();
    }
  }, {
    key: "render",
    value: function render() {
      this.stage.render();
      this.stage.cssRenderer.render(this.stage.cssScene, this.stage.camera);
    }
  }, {
    key: "resize",
    value: function resize() {
      _get(_getPrototypeOf(FlipBook3D.prototype), "resize", this).call(this);

      var viewer = this;
      var app = viewer.app,
          stage = viewer.stage;
      var dimensions = app.dimensions;
      var padding = dimensions.padding;
      var isSingle = viewer.isSingle;
      var zoomWidth = this.availablePageWidth(),
          zoomHeight = this.availablePageHeight();

      if (this.rightSheetHeight === undefined) {
        this.rightSheetHeight = this._containCover.height;
        this.leftSheetHeight = this._containCover.height;
        this.leftSheetWidth = this._containCover.width;
        this.rightSheetWidth = this._containCover.width;
      }

      stage.resizeCanvas(dimensions.stage.width, dimensions.stage.height);
      stage.cssRenderer.setSize(dimensions.stage.width, dimensions.stage.height);
      var cameraZ = 1 / (2 * Math.tan(Math.PI * stage.camera.fov * 0.5 / 180) / (dimensions.stage.height / app.zoomValue)) + 2.2;
      this.pageScaleX = Math.max(Math.max(this._containCover.height, this._containCover.width) / 400, 1);
      this.initDepth();
      this.sheets.forEach(function (sheet) {
        sheet.depth = viewer.sheetDepth;
      });
      this.updateShadowSize();
      this.stage.spotLight.position.x = -this.pageScaleX * 330;
      this.stage.spotLight.position.y = this.pageScaleX * 440;
      this.stage.spotLight.position.z = this.pageScaleX * 660;
      this.stage.spotLight.shadow.camera.far = this.pageScaleX * 1200;
      this.stage.spotLight.shadow.camera.updateProjectionMatrix();
      stage.camera.updateProjectionMatrix();
      var shiftY = (padding.top - padding.bottom) / app.zoomValue / 2,
          shiftX = -(padding.left - padding.right) / app.zoomValue / 2;

      if (stage.camera.position.z !== cameraZ && app.pendingZoom === true) {
        stage.camera.position.z = cameraZ;
      }

      if (app.zoomValue === 1) {
        stage.camera.position.set(shiftX, shiftY, cameraZ);
        stage.orbitControl.target = new THREE.Vector3(shiftX, shiftY, 0);
        stage.orbitControl.update();
        stage.orbitControl.rotateTo(THREE.Math.degToRad(90 + app.options.flipbook3DTiltAngle));
      }

      stage.orbitControl.update();
      app.refreshRequestStart();
      var ref = this.refSize = Math.max(this._containCover.width, this._containCover.height);
      this.coverExtraWidth = ref * .02;
      stage.orbitControl.mouseButtons.ORBIT = app.zoomValue !== 1 ? -1 : THREE.MOUSE.RIGHT;
      stage.orbitControl.mouseButtons.PAN = app.zoomValue !== 1 ? THREE.MOUSE.LEFT : -1;
      viewer.app.renderRequestStatus = DV.REQUEST_STATUS.ON;
      viewer.zoomViewer.resize();
      viewer.centerNeedsUpdate = true;
      viewer.checkCenter(true);
      viewer.pagesReady();
    }
  }, {
    key: "updateShadowSize",
    value: function updateShadowSize() {
      return;
      var shadowSize = this.pageScaleX > 2.5 ? 1024 : 512;
      var shadow = this.stage.spotLight.shadow;

      if (this.stage.spotLight.castShadow === true && shadow.mapSize.height != shadowSize) {
        shadow.radius = shadowSize / 256;
        shadow.mapSize.width = shadowSize;
        shadow.mapSize.height = shadowSize;
        shadow.needsUpdate = true;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var viewer = this,
          app = this.app,
          basePage = viewer.getBasePage();
      var ratioStep = 1 / app.pageCount,
          ratio = ratioStep * basePage;
      var leftWeight = this.isRTL ? 1 - ratio : ratio,
          rightWeight = 1 - leftWeight;
      var minSheetStack = Math.min(viewer.stackCount, viewer.totalSheets);
      var maxSheetStack = utils.limitAt(viewer.totalSheets, viewer.stackCount, viewer.stackCount * 2);
      var midWeight = Math.max(leftWeight, rightWeight);
      var flexibilityFactor = this.isBooklet ? 0 : this.flexibility / maxSheetStack;
      viewer.leftFlexibility = flexibilityFactor * rightWeight;
      viewer.rightFlexibility = flexibilityFactor * leftWeight;
      viewer.midPosition = 0.5 * minSheetStack * viewer.sheetDepth;

      _get(_getPrototypeOf(FlipBook3D.prototype), "refresh", this).call(this);

      var displayCover = this.has3DCover === true;
      this.leftCover.element.visible = this.rightCover.element.visible = this.leftSheets.element.visible = this.rightSheets.element.visible = displayCover;
      this.wrapper.position.z = -this.midPosition;

      if (displayCover) {
        var depthLeft = 0,
            depthRight = 0,
            isRTL = viewer.isRTL;
        var isFrontPage = this.isFirstPage(),
            isLastPage = this.isLastPage();
        viewer.leftSheets.depth = isRTL ? viewer.sheetsDepth * (1 - viewer.getBasePage() / app.pageCount) : viewer.sheetsDepth * basePage / app.pageCount;
        viewer.leftSheets.element.visible = isRTL ? app.pageCount - viewer.getBasePage() > 2 : basePage > 2;
        depthLeft -= viewer.leftSheets.depth / 2;
        viewer.leftSheets.element.position.z = depthLeft;
        depthLeft -= viewer.coverDepth + (viewer.leftSheets.element.visible ? viewer.leftSheets.depth / 2 : 0) + viewer.coverDepth * 3;
        viewer.leftCover.depth = viewer.rightCover.depth = viewer.coverDepth;
        var isLeftClosed = this.isClosedPage() && (isRTL && isLastPage || !isRTL && isFrontPage),
            isRightClosed = this.isClosedPage() && (!isRTL && isLastPage || isRTL && isFrontPage);

        if (viewer.leftCover.isFlipping !== true) {
          viewer.leftCover.element.position.z = isLeftClosed ? viewer.midPosition + viewer.coverDepth : depthLeft + viewer.coverDepth / 2;
          viewer.leftCover.element.position.x = 0;
          viewer.leftSheets.sheetAngle = viewer.leftCover.sheetAngle = isLeftClosed ? 180 : 0;
          viewer.leftSheets.curveAngle = viewer.leftCover.curveAngle = isLeftClosed ? 180 : 0;
          viewer.leftSheets.updateAngle();
          viewer.leftCover.updateAngle();
        }

        viewer.rightSheets.depth = viewer.sheetsDepth - viewer.leftSheets.depth;
        viewer.rightSheets.element.visible = isRTL ? basePage > 2 : app.pageCount - viewer.getBasePage() > 2;
        depthRight -= viewer.rightSheets.depth / 2;
        viewer.rightSheets.element.position.z = depthRight;
        depthRight -= viewer.coverDepth + (viewer.rightSheets.element.visible ? viewer.rightSheets.depth / 2 : 0) + viewer.coverDepth * 3;

        if (viewer.rightCover.isFlipping !== true) {
          viewer.rightCover.element.position.z = isRightClosed ? viewer.midPosition + viewer.coverDepth : depthRight + viewer.coverDepth / 2;
          viewer.rightCover.element.position.x = 0;
          viewer.rightSheets.sheetAngle = viewer.rightCover.sheetAngle = isRightClosed ? 0 : 180;
          viewer.rightSheets.curveAngle = viewer.rightCover.curveAngle = isRightClosed ? 0 : 180;
          viewer.rightSheets.updateAngle();
          viewer.rightCover.updateAngle();
        }

        viewer.stage.ground.position.z = 1.5 * Math.min(depthLeft, depthRight);

        if (this.isClosedPage()) {
          viewer.stage.ground.position.z -= viewer.coverDepth * 5;
        }
      } else {
        viewer.stage.ground.position.z = -viewer.midPosition - viewer.sheetDepth * 15;
      }
    }
  }, {
    key: "refreshSheet",
    value: function refreshSheet(options) {
      var viewer = this,
          _sheet = options.sheet,
          _sheetStackIndex = options.index; // region Determine Next Position, angle and Flexibility based on pageLocation

      var oldAngle = _sheet.sheetAngle,
          newAngle,
          isFlexible = !(_sheet.isHard || this.flexibility === 0);
      _sheet.leftFlexibility = !isFlexible ? 0 : viewer.leftFlexibility;
      _sheet.rightFlexibility = !isFlexible ? 0 : viewer.rightFlexibility;
      _sheet.leftPos = viewer.midPosition + (_sheetStackIndex - options.midPoint + 1) * viewer.sheetDepth - viewer.sheetDepth / 2;
      _sheet.rightPos = viewer.midPosition - (_sheetStackIndex - options.midPoint) * viewer.sheetDepth - viewer.sheetDepth / 2;
      newAngle = _sheet.targetSide === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.LEFT ? 0 : 180; //endregion

      if (_sheet.isFlipping === false) {
        if (options.needsFlip) {
          _sheet.isFlipping = true;
          if (_sheet.isCover && options.sheetNumber === 0) if (viewer.isRTL) viewer.rightCover.isFlipping = true;else viewer.leftCover.isFlipping = true;
          if (_sheet.isCover && viewer.totalSheets - options.sheetNumber === 1) if (viewer.isRTL) viewer.leftCover.isFlipping = true;else viewer.rightCover.isFlipping = true;
          _sheet.element.position.z = Math.max(oldAngle < 90 ? _sheet.leftPos : _sheet.rightPos, viewer.midPosition) + viewer.sheetDepth; //this.beforeFlip();

          _sheet.flexibility = oldAngle < 90 ? _sheet.leftFlexibility : _sheet.rightFlexibility;

          _sheet.flip(oldAngle, newAngle);
        } else {
          _sheet.skipFlip = false;
          _sheet.sheetAngle = _sheet.curveAngle = newAngle;
          _sheet.flexibility = newAngle < 90 ? _sheet.leftFlexibility : _sheet.rightFlexibility;
          _sheet.element.position.z = newAngle < 90 ? _sheet.leftPos : _sheet.rightPos;
          _sheet.side = _sheet.targetSide; //sheets from left side coming to right should follow the right side dimension and vice versa

          _sheet.height = newAngle < 90 ? this.leftSheetHeight : this.rightSheetHeight;
          _sheet.width = newAngle < 90 ? this.leftSheetWidth : this.rightSheetWidth;
        }

        _sheet.updateAngle();

        this.app.renderRequestStatus = DV.REQUEST_STATUS.ON;
      } else {} // _sheet.element.position.z = oldAngle < 90 ? _sheet.leftPos : _sheet.rightPos;
      //determine visibility


      _sheet.element.visible = options.visible;
    }
  }, {
    key: "updateCenter",
    value: function updateCenter() {
      var viewer = this,
          app = this.app;
      var init = viewer.wrapper.position.x,
          centerShift = viewer.centerShift,
          width = this.isLeftPage() ? this.leftSheetWidth : this.rightSheetWidth;
      var end = centerShift * width / 2;
      viewer.seamPosition = (-app.dimensions.offset.width + app.dimensions.containerWidth) / 2 + end; //create a centerTween

      if (end !== viewer.centerEnd) {
        //avoid recreating the tween if the target is same as before
        if (viewer.centerTween && viewer.centerTween.stop) viewer.centerTween.stop();
        viewer.onCenterStartAnimation(this); //solves issue 301 - called early so that waiting doesn't cause flicker

        viewer.centerTween = new TWEEN.Tween({
          x: init
        }).delay(0).to({
          x: end
        }, app.zoomValue === 1 && viewer.skipCenterAnimation !== true ? viewer.app.options.duration : 1).onStart(function () {
          /*viewer.onCenterStartAnimation(this); //is delayed for some reason - maybe waiting for request frame and causes flicker - issue 301*/
        }).onUpdate(function () {
          viewer.onCenterUpdateAnimation(this);
        }).onComplete(function () {
          viewer.onCenterCompleteAnimation(this);
        }).onStop(function () {
          viewer.onCenterStopAnimation(this);
        }).easing(TWEEN.Easing.Cubic.InOut).start();
        this.updatePendingStatusClass();
        viewer.skipCenterAnimation = false;
        viewer.centerEnd = end;
      }

      viewer.renderRequestStatus = DV.REQUEST_STATUS.ON;
      this.zoomViewer.updateCenter();
    }
  }, {
    key: "onCenterUpdateAnimation",
    value: function onCenterUpdateAnimation(tween) {
      this.wrapper.position.x = tween.x; //noinspection JSUnresolvedVariable

      if (this.stage && this.stage.cssScene) this.stage.cssScene.position.x = tween.x;
    }
  }, {
    key: "onCenterStartAnimation",
    value: function onCenterStartAnimation(tween) {}
  }, {
    key: "onCenterStopAnimation",
    value: function onCenterStopAnimation(tween) {}
  }, {
    key: "onCenterCompleteAnimation",
    value: function onCenterCompleteAnimation(tween) {}
  }, {
    key: "flipCover",
    value: function flipCover(sheet) {
      var viewer = this,
          cover = null,
          multiplier,
          diff;

      if (sheet.pageNumber === 0 || this.isBooklet && sheet.pageNumber === 1) {
        cover = this.isRTL ? this.rightCover : this.leftCover;
        multiplier = this.isRTL ? 1 : -1;
      } else if (sheet.pageNumber === this.totalSheets - 1) {
        cover = this.isRTL ? this.leftCover : this.rightCover;
        multiplier = this.isRTL ? -1 : 1;
      }

      if (cover === null) return;
      diff = cover.depth + sheet.depth + 1;
      cover.sheetAngle = sheet.sheetAngle;
      cover.curveAngle = sheet.curveAngle;
      this.rightCover.height = this.leftCover.height = sheet.height + this.coverExtraWidth * 2;
      this.rightCover.width = this.leftCover.width = sheet.width + this.coverExtraWidth;
      cover.flexibility = sheet.flexibility;
      cover.element.position.x = multiplier * Math.sin(sheet.sheetAngle * Math.PI / 180) * diff;
      cover.element.position.z = sheet.element.position.z + multiplier * Math.cos(sheet.sheetAngle * Math.PI / 180) * diff;
      this.rightCover.updateAngle();
      this.leftCover.updateAngle();
    }
  }, {
    key: "pagesReady",
    value: function pagesReady() {
      if (this.isAnimating()) return;

      if (this.app.options.flipbookFitPages === false) {
        var basePage = this.app.viewer.getBasePage();
        var leftViewPort = this.leftViewport = this.getViewPort(basePage + (this.isBooklet ? 0 : this.isRTL ? 1 : 0)),
            rightViewPort = this.rightViewPort = this.getViewPort(basePage + (this.isBooklet ? 0 : this.isRTL ? 0 : 1));

        if (leftViewPort) {
          var leftDimen = utils.contain(leftViewPort.width * 100, leftViewPort.height * 100, this.availablePageWidth(), this.availablePageHeight());
          this.leftSheetWidth = Math.floor(leftDimen.width);
          this.leftSheetHeight = Math.floor(leftDimen.height);
        }

        if (rightViewPort) {
          var rightDimen = utils.contain(rightViewPort.width * 100, rightViewPort.height * 100, this.availablePageWidth(), this.availablePageHeight());
          this.rightSheetWidth = Math.floor(rightDimen.width);
          this.rightSheetHeight = Math.floor(rightDimen.height);
        }

        for (var i = 0; i < this.sheets.length; i++) {
          var sheet = this.sheets[i];

          if (sheet.side === DV.TURN_DIRECTION.LEFT) {
            sheet.height = this.leftSheetHeight;
            sheet.width = this.leftSheetWidth;
            sheet.updateAngle();
          } else {
            sheet.height = this.rightSheetHeight;
            sheet.width = this.rightSheetWidth;
            sheet.updateAngle();
          }
        }

        if (this.isClosedPage()) {
          var isClosedOnRight = this.isRTL && this.isLastPage() || !this.isRTL && this.isFirstPage();
          this.leftCover.width = this.rightCover.width = isClosedOnRight ? this.rightSheetWidth : this.leftSheetWidth;
          this.leftCover.height = this.rightCover.height = isClosedOnRight ? this.rightSheetHeight : this.leftSheetHeight;
        } else {
          this.leftCover.height = this.rightCover.height = 2 * this.coverExtraWidth + Math.max(this.leftSheetHeight, this.rightSheetHeight);
          this.leftCover.width = this.coverExtraWidth + this.leftSheetWidth;
          this.rightCover.width = this.coverExtraWidth + this.rightSheetWidth;
        }

        this.leftSheets.width = this.leftSheetWidth;
        this.leftSheets.height = this.leftSheetHeight;
        this.rightSheets.height = this.rightSheetHeight;
        this.rightSheets.width = this.rightSheetWidth;
        this.leftCover.updateAngle();
        this.leftSheets.updateAngle();
        this.rightCover.updateAngle();
        this.rightSheets.updateAngle();
      }

      this.updateCenter();
      this.updateCSSLayer();
      this.updatePendingStatusClass();
    }
  }, {
    key: "updateCSSLayer",
    value: function updateCSSLayer() {
      var viewer = this;
      var baseActive = viewer.getBasePage();
      var width, height;
      var leftPageNumber = baseActive + (viewer.isBooklet ? 0 : viewer.isRTL ? 1 : 0),
          rightPageNumber = baseActive + (viewer.isBooklet ? 0 : this.isRTL ? 0 : 1);
      var pageLeft = !this.isRTL && viewer.isBooklet ? undefined : viewer.getPageByNumber(leftPageNumber),
          pageRight = this.isRTL && viewer.isBooklet ? undefined : viewer.getPageByNumber(rightPageNumber);
      jQuery(viewer.stage.cssRenderer.domElement).find(".df-page-content").css({
        display: "none"
      });

      if (this.leftViewport && pageLeft != null && pageLeft.sheet.element.visible) {
        var divLeft = pageLeft.cssPage;

        if (divLeft != null) {
          var boundLeft = pageLeft.sheet.element.geometry.boundingBox;
          width = Math.abs(boundLeft.max.x - boundLeft.min.x) * pageLeft.sheet.element.scale.x;
          divLeft.rotation.y = 0; //-Math.atan2(height, width) * 0.9;

          divLeft.position.z = 0; //pageLeft.sheet.element.position.z + height * 0.5;

          divLeft.position.x = 0; //height / 2.5;

          jQuery(divLeft.element).css({
            width: width,
            height: pageLeft.sheet.height,
            left: -width / 2,
            display: 'block'
          }); // if (this.texturePowerOfTwo) {

          this.resizeAnnotations(leftPageNumber); // }
        }
      }

      if (this.rightViewPort && pageRight != null && pageRight.sheet.element.visible) {
        var divRight = pageRight.cssPage;

        if (divRight != null) {
          var boundRight = pageRight.sheet.element.geometry.boundingBox;
          width = Math.abs(boundRight.max.x - boundRight.min.x) * pageRight.sheet.element.scale.x;
          divRight.rotation.y = 0; //Math.atan2(height, width) * 0.9;

          divRight.position.z = 0; //pageRight.sheet.element.position.z + height * 0.5;

          divRight.position.x = 0; //-height / 2.5;

          jQuery(divRight.element).css({
            width: width,
            height: pageRight.sheet.height,
            left: width / 2,
            display: 'block'
          }); // if (t/his.texturePowerOfTwo) {

          this.resizeAnnotations(rightPageNumber); // }
        }
      }
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      event = utils.fixMouseEvent(event);
      this.app.renderRequestStatus = DV.REQUEST_STATUS.ON;

      if (event.touches != null && event.touches.length == 2) {
        this.pinchMove(event);
        return;
      }

      var viewer = this;
      var point = viewer.eventToPoint(event);

      if (viewer.dragSheet !== null && viewer.drag3D !== false) {
        // if(point.x < this.app.dimensions.width /2){
        var angle = Math.acos(utils.limitAt(1 - (point.x - point.left) / this.leftSheetWidth, -1, 1)) * 180 / Math.PI; // angle = utils.limitAt(angle, 0, 180);

        var sheet = viewer.dragSheet;
        var isLeftPage = viewer.drag === DV.TURN_DIRECTION.LEFT;
        sheet.sheetAngle = angle;
        var curveAngle = isLeftPage ? utils.limitAt(sheet.sheetAngle + 45, 0, 180) : utils.limitAt(sheet.sheetAngle, 0, 180);
        sheet.curveAngle = sheet.isHard ? sheet.sheetAngle : curveAngle * TWEEN.Easing.Sinusoidal.Out(curveAngle * .8 / 180);
        console.log("x:" + (1 - (point.x - point.left) / this.leftSheetWidth) + "angle: " + angle + " curveAngle:" + curveAngle);
        sheet.updateAngle();
      }

      viewer.checkSwipe(point, event);
    }
    /**
     * @param {MouseEvent & jQueryMouseEvent} event
     */

  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      event = utils.fixMouseEvent(event);
      if (!event.touches && event.button !== 0) return;

      if (event.touches != null && event.touches.length == 0) {
        this.pinchUp(event);
        return;
      }

      var viewer = this;
      var point = viewer.eventToPoint(event);

      if (viewer.app.zoomValue === 1) {
        if (viewer.dragSheet !== null) {
          if (point.x > viewer.app.dimensions.width / 2) {
            if (viewer.drag === DV.TURN_DIRECTION.LEFT) viewer.app.openLeft();
          } else {
            if (viewer.drag === DV.TURN_DIRECTION.RIGHT) viewer.app.openRight();
          }

          viewer.requestRefresh();
        }

        var element = event.target || event.originalTarget; //check to see if the clicked element is a link, if so skip turn

        var isClick = viewer.startPoint && point.x === viewer.startPoint.x && point.y === viewer.startPoint.y && element.nodeName !== "A";

        if (event.ctrlKey === true && isClick) {
          this.zoomOnPoint(point);
        } else if (isClick && point.isInsideSheet === true && viewer.clickAction === DV.MOUSE_CLICK_ACTIONS.NAV) {
          if (point.isLeftSheet) {
            viewer.app.openLeft();
          } else {
            viewer.app.openRight();
          }
        }
      }

      viewer.dragSheet = null;
      viewer.drag = null;
      /*3 if there is swipe - clean*/

      viewer.startPoint = null;
      viewer.canSwipe = false;
      viewer.app.renderRequestStatus = DV.REQUEST_STATUS.ON;
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      event = utils.fixMouseEvent(event);
      if (!event.touches && event.button !== 0) return;

      if (event.touches != null && event.touches.length == 2) {
        this.pinchDown(event);
        return;
      } else {
        event = utils.fixMouseEvent(event);
        var viewer = this;
        var point = viewer.eventToPoint(event);
        viewer.startPoint = point;
        viewer.lastPos = point.x;

        if (point.isInsideDragZone && viewer.drag3D !== false) {
          viewer.dragSheet = point.sheet;
          viewer.drag = point.sheet.sheetAngle < 90 ? DV.TURN_DIRECTION.LEFT : DV.TURN_DIRECTION.RIGHT;
        } else {
          viewer.canSwipe = true;
        }
      }
    }
  }, {
    key: "eventToPoint",
    value: function eventToPoint(event) {
      var viewer = this,
          dimensions = this.app.dimensions;
      event = utils.fixMouseEvent(event);
      var point = {
        x: event.clientX,
        y: event.clientY
      }; //calculate x and y relative to container

      point.x = point.x - viewer.parentElement[0].getBoundingClientRect().left;
      point.y = point.y - viewer.parentElement[0].getBoundingClientRect().top;
      var left = (-dimensions.offset.width + dimensions.containerWidth) / 2 - dimensions.stage.width / 2,
          right = (-dimensions.offset.width + dimensions.containerWidth) / 2 + dimensions.stage.width / 2,
          top = dimensions.padding.top,
          bottom = dimensions.padding.top + viewer.availablePageHeight();
      var isLeftSheet = point.x < viewer.seamPosition;
      var pageNumber = viewer.getBasePage() + (isLeftSheet ? 0 : 1);
      var sheet = this.getPageByNumber(pageNumber);
      if (sheet) sheet = sheet.sheet;
      var isInsideSheet = point.x > left && point.x < right && point.y > top && point.y < bottom;
      return {
        isInsideSheet: isInsideSheet,
        isInsideDragZone: isInsideSheet && point.x - left < viewer.foldSense || right - point.x < viewer.foldSense,
        x: point.x,
        y: point.y,
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        raw: point,
        isLeftSheet: isLeftSheet,
        sheet: sheet
      };
    }
  }, {
    key: "checkPageLoading",
    value: function checkPageLoading() {
      var isLoaded = true;
      var pages = this.getVisiblePages().main;

      for (var index = 0; index < (this.isBooklet ? 1 : 2); index++) {
        var page = this.getPageByNumber(pages[index]);

        if (page) {
          isLoaded = page.textureLoaded && isLoaded;
        }
      }

      this.element.toggleClass("df-loading", !isLoaded);
    }
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {
      this.app.renderRequestStart();
      this.pagesReady();
    }
  }, {
    key: "getTextureSize",
    value: function getTextureSize(param) {
      var size = _get(_getPrototypeOf(FlipBook3D.prototype), "getTextureSize", this).call(this, param);

      if (this.app.zoomValue !== 1 || param.isAnnotation === true) return size;
      var height = utils.nearestPowerOfTwo(size.height);
      var width = size.width * height / size.height;
      return this.texturePowerOfTwo ? {
        height: height,
        width: width
      } : size;
    }
  }, {
    key: "getPageByNumber",
    value: function getPageByNumber(pageNumber) {
      if (this.has3DCover) {
        var isLastPage = !this.isBooklet && pageNumber === this.app.pageCount && pageNumber % 2 === 0,
            isFirstPage = pageNumber === 1;
        if (!this.isRTL && isFirstPage || this.isRTL && isLastPage) return this.leftCover.frontPage;
        if (!this.isRTL && isLastPage || this.isRTL && isFirstPage) return this.rightCover.backPage;
      }

      return _get(_getPrototypeOf(FlipBook3D.prototype), "getPageByNumber", this).call(this, pageNumber);
    }
  }, {
    key: "setPage",
    value: function setPage(param) {
      return _get(_getPrototypeOf(FlipBook3D.prototype), "setPage", this).call(this, param);
    }
  }, {
    key: "beforeFlip",
    value: function beforeFlip() {
      _get(_getPrototypeOf(FlipBook3D.prototype), "beforeFlip", this).call(this);
    }
  }, {
    key: "resizeAnnotations",
    value: function resizeAnnotations(pageNumber) {
      //if there is no transform origin, update 2.15 and above, no need for resizing
      //https://github.com/mozilla/pdf.js/pull/15036
      var annotationElement = this.getAnnotationElement(pageNumber);
      if (annotationElement && annotationElement.style.width !== "") return;
      var page = this.getPageByNumber(pageNumber);

      var viewport = _get(_getPrototypeOf(FlipBook3D.prototype), "getViewPort", this).call(this, pageNumber);

      if (page && viewport) {
        viewport = viewport.clone({
          dontFlip: true
        });
        var reqStamp = pageNumber + "|" + this.rightSheetHeight;
        var cssPage = page.cssPage;

        if (cssPage.lastStamp != reqStamp) {
          var boundRight = page.sheet.element.geometry.boundingBox;
          var width = Math.abs(boundRight.max.x - boundRight.min.x) * page.sheet.element.scale.x;
          var widthX = this.getDoublePageWidthFix(pageNumber) * width / viewport.width,
              heightX = page.sheet.height / viewport.height;
          var links = cssPage.element.querySelectorAll("section");

          if (links.length > 0) {
            links.forEach(function (link) {
              link.style.transform = "matrix(" + widthX + ", 0, 0, " + heightX + "," + viewport.transform[4] * widthX + "," + viewport.transform[5] * heightX + ")";
            });
          }

          this.app.provider.processTextContent(pageNumber, this.getTextElement(pageNumber, true));
        }
      }
    }
  }, {
    key: "finalizeAnnotations",
    value: function finalizeAnnotations(element, pageNumber) {
      _get(_getPrototypeOf(FlipBook3D.prototype), "finalizeAnnotations", this).call(this, element, pageNumber);

      this.resizeAnnotations(pageNumber);
    }
  }]);

  return FlipBook3D;
}(_flipbook_js__WEBPACK_IMPORTED_MODULE_1__[/* BaseFlipBookViewer */ "a"]);
/**
 * Page3D represents only the material side of the booksheet
 */


var Page3D = /*#__PURE__*/function (_Page2D) {
  _inherits(Page3D, _Page2D);

  var _super3 = _createSuper(Page3D);

  function Page3D(options) {
    var _this3;

    _classCallCheck(this, Page3D);

    _this3 = _super3.call(this, options);

    var page = _assertThisInitialized(_this3);

    page.element = null;
    page.face = options.face;
    page.parent3D = options.sheet;
    page.sheet = options.sheet;
    page.cssPage = new THREE.CSS3DObject(page.contentLayer[0]);
    return _this3;
  }

  _createClass(Page3D, [{
    key: "setLoading",
    value: function setLoading() {
      this.sheet.viewer.checkPageLoading();
    }
  }, {
    key: "clearMap",
    value: function clearMap() {
      this.sheet.element.material[this.face].map = null;
      this.sheet.element.material[this.face].needsUpdate = true;
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(param) {
      var page = this,
          texture = param.texture,
          callback = param.callback;
      page.textureSrc = texture;

      function completed(object, texture3D) {
        page.updateTextureLoadStatus(true);
        page.sheet.resetMatColor(page.face, param.texture === page.textureLoadFallback);
        if (typeof callback == 'function') callback(param);
      }

      if (this.face === 4) {
        this.sheet.backImage(texture, completed);
      } else {
        this.sheet.frontImage(texture, completed);
      }
    }
  }]);

  return Page3D;
}(_page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]);

var MOCKUP = {};

MOCKUP.init = function () {
  //region MOCKUP
  if (MOCKUP.initialized === true) return;
  var THREE = window.THREE;
  MOCKUP = {
    init: function init() {},
    initialized: true,
    GEOMETRY_TYPE: {
      PLANE: 0,
      BOX: 1,
      MODEL: 2
    },
    MATERIAL_FACE: {
      FRONT: 5,
      BACK: 4
    },
    WHITE_COLOR: new THREE.Color("white"),
    defaults: {
      anisotropy: 8,
      maxTextureSize: 2048,
      groundTexture: "blank",
      color: 0xffffff,
      shininess: 15,
      width: 210,
      height: 297,
      depth: 0.2,
      segments: 150,
      textureLoadFallback: "blank"
    },
    textureLoader: new THREE.TextureLoader(),
    clearChild: function clearChild(child) {
      var material = child.material;
      child.parent.remove(child);
      var texture;
      child.geometry = utils.disposeObject(child.geometry);
      child = utils.disposeObject(child);
      if (material == null) return;

      if (material.length == null) {
        if (material.map) {
          texture = material.map;
          material.dispose();
          texture.dispose();
        }

        if (material.bumpMap) {
          texture = material.bumpMap;
          material.dispose();
          texture.dispose();
        }
      } else {
        for (var matCount = 0; matCount < material.length; matCount++) {
          if (material[matCount]) {
            if (material[matCount].map) {
              texture = material[matCount].map;
              material[matCount].dispose();
              texture.dispose();
            }

            if (material[matCount].bumpMap) {
              texture = material[matCount].bumpMap;
              material[matCount].dispose();
              texture.dispose();
            }
          }

          material[matCount] = null;
        }
      }

      material = null;
      texture = null;
    },

    /**
     * @param {Paper} object
     * @param image
     * @param faceNumber
     * @param mapType
     * @param callback
     * @returns {number|*}
     */
    loadImage: function loadImage(object, image, faceNumber, mapType, callback) {
      if (image == null) {
        //get value
        var value = object.material[faceNumber] == null ? null : object.material[faceNumber][mapType] ? object.material[faceNumber][mapType].sourceFile : null;
        return value == null ? null : value.indexOf("data:image") > -1 ? null : value;
      } else {
        var _texture = null;

        if (image.nodeName === "CANVAS" || image.nodeName === "IMG") {
          _texture = new THREE.Texture(image);
          _texture.needsUpdate = true;
          MOCKUP.loadTexture(_texture, object, mapType, faceNumber);
          if (typeof callback === "function") callback(object, _texture);
        } else {
          if (image !== "blank") {
            _texture = image == null ? null : MOCKUP.textureLoader.load(image, // THREE.UVMapping,
            function textureOnLoad(texture) {
              texture.sourceFile = image;
              MOCKUP.loadTexture(texture, object, mapType, faceNumber);
              if (typeof callback === "function") callback(object, texture);
            }, void 0, //the other end expects explicitly void 0
            function textureOnError() {
              if (_texture.image == null) {
                MOCKUP.loadImage(object, MOCKUP.defaults.textureLoadFallback, faceNumber, mapType);
              }

              MOCKUP.loadTextureFailed();
            });
            if (_texture) _texture.mapping = THREE.UVMapping;
          } else {
            MOCKUP.loadTexture(null, object, mapType, faceNumber);
            if (typeof callback === "function") callback(object, _texture);
          }
        }

        return 0;
      }
    },
    //load image to texture
    loadTexture: function loadTexture(texture, object, mapType, faceNumber) {
      if (texture) {
        var img = texture.image;
        texture.naturalWidth = img.naturalWidth;
        texture.naturalHeight = img.naturalHeight;
        texture.needsUpdate = true;
      }

      if (texture !== null && mapType === "map") {
        texture.anisotropy = 0;
        if (MOCKUP.defaults.anisotropy > 0) texture.anisotropy = MOCKUP.defaults.anisotropy;

        if (THREE.skipPowerOfTwo === true) {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
        }

        texture.name = new Date().toTimeString();
      }

      MOCKUP.clearTexture(object.material[faceNumber][mapType]);
      object.material[faceNumber][mapType] = texture;
      if (mapType === "bumpMap") object.material[faceNumber].bumpScale = object.sheet.getBumpScale(faceNumber);
      object.material[faceNumber].needsUpdate = true;
    },
    //load image to texture
    loadTextureFailed: function loadTextureFailed() {
      //console.log("Failed to load texture:" + image);
      return null;
    },
    clearTexture: function clearTexture(texture) {
      if (texture) {
        if (texture.image) {
          if (texture.image.nodeName === "CANVAS") {
            if (texture.image.remove) texture.image.remove();
            delete texture.image;
          }
        }

        texture = utils.disposeObject(texture);
      }
    }
  };
  THREE.skipPowerOfTwo = true;
  /**
   * @typedef {Object} Paper
   * @property material
   */

  var Paper = /*#__PURE__*/function (_THREE$Mesh) {
    _inherits(Paper, _THREE$Mesh);

    var _super4 = _createSuper(Paper);

    function Paper(options) {
      var _this4;

      _classCallCheck(this, Paper);

      var width = options.width || MOCKUP.defaults.width,
          height = options.height || MOCKUP.defaults.height,
          color = options.color || MOCKUP.defaults.color,
          segments = options.segments || MOCKUP.defaults.segments,
          depth = options.depth || MOCKUP.defaults.depth;
      var _matParameters = {
        color: color,
        flatShading: false,
        //options.flatShading === void 0 ? true : options.flatShading,
        shininess: options.shininess || MOCKUP.defaults.shininess
      };

      var _material = new THREE.MeshPhongMaterial(_matParameters); // _matParameters.flatShading = false; smooth-shading causes shadow in the middle of books - solved with extra vertex in updateAngle()


      var _materials = [_material, _material, _material, _material, new THREE.MeshPhongMaterial(_matParameters), new THREE.MeshPhongMaterial(_matParameters)];
      _this4 = _super4.call(this, new THREE.BoxGeometry(width, height, depth, segments, 1, 1), _materials);
      _this4.material[5].transparent = true;
      _this4.material[4].transparent = true;
      _this4.baseType = "Paper";
      _this4.type = "Paper";
      _this4.castShadow = true;
      _this4.receiveShadow = true;
      options.parent3D.add(_assertThisInitialized(_this4));
      return _this4;
    }

    _createClass(Paper, [{
      key: "frontImage",
      value: function frontImage(texture, callback) {
        MOCKUP.loadImage(this, texture, MOCKUP.MATERIAL_FACE.FRONT, "map", callback);
      }
    }, {
      key: "backImage",
      value: function backImage(texture, callback) {
        MOCKUP.loadImage(this, texture, MOCKUP.MATERIAL_FACE.BACK, "map", callback);
      }
    }, {
      key: "loadBump",
      value: function loadBump(texture) {
        MOCKUP.loadImage(this, texture, MOCKUP.MATERIAL_FACE.FRONT, "bumpMap", null);
        MOCKUP.loadImage(this, texture, MOCKUP.MATERIAL_FACE.BACK, "bumpMap", null);
      }
    }]);

    return Paper;
  }(THREE.Mesh);

  var Ground = /*#__PURE__*/function (_Paper) {
    _inherits(Ground, _Paper);

    var _super5 = _createSuper(Ground);

    function Ground(options) {
      var _this5;

      _classCallCheck(this, Ground);

      _this5 = _super5.call(this, options);
      _this5.receiveShadow = true;

      _this5.frontImage(MOCKUP.defaults.groundTexture);

      _this5.backImage(MOCKUP.defaults.groundTexture);

      _this5.type = "Ground";
      return _this5;
    }

    return Ground;
  }(Paper);

  var Stage = /*#__PURE__*/function (_THREE$Scene) {
    _inherits(Stage, _THREE$Scene);

    var _super6 = _createSuper(Stage);

    /**
     * @typedef {Object} StageParameters
     * @property {HTMLCanvasElement} canvas - The canvas element.
     * @property {Number} pixelRatio        - Device PixelRatio
     * @property {Boolean} castShadow       - If the elements will cast shadow
     */

    /**
     * @param {{}} parameters
     */
    function Stage(parameters) {
      var _this6;

      _classCallCheck(this, Stage);

      _this6 = _super6.call(this);

      var stage = _assertThisInitialized(_this6); //currently canvas is compulsory


      stage.canvas = parameters.canvas || document.createElement('canvas');
      stage.canvas = jQuery(_this6.canvas);
      stage.camera = new THREE.PerspectiveCamera(20, stage.width / stage.height, 4, 50000);
      stage.renderer = new THREE.WebGLRenderer({
        canvas: stage.canvas[0],
        antialias: true,
        alpha: true
      });
      stage.renderer.setPixelRatio(parameters.pixelRatio);
      stage.renderer.setSize(stage.width, stage.height);
      stage.renderer.setClearColor(0xffffff, 0);
      var orbitControl = stage.orbitControl = new THREE.OrbitControls(stage.camera, stage.renderer.domElement);
      orbitControl.maxPolarAngle = Math.PI;
      stage.renderer.shadowMap.enabled = true;
      stage.renderer.shadowMap.type = 1;
      stage.ground = new Ground({
        color: 0xffffff,
        height: stage.camera.far / 10,
        width: stage.camera.far / 10,
        segments: 2,
        parent3D: stage
      });
      stage.ambientLight = new THREE.AmbientLight(0x444444);
      stage.add(stage.ambientLight);
      var spotLight = stage.spotLight = new THREE.DirectionalLight(0xffffff, 0.25);
      spotLight.position.set(0, 1, 0);

      if (parameters.castShadow !== false) {
        spotLight.castShadow = true;
        spotLight.shadow.camera.near = 200;
        spotLight.shadow.camera.far = 2000;
        spotLight.shadow.camera.top = 1350;
        spotLight.shadow.camera.bottom = -1350;
        spotLight.shadow.camera.left = -1350;
        spotLight.shadow.camera.right = 1350;
        spotLight.shadow.radius = 2;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
      }

      stage.add(spotLight);
      stage.animateCount = 0;
      stage.renderCount = 0;
      stage.camera.position.set(-300, 300, 300);
      stage.camera.lookAt(new THREE.Vector3(0, 0, 0));
      stage.orbitControl.center.set(0, 0, 0);
      stage.orbitControl.update();
      return _this6;
    }

    _createClass(Stage, [{
      key: "resizeCanvas",
      value: function resizeCanvas(width, height) {
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      }
    }, {
      key: "render",
      value: function render() {
        this.animateCount++;
        this.renderer.render(this, this.camera);
        if (this.stats != null) this.stats.update();
      }
    }, {
      key: "clearMaterials",
      value: function clearMaterials() {
        var totalChild = this.children.length;

        for (var count = totalChild - 1; count >= 0; count--) {
          var child = this.children[count];

          if (child.baseType && child.baseType === "Paper") {
            if (child.material) {
              if (child.material.length) {
                for (var countMat = 0; countMat < child.material.length; countMat++) {
                  child.material[countMat].needsUpdate = true;
                }
              } else {
                child.material.needsUpdate = true;
              }
            }
          }
        }
      }
    }, {
      key: "clearChild",
      value: function clearChild() {
        this.spotLight.shadow.map = utils.disposeObject(this.spotLight.shadow.map);
        this.spotLight.castShadow = false;
        this.clearMaterials();
        var totalChild = this.children.length;

        for (var count = totalChild - 1; count >= 0; count--) {
          var child = this.children[count];

          if (child.children && child.children.length > 0) {
            for (var stackCount = child.children.length - 1; stackCount >= 0; stackCount--) {
              MOCKUP.clearChild(child.children[stackCount]);
            }
          }

          MOCKUP.clearChild(child);
          child = null;
        }

        this.render();
      }
    }]);

    return Stage;
  }(THREE.Scene);

  MOCKUP.Paper = Paper;
  MOCKUP.Stage = Stage; //endregion
  //region OrbitControls

  /**
   * @author qiao / https://github.com/qiao
   * @author mrdoob / http://mrdoob.com
   * @author alteredq / http://alteredqualia.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author erich666 / http://erichaines.com
   */

  /*global THREE, console */
  // This set of controls performs orbiting, dollying (zooming), and panning. It maintains
  // the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
  // supported.
  //
  //    Orbit - left mouse / touch: one finger move
  //    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
  //    Pan - right mouse, or arrow keys / touch: three finter swipe

  THREE.OrbitControls = function (object, domElement) {
    this.object = object;
    this.domElement = domElement != null ? domElement : document; // API
    // Set false to disable this control

    this.enabled = true; // "target" sets the location of focus, where the control orbits around
    // and where it pans with respect to.

    this.target = new THREE.Vector3(); // center is old, deprecated; use "target" instead

    this.center = this.target; // This option actually enables dollying in and out; left as "zoom" for
    // backwards compatibility

    this.noZoom = false;
    this.zoomSpeed = 1.0; // Limits to how far you can dolly in and out ( PerspectiveCamera only )

    this.minDistance = 0;
    this.maxDistance = Infinity; // Limits to how far you can zoom in and out ( OrthographicCamera only )

    this.minZoom = 0;
    this.maxZoom = Infinity; // Set to true to disable this control

    this.noRotate = false;
    this.rotateSpeed = 1.0; // Set to true to disable this control

    this.noPan = false;
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push
    // Set to true to automatically rotate around the target

    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.

    this.minPolarAngle = 0; // radians

    this.maxPolarAngle = Math.PI; // radians
    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

    this.minAzimuthAngle = -Infinity; // radians

    this.maxAzimuthAngle = Infinity; // radians
    // Set to true to disable use of the keys

    this.noKeys = false; // The four arrow keys

    this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }; // Mouse buttons

    this.mouseButtons = {
      ORBIT: THREE.MOUSE.LEFT,
      ZOOM: THREE.MOUSE.MIDDLE,
      PAN: THREE.MOUSE.RIGHT
    }; ////////////
    // internals

    var scope = this;
    var EPS = 0.000001;
    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();
    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();
    var panOffset = new THREE.Vector3();
    var offset = new THREE.Vector3();
    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();
    var theta;
    var phi;
    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var pan = new THREE.Vector3();
    var lastPosition = new THREE.Vector3();
    var lastQuaternion = new THREE.Quaternion();
    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_DOLLY: 4,
      TOUCH_PAN: 5
    };
    var state = STATE.NONE; // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom; // so camera.up is the orbit axis

    var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
    var quatInverse = typeof quat.inverse == "function" ? quat.clone().inverse() : quat.clone().invert(); //in r 148 inverse is not available invert is used
    // events

    var changeEvent = {
      type: 'change'
    };
    var startEvent = {
      type: 'start'
    };
    var endEvent = {
      type: 'end'
    };

    this.rotateLeft = function (angle) {
      if (angle == null) {
        angle = getAutoRotationAngle();
      }

      thetaDelta -= angle;
    };

    this.rotateUp = function (angle) {
      if (angle == null) {
        angle = getAutoRotationAngle();
      }

      phiDelta -= angle;
    };

    this.rotateTo = function (angle) {
      phiDelta = angle - phi;
    }; // pass in distance in world space to move left


    this.panLeft = function (distance) {
      var te = this.object.matrix.elements; // get X column of matrix

      panOffset.set(te[0], te[1], te[2]);
      panOffset.multiplyScalar(-distance);
      pan.add(panOffset);
    }; // pass in distance in world space to move up


    this.panUp = function (distance) {
      var te = this.object.matrix.elements; // get Y column of matrix

      panOffset.set(te[4], te[5], te[6]);
      panOffset.multiplyScalar(distance);
      pan.add(panOffset);
    }; // pass in x,y of change desired in pixel space,
    // right and down are positive


    this.pan = function (deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (scope.object instanceof THREE.PerspectiveCamera) {
        // perspective
        var position = scope.object.position;

        var _offset2 = position.clone().sub(scope.target);

        var targetDistance = _offset2.length(); // half of the fov is center to top of screen


        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height

        scope.panLeft(2 * deltaX * targetDistance / element.clientHeight);
        scope.panUp(2 * deltaY * targetDistance / element.clientHeight);
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        // orthographic
        scope.panLeft(deltaX * (scope.object.right - scope.object.left) / element.clientWidth);
        scope.panUp(deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
      }
    };

    this.dollyIn = function (dollyScale) {
      if (dollyScale == null) {
        dollyScale = getZoomScale();
      }

      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        scope.dispatchEvent(changeEvent);
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.dollyOut = function (dollyScale) {
      if (dollyScale == null) {
        dollyScale = getZoomScale();
      }

      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        scope.dispatchEvent(changeEvent);
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.update = function () {
      var position = this.object.position;
      offset.copy(position).sub(this.target); // rotate offset to "y-axis-is-up" space

      offset.applyQuaternion(quat); // angle from z-axis around y-axis

      theta = Math.atan2(offset.x, offset.z); // angle from y-axis

      phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

      if (this.autoRotate && state === STATE.NONE) {
        this.rotateLeft(getAutoRotationAngle());
      }

      theta += thetaDelta;
      phi += phiDelta; // restrict theta to be between desired limits

      theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, theta)); // restrict phi to be between desired limits

      phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi)); // restrict phi to be betwee EPS and PI-EPS

      phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
      var radius = offset.length() * scale; // restrict radius to be between desired limits

      radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius)); // move target to panned location

      this.target.add(pan);
      offset.x = radius * Math.sin(phi) * Math.sin(theta);
      offset.y = radius * Math.cos(phi);
      offset.z = radius * Math.sin(phi) * Math.cos(theta); //console.log({phi:phi,theta:theta});
      // rotate offset back to "camera-up-vector-is-up" space

      offset.applyQuaternion(quatInverse);
      position.copy(this.target).add(offset);
      this.object.lookAt(this.target);
      thetaDelta = 0;
      phiDelta = 0;
      scale = 1;
      pan.set(0, 0, 0); // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (lastPosition.distanceToSquared(this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS) {
        this.dispatchEvent(changeEvent);
        lastPosition.copy(this.object.position);
        lastQuaternion.copy(this.object.quaternion);
      }
    };

    this.reset = function () {
      state = STATE.NONE;
      this.target.copy(this.target0);
      this.object.position.copy(this.position0);
      this.object.zoom = this.zoom0;
      this.object.updateProjectionMatrix();
      this.dispatchEvent(changeEvent);
      this.update();
    }; // noinspection JSUnusedGlobalSymbols


    this.getPolarAngle = function () {
      return phi;
    }; // noinspection JSUnusedGlobalSymbols


    this.getAzimuthalAngle = function () {
      return theta;
    };

    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }

    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }

    function onMouseDown(event) {
      if (scope.enabled === false) return;
      event.preventDefault();

      if (event.button === scope.mouseButtons.ORBIT) {
        if (scope.noRotate === true) return;
        state = STATE.ROTATE;
        rotateStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.ZOOM) {
        if (scope.noZoom === true) return;
        state = STATE.DOLLY;
        dollyStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.PAN) {
        if (scope.noPan === true) return;
        state = STATE.PAN;
        panStart.set(event.clientX, event.clientY);
      }

      if (state !== STATE.NONE) {
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('mouseup', onMouseUp, false);
        document.addEventListener('mouseout', onMouseUp, false);
        scope.dispatchEvent(startEvent);
      }
    }

    function onMouseMove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (state === STATE.ROTATE) {
        if (scope.noRotate === true) return;
        rotateEnd.set(event.clientX, event.clientY);
        rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

        scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

        scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
        rotateStart.copy(rotateEnd);
      } else if (state === STATE.DOLLY) {
        if (scope.noZoom === true) return;
        dollyEnd.set(event.clientX, event.clientY);
        dollyDelta.subVectors(dollyEnd, dollyStart);

        if (dollyDelta.y > 0) {
          scope.dollyIn();
        } else if (dollyDelta.y < 0) {
          scope.dollyOut();
        }

        dollyStart.copy(dollyEnd);
      } else if (state === STATE.PAN) {
        if (scope.noPan === true) return;
        panEnd.set(event.clientX, event.clientY);
        panDelta.subVectors(panEnd, panStart);
        scope.pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
      }

      if (state !== STATE.NONE) scope.update();
    }

    function onMouseUp()
    /* event */
    {
      if (scope.enabled === false) return;
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      document.removeEventListener('mouseout', onMouseUp, false);
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function onMouseWheel(event) {
      if (scope.enabled === false || scope.noZoom === true || state !== STATE.NONE) return;
      event.preventDefault();
      event.stopPropagation();
      var delta = 0; // noinspection JSUnresolvedVariable

      if (event.wheelDelta != null) {
        // WebKit / Opera / Explorer 9
        delta = event.wheelDelta;
      } else if (event.detail != null) {
        // Firefox
        delta = -event.detail;
      }

      if (delta > 0) {
        scope.dollyOut();
      } else if (delta < 0) {
        scope.dollyIn();
      }

      scope.update();
      scope.dispatchEvent(startEvent);
      scope.dispatchEvent(endEvent); // noinspection JSUnresolvedVariable

      if (scope.zoomCallback) scope.zoomCallback();
    }

    function onKeyDown(event) {
      if (scope.enabled === false || scope.noKeys === true || scope.noPan === true) return;

      switch (event.keyCode) {
        case scope.keys.UP:
          scope.pan(0, scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.BOTTOM:
          scope.pan(0, -scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.LEFT:
          scope.pan(scope.keyPanSpeed, 0);
          scope.update();
          break;

        case scope.keys.RIGHT:
          scope.pan(-scope.keyPanSpeed, 0);
          scope.update();
          break;
      }
    }

    function touchstart(event) {
      if (scope.enabled === false) return;
      var touchCount = event.touches.length;
      if (scope.mouseButtons.PAN === THREE.MOUSE.LEFT) touchCount = 3;

      switch (touchCount) {
        case 4:
          // one-fingered touch: rotate
          if (scope.noRotate === true) return;
          state = STATE.TOUCH_ROTATE;
          rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.noZoom === true) return;
          state = STATE.TOUCH_DOLLY;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyStart.set(0, distance);
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.noPan === true) return;
          state = STATE.TOUCH_PAN;
          panStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
    }

    function touchmove(event) {
      if (scope.enabled === false) return;
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
      var touchCount = event.touches.length; // if (scope.mouseButtons.PAN == THREE.MOUSE.LEFT && touchCount == 4) touchCount = 3;

      if (scope.mouseButtons.PAN === THREE.MOUSE.LEFT) touchCount = 3;

      switch (touchCount) {
        case 4:
          // one-fingered touch: rotate
          if (scope.noRotate === true) return;
          if (state !== STATE.TOUCH_ROTATE) return;
          event.preventDefault();
          event.stopPropagation();
          rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

          scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

          scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
          rotateStart.copy(rotateEnd);
          scope.update();
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.noZoom === true) return;
          if (state !== STATE.TOUCH_DOLLY) return;
          event.preventDefault();
          event.stopPropagation();
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyEnd.set(0, distance);
          dollyDelta.subVectors(dollyEnd, dollyStart);

          if (dollyDelta.y > 0) {
            scope.dollyOut();
          } else if (dollyDelta.y < 0) {
            scope.dollyIn();
          }

          dollyStart.copy(dollyEnd);
          scope.update();
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.noPan === true) return;
          if (state !== STATE.TOUCH_PAN) return;
          event.preventDefault();
          event.stopPropagation();
          panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          panDelta.subVectors(panEnd, panStart);
          scope.pan(panDelta.x, panDelta.y);
          panStart.copy(panEnd);
          scope.update();
          break;

        default:
          state = STATE.NONE;
      }
    }

    function touchend()
    /* event */
    {
      if (scope.enabled === false) return;
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function suppressEvent(event) {
      event.preventDefault();
    }

    this.dispose = function () {
      this.domElement.removeEventListener('contextmenu', suppressEvent, false);
      this.domElement.removeEventListener('mousedown', onMouseDown, false);
      this.domElement.removeEventListener('mousewheel', onMouseWheel, false);
      this.domElement.removeEventListener('DOMMouseScroll', onMouseWheel, false); // firefox

      this.domElement.removeEventListener('touchstart', touchstart, false);
      this.domElement.removeEventListener('touchend', touchend, false);
      this.domElement.removeEventListener('touchmove', touchmove, false);
      window.removeEventListener('keydown', onKeyDown, false);
    };

    this.domElement.addEventListener('contextmenu', suppressEvent, false);
    this.domElement.addEventListener('mousedown', onMouseDown, false);
    this.domElement.addEventListener('mousewheel', onMouseWheel, false);
    this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false); // firefox

    this.domElement.addEventListener('touchstart', touchstart, false);
    this.domElement.addEventListener('touchend', touchend, false);
    this.domElement.addEventListener('touchmove', touchmove, false);
    window.addEventListener('keydown', onKeyDown, false); // force an update at start

    this.update();
  };

  THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
  THREE.OrbitControls.prototype.constructor = THREE.OrbitControls; //endregion
  //region CSS3DObject

  var CSS3DObject = /*#__PURE__*/function (_THREE$Object3D) {
    _inherits(CSS3DObject, _THREE$Object3D);

    var _super7 = _createSuper(CSS3DObject);

    function CSS3DObject(e) {
      var _this7;

      _classCallCheck(this, CSS3DObject);

      _this7 = _super7.call(this);
      _this7.element = e;
      _this7.element.style.position = "absolute";

      _this7.addEventListener("removed", function () {
        if (this.element.parentNode !== null) {
          this.element.parentNode.removeChild(this.element);
        }
      });

      return _this7;
    }

    return CSS3DObject;
  }(THREE.Object3D);

  THREE.CSS3DObject = CSS3DObject;

  var CSS3DSprite = /*#__PURE__*/function (_THREE$CSS3DObject) {
    _inherits(CSS3DSprite, _THREE$CSS3DObject);

    var _super8 = _createSuper(CSS3DSprite);

    function CSS3DSprite(e) {
      _classCallCheck(this, CSS3DSprite);

      return _super8.call(this, e);
    }

    return CSS3DSprite;
  }(THREE.CSS3DObject);

  THREE.CSS3DSprite = CSS3DSprite;
  /*  THREE.CSS3DObject = function (e) {
      THREE.Object3D.call(this);
      this.element = e;
      this.element.style.position = "absolute";
      this.addEventListener("removed", function () {
        if (this.element.parentNode !== null) {
          this.element.parentNode.removeChild(this.element);
        }
      });
    };
    THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype);
    THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject; THREE.CSS3DSprite = function (e) {
    THREE.CSS3DObject.call(this, e);
  };
  THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype);
  THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;*/

  if (THREE.MathUtils) THREE.Math = THREE.MathUtils;

  THREE.CSS3DRenderer = function () {
    utils.log("THREE.CSS3DRenderer", THREE.REVISION);
    var e, t;
    var r, i;
    var n = new THREE.Matrix4();
    var a = {
      camera: {
        fov: 0,
        style: ""
      },
      objects: {}
    };
    var o = document.createElement("div");
    o.style.overflow = "hidden";
    o.style.WebkitTransformStyle = "preserve-3d";
    o.style.MozTransformStyle = "preserve-3d";
    o.style.oTransformStyle = "preserve-3d";
    o.style.transformStyle = "preserve-3d";
    this.domElement = o;
    var s = document.createElement("div");
    s.style.WebkitTransformStyle = "preserve-3d";
    s.style.MozTransformStyle = "preserve-3d";
    s.style.oTransformStyle = "preserve-3d";
    s.style.transformStyle = "preserve-3d";
    o.appendChild(s);

    this.setClearColor = function () {};

    this.getSize = function () {
      return {
        width: e,
        height: t
      };
    };

    this.setSize = function (n, a) {
      e = n;
      t = a;
      r = e / 2;
      i = t / 2;
      o.style.width = n + "px";
      o.style.height = a + "px";
      s.style.width = n + "px";
      s.style.height = a + "px";
    };

    var h = function h(e) {
      return Math.abs(e) < Number.EPSILON ? 0 : e;
    };

    var u = function u(e) {
      var t = e.elements;
      return "matrix3d(" + h(t[0]) + "," + h(-t[1]) + "," + h(t[2]) + "," + h(t[3]) + "," + h(t[4]) + "," + h(-t[5]) + "," + h(t[6]) + "," + h(t[7]) + "," + h(t[8]) + "," + h(-t[9]) + "," + h(t[10]) + "," + h(t[11]) + "," + h(t[12]) + "," + h(-t[13]) + "," + h(t[14]) + "," + h(t[15]) + ")";
    };

    var c = function c(e) {
      var t = e.elements;
      return "translate3d(-50%,-50%,0) matrix3d(" + h(t[0]) + "," + h(t[1]) + "," + h(t[2]) + "," + h(t[3]) + "," + h(-t[4]) + "," + h(-t[5]) + "," + h(-t[6]) + "," + h(-t[7]) + "," + h(t[8]) + "," + h(t[9]) + "," + h(t[10]) + "," + h(t[11]) + "," + h(t[12]) + "," + h(t[13]) + "," + h(t[14]) + "," + h(t[15]) + ")";
    };

    var l = function l(e, t) {
      if (e instanceof THREE.CSS3DObject) {
        var _r;

        if (e instanceof THREE.CSS3DSprite) {
          n.copy(t.matrixWorldInverse);
          n.transpose();
          n.copyPosition(e.matrixWorld);
          n.scale(e.scale);
          n.elements[3] = 0;
          n.elements[7] = 0;
          n.elements[11] = 0;
          n.elements[15] = 1;
          _r = c(n);
        } else {
          _r = c(e.matrixWorld);
        }

        var _i = e.element;
        var _o = a.objects[e.id];

        if (_o === undefined || _o !== _r) {
          _i.style.WebkitTransform = _r;
          _i.style.MozTransform = _r;
          _i.style.oTransform = _r;
          _i.style.transform = _r;
          a.objects[e.id] = _r;
        }

        if (_i.parentNode !== s) {
          s.appendChild(_i);
        }
      }

      for (var _h = 0, _u = e.children.length; _h < _u; _h++) {
        l(e.children[_h], t);
      }
    };

    this.render = function (e, n) {
      var h = .5 / Math.tan(THREE.Math.degToRad(n.fov * .5)) * t;

      if (a.camera.fov !== h) {
        o.style.WebkitPerspective = h + "px";
        o.style.MozPerspective = h + "px";
        o.style.oPerspective = h + "px";
        o.style.perspective = h + "px";
        a.camera.fov = h;
      }

      e.updateMatrixWorld();
      if (n.parent === null) n.updateMatrixWorld();
      if (n.matrixWorldInverse.invert) n.matrixWorldInverse.copy(n.matrixWorld).invert();else n.matrixWorldInverse.getInverse(n.matrixWorld);
      var c = "translate3d(0,0," + h + "px)" + u(n.matrixWorldInverse) + " translate3d(" + r + "px," + i + "px, 0)";

      if (a.camera.style !== c) {
        s.style.WebkitTransform = c;
        s.style.MozTransform = c;
        s.style.oTransform = c;
        s.style.transform = c;
        a.camera.style = c;
      }

      l(e, n);
    };
  }; //endregion

};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ app_App; });

// EXTERNAL MODULE: ./src/js/dearviewer/defaults.js
var defaults = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/dearviewer/utils/tween.js
var tween = __webpack_require__(11);

// CONCATENATED MODULE: ./src/js/dearviewer/utils/controls.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* globals jQuery */

var DV = defaults["a" /* DEARVIEWER */];
var utils = defaults["a" /* DEARVIEWER */].utils,
    REQUEST_STATUS = defaults["a" /* DEARVIEWER */].REQUEST_STATUS;

var controls_UI = /*#__PURE__*/function () {
  function UI(options, appContext) {
    _classCallCheck(this, UI);

    this.options = options;
    this.app = appContext;
    this.parentElement = this.app.container;
    this.element = jQuery('<div>', {
      "class": "df-ui"
    });
    this.parentElement.append(this.element);
    this.events = {};
    this.controls = {};
  }

  _createClass(UI, [{
    key: "init",
    value: function init() {
      var ui = this,
          div = '<div>',
          app = this.app,
          controls = this.controls;
      var text = app.options.text,
          icons = app.options.icons;
      ui.createLogo();
      this.openRight = controls.openRight = jQuery(div, {
        "class": "df-ui-nav df-ui-next",
        title: app.isRTL ? text.previousPage : text.nextPage,
        html: '<div class="df-ui-btn ' + icons['next'] + '"</div>'
      }).on("click", function () {
        app.openRight();
      });
      this.openLeft = controls.openLeft = jQuery(div, {
        "class": "df-ui-nav df-ui-prev",
        title: app.isRTL ? text.nextPage : text.previousPage,
        html: '<div class="df-ui-btn ' + icons['prev'] + '"</div>'
      }).on("click", function () {
        app.openLeft();
      });

      if (app.options.autoPlay == true) {
        this.play = controls.play = utils.createBtn('play', icons['play'], text.play).on("click", function () {
          var el = jQuery(this);
          app.setAutoPlay(!el.hasClass(app.options.icons['pause']));
        });
        app.setAutoPlay(app.options.autoPlayStart);
      }

      this.pageNumber = controls.pageNumber = utils.createBtn('page').on("change", function () {
        var pageNumber = parseInt(controls.pageInput.val(), 10);
        pageNumber = app.getValidPage(pageNumber);
        app.gotoPage(pageNumber);
      }).on("keyup", function (event) {
        if (event.keyCode === 13) {
          var pageNumber = parseInt(controls.pageInput.val(), 10);
          pageNumber = app.getValidPage(pageNumber);
          if (pageNumber !== app.currentPageNumber) app.gotoPage(pageNumber);
        }
      });
      var rnd_id = "df_book_page_number_" + Math.ceil(performance.now() / 10);
      this.pageInput = controls.pageInput = jQuery('<input id="' + rnd_id + '" type="text"/>').appendTo(controls.pageNumber);
      this.pageLabel = controls.pageLabel = jQuery('<label for="' + rnd_id + '"></label>').appendTo(controls.pageNumber);
      this.thumbnail = controls.thumbnail = utils.createBtn('thumbnail', icons['thumbnail'], text.toggleThumbnails);
      controls.thumbnail.on("click", function () {
        var el = jQuery(this);

        if (app.thumblist == null) {
          app.initThumbs();
        }

        var thumbContainer = app.thumbContainer;
        thumbContainer.toggleClass("df-sidemenu-visible");
        el.toggleClass('df-active');

        if (el.hasClass("df-active")) {
          el.siblings(".df-active").trigger("click");
          app.thumbRequestStatus = REQUEST_STATUS.ON;
        }

        ui.update();
        if (app.options.sideMenuOverlay === false) app.resizeRequestStart();
      }).addClass("df-sidemenu-trigger");

      if (app.hasOutline()) {
        this.outline = controls.outline = utils.createBtn('outline', icons['outline'], text.toggleOutline);
        controls.outline.on("click", function () {
          var el = jQuery(this);

          if (app.outlineViewer == null) {
            app.initOutline();
          }

          if (app.outlineContainer) {
            var outlineContainer = app.outlineContainer;
            el.toggleClass('df-active');
            outlineContainer.toggleClass("df-sidemenu-visible");

            if (el.hasClass("df-active")) {
              el.siblings(".df-active").trigger("click");
            }

            ui.update();
            if (app.options.sideMenuOverlay === false) app.resizeRequestStart();
          }
        }).addClass("df-sidemenu-trigger");
      }

      var controlsContainer = ui.element;
      this.zoomIn = controls.zoomIn = utils.createBtn('zoomin', icons['zoomin'], text.zoomIn).on("click", function () {
        app.zoom(1);
        ui.update();
      });
      this.zoomOut = controls.zoomOut = utils.createBtn('zoomout', icons['zoomout'], text.zoomOut).on("click", function () {
        app.zoom(-1);
        ui.update();
      });
      this.resetZoom = controls.resetZoom = utils.createBtn('resetzoom', icons['resetzoom'], text.resetZoom).on("click", function () {
        app.resetZoom(-1);
        ui.update();
      });
      /*PAGEMODE/PAGEFIT*/

      if (app.viewer.isFlipBook) {
        //todo PageMode buttons to be added through viewers
        var isSingle = app.viewer.pageMode === defaults["a" /* DEARVIEWER */].FLIPBOOK_PAGE_MODE.SINGLE;
        this.pageMode = controls.pageMode = utils.createBtn('pagemode', icons[isSingle ? 'doublepage' : 'singlepage'], isSingle ? text.doublePageMode : text.singlePageMode).on("click", function () {
          var el = jQuery(this);
          app.viewer.setPageMode({
            isSingle: !el.hasClass(icons['doublepage'])
          });

          if (app.viewer.pageMode === defaults["a" /* DEARVIEWER */].FLIPBOOK_PAGE_MODE.DOUBLE) {
            controls.pageMode.removeClass(icons['doublepage']).addClass(icons['singlepage']).attr('title', text.singlePageMode).html('<span>' + text.singlePageMode + '</span>');
          } else {
            controls.pageMode.addClass(icons['doublepage']).removeClass(icons['singlepage']).attr('title', text.doublePageMode).html('<span>' + text.doublePageMode + '</span>');
          }
        });
      } else {
        this.pageFit = controls.pageFit = utils.createBtn('pagefit', icons['pagefit'], text.pageFit).on("click", function () {
          var pageFit = controls.pageFit;
          var isPageFit = !pageFit.hasClass(icons['widthfit']);

          if (isPageFit === true) {
            pageFit.addClass(icons['widthfit']);
            pageFit.html("<span>" + text.widthFit + "</span>");
            pageFit.attr("title", text.widthFit);
          } else {
            pageFit.removeClass(icons['widthfit']);
            pageFit.html("<span>" + text.pageFit + "</span>");
            pageFit.attr("title", text.pageFit);
          } // jQuery(this).toggleClass(buttonClass + " " + uiClass + "-widthfit ");

        });
      }

      ui.shareBox = new DV_Share(app.container, app.options);
      this.share = controls.share = utils.createBtn('share', icons['share'], text.share).on("click", function () {
        if (ui.shareBox.isOpen === true) ui.shareBox.close();else {
          ui.shareBox.update(app.getURLHash());
          ui.shareBox.show();
        }
      }); //More button

      this.more = controls.more = utils.createBtn('more', icons['more']).on("click", function (event) {
        if (ui.moreContainerOpen !== true) {
          jQuery(this).addClass("df-active");
          ui.moreContainerOpen = true;
          event.stopPropagation();
        }
      });
      this.startPage = controls.startPage = utils.createBtn('start', icons['start'], text.gotoFirstPage).on("click", function () {
        app.start();
      });
      this.endPage = controls.endPage = utils.createBtn('end', icons['end'], text.gotoLastPage).on("click", function () {
        app.end();
      });
      this.print = controls.print = utils.createBtn('print', icons['print'], text.print).on("click", function () {
        app.print();
      });

      if (app.options.showDownloadControl === true) {
        var downloadClass = "df-ui-btn df-ui" + "-download " + icons['download'];
        this.download = controls.download = jQuery('<a download target="_blank" class="' + downloadClass + '"><span>' + text.downloadPDFFile + '</span></a>');
        controls.download.attr("href", app.options.source).attr("title", text.downloadPDFFile); //moreContainer.append(download);
      } //endregion
      //region MoreContainer


      ui.moreContainer = jQuery(div, {
        "class": "df-more-container"
      });
      controls.more.append(ui.moreContainer); //endregion

      if (!(app.options.isLightBox === true && app.fullscreenSupported !== true)) {
        this.fullScreen = controls.fullScreen = utils.createBtn('fullscreen', icons['fullscreen'], text.toggleFullscreen).on("click", app.switchFullscreen.bind(app));
      }

      app.viewer.initCustomControls();
      /**
       * Controls position and placement is determined by options.moreControls and options.hideControls
       */

      var allControls = app.options.allControls.replace(/ /g, '').split(','),
          moreControls = ',' + app.options.moreControls.replace(/ /g, '') + ',',
          hideControls = ',' + app.options.hideControls.replace(/ /g, '') + ',',
          devControls = ','; // + app.options.devControls.replace(/ /g, '') + ',';
      // if (utils.isIOS) {
      //   hideControls += ",fullScreen,";
      // }

      hideControls += devControls;

      for (var controlCount = 0; controlCount < allControls.length; controlCount++) {
        //if hidden skip
        var controlName = allControls[controlCount];

        if (hideControls.indexOf(',' + controlName + ',') < 0) {
          //not found in hide list
          var control = controls[controlName];

          if (control != null && _typeof(control) == "object") {
            if (moreControls.indexOf(',' + controlName + ',') > -1 && controlName !== 'more' && controlName !== 'pageNumber') {
              //found in more controls
              ui.moreContainer.append(control);
            } else {
              controlsContainer.append(control);
            }
          }
        }
      }

      if (ui.moreContainer.children().length == 0) {
        //fixes #347
        this.more.addClass("df-hidden");
      }

      app.container.append(controlsContainer);
      app.container.append(controls.openLeft);
      app.container.append(this.controls.openRight); //register a click event on window to close the more-options and search options

      window.addEventListener('click', ui.events.closePanels = ui.closePanels.bind(ui), false);
      window.addEventListener('keyup', ui.events.keyup = ui.keyUp.bind(ui), false);
      document.addEventListener('fullscreenchange', ui.events.fullscreenChange = ui.fullscreenChange.bind(ui), false);

      if (app.options.autoOpenThumbnail === true) {
        ui.controls.thumbnail.trigger("click");
      }

      if (app.hasOutline() && app.options.autoOpenOutline === true) {
        ui.controls.outline.trigger("click");
      }

      app.executeCallback('onCreateUI');
    }
  }, {
    key: "closePanels",
    value: function closePanels(event) {
      if (this.moreContainerOpen === true) {
        var _this$controls$more;

        (_this$controls$more = this.controls.more) === null || _this$controls$more === void 0 ? void 0 : _this$controls$more.removeClass("df-active");
        this.moreContainerOpen = false;
      }
    }
  }, {
    key: "fullscreenChange",
    value: function fullscreenChange(event) {
      var isExit = utils.getFullscreenElement() === void 0;

      if (isExit && this.app.isFullscreen === true) {
        this.app.switchFullscreen();
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(event) {
      var ui = this,
          app = this.app;

      switch (event.keyCode) {
        case 27:
          //escKey
          if (defaults["a" /* DEARVIEWER */].activeLightBox && defaults["a" /* DEARVIEWER */].activeLightBox.app && !utils.isChromeExtension()) {
            defaults["a" /* DEARVIEWER */].activeLightBox.closeButton.trigger("click");
          }

          break;

        case 37:
          //leftKey:
          if ((app.isFullscreen === true || app.options.isLightBox === true) && app.options.arrowKeysAction === defaults["a" /* DEARVIEWER */].ARROW_KEYS_ACTIONS.NAV) app.openLeft();
          break;

        case 39:
          //rightKey:
          if ((app.isFullscreen === true || app.options.isLightBox === true) && app.options.arrowKeysAction === defaults["a" /* DEARVIEWER */].ARROW_KEYS_ACTIONS.NAV) app.openRight();
          break;

        default:
          break;
      }
    }
  }, {
    key: "createLogo",
    value: function createLogo() {
      var app = this.app;
      var logo = null;

      if (app.options.logo.indexOf("<") > -1) {
        logo = jQuery(app.options.logo).addClass("df-logo df-logo-html");
      } else if (app.options.logo.trim().length > 2) {
        logo = jQuery('<a class="df-logo df-logo-img" target="_blank" href="' + app.options.logoUrl + '"><img alt="" src="' + app.options.logo + '"/>');
      }

      this.element.append(logo);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var ui = this;

      for (var key in this.controls) {
        if (this.controls.hasOwnProperty(key)) {
          var control = this.controls[key];
          if (control !== null && _typeof(control) == "object") control.off().remove();
        }
      }

      ui.element.remove();
      ui.shareBox = utils.disposeObject(ui.shareBox);
      window.removeEventListener('click', ui.events.closePanels, false);
      window.removeEventListener('keyup', ui.events.keyup, false);
      document.removeEventListener('fullscreenchange', ui.events.fullscreenChange, false);
    }
  }, {
    key: "update",
    value: function update() {
      var app = this.app,
          controls = this.controls;

      if (this._pageLabelWidthSet !== true) {
        //https://github.com/deepak-ghimire/dearviewer/issues/349
        this.pageLabel.width("");
        this.pageLabel.html("88888888888".substring(0, app.pageCount.toString().length * 2 + 3));
        this.pageNumber.width(this.pageLabel.width());
        this.pageLabel.width(this.pageLabel.width());
        this.pageLabel.html("");
        this._pageLabelWidthSet = true;
      }

      controls.pageLabel.html(app.currentPageNumber + "/" + app.pageCount);
      controls.pageInput.val(app.currentPageNumber);
      app.container.toggleClass("df-sidemenu-open", app.container.find(".df-sidemenu-visible").length > 0);
      controls.zoomIn.toggleClass("disabled", app.zoomValue === app.viewer.maxZoom);
      controls.zoomOut.toggleClass("disabled", app.zoomValue === app.viewer.minZoom);
      var isRTL = app.isRTL,
          isStart = app.currentPageNumber === app.startPage,
          isEnd = app.currentPageNumber === app.endPage;
      var noPrev = isStart && !isRTL || isEnd && isRTL,
          noNext = isEnd && !isRTL || isStart && isRTL;
      controls.openRight.toggleClass("df-hidden", noNext);
      controls.openLeft.toggleClass("df-hidden", noPrev);
      app.viewer.afterControlUpdate();
    }
  }]);

  return UI;
}();

var DV_Share = /*#__PURE__*/function () {
  function DV_Share(container, options) {
    _classCallCheck(this, DV_Share);

    var dfShare = this;
    dfShare.isOpen = false;
    dfShare.shareUrl = "";
    dfShare.init(container, options);
  }

  _createClass(DV_Share, [{
    key: "init",
    value: function init(container, options) {
      var dfShare = this;
      var shareButtonClass = "df-share-button";
      var windowParameters = "width=500,height=400";
      dfShare.wrapper = jQuery('<div class="df-share-wrapper" style="display: none;">').on("click", function () {
        dfShare.close();
      });
      dfShare.box = jQuery('<div class="df-share-box">');
      dfShare.box.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
      dfShare.box.appendTo(dfShare.wrapper).html('<span class="df-share-title">' + options.text.share + '</span>');
      dfShare.urlInput = jQuery('<textarea class="df-share-url">').on("click", function () {
        jQuery(this).select();
      });
      dfShare.box.append(dfShare.urlInput);

      for (var shareKey in options.share) {
        if (options.share.hasOwnProperty(shareKey)) {
          (function () {
            var shareTemplate = options.share[shareKey];

            if (shareTemplate !== null) {
              dfShare[shareKey] = jQuery('<div>', {
                "class": shareButtonClass + " df-share-" + shareKey + " " + options.icons[shareKey]
              }).on("click", function (e) {
                e.preventDefault();
                window.open(shareTemplate.replace("{{url}}", encodeURIComponent(dfShare.shareUrl)), "Sharer", windowParameters);
                e.stopPropagation(); //so the default event is not cancelled by parent element
              });
              dfShare.box.append(dfShare[shareKey]);
            }
          })();
        }
      }

      jQuery(container).append(dfShare.wrapper);
    }
  }, {
    key: "show",
    value: function show() {
      this.wrapper.fadeIn(300);
      this.urlInput.val(this.shareUrl);
      this.urlInput.trigger("click");
      this.isOpen = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var dfShare = this;

      for (var key in dfShare) {
        if (dfShare.hasOwnProperty(key)) {
          if (dfShare[key] && dfShare[key].off) dfShare[key].off();
        }
      }

      dfShare.wrapper.remove();
    }
  }, {
    key: "close",
    value: function close() {
      this.wrapper.fadeOut(300);
      this.isOpen = false;
    }
  }, {
    key: "update",
    value: function update(url) {
      this.shareUrl = url;
    }
  }]);

  return DV_Share;
}();

var controls_DVLightBox = /*#__PURE__*/function () {
  /**
   * @constructs LightBox
   * @param closeCallback callBack function when lightbox is closed
   */
  function DVLightBox(closeCallback) {
    _classCallCheck(this, DVLightBox);

    this.duration = 300; //cache this

    var lightbox = this; //lightbox wrapper div

    lightbox.lightboxWrapper = jQuery("<div>").addClass("df-lightbox-wrapper"); //lightbox element

    lightbox.element = jQuery("<div>").addClass("df-app").appendTo(lightbox.lightboxWrapper); //lightbox controls

    lightbox.controls = jQuery("<div>").addClass("df-lightbox-controls").appendTo(lightbox.lightboxWrapper); //lightbox close button

    lightbox.closeButton = jQuery("<div>").addClass("df-lightbox-close df-ui-btn " + defaults["a" /* DEARVIEWER */].defaults.icons['close']).on("click", function () {
      lightbox.close(closeCallback);
    }).appendTo(lightbox.controls);
    lightbox.lightboxWrapper.append(lightbox.element);
    return lightbox;
  }

  _createClass(DVLightBox, [{
    key: "show",
    value: function show(callback) {
      if (this.lightboxWrapper.parent().length === 0) jQuery("body").append(this.lightboxWrapper);
      jQuery("html,body").addClass("df-lightbox-open");
      this.lightboxWrapper.fadeIn(this.duration);
      if (typeof callback === "function") callback();
      return this;
    }
  }, {
    key: "close",
    value: function close(callback) {
      this.lightboxWrapper.fadeOut(this.duration);
      Array.prototype.forEach.call(defaults["a" /* DEARVIEWER */].utils.getSharePrefixes(), function (prefix) {
        if (window.location.hash.indexOf("#" + prefix) === 0) window.location.hash = "#_";
      });
      if (typeof callback === "function") setTimeout(callback, this.duration);
      jQuery("html,body").removeClass("df-lightbox-open"); //cleanup any classes to remove old CSS classes

      this.element.attr("class", "df-app").attr("style", "");
      return this;
    }
  }]);

  return DVLightBox;
}();

var Sidemenu = /*#__PURE__*/function () {
  function Sidemenu(options, appContext) {
    _classCallCheck(this, Sidemenu);

    this.options = options;
    this.app = appContext;
    this.parentElement = options.parentElement;
    this.element = jQuery('<div>', {
      "class": "df-sidemenu-wrapper"
    });
    this.parentElement.append(this.element);
    this.buttons = jQuery('<div>', {
      "class": "df-sidemenu-buttons df-ui-wrapper"
    }).appendTo(this.element);
    /*
        let icons = this.app.options.icons,
          text = this.app.options.text;
          this.thumbnail = utils.createBtn('thumbnail', icons['thumbnail'], text.toggleThumbnails);
        this.outline = utils.createBtn('outline', icons['outline'], text.toggleOutline);*/

    this.close = utils.createBtn('close', appContext.options.icons['close'], appContext.options.text.close); //todo

    this.buttons.append(this.close);
  }

  _createClass(Sidemenu, [{
    key: "dispose",
    value: function dispose() {
      this.element.remove();
    }
  }]);

  return Sidemenu;
}();

var BookMarkViewer = /*#__PURE__*/function () {
  /**
   * @typedef {Object} BookMarkViewerOptions
   * @property {HTMLDivElement} container - The viewer element.
   * @property {Object} linkService - the serviceProvider
   * @property {Object} outlineItemClass - custom class for outline item
   * @property {Object} outlineToggleClass - custom class for outline toggle
   * @property {Object} outlineToggleHiddenClass - custom class for outline hidden item
   */

  /**
   * @typedef {Object} BookMarkViewerRenderParameters
   * @property {Array|null} outline - An array of outline objects.
   */

  /**
   * @constructs BookMarkViewer
   * @param {BookMarkViewerOptions} options
   */
  function BookMarkViewer(options) {
    _classCallCheck(this, BookMarkViewer);

    this.outline = null;
    this.lastToggleIsShow = true;
    this.container = options.container;
    this.linkService = options.linkService;
    this.outlineItemClass = options.outlineItemClass || "outlineItem";
    this.outlineToggleClass = options.outlineToggleClass || "outlineItemToggler";
    this.outlineToggleHiddenClass = options.outlineToggleHiddenClass || "outlineItemsHidden";
  }

  _createClass(BookMarkViewer, [{
    key: "dispose",
    value: function dispose() {
      if (this.container) {
        if (this.container.parentNode) {
          this.container.parentNode.removeChild(this.container);
        }
      }

      this.linkService = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.outline = null;
      this.lastToggleIsShow = true;
      var container = this.container;

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }, {
    key: "_dispatchEvent",

    /**
     * @private
     */
    value: function _dispatchEvent(outlineCount) {
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('outlineloaded', true, true, {
        outlineCount: outlineCount
      });
      this.container.dispatchEvent(event);
    }
  }, {
    key: "_bindLink",

    /**
     * @private
     */
    value: function _bindLink(element, item) {
      var linkService = this.linkService;

      if (item.custom === true) {
        element.href = linkService.getCustomDestinationHash(item.dest);

        element.onclick = function goToDestination() {
          linkService.customNavigateTo(item.dest);
          return false;
        };
      } else {
        if (item.url) {
          pdfjsLib.addLinkAttributes(element, {
            url: item.url
          });
          return;
        }

        element.href = linkService.getDestinationHash(item.dest);

        element.onclick = function goToDestination() {
          linkService.navigateTo(item.dest);
          return false;
        };
      }
    }
  }, {
    key: "_addToggleButton",

    /**
     * Prepend a button before an outline item which allows the user to toggle
     * the visibility of all outline items at that level.
     *
     * @private
     */
    value: function _addToggleButton(div) {
      var _bookMarkViewer = this;

      var toggler = document.createElement('div');
      toggler.className = this.outlineToggleClass + " " + this.outlineToggleHiddenClass;

      toggler.onclick = function (event) {
        event.stopPropagation();
        toggler.classList.toggle(this.outlineToggleHiddenClass);

        if (event.shiftKey) {
          var shouldShowAll = !toggler.classList.contains(this.outlineToggleHiddenClass);

          _bookMarkViewer._toggleOutlineItem(div, shouldShowAll);
        }
      }.bind(this);

      div.insertBefore(toggler, div.firstChild);
    }
  }, {
    key: "_toggleOutlineItem",

    /**
     * Toggle the visibility of the subtree of an outline item.
     *
     * @param {Element} root - the root of the outline (sub)tree.
     * @param {boolean} show - whether to show the outline (sub)tree. If false,
     *   the outline subtree rooted at |root| will be collapsed.
     *
     * @private
     */
    value: function _toggleOutlineItem(root, show) {
      this.lastToggleIsShow = show;
      var togglers = root.querySelectorAll('.' + this.outlineToggleClass);

      for (var i = 0, ii = togglers.length; i < ii; ++i) {
        togglers[i].classList[show ? 'remove' : 'add'](this.outlineToggleHiddenClass);
      }
    }
  }, {
    key: "render",

    /**
     * @param {BookMarkViewerRenderParameters} params
     */
    value: function render(params) {
      var outline = params && params.outline || null;
      var outlineCount = 0;

      if (this.outline) {
        this.reset();
      }

      this.outline = outline;

      if (!outline) {
        //this._dispatchEvent(outlineCount);
        return;
      }

      var fragment = document.createDocumentFragment();
      var queue = [{
        parent: fragment,
        items: this.outline,
        custom: false
      }];
      var hasAnyNesting = false;

      while (queue.length > 0) {
        var levelData = queue.shift();
        var isCustom = levelData.custom;

        for (var i = 0, len = levelData.items.length; i < len; i++) {
          var item = levelData.items[i];
          var div = document.createElement('div');
          div.className = this.outlineItemClass;
          var element = document.createElement('a');
          if (item.custom == null && isCustom != null) item.custom = isCustom;

          this._bindLink(element, item); //element.


          element.textContent = item.title.replace(/\x00/g, ''); //pdfjsLib.removeNullCharacters(item.title) || "Untitled Bookmark";

          div.appendChild(element);

          if (item.items && item.items.length > 0) {
            hasAnyNesting = true;

            this._addToggleButton(div);

            var itemsDiv = document.createElement('div');
            itemsDiv.className = this.outlineItemClass + "s";
            div.appendChild(itemsDiv); // noinspection JSCheckFunctionSignatures

            queue.push({
              parent: itemsDiv,
              custom: item.custom,
              items: item.items
            });
          }

          levelData.parent.appendChild(div);
          outlineCount++;
        }
      }

      if (hasAnyNesting) {
        if (this.container.classList != null) {
          this.container.classList.add(this.outlineItemClass + "s");
        } else if (this.container.className != null) {
          this.container.className += " picWindow";
        }
      }

      this.container.appendChild(fragment);

      this._dispatchEvent(outlineCount);
    }
  }]);

  return BookMarkViewer;
}();

var controls_ThumbList = /*#__PURE__*/function () {
  function ThumbList(config) {
    _classCallCheck(this, ThumbList);

    var itemHeight = this.itemHeight = config.itemHeight;
    var itemWidth = this.itemWidth = config.itemWidth;
    var app = this.app = config.app;
    this.items = config.items;
    this.generatorFn = config.generatorFn;
    this.totalRows = config.totalRows || config.items && config.items.length;
    this.addFn = config.addFn;
    this.scrollFn = config.scrollFn;
    this.container = document.createElement('div');
    var self = this;

    for (var count = 0; count < this.totalRows; count++) {
      var el = document.createElement("div");
      var pageNumber = count + 1;
      el.id = "df-thumb" + pageNumber;
      var image = document.createElement("div"),
          thumbNumber = document.createElement("div"),
          wrapper = document.createElement("div");
      wrapper.className = "df-wrapper";
      thumbNumber.className = "df-thumb-number";
      el.className = "df-thumb";
      image.className = "df-bg-image";
      wrapper.style.height = itemHeight + 'px';
      wrapper.style.width = itemWidth + 'px';
      thumbNumber.innerText = pageNumber;
      el.appendChild(wrapper);
      wrapper.appendChild(thumbNumber);
      wrapper.appendChild(image);
      this.container.appendChild(el);
    }

    function onScroll() {
      app.thumbRequestCount = 0;
      app.thumbRequestStatus = REQUEST_STATUS.COUNT;
    }

    self.dispose = function () {
      if (self.container) {
        if (self.container.parentNode) {
          self.container.parentNode.removeChild(self.container);
        }
      }

      self.container.removeEventListener('scroll', onScroll);
    };

    self.container.addEventListener('scroll', onScroll);
  }

  _createClass(ThumbList, [{
    key: "processThumbRequest",
    value: function processThumbRequest() {
      utils.log("Thumb Request Initiated");
      var app = this.app;
      app.thumbRequestStatus = REQUEST_STATUS.OFF; //move to thumb if thumb is on

      if (app.activeThumb !== app.currentPageNumber) {
        var thumbVisible = app.thumbContainer != null && app.thumbContainer.hasClass("df-sidemenu-visible");

        if (thumbVisible) {
          var thumbWrapper = app.thumblist.container;
          var thumbWrapperScrollTop = thumbWrapper.scrollTop,
              thumbWrapperScrollHeight = thumbWrapper.getBoundingClientRect().height;
          var thumb = app.thumbContainer.find("#df-thumb" + app.currentPageNumber);

          if (thumb.length > 0) {
            //TODO direct jumps won't work..
            app.thumbContainer.find(".df-selected").removeClass("df-selected");
            thumb.addClass("df-selected"); //js calculation

            thumb = thumb[0]; //when the thumb is below the display area scroll so that just it's fully visible

            if (thumbWrapperScrollTop + thumbWrapperScrollHeight < thumb.offsetTop + thumb.scrollHeight) utils.scrollIntoView(thumb, null, false); //when the thumb is above the display area scroll so that just it's fully visible
            else if (thumbWrapperScrollTop > thumb.offsetTop) utils.scrollIntoView(thumb);
            app.activeThumb = app.currentPageNumber;
          } else {
            //TODO: Why is this written??
            //noinspection JSValidateTypes
            jQuery(thumbWrapper).scrollTop(app.currentPageNumber * 124);
            app.thumbRequestStatus = REQUEST_STATUS.ON;
          }
        }
      }

      if (app.thumblist.container.getElementsByClassName("df-thumb-requested").length === 0) {
        var visible = utils.getVisibleElements({
          container: app.thumblist.container,
          elements: app.thumblist.container.children
        });
        if (jQuery.inArray(visible)) visible.unshift(app.activeThumb);

        for (var count = 0; count < visible.length; count++) {
          var _thumb = app.thumblist.container.children[visible[count] - 1];

          if (_thumb !== void 0 && _thumb.classList.contains("df-thumb-loaded") === false && _thumb.classList.contains("df-thumb-requested") === false) {
            _thumb.classList.add("df-thumb-requested");

            utils.log("Thumb Requested for " + visible[count]);
            app.provider.processPage({
              pageNumber: visible[count],
              textureTarget: defaults["a" /* DEARVIEWER */].TEXTURE_TARGET.THUMB
            });
            return false;
          }
        }
      }
    }
  }, {
    key: "setPage",
    value: function setPage(param) {
      var app = this.app,
          pageNumber = param.pageNumber,
          texture = param.texture,
          textureTarget = param.textureTarget;

      if (textureTarget === defaults["a" /* DEARVIEWER */].TEXTURE_TARGET.THUMB) {
        var thumb = app.container.find("#df-thumb" + pageNumber);
        thumb.find(".df-wrapper").css({
          height: param.height,
          width: param.width
        });
        thumb.find(".df-bg-image").css({
          backgroundImage: utils.bgImage(texture)
        });
        thumb.addClass("df-thumb-loaded").removeClass("df-thumb-requested");
      }

      utils.log("Thumbnail set for " + param.pageNumber);
      app.thumbRequestStatus = REQUEST_STATUS.ON;
    }
  }]);

  return ThumbList;
}();

defaults["a" /* DEARVIEWER */].openLightBox = function openLightBox(app) {
  if (!defaults["a" /* DEARVIEWER */].activeLightBox) {
    defaults["a" /* DEARVIEWER */].activeLightBox = new controls_DVLightBox(function () {
      if (defaults["a" /* DEARVIEWER */].activeLightBox.app) {
        defaults["a" /* DEARVIEWER */].activeLightBox.app.closeRequested = true;
        defaults["a" /* DEARVIEWER */].activeLightBox.app.analytics({
          eventAction: defaults["a" /* DEARVIEWER */].activeLightBox.app.options.analyticsViewerClose,
          options: defaults["a" /* DEARVIEWER */].activeLightBox.app.options
        });
      }

      defaults["a" /* DEARVIEWER */].activeLightBox.app = utils.disposeObject(defaults["a" /* DEARVIEWER */].activeLightBox.app);
    });
  }

  defaults["a" /* DEARVIEWER */].activeLightBox.duration = 300;

  if ( //valid states to close existing lightbox and open new
  defaults["a" /* DEARVIEWER */].activeLightBox.app === undefined || defaults["a" /* DEARVIEWER */].activeLightBox.app === null || defaults["a" /* DEARVIEWER */].activeLightBox.app.closeRequested === true || defaults["a" /* DEARVIEWER */].openLocalFileElement == app // request is through OpenFile function
  ) {
      defaults["a" /* DEARVIEWER */].activeLightBox.app = utils.disposeObject(defaults["a" /* DEARVIEWER */].activeLightBox.app);

      if (defaults["a" /* DEARVIEWER */].activeLightBox.app === null) {
        defaults["a" /* DEARVIEWER */].activeLightBox.show(function () {
          defaults["a" /* DEARVIEWER */].activeLightBox.app = jQuery(defaults["a" /* DEARVIEWER */].activeLightBox.element).dearviewer({
            transparent: false,
            //todo transparent is not available so set to a default background https://github.com/deepak-ghimire/dearviewer/issues/330
            isLightBox: true,
            height: "100%",
            dataElement: app
          });
        });
      }
    }
};

defaults["a" /* DEARVIEWER */].checkBrowserURLforDefaults = function () {
  if (utils.isIEUnsupported) return;
  var viewerType = new URL(location.href).searchParams.get('viewer-type') || new URL(location.href).searchParams.get('viewertype');
  var is3D = new URL(location.href).searchParams.get('is-3d') || new URL(location.href).searchParams.get('is3d');

  if (viewerType) {
    defaults["a" /* DEARVIEWER */].defaults.viewerType = viewerType;
  }

  if (is3D === "true" || is3D === "false") {
    defaults["a" /* DEARVIEWER */].defaults.is3D = is3D === "true";
  }
};

defaults["a" /* DEARVIEWER */].checkBrowserURLforPDF = function () {
  var openFlipbook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (utils.isIEUnsupported) return;
  var pdf = new URL(location.href).searchParams.get('pdf-source');

  if (pdf) {
    pdf = unescape(pdf);

    if (openFlipbook) {
      defaults["a" /* DEARVIEWER */].openFile(pdf);
    }
  }

  return pdf;
}; //Exists if there is need for open file and other lightbox present in the same page. They cannot share same settings.


function createFileInput() {
  var input = defaults["a" /* DEARVIEWER */].openLocalFileInput = jQuery('<input type="file" accept=".pdf" style="display:none">').appendTo(jQuery("body"));
  input.change(function () {
    var files = input[0].files;
    var file;

    if (files.length) {
      var _DEARVIEWER$openLocal;

      file = files[0];
      if (defaults["a" /* DEARVIEWER */].oldLocalFileObjectURL) window.URL.revokeObjectURL(defaults["a" /* DEARVIEWER */].oldLocalFileObjectURL);
      defaults["a" /* DEARVIEWER */].oldLocalFileObjectURL = window.URL.createObjectURL(file);
      input.val(""); //callback to handle any actions once file is selected.

      (_DEARVIEWER$openLocal = defaults["a" /* DEARVIEWER */]['openLocalFileInputChanged']) === null || _DEARVIEWER$openLocal === void 0 ? void 0 : _DEARVIEWER$openLocal.call(defaults["a" /* DEARVIEWER */], defaults["a" /* DEARVIEWER */].oldLocalFileObjectURL, file);
      defaults["a" /* DEARVIEWER */].openFile(defaults["a" /* DEARVIEWER */].oldLocalFileObjectURL);
    }
  });
}

defaults["a" /* DEARVIEWER */].openFile = function (src) {
  if (defaults["a" /* DEARVIEWER */].openLocalFileElement === void 0) {
    defaults["a" /* DEARVIEWER */].openLocalFileElement = jQuery("<div hidden>").appendTo(jQuery("body")).data('option', defaults["a" /* DEARVIEWER */].openFileOptions);
  }

  if (src) {
    defaults["a" /* DEARVIEWER */].openFileOptions.source = src;
    defaults["a" /* DEARVIEWER */].openFileOptions.pdfParameters = null;
  }

  defaults["a" /* DEARVIEWER */].openLightBox(defaults["a" /* DEARVIEWER */].openLocalFileElement);
};

defaults["a" /* DEARVIEWER */].openBase64 = function (data) {
  defaults["a" /* DEARVIEWER */].openFileOptions.source = null;
  defaults["a" /* DEARVIEWER */].openFileOptions.pdfParameters = {
    data: atob(data)
  };
  defaults["a" /* DEARVIEWER */].openFile();
};

defaults["a" /* DEARVIEWER */].openLocalFile = function () {
  if (defaults["a" /* DEARVIEWER */].openLocalFileInput === void 0) {
    createFileInput();
  }

  defaults["a" /* DEARVIEWER */].openLocalFileInput.click();
}; //jQuery events


defaults["a" /* DEARVIEWER */].initControls = function () {
  //Lightbox Trigger
  var body = jQuery('body');

  if (defaults["a" /* DEARVIEWER */].defaults.autoPDFLinktoViewer !== false) {
    body.on('click', 'a[href$=".pdf"]', function (event) {
      var app = jQuery(this); //prevent Download button to trigger Flipbook!

      if (app.attr("download") !== undefined || app.attr("target") === "_blank" || app.hasClass("df-ui-btn") || app.parents(".df-app").length > 0) {} else {
        event.preventDefault();
        app.data('source', app.attr('href'));
        defaults["a" /* DEARVIEWER */].openLightBox(app);
      }
    });
  }

  body.on('click', '.df-sidemenu-buttons .df-ui-close', function () {
    var el = jQuery(this);
    el.closest(".df-app").find(".df-ui-outline.df-active , .df-ui-thumbnail.df-active").trigger("click");
  });
  body.on('mouseout', '.df-link-content section.squareAnnotation, .df-link-content section.textAnnotation', function () {
    var el = jQuery(this);
    defaults["a" /* DEARVIEWER */].handlePopup(el, false);
  });
  body.on('mouseover', '.df-link-content section.squareAnnotation, .df-link-content section.textAnnotation', function () {
    var el = jQuery(this);
    defaults["a" /* DEARVIEWER */].handlePopup(el, true);
  });

  defaults["a" /* DEARVIEWER */].handlePopup = function (el) {
    var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var container = el.closest('.df-container');
    var commentPopup = container.find('.df-comment-popup');
    commentPopup.toggleClass("df-active", show);

    if (show) {
      var elBounds = el[0].getBoundingClientRect();
      var containerBounds = container[0].getBoundingClientRect();
      var popup = el.find(".popupWrapper").first();
      commentPopup.html(popup.html());
      var left = elBounds.left - containerBounds.left;
      if (left + 360 > containerBounds.width) left = containerBounds.width - 360 - 10;else if (left < 10) left = 10;
      var top = elBounds.top - containerBounds.top + elBounds.height + 5;
      if (top + commentPopup.height() > containerBounds.height) top = elBounds.top - commentPopup.height() - elBounds.height - 10;else if (top < 10) top = 10;
      commentPopup.css({
        "left": left,
        "top": top
      });
    }
  };
};


// CONCATENATED MODULE: ./src/js/dearviewer/app.js
function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

/* globals jQuery, pdfjsLib,THREE  */



var app_DV = defaults["a" /* DEARVIEWER */];
var app_REQUEST_STATUS = defaults["a" /* DEARVIEWER */].REQUEST_STATUS,
    app_utils = defaults["a" /* DEARVIEWER */].utils;

var app_App = /*#__PURE__*/function () {
  function App(options) {
    var _this$options$isExter;

    app_classCallCheck(this, App);

    this.options = options;
    this.viewerType = this.options.viewerType;
    this.startPage = 1;
    this.endPage = 1;
    this.element = jQuery(this.options.element);
    this.dimensions = {
      padding: {},
      offset: {},
      pageFit: {},
      stage: {},
      isAutoHeight: options.height === "auto"
    };
    this.is3D = options.is3D;
    this.events = {};
    this.links = options.links;
    this.thumbSize = 128;
    this.pendingZoom = true;
    this.currentPageNumber = this.options.openPage || this.startPage;
    this.pendingZoom = true;
    this.zoomValue = 1;
    this.pageScaling = defaults["a" /* DEARVIEWER */].PAGE_SCALE.MANUAL;
    this.isRTL = options.readDirection === defaults["a" /* DEARVIEWER */].READ_DIRECTION.RTL;
    this.jumpStep = 1;
    this.resizeRequestStatus = app_REQUEST_STATUS.OFF;
    this.refreshRequestStatus = app_REQUEST_STATUS.OFF;
    this.refreshRequestCount = 0;
    this.resizeRequestCount = 0;
    this.fullscreenSupported = app_utils.hasFullscreenEnabled();
    this.thumbRequestCount = 0;
    this.isExternalReady = (_this$options$isExter = this.options.isExternalReady) !== null && _this$options$isExter !== void 0 ? _this$options$isExter : true; //used when external document viewer or logic needs to wait

    this.init();
    if (this.options.autoLightBoxFullscreen === true && this.options.isLightBox === true) this.switchFullscreen(); //doesn't work properly https://github.com/deepak-ghimire/dearviewer/issues/332

    this.executeCallback('onCreate');
    this.target = this;
  }

  app_createClass(App, [{
    key: "init",
    value: function init() {
      var options = this.options,
          app = this;
      app.initDOM();
      app.initResourcesLocation();
      app.initInfo(); //region Source Validation

      if ((options.source == null || options.source.length === 0) && options.pdfParameters == null) {
        app.updateInfo("ERROR: Set a Valid Document Source.", defaults["a" /* DEARVIEWER */].INFO_TYPE.ERROR);
        app.container.removeClass('df-loading').addClass("df-error");
        return;
      } //endregion
      //region Old Browsers


      if (app_utils.isIEUnsupported) {
        app.updateInfo("Your browser (Internet Explorer) is out of date to run DearPDF Flipbook Plugin. <br><a href='https://browsehappy.com/'>Upgrade to a new one</a>", "df-old-browser");
        app.container.removeClass('df-loading').addClass("df-error");
        return;
      } //endregion


      app.commentPopup = jQuery('<div class="df-comment-popup">').appendTo(app.container);
      app.viewer = new app.viewerType(options, this);
      app.sideMenu = new Sidemenu({
        parentElement: this.container
      }, app);
      app.provider = new defaults["a" /* DEARVIEWER */].providers[options.providerType](options, app);
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      this.element.addClass("df-app").removeClass("df-container df-loading");
      this.container = jQuery("<div>").appendTo(this.element); // Q. Why are this.element and this.container defined separately?
      // A. In IOS when fullscreen is used, then the whole this.container can be transferred to the pseudo fullscreen container that stays at the last of the DOM.

      this.container.addClass('df-container df-loading df-init' + " df-controls-" + this.options.controlsPosition + (this.options.controlsFloating === true ? " df-float" : " df-float-off") + (this.options.backgroundColor === 'transparent' ? " df-transparent" : "") + (this.isRTL === true ? " df-rtl" : "") + (app_utils.isIOS === true || app_utils.isIPad === true ? " df-ios" : ""));
      this._offsetParent = this.container[0].offsetParent;
      this.backGround = jQuery("<div class='df-bg'>").appendTo(this.container).css({
        "backgroundColor": this.options.backgroundColor,
        "backgroundImage": this.options.backgroundImage ? "url('" + this.options.backgroundImage + "')" : ''
      });
      this.viewerContainer = jQuery("<div>").appendTo(this.container);
      this.viewerContainer.addClass('df-viewer-container');
    }
    /**
     * Prepares Resource location based on the window[DEARVIEWER.locationVar]
     */

  }, {
    key: "initResourcesLocation",
    value: function initResourcesLocation() {
      var options = this.options;

      if (typeof window[defaults["a" /* DEARVIEWER */].locationVar] !== 'undefined') {
        options.pdfjsSrc = window[defaults["a" /* DEARVIEWER */].locationVar] + "js/libs/pdf.min.js";
        options.threejsSrc = window[defaults["a" /* DEARVIEWER */].locationVar] + "js/libs/three.min.js";
        options.pdfjsWorkerSrc = window[defaults["a" /* DEARVIEWER */].locationVar] + "js/libs/pdf.worker.min.js";
        options.soundFile = window[defaults["a" /* DEARVIEWER */].locationVar] + options.soundFile;
        options.imagesLocation = window[defaults["a" /* DEARVIEWER */].locationVar] + options.imagesLocation;
        options.imageResourcesPath = window[defaults["a" /* DEARVIEWER */].locationVar] + options.imageResourcesPath;
        options.cMapUrl = window[defaults["a" /* DEARVIEWER */].locationVar] + options.cMapUrl;

        if (options.pdfVersion !== undefined) {
          var pdfDir = "";

          if (options.pdfVersion == "latest" || options.pdfVersion == "beta") {
            pdfDir = "latest";
          } else if (options.pdfVersion == "stable") {
            //old stable version
            pdfDir = "stable";
          }

          if (pdfDir !== "default" && pdfDir !== "") {
            options.pdfjsSrc = window[defaults["a" /* DEARVIEWER */].locationVar] + "js/libs/pdfjs/" + pdfDir + "/pdf.min.js";
            options.pdfjsWorkerSrc = window[defaults["a" /* DEARVIEWER */].locationVar] + "js/libs/pdfjs/" + pdfDir + "/pdf.worker.min.js";
          }
        }
      } else {
        console.warn("DEARVIEWER locationVar not found!");
      }

      this.executeCallback('onInitResourcesLocation');
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var app = this,
          containerDOM = this.container[0];
      window.addEventListener("resize", app.events.resize = app.resetResizeRequest.bind(app), false);
      containerDOM.addEventListener("mousemove", app.events.mousemove = app.mouseMove.bind(app), false);
      containerDOM.addEventListener("mousedown", app.events.mousedown = app.mouseDown.bind(app), false);
      window.addEventListener("mouseup", app.events.mouseup = app.mouseUp.bind(app), false);
      containerDOM.addEventListener("touchmove", app.events.touchmove = app.mouseMove.bind(app), false);
      containerDOM.addEventListener("touchstart", app.events.touchstart = app.mouseDown.bind(app), false);
      window.addEventListener("touchend", app.events.touchend = app.mouseUp.bind(app), false);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      if (event.touches && event.touches.length > 1) {
        event.preventDefault();
      }

      if (this.viewer.acceptAppMouseEvents === true) this.viewer.mouseMove(event);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      this.userHasInteracted = true;
      if (this.viewer.acceptAppMouseEvents === true && jQuery(event.srcElement).closest(".df-sidemenu").length === 0) this.viewer.mouseDown(event);
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      if (this.viewer && this.viewer.acceptAppMouseEvents === true) this.viewer.mouseUp(event);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _app$info, _app$loadingIcon, _app$backGround, _app$outlineContainer, _app$commentPopup;

      var app = this,
          containerDOM = this.container[0];
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
      this.autoPlayFunction = null;
      app.provider = app_utils.disposeObject(app.provider);
      app.contentProvider = null;
      app.target = null;
      app.viewer = app_utils.disposeObject(app.viewer);
      app.sideMenu = app_utils.disposeObject(app.sideMenu);
      app.ui = app_utils.disposeObject(app.ui);
      app.thumblist = app_utils.disposeObject(app.thumblist);
      app.outlineViewer = app_utils.disposeObject(app.outlineViewer);

      if (this.events) {
        window.removeEventListener("resize", app.events.resize, false);
        containerDOM.removeEventListener("mousemove", app.events.mousemove, false);
        containerDOM.removeEventListener("mousedown", app.events.mousedown, false);
        window.removeEventListener("mouseup", app.events.mouseup, false);
        containerDOM.removeEventListener("touchmove", app.events.touchmove, false);
        containerDOM.removeEventListener("touchstart", app.events.touchstart, false);
        window.removeEventListener("touchend", app.events.touchend, false);
      }

      app.events = null;
      app.options = null;
      app.element.removeClass("df-app");
      app.viewerType = null;
      app.checkRequestQueue = null;
      (_app$info = app.info) === null || _app$info === void 0 ? void 0 : _app$info.remove();
      app.info = null;
      (_app$loadingIcon = app.loadingIcon) === null || _app$loadingIcon === void 0 ? void 0 : _app$loadingIcon.remove();
      app.loadingIcon = null;
      (_app$backGround = app.backGround) === null || _app$backGround === void 0 ? void 0 : _app$backGround.remove();
      app.backGround = null;
      (_app$outlineContainer = app.outlineContainer) === null || _app$outlineContainer === void 0 ? void 0 : _app$outlineContainer.remove();
      app.outlineContainer = null;
      (_app$commentPopup = app.commentPopup) === null || _app$commentPopup === void 0 ? void 0 : _app$commentPopup.remove();
      app.commentPopup = null;
      app.viewerContainer.off();
      app.viewerContainer.remove();
      app.viewerContainer = null;
      app.container.off();
      app.container.remove();
      app.container = null;
      app.element.off();
      app.element = null;
      app._offsetParent = null;
      app.dimensions = null;
    }
  }, {
    key: "resetResizeRequest",
    value: function resetResizeRequest() {
      this.resizeRequestStatus = app_REQUEST_STATUS.COUNT;
      this.resizeRequestCount = 0;
      this.container.addClass("df-pendingresize");
      this.pendingResize = true;
    }
    /**
     * Prepares the element for displaying Loading icon
     */

  }, {
    key: "initInfo",
    value: function initInfo() {
      this.info = jQuery('<div>', {
        "class": 'df-loading-info'
      });
      this.container.append(this.info);
      this.info.html(this.options.text.loading + "...");
      this.loadingIcon = jQuery('<div>', {
        "class": 'df-loading-icon'
      }).appendTo(this.container);
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "updateInfo",
    value: function updateInfo(message, className) {
      app_utils.log(message);

      if (this.info !== void 0) {
        this.info.html(message);
      }
    }
  }, {
    key: "_documentLoaded",
    value: function _documentLoaded() {
      app_utils.log("Document Loaded");
      this.isDocumentReady = true;
      this.contentProvider = this.provider;
      this.executeCallback('onDocumentLoad');
      this.endPage = this.pageCount = this.provider.pageCount;
      this.currentPageNumber = this.getValidPage(this.currentPageNumber);
      this.requestFinalize();
    }
  }, {
    key: "_viewerPrepared",
    value: function _viewerPrepared() {
      app_utils.log("Viewer Prepared");
      this.isViewerPrepared = true;
      this.executeCallback('onViewerLoad');
      this.requestFinalize();
    }
  }, {
    key: "requestFinalize",
    value: function requestFinalize() {
      if (this.isDocumentReady !== true || this.isViewerPrepared !== true || this.isExternalReady !== true || this.finalizeRequested === true) return;
      this.finalizeRequested = true;
      this.finalize();
    }
  }, {
    key: "finalize",
    value: function finalize() {
      this.viewer.init();
      this.ui = new controls_UI({}, this);
      this.ui.init();
      this.resize();
      this.ui.update();
      this.initEvents();

      if (this.options.isLightBox == true) {
        this.analytics({
          eventAction: this.options.analyticsViewerOpen,
          options: this.options
        });
      }

      this.container.removeClass('df-loading df-init');
      this.viewer.onReady();
      this.analytics({
        eventAction: this.options.analyticsViewerReady,
        options: this.options
      });
      this.checkRequestQueue();
      this.executeCallback('onReady');
      app_utils.focusHash(this.options.dataElement);
      app_utils.log("App Finalized");
    }
  }, {
    key: "initOutline",
    value: function initOutline() {
      var app = this;
      var outlineContainer = jQuery('<div>').addClass("df-outline-container df-sidemenu");
      var outlineWrapper = jQuery('<div>').addClass("df-wrapper");
      outlineContainer.append(outlineWrapper);
      app.sideMenu.element.append(outlineContainer);
      app.outlineContainer = outlineContainer;
      app.outlineViewer = new BookMarkViewer({
        container: outlineWrapper[0],
        linkService: app.provider.linkService,
        outlineItemClass: "df-outline-item",
        outlineToggleClass: "df-outline-toggle",
        outlineToggleHiddenClass: "df-outlines-hidden"
      });
      app.outlineViewer.render({
        outline: app.provider.outline
      });
    }
  }, {
    key: "initThumbs",
    value: function initThumbs() {
      var app = this;
      app.thumblist = new controls_ThumbList({
        app: app,
        addFn: function addFn(row) {},
        scrollFn: function scrollFn() {
          app.thumbRequestStatus = app_REQUEST_STATUS.ON;
        },
        itemHeight: app.thumbSize,
        itemWidth: app_utils.limitAt(Math.floor(app.dimensions.coverPage.ratio * app.thumbSize), 32, 180),
        totalRows: app.pageCount
      });
      app.thumblist.lastScrolled = Date.now();
      app.thumbRequestStatus = app_REQUEST_STATUS.ON;
      var thumbContainer = jQuery('<div>').addClass("df-thumb-container df-sidemenu");
      thumbContainer.append(jQuery(app.thumblist.container).addClass("df-wrapper"));
      app.thumbContainer = thumbContainer;
      app.sideMenu.element.append(thumbContainer);
      app.container.on('click', '.df-thumb-container .df-thumb', function (e) {
        e.stopPropagation();
        var id = jQuery(this).attr("id").replace("df-thumb", "");
        app.gotoPage(parseInt(id, 10));
      });
    }
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {
      var app = this;

      if (app.checkRequestQueue) {
        requestAnimationFrame(function () {
          if (app && app.checkRequestQueue) app.checkRequestQueue();
        });
      } //offsetParent changes when display : none to block changes, scenarios in tab


      if (app.container && app.container[0] // && app.options.isLightBox !== true
      && app._offsetParent !== app.container[0].offsetParent) {
        app._offsetParent = app.container[0].offsetParent;

        if (app._offsetParent !== null) {
          app.resize();
          app.resizeRequestStatus = app_REQUEST_STATUS.OFF;
        }

        app_utils.log("Visibility Resize Detected");
      }

      if (app._offsetParent === null && !app.isFullscreen) return; // Removed since stage.render() is called from app.viewer.render(); - encapsulated
      // if (app.viewer.stage && app.viewer.stage.render)
      //   app.viewer.stage.render();

      if (TWEEN.getAll().length > 0) {
        TWEEN.update();
        app.renderRequestStatus = app_REQUEST_STATUS.ON;
      }

      if (app.resizeRequestStatus === app_REQUEST_STATUS.ON) {
        app.resizeRequestStatus = app_REQUEST_STATUS.OFF;
        app.resize();
      } else if (app.resizeRequestStatus === app_REQUEST_STATUS.COUNT) {
        app.resizeRequestCount++;

        if (app.resizeRequestCount > 10) {
          app.resizeRequestCount = 0;
          app.resizeRequestStatus = app_REQUEST_STATUS.ON;
        }
      }

      if (app.refreshRequestStatus === app_REQUEST_STATUS.ON) {
        app.refreshRequestStatus = app_REQUEST_STATUS.OFF;
        app.pendingResize = false;
        app.viewer.refresh();
        this.container.removeClass("df-pendingresize");
      } else if (app.refreshRequestStatus === app_REQUEST_STATUS.COUNT) {
        app.refreshRequestCount++;

        if (app.refreshRequestCount > 3) {
          app.refreshRequestCount = 0;
          app.refreshRequestStatus = app_REQUEST_STATUS.ON;
        }
      }

      if (app.textureRequestStatus === app_REQUEST_STATUS.ON) {
        app.processTextureRequest();
      }

      if (app.thumbRequestStatus === app_REQUEST_STATUS.ON) app.processThumbRequest();else if (app.thumbRequestStatus === app_REQUEST_STATUS.COUNT) {
        app.thumbRequestCount++;

        if (app.thumbRequestCount > 3) {
          app.thumbRequestCount = 0;
          app.thumbRequestStatus = app_REQUEST_STATUS.ON;
        }
      }

      if (app.renderRequestStatus === app_REQUEST_STATUS.ON) {
        app.viewer.render();
        app.renderRequestStatus = app_REQUEST_STATUS.OFF;
      }

      app.provider.checkRequestQueue();
      app.viewer.checkRequestQueue();
    }
  }, {
    key: "processTextureRequest",
    value: function processTextureRequest() {
      // utils.log("Texture Request Preparing");
      var app = this,
          viewer = this.viewer,
          provider = this.provider;
      var visible = viewer.getVisiblePages().main,
          page,
          textureSize,
          requestCount = 0,
          zoomView = app.zoomValue > 1; //this should be independent of zoomview

      if (!viewer.isAnimating()) {
        app_utils.log("Texture Request Working");

        for (var i = 0; i < visible.length; i++) {
          requestCount = 0;
          var pageNumber = visible[i];

          if (pageNumber > 0 && pageNumber <= app.pageCount) {
            page = zoomView ? viewer.zoomViewer.getPageByNumber(pageNumber) : viewer.getPageByNumber(pageNumber);

            if (page) {
              textureSize = viewer.getTextureSize({
                pageNumber: pageNumber
              });
              textureSize = app_utils.limitAt(textureSize, 1, app.dimensions.maxTextureHeight);

              if (page.changeTexture(pageNumber, Math.floor(textureSize.height))) {
                provider.processPage({
                  pageNumber: pageNumber,
                  textureTarget: zoomView ? defaults["a" /* DEARVIEWER */].TEXTURE_TARGET.ZOOM : defaults["a" /* DEARVIEWER */].TEXTURE_TARGET.VIEWER
                });
                requestCount++;
                app.viewer.getAnnotationElement(pageNumber, true);
              }
            }

            if (requestCount > 0) break;
          }
        }

        if (requestCount === 0) {
          app.textureRequestStatus = app_REQUEST_STATUS.OFF;
        }
      } else {
        app.textureRequestStatus = app_REQUEST_STATUS.ON;
      }
    }
  }, {
    key: "applyTexture",
    value: function applyTexture(canvas, param) {
      var app = this;
      var isCanvas = canvas.toDataURL !== void 0;

      if (param.textureTarget === defaults["a" /* DEARVIEWER */].TEXTURE_TARGET.THUMB) {
        param.height = canvas.height;
        param.width = canvas.width;

        if (!isCanvas) {
          //case of direct image
          param.texture = canvas.src;
        } else {
          var src = canvas.toDataURL('image/png');
          app.provider.setCache(param.pageNumber, src, app.thumbSize);
          param.texture = src;
        }

        app.thumblist.setPage(param);
      } else {
        param.texture = isCanvas ? canvas : canvas.src;
        var set = app.viewer.setPage(param);

        if (set === true) {
          app.provider.processAnnotations(param.pageNumber, app.viewer.getAnnotationElement(param.pageNumber, true));
          app.provider.processTextContent(param.pageNumber, app.viewer.getTextElement(param.pageNumber, true));
        }
      }
    }
  }, {
    key: "processThumbRequest",
    value: function processThumbRequest() {
      if (this.thumblist !== null && this.thumblist !== undefined) this.thumblist.processThumbRequest();
    }
  }, {
    key: "refreshRequestStart",
    value: function refreshRequestStart() {
      this.refreshRequestStatus = app_REQUEST_STATUS.COUNT;
      this.refreshRequestCount = 0;
    }
  }, {
    key: "renderRequestStart",
    value: function renderRequestStart() {
      this.renderRequestStatus = app_REQUEST_STATUS.ON;
    }
  }, {
    key: "resizeRequestStart",
    value: function resizeRequestStart() {
      this.resizeRequestStatus = app_REQUEST_STATUS.ON;
    }
  }, {
    key: "zoom",
    value: function zoom(delta) {
      var app = this;
      app.pendingZoom = true;
      app.zoomDelta = delta;
      app.resize();
    }
  }, {
    key: "resetZoom",
    value: function resetZoom() {
      if (this.zoomValue !== 1) {
        this.zoomValue = 1.001;
        this.zoom(-1);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var _jQuery$height, _app$options$headerEl;

      var textureRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      app_utils.log("Resize Request Initiated");
      var app = this,
          isSideMenuOpen = app.container.hasClass("df-sidemenu-open"),
          dimensions = app.dimensions,
          padding = app.dimensions.padding,
          windowHeight = jQuery(window).height(); // region Calculation of Offset and Padding

      dimensions.offset = {
        top: 0,
        left: !app.options.sideMenuOverlay && isSideMenuOpen && !app.isRTL ? 220 : 0,
        right: !app.options.sideMenuOverlay && isSideMenuOpen && app.isRTL ? 220 : 0,
        bottom: 0,
        width: !app.options.sideMenuOverlay && isSideMenuOpen ? 220 : 0
      };
      app.viewerContainer.css({
        left: dimensions.offset.left,
        right: dimensions.offset.right
      });
      var controlsHeight = dimensions.controlsHeight = app.container.find(".df-ui").height();
      padding.top = app.options.paddingTop + (app.options.controlsPosition === defaults["a" /* DEARVIEWER */].CONTROLS_POSITION.TOP ? controlsHeight : 0);
      padding.left = app.options.paddingLeft;
      padding.right = app.options.paddingRight;
      padding.bottom = app.options.paddingBottom + (app.options.controlsPosition === defaults["a" /* DEARVIEWER */].CONTROLS_POSITION.BOTTOM ? controlsHeight : 0);
      padding.height = padding.top + padding.bottom;
      padding.width = padding.left + padding.right;
      padding.heightDiff = padding.top - padding.bottom;
      padding.widthDiff = padding.left - padding.right; //endregion
      //Priority: (isFullSize|isLockedHeight > isLockedHeight) > autoHeight

      dimensions.isFullSize = app.isFullscreen === true;
      dimensions.isFixedHeight = dimensions.isFullSize || !dimensions.isAutoHeight;
      dimensions.containerWidth = dimensions.isFullSize ? jQuery(window).width() : this.element.width();
      app.container.toggleClass('df-xs', dimensions.containerWidth < 400).toggleClass('df-xss', dimensions.containerWidth < 320); //region Determine MaxHeight

      dimensions.maxHeight = windowHeight - (dimensions.containerWidth > 600 ? (_jQuery$height = jQuery((_app$options$headerEl = app.options.headerElementSelector) !== null && _app$options$headerEl !== void 0 ? _app$options$headerEl : "#wpadminbar").height()) !== null && _jQuery$height !== void 0 ? _jQuery$height : 0 : 0);

      if (dimensions.isFixedHeight) {
        if (dimensions.isFullSize) {
          dimensions.maxHeight = windowHeight;
        } else {
          //locked height but not in fullsize
          //incase height is restricted by value provided by user, we need to determine that first
          //test height on element, but apply on container.
          app.element.height(app.options.height);

          var _height = app.element.height();

          dimensions.maxHeight = Math.min(_height, dimensions.maxHeight);
        }
      } else {} //endregion
      //Reference size is not the cover page. IT IS THE VIRTUAL AVAILABLE ZONE
      //we have outerWidth, it gives innerwidth
      //with innerwidth we get innerheight and then outerHeight
      //app should only store outerWidth and outerHeight


      var outerWidth = dimensions.width,
          innerWidth = dimensions.stage.innerWidth = this.viewer._getInnerWidth(),
          // innerwidth finalized by viewers
      innerHeight = dimensions.stage.innerHeight = this.viewer._getInnerHeight(),
          outerHeight = this.viewer._getOuterHeight(innerHeight + dimensions.padding.height);

      dimensions.containerHeight = dimensions.isFullSize ? windowHeight : outerHeight;
      app.element.height(dimensions.containerHeight); //Case when User sets height through CSS override.  #199

      var testHeight = app.element.height();

      if (!dimensions.isFullSize && testHeight != dimensions.containerHeight) {
        dimensions.containerHeight = testHeight;
        dimensions.stage.innerHeight = testHeight - dimensions.padding.height;
        dimensions.stage.height = testHeight;
      }
      /*ZOOM values*/


      dimensions.origin = {
        //required in zoom
        x: (padding.widthDiff + dimensions.containerWidth - dimensions.offset.left - dimensions.offset.right) / 2,
        y: (padding.heightDiff + dimensions.containerHeight) / 2
      };
      app.viewer.handleZoom();
      app.viewer.resize();
      if (textureRefresh === false) return;

      if (app.pendingZoom) {
        this.viewer.refresh();
        app_utils.log("Pending Zoom updated");
      } else this.refreshRequestStart();

      this.ui.update();
      this.renderRequestStatus = app_REQUEST_STATUS.ON;
      app.zoomChanged = false;
      app.pendingZoom = false;
      this.executeCallback('afterResize');
    }
  }, {
    key: "hasOutline",
    value: function hasOutline() {
      if (this.provider.outline.length > 0) return true;
    }
  }, {
    key: "switchFullscreen",
    value: function switchFullscreen() {
      var _app$ui, _app$ui$controls;

      var app = this; // ui = viewer.ui;

      var element = app.container[0];
      app.container.toggleClass("df-fullscreen", app.isFullscreen !== true);
      if (app === null || app === void 0 ? void 0 : (_app$ui = app.ui) === null || _app$ui === void 0 ? void 0 : (_app$ui$controls = _app$ui.controls) === null || _app$ui$controls === void 0 ? void 0 : _app$ui$controls.fullscreen) app.ui.controls.fullScreen.toggleClass(app.options.icons["fullscreen-off"], app.isFullscreen !== true);

      if (app.isFullscreen !== true) {
        var _promise = null; //noinspection JSUnresolvedVariable

        if (element['requestFullscreen']) {
          _promise = element['requestFullscreen']();
        } else if (element['msRequestFullscreen']) {
          _promise = element['msRequestFullscreen']();
        } else if (element['mozRequestFullScreen']) {
          _promise = element['mozRequestFullScreen']();
        } else if (element['webkitRequestFullscreen']) {
          _promise = element['webkitRequestFullscreen']();
        }

        if (_promise && _promise["then"]) {
          _promise.then(function () {
            app.refreshRequestStatus === app_REQUEST_STATUS.ON;
            app.resize();
          });
        }

        app.isFullscreen = true;
      } else {
        app.isFullscreen = false;

        if (document['exitFullscreen']) {
          if (document.fullscreenElement) document['exitFullscreen']();
        } else if (document['msExitFullscreen']) {
          document['msExitFullscreen']();
        } else if (document['mozCancelFullScreen']) {
          document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
          document['webkitExitFullscreen']();
        } // if (app.options.autoLightBoxFullscreen === true && app.options.isLightBox === true) {
        //   DEARPDF.activeLightBox.close();
        // }


        if (!app_utils.hasFullscreenEnabled()) {
          app.container[0].scrollIntoView();
        }
      }

      if (!app_utils.hasFullscreenEnabled()) {
        app.resizeRequestStatus = app_REQUEST_STATUS.ON;
      }
    } //region Navigation

  }, {
    key: "next",
    value: function next() {
      this.jumpBy(this.jumpStep);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.jumpBy(-this.jumpStep);
    }
  }, {
    key: "jumpBy",
    value: function jumpBy(step) {
      var nextPage = this.currentPageNumber + step;
      nextPage = app_utils.limitAt(nextPage, this.startPage, this.endPage);

      if (this.anyFirstPageChanged != true) {
        this.analytics({
          eventAction: this.options.analyticsFirstPageChange,
          options: this.options
        });
        this.anyFirstPageChanged = true;
      }

      this.gotoPage(nextPage);
      this.ui.update();
    }
  }, {
    key: "openRight",
    value: function openRight() {
      this.isRTL ? this.prev() : this.next();
    }
  }, {
    key: "openLeft",
    value: function openLeft() {
      this.isRTL ? this.next() : this.prev();
    }
  }, {
    key: "start",
    value: function start() {
      this.gotoPage(this.startPage);
    }
  }, {
    key: "end",
    value: function end() {
      this.gotoPage(this.endPage);
    }
  }, {
    key: "gotoPage",
    value: function gotoPage(pageNumber) {
      var app = this;
      pageNumber = app.getValidPage(parseInt(pageNumber, 10));
      if (app.viewer === null || app.viewer.validatePageChange(pageNumber) === false) return;
      this.executeCallback('beforePageChanged');
      app.requestDestRefKey = undefined;
      app.container.removeClass('df-fetch-pdf');
      app.oldPageNumber = app.currentPageNumber;
      app.currentPageNumber = pageNumber;
      app.thumbRequestStatus = app_REQUEST_STATUS.ON;
      if (app.viewer.gotoPageCallBack) app.viewer.gotoPageCallBack();
      app.ui.update();

      if (this.autoPlay == true) {
        this.setAutoPlay(this.autoPlay);
      }

      this.executeCallback('onPageChanged');
    }
  }, {
    key: "autoPlayFunction",
    value: function autoPlayFunction() {
      if (this && this.autoPlay) {
        this.next();
      }
    }
  }, {
    key: "setAutoPlay",
    value: function setAutoPlay(isPlay) {
      if (this.options.autoPlay) {
        isPlay = isPlay == true;
        var text = isPlay ? this.options.text.pause : this.options.text.play;
        this.ui.controls.play.toggleClass(this.options.icons['pause'], isPlay);
        this.ui.controls.play.html("<span>" + text + "</span>");
        this.ui.controls.play.attr("title", text);
        clearInterval(this.autoPlayTimer);

        if (isPlay) {
          this.autoPlayTimer = setInterval(this.autoPlayFunction.bind(this), this.options.autoPlayDuration);
        }

        this.autoPlay = isPlay;
      }
    } //endregion

  }, {
    key: "getValidPage",
    value: function getValidPage(pageNumber) {
      var app = this;
      if (isNaN(pageNumber)) pageNumber = app.currentPageNumber;else if (pageNumber < 1) pageNumber = 1;else if (pageNumber > app.pageCount) pageNumber = app.pageCount;
      return pageNumber;
    }
  }, {
    key: "getURLHash",
    value: function getURLHash() {
      if (this.options.id != null) {
        var hash = app_utils.getSharePrefix(this.options.sharePrefix) + (this.options.slug != null ? this.options.slug : this.options.id) + "/";

        if (this.currentPageNumber != null) {
          hash += this.currentPageNumber + "/";
        }

        window.location.hash = hash;
      }

      return window.location.href;
    }
  }, {
    key: "executeCallback",
    value: function executeCallback(callbackName) {}
  }, {
    key: "analytics",
    value: function analytics(eventData) {}
  }]);

  return App;
}();

defaults["a" /* DEARVIEWER */].prepareOptions = function (options) {
  //convert the element to jQuery Element
  if (!(options.element instanceof jQuery)) options.element = jQuery(options.element);
  var element = options.element;
  /**
   * @type {jQuery|HTMLElement} - is useful when lightbox is displayed in one location but the options are pulled from another button or thumb element. Used by internal lightbox. No external use.
   */

  if (options.dataElement == null) {
    options.dataElement = element;
  }

  var dataElement = options.dataElement; //region Merge Options

  var elementOptions = defaults["a" /* DEARVIEWER */].utils.getOptions(dataElement);
  var customOptions = jQuery.extend(true, //deep scan and merge
  {}, //an empty object – this is to keep from overriding our "defaults" object
  defaults["a" /* DEARVIEWER */].defaults, options, elementOptions);
  customOptions = app_utils.fallbackOptions(customOptions);
  app_utils.log(customOptions); //Note: ... spread will overwrite undefined variables too and won't perform deep scan

  var opts = jQuery.extend( // Extend our default options with those provided.
  true, //deep scan and merge
  {}, //an empty object – this is to keep from overriding our "defaults" object
  defaults["a" /* DEARVIEWER */]._defaults, customOptions); //endregion
  //check for mobile ViewerType

  if (app_utils.isMobile && typeof defaults["a" /* DEARVIEWER */].viewers[opts.mobileViewerType] == "function") {
    opts.viewerType = opts.mobileViewerType;
  }

  if (typeof defaults["a" /* DEARVIEWER */].viewers[opts.viewerType] !== "function") {
    console.warn("Invalid Viewer Type! " + opts.viewerType + " | Using default Viewer!");
    opts.viewerType = defaults["a" /* DEARVIEWER */].viewers["default"];
  } else {
    opts.viewerType = defaults["a" /* DEARVIEWER */].viewers[opts.viewerType];
  }

  opts = app_utils.finalizeOptions(app_utils.sanitizeOptions(opts));
  return opts;
};

defaults["a" /* DEARVIEWER */].Application = function (options) {
  var opts = defaults["a" /* DEARVIEWER */].prepareOptions(options);
  var app = new app_App(opts);

  if (opts.id != null && opts.isLightBox !== true) {
    window[opts.id.toString()] = app;
  }

  return app;
}; //region jQuery Extension and Triggers
//jQuery Extension


jQuery.fn.extend({
  dearviewer_options: function dearviewer_options(options) {
    if (options == null) options = {};
    options.element = jQuery(this);
    return new defaults["a" /* DEARVIEWER */].prepareOptions(options);
  },
  dearviewer: function dearviewer(options) {
    if (options == null) options = {};
    options.element = jQuery(this);
    return new defaults["a" /* DEARVIEWER */].Application(options);
  }
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reader; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _base_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var utils = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].utils;

var Reader = /*#__PURE__*/function (_BaseViewer) {
  _inherits(Reader, _BaseViewer);

  var _super = _createSuper(Reader);

  function Reader(options, appContext) {
    var _this;

    _classCallCheck(this, Reader);

    options.viewerClass = "df-reader";
    appContext.options.mouseScrollAction = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].MOUSE_SCROLL_ACTIONS.NONE;
    _this = _super.call(this, options, appContext);
    _this.app.jumpStep = 1;
    _this.minZoom = 0.25;
    _this.stackCount = _this.app.pageCount;
    _this.app.options.paddingLeft = 0;
    _this.app.options.paddingRight = 0;
    _this.app.options.paddingTop = 10;
    _this.app.options.paddingBottom = _this.app.options.controlsFloating === true ? 20 : 10;
    _this.app.pageScaling = _this.app.options.pageScale;
    _this.acceptAppMouseEvents = true; //fixes #236 doublemouse events were passed

    _this.scrollStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.OFF;
    _this.deltaPanX = 0;
    _this.deltaPanY = 0; // this.app.options.pageSize = DEARVIEWER.PAGE_
    // this.app.options.hideControls = "zoomIn,zoomOut";

    appContext._viewerPrepared();

    _this.zoomViewer = _assertThisInitialized(_this); //todo zoomviewer is a bad idea at base

    return _this;
  }

  _createClass(Reader, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Reader.prototype), "init", this).call(this);

      this.initEvents();
      this.initPages();
      this.initScrollBar();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.stageDOM = this.element[0];

      _get(_getPrototypeOf(Reader.prototype), "initEvents", this).call(this);
    }
  }, {
    key: "initPages",
    value: function initPages() {
      this.stackCount = this.app.pageCount;

      for (var count = 0; count < this.stackCount; count++) {
        var page = new _page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]({
          parentElement: this.wrapper
        });
        page.index = count; //just reference for debugging

        page.viewer = this;
        this.pages.push(page);
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      this.scrollBar = jQuery("<div class='df-reader-scrollbar'>"); //adding scrollbar to viewer.wrapper doesn't fit properly with mobile momentum scroll, shaky movement is detected

      this.scrollBar.appendTo(this.app.container); //solved #237

      this.scrollPageNumber = jQuery("<div class='df-reader-scroll-page-number'>").appendTo(this.app.container);
    }
  }, {
    key: "afterControlUpdate",
    value: function afterControlUpdate() {
      this.scrollBar[0].innerHTML = this.app.currentPageNumber;
      this.scrollPageNumber[0].innerHTML = this.app.currentPageNumber + "<div>of " + this.app.pageCount + "</div>";
    }
  }, {
    key: "updateBuffer",
    value: function updateBuffer(page) {
      if (page.textureStamp === "-1" || page.pageNumber === void 0) return;
      var index = page.pageNumber,
          farthest = page.pageNumber,
          farthestIndex = 0;

      for (var count = 0; count < this.pageBuffer.length; count++) {
        var _pageNumber = this.pageBuffer[count].pageNumber;

        if (index === _pageNumber) {
          utils.log("Page " + index + " already in buffer, skipping");
          return;
        }

        if (Math.abs(this.app.currentPageNumber - _pageNumber) > Math.abs(this.app.currentPageNumber - farthest)) {
          farthest = _pageNumber;
          farthestIndex = count;
        }
      }

      this.pageBuffer.push(page);

      if (this.pageBuffer.length > this.pageBufferSize) {
        utils.log("Farthest buffer: " + farthest);
        this.pageBuffer[farthestIndex].reset();
        this.pageBuffer.splice(farthestIndex, 1);
      }
    }
  }, {
    key: "initCustomControls",
    value: function initCustomControls() {
      var ui = this.app.ui;
      var controls = ui.controls;
      controls.openRight.hide();
      controls.openLeft.hide();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(Reader.prototype), "dispose", this).call(this);

      if (this.scrollBar) this.scrollBar.remove();
      if (this.scrollPageNumber) this.scrollPageNumber.remove();
      this.element.remove();
    }
  }, {
    key: "_getInnerHeight",
    value: function _getInnerHeight() {
      var height = _get(_getPrototypeOf(Reader.prototype), "_getInnerHeight", this).call(this),
          appHeight = this.app.dimensions.maxHeight - this.app.dimensions.padding.height;

      var viewPort = this.app.dimensions.coverPage.viewPort;
      var maxWidth = this.app.dimensions.containerWidth - 20;
      if (this.app.pageScaling === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].PAGE_SCALE.ACTUAL) maxWidth = this.app.provider.coverPage.viewPort.width * 1; //if it's page fit it's from the available height

      var maxHeight = appHeight;
      if (this.app.pageScaling === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].PAGE_SCALE.PAGE_WIDTH) maxHeight = viewPort.height * 100;else if (this.app.pageScaling === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].PAGE_SCALE.AUTO) maxHeight = viewPort.height * 1.5;else if (this.app.pageScaling === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].PAGE_SCALE.ACTUAL) maxHeight = viewPort.height * 1;
      maxHeight = maxHeight - 2;
      this._containCover = utils.contain(viewPort.width * 100, viewPort.height * 100, maxWidth, maxHeight);
      maxHeight = Math.min(appHeight, this._containCover.height + 2);
      this.app.pageScaleValue = this._containCover.height / viewPort.height;
      return this.app.dimensions.isFixedHeight ? appHeight : maxHeight;
    }
  }, {
    key: "handleZoom",
    value: function handleZoom() {
      var app = this.app;
      var maxZoom = this.maxZoom = 4,
          //app.dimensions.maxTextureHeight / this._containCover.height,
      // todo find a solution than can land properly in zoom value 1.
      zoomValue = app.zoomValue;

      if (app.pendingZoom === true && app.zoomDelta != null) {
        var delta = app.zoomDelta;
        zoomValue = delta > 0 ? zoomValue * app.options.zoomRatio : zoomValue / app.options.zoomRatio;
      } else if (this.lastScale != null) {
        zoomValue *= this.lastScale;
        this.lastScale = null;
      }

      zoomValue = utils.limitAt(zoomValue, this.minZoom, maxZoom);
      app.zoomValueChange = zoomValue / app.zoomValue;
      app.zoomChanged = app.zoomValue !== zoomValue;
      app.zoomValue = zoomValue;
    }
  }, {
    key: "resize",
    value: function resize() {
      var viewer = this;
      var app = viewer.app;
      var dimensions = app.dimensions,
          padding = app.dimensions.padding;
      var shiftHeight = this.shiftHeight = 0,
          shiftWidth = 0;
      this.element.css({
        top: -shiftHeight,
        bottom: -shiftHeight,
        right: -shiftWidth,
        //+ (isRTL ? sideShift : 0),
        left: -shiftWidth,
        //(isRTL ? 0 : sideShift),
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left
      });
      var topVisiblePage = viewer.pages[viewer.getVisiblePages().main[0] - 1].element[0];
      var rect = topVisiblePage.getBoundingClientRect();
      var rectParent = this.parentElement[0].getBoundingClientRect(); // if (app.provider.coverPage) {//todo_old this shouldn't be called before coverpage

      for (var count = 0; count < viewer.pages.length; count++) {
        var page = viewer.pages[count];
        var viewPort = viewer.getViewPort(count + 1, true); // page.element

        var els = page.element[0].style;
        els.height = Math.floor(viewPort.height * app.pageScaleValue * app.zoomValue) + "px";
        els.width = Math.floor(viewPort.width * app.pageScaleValue * app.zoomValue) + "px";
      }

      if (viewer.oldScrollHeight != viewer.element[0].scrollHeight && viewer.oldScrollHeight !== void 0) {
        var _this$zoomCenter;

        var delta = viewer.element[0].scrollHeight / viewer.oldScrollHeight;
        viewer.skipScrollCheck = true;
        var top = topVisiblePage.offsetTop + topVisiblePage.clientTop - (rect.top - rectParent.top + topVisiblePage.clientTop) * delta,
            left = topVisiblePage.offsetLeft + topVisiblePage.clientLeft - (rect.left - rectParent.left + topVisiblePage.clientLeft) * delta; //10 is margin that zooms too and reset to 10

        top += (delta - 1) * 10 / 2;
        left += (delta - 1) * 10 / 2;
        this.zoomCenter = (_this$zoomCenter = this.zoomCenter) !== null && _this$zoomCenter !== void 0 ? _this$zoomCenter : {
          x: 0,
          //(viewer.element[0].offsetWidth) / 2,
          y: 0 //(viewer.element[0].offsetHeight) / 2

        }; //if pinch zoom , then move to center

        top += (delta - 1) * this.zoomCenter.y;
        left += (delta - 1) * this.zoomCenter.x;
        this.zoomCenter = null;
        viewer.element[0].scrollTop = top;
        viewer.element[0].scrollLeft = left;
        viewer.skipScrollCheck = false;
      }

      viewer.oldScrollHeight = viewer.element[0].scrollHeight; // this.updatePendingStatusClass();

      this.scrollBar[0].style.transform = "none";
      this.updateScrollBar();
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.gotoPageCallBack();
      this.oldScrollHeight = this.element[0].scrollHeight;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var viewer = this;
      var app = this.app;
      var visible = viewer.getVisiblePages().main;

      for (var _pageCount = 0; _pageCount < visible.length; _pageCount++) {
        var page = void 0,
            _pageNumber = visible[_pageCount];
        page = viewer.pages[_pageNumber - 1];
        var pageChanged = _pageNumber !== page.pageNumber; //Determine Page Situation

        if (pageChanged) {
          //texture reset
          page.resetTexture();
          this.app.textureRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
        }

        page.element.attr("number", _pageNumber);
        page.pageNumber = _pageNumber; // page.name = _pageNumber.toString();
      }

      viewer.requestRefresh(false);
      app.textureRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON; // viewer.element.toggleClass("df-noscroll", !(viewer.element[0].scrollHeight > viewer.element[0].offsetHeight));
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      // if (this.scrollStatus === DEARVIEWER.REQUEST_STATUS.ON) console.log("animating");
      return this.scrollStatus === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON || this.scrollStatus === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.COUNT;
    }
  }, {
    key: "checkRequestQueue",
    value: function checkRequestQueue() {
      _get(_getPrototypeOf(Reader.prototype), "checkRequestQueue", this).call(this);

      if (this.scrollStatus === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON) {
        this.scrollStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.OFF;
      }

      if (this.scrollStatus === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.COUNT) {
        //skip one beat
        this.scrollStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;
      }
    }
  }, {
    key: "getVisiblePages",
    value: function getVisiblePages() {
      var visiblePages = utils.getVisibleElements({
        container: this.element[0],
        elements: this.wrapper[0].children
      });

      if (visiblePages.length === 0) {
        visiblePages = [this.app.currentPageNumber];
      }

      return {
        main: visiblePages,
        buffer: []
      };
    }
  }, {
    key: "getPageByNumber",
    value: function getPageByNumber(pageNumber) {
      var page = this.pages[pageNumber - 1];

      if (page === undefined) {
        utils.log("Page Not found for: " + pageNumber);
      }

      return page;
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var viewer = this;
      var center = viewer.element[0].scrollTop + viewer.app.dimensions.containerHeight / 2; // Triggers reflow

      var visible = viewer.getVisiblePages().main;
      var pageIndex = visible[0];

      for (var i = 0; i < visible.length; i++) {
        pageIndex = visible[i];
        var element = viewer.pages[pageIndex - 1].element[0];
        var top = element.offsetTop + element.clientTop;

        if (top <= center && element.clientHeight + top >= center) {
          //page starts before center and ends after center
          break;
        } else if (i > 0 && top > center && element.clientHeight + top >= center) {
          //page has crossed center
          pageIndex = visible[i - 1];
          break;
        }
      }

      viewer.skipScrollIntoView = true;
      viewer.app.gotoPage(pageIndex);
      viewer.skipScrollIntoView = false;
      viewer.updateScrollBar();
      event.preventDefault && event.preventDefault();
      event.stopPropagation();
      viewer.requestRefresh();
      this.scrollStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.COUNT;
      _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].handlePopup(viewer.element, false);
    }
  }, {
    key: "updateScrollBar",
    value: function updateScrollBar() {
      var el = this.element[0],
          container = this.app.container[0],
          top = 60,
          bottom = 60,
          height = 40; // this.scrollBar[0].style.top = (el.scrollTop + ((el.offsetHeight - height) * el.scrollTop / (el.scrollHeight - el.offsetHeight))) + "px";
      // this.scrollBar[0].style.top = (el.scrollTop + top + ((el.offsetHeight - height - top - bottom) * el.scrollTop / (el.scrollHeight - el.offsetHeight))) + "px";
      // this.scrollBar[0].style.right = -el.scrollLeft + "px";

      var x = el.scrollLeft,
          y = top + (el.offsetHeight - height - top - bottom) * el.scrollTop / (el.scrollHeight - el.offsetHeight);

      if (isNaN(y)) {
        y = top;
      }

      this.scrollBar.lastY = y;
      this.scrollBar[0].style.transform = 'translateY(' + y + 'px)';
    }
  }, {
    key: "validatePageChange",
    value: function validatePageChange(pageNumber) {
      true;
    }
  }, {
    key: "gotoPageCallBack",
    value: function gotoPageCallBack() {
      var viewer = this;

      if (viewer.skipScrollIntoView !== true) {
        var page = viewer.getPageByNumber(viewer.app.currentPageNumber);
        if (page != null) utils.scrollIntoView(page.element[0], viewer.element[0]);
      }

      viewer.skipScrollIntoView = false;
      viewer.requestRefresh();
    }
  }, {
    key: "getTextureSize",
    value: function getTextureSize(param) {
      var viewPort = this.app.provider.viewPorts[1];

      if (this.app.provider.viewPorts[param.pageNumber]) {
        viewPort = this.app.provider.viewPorts[param.pageNumber];
      }

      return {
        height: viewPort.height * this.app.zoomValue * this.app.pageScaleValue * window.devicePixelRatio,
        width: viewPort.width * this.app.zoomValue * this.app.pageScaleValue * window.devicePixelRatio
      };
    }
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {
      var page = this.getPageByNumber(param.pageNumber),
          app = this.app;
      var viewPort = this.getViewPort(param.pageNumber, true);
      page.element.height(Math.floor(viewPort.height * app.pageScaleValue * app.zoomValue)).width(Math.floor(viewPort.width * app.pageScaleValue * app.zoomValue));
    }
  }, {
    key: "pan",
    value: function pan(point) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var viewer = this;
      var origin = viewer.startPoint;
      var deltay = point.raw.y - origin.raw.y,
          deltax = point.raw.x - origin.raw.x;
      viewer.deltaPanY += deltay;
      viewer.deltaPanX += deltax;
      viewer.panRequestStatus = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].REQUEST_STATUS.ON;

      if (reset === false) {
        viewer.startPoint = point;
      }
    }
  }, {
    key: "updatePan",
    value: function updatePan() {
      this.element[0].scrollTop = this.element[0].scrollTop - this.deltaPanY;
      this.element[0].scrollLeft = this.element[0].scrollLeft - this.deltaPanX;
      this.deltaPanY = 0;
      this.deltaPanX = 0;
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      // check if scroll bar is moved.
      if (this.startPoint && this.isScrollBarPressed) {
        var _event = utils.fixMouseEvent(event);

        var point = this.eventToPoint(_event);
        var el = this.element[0],
            top = 60,
            bottom = 60,
            height = 40,
            estY = this.scrollBar.lastY - (this.startPoint.raw.y - point.raw.y);
        this.scrollBar.lastY = estY;
        el.scrollTop = (estY - top) * (el.scrollHeight - el.offsetHeight) / (el.offsetHeight - height - top - bottom);
        this.startPoint = point;
        event.preventDefault();
        return;
      } //if it's swipe scroll we need to leave goign further and use system swipe-scroll


      if (event.touches && event.touches.length < 2) return;

      _get(_getPrototypeOf(Reader.prototype), "mouseMove", this).call(this, event);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      _get(_getPrototypeOf(Reader.prototype), "mouseDown", this).call(this, event);

      if (event.srcElement === this.scrollBar[0]) {
        this.isScrollBarPressed = true;
        this.scrollBar.addClass("df-active");
        this.scrollPageNumber.addClass("df-active");
      }
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      _get(_getPrototypeOf(Reader.prototype), "mouseUp", this).call(this, event);

      if (this.isScrollBarPressed =  true && this.scrollBar) {
        this.isScrollBarPressed = false;
        this.scrollBar.removeClass("df-active");
        this.scrollPageNumber.removeClass("df-active");
      }
    }
  }]);

  return Reader;
}(_base_viewer_js__WEBPACK_IMPORTED_MODULE_1__[/* BaseViewer */ "a"]);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlipBook2D; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _flipbook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*Stage collects events and passed to respective implementation*/



var DV = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"];
var utils = DV.utils;

var BookSheet2D = /*#__PURE__*/function (_BookSheet) {
  _inherits(BookSheet2D, _BookSheet);

  var _super = _createSuper(BookSheet2D);

  function BookSheet2D(options) {
    var _this;

    _classCallCheck(this, BookSheet2D);

    _this = _super.call(this, options);

    _this.init();

    return _this;
  }

  _createClass(BookSheet2D, [{
    key: "init",
    value: function init() {
      var sheet = this,
          div = '<div>';
      var element = sheet.element = jQuery(div, {
        "class": 'df-sheet'
      });
      var frontPage = sheet.frontPage = new _page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]();
      frontPage.element.addClass('df-page-front');
      var backPage = sheet.backPage = new _page_js__WEBPACK_IMPORTED_MODULE_2__[/* Page2D */ "a"]();
      backPage.element.addClass('df-page-back');
      var wrapper = sheet.wrapper = jQuery(div, {
        "class": "df-sheet-wrapper"
      });
      var foldInnerShadow = sheet.foldInnerShadow = jQuery(div, {
        "class": "df-sheet-fold-inner-shadow"
      });
      var foldOuterShadow = sheet.foldOuterShadow = jQuery(div, {
        "class": "df-sheet-fold-outer-shadow"
      });
      this.parentElement.append(element);
      element.append(wrapper);
      element.append(foldOuterShadow);
      wrapper.append(frontPage.element);
      wrapper.append(backPage.element);
      wrapper.append(foldInnerShadow);
    }
  }, {
    key: "updateCSS",
    value: function updateCSS(css) {
      var page = this;
      page.element.css(css);
    }
  }, {
    key: "resetCSS",
    value: function resetCSS() {
      var sheet = this;
      sheet.wrapper.css({
        transform: ''
      });
      sheet.frontPage.resetCSS();
      sheet.backPage.resetCSS();
    }
  }, {
    key: "updateSize",
    value: function updateSize(width, height, top) {
      width = Math.floor(width);
      height = Math.floor(height);
      top = Math.floor(top);
      this.wrapper[0].style.height = this.wrapper[0].style.width = Math.ceil(utils.distOrigin(width, height) * this.viewer.app.zoomValue) + "px";
      this.element[0].style.height = this.frontPage.element[0].style.height = this.backPage.element[0].style.height = this.foldInnerShadow[0].style.height = height + "px";
      this.element[0].style.width = this.frontPage.element[0].style.width = this.backPage.element[0].style.width = this.foldInnerShadow[0].style.width = width + "px";
      this.element[0].style.transform = 'translateY(' + top + 'px)';
    }
  }, {
    key: "flip",
    value: function flip(point) {
      var sheet = this; //point is usually null if the flip was made by next or previous without folding

      point = point || sheet.pendingPoint;
      if (sheet == null || sheet.viewer == null) return;
      sheet.isFlipping = true;
      sheet.viewer.flipPage = sheet;
      var isBooklet = sheet.viewer.isBooklet,
          isRight = sheet.side === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.RIGHT,
          isRTL = sheet.viewer.isRTL,
          isBottom = sheet.viewer.corner === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER.BL || sheet.viewer.corner === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER.BR;
      var travelY = isBottom ? sheet.element.height() : 0;
      var fullWidth = sheet.viewer.leftSheetWidth + sheet.viewer.rightSheetWidth;
      var init,
          angle = 0,
          end; //stages of flip or fold cancel

      end = sheet.end = sheet && sheet.animateToReset === true ? {
        x: isRight ? fullWidth : 0,
        y: travelY
      } : {
        x: isRight ? 0 : fullWidth,
        y: travelY
      };
      sheet.flipEasing = sheet.isHard ? TWEEN.Easing.Quadratic.InOut : TWEEN.Easing.Linear.None;
      var flipDuration = sheet.viewer.app.options.duration; //duration that should take based on distance(calculated below)

      if (sheet.isHard === true) {
        if (point != null) {
          angle = utils.angleByDistance(point.distance, point.fullWidth);
        }

        init = sheet.init = {
          angle: angle * (isRight ? -1 : 1)
        };
        end = sheet.end = sheet && sheet.animateToReset === true ? {
          angle: isRight ? 0 : -0
        } : {
          angle: isRight ? -180 : 180
        };
      } else {
        if (point == null) {
          init = sheet.init = sheet && sheet.animateToReset === true ? {
            x: isRight ? 0 : fullWidth,
            y: 0
          } : {
            x: isRight ? fullWidth : 0,
            y: 0
          };
        } else {
          init = sheet.init = {
            x: point.x,
            y: point.y,
            opacity: 1
          };
          flipDuration = sheet.viewer.app.options.duration * utils.distPoints(init.x, init.y, end.x, end.y) / sheet.viewer.fullWidth;
          flipDuration = utils.limitAt(flipDuration, sheet.viewer.app.options.duration / 3, sheet.viewer.duration);
        }
      }

      init.index = 0;
      end.index = 1;
      sheet.isFlipping = true;
      if (isBooklet && (!isRight && !isRTL || isRight && isRTL)) sheet.element[0].style.opacity = 0;

      if (sheet.isHard === true) {
        sheet.currentTween = new TWEEN.Tween(init).delay(0).to(end, sheet.viewer.app.options.duration).onUpdate(function () {
          sheet.updateTween(this);
        }).easing(sheet.flipEasing).onComplete(sheet.completeTween.bind(sheet)).start();
      } else {
        if (point == null) {
          sheet.currentTween = new TWEEN.Tween(init).delay(0).to(end, sheet.viewer.app.options.duration).onUpdate(function () {
            sheet.updateTween(this);
          }).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(sheet.completeTween.bind(sheet)).start();
        } else {
          sheet.currentTween = new TWEEN.Tween(init).delay(0).to(end, flipDuration).onUpdate(function () {
            sheet.updateTween(this);
          }).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(sheet.completeTween.bind(sheet)).start();
        }
      } //page.currentTween.viewer= page;

    }
  }, {
    key: "updatePoint",
    value: function updatePoint(point) {
      var sheet = this;
      if (point == null) return; //detect the current page
      // let page = page.viewer.dragPage != null ? page.viewer.dragPage
      //   : point.page != null ? point.page : this;
      //get the pageWidth and pageHeight

      var pageWidth = sheet.element.width(),
          pageHeight = sheet.element.height(); //the corner where the drag started

      var corner = sheet.viewer.corner !== _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER.NONE ? sheet.viewer.corner : point.corner,
          corners = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER;
      var isRight = sheet.side === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.RIGHT,
          isBottom = corner === corners.BL || corner === corners.BR;
      point.rx = isRight === true ? sheet.viewer.leftSheetWidth + pageWidth - point.x : point.x;
      point.ry = isBottom === true ? pageHeight - point.y : point.y;
      var radAngle = Math.atan2(point.ry, point.rx);
      radAngle = Math.PI / 2 - utils.limitAt(radAngle, 0, utils.toRad(90));
      var correctionX = pageWidth - point.rx / 2,
          correctionY = point.ry / 2,
          refLength = Math.max(0, Math.sin(radAngle - Math.atan2(correctionY, correctionX)) * utils.distOrigin(correctionX, correctionY)),
          //the distance from where the fold starts
      foldLength = 0.5 * utils.distOrigin(point.rx, point.ry);
      var x = Math.ceil(pageWidth - refLength * Math.sin(radAngle)),
          y = Math.ceil(refLength * Math.cos(radAngle)),
          angle = utils.toDeg(radAngle);
      var angle1 = isBottom ? isRight ? 180 + (90 - angle) : 180 + angle : isRight ? angle : 90 - angle;
      var angle2 = isBottom ? isRight ? 180 + (90 - angle) : angle : isRight ? angle + 180 : angle1,
          angleS = isBottom ? isRight ? 90 - angle : angle + 90 : isRight ? angle1 - 90 : angle1 + 180,
          x1 = isRight ? pageWidth - x : x,
          y1 = isBottom ? pageHeight + y : -y,
          x2 = isRight ? -x : x - pageWidth,
          y2 = isBottom ? -pageHeight - y : y;
      var opacity = utils.limitAt(point.distance * 0.5 / pageWidth, 0, 0.5);
      var foldOpacity = utils.limitAt((sheet.viewer.leftSheetWidth + pageWidth - point.rx) * 0.5 / pageWidth, 0.05, 0.3);
      sheet.element.addClass("df-folding");
      var front = isRight ? sheet.backPage.element : sheet.frontPage.element;
      var back = isRight ? sheet.frontPage.element : sheet.backPage.element;
      var outerShadow = sheet.foldOuterShadow;
      var innerShadow = sheet.foldInnerShadow;
      sheet.wrapper.css({
        transform: utils.translateStr(x1, y1) + utils.rotateStr(angle1)
      });
      back.css({
        transform: utils.rotateStr(-angle1) + utils.translateStr(-x1, -y1)
      });
      front.css({
        transform: utils.rotateStr(angle2) + utils.translateStr(x2, y2),
        boxShadow: "rgba(0, 0, 0, " + opacity + ") 0px 0px 20px"
      });
      innerShadow.css({
        transform: utils.rotateStr(angle2) + utils.translateStr(x2, y2),
        opacity: foldOpacity / 2,
        backgroundImage: utils.prefix.css + "linear-gradient( " + angleS + "deg, rgba(0, 0, 0, 0.25) , rgb(0, 0, 0) " + foldLength * 0.7 + "px, rgb(255, 255, 255) " + foldLength + "px)"
      });
      outerShadow.css({
        opacity: foldOpacity / 2,
        left: isRight ? "auto" : 0,
        right: isRight ? 0 : "auto",
        backgroundImage: utils.prefix.css + "linear-gradient( " + (-angleS + 180) + "deg, rgba(0, 0, 0,0) " + foldLength / 3 + "px, rgb(0, 0, 0) " + foldLength + "px)"
      });
    }
  }, {
    key: "updateAngle",
    value: function updateAngle(angle, isRight) {
      var sheet = this;
      var width = sheet.element.width() * 5;
      sheet.wrapper.css({
        perspective: width,
        perspectiveOrigin: isRight === true ? "0% 50%" : "100% 50%"
      });
      sheet.element.addClass("df-folding");
      sheet.backPage.updateCSS({
        display: isRight === true ? angle <= -90 ? 'block' : 'none' : angle < 90 ? 'block' : 'none',
        transform: (utils.prefix.dom !== 'MfS' ? "" : "perspective(" + width + "px) ") + (isRight === true ? "translateX(-100%) " : "") + "rotateY(" + ((isRight === true ? 180 : 0) + angle) + "deg)"
      });
      sheet.frontPage.updateCSS({
        display: isRight === true ? angle > -90 ? 'block' : 'none' : angle >= 90 ? 'block' : 'none',
        transform: (utils.prefix.dom !== 'MSd' ? "" : "perspective(" + width + "px) ") + (isRight === false ? "translateX(100%) " : "") + "rotateY(" + ((isRight === false ? -180 : 0) + angle) + "deg)"
      });
    }
  }, {
    key: "updateTween",
    value: function updateTween(tween) {
      var sheet = this;
      var isBooklet = sheet.viewer.isBooklet,
          isRight = sheet.side === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.RIGHT,
          isRTL = sheet.viewer.isRTL;
      var isReset = sheet.animateToReset === true;

      if (sheet.isHard === true) {
        sheet.updateAngle(tween.angle, isRight);
        sheet.angle = tween.angle;
      } else {
        sheet.updatePoint({
          x: tween.x,
          y: tween.y
        });
        sheet.x = tween.x;
        sheet.y = tween.y;
      }

      if (isBooklet && !isReset) sheet.element[0].style.opacity = isRight && !isRTL || !isRight && isRTL ? tween.index > 0.5 ? 2 * (1 - tween.index) : 1 : tween.index < 0.5 ? 2 * tween.index : 1;
    }
  }, {
    key: "completeTween",
    value: function completeTween() {
      var sheet = this;

      if (sheet.isHard === true) {
        sheet.updateAngle(sheet.end.angle);
        sheet.backPage.element.css({
          display: "block"
        });
        sheet.frontPage.element.css({
          display: "block"
        });
      } else {
        sheet.updatePoint({
          x: sheet.end.x,
          y: sheet.end.y
        });
      }

      sheet.element[0].style.opacity = 1;

      if (sheet.animateToReset !== true) {
        sheet.side = sheet.targetSide;
      }

      sheet.reset();
      sheet.viewer.onFlip();
      sheet.viewer.afterFlip();
      sheet.viewer.requestRefresh();
    }
  }]);

  return BookSheet2D;
}(_flipbook_js__WEBPACK_IMPORTED_MODULE_1__[/* BookSheet */ "b"]);

var FlipBook2D = /*#__PURE__*/function (_BaseFlipBookViewer) {
  _inherits(FlipBook2D, _BaseFlipBookViewer);

  var _super2 = _createSuper(FlipBook2D);

  function FlipBook2D(options, appContext) {
    var _this2;

    _classCallCheck(this, FlipBook2D);

    options.viewerClass = "df-flipbook-2d";
    options.skipViewerLoaded = true;
    _this2 = _super2.call(this, options, appContext);
    _this2.bookShadow = jQuery('<div>', {
      "class": 'df-book-shadow'
    });

    _this2.wrapper.append(_this2.bookShadow);

    _this2.corner = _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_CORNER.NONE;

    appContext._viewerPrepared();

    return _this2;
  }

  _createClass(FlipBook2D, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(FlipBook2D.prototype), "init", this).call(this);

      this.initEvents();
      this.initPages();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.stageDOM = this.element[0];

      _get(_getPrototypeOf(FlipBook2D.prototype), "initEvents", this).call(this);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(FlipBook2D.prototype), "dispose", this).call(this);

      this.element.remove();
    }
  }, {
    key: "initPages",
    value: function initPages() {
      for (var count = 0; count < 6; count++) {
        var sheet = new BookSheet2D({
          parentElement: this.wrapper
        });
        sheet.index = count; //just reference for debugging

        sheet.viewer = this;
        this.sheets.push(sheet);
        this.pages.push(sheet.frontPage);
        this.pages.push(sheet.backPage);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      _get(_getPrototypeOf(FlipBook2D.prototype), "resize", this).call(this);

      var viewer = this;
      var dimensions = viewer.app.dimensions;
      var padding = dimensions.padding;
      var zoomHeight = this.availablePageHeight(),
          zoomWidth = this.availablePageWidth(),
          zoomFullWidth = viewer.fullWidth = zoomWidth * 2,
          stageWidth = dimensions.width,
          stageHeight = dimensions.height;
      var shiftHeight = viewer.shiftHeight = Math.ceil(utils.limitAt((zoomHeight - stageHeight + padding.height) / 2, 0, zoomHeight)),
          shiftWidth = viewer.shiftWidth = Math.ceil(utils.limitAt((zoomFullWidth - stageWidth + padding.width) / 2, 0, zoomFullWidth));

      if (viewer.app.zoomValue === 1) {
        //todo add this line
        viewer.left = 0;
        viewer.top = 0;
      }

      if (this.rightSheetHeight === undefined) {
        //todo Make this redundant code better
        this.rightSheetHeight = this._containCover.height;
        this.leftSheetHeight = this._containCover.height;
        this.leftSheetWidth = this._containCover.width;
        this.rightSheetWidth = this._containCover.width;
        this.leftSheetTop = this.rightSheetTop = (zoomHeight - this._containCover.height) / 2;
      }

      viewer.element.css({
        top: -shiftHeight,
        bottom: -shiftHeight,
        right: -shiftWidth,
        left: -shiftWidth,
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left,
        transform: "translate3d(" + viewer.left + "px," + viewer.top + "px,0)"
      });
      viewer.wrapper.css({
        //marginTop when the flipbook is smaller than the ViewArea it has to center align vertically
        marginTop: Math.max(dimensions.height - zoomHeight - padding.height) / 2,
        height: zoomHeight,
        width: zoomFullWidth - zoomFullWidth % 2
      });
      viewer.zoomViewer.resize();
      viewer.centerNeedsUpdate = true;
      viewer.checkCenter(true);
      viewer.pagesReady();
    }
  }, {
    key: "updateCenter",
    value: function updateCenter() {
      var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var viewer = this;
      var centerShift = viewer.centerShift,
          isRTL = viewer.isRTL,
          width = this.isLeftPage() ? this.leftSheetWidth : this.rightSheetWidth;
      var end = centerShift * width / 2;
      viewer.seamPosition = (-viewer.app.dimensions.offset.width + viewer.app.dimensions.containerWidth) / 2 + end;
      viewer.wrapperShift = (viewer.isSingle ? -viewer.app.dimensions.stage.innerWidth / 2 : 0) + end;
      viewer.wrapper[0].style.left = viewer.wrapperShift + "px";
      viewer.wrapper[0].style.transition = skipTransition ? "none" : "";
      this.zoomViewer.updateCenter();
    }
  }, {
    key: "refreshSheet",
    value: function refreshSheet(options) {
      var _sheet = options.sheet,
          sheetPageNumber = options.sheetNumber; //Render Pages & flip

      if (_sheet.isFlipping === false) {
        if (options.needsFlip) {
          //this.beforeFlip();
          _sheet.element.addClass("df-flipping");

          _sheet.flip();
        } else {
          // page.depth = depth;
          _sheet.skipFlip = false;

          _sheet.element.removeClass("df-flipping df-quick-turn df-folding df-left-side df-right-side");

          _sheet.element.addClass(_sheet.targetSide === DV.TURN_DIRECTION.LEFT ? "df-left-side" : "df-right-side");

          _sheet.side = _sheet.targetSide;
          _sheet.targetSide === DV.TURN_DIRECTION.LEFT ? _sheet.updateSize(this.leftSheetWidth, this.leftSheetHeight, this.leftSheetTop) : _sheet.updateSize(this.rightSheetWidth, this.rightSheetHeight, this.rightSheetTop);
        }
      }

      _sheet.visible = options.visible;

      if (_sheet.isHard) {
        _sheet.element.addClass("df-hard-sheet");
      } else {
        _sheet.element.removeClass("df-hard-sheet");

        _sheet.frontPage.updateCSS({
          display: "block"
        });

        _sheet.backPage.updateCSS({
          display: "block"
        });
      }

      _sheet.updateCSS({
        display: _sheet.visible === true ? "block" : "none",
        zIndex: options.zIndex // transform: ''

      });

      if (_sheet.pendingPoint == null && _sheet.isFlipping === false) {
        _sheet.resetCSS();
      }

      if (sheetPageNumber !== _sheet.pageNumber) {
        _sheet.element.attr("number", sheetPageNumber);

        _sheet.backPage.element.attr("pagenumber", _sheet.backPage.pageNumber);

        _sheet.frontPage.element.attr("pagenumber", _sheet.frontPage.pageNumber);
      }
    }
  }, {
    key: "eventToPoint",
    value: function eventToPoint(event) {
      var viewer = this;
      event = utils.fixMouseEvent(event); // if(event.type==="mouseup"){
      //   let a = "mouseup";
      // }

      var wrapper = viewer.wrapper,
          bRect = wrapper[0].getBoundingClientRect(),
          webgl = viewer.is3D,
          sheets = viewer.sheets,
          dimen = viewer.app.dimensions,
          pageWidth,
          fullWidth,
          pageHeight,
          point = {
        x: event.clientX,
        y: event.clientY
      },
          left,
          top,
          distance,
          sheet,
          sheetDrag,
          isRight; //calculate x and y relative to container

      var pRect = viewer.parentElement[0].getBoundingClientRect();
      point.x = point.x - pRect.left;
      point.y = point.y - pRect.top;
      if (viewer.dragSheet) isRight = viewer.dragSheet.side === DV.TURN_DIRECTION.RIGHT;else {
        isRight = point.x > viewer.seamPosition;
      }
      pageWidth = isRight ? viewer.rightSheetWidth : viewer.leftSheetWidth;
      pageHeight = isRight ? viewer.rightSheetHeight : viewer.leftSheetHeight;
      fullWidth = viewer.rightSheetWidth + viewer.leftSheetWidth;
      top = isRight ? viewer.rightSheetTop : viewer.leftSheetTop; //region old
      //calculate x and y relative to wrapper

      left = point.x - (viewer.seamPosition - viewer.leftSheetWidth);
      top = point.y - (bRect.top - pRect.top) - top;
      distance = viewer.drag === DV.TURN_DIRECTION.NONE ? left < pageWidth ? left : fullWidth - left : viewer.drag === DV.TURN_DIRECTION.LEFT ? left : fullWidth - left;
      sheet = isRight ? sheets[viewer.stackCount / 2] : sheets[viewer.stackCount / 2 - 1];
      sheetDrag = left < viewer.foldSense ? DV.TURN_DIRECTION.LEFT : left > fullWidth - viewer.foldSense ? DV.TURN_DIRECTION.RIGHT : DV.TURN_DIRECTION.NONE;
      var x = left,
          y = top,
          h = pageHeight,
          w = fullWidth,
          delta = viewer.foldSense,
          corner; //determine the corner

      if (x >= 0 && x < delta) {
        if (y >= 0 && y <= delta) corner = DV.TURN_CORNER.TL;else if (y >= h - delta && y <= h) corner = DV.TURN_CORNER.BL;else if (y > delta && y < h - delta) corner = DV.TURN_CORNER.L;else corner = DV.TURN_CORNER.NONE;
      } else if (x >= w - delta && x <= w) {
        if (y >= 0 && y <= delta) corner = DV.TURN_CORNER.TR;else if (y >= h - delta && y <= h) corner = DV.TURN_CORNER.BR;else if (y > delta && y < h - delta) corner = DV.TURN_CORNER.R;else corner = DV.TURN_CORNER.NONE;
      } else corner = DV.TURN_CORNER.NONE;

      var returnPoint = {
        isInsideSheet: x >= 0 && x <= w && y >= 0 && y <= h,
        isInsideCorner: corner !== DV.TURN_CORNER.NONE && corner !== DV.TURN_CORNER.L && corner !== DV.TURN_CORNER.R,
        x: webgl ? point.x : left,
        y: webgl ? point.y : top,
        fullWidth: fullWidth,
        sheetWidth: pageWidth,
        sheetHeight: pageHeight,
        rawDistance: fullWidth - left,
        distance: distance,
        sheet: sheet,
        drag: sheetDrag,
        foldSense: viewer.foldSense,
        event: event,
        raw: point,
        corner: corner
      };
      return returnPoint;
    }
  }, {
    key: "pan",
    value: function pan(point) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      utils.pan(this, point, reset);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      var viewer = this;
      var point = viewer.eventToPoint(event);

      if (event.touches != null && event.touches.length == 2) {
        this.pinchMove(event);
        return;
      } //PAN


      if (viewer.app.zoomValue !== 1 && viewer.startPoint != null && viewer.canSwipe === true) {
        viewer.pan(point);
        event.preventDefault();
      }
      /*Magnetic Pull*/


      var targetSheet = viewer.dragSheet || point.sheet;

      if (viewer.flipPage == null && (viewer.dragSheet != null || point.isInsideCorner === true)) {
        if (viewer.dragSheet != null) {// utils.log("set mouse down move");
        } else {
          point.y = utils.limitAt(point.y, 1, viewer.availablePageHeight() - 1);
          point.x = utils.limitAt(point.x, 1, point.fullWidth - 1);
        }

        var corner = viewer.dragSheet != null ? viewer.corner : point.corner;

        if (targetSheet.isHard) {
          var isRight = corner === DV.TURN_CORNER.BR || corner === DV.TURN_CORNER.TR;
          var angle = utils.angleByDistance(point.distance, point.fullWidth);
          targetSheet.updateAngle(angle * (isRight ? -1 : 1), isRight);
        } else {
          targetSheet.updatePoint(point);
        }

        targetSheet.magnetic = true;
        targetSheet.magneticCorner = point.corner;
        event.preventDefault(); //point.sheet.updatePoint(point);
      }
      /*Magnetic Release*/


      if (viewer.dragSheet == null && targetSheet != null && point.isInsideCorner === false && targetSheet.magnetic === true) {
        targetSheet.pendingPoint = point;
        targetSheet.animateToReset = true;
        targetSheet.magnetic = false;
        viewer.corner = targetSheet.magneticCorner;
        targetSheet.flip(targetSheet.pendingPoint);
        targetSheet.pendingPoint = null;
      } //SWIPE


      viewer.checkSwipe(point, event);
    }
    /**
     * Performs:
     * 1. If click is in inside the corner - flip the page
     * 2. If drag is active - complete the flip
     * 3. Clear any swipe flags
     * @param event
     */

  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      if (!event.touches && event.button !== 0) return;

      if (event.touches != null && event.touches.length == 0) {
        this.pinchUp(event);
        return;
      }

      var viewer = this;
      var point = viewer.eventToPoint(event); //1 - 2 : if there is any page dragging - finish it

      var element = event.target || event.originalTarget; //check to see if the clicked element is a link, if so skip turn

      var isClick = viewer.app.zoomValue === 1 && point.x === viewer.startPoint.x && point.y === viewer.startPoint.y && element.nodeName !== "A";

      if (event.ctrlKey === true && isClick) {
        this.zoomOnPoint(point);
      } else if (viewer.dragSheet) {
        event.preventDefault();
        var sheet = viewer.dragSheet;
        sheet.pendingPoint = point;
        viewer.drag = point.drag;
        /*it was a valid CLICK and was inside the corner*/

        if (isClick && (point.isInsideCorner === true || point.isInsideSheet && viewer.clickAction === DV.MOUSE_CLICK_ACTIONS.NAV)) {
          if (point.corner.indexOf("l") > -1) {
            viewer.app.openLeft();
          } else {
            viewer.app.openRight();
          }
        } else {
          var _currentPage = this.getBasePage();

          if (point.distance > point.sheetWidth) {
            if (point.sheet.side === _defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].TURN_DIRECTION.LEFT) {
              viewer.app.openLeft();
            } else {
              viewer.app.openRight();
            }
          } //if no flip occurred reset the pages.


          if (_currentPage === this.getBasePage()) {
            sheet.animateToReset = true;
            sheet.flip(point);
          }
        }

        viewer.dragSheet = null;
        sheet.magnetic = false;
      } else if (isClick && !point.sheet.isFlipping && point.isInsideSheet && viewer.clickAction === DV.MOUSE_CLICK_ACTIONS.NAV) {
        if (point.sheet.side === "left") {
          viewer.app.openLeft();
        } else {
          viewer.app.openRight();
        }
      }
      /*3 if there is swipe - clean*/


      viewer.startPoint = null;
      viewer.canSwipe = false;
      viewer.drag = DV.TURN_DIRECTION.NONE;
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      if (!event.touches && event.button !== 0) return;

      if (event.touches != null && event.touches.length == 2) {
        this.pinchDown(event);
        return;
      }

      var viewer = this;
      var point = viewer.eventToPoint(event);
      viewer.startPoint = point;
      viewer.lastPos = point.x;

      if (point.isInsideCorner && viewer.flipPage == null) {
        viewer.dragSheet = point.sheet;
        viewer.drag = point.drag;
        viewer.corner = point.corner;

        if (point.sheet.pageNumber === 0) {
          viewer.bookShadow.css({
            width: '50%',
            left: viewer.app.isRTL ? 0 : '50%',
            transitionDelay: ''
          });
        } else if (point.sheet.pageNumber === Math.ceil(viewer.app.pageCount / 2) - 1) {
          viewer.bookShadow.css({
            width: '50%',
            left: viewer.app.isRTL ? '50%' : 0,
            transitionDelay: ''
          });
        }
      } else {
        viewer.canSwipe = true;
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {}
  }, {
    key: "resetPageTween",
    value: function resetPageTween() {
      var viewer = this;

      for (var _pageCount = 0; _pageCount < viewer.stackCount; _pageCount++) {
        var sheets = viewer.sheets[_pageCount];

        if (sheets.currentTween) {
          sheets.currentTween.complete(true);
        }
      }

      viewer.requestRefresh();
    }
  }, {
    key: "pagesReady",
    value: function pagesReady() {
      if (this.isFlipping()) return;

      if (this.app.options.flipbookFitPages === false) {
        var basePage = this.app.viewer.getBasePage();
        var leftViewPort = this.leftViewport = this.getViewPort(basePage + (this.isBooklet ? 0 : this.isRTL ? 1 : 0)),
            rightViewPort = this.rightViewPort = this.getViewPort(basePage + (this.isBooklet ? 0 : this.isRTL ? 0 : 1));

        if (leftViewPort) {
          var leftDimen = utils.contain(leftViewPort.width, leftViewPort.height, this.availablePageWidth(), this.availablePageHeight());
          this.leftSheetWidth = Math.floor(leftDimen.width);
          this.leftSheetHeight = Math.floor(leftDimen.height);
          this.leftSheetTop = (this.availablePageHeight() - this.leftSheetHeight) / 2;
        }

        if (rightViewPort) {
          var rightDimen = utils.contain(rightViewPort.width, rightViewPort.height, this.availablePageWidth(), this.availablePageHeight());
          this.rightSheetWidth = Math.floor(rightDimen.width);
          this.rightSheetHeight = Math.floor(rightDimen.height);
          this.rightSheetTop = (this.availablePageHeight() - this.rightSheetHeight) / 2;
        }

        this.totalSheetsWidth = this.leftSheetWidth + this.rightSheetWidth;

        for (var i = 0; i < this.sheets.length; i++) {
          var sheet = this.sheets[i];

          if (sheet.side === DV.TURN_DIRECTION.LEFT) {
            sheet.updateSize(this.leftSheetWidth, this.leftSheetHeight, this.leftSheetTop);
          } else {
            sheet.updateSize(this.rightSheetWidth, this.rightSheetHeight, this.rightSheetTop);
          }
        }
      }

      this.updateCenter();
      this.updatePendingStatusClass();
    }
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {
      var page = this.getPageByNumber(param.pageNumber);
      this.pagesReady();
    }
  }]);

  return FlipBook2D;
}(_flipbook_js__WEBPACK_IMPORTED_MODULE_1__[/* BaseFlipBookViewer */ "a"]);



/***/ }),
/* 11 */
/***/ (function(module, exports) {

//region TWEEN.js required for animation

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 */
(function TweenJs() {
  var TWEEN = TWEEN || function () {
    var _tweens = [];
    return {
      getAll: function getAll() {
        return _tweens;
      },
      removeAll: function removeAll() {
        _tweens = [];
      },
      add: function add(tween) {
        _tweens.push(tween);
      },
      remove: function remove(tween) {
        var i = _tweens.indexOf(tween);

        if (i !== -1) {
          _tweens.splice(i, 1);
        }
      },
      update: function update(time) {
        if (_tweens.length === 0) {
          return false;
        }

        var i = 0; //noinspection JSUnresolvedVariable

        time = time != null ? time : window.performance.now();

        while (i < _tweens.length) {
          if (_tweens[i].update(time)) {
            i++;
          } else {
            _tweens.splice(i, 1);
          }
        }

        return true;
      }
    };
  }();

  TWEEN.Tween = function (object) {
    var _object = object;
    var _valuesStart = {};
    var _valuesEnd = {};
    var _valuesStartRepeat = {};
    var _duration = 1000;
    var _repeat = 0;
    var _yoyo = false;
    var _isPlaying = false;
    var _reversed = false;
    var _delayTime = 0;
    var _startTime = null;
    var _easingFunction = TWEEN.Easing.Linear.None;
    var _interpolationFunction = TWEEN.Interpolation.Linear;
    var _chainedTweens = [];
    var _onStartCallback = null;
    var _onStartCallbackFired = false;
    var _onUpdateCallback = null;
    var _onCompleteCallback = null;
    var _onStopCallback = null; // Set all starting values present on the target object

    for (var field in object) {
      //noinspection JSUnfilteredForInLoop
      _valuesStart[field] = parseFloat(object[field], 10);
    }

    this.to = function (properties, duration) {
      if (duration != null) {
        _duration = duration;
      }

      _valuesEnd = properties;
      return this;
    };

    this.start = function (time) {
      TWEEN.add(this);
      _isPlaying = true;
      _onStartCallbackFired = false;
      _startTime = time != null ? time : window.performance.now();
      _startTime += _delayTime;

      for (var property in _valuesEnd) {
        // Check if an Array was provided as property value
        if (_valuesEnd[property] instanceof Array) {
          if (_valuesEnd[property].length === 0) {
            continue;
          } // Create a local copy of the Array with the start value at the front


          _valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
        } // If `to()` specifies a property that doesn't exist in the source object,
        // we should not set that property in the object


        if (_valuesStart[property] == null) {
          continue;
        }

        _valuesStart[property] = _object[property];

        if (_valuesStart[property] instanceof Array === false) {
          _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
        }

        _valuesStartRepeat[property] = _valuesStart[property] || 0;
      }

      return this;
    };

    this.stop = function () {
      if (!_isPlaying) {
        return this;
      }

      TWEEN.remove(this);
      _isPlaying = false;

      if (_onStopCallback != null) {
        _onStopCallback.call(_object);
      }

      this.stopChainedTweens();
      return this;
    };

    this.stopChainedTweens = function () {
      for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
        _chainedTweens[i].stop();
      }
    };

    this.complete = function () {
      if (!_isPlaying) {
        return this;
      }

      TWEEN.remove(this);
      _isPlaying = false;

      if (_onCompleteCallback != null) {
        _onCompleteCallback.call(_object);
      }

      this.completeChainedTweens();
      return this;
    };

    this.completeChainedTweens = function () {
      for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
        _chainedTweens[i].complete();
      }
    };

    this.delay = function (amount) {
      _delayTime = amount;
      return this;
    };

    this.repeat = function (times) {
      _repeat = times;
      return this;
    }; //noinspection JSUnusedGlobalSymbols


    this.yoyo = function (yoyo) {
      _yoyo = yoyo;
      return this;
    };

    this.easing = function (easing) {
      _easingFunction = easing == null ? _easingFunction : easing;
      return this;
    };

    this.interpolation = function (interpolation) {
      _interpolationFunction = interpolation;
      return this;
    }; //noinspection JSUnusedGlobalSymbols


    this.chain = function () {
      _chainedTweens = arguments;
      return this;
    };

    this.onStart = function (callback) {
      _onStartCallback = callback;
      return this;
    };

    this.onUpdate = function (callback) {
      _onUpdateCallback = callback;
      return this;
    };

    this.onComplete = function (callback) {
      _onCompleteCallback = callback;
      return this;
    }; //noinspection JSUnusedGlobalSymbols


    this.onStop = function (callback) {
      _onStopCallback = callback;
      return this;
    };

    this.update = function (time) {
      var property;
      var elapsed;
      var value;

      if (time < _startTime) {
        return true;
      }

      if (_onStartCallbackFired === false) {
        if (_onStartCallback != null) {
          _onStartCallback.call(_object);
        }

        _onStartCallbackFired = true;
      }

      elapsed = (time - _startTime) / _duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      value = _easingFunction(elapsed);

      for (property in _valuesEnd) {
        // Don't update properties that do not exist in the source object
        if (_valuesStart[property] == null) {
          continue;
        }

        var start = _valuesStart[property] || 0;
        var end = _valuesEnd[property];

        if (end instanceof Array) {
          _object[property] = _interpolationFunction(end, value);
        } else {
          // Parses relative end values with start as base (e.g.: +10, -3)
          if (typeof end === 'string') {
            if (end.startsWith('+') || end.startsWith('-')) {
              end = start + parseFloat(end, 10);
            } else {
              end = parseFloat(end, 10);
            }
          } // Protect against non-numeric properties.


          if (typeof end === 'number') {
            _object[property] = start + (end - start) * value;
          }
        }
      }

      if (_onUpdateCallback != null) {
        _onUpdateCallback.call(_object, value);
      }

      if (elapsed === 1) {
        if (_repeat > 0) {
          if (isFinite(_repeat)) {
            _repeat--;
          } // Reassign starting values, restart by making startTime = now


          for (property in _valuesStartRepeat) {
            if (typeof _valuesEnd[property] === 'string') {
              _valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
            }

            if (_yoyo) {
              var tmp = _valuesStartRepeat[property];
              _valuesStartRepeat[property] = _valuesEnd[property];
              _valuesEnd[property] = tmp;
            }

            _valuesStart[property] = _valuesStartRepeat[property];
          }

          if (_yoyo) {
            _reversed = !_reversed;
          }

          _startTime = time + _delayTime;
          return true;
        } else {
          if (_onCompleteCallback != null) {
            _onCompleteCallback.call(_object);
          }

          for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
            // Make the chained tweens start exactly at the time they should,
            // even if the `update()` method was called way past the duration of the tween
            _chainedTweens[i].start(_startTime + _duration);
          }

          return false;
        }
      }

      return true;
    };
  };

  TWEEN.Easing = {
    Linear: {
      None: function None(k) {
        return k;
      }
    },
    Quadratic: {
      In: function In(k) {
        return k * k;
      },
      Out: function Out(k) {
        return k * (2 - k);
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k;
        }

        return -0.5 * (--k * (k - 2) - 1);
      }
    },
    Quartic: {
      In: function In(k) {
        return k * k * k * k;
      },
      Out: function Out(k) {
        return 1 - --k * k * k * k;
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k;
        }

        return -0.5 * ((k -= 2) * k * k * k - 2);
      }
    },
    Sinusoidal: {
      In: function In(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      },
      Out: function Out(k) {
        return Math.sin(k * Math.PI / 2);
      },
      InOut: function InOut(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
    },
    Cubic: {
      In: function In(k) {
        return k * k * k;
      },
      Out: function Out(k) {
        return --k * k * k + 1;
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k + 2);
      }
    }
  }; //noinspection JSUnusedGlobalSymbols

  TWEEN.Interpolation = {
    Linear: function Linear(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.Linear;

      if (k < 0) {
        return fn(v[0], v[1], f);
      }

      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }

      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function Bezier(v, k) {
      var b = 0;
      var n = v.length - 1;
      var pw = Math.pow;
      var bn = TWEEN.Interpolation.Utils.Bernstein;

      for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
      }

      return b;
    },
    Utils: {
      Linear: function Linear(p0, p1, t) {
        return (p1 - p0) * t + p0;
      },
      Bernstein: function Bernstein(n, i) {
        var fc = TWEEN.Interpolation.Utils.Factorial;
        return fc(n) / fc(i) / fc(n - i);
      },
      Factorial: function () {
        var a = [1];
        return function (n) {
          var s = 1;

          if (a[n]) {
            return a[n];
          }

          for (var i = n; i > 1; i--) {
            s *= i;
          }

          a[n] = s;
          return s;
        };
      }(),
      CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        var t2 = t * t;
        var t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
      }
    }
  };
  window.TWEEN = TWEEN;
})();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _dearviewer_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _dearviewer_utils_provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _dearviewer_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);





_dearviewer_app_js__WEBPACK_IMPORTED_MODULE_3__[/* App */ "a"].prototype.executeCallback = function (callbackName) {
  if (typeof this.options[callbackName] === "function") this.options[callbackName](this);
};

_dearviewer_app_js__WEBPACK_IMPORTED_MODULE_3__[/* App */ "a"].prototype.analytics = function (eventData) {
  if (this.options.enableAnalytics == true) {
    try {
      var options = eventData.options,
          eventLabel = undefined;

      if (options) {
        eventLabel = options.bookTitle || options.slug || options.id;
      }

      var analyticsTag = window.gtag;

      if (analyticsTag) {
        analyticsTag('event', eventData.eventAction, {
          'event_category': options.analyticsEventCategory,
          'event_label': eventLabel
        });
      } else {
        var analytics = window.ga || window.__gaTracker;
        analytics("send", {
          hitType: 'event',
          eventCategory: options.analyticsEventCategory,
          eventAction: eventData.eventAction,
          eventLabel: eventLabel
        });
      }
    } catch (e) {//silent suppress
    }
  }
};

_dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].executeCallback = function (functionName) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (typeof context[functionName] === 'function') {
    context[functionName]();
  }
};

_dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].openAttachmentLightBoxes = function () {
  //opening lightbox in attachment page.
  var attachments = jQuery("body.attachment-pdf [apl], body.attachment-pdf [attachment_pdf_lightbox]");

  if (attachments.length > 0) {
    jQuery(attachments[0]).trigger("click");
  } //Deeplink on same page #392


  jQuery(window).on('hashchange', function (e) {
    var hash = location.hash;

    if (hash && hash.length > 5) {
      _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].hashFocusBookFound = false;
      _dearviewer_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].detectHash();
    }
  });
};

_dearviewer_utils_provider_js__WEBPACK_IMPORTED_MODULE_2__[/* DocumentProvider */ "a"].prototype.processCustomLinks = function (pageNumber, element) {
  var provider = this,
      app = this.app;
  if (app.options.enableAnnotation === false || !provider._isValidPage(pageNumber) || element == null) return;
  var pageNumberToRender = app.viewer.getDocumentPageNumber(pageNumber);
  var links = app.options.links;

  if (links != null && links[pageNumberToRender] != null) {
    var pageLinks = links[pageNumberToRender];

    for (var index = 0; index < pageLinks.length; index++) {
      var pageLink = pageLinks[index];
      var annotation = void 0;

      if (pageLink.dest && pageLink.dest.indexOf && pageLink.dest.indexOf('[html]') == 0) {
        annotation = document.createElement('div');
        annotation.innerHTML = pageLink.dest.substr(6);
        annotation.className = "customHtmlAnnotation";
      } else {
        annotation = document.createElement('a');
        annotation.setAttribute("dest", pageLink.dest);
        annotation.className = "customLinkAnnotation";
        annotation.href = "#" + pageLink.dest;

        annotation.onclick = function () {
          var dest = this.getAttribute("dest");

          if (dest) {
            provider.linkService.customNavigateTo(dest);
          }

          return false;
        };
      }

      annotation.style.left = pageLink.x + "%";
      annotation.style.top = pageLink.y + "%";
      annotation.style.width = pageLink.w + "%";
      annotation.style.height = pageLink.h + "%";
      element.appendChild(annotation);
    }
  }

  app.viewer.finalizeAnnotations(element, pageNumber);
};

_dearviewer_utils_provider_js__WEBPACK_IMPORTED_MODULE_2__[/* PDFDocumentProvider */ "b"].prototype.processTextContent = function (pageNumber, element) {
  return; //too much costly https://github.com/deepak-ghimire/dearviewer/issues/337

  var provider = this,
      app = this.app;
  if (app.options.enableAnnotation === false || app.options.enableAutoLinks === false || !provider._isValidPage(pageNumber) || element == null) return;
  var pageNumberToRender = app.viewer.getDocumentPageNumber(pageNumber);
  provider.pdfDocument.getPage(pageNumberToRender).then(
  /**
   * @param {PDFPage} page
   */
  function (page) {
    var viewport = page.getViewport({
      scale: 1,
      rotation: page._pageInfo.rotate + app.options.pageRotation
    });
    viewport = page.getViewport({
      scale: app.viewer.getTextureSize({
        pageNumber: pageNumber,
        isAnnotation: true
      }).height / (viewport.height * window.devicePixelRatio),
      rotation: page._pageInfo.rotate + app.options.pageRotation
    });
    page.getTextContent().then(function (textData) {
      var _app$viewer;

      var textItems = [];
      textData.items.forEach(function (item) {
        var test = _dearviewer_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].urlify(item.str);

        if (test !== item.str) {
          textItems.push(item);
        }
      });
      textData.items = textItems;
      var finalString = "";
      var task = pdfjsLib.renderTextLayer({
        textContent: textData,
        container: element,
        viewport: viewport,
        textDivs: []
      }); // console.log(performance.now());

      task._textDivs.forEach(function (div) {
        div.innerHTML = _dearviewer_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].urlify(div.innerHTML);
      }); // console.log(performance.now());


      app === null || app === void 0 ? void 0 : (_app$viewer = app.viewer) === null || _app$viewer === void 0 ? void 0 : _app$viewer.finalizeTextContent(element, pageNumber);
    });
  });
};

_dearviewer_utils_provider_js__WEBPACK_IMPORTED_MODULE_2__[/* PDFDocumentProvider */ "b"].prototype.processAnnotations = function (pageNumber, element) {
  var provider = this,
      app = this.app;
  if (app.options.enableAnnotation === false || !provider._isValidPage(pageNumber) || element == null) return;
  var pageNumberToRender = app.viewer.getDocumentPageNumber(pageNumber);
  provider.pdfDocument.getPage(pageNumberToRender).then(
  /**
   * @param {PDFPage} page
   */
  function (page) {
    var viewport = page.getViewport({
      scale: 1,
      rotation: page._pageInfo.rotate + app.options.pageRotation
    });
    viewport = page.getViewport({
      scale: app.viewer.getTextureSize({
        pageNumber: pageNumber,
        isAnnotation: true
      }).height / (viewport.height * window.devicePixelRatio),
      rotation: page._pageInfo.rotate + app.options.pageRotation
    });
    page.getAnnotations().then(function (annotationsData) {
      if (app.options === null || app.viewer === null) return;
      viewport = viewport.clone({
        dontFlip: true
      });
      var parameters = {
        annotations: annotationsData,
        div: element,
        page: page,
        viewport: viewport,
        imageResourcesPath: app.options.imageResourcesPath,
        linkService: provider.linkService
      };
      pdfjsLib.AnnotationLayer.render(parameters); // pdfjsLib.AnnotationLayer.update(parameters);

      if (app.options.annotationClass && app.options.annotationClass !== "") {
        jQuery(element).find(" > section").addClass(app.options.annotationClass);
      }

      provider.processCustomLinks(pageNumber, element);
      app.viewer.finalizeAnnotations(element, pageNumber);
    });
  });
};

_dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].getPDFThumb = function (options) {
  var parameters = {};
  parameters.url = _dearviewer_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* utils */ "a"].httpsCorrection(options.pdfURL);
  parameters.rangeChunkSize = 524288;
  parameters.cMapPacked = true;
  parameters.disableAutoFetch = true;
  parameters.disableStream = true;
  parameters.disableFontFace = _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.disableFontFace;
  parameters.cMapUrl = _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.cMapUrl;
  parameters.imagesLocation = _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.imagesLocation;
  parameters.imageResourcesPath = _dearviewer_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* DEARVIEWER */ "a"].defaults.imageResourcesPath;
  var progress = pdfjsLib.getDocument(parameters);
  var pdfDoc = progress.promise.then(function (pdf) {
    pdf.getPage(1).then(function (pdfPage) {
      var scale = 1;
      var canvas = document.createElement('canvas'),
          viewport = pdfPage.getViewport({
        scale: scale
      });

      if (viewport.width > viewport.height) {
        scale = scale * 400 / viewport.width;
      } else {
        scale = scale * 400 / viewport.height;
      }

      viewport = pdfPage.getViewport({
        scale: scale
      });
      canvas.height = Math.floor(viewport.height);
      canvas.width = Math.floor(viewport.width);
      var pageRendering = pdfPage.render({
        canvas: canvas,
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      });
      pageRendering.promise.then(function () {
        var _options$callback;

        var src = canvas.toDataURL('image/jpeg', 0.9);
        (_options$callback = options.callback) === null || _options$callback === void 0 ? void 0 : _options$callback.call(options, src);
        if (pdfDoc.destroy) pdfDoc.destroy();
        if (progress.destroy) progress.destroy();
        pdfDoc = null;
        progress = null;
      });
    });
  });

  progress.onProgress = function getDocumentProgress(progressData) {
    // if (app !== null) {
    var percentage = 100 * progressData.loaded / progressData.total;

    if (isNaN(percentage)) {
      //in case divided by zero/undefined -- don't have total value
      if (progressData && progressData.loaded) {
        options.updateInfo("Loading PDF " + (Math.ceil(progressData.loaded / 10000) / 100).toFixed(2).toString() + "MB ...");
      } else {
        options.updateInfo("Loading PDF ...");
      }
    } else {
      options.updateInfo("Loading PDF " + Math.ceil(percentage).toString().split(".")[0] + "% ...");
    } // }

  };
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/js/dearviewer/defaults.js
var defaults = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/dearviewer/viewers/base-viewer.js
var base_viewer = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/dearviewer/viewers/reader.js
var reader = __webpack_require__(9);

// EXTERNAL MODULE: ./src/js/dearviewer/viewers/page.js
var page = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/dearviewer/viewers/slider.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var utils = defaults["a" /* DEARVIEWER */].utils;

var Slider = /*#__PURE__*/function (_BaseViewer) {
  _inherits(Slider, _BaseViewer);

  var _super = _createSuper(Slider);

  function Slider(options, appContext) {
    var _this;

    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(_this);
  }

  return Slider;
}(base_viewer["a" /* BaseViewer */]);


// EXTERNAL MODULE: ./src/js/dearviewer/viewers/flipbook-2d.js
var flipbook_2d = __webpack_require__(10);

// EXTERNAL MODULE: ./src/js/dearviewer/viewers/flipbook-3d.js
var flipbook_3d = __webpack_require__(7);

// CONCATENATED MODULE: ./src/js/dearviewer/viewers/viewer-pros.js
function viewer_pros_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { viewer_pros_typeof = function _typeof(obj) { return typeof obj; }; } else { viewer_pros_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return viewer_pros_typeof(obj); }

function viewer_pros_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = viewer_pros_getPrototypeOf(object); if (object === null) break; } return object; }

function viewer_pros_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) viewer_pros_setPrototypeOf(subClass, superClass); }

function viewer_pros_setPrototypeOf(o, p) { viewer_pros_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return viewer_pros_setPrototypeOf(o, p); }

function viewer_pros_createSuper(Derived) { var hasNativeReflectConstruct = viewer_pros_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = viewer_pros_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = viewer_pros_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return viewer_pros_possibleConstructorReturn(this, result); }; }

function viewer_pros_possibleConstructorReturn(self, call) { if (call && (viewer_pros_typeof(call) === "object" || typeof call === "function")) { return call; } return viewer_pros_assertThisInitialized(self); }

function viewer_pros_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function viewer_pros_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function viewer_pros_getPrototypeOf(o) { viewer_pros_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return viewer_pros_getPrototypeOf(o); }







var viewer_pros_utils = defaults["a" /* DEARVIEWER */].utils; //region Pinch To Zoom

base_viewer["a" /* BaseViewer */].prototype.pinchDown = function (event) {
  if (event.touches != null && event.touches.length == 2 && this.startTouches == null) {
    this.startTouches = viewer_pros_utils.getTouches(event);
    this.app.viewer.zoomCenter = viewer_pros_utils.getVectorAvg(viewer_pros_utils.getTouches(event, this.parentElement.offset()));
    this.lastScale = 1;
  }
};

base_viewer["a" /* BaseViewer */].prototype.pinchUp = function (event) {
  if (event.touches != null && event.touches.length < 2 && this.pinchZoomDirty == true) {
    this.app.viewer.lastScale = this.lastScale;
    this.app.container.removeClass("df-pinch-zoom");
    this.updateTemporaryScale(true);
    this.app.zoom();
    this.lastScale = null;
    this.app.viewer.canSwipe = false;
    this.pinchZoomDirty = false;
    this.app.viewer._pinchZoomLastScale = null;
    this.startTouches = null;
  }
};

base_viewer["a" /* BaseViewer */].prototype.pinchMove = function (event) {
  if (event.touches != null && event.touches.length == 2 && this.startTouches != null) {
    this.pinchZoomDirty = true;
    this.app.container.addClass("df-pinch-zoom");
    var newScale = viewer_pros_utils.calculateScale(this.startTouches, viewer_pros_utils.getTouches(event)),
        scale = newScale / this.lastScale;
    this.lastScale = newScale;
    this.app.viewer.pinchZoomUpdateScale = viewer_pros_utils.limitAt(newScale, this.app.viewer.minZoom / this.app.zoomValue, this.app.viewer.maxZoom / this.app.zoomValue);

    if (this.app.viewer._pinchZoomLastScale != this.app.viewer.pinchZoomUpdateScale) {
      this.app.viewer.pinchZoomRequestStatus = defaults["a" /* DEARVIEWER */].REQUEST_STATUS.ON;
      this.app.viewer._pinchZoomLastScale = this.app.viewer.pinchZoomUpdateScale;
    }

    event.preventDefault();
    return;
  }
}; //endregion


var HybridFlipbook3D = /*#__PURE__*/function (_FlipBook3D) {
  viewer_pros_inherits(HybridFlipbook3D, _FlipBook3D);

  var _super = viewer_pros_createSuper(HybridFlipbook3D);

  function HybridFlipbook3D(options, appContext) {
    viewer_pros_classCallCheck(this, HybridFlipbook3D);

    return _super.call(this, options, appContext);
  }

  _createClass(HybridFlipbook3D, [{
    key: "init",
    value: function init() {
      _get(viewer_pros_getPrototypeOf(HybridFlipbook3D.prototype), "init", this).call(this);

      this.texturePowerOfTwo = false;
      this.app.container.addClass("df-hybrid-viewer df-pending");
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.zoomViewer.rightSheetHeight === undefined) {
        this.zoomViewer.rightSheetHeight = this._containCover.height;
        this.zoomViewer.leftSheetHeight = this._containCover.height;
        this.zoomViewer.leftSheetWidth = this._containCover.width;
        this.zoomViewer.rightSheetWidth = this._containCover.width;
      }

      _get(viewer_pros_getPrototypeOf(HybridFlipbook3D.prototype), "resize", this).call(this);

      this.stage.orbitControl.mouseButtons.ORBIT = -1;
    }
  }, {
    key: "getAnnotationElement",
    value: function getAnnotationElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.zoomViewer.getAnnotationElement(pageNumber, clean);
    }
  }, {
    key: "getTextElement",
    value: function getTextElement(pageNumber) {
      var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.zoomViewer.getTextElement(pageNumber, clean);
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.isFlipping();
    }
  }, {
    key: "onCenterStartAnimation",
    value: function onCenterStartAnimation(tween) {
      this.app.container.addClass("df-hide-zoomview");
    }
  }, {
    key: "onCenterStopAnimation",
    value: function onCenterStopAnimation(tween) {
      this.finalizeCenterAnimation();
    }
  }, {
    key: "onCenterCompleteAnimation",
    value: function onCenterCompleteAnimation(tween) {
      this.zoomViewer.updateCenter();
      this.finalizeCenterAnimation();
    }
  }, {
    key: "finalizeCenterAnimation",
    value: function finalizeCenterAnimation() {
      this.app.container.removeClass("df-hide-zoomview");
    }
  }, {
    key: "afterFlip",
    value: function afterFlip() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var viewer = this;

      if (this.isAnimating() !== true) {
        this.pagesReady();
        this.updatePendingStatusClass();
        this.updateZoomViewerTexture({
          pageNumber: this.getBasePage()
        });
        this.updateZoomViewerTexture({
          pageNumber: this.getBasePage() + 1
        });
      }
    }
  }, {
    key: "exchangeTexture",
    value: function exchangeTexture(from, to) {
      this.skipCenterAnimation = true;

      _get(viewer_pros_getPrototypeOf(HybridFlipbook3D.prototype), "exchangeTexture", this).call(this, from, to);

      this.updateZoomViewerTextContent({
        pageNumber: this.getBasePage()
      });
      this.updateZoomViewerTextContent({
        pageNumber: this.getBasePage() + 1
      });
    }
  }, {
    key: "updateZoomViewerTexture",
    value: function updateZoomViewerTexture(param) {
      var page = this.zoomViewer.getPageByNumber(param.pageNumber);

      if (page && page.textureStamp === "-1") {
        var set = this.zoomViewer.setPage({
          pageNumber: page.pageNumber,
          texture: this.getPageByNumber(page.pageNumber).getTexture()
        });

        if (set) {
          this.updateZoomViewerTextContent(param);
        }
      }
    }
  }, {
    key: "updateZoomViewerTextContent",
    value: function updateZoomViewerTextContent(param) {
      this.app.provider.processAnnotations(param.pageNumber, this.app.viewer.getAnnotationElement(param.pageNumber, true));
      this.app.provider.processTextContent(param.pageNumber, this.app.viewer.getTextElement(param.pageNumber, true));
    }
  }, {
    key: "textureLoadedCallback",
    value: function textureLoadedCallback(param) {
      this.app.renderRequestStart();
      this.updateZoomViewerTexture(param);
      this.pagesReady();
    }
  }]);

  return HybridFlipbook3D;
}(flipbook_3d["a" /* FlipBook3D */]);

var viewer_pros_FlipBook = function FlipBook(options, appContext) {
  viewer_pros_classCallCheck(this, FlipBook);

  if (navigator.userAgent.indexOf('Trident/') > 0 || defaults["a" /* DEARVIEWER */].utils.isSafariWindows()) {
    //Safari for windows
    options.is3D = false; //IE 11
  }

  if (options.is3D === true) {
    if (options.flat3D === true) {
      options.flexibility = 0;
      return new HybridFlipbook3D(options, appContext);
    }

    return new flipbook_3d["a" /* FlipBook3D */](options, appContext);
  }

  return new flipbook_2d["a" /* FlipBook2D */](options, appContext);
};

defaults["a" /* DEARVIEWER */].viewers = defaults["a" /* DEARVIEWER */].viewers || {};
defaults["a" /* DEARVIEWER */].viewers['flipbook'] = viewer_pros_FlipBook;
defaults["a" /* DEARVIEWER */].viewers['default'] = defaults["a" /* DEARVIEWER */].viewers['reader'] = reader["a" /* Reader */];
defaults["a" /* DEARVIEWER */].viewers['slider'] = Slider;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/dearviewer/defaults.js
var defaults = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/dearviewer/utils/utils.js
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/js/dearviewer/viewers/viewer-pros.js + 1 modules
var viewer_pros = __webpack_require__(13);

// EXTERNAL MODULE: ./src/js/dearviewer/utils/provider.js
var utils_provider = __webpack_require__(5);

// CONCATENATED MODULE: ./src/js/dearviewer/utils/image-provider.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var image_provider_utils = defaults["a" /* DEARVIEWER */].utils;

var ImagePage = /*#__PURE__*/function () {
  function ImagePage(props) {
    _classCallCheck(this, ImagePage);

    this._viewPort = new Viewport(0, 0);
    this._pageInfo = {
      rotate: 0
    };
    this.src = props.src;
  }

  _createClass(ImagePage, [{
    key: "getViewport",
    value: function getViewport() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        scale: 1
      };
      return new Viewport(this._viewPort.height * params.scale, this._viewPort.width * params.scale, params.scale);
    }
  }]);

  return ImagePage;
}();

var ImageDocument = /*#__PURE__*/function () {
  function ImageDocument(source) {
    _classCallCheck(this, ImageDocument);

    this.source = [];
    this.pages = [];
    this.numPages = source.length;

    for (var _correct = 0; _correct < source.length; _correct++) {
      this.source[_correct] = image_provider_utils.httpsCorrection(source[_correct].toString());
      this.pages.push(new ImagePage({
        src: this.source[_correct]
      }));
    }
  }

  _createClass(ImageDocument, [{
    key: "getPage",
    value: function getPage(pageNumber) {
      var provider = this;
      return new Promise(function (resolve, reject) {
        try {
          jQuery("<img/>").attr("src", provider.source[pageNumber - 1]).prop("crossOrigin", "Anonymous").on('load', function () {
            jQuery(this).off();
            var page = new ImagePage({
              src: this.src
            });
            page._viewPort.height = this.height;
            page._viewPort.width = this.width;
            page._viewPort.scale = 1;
            page.image = this;
            resolve(page);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }]);

  return ImageDocument;
}();

var Viewport = /*#__PURE__*/function () {
  function Viewport(height, width) {
    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Viewport);

    this.scale = scale;
    this.height = height;
    this.width = width;
    this.scale = scale;
    this.transform = [0, 0, 0, 0, 0, this.height];
  }

  _createClass(Viewport, [{
    key: "clone",
    value: function clone() {
      return new Viewport(this.height, this.width, this.scale);
    }
  }]);

  return Viewport;
}();

var image_provider_ImageDocumentProvider = /*#__PURE__*/function (_DocumentProvider) {
  _inherits(ImageDocumentProvider, _DocumentProvider);

  var _super = _createSuper(ImageDocumentProvider);

  function ImageDocumentProvider(options, context) {
    var _this;

    _classCallCheck(this, ImageDocumentProvider);

    _this = _super.call(this, options, context);

    var app = _this.app,
        provider = _assertThisInitialized(_this);

    provider.document = new ImageDocument(app.options.source);
    provider.pageCount = provider.document.numPages;
    provider.numPages = provider.document.numPages;
    provider.loadDocument();
    return _this;
  }

  _createClass(ImageDocumentProvider, [{
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "loadDocument",
    value: function loadDocument() {
      var app = this.app,
          options = this.app.options,
          provider = this;
      provider.document.getPage(1).then(function (page) {
        var _options$maxTextureSi;

        provider.coverPage = page;

        var _coverViewPort = provider.coverPage.viewPort = page._viewPort;

        var _coverPageRatio = provider.coverPage.pageRatio = _coverViewPort.width / _coverViewPort.height;

        var _isCoverWide = _coverPageRatio > 1;

        provider.viewPorts[1] = _coverViewPort;
        app.dimensions.coverPage = {
          ratio: _coverPageRatio,
          viewPort: _coverViewPort,
          width: _coverViewPort.width,
          height: _coverViewPort.height
        };
        app.dimensions.maxTextureHeight = ((_options$maxTextureSi = options.maxTextureSize) !== null && _options$maxTextureSi !== void 0 ? _options$maxTextureSi : 4096) / (!_isCoverWide ? 1 : _coverPageRatio);
        app.dimensions.autoHeightRatio = 1 / _coverPageRatio;
        provider._page1Pass = true;
        provider.pagesLoaded();
      }); //check if internal pages are of double sizes.

      if (provider.pageCount > 1 && app.checkSecondPage === true) {
        provider.document.getPage(2).then(function (page) {
          var _page2ViewPort = page._viewPort;
          provider._page2Ratio = _page2ViewPort.width / _page2ViewPort.height;
          provider.viewPorts[2] = _page2ViewPort;
          provider._page2Pass = true;
          provider.pagesLoaded();
        });
      } else {
        provider._page2Pass = true;
        provider.pagesLoaded();
      }
    }
  }, {
    key: "finalize",
    value: function finalize() {
      var app = this.app,
          provider = this;
      if (app === null || app.options === null) return;
      provider.linkService = new utils_provider["c" /* PDFLinkService */](); // provider.linkService.setDocument(provider.pdfDocument, null);

      provider.linkService.setViewer(app);

      provider._documentLoaded();
    }
  }, {
    key: "processPage",
    value: function processPage(param) {
      var app = this.app,
          provider = this,
          pageNumber = param.pageNumber,
          startTime = performance.now(); //region determine page to render

      var pdfPageNumberToRender = app.viewer.getDocumentPageNumber(pageNumber);
      image_provider_utils.log("Requesting PDF Page:" + pdfPageNumberToRender);
      provider.document.getPage(pdfPageNumberToRender).then(function (page) {
        if (!provider.viewPorts[pageNumber]) {
          param.isFreshPage = true;
          provider.viewPorts[pageNumber] = page._viewPort;
        }

        var renderContext = app.viewer.getRenderContext(page, param);

        if (param.isFreshPage) {
          var _app$viewer$getPageBy;

          (_app$viewer$getPageBy = app.viewer.getPageByNumber(param.pageNumber)) === null || _app$viewer$getPageBy === void 0 ? void 0 : _app$viewer$getPageBy.changeTexture(param.pageNumber, renderContext.canvas.height);
        }

        param.preferCanvas = true;

        if (param.preferCanvas === true) {
          var _renderContext$viewpo;

          var context = renderContext.canvas.getContext("2d");
          context.drawImage(page.image, renderContext.viewport.transform[4], 0, renderContext.canvas.width * ((_renderContext$viewpo = renderContext.viewport.widthFix) !== null && _renderContext$viewpo !== void 0 ? _renderContext$viewpo : 1), renderContext.canvas.height); //todo cleanup page.image , don't keep in memory

          app.applyTexture(renderContext.canvas, param);
        } else {
          app.applyTexture({
            src: page.src,
            height: renderContext.canvas.height,
            width: renderContext.canvas.width
          }, param);
        }

        image_provider_utils.log("Rendered " + pageNumber + " in " + (performance.now() - startTime) + " milliseconds");
      });
    }
  }]);

  return ImageDocumentProvider;
}(utils_provider["a" /* DocumentProvider */]);

defaults["a" /* DEARVIEWER */].providers['image'] = image_provider_ImageDocumentProvider;

// EXTERNAL MODULE: ./src/js/common-pro.js
var common_pro = __webpack_require__(12);

// CONCATENATED MODULE: ./src/js/dflip.js
/* globals jQuery, pdfjsLib, THREE */






var DEARFLIP = window.DFLIP = window.DEARFLIP = defaults["a" /* DEARVIEWER */];
DEARFLIP.defaults.viewerType = 'flipbook';
DEARFLIP.defaults.analyticsEventCategory = "Flipbook";
DEARFLIP.defaults.analyticsViewerReady = "Book Ready";
DEARFLIP.defaults.analyticsViewerOpen = "Open Book";
DEARFLIP.defaults.analyticsViewerClose = "Book Closed";
DEARFLIP.defaults.analyticsFirstPageChange = "First Page Flip";
DEARFLIP.slug = 'dflip';
DEARFLIP.locationVar = 'dFlipLocation';
DEARFLIP.locationFile = "dflip"; //region old Constants
//These are depreciated , so do not use them anymore

DEARFLIP.PAGE_MODE = {
  SINGLE: 1,
  DOUBLE: 2,
  AUTO: null
};
DEARFLIP.SINGLE_PAGE_MODE = {
  ZOOM: 1,
  BOOKLET: 2,
  AUTO: null
};
DEARFLIP.CONTROLSPOSITION = {
  HIDDEN: 'hide',
  TOP: 'top',
  BOTTOM: 'bottom'
};
DEARFLIP.DIRECTION = {
  LTR: 1,
  RTL: 2
};
DEARFLIP.PAGE_SIZE = {
  AUTO: 0,
  SINGLE: 1,
  DOUBLEINTERNAL: 2
}; //endregion

DEARFLIP.ConvertPageLinks = function () {
  var w = arguments[0] / 100,
      h = arguments[1] / 100;

  var toPercent = function toPercent(_x, _y, _w, _h, _dest) {
    return {
      x: _x / w,
      y: _y / h,
      w: _w / w,
      h: _h / h,
      dest: _dest
    };
  };

  var percents = [];
  var input;

  for (var index = 2; index < arguments.length; index++) {
    input = arguments[index];
    percents[index - 2] = toPercent.apply(this, input);
  }

  return percents;
};

DEARFLIP.parseLinks = function (links) {
  var _links;

  if (links != null && links.length > 0) {
    for (var index = 0; index < links.length; index++) {
      _links = links[index];

      if (_links != null && _links[0] != null && _links[0].dest == null) {
        _links = DEARFLIP.ConvertPageLinks.apply(this, _links);
        links[index] = _links;
      }
    }
  }

  return links;
};

DEARFLIP.parseFallBack = function () {
  //region pre-parse fix for DFLIP
  jQuery('.df-posts').addClass("dflip-books"); //backward-compatibity

  jQuery('.dflip-books').addClass("df-posts"); //backward-compatibity

  jQuery('._df_button, ._df_thumb, ._df_custom, ._df_book').each(function () {
    var app = jQuery(this);
    var isParsed = app.data("parsed");

    if (isParsed !== "true") {
      app.addClass("df-element");

      if (app.hasClass("_df_book")) {} else {
        if (app.hasClass("_df_thumb")) {
          app.attr("data-lightbox", "thumb");

          if (app.attr("thumb") !== void 0) {
            app.data("thumb", app.attr("thumb"));
          }
        } else if (app.hasClass("_df_button")) {
          app.attr("data-lightbox", "button");
        } else {
          app.attr("data-lightbox", "custom");
        }
      } //set the option id


      if (app.data("option") == void 0) {
        app.data("option", "option_" + app.attr("id"));
      }

      if (app.attr("source") !== void 0) {
        app.data("source", app.attr("source"));
      }
    }
  }); //todo update this so that - this is also done in ajax calls, better use in getOptions fallback
  //endregion
};

DEARFLIP.parseBooks = function () {
  DEARFLIP.parseFallBack();
  DEARFLIP.parseElements;
};

var dflip_updateOptions = function updateOptions(options) {
  if (options.source != null && (Array === options.source.constructor || Array.isArray(options.source) || options.source instanceof Array)) {
    options.providerType = "image";
  }

  options.has3DCover = utils["a" /* utils */].isTrue(options.has3DCover); //existing but modified

  if (options.pageSize !== void 0) {
    if (options.pageSize === "1" || options.pageSize === 1 || options.pageSize === DEARFLIP.FLIPBOOK_PAGE_SIZE.SINGLE) {
      options.pageSize = DEARFLIP.FLIPBOOK_PAGE_SIZE.SINGLE;
    } else if (options.pageSize === "2" || options.pageSize === 2 || options.pageSize === DEARFLIP.FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL) {
      options.pageSize = DEARFLIP.FLIPBOOK_PAGE_SIZE.DOUBLE_INTERNAL;
    } else {
      options.pageSize = DEARFLIP.FLIPBOOK_PAGE_SIZE.AUTO;
    }
  }

  if (options.pageMode !== void 0) {
    if (options.pageMode === "1" || options.pageMode === 1 || options.pageMode === DEARFLIP.FLIPBOOK_PAGE_MODE.SINGLE) {
      options.pageMode = DEARFLIP.FLIPBOOK_PAGE_MODE.SINGLE;
    } else if (options.pageMode === "2" || options.pageMode === 2 || options.pageMode === DEARFLIP.FLIPBOOK_PAGE_MODE.DOUBLE) {
      options.pageMode = DEARFLIP.FLIPBOOK_PAGE_MODE.DOUBLE;
    } else {
      options.pageMode = DEARFLIP.FLIPBOOK_PAGE_MODE.AUTO;
    }
  }

  if (options.singlePageMode !== void 0) {
    if (options.singlePageMode === "1" || options.singlePageMode === 1 || options.singlePageMode === DEARFLIP.FLIPBOOK_SINGLE_PAGE_MODE.ZOOM) {
      options.singlePageMode = DEARFLIP.FLIPBOOK_SINGLE_PAGE_MODE.ZOOM;
    } else if (options.singlePageMode === "2" || options.singlePageMode === 2 || options.singlePageMode === DEARFLIP.FLIPBOOK_SINGLE_PAGE_MODE.BOOKLET) {
      options.singlePageMode = DEARFLIP.FLIPBOOK_SINGLE_PAGE_MODE.BOOKLET;
    } else {
      options.singlePageMode = DEARFLIP.FLIPBOOK_SINGLE_PAGE_MODE.AUTO;
    }
  }

  if (options.controlsPosition !== void 0) {
    if (options.controlsPosition === "hide") {
      options.controlsPosition = DEARFLIP.CONTROLS_POSITION.HIDDEN;
    }
  }

  if (options.overwritePDFOutline !== void 0) {
    options.overwritePDFOutline = utils["a" /* utils */].isTrue(options.overwritePDFOutline);
  } //replaced


  if (options.webgl !== void 0) {
    options.is3D = options.webgl = utils["a" /* utils */].isTrue(options.webgl);
    delete options.webgl;
  }

  if (options.webglShadow !== void 0) {
    options.has3DShadow = utils["a" /* utils */].isTrue(options.webglShadow);
    delete options.webglShadow;
  }

  if (options.scrollWheel !== void 0) {
    if (utils["a" /* utils */].isTrue(options.scrollWheel)) {
      options.mouseScrollAction = DEARFLIP.MOUSE_SCROLL_ACTIONS.ZOOM;
    }

    delete options.scrollWheel;
  }

  if (options.stiffness !== void 0) {
    delete options.stiffness;
  }

  if (options.soundEnable !== void 0) {
    options.enableSound = utils["a" /* utils */].isTrue(options.soundEnable);
    delete options.soundEnable;
  }

  if (options.enableDownload !== void 0) {
    options.showDownloadControl = utils["a" /* utils */].isTrue(options.enableDownload);
    delete options.enableDownload;
  }

  if (options.autoEnableOutline !== void 0) {
    options.autoOpenOutline = utils["a" /* utils */].isTrue(options.autoEnableOutline);
    delete options.autoEnableOutline;
  }

  if (options.autoEnableThumbnail !== void 0) {
    options.autoOpenThumbnail = utils["a" /* utils */].isTrue(options.autoEnableThumbnail);
    delete options.autoEnableThumbnail;
  }

  if (options.direction !== void 0) {
    if (options.direction === "2" || options.direction === 2 || options.direction === DEARFLIP.READ_DIRECTION.RTL) {
      options.readDirection = DEARFLIP.READ_DIRECTION.RTL;
    } else {
      options.readDirection = DEARFLIP.READ_DIRECTION.LTR;
    }

    delete options.direction;
  }

  if (options.hard !== void 0) {
    options.flipbookHardPages = options.hard;

    if (options.flipbookHardPages === "hard") {
      options.flipbookHardPages = "all";
    }

    delete options.hard;
  } //removed
  //forcefit is no longer required in DearPDF


  if (options.forceFit !== void 0) {
    delete options.forceFit;
  } //region ParseLinks


  if (typeof dFlipWPGlobal !== 'undefined' && options.wpOptions === 'true') {
    if (options.linksparsed !== true) {
      options.linksparsed = true;
      var links = [];

      try {
        for (var key in options.links) {
          var _pagelinks = options.links[key];
          var pagelink = [100, 100];

          for (var l = 0; l < _pagelinks.length; l++) {
            var _link = _pagelinks[l];

            var _values = _link.substr(1).slice(0, -1).split(",");

            var _linkarr = [];

            for (var v = 0; v < 5; v++) {
              _linkarr[v] = _values[v];
            }

            pagelink.push(_linkarr);
          }

          links[parseInt(key, 10) + 1] = pagelink;
        }
      } catch (error) {
        console.error(error.stack);
      }

      options.links = DEARFLIP.parseLinks(links);
    }
  } else {
    options.links = DEARFLIP.parseLinks(options.links);
  } //endregion


  return utils["a" /* utils */].sanitizeOptions(options);
}; //region jQuery Extension and Triggers
//jQuery Extension


jQuery.fn.extend({
  flipBook: function flipBook(source, options) {
    if (options == null) options = {};
    options.source = source;
    options.element = jQuery(this);
    return new defaults["a" /* DEARVIEWER */].Application(options);
  }
}); //jQuery events

jQuery(document).ready(function () {
  //Lightbox Trigger
  var body = jQuery('body');
  DEARFLIP.executeCallback("onBeforeDearFlipInit");

  if (typeof window['dFlipWPGlobal'] !== 'undefined') {
    jQuery.extend(true, DEARFLIP.defaults, dflip_updateOptions(window['dFlipWPGlobal']));
  }

  DEARFLIP.initUtils();
  DEARFLIP.initControls();
  body.on('click', '.df-element[data-lightbox]', function (event) {
    //incase the element is link type
    event.preventDefault();
    DEARFLIP.openLightBox(jQuery(this));
  });
  DEARFLIP.checkBrowserURLforDefaults();
  DEARFLIP.parseCSSElements();
  DEARFLIP.parseFallBack();
  utils["a" /* utils */].detectHash();
  DEARFLIP.parseNormalElements();
  DEARFLIP.checkBrowserURLforPDF(true);
  DEARFLIP.openAttachmentLightBoxes();
  DEARFLIP.executeCallback("onDearFlipInit");
});

utils["a" /* utils */].finalizeOptions = function (options) {
  return dflip_updateOptions(options);
};

image_provider_ImageDocumentProvider.prototype.processAnnotations = function (pageNumber, element) {
  this.processCustomLinks(pageNumber, element);
};

DEARFLIP.executeCallback("onDearFlipLoad");
/* harmony default export */ var dflip = __webpack_exports__["default"] = (DEARFLIP);

/***/ })
/******/ ]);