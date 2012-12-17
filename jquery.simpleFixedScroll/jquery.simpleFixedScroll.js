/**
 * jQuery simple fixed scroll plugin
 *
 * Copyright (c) 2012 miraoto
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * fixed scroll plugin
 *
 * @name $.simpleFixedScroll();
 * @cat Plugins/Preload
 * @author miraoto
 *
 * @example $.simpleFixedScroll();
 * @desc default setting
 */
(function($) {
  $.simpleFixedScroll =function(options) {
    var defaults = {
      'bottomMargin'      : ($("footer").height() + 10),
      'scrollClassPrefix' : 'scroll-fixed',
      'scrollClass'       : '',
      'fixedType'         : 'top',
      'fixNavigation'     : $('#local-nav'),
      'targetContents'    : $("#contents")
    }

    var plugin = this;
        plugin.settings = {}

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      plugin.settings.scrollClass = plugin.settings.scrollClassPrefix + "-" + plugin.settings.fixedType;
      if (plugin.settings.fixNavigation.length) {
        if (plugin.settings.targetContents.height() > plugin.settings.fixNavigation.height()) {
          $(window).scroll(plugin.fixedScroll);
        }
      }
    }

    plugin.fixedScroll = function() {
      if(($(window).scrollTop() + $(window).height()) > plugin.settings.fixNavigation.height() - plugin.settings.bottomMargin) {
        plugin.settings.fixNavigation.addClass(plugin.settings.scrollClass);
        
        if ($("body").height() < $(window).scrollTop() + $(window).height()) {
          var bottomMargin = $(window).scrollTop() + $(window).height() - $("body").height();
          if (bottomMargin < plugin.settings.bottomMargin) {
            bottomMargin = plugin.settings.bottomMargin;
          }
          $("." + plugin.settings.scrollClass).css("bottom",bottomMargin);
        }
      }
      else {
        plugin.settings.fixNavigation.removeClass(plugin.settings.scrollClass);
      }
    }

    plugin.init();
  }

  $.fn.simpleFixedScroll = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('simpleFixedScroll')) {
        var plugin = new $.simpleFixedScroll(this, options);
        $(this).data('simpleFixedScroll', plugin);
      }
    });
  }
})(jQuery);

