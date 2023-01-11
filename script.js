var app = new Vue({
  el: '#app',
  data:{
    scrubbed: 0,
    loaded: 0
  },
  methods: {
    init() {
      var self = this;
      var container = self.$refs.scrollable;
      var video = self.$refs.video;
      var offset = video.offsetHeight / 2;
      var controller = new ScrollMagic.Controller({
        container: container
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: video, 
        duration: 400
      })
      .setPin(video)
      .offset(offset)
      .on("progress", function(ev) {
        if(typeof(ev.progress) != 'undefined') {
          self.scrubbed = ev.progress * 100;
        }
      })
      .addTo(controller);
    },
    frameLoaded(e) {
      var self = this;
      self.loaded = e;
    },
    allFramesLoaded(e) {
      var self = this;
      self.loaded = 100;
    },
    outputEvent(str, arg1) {
      var out = str;
      if(typeof(arg1) != 'undefined') {
        out += " at position "+arg1+"%";
      }
      console.log(out);
    }
  }
});