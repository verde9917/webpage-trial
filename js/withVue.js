/* global $ */
var colorSelector = new Vue({
    el: "#colorSelector",
    data: {
        firstcolorID: "#00336D",
        secondcolorID: "#EAEAE0",
    },
    methods: {
        changefirst: function () {
            var newColor = this.firstcolorID;
            $('body').css('color', newColor);
            $('#head').css('background-color', newColor);
            $('#footer').css('background-color', newColor);
        },
        changesecond: function () {
            var newColor = this.secondcolorID;
            $('body').css('background-color', newColor);
            $('#head').css('color', newColor);
            $('#footer').css('color', newColor);
        },
    }
})

var inputText = new Vue({
    el: "#inputText",
    data: {
        texts: '',
        reset:0
    },
    methods: {
        resetTexts: function () {
            this.texts = '';
        }
    }
})

var calcPrice = new Vue({
    el: "#calcPrice",
    data:{
        withoutTax:null,
    },
    methods:{
        resetPrice: function(){
            this.withoutTax = null;
        }
    }
})