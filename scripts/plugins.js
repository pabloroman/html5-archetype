/**
 * @author Alexander Griffioen <alex.griffioen@gmail.com>
 * @version 1.0
 * @usage $('select').selekt();
 */
(function(e,t,n,r){function o(t,n){this.$element=e(t);this.options=e.extend({},i,n);this.init()}var i={className:"selekt-replaced"};var s="selekt";e.fn[s]=function(t){return this.filter("select").each(function(){if(!e.data(this,s)){e.data(this,s,new o(this,t))}})};o.prototype.init=function(){var t=this.$element.find("option:selected").text();var n=this;var r=e("<div />").addClass(this.options.className);this.$element.wrap(r).before(e("<span />").text(t));this.$element.css({opacity:0}).on({"focus mousedown":function(t){t.data.wrapper.attr("class",t.data.scope.options.className+" active");e(this).one({blur:function(e){e.data.wrapper.attr("class",e.data.scope.options.className)},change:function(t){t.data.wrapper.children("span").text(e("option:selected",e(this)).text());t.data.wrapper.attr("class",t.data.scope.options.className)}},{scope:t.data.scope,wrapper:t.data.wrapper})},mouseenter:function(e){e.data.wrapper.attr("class",e.data.scope.options.className+" hover")},mouseleave:function(e){e.data.wrapper.attr("class",e.data.scope.options.className)}},{scope:this,wrapper:this.$element.closest("."+n.options.className)})}})(jQuery,document,window);

$(".selekt").selekt();