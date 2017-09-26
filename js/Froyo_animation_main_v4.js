(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Froyo_animation_main_v4_atlas_", frames: [[277,363,278,231],[557,512,278,231],[277,596,238,238],[1557,543,238,238],[517,745,238,238],[0,610,238,238],[1077,520,238,238],[757,752,238,238],[837,512,238,238],[1317,543,238,238],[997,760,238,238],[1517,0,340,250],[1369,783,130,293],[1237,783,130,293],[0,363,275,245],[821,265,275,245],[1797,766,211,218],[1517,252,289,289],[821,0,352,263],[1175,256,261,262],[1808,509,237,255],[1808,252,237,255],[0,0,819,361],[1175,0,340,254]]}
];


// symbols:



(lib.Сomposition1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Сomposition1_1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468_1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468_2 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468_3 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468копия = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468копия_1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468копия_2 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468копия2 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Эллипс1468копия2_1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._5копия = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BusinesscardMockupvol1511 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BusinesscardMockupvol1511_1 = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.design = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Icons = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.money = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.SHIRT = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.SHIRT2копия = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.stat = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.w1_d = function() {
	this.spriteSheet = ss["Froyo_animation_main_v4_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("00:00", "bold 72px 'MagistralC'", "#FFFFFF");
	this.text.lineHeight = 84;
	this.text.lineWidth = 242;
	this.text.parent = this;
	this.text.setTransform(-0.1,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({text:"00:22"},0).wait(1).to({text:"00:44"},0).wait(2).to({x:21.3,text:"01:07"},0).wait(2).to({x:23.3,text:"01:29"},0).wait(2).to({text:"01:51"},0).wait(2).to({x:3.8,text:"02:13"},0).wait(2).to({text:"02:27"},0).wait(2).to({text:"02:39"},0).wait(1).to({text:"02:55"},0).wait(1).to({text:"03:06"},0).wait(2).to({x:9.6,text:"03:17"},0).wait(1).to({x:3.8,text:"03:30"},0).wait(2).to({text:"03:48"},0).wait(2).to({x:-2.1,text:"04:00"},0).wait(1).to({text:"04:38"},0).wait(2).to({x:11.6,text:"05:16"},0).wait(2).to({x:5.7,text:"05:57"},0).wait(2).to({text:"06:15"},0).wait(2).to({text:"06:38"},0).wait(1).to({text:"07:04"},0).wait(2).to({text:"07:40"},0).wait(1).to({text:"08:22"},0).wait(2).to({text:"09:12"},0).wait(2).to({x:7.7,text:"09:47"},0).wait(1).to({text:"10:08"},0).wait(1).to({x:17.4,text:"10:29"},0).wait(2).to({x:23.3,text:"10:59"},0).wait(1).to({x:31.1,text:"11:26"},0).wait(2).to({text:"11:42"},0).wait(2).to({x:17.4,text:"12:00"},0).wait(1).to({text:"12:21"},0).wait(2).to({text:"12:46"},0).wait(1).to({text:"12:53"},0).wait(1).to({text:"13:02"},0).wait(1).to({x:27.2,text:"13:19"},0).wait(1).to({x:19.4,text:"13:28"},0).wait(1).to({text:"13:41"},0).wait(1).to({text:"13:57"},0).wait(1).to({text:"14:19"},0).wait(2).to({text:"14:36"},0).wait(1).to({text:"15:00"},0).wait(1).to({text:"15:22"},0).wait(1).to({text:"15:41"},0).wait(1).to({text:"16:07"},0).wait(2).to({text:"16:35"},0).wait(2).to({text:"16:54"},0).wait(1).to({text:"17:16"},0).wait(2).to({text:"17:27"},0).wait(1).to({text:"17:45"},0).wait(1).to({x:23.3,text:"18:01"},0).wait(1).to({x:19.4,text:"18:24"},0).wait(1).to({text:"18:39"},0).wait(1).to({text:"19:00"},0).wait(1).to({x:23.3,text:"19:12"},0).wait(1).to({text:"19:30"},0).wait(2).to({text:"19:58"},0).wait(1).to({x:9.6,text:"20:15"},0).wait(1).to({x:5.7,text:"20:36"},0).wait(1).to({text:"20:45"},0).wait(1).to({x:25.2,text:"21:04"},0).wait(1).to({text:"21:19"},0).wait(1).to({x:23.3,text:"21:33"},0).wait(2).to({text:"21:51"},0).wait(1).to({x:1.8,text:"22:06"},0).wait(1).to({x:3.8,text:"22:21"},0).wait(1).to({text:"22:40"},0).wait(1).to({text:"23:00"},0).wait(1).to({text:"23:13"},0).wait(1).to({text:"23:42"},0).wait(1).to({text:"23:57"},0).wait(1).to({text:"00:00"},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-19.4,246.4,97.6);


(lib.Анимация29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w1_d();
	this.instance.parent = this;
	this.instance.setTransform(-170,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w1_d();
	this.instance.parent = this;
	this.instance.setTransform(-170,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-57,-146.5);

	this.instance_1 = new lib.Эллипс1468копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119,-108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-146.5,238,293);


(lib.Анимация26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-57,-146.5);

	this.instance_1 = new lib.Эллипс1468копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119,-108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-146.5,238,293);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5копия();
	this.instance.parent = this;
	this.instance.setTransform(-57,-146.5);

	this.instance_1 = new lib.Эллипс1468копия_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119,-108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-146.5,238,293);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SHIRT2копия();
	this.instance.parent = this;
	this.instance.setTransform(-120,-127.5);

	this.instance_1 = new lib.Эллипс1468копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-127.5,240,255);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SHIRT2копия();
	this.instance.parent = this;
	this.instance.setTransform(-120,-127.5);

	this.instance_1 = new lib.Эллипс1468копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-127.5,240,255);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SHIRT();
	this.instance.parent = this;
	this.instance.setTransform(-120,-127.5);

	this.instance_1 = new lib.Эллипс1468копия2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-127.5,240,255);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.SHIRT();
	this.instance.parent = this;
	this.instance.setTransform(-120,-127.5);

	this.instance_1 = new lib.Эллипс1468копия2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-127.5,240,255);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BusinesscardMockupvol1511();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-125.5);

	this.instance_1 = new lib.Эллипс1468();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-125.5,275,251);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BusinesscardMockupvol1511();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-125.5);

	this.instance_1 = new lib.Эллипс1468();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-125.5,275,251);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BusinesscardMockupvol1511_1();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-125.5);

	this.instance_1 = new lib.Эллипс1468_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-125.5,275,251);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Сomposition1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-120);

	this.instance_1 = new lib.Эллипс1468_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-120,278,240);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Сomposition1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-120);

	this.instance_1 = new lib.Эллипс1468_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-120,278,240);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Сomposition1_1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-120);

	this.instance_1 = new lib.Эллипс1468_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-120,278,240);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Сomposition1_1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-120);

	this.instance_1 = new lib.Эллипс1468_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-120,278,240);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w1_d();
	this.instance.parent = this;
	this.instance.setTransform(-170,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w1_d();
	this.instance.parent = this;
	this.instance.setTransform(-170,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-170,-123);

	this.instance_1 = new lib.Эллипс1468копия_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121,-127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-170,-123);

	this.instance_1 = new lib.Эллипс1468копия_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121,-127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-127,340,254);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Icons();
	this.instance.parent = this;
	this.instance.setTransform(-176,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-131.5,352,263);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Icons();
	this.instance.parent = this;
	this.instance.setTransform(-176,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-131.5,352,263);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-131,261,262);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clock();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-109,211,218);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clock();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-109,211,218);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.design();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.5,-144.5,289,289);


(lib.works = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5
	this.instance = new lib.Анимация27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169.7,111.3);

	this.instance_1 = new lib.Анимация26("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(169,111.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).to({_off:true},1).wait(810).to({_off:false,x:169,y:111.5,alpha:1},29).wait(31).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(840).to({_off:false},0).to({_off:true,alpha:1},29).wait(32));

	// 5.psd
	this.instance_2 = new lib.Анимация25("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(167,113.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(720).to({_off:false},0).to({alpha:1},29).wait(91).to({startPosition:0},0).to({alpha:0},29).to({_off:true},1).wait(31));

	// 4
	this.instance_3 = new lib.Анимация23("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,117.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация24("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(166,117.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(660).to({_off:false},0).to({_off:true,alpha:1},30).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(660).to({_off:false},30).wait(30).to({startPosition:0},0).to({alpha:0},29).to({_off:true},1).wait(151));

	// 4.psd
	this.instance_5 = new lib.Анимация21("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(166,115.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация22("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(166,115.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(540).to({_off:false},0).to({_off:true,alpha:1},30).wait(331));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(540).to({_off:false},30).wait(90).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(210));

	// 2
	this.instance_7 = new lib.Анимация19("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.5,111.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация20("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(153.5,111.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(480).to({_off:false},0).to({_off:true,alpha:1},30).wait(391));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(480).to({_off:false},30).wait(30).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(330));

	// 2.psd
	this.instance_9 = new lib.Анимация17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(154.5,111.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360).to({_off:false},0).to({alpha:1},30).wait(90).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(390));

	// 3
	this.instance_10 = new lib.Анимация15("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(175,117);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация16("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(175,117);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(300).to({_off:false},0).to({_off:true,alpha:1},30).wait(571));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(300).to({_off:false},30).wait(30).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(510));

	// 3.psd
	this.instance_12 = new lib.Анимация13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(175,117);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация14("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(175,117);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).to({_off:true,alpha:1},30).wait(691));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},30).wait(90).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(570));

	// 1.psd
	this.instance_14 = new lib.Анимация9("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(170,128);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация10("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(170,128);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).to({_off:true,alpha:1},30).wait(752));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(119).to({_off:false},30).wait(31).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(690));

	// 1
	this.instance_16 = new lib.Анимация28("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(170,127);
	this.instance_16.alpha = 0;

	this.instance_17 = new lib.Анимация29("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(170,127);

	this.instance_18 = new lib.w1_d();
	this.instance_18.parent = this;

	this.instance_19 = new lib.Анимация11("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(170,127);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация12("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(170,127);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},29).to({state:[{t:this.instance_18}]},20).to({state:[{t:this.instance_19}]},70).to({state:[{t:this.instance_20}]},30).to({state:[]},1).wait(751));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,alpha:1},29).wait(872));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(119).to({_off:false},0).to({_off:true,alpha:0},30).wait(752));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.2,340,293);


// stage content:
(lib.Froyo_animation_main_v4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("AWESOME DESIGN FOR\n \n\n\nHOURS", "bold 24px 'MagistralC'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 500;
	this.text.parent = this;
	this.text.setTransform(960.1,9.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(181));

	// 00:00
	this.text_1 = new cjs.Text("00:00", "bold 72px 'MagistralC'", "#FFFFFF");
	this.text_1.lineHeight = 84;
	this.text_1.lineWidth = 242;
	this.text_1.parent = this;
	this.text_1.setTransform(855.6,31.4);

	this.instance = new lib.time();
	this.instance.parent = this;
	this.instance.setTransform(954,74.5,1,1,0,0,0,98,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{x:855.6,y:31.4}}]}).to({state:[{t:this.instance}]},49).to({state:[{t:this.text_1,p:{x:855.5,y:31.1}}]},100).wait(32));

	// work
	this.instance_1 = new lib.works();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1581,296,1,1,0,0,0,170,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181));

	// stat
	this.instance_2 = new lib.stat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(544,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181));

	// clock
	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(954.5,307);

	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(954.5,307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},49).to({state:[{t:this.instance_4}]},100).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({regX:0.1,regY:0.1,rotation:-2.2,x:954.6,y:307.1},0).to({_off:true,regX:0,regY:0,rotation:360,x:954.5,y:307},100).wait(32));

	// money
	this.instance_5 = new lib.money();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1067,148);

	this.instance_6 = new lib.Анимация5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1197.5,279);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},87).to({state:[{t:this.instance_6}]},62).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).to({rotation:360},62).wait(32));

	// design
	this.instance_7 = new lib.Анимация1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(699.1,263.8,1,1,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:698.1,y:265.1},0).to({rotation:356.2,x:699.7,y:263.6},49).to({rotation:716.2},1).to({rotation:1076.2},50).wait(32));

	// Icons
	this.instance_8 = new lib.Анимация7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-188,260.5);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Анимация8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(748.6,260.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:51},12).to({x:230.2,alpha:1},9).to({x:369.5},7).to({_off:true,x:748.6,alpha:0},21).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},21).to({startPosition:0},100).wait(32));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#54BDED").ss(1,1,1).p("EAAAgshMAAABZD");
	this.shape.setTransform(2077.8,266.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(596,195.1,2442.8,572.1);
// library properties:
lib.properties = {
	width: 1920,
	height: 430,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/Froyo_animation_main_v4_atlas_.png?1497973975607", id:"Froyo_animation_main_v4_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;