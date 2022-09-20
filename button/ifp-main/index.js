/**
 * Spanizer
 * Wraps letters with spans, for css animations
 *
 * @example
  <h1 class="js-letters">Letters</h1>
 */
(function ($) {
  var Spanizer = (function () {
    /**
     * Global settings
     */
    var settings = {
      letters: $(".js-letters"),
      mast: $(".mast"),
      btn: $(".btn"),
      animateClass: "animate",
    };

    return {
      /**
       * Init
       */
      init: function () {
        this.bind();
      },

      /**
       * Bind Events
       */
      bind: function () {
        // Spanize Letters
        Spanizer.doSpanize();
        // Refresh animation
        settings.btn.on("click", function (e) {
          e.preventDefault();
          Spanizer.refreshAnimation();
        });
      },

      /**
       * Spanizer
       * Wraps letters in a span
       */
      doSpanize: function () {
        settings.letters.html(function (i, el) {
          var spanize = $.trim(el).split("");
          var template = "<span>" + spanize.join("</span><span>") + "</span>";
          return template;
        });
      },
      /**
       * Refresh/Rerun our animation
       */
      refreshAnimation: function () {
        settings.mast.removeClass(settings.animateClass);
        mast.offsetWidth = mast.offsetWidth;
        settings.mast.addClass(settings.animateClass);
      },
    };
  })();
  // Let's GO!
  Spanizer.init();
})(jQuery);
