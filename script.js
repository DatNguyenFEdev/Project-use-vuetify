new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      imagesSlider: [
        {
          src: "./images/img-sliders/cover.jpg"
        },
        {
          src: "./images/img-sliders/cover1.jpg"
        },
        {
          src: "./images/img-sliders/cover2.jpg"
        }
      ],
      imagesPost:[
        {
          src: "./images/img-posts/img-post1.jpg"
        },
        {
          src: "./images/img-posts/img-post1.jpg"
        }
      ],
      slides: [
        'Nothing Impossible1',
        'Nothing Impossible2',
        'Nothing Impossible3',
      ],

    }
  },
})
