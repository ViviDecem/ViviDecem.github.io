(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"未燈籠_atlas_1", frames: [[519,0,127,354],[0,0,517,494]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["未燈籠_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["未燈籠_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.3222,0.3222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈繩, new cjs.Rectangle(0,0,40.9,114.1), null);


(lib.燈本 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.3222,0.3222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本, new cjs.Rectangle(0,0,166.6,159.2), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D70051").s().p("AiRO8IABguQgDAZgDAVIgQgBQgChTAXiDIAXhzIgLBmQAAAagEBCQAVjRARh+QBRniApjwQBKmdBGkyQgHAkgMBNQgKBFgGAcIgwDVQgbB5gRBbQgrDjg1FwQgpEagfExQgDAegBBCg");
	this.shape.setTransform(16.6627,95.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,33.4,191.4), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(78.95,-287.5,1,1,0,0,0,33.4,0);

	this.ikNode_2 = new lib.燈本();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(41,-98.35,1,1,0,0,0,83.3,0);

	this.ikNode_4 = new lib.燈繩();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(41,60.9,1,1,0,0,0,20.8,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:41,y:60.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0,x:41,y:-98.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,y:-287.5,x:78.95,regX:33.4,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.0656,x:37.3,y:60.3,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0.4135,x:38.55,y:-98.8,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:0.772,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1311,x:33.6,y:59.75,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0.8271,x:36,y:-99.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:1.5441,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1967,x:29.9,y:59.1,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:1.2416,x:33.5,y:-99.95,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:2.3166,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2623,x:26.25,y:58.5,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:1.6552,x:30.95,y:-100.6,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:3.0886,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3279,x:22.6,y:57.75,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:2.069,x:28.45,y:-101.25,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:3.8611,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3934,x:19.05,y:57.05,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:2.4828,x:25.9,y:-101.95,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:4.6335,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.459,x:15.4,y:56.25,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:2.8968,x:23.45,y:-102.7,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:5.4058,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5246,x:11.75,y:55.45,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:3.311,x:20.95,y:-103.45,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:6.1782,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5901,x:8.1,y:54.55,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:3.7244,x:18.45,y:-104.25,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:6.9509,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6557,x:4.5,y:53.65,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.1389,x:16.05,y:-105.05,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:7.7231,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7213,x:0.9,y:52.65,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.5527,x:13.6,y:-105.95,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:8.4958,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7869,x:-2.65,y:51.7,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.9669,x:11.15,y:-106.85,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:9.2674,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8524,x:-6.25,y:50.65,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:5.3803,x:8.75,y:-107.75,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:10.0398,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.918,x:-9.8,y:49.6,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:5.794,x:6.2,y:-108.7,regX:83.2,regY:0}},{t:this.ikNode_1,p:{rotation:10.8124,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9836,x:-13.35,y:48.45,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:6.2081,x:3.9,y:-109.7,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:11.5851,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0492,x:-16.85,y:47.3,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:6.6216,x:1.55,y:-110.75,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:12.3573,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1148,x:-20.35,y:46.1,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:7.0363,x:-0.85,y:-111.8,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:13.1299,y:-287.35,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1812,x:-23.85,y:44.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:7.4497,x:-3.2,y:-112.85,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:13.9022,y:-287.4,x:78.8,regX:33.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2468,x:-27.35,y:43.6,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:7.8634,x:-5.55,y:-114,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:14.6745,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3124,x:-30.8,y:42.3,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:8.2775,x:-7.85,y:-115.15,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:15.4469,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.378,x:-34.25,y:40.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:8.6912,x:-10.15,y:-116.3,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:16.2193,y:-287.4,x:78.8,regX:33.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4436,x:-37.6,y:39.55,regX:20.9,regY:2.8}},{t:this.ikNode_2,p:{rotation:9.1053,x:-12.45,y:-117.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:16.9911,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5092,x:-41,y:38.1,regX:20.9,regY:2.8}},{t:this.ikNode_2,p:{rotation:9.5191,x:-14.75,y:-118.75,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:17.7634,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5748,x:-44.55,y:36.6,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:9.9333,x:-17,y:-120.1,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:18.5361,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6403,x:-47.9,y:35.1,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:10.3472,x:-19.25,y:-121.4,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:19.3081,y:-287.25,x:78.85,regX:33.4,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.706,x:-51.25,y:33.55,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:10.7607,x:-21.45,y:-122.7,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:20.0807,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7716,x:-54.6,y:31.95,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:11.1748,x:-23.7,y:-124.05,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:20.8531,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8372,x:-57.9,y:30.3,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:11.5887,x:-25.85,y:-125.45,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:21.6251,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.9028,x:-61.2,y:28.7,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:12.003,x:-28,y:-127,regX:83.3,regY:-0.1}},{t:this.ikNode_1,p:{rotation:22.3977,y:-287.3,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8389,x:-58,y:30.25,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:11.603,x:-25.95,y:-125.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:21.6506,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7759,x:-54.8,y:31.85,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:11.2024,x:-23.85,y:-124.15,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:20.9046,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7121,x:-51.6,y:33.35,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:10.8026,x:-21.7,y:-122.85,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:20.1579,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6491,x:-48.35,y:34.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:10.4024,x:-19.55,y:-121.55,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:19.4109,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5853,x:-45.1,y:36.5,regX:20.8,regY:2.9}},{t:this.ikNode_2,p:{rotation:10.0026,x:-17.35,y:-120.3,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:18.6644,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5223,x:-41.65,y:37.8,regX:20.9,regY:2.8}},{t:this.ikNode_2,p:{rotation:9.6025,x:-15.2,y:-119.05,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:17.9177,y:-287.35,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4584,x:-38.4,y:39.2,regX:20.9,regY:2.8}},{t:this.ikNode_2,p:{rotation:9.2019,x:-13,y:-117.85,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:17.1714,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3955,x:-35.15,y:40.55,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:8.8017,x:-10.8,y:-116.65,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:16.4252,y:-287.35,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3316,x:-31.85,y:41.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:8.4021,x:-8.55,y:-115.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:15.6783,y:-287.35,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2687,x:-28.5,y:43.15,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:8.002,x:-6.3,y:-114.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:14.9313,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2048,x:-25.15,y:44.4,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:7.6014,x:-4.05,y:-113.3,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:14.1853,y:-287.45,x:78.95,regX:33.4,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1419,x:-21.75,y:45.6,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:7.202,x:-1.8,y:-112.2,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:13.4381,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.078,x:-18.4,y:46.8,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:6.8012,x:0.5,y:-111.2,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:12.6922,y:-287.35,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0142,x:-15,y:47.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:6.4016,x:2.8,y:-110.15,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:11.945,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9513,x:-11.55,y:49.05,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:6.0015,x:5.1,y:-109.2,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:11.1988,y:-287.25,x:78.9,regX:33.4,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8874,x:-8.15,y:50.05,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:5.6007,x:7.45,y:-108.25,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:10.4521,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8245,x:-4.7,y:51.1,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:5.2012,x:9.75,y:-107.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:9.7054,y:-287.4,x:78.8,regX:33.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7606,x:-1.25,y:52.1,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.801,x:12.1,y:-106.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:8.9584,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6977,x:2.25,y:53.05,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.4011,x:14.5,y:-105.6,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:8.2122,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6339,x:5.7,y:53.95,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:4.0004,x:16.85,y:-104.8,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:7.4655,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5709,x:9.2,y:54.8,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:3.6009,x:19.25,y:-103.95,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:6.7193,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5071,x:12.85,y:55.65,regX:20.9,regY:2.8}},{t:this.ikNode_2,p:{rotation:3.2006,x:21.6,y:-103.25,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:5.9724,y:-287.45,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4433,x:16.25,y:56.45,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:2.8005,x:24.05,y:-102.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:5.2258,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3803,x:19.8,y:57.2,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:2.4006,x:26.45,y:-101.8,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:4.4791,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3165,x:23.2,y:57.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:1.9999,x:28.85,y:-101.15,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:3.7323,y:-287.45,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2535,x:26.75,y:58.6,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:1.6001,x:31.25,y:-100.5,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:2.9861,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1897,x:30.3,y:59.2,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:1.1996,x:33.75,y:-99.9,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:2.2396,y:-287.4,x:78.9,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1268,x:33.85,y:59.8,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0.8,x:36.2,y:-99.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:1.4926,y:-287.45,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0629,x:37.4,y:60.35,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0.3995,x:38.6,y:-98.75,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:0.7458,y:-287.4,x:78.95,regX:33.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:41,y:60.9,regX:20.8,regY:2.8}},{t:this.ikNode_2,p:{rotation:0,x:41.05,y:-98.35,regX:83.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,y:-287.5,x:78.95,regX:33.4,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.6,-300,266.9,472.2);


(lib.大動燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(194.55,-237.6,1.5518,1.1175,0,0,0,33.4,-0.1);

	this.ikNode_2 = new lib.燈本();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(135.6,-26.25,1.5518,1.1175,0,0,0,83.3,-0.1);

	this.ikNode_4 = new lib.燈繩();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(135.8,151.8,1.5518,1.1175,0,0,0,20.9,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:1.5518,scaleY:1.1175,rotation:0,x:135.8,y:151.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.3,scaleX:1.5518,rotation:0,x:135.6,y:-26.25,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5518,rotation:0,x:194.55,scaleY:1.1175,y:-237.6,regY:-0.1,regX:33.4}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.0775,x:144.9,y:154.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-0.561,x:141.65,y:-23.65,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-1.1275,x:193.3,scaleY:1.1175,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.1573,x:154.2,y:157.3,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-1.1244,x:147.65,y:-21.35,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-2.257,x:192.25,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.2371,x:163.6,y:159.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-1.6871,x:153.75,y:-19.25,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-3.3866,x:191.2,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.3169,x:173.05,y:161.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-2.25,x:159.9,y:-17.4,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-4.5167,x:190,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.3975,x:182.55,y:163.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-2.8131,x:166.25,y:-15.8,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-5.6463,x:188.85,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.4773,x:192.15,y:164.9,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-3.3764,x:172.5,y:-14.45,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-6.7765,x:187.75,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.5571,x:201.8,y:165.9,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-3.9402,x:178.9,y:-13.35,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-7.9063,x:186.7,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.6369,x:211.5,y:166.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-4.5026,x:185.3,y:-12.5,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-9.0357,x:185.55,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.7167,x:221.25,y:167.1,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-5.0656,x:191.75,y:-11.85,scaleY:1.1174,regY:0}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-10.1652,x:184.4,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.7973,x:231,y:167.3,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-5.6291,x:198.3,y:-11.65,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-11.2958,x:183.3,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.8771,x:240.85,y:167.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-6.1922,x:204.75,y:-11.55,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-12.4254,x:182.2,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.9561,x:250.6,y:166.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-6.7552,x:211.25,y:-11.75,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-13.555,x:181.05,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.0367,x:260.35,y:165.85,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-7.3181,x:217.75,y:-12.2,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-14.6849,x:179.95,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.1165,x:270.05,y:164.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-7.8817,x:224.3,y:-12.85,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-15.8144,x:178.8,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.1956,x:279.8,y:163.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-8.4443,x:230.7,y:-13.75,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-16.9438,x:177.75,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.2762,x:289.4,y:161.85,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-9.0081,x:237.15,y:-14.95,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-18.074,x:176.55,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.356,x:299.1,y:159.85,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-9.571,x:243.6,y:-16.35,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-19.2039,x:175.5,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-1.4366,x:308.65,y:157.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-10.134,x:249.9,y:-18.1,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-20.334,x:174.35,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.5157,x:318.15,y:154.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-10.698,x:256.15,y:-19.95,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-21.464,x:173.3,scaleY:1.1174,y:-237.55,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.5955,x:327.6,y:151.85,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-11.2607,x:262.35,y:-22.1,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-22.5943,x:172.15,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.6761,x:336.9,y:148.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-11.8235,x:268.55,y:-24.5,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-23.7234,x:171,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.7552,x:346.15,y:145.2,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-12.387,x:274.6,y:-27.2,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-24.8538,x:170.05,scaleY:1.1174,y:-237.75,regY:-0.1,regX:33.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.835,x:355.3,y:141.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-12.95,x:280.5,y:-30,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-25.9832,x:168.8,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.9157,x:364.35,y:137.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-13.5134,x:286.45,y:-33,scaleY:1.1174,regY:0}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-27.113,x:167.7,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.9955,x:373.2,y:133,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-14.0765,x:292.15,y:-36.4,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-28.2424,x:166.55,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.0754,x:381.95,y:128.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-14.6405,x:297.8,y:-39.9,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-29.3716,x:165.45,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-2.1552,x:390.65,y:123.6,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-15.2028,x:303.35,y:-43.6,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-30.5016,x:164.35,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.2351,x:399.1,y:118.45,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-15.7663,x:308.8,y:-47.5,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-31.6323,x:163.25,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.3158,x:407.4,y:113,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-16.3292,x:314,y:-51.65,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-32.7613,x:162.15,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.2374,x:397.35,y:118.3,regY:3,regX:21}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-15.7842,x:306.75,y:-47.65,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-31.6694,x:161,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-2.1607,x:386.8,y:123.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-15.2396,x:299.4,y:-43.8,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-30.5761,x:159.9,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.0832,x:376.3,y:127.85,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-14.6963,x:291.95,y:-40.3,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-29.4841,x:158.8,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-2.0057,x:365.65,y:132.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-14.1516,x:284.25,y:-36.85,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-28.3932,x:157.7,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.929,x:354.95,y:136.6,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-13.6076,x:276.55,y:-33.65,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-27.3006,x:156.65,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.8523,x:344.05,y:140.6,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-13.0631,x:268.7,y:-30.6,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-26.2089,x:155.55,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.774,x:333.1,y:144.3,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-12.5178,x:260.85,y:-27.9,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-25.1173,x:154.6,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.6972,x:322.05,y:147.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-11.974,x:252.85,y:-25.25,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-24.0246,x:153.4,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.6198,x:310.9,y:151,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-11.4292,x:244.75,y:-22.9,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-22.9327,x:152.4,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.5423,x:299.7,y:153.9,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-10.8843,x:236.65,y:-20.6,scaleY:1.1174,regY:0}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-21.8402,x:151.1,scaleY:1.1174,y:-237.7,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-1.4648,x:288.35,y:156.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-10.3407,x:228.45,y:-18.8,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-20.7482,x:150.05,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.3881,x:276.95,y:158.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-9.7964,x:220.15,y:-17.05,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-19.6556,x:149,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.3106,x:265.45,y:160.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-9.2514,x:211.9,y:-15.6,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-18.5641,x:147.9,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.2339,x:253.95,y:162.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-8.7071,x:203.4,y:-14.4,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-17.4715,x:146.8,scaleY:1.1174,y:-237.65,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.1564,x:242.4,y:164.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-8.1639,x:195.05,y:-13.35,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-16.3795,x:145.7,scaleY:1.1174,y:-237.55,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.0782,x:230.85,y:165.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-7.6188,x:186.6,y:-12.55,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-15.288,x:144.6,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-1.0015,x:219.25,y:166.35,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-7.0745,x:178.2,y:-12,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-14.1953,x:143.55,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.9248,x:207.6,y:167,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-6.53,x:169.7,y:-11.7,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-13.1032,x:142.45,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.8474,x:196,y:167.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-5.9853,x:161.3,y:-11.6,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-12.0109,x:141.4,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.7699,x:184.35,y:167.2,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-5.4419,x:152.8,y:-11.75,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-10.9185,x:140.35,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-0.6932,x:172.8,y:167,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-4.8968,x:144.45,y:-12.1,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-9.8274,x:139.25,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1175,rotation:-0.615,x:161.2,y:166.45,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-4.3528,x:136.05,y:-12.75,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-8.7348,x:138.2,scaleY:1.1174,y:-237.5,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.5383,x:149.7,y:165.6,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-3.8084,x:127.85,y:-13.6,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-7.6416,x:137.05,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.4616,x:138.2,y:164.45,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-3.2635,x:119.55,y:-14.7,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-6.5504,x:136,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.3834,x:126.75,y:163.05,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-2.7198,x:111.3,y:-16.05,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-5.4585,x:134.9,scaleY:1.1174,y:-237.55,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.3067,x:115.4,y:161.45,regY:3,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-2.1748,x:103.1,y:-17.6,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-4.3661,x:133.8,scaleY:1.1174,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.2292,x:104.1,y:159.35,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-1.6307,x:94.95,y:-19.45,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-3.2746,x:132.7,scaleY:1.1174,y:-237.5,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.1518,x:92.9,y:157.1,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-1.0868,x:86.95,y:-21.45,scaleY:1.1175,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-2.1818,x:131.6,scaleY:1.1175,y:-237.4,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:-0.0751,x:81.8,y:154.55,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:-0.5422,x:78.95,y:-23.6,scaleY:1.1174,regY:0}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:-1.0899,x:130.5,scaleY:1.1175,y:-237.6,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:1.5517,scaleY:1.1174,rotation:0,x:70.8,y:151.75,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,scaleX:1.5517,rotation:0,x:71,y:-26.2,scaleY:1.1174,regY:-0.1}},{t:this.ikNode_1,p:{scaleX:1.5517,rotation:0,x:129.45,scaleY:1.1174,y:-237.55,regY:-0.1,regX:33.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-237.5,546.3,529.5);


(lib.小動燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(50.45,-110.35,0.4805,0.5209,0,22.0803,25.3656,33.5,0.1);

	this.ikNode_2 = new lib.燈本();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-3,-26.75,0.4805,0.5209,0,41.2568,44.5458,83.5,0.2);

	this.ikNode_4 = new lib.燈繩();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-57.6,35.45,0.4805,0.5209,0,41.2568,44.5458,20.9,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:41.2568,skewY:44.5458,x:-57.6,y:35.45,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4805,skewX:41.2568,skewY:44.5458,x:-3,y:-26.75}},{t:this.ikNode_1,p:{scaleX:0.4805,skewX:22.0803,skewY:25.3656,x:50.45,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:35.8628,skewY:39.1518,x:-43,y:45.1,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:35.8628,skewY:39.1518,x:5.45,y:-21.95}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:16.4144,skewY:19.6987,x:50.4,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:30.4684,skewY:33.7592,x:-27.6,y:53.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:30.4707,skewY:33.7602,x:14.4,y:-17.95}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:10.7497,skewY:14.0318,x:50.4,y:-110.4,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:25.0771,skewY:28.3663,x:-11.4,y:60.1,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:25.0771,skewY:28.3663,x:23.7,y:-14.8}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:5.0806,skewY:8.364,x:50.35,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:19.684,skewY:22.9721,x:5.35,y:65.25,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:19.684,skewY:22.9721,x:33.3,y:-12.65}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-0.5808,skewY:2.696,x:50.4,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:14.2923,skewY:17.5786,x:22.5,y:68.8,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4804,skewX:14.2923,skewY:17.5786,x:42.9,y:-11.4}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-6.246,skewY:-2.9602,x:50.3,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:8.8961,skewY:12.1858,x:39.85,y:70.6,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.2,scaleX:0.4804,skewX:8.8961,skewY:12.1858,x:52.7,y:-11.15}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-11.914,skewY:-8.627,x:50.35,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:3.5035,skewY:6.7925,x:57.4,y:70.75,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4805,skewX:3.5035,skewY:6.7925,x:62.5,y:-11.85}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-17.5793,skewY:-14.2944,x:50.3,y:-110.35,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-1.8869,skewY:1.3995,x:74.9,y:69.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.2,scaleX:0.4805,skewX:-1.8869,skewY:1.3995,x:72.1,y:-13.55}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-23.2469,skewY:-19.9635,x:50.3,y:-110.35,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-7.2753,skewY:-3.9884,x:92.15,y:65.95,regY:2.8,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4805,skewX:-7.2753,skewY:-3.9884,x:81.5,y:-16.15}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-28.9152,skewY:-25.6275,x:50.3,y:-110.25,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-12.6708,skewY:-9.3807,x:109,y:61.05,regY:2.9,regX:21.1}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4805,skewX:-12.6708,skewY:-9.3807,x:90.7,y:-19.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-34.5788,skewY:-31.2955,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-18.0639,skewY:-14.7738,x:125.15,y:54.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-18.0639,skewY:-14.7738,x:99.45,y:-24.1}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-40.2483,skewY:-36.9623,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-23.4551,skewY:-20.169,x:140.75,y:46.6,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-23.4551,skewY:-20.169,x:107.65,y:-29.35}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-45.9151,skewY:-42.6291,x:50.35,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-28.849,skewY:-25.5608,x:155.45,y:37.05,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-28.849,skewY:-25.5608,x:115.5,y:-35.45}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-51.5827,skewY:-48.2972,x:50.3,y:-110.25,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-34.2436,skewY:-30.9525,x:169.2,y:26.15,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-34.2422,skewY:-30.9535,x:122.5,y:-42.2}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-57.248,skewY:-53.9629,x:50.25,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-39.636,skewY:-36.3458,x:181.75,y:14.05,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-39.636,skewY:-36.3458,x:128.85,y:-49.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-62.9147,skewY:-59.6308,x:50.3,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-45.0285,skewY:-41.7401,x:193.1,y:0.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.2,scaleX:0.4804,skewX:-45.0309,skewY:-41.7401,x:134.45,y:-57.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-68.5807,skewY:-65.2973,x:50.35,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-50.4211,skewY:-47.134,x:203.15,y:-13.55,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-50.4211,skewY:-47.134,x:139.2,y:-66.25}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-74.2464,skewY:-70.9648,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-55.8146,skewY:-52.5259,x:211.7,y:-28.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-55.8146,skewY:-52.5259,x:143.15,y:-75.3}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-79.9143,skewY:-76.6298,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-61.2095,skewY:-57.9186,x:218.8,y:-44.8,regY:2.8,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-61.2095,skewY:-57.9186,x:146.1,y:-84.6}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-85.5795,skewY:-82.2958,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-66.602,skewY:-63.3145,x:224.25,y:-61.3,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-66.602,skewY:-63.3145,x:148.15,y:-94.25}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-91.2455,skewY:-87.9633,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-71.9955,skewY:-68.7045,x:228.15,y:-78.45,regY:2.8,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-71.9971,skewY:-68.7062,x:149.25,y:-104.05}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-96.9102,skewY:-93.6237,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-77.3874,skewY:-74.0996,x:230.35,y:-95.75,regY:2.8,regX:21.1}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4804,skewX:-77.3874,skewY:-74.0996,x:149.45,y:-113.9}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-102.5734,skewY:-99.2885,x:50.25,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-82.7819,skewY:-79.4924,x:230.9,y:-113.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-82.7819,skewY:-79.4924,x:148.55,y:-123.6}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-108.2428,skewY:-104.9565,x:50.2,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-88.1752,skewY:-84.8871,x:229.75,y:-130.65,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4805,skewX:-88.1752,skewY:-84.8871,x:146.75,y:-133.15}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-113.9083,skewY:-110.6233,x:50.3,y:-110.2,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-93.5639,skewY:-90.273,x:226.8,y:-147.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4805,skewX:-93.5639,skewY:-90.273,x:144,y:-142.6}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-119.5773,skewY:-116.29,x:50.25,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-98.954,skewY:-95.665,x:222.25,y:-164.7,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.3,regY:0.2,scaleX:0.4804,skewX:-98.954,skewY:-95.665,x:140.4,y:-151.6}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-125.2432,skewY:-121.9581,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-104.3505,skewY:-101.0598,x:216.15,y:-181,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.3,regY:0.1,scaleX:0.4804,skewX:-104.3505,skewY:-101.0598,x:135.85,y:-160.3}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-130.9077,skewY:-127.6244,x:50.25,y:-110.3,regX:33.5,regY:0.2,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-109.7423,skewY:-106.4538,x:208.5,y:-196.7,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-109.7423,skewY:-106.4538,x:130.45,y:-168.6}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-136.5775,skewY:-133.2909,x:50.3,y:-110.3,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4805,skewX:-115.1357,skewY:-111.847,x:199.35,y:-211.6,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-115.1349,skewY:-111.846,x:124.25,y:-176.3}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-142.2415,skewY:-138.9587,x:50.3,y:-110.3,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-110.7619,skewY:-107.4693,x:207.65,y:-198.65,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-110.7603,skewY:-107.4699,x:130.05,y:-169.15}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-136.9646,skewY:-133.6784,x:50.25,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-106.3841,skewY:-103.0939,x:214.7,y:-185,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-106.3841,skewY:-103.0957,x:135.15,y:-161.55}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-131.6832,skewY:-128.3998,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-102.0114,skewY:-98.721,x:220.7,y:-170.8,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-102.0114,skewY:-98.721,x:139.5,y:-153.5}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-126.407,skewY:-123.1217,x:50.25,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-97.6359,skewY:-94.3441,x:225.35,y:-156.25,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4805,skewX:-97.6359,skewY:-94.3478,x:143.1,y:-145.1}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-121.1278,skewY:-117.8429,x:50.25,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-93.2613,skewY:-89.9782,x:228.75,y:-141.25,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-93.2646,skewY:-89.9782,x:145.9,y:-136.4}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-115.8482,skewY:-112.5635,x:50.25,y:-110.2,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-88.8922,skewY:-85.6028,x:230.85,y:-125.95,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-88.8922,skewY:-85.6028,x:147.9,y:-127.55}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-110.5724,skewY:-107.2845,x:50.3,y:-110.2,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-84.5182,skewY:-81.2291,x:231.7,y:-110.5,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-84.5184,skewY:-81.2293,x:149.1,y:-118.5}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-105.2922,skewY:-102.0069,x:50.2,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-80.1425,skewY:-76.854,x:231.25,y:-95.25,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-80.1425,skewY:-76.854,x:149.35,y:-109.35}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-100.0142,skewY:-96.7284,x:50.25,y:-110.2,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-75.7684,skewY:-72.4806,x:229.45,y:-79.95,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-75.7684,skewY:-72.4806,x:148.85,y:-100.3}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-94.7353,skewY:-91.4487,x:50.25,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-71.3931,skewY:-68.105,x:226.2,y:-64.85,regY:2.8,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-71.3931,skewY:-68.105,x:147.55,y:-91.25}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-89.4629,skewY:-86.1776,x:50.25,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-67.0163,skewY:-63.7287,x:221.8,y:-50,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-67.0163,skewY:-63.7287,x:145.45,y:-82.4}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-84.1825,skewY:-80.8997,x:50.25,y:-110.3,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-62.64,skewY:-59.3543,x:216.15,y:-35.6,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.3,regY:0.1,scaleX:0.4804,skewX:-62.6408,skewY:-59.3543,x:142.4,y:-73.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-78.905,skewY:-75.623,x:50.3,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-58.2674,skewY:-54.9789,x:209.3,y:-21.75,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-58.2674,skewY:-54.9789,x:138.7,y:-65.35}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-73.6276,skewY:-70.3439,x:50.25,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-53.8932,skewY:-50.6024,x:201.3,y:-8.7,regY:2.8,regX:21.1}},{t:this.ikNode_2,p:{regX:83.4,regY:0.2,scaleX:0.4804,skewX:-53.8932,skewY:-50.6024,x:134.25,y:-57.4}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-68.3457,skewY:-65.0645,x:50.25,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-49.5194,skewY:-46.2289,x:192.15,y:3.8,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-49.5194,skewY:-46.2289,x:128.95,y:-49.95}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-63.0694,skewY:-59.7865,x:50.3,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-45.1436,skewY:-41.8549,x:181.95,y:15.4,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-45.1436,skewY:-41.8549,x:123.15,y:-42.95}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-57.7905,skewY:-54.5078,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5208}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-40.7686,skewY:-37.4792,x:170.8,y:26.2,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-40.7686,skewY:-37.4792,x:116.65,y:-36.55}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-52.5121,skewY:-49.2284,x:50.3,y:-110.25,regX:33.4,regY:0.1,scaleY:0.5208}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-36.3939,skewY:-33.1051,x:158.85,y:35.9,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-36.3939,skewY:-33.1051,x:109.5,y:-30.8}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-47.2343,skewY:-43.9486,x:50.3,y:-110.3,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-32.0191,skewY:-28.7296,x:146.1,y:44.6,regY:2.9,regX:21.1}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-32.0191,skewY:-28.7296,x:102.05,y:-25.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-41.953,skewY:-38.6703,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-27.6415,skewY:-24.3542,x:132.55,y:52.05,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-27.6415,skewY:-24.3542,x:93.9,y:-21.25}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-36.6759,skewY:-33.3913,x:50.3,y:-110.3,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-23.2687,skewY:-19.9774,x:118.45,y:58.4,regY:2.8,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-23.2687,skewY:-19.9774,x:85.6,y:-17.65}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-31.3967,skewY:-28.1123,x:50.3,y:-110.35,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-18.8962,skewY:-15.6054,x:103.85,y:63.65,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:-18.8962,skewY:-15.6054,x:76.9,y:-14.8}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-26.1177,skewY:-22.8335,x:50.2,y:-110.4,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-14.5191,skewY:-11.2286,x:88.9,y:67.5,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.2,scaleX:0.4804,skewX:-14.5191,skewY:-11.2286,x:68.05,y:-12.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-20.838,skewY:-17.5539,x:50.25,y:-110.35,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-10.1436,skewY:-6.853,x:73.6,y:70,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-10.1436,skewY:-6.853,x:58.95,y:-11.65}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-15.5622,skewY:-12.275,x:50.25,y:-110.35,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-5.7702,skewY:-2.4792,x:58.25,y:71.25,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-5.7702,skewY:-2.4792,x:49.85,y:-11.3}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-10.2819,skewY:-6.9977,x:50.35,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:-1.3982,skewY:1.8874,x:42.8,y:71.25,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.4,regY:0.1,scaleX:0.4804,skewX:-1.3982,skewY:1.8874,x:40.7,y:-11.7}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:-5.0031,skewY:-1.7199,x:50.3,y:-110.4,regX:33.4,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:2.9739,skewY:6.2632,x:27.4,y:69.85,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.1,scaleX:0.4804,skewX:2.9756,skewY:6.2632,x:31.85,y:-12.95}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:0.2686,skewY:3.5526,x:50.3,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:7.3499,skewY:10.6372,x:12.2,y:67.05,regY:2.8,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4804,skewX:7.3499,skewY:10.639,x:23,y:-15.1}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:5.5476,skewY:8.8314,x:50.35,y:-110.45,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:11.7234,skewY:15.013,x:-2.6,y:63.15,regY:2.9,regX:20.9}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4804,skewX:11.7234,skewY:15.013,x:14.35,y:-18}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:10.8267,skewY:14.1086,x:50.35,y:-110.4,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.4804,skewX:16.1006,skewY:19.3862,x:-17,y:57.9,regY:2.9,regX:21}},{t:this.ikNode_2,p:{regX:83.5,regY:0.2,scaleX:0.4804,skewX:16.1006,skewY:19.3862,x:5.95,y:-21.75}},{t:this.ikNode_1,p:{scaleX:0.4804,skewX:16.1031,skewY:19.3897,x:50.4,y:-110.35,regX:33.5,regY:0.1,scaleY:0.5209}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-248.5,393.8,378.4);


// stage content:
(lib.未燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AouDTIAAmmIRcAAIAAGmg");
	var mask_graphics_1 = new cjs.Graphics().p("AqqDTIAAmmIVVAAIAAGmg");
	var mask_graphics_2 = new cjs.Graphics().p("AsmDTIAAmmIZNAAIAAGmg");
	var mask_graphics_3 = new cjs.Graphics().p("AujDTIAAmmIdHAAIAAGmg");
	var mask_graphics_4 = new cjs.Graphics().p("AwgDTIAAmmMAhBAAAIAAGmg");
	var mask_graphics_5 = new cjs.Graphics().p("AycDTIAAmmMAk5AAAIAAGmg");
	var mask_graphics_6 = new cjs.Graphics().p("A0ZDTIAAmmMAozAAAIAAGmg");
	var mask_graphics_7 = new cjs.Graphics().p("A2VDTIAAmmMAssAAAIAAGmg");
	var mask_graphics_8 = new cjs.Graphics().p("A4SDTIAAmmMAwlAAAIAAGmg");
	var mask_graphics_9 = new cjs.Graphics().p("A6PDTIAAmmMA0fAAAIAAGmg");
	var mask_graphics_70 = new cjs.Graphics().p("AouDTIAAmmIRcAAIAAGmg");
	var mask_graphics_71 = new cjs.Graphics().p("AqqDTIAAmmIVVAAIAAGmg");
	var mask_graphics_72 = new cjs.Graphics().p("AsmDTIAAmmIZNAAIAAGmg");
	var mask_graphics_73 = new cjs.Graphics().p("AujDTIAAmmIdHAAIAAGmg");
	var mask_graphics_74 = new cjs.Graphics().p("AwgDTIAAmmMAhBAAAIAAGmg");
	var mask_graphics_75 = new cjs.Graphics().p("AycDTIAAmmMAk5AAAIAAGmg");
	var mask_graphics_76 = new cjs.Graphics().p("A0ZDTIAAmmMAozAAAIAAGmg");
	var mask_graphics_77 = new cjs.Graphics().p("A2VDTIAAmmMAssAAAIAAGmg");
	var mask_graphics_78 = new cjs.Graphics().p("A4SDTIAAmmMAwlAAAIAAGmg");
	var mask_graphics_79 = new cjs.Graphics().p("A6PDTIAAmmMA0fAAAIAAGmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_1,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_2,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_3,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_4,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_5,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_6,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_7,x:288.85,y:345.8}).wait(1).to({graphics:mask_graphics_8,x:288.85,y:345.8}).wait(1).to({graphics:mask_graphics_9,x:288.85,y:345.8}).wait(61).to({graphics:mask_graphics_70,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_71,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_72,x:288.8,y:345.8}).wait(1).to({graphics:mask_graphics_73,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_74,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_75,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_76,x:288.825,y:345.8}).wait(1).to({graphics:mask_graphics_77,x:288.85,y:345.8}).wait(1).to({graphics:mask_graphics_78,x:288.85,y:345.8}).wait(1).to({graphics:mask_graphics_79,x:288.85,y:345.8}).wait(61));

	// 圖層_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("AlgCVQg4gJiAggQAZgQCmg8QCWg1AtgrIAggKIAAAGQAKgCAGgJQBYgZBngJQBTgIAlgSQAegHBBgHQBQgHA5ADQCmALh7BkQgyAohKAdQhQAdgkARImOBAIhnAAQhkABAPADQAdAGBJACQBTACADgOIgEAVQgkAFgoAAQg4AAg+gKg");
	this.shape.setTransform(398.3047,345.2426);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	// 遮 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Ao6CuIAAlbIR1AAIAAFbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:279.3,y:378.575}).wait(1).to({graphics:mask_1_graphics_10,x:290.5,y:378.675}).wait(1).to({graphics:mask_1_graphics_11,x:301.75,y:378.725}).wait(1).to({graphics:mask_1_graphics_12,x:312.95,y:378.825}).wait(1).to({graphics:mask_1_graphics_13,x:324.15,y:378.875}).wait(1).to({graphics:mask_1_graphics_14,x:335.4,y:378.975}).wait(1).to({graphics:mask_1_graphics_15,x:346.6,y:379.075}).wait(1).to({graphics:mask_1_graphics_16,x:357.8,y:379.125}).wait(1).to({graphics:mask_1_graphics_17,x:369,y:379.225}).wait(1).to({graphics:mask_1_graphics_18,x:380.25,y:379.275}).wait(1).to({graphics:mask_1_graphics_19,x:391.45,y:379.375}).wait(51).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_79,x:279.3,y:378.575}).wait(1).to({graphics:mask_1_graphics_80,x:290.5,y:378.675}).wait(1).to({graphics:mask_1_graphics_81,x:301.75,y:378.725}).wait(1).to({graphics:mask_1_graphics_82,x:312.95,y:378.825}).wait(1).to({graphics:mask_1_graphics_83,x:324.15,y:378.875}).wait(1).to({graphics:mask_1_graphics_84,x:335.4,y:378.975}).wait(1).to({graphics:mask_1_graphics_85,x:346.6,y:379.075}).wait(1).to({graphics:mask_1_graphics_86,x:357.8,y:379.125}).wait(1).to({graphics:mask_1_graphics_87,x:369,y:379.225}).wait(1).to({graphics:mask_1_graphics_88,x:380.25,y:379.275}).wait(1).to({graphics:mask_1_graphics_89,x:391.45,y:379.375}).wait(51));

	// 圖層_12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F1F").s().p("AkoBxQibgQAGgqQBgA+B3gHQhggPgxgSQhNgdgng3QA4gDCKACQB6gGA5gpIA5gBQBzgBA/gJQBegOAFgfQAygMBBAEQBEADArATQAyAVgBAjQgCAphIA0QghAYglALQgdAJgnADQgaAAgYACIlbAUIgZAAQhNAAhMgIg");
	this.shape_1.setTransform(388.201,376.6212);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(9).to({_off:false},0).to({_off:true},61).wait(9).to({_off:false},0).wait(61));

	// 遮 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_19 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_24 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_25 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_27 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_89 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_90 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_91 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_92 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_93 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_94 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_95 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_96 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_97 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_98 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");
	var mask_2_graphics_99 = new cjs.Graphics().p("Ay1DaIAAmzMAlrAAAIAAGzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_2_graphics_19,x:173.875,y:411.225}).wait(1).to({graphics:mask_2_graphics_20,x:197.025,y:411.225}).wait(1).to({graphics:mask_2_graphics_21,x:220.175,y:411.275}).wait(1).to({graphics:mask_2_graphics_22,x:243.275,y:411.275}).wait(1).to({graphics:mask_2_graphics_23,x:266.425,y:411.275}).wait(1).to({graphics:mask_2_graphics_24,x:289.575,y:411.325}).wait(1).to({graphics:mask_2_graphics_25,x:312.725,y:411.325}).wait(1).to({graphics:mask_2_graphics_26,x:335.875,y:411.325}).wait(1).to({graphics:mask_2_graphics_27,x:358.975,y:411.325}).wait(1).to({graphics:mask_2_graphics_28,x:382.125,y:411.375}).wait(1).to({graphics:mask_2_graphics_29,x:405.275,y:411.375}).wait(41).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_2_graphics_89,x:173.875,y:411.225}).wait(1).to({graphics:mask_2_graphics_90,x:197.025,y:411.225}).wait(1).to({graphics:mask_2_graphics_91,x:220.175,y:411.275}).wait(1).to({graphics:mask_2_graphics_92,x:243.275,y:411.275}).wait(1).to({graphics:mask_2_graphics_93,x:266.425,y:411.275}).wait(1).to({graphics:mask_2_graphics_94,x:289.575,y:411.325}).wait(1).to({graphics:mask_2_graphics_95,x:312.725,y:411.325}).wait(1).to({graphics:mask_2_graphics_96,x:335.875,y:411.325}).wait(1).to({graphics:mask_2_graphics_97,x:358.975,y:411.325}).wait(1).to({graphics:mask_2_graphics_98,x:382.125,y:411.375}).wait(1).to({graphics:mask_2_graphics_99,x:405.275,y:411.375}).wait(41));

	// 圖層_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332F1F").s().p("Au7DQIgzgUQg7gYARgLQBXBPCXgbQA1gKBLgZIB2goQjOA6hogEQimgHhXiLQApAgA2gHQg4gJA8gQQGzACCniBQgUASCcgkQBCgPBzgeQDYgsDhgNQDugODPAXQIFA3jzCMQhKAqhyACQhWACiKgWQidgahLgKQiDgShSAJIiFAKQhnAIhBANQgLABgJADQgcAHgbALIk3BbQg0ANg6ARQhyAhgaATQhHAPg9AAQgqAAgmgHgAomCAQAqgFAmgUQiRAfBBgGgAOkAWQAkgCAZgNQghAMgcADg");
	this.shape_2.setTransform(409.7982,410.9747);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19).to({_off:false},0).to({_off:true},51).wait(19).to({_off:false},0).wait(51));

	// 遮 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("AjgEuIAApcIHBAAIAAJcg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AjgEvIAApcIHBAAIAAJcg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AjgEuIAApcIHBAAIAAJcg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AjgEuIAApcIHBAAIAAJcg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AjgEvIAApcIHBAAIAAJcg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AjgEuIAApcIHBAAIAAJcg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:402.975,y:250.75}).wait(1).to({graphics:mask_3_graphics_30,x:402.725,y:272.6}).wait(1).to({graphics:mask_3_graphics_31,x:402.475,y:294.4}).wait(39).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_99,x:402.975,y:250.75}).wait(1).to({graphics:mask_3_graphics_100,x:402.725,y:272.6}).wait(1).to({graphics:mask_3_graphics_101,x:402.475,y:294.4}).wait(39));

	// 圖層_10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332F1F").s().p("AifhoIgBgLQgEgGACgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgBhWAwgCQBjgMBQCCQBCBnAgCVIkaAwQgEgygRhsQgQhmgDglIAFCOQAFBoABA7IgJAIQgIk3AFgLg");
	this.shape_3.setTransform(402.6692,302.8281);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(29).to({_off:false},0).wait(2).to({x:401.1192},0).to({_off:true},39).wait(29).to({_off:false,x:402.6692},0).wait(2).to({x:401.1192},0).wait(39));

	// 圖層_21 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_36 = new cjs.Graphics().p("AjBB6QhQgyAAhIQAAhHBQgzQBQgyBxAAQBxAABRAyQBQAzAABHQAABIhQAyQhRAzhxAAQhxAAhQgzg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AkkD4QhEg5AAhRQAAhQBEg4QAzgrBCgLQAXgDAZAAQBgAABDA5QAmAeARAmQgRgmgmgeQhDg5hgAAQgZAAgXADQgLgXAAgbQAAhIBQgzQBRgzBwAAQByAABQAzQBQAzAABIQAABIhQAyQhPAxhvABQAOAgAAAkQAABRhFA5QhDA5hgAAQhhAAhEg5g");
	var mask_4_graphics_38 = new cjs.Graphics().p("AmqFkQhBgvAAhCQAAhCBBguQBCgvBcAAQAeAAAaAFQgSgjAAgpQAAhQBEg5QAzgqBDgLQgLgYAAgbQAAhIBPgzQBQgyByAAQBxAABQAyQBRAzAABIQAABIhRAzQhPAyhvABQgRgnglgfQhEg5hhAAQgXAAgXAEQAXgEAXAAQBhAABEA5QAlAfARAnQAOAfAAAkQAABQhEA5QhEA5hhAAQgbAAgbgFQAHAUAAAVQAABChBAvQhBAuhdAAQhcAAhCgugAhuCDQAsAfAOAoQgOgogsgfQgtggg5gKQA5AKAtAgg");
	var mask_4_graphics_39 = new cjs.Graphics().p("ApYGjQhFgqAAg9QAAg7BFgrQBFgqBhAAQBEAAA1AVIAAgIQAAhDBBguQBCgvBcAAQAeAAAaAFQgSgiAAgpQAAhQBDg5QAzgrBDgLQgLgYAAgbQAAhIBQgyQBQgzByAAQBxAABQAzQBRAyAABIQAABJhRAyQhPAyhvABQgRgmglgfQhEg5hhAAQgYgBgXAEQAXgEAYABQBhAABEA5QAlAfARAmQAOAgAAAkQAABQhEA4QhEA6hhAAQgcAAgbgGQgOgogsgfQgtggg4gKQA4AKAtAgQAsAfAOAoQAHAUAAAWQAABBhBAvQhBAuhcAAQg9AAgxgUIAAgHQAAg7hFgrQgUgNgYgIQAYAIAUANQBFArAAA7IAAAHQgEA4hBAoQhEAqhhAAQhhAAhFgqg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AoNGjQhEgqAAg9QAAgQAFgQQAYAGAagBQBVABA8g9QAbgaAPgfQgPAfgbAaQg8A9hVgBQgaABgYgGQg2gNgqgqQg8g8AAhVQAAhVA8g9QA8g7BWAAQBVAAA8A7QA9A9AABVQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAcAAAbAFQgSgiAAgpQAAhQBEg5QAzgrBCgLQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAkQAABQhFA4QhEA6hgAAQgdAAgagGQgPgogsgfQgsggg5gKQA5AKAsAgQAsAfAPAoQAHAUAAAWQAABBhCAvQhBAuhbAAQg9AAgygUQgDA4hBAoQhFAqhhAAQhhAAhFgqgAGki2QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQAXgEAZABQBgAABEA5g");
	var mask_4_graphics_41 = new cjs.Graphics().p("AoNGjQhEgqAAg9QAAgQAFgQQAYAGAagBQBVABA8g9QAbgaAPgfQgPAfgbAaQg8A9hVgBQgaABgYgGQg2gNgqgqQg8g8AAhVQAAhVA8g9QA8g7BWAAQAiAAAeAJQAXAgAtAaQARALATAIQgTgIgRgLQgtgagXggQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBcA3QBNAuANA9QADAMAAAOQAABNhdA2IgUALIAUgLQBdg2AAhNQAAgOgDgMQAjgSAogHQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQgRgmgmgfQhEg5hgAAQgZgBgXAEQAXgEAZABQBgAABEA5QAmAfARAmQAOAgAAAkQAABQhFA4QhEA6hgAAQgdAAgagGQgPgogsgfQgsggg5gKQA5AKAsAgQAsAfAPAoQAHAUAAAWQAABBhCAvQhBAuhbAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAcAAAbAFQgSghAAgoQhWAsh2gBQhrAAhSgjQAmAzAABEQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AreHZQhEgqAAg9QAAgQAFgQQAYAGAagBQBVABA8g9QAbgaAPgfQgPAfgbAaQg8A9hVgBQgaABgYgGQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQAXAgAtAaQARAKATAIQgTgIgRgKQgtgagXggQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQgLgYAAgbQAAhIBPgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQgRgmgmgfQhEg5hgAAQgZgBgWAEQAWgEAZABQBgAABEA5QAmAfARAmQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgZgGQgPgogsgfQgsggg5gKQA5AKAsAgQAsAfAPAoQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQgSgiAAgoQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgAJXl+Qg9gWAAggQAAghA9gWQA9gXBWAAQBWAAA9AXQA9AWAAAhQAAAgg9AWQg9AXhWAAQhWAAg9gXg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AvKHZQhEgqAAg9QAAgQAGgQQAXAGAagBQBVABA9g9QAagaAPgfQgPAfgaAaQg9A9hVgBQgaABgXgGQg3gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQAXAgAtAaQASAKASAIQgSgIgSgKQgtgagXggQgZgiABgnQgBhOBdg3QBeg3CDABQCEgBBdA3QBOAuANA9QADAMAAAOQAABNheA2IgUAKIAUgKQBeg2AAhNQAAgOgDgMQAigSApgHQAWgEAZABQBgAABEA5QAlAfARAmQgRgmglgfQhEg5hgAAQgZgBgWAEQgMgYAAgbQAAhIBQgyQBRgzBxAAQBxAABQAzQBRAygBBIQABBJhRAyQhPAyhvABQAOAgAAAjQAABRhEA4QhEA6hgAAQgdAAgagGQgOgogtgfQgsggg5gKQA5AKAsAgQAtAfAOAoQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgxgUIAAgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBCgvBcAAQAdAAAbAFQgRgigBgoQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IAAAHQgEA4hBAoQhEAqhiAAQhhAAhFgqgAKPi5QgYgPgRgQQgzguAAg8QAAgVAGgTQgbADgfAAQhXAAg9gXQg8gWgBggQABghA8gWQA9gXBXAAQBVAAA+AXQASAHANAIQBRgmBqAAQCDAABbA4QBcA5AABPQAAAVgGATQgSA3hEAqQhbA4iDAAQiCAAhbg4g");
	var mask_4_graphics_44 = new cjs.Graphics().p("AyFHZQhEgqAAg9QAAgQAFgQQAYAGAZgBQBWABA8g9QAagaAPgfQgPAfgaAaQg8A9hWgBQgZABgYgGQg2gNgqgqQg9g8AAhVQAAhWA9g8QA8g7BVAAQAjAAAdAJQAYAgAtAaQARAKATAIQgTgIgRgKQgtgagYggQgYgiAAgnQAAhOBdg3QBdg3CEABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgVAKIAVgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAYABQBhAABEA5QAmAfARAmQgRgmgmgfQhEg5hhAAQgYgBgXAEQgLgYAAgbQAAhIBQgyQBQgzByAAQBxAABQAzQBQAyAABIQAABJhQAyQhOAyhvABQAOAggBAjQAABRhEA4QhEA6hhAAQgcAAgbgGQgOgogsgfQgsggg6gKQA6AKAsAgQAsAfAOAoQAIAUgBAWQAABBhBAvQhBAuhdAAQg8AAgygUIAAgHQAAg7hFgrQgUgNgXgIIgBgIQAAhDBCguQBBgvBcAAQAeAAAaAFQgRgigBgoQhWAth2gBQhrAAhSgkQAlA0ABBEQAAAwgUAoQBAABAzAUQAXAIAUANQBFArAAA7IAAAHQgDA4hCAoQhEAqhhAAQhhAAhFgqgAOsgfQgRgJgQgMQg6gqgQg4QgHgVABgXQgBhTBRg8QAlgbAtgPQA0gRA9AAQByAABQA7QBRA8AABTQAABThRA7QhQA7hyAAQhcAAhGgmgAHTi5QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg9gXQg9gWAAggQAAghA9gWQA9gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABbA4QA5AjAWAsQgtAPglAbQhRA8ABBTQgBAXAHAVQhBAVhPAAQiCAAhcg4gAPdl7IAAAAg");
	var mask_4_graphics_45 = new cjs.Graphics().p("A1UHZQhEgqAAg9QAAgQAFgQQAYAGAagBQBVABA8g9QAbgaAPgfQgPAfgbAaQg8A9hVgBQgaABgYgGQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQAXAgAtAaQARAKATAIQgTgIgRgKQgtgagXggQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAZABQBgAABEA5QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgagGQgPgogsgfQgsggg5gKQA5AKAsAgQAsAfAPAoQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQgSgiAAgoQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgALBEvQiXhpAAiVQAAgSACgQIADgRQAKg3AhgvQAMgTAPgRIgDgKQgGgVAAgXQAAhTBQg8QAmgbAsgPQgsAPgmAbQhQA8AABTQAAAXAGAVQhBAVhPAAQiCAAhcg4QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg8gXQg9gWAAggQAAghA9gWQA8gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABcA4QA5AjAVAsQA0gRA9AAQByAABRA7QASANANAOQAeACAdAEQCPAVBuBNQCXBqAACVQAACViXBpQiXBrjVAAQjVAAiXhrg");
	var mask_4_graphics_53 = new cjs.Graphics().p("A1UHZQhEgqAAg9QAAgQAFgQQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQgPAfgbAaQg8A9hVgBQgaABgYgGQAYAGAagBQBVABA8g9QAbgaAPgfQA/ABAzAUIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQA5AKAsAgQArAeAPAmIABADIgBgDQgPgmgrgeQgsggg5gKQgSgiAAgoIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAZABQBgAABEA5QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgagGQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgAzdAAQARAKATAIQgTgIgRgKQgtgagXggQAXAgAtAagALBEvQiXhpAAiVQAAgSACgQIADgRQAKg3AhgvQAMgTAPgRIgDgKQgGgVAAgXQAAhTBQg8QAmgbAsgPQA0gRA9AAQByAABRA7QASANANAOQAeACAdAEQCPAVBuBNQCXBqAACVQAACViXBpQiXBrjVAAQjVAAiXhrgAEEi5QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg8gXQg9gWAAggQAAghA9gWQA8gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABcA4QA5AjAVAsQgsAPgmAbQhQA8AABTQAAAXAGAVQhBAVhPAAQiCAAhcg4gAMOl7IAAAAg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AjBB6QhQgyAAhIQAAhHBQgzQBQgyBxAAQBxAABRAyQBQAzAABHQAABIhQAyQhRAzhxAAQhxAAhQgzg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AkkD4QhEg5AAhRQAAhQBEg4QAzgrBCgLQAXgDAZAAQBgAABDA5QAmAeARAmQgRgmgmgeQhDg5hgAAQgZAAgXADQgLgXAAgbQAAhIBQgzQBRgzBwAAQByAABQAzQBQAzAABIQAABIhQAyQhPAxhvABQAOAgAAAkQAABRhFA5QhDA5hgAAQhhAAhEg5g");
	var mask_4_graphics_108 = new cjs.Graphics().p("AmqFkQhBgvAAhCQAAhCBBguQBCgvBcAAQAeAAAaAFQA5AKAtAgQAsAfAOAoQgOgogsgfQgtggg5gKQgSgjAAgpQAAhQBEg5QAzgqBDgLQgLgYAAgbQAAhIBPgzQBQgyByAAQBxAABQAyQBRAzAABIQAABIhRAzQhPAyhvABQAOAfAAAkQAABQhEA5QhEA5hhAAQgbAAgbgFQAHAUAAAVQAABChBAvQhBAuhdAAQhcAAhCgugACnh8QAlAfARAnQgRgnglgfQhEg5hhAAQgXAAgXAEQAXgEAXAAQBhAABEA5g");
	var mask_4_graphics_109 = new cjs.Graphics().p("ApYGjQhFgqAAg9QAAg7BFgrQBFgqBhAAQBEAAA1AVIAAgIQAAhDBBguQBCgvBcAAQAeAAAaAFQA4AKAtAgQAqAeAPAmIABADQAHAUAAAWQAABBhBAvQhBAuhcAAQg9AAgxgUIAAgHQAAg7hFgrQgUgNgYgIQAYAIAUANQBFArAAA7IAAAHQgEA4hBAoQhEAqhhAAQhhAAhFgqgAB9CPIgBgDQgPgmgqgeQgtggg4gKQgSgiAAgpQAAhQBDg5QAzgrBDgLQgLgYAAgbQAAhIBQgyQBQgzByAAQBxAABQAzQBRAyAABIQAABJhRAyQhPAyhvABQAOAgAAAkQAABQhEA4QhEA6hhAAQgcAAgbgGgAFZi2QAlAfARAmQgRgmglgfQhEg5hhAAQgYgBgXAEQAXgEAYABQBhAABEA5g");
	var mask_4_graphics_110 = new cjs.Graphics().p("AoNGjQhEgqAAg9QAAgQAFgQQg2gNgqgqQg8g8AAhVQAAhVA8g9QA8g7BWAAQBVAAA8A7QA9A9AABVQAAAwgTAoQgPAfgbAaQg8A9hVgBQgaABgYgGQAYAGAagBQBVABA8g9QAbgaAPgfQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAcAAAbAFQgSgiAAgpQAAhQBEg5QAzgrBCgLQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAkQAABQhFA4QhEA6hgAAQgdAAgagGQAHAUAAAWQAABBhCAvQhBAuhbAAQg9AAgygUQgDA4hBAoQhFAqhhAAQhhAAhFgqgACOBIQAsAfAPAoQgPgogsgfQgsggg5gKQA5AKAsAggAGki2QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQAXgEAZABQBgAABEA5g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AoNGjQhEgqAAg9QAAgQAFgQQg2gNgqgqQg8g8AAhVQAAhVA8g9QA8g7BWAAQAiAAAeAJQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBcA3QBNAuANA9QADAMAAAOQAABNhdA2IgUALQhWAsh2gBQhrAAhSgjQAmAzAABEQAAAwgTAoQgPAfgbAaQg8A9hVgBQgaABgYgGQAYAGAagBQBVABA8g9QAbgaAPgfQA/ABAzAUIAAgIQAAhDBBguQBBgvBdAAQAcAAAbAFQA5AKAsAgQArAeAPAmIABADIgBgDQgPgmgrgeQgsggg5gKQgSghAAgoIAUgLQBdg2AAhNQAAgOgDgMQAjgSAogHQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQgRgmgmgfQhEg5hgAAQgZgBgXAEQAXgEAZABQBgAABEA5QAmAfARAmQAOAgAAAkQAABQhFA4QhEA6hgAAQgdAAgagGQAHAUAAAWQAABBhCAvQhBAuhbAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgAmWg2QARALATAIQgTgIgRgLQgtgagXggQAXAgAtAag");
	var mask_4_graphics_112 = new cjs.Graphics().p("AreHZQhEgqAAg9QAAgQAFgQQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQgPAfgbAaQg8A9hVgBQgaABgYgGQAYAGAagBQBVABA8g9QAbgaAPgfQA/ABAzAUIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQA5AKAsAgQArAeAPAmIABADIgBgDQgPgmgrgeQgsggg5gKQgSgiAAgoIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQgLgYAAgbQAAhIBPgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQgRgmgmgfQhEg5hgAAQgZgBgWAEQAWgEAZABQBgAABEA5QAmAfARAmQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgZgGQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgApnAAQARAKATAIQgTgIgRgKQgtgagXggQAXAgAtAagAJXl+Qg9gWAAggQAAghA9gWQA9gXBWAAQBWAAA9AXQA9AWAAAhQAAAgg9AWQg9AXhWAAQhWAAg9gXg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AvKHZQhEgqAAg9QAAgQAGgQQg3gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQgZgiABgnQgBhOBdg3QBeg3CDABQCEgBBdA3QBOAuANA9QADAMAAAOQAABNheA2IgUAKQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQgPAfgaAaQg9A9hVgBQgaABgXgGQAXAGAagBQBVABA9g9QAagaAPgfQA/ABAzAUIAAgIQAAhDBBguQBCgvBcAAQAdAAAbAFQA5AKAsAgQArAeAPAmIABADIgBgDQgPgmgrgeQgsggg5gKQgRgigBgoIAUgKQBeg2AAhNQAAgOgDgMQAigSApgHQAWgEAZABQBgAABEA5QAlAfARAmQgRgmglgfQhEg5hgAAQgZgBgWAEQgMgYAAgbQAAhIBQgyQBRgzBxAAQBxAABQAzQBRAygBBIQABBJhRAyQhPAyhvABQAOAgAAAjQAABRhEA4QhEA6hgAAQgdAAgagGQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgxgUIAAgHQAAg7hFgrQgVgNgXgIQAXAIAVANQBFArAAA7IAAAHQgEA4hBAoQhEAqhiAAQhhAAhFgqgAtTAAQASAKASAIQgSgIgSgKQgtgagXggQAXAgAtAagAKPi5QgYgPgRgQQgzguAAg8QAAgVAGgTQgbADgfAAQhXAAg9gXQg8gWgBggQABghA8gWQA9gXBXAAQBVAAA+AXQASAHANAIQBRgmBqAAQCDAABbA4QBcA5AABPQAAAVgGATQgSA3hEAqQhbA4iDAAQiCAAhbg4gAk2idIAAAAg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AyFHZQhEgqAAg9QAAgQAFgQQg2gNgqgqQg9g8AAhVQAAhWA9g8QA8g7BVAAQAjAAAdAJQgYgiAAgnQAAhOBdg3QBdg3CEABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgVAKQhWAth2gBQhrAAhSgkQAlA0ABBEQAAAwgUAoQgPAfgaAaQg8A9hWgBQgZABgYgGQAYAGAZgBQBWABA8g9QAagaAPgfQBAABAzAUIgBgIQAAhDBCguQBBgvBcAAQAeAAAaAFQA6AKAsAgQAqAeAPAmIABADIgBgDQgPgmgqgeQgsggg6gKQgRgigBgoIAVgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAYABQBhAABEA5QAmAfARAmQgRgmgmgfQhEg5hhAAQgYgBgXAEQgLgYAAgbQAAhIBQgyQBQgzByAAQBxAABQAzQBQAyAABIQAABJhQAyQhOAyhvABQAOAggBAjQAABRhEA4QhEA6hhAAQgcAAgbgGQAIAUgBAWQAABBhBAvQhBAuhdAAQg8AAgygUIAAgHQAAg7hFgrQgUgNgXgIQAXAIAUANQBFArAAA7IAAAHQgDA4hCAoQhEAqhhAAQhhAAhFgqgAwOAAQARAKATAIQgTgIgRgKQgtgagYggQAYAgAtAagAOsgfQgRgJgQgMQg6gqgQg4QgHgVABgXQgBhTBRg8QAlgbAtgPQA0gRA9AAQByAABQA7QBRA8AABTQAABThRA7QhQA7hyAAQhcAAhGgmgAHTi5QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg9gXQg9gWAAggQAAghA9gWQA9gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABbA4QA5AjAWAsQgtAPglAbQhRA8ABBTQgBAXAHAVQhBAVhPAAQiCAAhcg4gAPdl7IAAAAg");
	var mask_4_graphics_115 = new cjs.Graphics().p("A1UHZQhEgqAAg9QAAgQAFgQQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQgPAfgbAaQg8A9hVgBQgaABgYgGQAYAGAagBQBVABA8g9QAbgaAPgfQA/ABAzAUIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQA5AKAsAgQArAeAPAmIABADIgBgDQgPgmgrgeQgsggg5gKQgSgiAAgoIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAZABQBgAABEA5QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgagGQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgAzdAAQARAKATAIQgTgIgRgKQgtgagXggQAXAgAtAagALBEvQiXhpAAiVQAAgSACgQIADgRQAKg3AhgvQAMgTAPgRIgDgKQgGgVAAgXQAAhTBQg8QAmgbAsgPQA0gRA9AAQByAABRA7QASANANAOQAeACAdAEQCPAVBuBNQCXBqAACVQAACViXBpQiXBrjVAAQjVAAiXhrgAEEi5QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg8gXQg9gWAAggQAAghA9gWQA8gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABcA4QA5AjAVAsQgsAPgmAbQhQA8AABTQAAAXAGAVQhBAVhPAAQiCAAhcg4gAMOl7IAAAAg");
	var mask_4_graphics_123 = new cjs.Graphics().p("A1UHZQhEgqAAg9QAAgQAFgQQAYAGAagBQBVABA8g9QAbgaAPgfQgPAfgbAaQg8A9hVgBQgaABgYgGQg2gNgqgqQg8g8AAhVQAAhWA8g8QA8g7BWAAQAiAAAeAJQAXAgAtAaQARAKATAIQgTgIgRgKQgtgagXggQgZgiAAgnQAAhOBdg3QBeg3CDABQCEgBBdA3QBNAuANA9QADAMAAAOQAABNhdA2IgUAKIAUgKQBdg2AAhNQAAgOgDgMQAjgSAogHQAXgEAZABQBgAABEA5QAmAfARAmQgRgmgmgfQhEg5hgAAQgZgBgXAEQgLgYAAgbQAAhIBQgyQBRgzBxAAQByAABQAzQBQAyAABIQAABJhQAyQhPAyhvABQAOAgAAAjQAABRhFA4QhEA6hgAAQgdAAgagGQgPgogsgfQgsggg5gKQA5AKAsAgQAsAfAPAoQAHAUAAAWQAABBhCAvQhBAuhcAAQg9AAgygUIABgHQAAg7hFgrQgVgNgXgIIAAgIQAAhDBBguQBBgvBdAAQAdAAAbAFQgSgiAAgoQhXAth2gBQhrAAhSgkQAmA0AABEQAAAwgTAoQA/ABAzAUQAXAIAVANQBFArAAA7IgBAHQgDA4hBAoQhFAqhhAAQhhAAhFgqgALBEvQiXhpAAiVQAAgSACgQIADgRQAKg3AhgvQAMgTAPgRIgDgKQgGgVAAgXQAAhTBQg8QAmgbAsgPQgsAPgmAbQhQA8AABTQAAAXAGAVQhBAVhPAAQiCAAhcg4QgXgPgRgQQgzguAAg8QAAgVAGgTQgcADgfAAQhWAAg8gXQg9gWAAggQAAghA9gWQA8gXBWAAQBWAAA9AXQATAHANAIQBRgmBqAAQCCAABcA4QA5AjAVAsQA0gRA9AAQByAABRA7QASANANAOQAeACAdAEQCPAVBuBNQCXBqAACVQAACViXBpQiXBrjVAAQjVAAiXhrg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_4_graphics_36,x:363.85,y:441.75}).wait(1).to({graphics:mask_4_graphics_37,x:355.125,y:454.875}).wait(1).to({graphics:mask_4_graphics_38,x:342.075,y:464.625}).wait(1).to({graphics:mask_4_graphics_39,x:324.275,y:470.5}).wait(1).to({graphics:mask_4_graphics_40,x:316.725,y:470.5}).wait(1).to({graphics:mask_4_graphics_41,x:316.725,y:470.5}).wait(1).to({graphics:mask_4_graphics_42,x:337.625,y:465.1}).wait(1).to({graphics:mask_4_graphics_43,x:361.2,y:465.1}).wait(1).to({graphics:mask_4_graphics_44,x:379.95,y:465.1}).wait(1).to({graphics:mask_4_graphics_45,x:400.625,y:465.1}).wait(8).to({graphics:mask_4_graphics_53,x:400.625,y:465.1}).wait(17).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_4_graphics_106,x:363.85,y:441.75}).wait(1).to({graphics:mask_4_graphics_107,x:355.125,y:454.875}).wait(1).to({graphics:mask_4_graphics_108,x:342.075,y:464.625}).wait(1).to({graphics:mask_4_graphics_109,x:324.275,y:470.5}).wait(1).to({graphics:mask_4_graphics_110,x:316.725,y:470.5}).wait(1).to({graphics:mask_4_graphics_111,x:316.725,y:470.5}).wait(1).to({graphics:mask_4_graphics_112,x:337.625,y:465.1}).wait(1).to({graphics:mask_4_graphics_113,x:361.2,y:465.1}).wait(1).to({graphics:mask_4_graphics_114,x:379.95,y:465.1}).wait(1).to({graphics:mask_4_graphics_115,x:400.625,y:465.1}).wait(8).to({graphics:mask_4_graphics_123,x:400.625,y:465.1}).wait(17));

	// 圖層_9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332F1F").s().p("AnSFzQgnAag7hUQg5hRAIgtQAPhhB3hmQBThJCIhHQBEgkCrhMQgJAFBDgYQjVBSijBpQi7B3g+BzQgPAcAGAuQAGArAWAoQAXAqAfARQAkAUAlgTIDoh0QB7hFBXhRQDyjjCQjeIASgIIDTgXQgjA9gcAvIgFgHIiCDIIABAFQi/ECjFB6QioBpinAAQhRAAhQgZgAmxFsQBkgdBWgvQBZgwBUhCQiIBejfBggACyhIQggAggNAbQAyg2Awg4QgQAQglAjg");
	this.shape_4.setTransform(318.6814,466.4202);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36).to({_off:false},0).to({_off:true},34).wait(36).to({_off:false},0).wait(34));

	// 遮 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_42 = new cjs.Graphics().p("Aj9BOQhqggABguQgBgsBqghQBpgfCUAAQCVAABpAfQBpAhABAsQgBAuhpAgQhpAfiVAAQiUAAhpgfg");
	var mask_5_graphics_43 = new cjs.Graphics().p("ABmCBQhKgxgFhFQhhAZiFAAQiVAAhqggQhpgfAAgtQAAguBpggQBqggCVAAQCVAABoAgQAiALAXALIgBABQhPA1AABLIAAAKIAAgKQAAhLBPg1IABgBQBQg0BwAAQBxAABQA1QBQA1AABLQAABLhQA1QhQA2hxAAQhxAAhQg2gABniAIAAAAg");
	var mask_5_graphics_44 = new cjs.Graphics().p("ADPDkQhig+gBhZIAAgDQAChWBhg+QA/gnBPgPQAugIA0AAQCLAABjA+QBkA/gBBYQABBZhkA+QhjA/iLAAQiMAAhkg/gAhyAVQhKgwgFhFIAAgKQAAhMBPg2IABAAQBQg1BwAAQBwAABQA1QBFAuAJA+QhPAPg/AnQhhA+gCBWIgdABQhwgBhRg1gAqmhnQhqggABguQgBgtBqggQBpggCVAAQCVAABpAgQAiAKAXAMIgBAAQhPA2AABMIAAAKQhiAZiFAAQiVAAhpgggAhxjsIAAAAg");
	var mask_5_graphics_45 = new cjs.Graphics().p("ABfFzQiDhIAAhmQAAhcBthEIAWgNQCFhHC8AAQCWAABzAuQhzguiWAAQi8AAiFBHIgWANQgxgxAAg+IAAgDQAChXBhg+QA/gnBPgPQAugIAzAAQCMAABjA+QBjA/AABZQAAAngTAiQAcALAbAOQCFBIAABlQAABmiFBIQiFBIi7AAQi8AAiFhIgAjGiCQhKgxgFhFIAAgKQAAhMBPg2IABAAIgBAAQhPA2AABMIAAAKQhiAZiFAAQiVAAhqggQhpggAAguQAAgtBpggQBqggCVAAQCVAABpAgQAiAKAXAMQBQg1BwAAQBwAABQA1QBEAuAKA+QhPAPg/AnQhhA+gCBXIgdABQhxgBhQg1gAkVj4IAAAAg");
	var mask_5_graphics_112 = new cjs.Graphics().p("Aj9BOQhqggABguQgBgsBqghQBpgfCUAAQCVAABpAfQBpAhABAsQgBAuhpAgQhpAfiVAAQiUAAhpgfg");
	var mask_5_graphics_113 = new cjs.Graphics().p("ABmCBQhKgxgFhFIAAgKQAAhLBPg1IABgBQBQg0BwAAQBxAABQA1QBQA1AABLQAABLhQA1QhQA2hxAAQhxAAhQg2gAnOAEQhpgfAAgtQAAguBpggQBqggCVAAQCVAABoAgQAiALAXALIgBABQhPA1AABLIAAAKQhhAZiFAAQiVAAhqgggAAXALIAAAAg");
	var mask_5_graphics_114 = new cjs.Graphics().p("ADPDkQhig+gBhZIAAgDQAChWBhg+QA/gnBPgPQAugIA0AAQCLAABjA+QBkA/gBBYQABBZhkA+QhjA/iLAAQiMAAhkg/gAhyAVQhKgwgFhFIAAgKQAAhMBPg2IABAAQBQg1BwAAQBwAABQA1QBFAuAJA+QhPAPg/AnQhhA+gCBWIgdABQhwgBhRg1gAqmhnQhqggABguQgBgtBqggQBpggCVAAQCVAABpAgQAiAKAXAMIgBAAQhPA2AABMIAAAKQhiAZiFAAQiVAAhpgggAhxjsIAAAAg");
	var mask_5_graphics_115 = new cjs.Graphics().p("ABfFzQiDhIAAhmQAAhcBthEIAWgNQCFhHC8AAQCWAABzAuQhzguiWAAQi8AAiFBHIgWANQgxgxAAg+IAAgDIgdABQhxgBhQg1QhKgxgFhFIAAgKQAAhMBPg2IABAAQBQg1BwAAQBwAABQA1QBEAuAKA+QAugIAzAAQCMAABjA+QBjA/AABZQAAAngTAiQAcALAbAOQCFBIAABlQAABmiFBIQiFBIi7AAQi8AAiFhIgAB7jiQhhA+gCBXQAChXBhg+QA/gnBPgPQhPAPg/AngAr7j/QhpggAAguQAAgtBpggQBqggCVAAQCVAABpAgQAiAKAXAMIgBAAQhPA2AABMIAAAKQhiAZiFAAQiVAAhqgggAkVj4IAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_5_graphics_42,x:416.2,y:425.65}).wait(1).to({graphics:mask_5_graphics_43,x:437.025,y:432.975}).wait(1).to({graphics:mask_5_graphics_44,x:458.7,y:443.8}).wait(1).to({graphics:mask_5_graphics_45,x:467.125,y:459}).wait(25).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_5_graphics_112,x:416.2,y:425.65}).wait(1).to({graphics:mask_5_graphics_113,x:437.025,y:432.975}).wait(1).to({graphics:mask_5_graphics_114,x:458.7,y:443.8}).wait(1).to({graphics:mask_5_graphics_115,x:467.125,y:459}).wait(25));

	// 圖層_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332F1F").s().p("AHlFRQhmgXjPg+Qi9g5g4gKQAXABAhAKIgYgaQA9AEA3ALQgQgIhkgIIgHgIIAggBQApAJAwgMQA8gCAvgjQgIAGgmAIIAfgSQA0ghimhoQhWg3h2g6QiXhLiYgjQiRgiiogCIgCgEIClAAQBQAAgCgFIBJAXQBtASBnApQhOgliagqQjHg2hxAIQgBgLAAgKQDPgVDjAWQD0AYDUBEQH8CjCeFZQA0B0iUAAQhIAAh3gbgAgNhUQgogZgygbQiJhJiKggICZA2QBtAsBnA7IAAAAg");
	this.shape_5.setTransform(470.9367,453.2531);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(42).to({_off:false},0).to({_off:true},28).wait(42).to({_off:false},0).wait(28));

	// 遮 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_46 = new cjs.Graphics().p("AiEBFIAAiJIEJAAIAACJg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AiIC6IAAlzIERAAIAAFzg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AiMEuIAApbIEZAAIAAJbg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AiQGjIAAtFIEhAAIAANFg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AiUIXIAAwtIEpAAIAAQtg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AiYKLIAA0VIExAAIAAUVg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AicMAIAA3/IE5AAIAAX/g");
	var mask_6_graphics_53 = new cjs.Graphics().p("AigN0IAA7nIFBAAIAAbng");
	var mask_6_graphics_54 = new cjs.Graphics().p("EAZoArJIAA/RIFKAAIAAfRg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AiEBFIAAiJIEJAAIAACJg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AiIC6IAAlzIERAAIAAFzg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AiMEuIAApbIEZAAIAAJbg");
	var mask_6_graphics_119 = new cjs.Graphics().p("AiQGjIAAtFIEhAAIAANFg");
	var mask_6_graphics_120 = new cjs.Graphics().p("AiUIXIAAwtIEpAAIAAQtg");
	var mask_6_graphics_121 = new cjs.Graphics().p("AiYKLIAA0VIExAAIAAUVg");
	var mask_6_graphics_122 = new cjs.Graphics().p("AicMAIAA3/IE5AAIAAX/g");
	var mask_6_graphics_123 = new cjs.Graphics().p("AigN0IAA7nIFBAAIAAbng");
	var mask_6_graphics_124 = new cjs.Graphics().p("EAZoArJIAA/RIFKAAIAAfRg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_6_graphics_46,x:377.475,y:452.15}).wait(1).to({graphics:mask_6_graphics_47,x:377.475,y:452.15}).wait(1).to({graphics:mask_6_graphics_48,x:377.475,y:452.175}).wait(1).to({graphics:mask_6_graphics_49,x:377.475,y:452.175}).wait(1).to({graphics:mask_6_graphics_50,x:377.5,y:452.2}).wait(1).to({graphics:mask_6_graphics_51,x:377.5,y:452.175}).wait(1).to({graphics:mask_6_graphics_52,x:377.5,y:452.175}).wait(1).to({graphics:mask_6_graphics_53,x:377.5,y:452.2}).wait(1).to({graphics:mask_6_graphics_54,x:197.0006,y:276.1189}).wait(16).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_6_graphics_116,x:377.475,y:452.15}).wait(1).to({graphics:mask_6_graphics_117,x:377.475,y:452.15}).wait(1).to({graphics:mask_6_graphics_118,x:377.475,y:452.175}).wait(1).to({graphics:mask_6_graphics_119,x:377.475,y:452.175}).wait(1).to({graphics:mask_6_graphics_120,x:377.5,y:452.2}).wait(1).to({graphics:mask_6_graphics_121,x:377.5,y:452.175}).wait(1).to({graphics:mask_6_graphics_122,x:377.5,y:452.175}).wait(1).to({graphics:mask_6_graphics_123,x:377.5,y:452.2}).wait(1).to({graphics:mask_6_graphics_124,x:197.0006,y:276.1189}).wait(16));

	// 圖層_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332F1F").s().p("Ag9F/QguhogPirQgOibAQikQAPiiAmhmIATBQICsh1IgGJYIACgBIgCEVQAnBqhTArQhSgLg1h3gAhLkuQgHAYgCATQAGggAMgnIgJAcg");
	this.shape_6.setTransform(374.5493,499.575);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(46).to({_off:false},0).to({_off:true},24).wait(46).to({_off:false},0).wait(24));

	// 遮 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_55 = new cjs.Graphics().p("AinBhQhEgoAAg5QAAg4BEgoQBGgpBhAAQBiAABFApQBFAoAAA4QAAA5hFAoQhFAohiAAQhhAAhGgog");
	var mask_7_graphics_56 = new cjs.Graphics().p("AlbBwQhFgoAAg5QAAg4BFgoQBFgpBiAAIARABQgTAGgSAHQhqAtAAA+QAAA9BqAtQA4AXBFALQgvAOg6gBQhiAAhFgogAhLCLQhFgLg4gXQhqgtAAg9QAAg+BqgtQASgHATgGQBfgfB7AAQCWABBqArQBqAtAAA+QAAA9hqAtQhqAsiWAAQhFgBg9gJgAijh5IAAAAg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AgKDdQhEgwAAhEQAAgrAdgkQAPgTAYgQQBEgwBhAAQBdAABDAsQhDgshdAAQhhAAhEAwQgYAQgPATIgagEQhFgKg4gXQhqgsAAg+QAAg/BqgsQASgHATgHQgTAHgSAHQhqAsAAA/QAAA+BqAsQA4AXBFAKQgvAOg6AAQhiAAhFgnQhFgoAAg5QAAg5BFgpQBFgoBiAAIARAAQBfgeB7AAQCWAABqAsQBqAsAAA/QAAA9hmArIAFAEQBEAvAABDQAABEhEAwQhFAwhgAAQhhAAhEgwgAhLAWIAAAAg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AhfF1QhmhAABhcQgBhbBmhBIALgHIgDgCQhFgwAAhDQABgrAcgkIgagEQhEgKg4gYQhqgsAAg+QAAg/BqgsQASgHATgHQgTAHgSAHQhqAsAAA/QAAA+BqAsQA4AYBEAKQgvAOg5AAQhiAAhGgoQhEgoAAg5QAAg5BEgpQBGgoBiAAIARAAQBegeB8AAQCWAABpAsQBqAsAAA/QAAA9hlArIAEAEQBFAwAABDQAAArgcAhQA8ARAyAfQBlBBAABbQAABchlBAQhlBBiQAAQiPAAhkhBgAhUA2QBhg4CHAAQBJAAA+APQg+gPhJAAQiHAAhhA4gAhXiyQgYARgQATQAQgTAYgRQBEgwBgAAQBdAABEAsQhEgshdAAQhgAAhEAwg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AhCIqQhHhEAAhgQAAhgBHhEIAPgNQBBg3BaAAQBkAABGBEIALAKQA9BBAABZQgBBghHBEQhGBEhkAAQhkAAhGhEgAESDiQhGhEhkAAQhaAAhBA3QgXgLgVgNQhmhBABhbQgBhbBmhAIALgHIgDgDQhFgwAAhDQABgsAcgjIgagEQhEgLg4gXQhqgsAAg/QAAg+BqgsQASgHATgHQBegeB8AAQCWAABpAsQBqAsAAA+QAAA+hlArQhEgthdABQhgAAhEAvQgYARgQAUQAQgUAYgRQBEgvBgAAQBdgBBEAtIAEADQBFAxAABDQAAAqgcAjQA8AQAyAgQBlBAAABbQAABbhlBBQgxAfg7AQIgLgKgAhUiBQBhg6CHABQBJgBA+ARQg+gRhJABQiHgBhhA6gAmpllQhEgoAAg5QAAg4BEgpQBGgoBiAAIARAAQgTAHgSAHQhqAsAAA+QAAA/BqAsQA4AXBEALQgvAOg5AAQhiAAhGgpgAjwpPIAAAAg");
	var mask_7_graphics_125 = new cjs.Graphics().p("AinBhQhEgoAAg5QAAg4BEgoQBGgpBhAAQBiAABFApQBFAoAAA4QAAA5hFAoQhFAohiAAQhhAAhGgog");
	var mask_7_graphics_126 = new cjs.Graphics().p("AlbBwQhFgoAAg5QAAg4BFgoQBFgpBiAAIARABQgTAGgSAHQhqAtAAA+QAAA9BqAtQA4AXBFALQgvAOg6gBQhiAAhFgogAhLCLQhFgLg4gXQhqgtAAg9QAAg+BqgtQASgHATgGQBfgfB7AAQCWABBqArQBqAtAAA+QAAA9hqAtQhqAsiWAAQhFgBg9gJgAhLCLIAAAAg");
	var mask_7_graphics_127 = new cjs.Graphics().p("AgKDdQhEgwAAhEQAAgrAdgkQAPgTAYgQQBEgwBhAAQBdAABDAsQhDgshdAAQhhAAhEAwQgYAQgPATIgagEQhFgKg4gXQhqgsAAg+QAAg/BqgsQASgHATgHQBfgeB7AAQCWAABqAsQBqAsAAA/QAAA9hmArIAFAEQBEAvAABDQAABEhEAwQhFAwhgAAQhhAAhEgwgAlbgDQhFgoAAg5QAAg5BFgpQBFgoBiAAIARAAQgTAHgSAHQhqAsAAA/QAAA+BqAsQA4AXBFAKQgvAOg6AAQhiAAhFgngAhLAWIAAAAg");
	var mask_7_graphics_128 = new cjs.Graphics().p("AhfF1QhmhAABhcQgBhbBmhBIALgHQBhg4CHAAQBJAAA+APQg+gPhJAAQiHAAhhA4IgDgCQhFgwAAhDQABgrAcgkQAQgTAYgRQBEgwBgAAQBdAABEAsQhEgshdAAQhgAAhEAwQgYARgQATIgagEQhEgKg4gYQhqgsAAg+QAAg/BqgsQASgHATgHQBegeB8AAQCWAABpAsQBqAsAAA/QAAA9hlArIAEAEQBFAwAABDQAAArgcAhQA8ARAyAfQBlBBAABbQAABchlBAQhlBBiQAAQiPAAhkhBgAmpisQhEgoAAg5QAAg5BEgpQBGgoBiAAIARAAQgTAHgSAHQhqAsAAA/QAAA+BqAsQA4AYBEAKQgvAOg5AAQhiAAhGgogAiZiSIAAAAg");
	var mask_7_graphics_129 = new cjs.Graphics().p("AhCIqQhHhEAAhgQAAhgBHhEIAPgNQBBg3BaAAQBkAABGBEIALAKIgLgKQhGhEhkAAQhaAAhBA3QgXgLgVgNQhmhBABhbQgBhbBmhAIALgHIgDgDQhFgwAAhDQABgsAcgjQAQgUAYgRQBEgvBgAAQBdgBBEAtQhEgthdABQhgAAhEAvQgYARgQAUIgagEQhEgLg4gXQhqgsAAg/QAAg+BqgsQASgHATgHQBegeB8AAQCWAABpAsQBqAsAAA+QAAA+hlArIAEADQBFAxAABDQAAAqgcAjQA8AQAyAgQBlBAAABbQAABbhlBBQgxAfg7AQQA9BBAABZQgBBghHBEQhGBEhkAAQhkAAhGhEgAhUiBQBhg6CHABQBJgBA+ARQg+gRhJABQiHgBhhA6gAmpllQhEgoAAg5QAAg4BEgpQBGgoBiAAIARAAQgTAHgSAHQhqAsAAA+QAAA/BqAsQA4AXBEALQgvAOg5AAQhiAAhGgpgAiZlKIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_7_graphics_55,x:406.65,y:456.05}).wait(1).to({graphics:mask_7_graphics_56,x:424.7,y:454.55}).wait(1).to({graphics:mask_7_graphics_57,x:424.7,y:466.175}).wait(1).to({graphics:mask_7_graphics_58,x:432.45,y:483.075}).wait(1).to({graphics:mask_7_graphics_59,x:432.45,y:501.5}).wait(11).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_7_graphics_125,x:406.65,y:456.05}).wait(1).to({graphics:mask_7_graphics_126,x:424.7,y:454.55}).wait(1).to({graphics:mask_7_graphics_127,x:424.7,y:466.175}).wait(1).to({graphics:mask_7_graphics_128,x:432.45,y:483.075}).wait(1).to({graphics:mask_7_graphics_129,x:432.45,y:501.5}).wait(11));

	// 圖層_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332F1F").s().p("AA3IiQgWgUgjgrQgmgtgOgOIAAgSIBlj+QAmgMgfg5Igng4IAeizQgUAvgnA2IAAgWQAjgTARg9IAJg5QgWhPAZhJQAHgLADgKQAKAXAEAZQgCgfgKgZQAEgTgRgLQgWgigngOQAcAOAWAeQgsgQiDAYQhLANiNAkIAAgIIAEgCIgEABIgJh9QDDhGCCgJQDegQBaCTIAxDAQgBgQAMgIQAqDRgWDtQgdEuiEBiQgbAUgdAAQgoAAgrgmgAj1moQBMgjBSgQIAEAAQhJAGhZAtg");
	this.shape_7.setTransform(426.4644,500.7911);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(55).to({_off:false},0).to({_off:true},15).wait(55).to({_off:false},0).wait(15));

	// 圖層_6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#332F1F").s().p("AirBuQgChVgFhLIC7gpQB8gbAuAMIguChIiMAZQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAAAABIgGABQhOAchCAAIgLAAg");
	this.shape_8.setTransform(410.1,488.1747);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(61).to({_off:false},0).to({_off:true},9).wait(61).to({_off:false},0).wait(9));

	// 大遮 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_31 = new cjs.Graphics().p("AgeDyQiGgHhig/QhshHAAhlQAAhjBshIQBig/CGgHIAegBQCaAABsBHQBtBIAABjQAABlhtBHQhsBHiaAAIgegBg");
	var mask_8_graphics_32 = new cjs.Graphics().p("AgrFPQi8gKiKhYQiZhiAAiLQAAiKCZhjQCKhXC8gJQAVgBAWgBQDZABCYBhQCaBjAACKQAACLiaBiQiYBjjZAAIgrgBg");
	var mask_8_graphics_33 = new cjs.Graphics().p("Ag4GrQjzgNiyhvQjFh+AAixQAAiwDFh+QCyhwDzgMIA5gBQEXAADFB9QDGB+AACwQAACxjGB+QjFB9kXAAIg5gBg");
	var mask_8_graphics_34 = new cjs.Graphics().p("AXxf5QkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAlAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQglAAgigCg");
	var mask_8_graphics_35 = new cjs.Graphics().p("AmvJ3Qg6gjAAgyQAAgyA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAyQAAAyg6AjQg6AjhSAAQhSAAg6gjgAhFF1QkpgPjaiIQjyiYAAjXQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADXjzCYQjxCZlWAAQgkAAgigCg");
	var mask_8_graphics_55 = new cjs.Graphics().p("AiqMRQgXgjAAgyQAAgzAXgkQAYgkAhAAQAhAAAXAkQAXAkAAAzQAAAygXAjQgXAkghAAQghAAgYgkgAmvHcQg6gkAAgyQAAgxA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAxQAAAyg6AkQg6AjhSAAQhSAAg6gjgAhFDaQkpgPjaiIQjyiXAAjYQAAjYDyiYQDaiJEpgOQAigCAkABQFWgBDxCZQDzCYAADYQAADYjzCXQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AjAPIQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqJYQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvEiQg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFAhQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AjAPIQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAC+OrQgcg1AAhKQAAhLAcg0QAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgoAAgcg0gAiqJYQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvEiQg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFAhQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AgXP8QgugbAAgmQAAgnAugcQAkgWAygEIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCIAAAHQAAAmgtAbQguAchAAAQhBAAgsgcgABXO1QAYAqAjABQAigBAYgqQALgSAGgXQASASACAWQgCgWgSgSQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyQADAyAVAlgAjAOfQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqIvQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvD5Qg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFgHQkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AjdQlQg7gSAAgaQAAgZA7gSQA7gSBUAAIASAAQBIACA0AQQA5ARADAYQgDgYg5gRQg0gQhIgCQgJgPAAgRQAAgnAugbQAkgXAygEQADAzAVAlQAYAqAjAAQAiAAAYgqQALgTAGgWQgGAWgLATQgYAqgiAAQgjAAgYgqQgVglgDgzIAAgNQAAg7AYgqQAYgqAjAAQALAAALAFQAUAJAQAcQAZAqAAA7QAAAggIAcQAIgcAAggQAAg7gZgqQgQgcgUgJQAGglAQgeQAcg0AoAAQAoAAAcA0QAcA1AABKQAABLgcA0QgcA1goAAQgJAAgIgDIAAAHQAAAmgtAcQggATgoAGIAAACQAAAag8ASQg7AShTAAQhUAAg7gSgADxOVQgCgWgSgRQASARACAWgAjAOAQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqIQQgXgjAAgzQAAgyAXgkQAYgkAhAAQAhAAAXAkQAXAkAAAyQAAAzgXAjQgXAkghAAQghAAgYgkgAmvDaQg6gjAAgyQAAgyA6gjQA6gjBSAAQBSAAA6AjQA6AjAAAyQAAAyg6AjQg6AkhSAAQhSAAg6gkgAhFgmQkpgPjaiIQjyiZAAjXQAAjYDyiZQDaiIEpgOQAigCAkAAQFWAADxCYQDzCZAADYQAADXjzCZQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AikSiQgYgsAAhAQAAhAAYguQAUglAagGQg6gEgtgOQg7gRAAgaQAAgZA7gTQA7gSBUAAIASABQgJgPAAgRQAAgnAugcQAkgWAygEQADAyAVAlQAYAqAjABQAigBAYgqQALgSAGgXQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCIAAAHQAAAmgtAbQggAUgoAGQgDgYg5gSQg0gQhIgBQBIABA0AQQA5ASADAYIAAACQAAAag8ARQg7AShTABIgMAAQAZAHASAjQAZAuAABAQAABAgZAsQgYAugiAAQgjAAgYgugAhaOeQgHgDgIAAQgHAAgGACQAGgCAHAAQAIAAAHADgADxL8QgCgWgSgSQASASACAWgAjALnQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqF3QgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvBBQg6gjAAgxQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAxg6AjQg6AkhSgBQhSABg6gkgAhFi/QkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AikSiQgYgsAAhAQAAhAAYguQALgVAOgLQgRAjAAAqQAABJAzA0QAcAcAiAMIgEAIQgYAugiAAQgjAAgYgugAgrSaQgigMgcgcQgzg0AAhJQAAgqARgjIAGgMQAMgTAQgRQA0gzBIgBQA7ABAtAhQgtghg7gBQhIABg0AzQgQARgMATQgxgFgngMQg7gRAAgaQAAgZA7gTQA7gSBUAAIASABQBIABA0AQQA5ASADAYIAAACIgBAGQALAIAKAKQA0A0AABJQAABJg0A0Qg0AzhJAAQggAAgegLgAiLOoIAAAAgABAM0Qg0gQhIgBQgJgPAAgRQAAgnAugcQAkgWAygEQADAyAVAlQAYAqAjABQAigBAYgqQALgSAGgXQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCQgCgWgSgSQASASACAWIAAAHQAAAmgtAbQggAUgoAGQgDgYg5gSgAjALnQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqF3QgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvBBQg6gjAAgxQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAxg6AjQg6AkhSgBQhSABg6gkgAhFi/QkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_67 = new cjs.Graphics().p("ACpSyQgbgsgLg3QgIgnAAgsQAAhdAjhGIALgUQAuhMBBAAQBBAAAtBMQAuBMAABrQAABrguBLQgtBMhBAAQhBAAguhMgAikR0QgYgtAAhAQAAhAAYgtQALgVAOgLIAGgNQAMgTAQgQQA0g0BIAAQA7AAAtAiQgtgig7AAQhIAAg0A0QgQAQgMATQgxgEgngMQg7gSAAgZQAAgaA7gSQA7gSBUAAIASAAQBIACA0AQQA5ARADAYIAAADIgBAGQALAIAKAKIAOAPQgjBGAABdQAAAsAIAnQgwAohAAAQggAAgegLQgigNgcgcQgzgzAAhJQAAgqARgjQgRAjAAAqQAABJAzAzQAcAcAiANIgEAIQgYAugiAAQgjAAgYgugABAMGQg0gQhIgCQgJgPAAgRQAAgmAugcQAkgWAygEQADAyAVAlQAYAqAjAAQAiAAAYgqQALgTAGgWQgGAWgLATQgYAqgiAAQgjAAgYgqQgVglgDgyIAAgOQAAg7AYgqQAYgqAjAAQALAAALAFQAUAJAQAcQAZAqAAA7QAAAhgIAbQAIgbAAghQAAg7gZgqQgQgcgUgJQAGglAQgdQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCQgCgWgSgSQASASACAWIAAAGQAAAngtAbQggATgoAGQgDgYg5gRgAjAK5QgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqFJQgXgkAAgyQAAgzAXgkQAYgjAhAAQAhAAAXAjQAXAkAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvATQg6giAAgyQAAgyA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAyQAAAyg6AiQg6AjhSAAQhSAAg6gjgAhFjuQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigCg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AjbUHQg4goAAg4QAAg5A4goQAggXAogJQgJgkAAgrQAAhAAUguQAJgVAMgLIAFgMQAJgTAOgRQArgzA8gBQAxABAlAhQglghgxgBQg8ABgrAzQgOARgJATQgpgFghgMQgxgRAAgaQAAgZAxgTQAygSBFAAIAPABQA8ABArAQQAvASADAYIAAACIgBAGQAJAIAIAKQAHAIAFAIQgdBFAABdQAAAsAHAoQgHgoAAgsQAAhdAdhFIAJgVQAmhMA2ABQA2gBAmBMQAmBMAABrQAABrgmBMQgmBLg2AAQg2AAgmhLQgWgsgJg3QgbAbgiAJIAFADQA4AoAAA5QAAA4g4AoQg4AohPAAQhQAAg5gogAAwRDQg0gkhJgBQBJABA0AkgAiTQmQAegIAjAAIAFAAIgKgLQgrg0AAhJQAAgqAPgjQgPAjAAAqQAABJArA0IAKALIgFAAQgjAAgeAIgAA1LVQgrgQg8gBQgHgPAAgRQAAgnAmgcQAegWApgEQADAyARAlQAUAqAdABQAdgBAUgqQAJgTAFgVQgFAVgJATQgUAqgdABQgdgBgUgqQgRglgDgyIAAgNQAAg7AUgqQAUgqAdgBQAKAAAIAGQARAIAOAdQAUAqAAA7QAAAggGAcQAGgcAAggQAAg7gUgqQgOgdgRgIQAGgmANgdQAXg1AhAAQAiAAAXA1QAXA0AABLQAABKgXA1QgXA0giAAQgHAAgHgCQgCgWgOgRQAOARACAWIAAAHQAAAmglAbQgbATghAHQgDgYgvgSgAifKIQgSgnAAg3QAAg3ASgnQASgnAZAAQAYAAASAnQASAnAAA3QAAA3gSAnQgSAngYAAQgZAAgSgngADIKdIAAAAgAiNEYQgTgkAAgyQAAgzATgjQAUgkAbAAQAbAAAUAkQATAjAAAzQAAAygTAkQgUAkgbAAQgbAAgUgkgAlmgdQgwgjAAgyQAAgyAwgkQAwgiBFAAQBEAAAwAiQAwAkAAAyQAAAygwAjQgwAjhEgBQhFABgwgjgAg5keQj3gPi1iJQjJiYAAjYQAAjYDJiYQC1iJD3gOQAcgBAeAAQEcAADICYQDKCYAADYQAADYjKCYQjICZkcAAQgeAAgcgBg");
	var mask_8_graphics_101 = new cjs.Graphics().p("AgeDyQiGgHhig/QhshHAAhlQAAhjBshIQBig/CGgHIAegBQCaAABsBHQBtBIAABjQAABlhtBHQhsBHiaAAIgegBg");
	var mask_8_graphics_102 = new cjs.Graphics().p("AgrFPQi8gKiKhYQiZhiAAiLQAAiKCZhjQCKhXC8gJQAVgBAWgBQDZABCYBhQCaBjAACKQAACLiaBiQiYBjjZAAIgrgBg");
	var mask_8_graphics_103 = new cjs.Graphics().p("Ag4GrQjzgNiyhvQjFh+AAixQAAiwDFh+QCyhwDzgMIA5gBQEXAADFB9QDGB+AACwQAACxjGB+QjFB9kXAAIg5gBg");
	var mask_8_graphics_104 = new cjs.Graphics().p("AXxf5QkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAlAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQglAAgigCg");
	var mask_8_graphics_105 = new cjs.Graphics().p("AmvJ3Qg6gjAAgyQAAgyA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAyQAAAyg6AjQg6AjhSAAQhSAAg6gjgAhFF1QkpgPjaiIQjyiYAAjXQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADXjzCYQjxCZlWAAQgkAAgigCg");
	var mask_8_graphics_125 = new cjs.Graphics().p("AiqMRQgXgjAAgyQAAgzAXgkQAYgkAhAAQAhAAAXAkQAXAkAAAzQAAAygXAjQgXAkghAAQghAAgYgkgAmvHcQg6gkAAgyQAAgxA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAxQAAAyg6AkQg6AjhSAAQhSAAg6gjgAhFDaQkpgPjaiIQjyiXAAjYQAAjYDyiYQDaiJEpgOQAigCAkABQFWgBDxCZQDzCYAADYQAADYjzCXQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_130 = new cjs.Graphics().p("AjAPIQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqJYQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvEiQg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFAhQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_132 = new cjs.Graphics().p("AjAPIQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAC+OrQgcg1AAhKQAAhLAcg0QAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgoAAgcg0gAiqJYQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvEiQg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFAhQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_133 = new cjs.Graphics().p("AgXP8QgugbAAgmQAAgnAugcQAkgWAygEIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCIAAAHQAAAmgtAbQguAchAAAQhBAAgsgcgABXO1QAYAqAjABQAigBAYgqQALgSAGgXQASASACAWQgCgWgSgSQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyQADAyAVAlgAjAOfQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqIvQgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvD5Qg6gjAAgyQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAyg6AjQg6AkhSgBQhSABg6gkgAhFgHQkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_134 = new cjs.Graphics().p("AjdQlQg7gSAAgaQAAgZA7gSQA7gSBUAAIASAAQBIACA0AQQA5ARADAYQgDgYg5gRQg0gQhIgCQgJgPAAgRQAAgnAugbQAkgXAygEQADAzAVAlQAYAqAjAAQAiAAAYgqQALgTAGgWQgGAWgLATQgYAqgiAAQgjAAgYgqQgVglgDgzIAAgNQAAg7AYgqQAYgqAjAAQALAAALAFQAUAJAQAcQAZAqAAA7QAAAggIAcQAIgcAAggQAAg7gZgqQgQgcgUgJQAGglAQgeQAcg0AoAAQAoAAAcA0QAcA1AABKQAABLgcA0QgcA1goAAQgJAAgIgDQgCgWgSgRQASARACAWIAAAHQAAAmgtAcQggATgoAGIAAACQAAAag8ASQg7AShTAAQhUAAg7gSgAjAOAQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqIQQgXgjAAgzQAAgyAXgkQAYgkAhAAQAhAAAXAkQAXAkAAAyQAAAzgXAjQgXAkghAAQghAAgYgkgAmvDaQg6gjAAgyQAAgyA6gjQA6gjBSAAQBSAAA6AjQA6AjAAAyQAAAyg6AjQg6AkhSAAQhSAAg6gkgAhFgmQkpgPjaiIQjyiZAAjXQAAjYDyiZQDaiIEpgOQAigCAkAAQFWAADxCYQDzCZAADYQAADXjzCZQjxCYlWAAQgkAAgigBg");
	var mask_8_graphics_135 = new cjs.Graphics().p("AikSiQgYgsAAhAQAAhAAYguQAUglAagGQAGgCAHAAQAIAAAHADQgHgDgIAAQgHAAgGACQg6gEgtgOQg7gRAAgaQAAgZA7gTQA7gSBUAAIASABQgJgPAAgRQAAgnAugcQAkgWAygEQADAyAVAlQAYAqAjABQAigBAYgqQALgSAGgXQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCQgCgWgSgSQASASACAWIAAAHQAAAmgtAbQggAUgoAGIAAACQAAAag8ARQg7AShTABIgMAAQAZAHASAjQAZAuAABAQAABAgZAsQgYAugiAAQgjAAgYgugABAM0QA5ASADAYQgDgYg5gSQg0gQhIgBQBIABA0AQgAjALnQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqF3QgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvBBQg6gjAAgxQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAxg6AjQg6AkhSgBQhSABg6gkgAhFi/QkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_136 = new cjs.Graphics().p("AikSiQgYgsAAhAQAAhAAYguQALgVAOgLQgRAjAAAqQAABJAzA0QAcAcAiAMIgEAIQgYAugiAAQgjAAgYgugAgrSaQgigMgcgcQgzg0AAhJQAAgqARgjIAGgMQgxgFgngMQg7gRAAgaQAAgZA7gTQA7gSBUAAIASABQgJgPAAgRQAAgnAugcQAkgWAygEQADAyAVAlQAYAqAjABQAigBAYgqQALgSAGgXQgGAXgLASQgYAqgiABQgjgBgYgqQgVglgDgyIAAgNQAAg7AYgqQAYgqAjgBQALAAALAFQAUAKAQAcQAZAqAAA7QAAAggIAbQAIgbAAggQAAg7gZgqQgQgcgUgKQAGgkAQgeQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCIAAAHQAAAmgtAbQggAUgoAGIAAACIgBAGQALAIAKAKQA0A0AABJQAABJg0A0Qg0AzhJAAQggAAgegLgAhpN4QgQARgMATQAMgTAQgRQA0gzBIgBQA7ABAtAhQgtghg7gBQhIABg0AzgABAM0QA5ASADAYQgDgYg5gSQg0gQhIgBQBIABA0AQgADxL8QgCgWgSgSQASASACAWgAgrSaIAAAAgAjALnQgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqF3QgXgkAAgyQAAgzAXgjQAYgkAhAAQAhAAAXAkQAXAjAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvBBQg6gjAAgxQAAgyA6gkQA6giBSAAQBSAAA6AiQA6AkAAAyQAAAxg6AjQg6AkhSgBQhSABg6gkgAhFi/QkpgPjaiJQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigBg");
	var mask_8_graphics_137 = new cjs.Graphics().p("ACpSyQgbgsgLg3QgIgnAAgsQAAhdAjhGQgjBGAABdQAAAsAIAnQgwAohAAAQggAAgegLQgigNgcgcQgzgzAAhJQAAgqARgjIAGgNQgxgEgngMQg7gSAAgZQAAgaA7gSQA7gSBUAAIASAAQgJgPAAgRQAAgmAugcQAkgWAygEQADAyAVAlQAYAqAjAAQAiAAAYgqQALgTAGgWQgGAWgLATQgYAqgiAAQgjAAgYgqQgVglgDgyIAAgOQAAg7AYgqQAYgqAjAAQALAAALAFQAUAJAQAcQAZAqAAA7QAAAhgIAbQAIgbAAghQAAg7gZgqQgQgcgUgJQAGglAQgdQAcg1AoAAQAoAAAcA1QAcA0AABLQAABKgcA1QgcA0goAAQgJAAgIgCIAAAGQAAAngtAbQggATgoAGIAAADIgBAGQALAIAKAKIAOAPIALgUQAuhMBBAAQBBAAAtBMQAuBMAABrQAABrguBLQgtBMhBAAQhBAAguhMgAhpNKQgQAQgMATQAMgTAQgQQA0g0BIAAQA7AAAtAiQgtgig7AAQhIAAg0A0gABAMGQA5ARADAYQgDgYg5gRQg0gQhIgCQBIACA0AQgADxLOQgCgWgSgSQASASACAWgAikR0QgYgtAAhAQAAhAAYgtQALgVAOgLQgRAjAAAqQAABJAzAzQAcAcAiANIgEAIQgYAugiAAQgjAAgYgugAgrRsIAAAAgAjAK5QgVgnAAg3QAAg3AVgnQAWgnAeAAQAeAAAVAnQAWAnAAA3QAAA3gWAnQgVAngeAAQgeAAgWgngAiqFJQgXgkAAgyQAAgzAXgkQAYgjAhAAQAhAAAXAjQAXAkAAAzQAAAygXAkQgXAkghAAQghAAgYgkgAmvATQg6giAAgyQAAgyA6gkQA6gjBSAAQBSAAA6AjQA6AkAAAyQAAAyg6AiQg6AjhSAAQhSAAg6gjgAhFjuQkpgPjaiIQjyiYAAjYQAAjYDyiYQDaiJEpgOQAigBAkAAQFWAADxCYQDzCYAADYQAADYjzCYQjxCZlWAAQgkAAgigCg");
	var mask_8_graphics_138 = new cjs.Graphics().p("AjbUHQg4goAAg4QAAg5A4goQAggXAogJQAegIAjAAIAFAAIgKgLQgrg0AAhJQAAgqAPgjIAFgMQAJgTAOgRQArgzA8gBQAxABAlAhQglghgxgBQg8ABgrAzQgOARgJATQgpgFghgMQgxgRAAgaQAAgZAxgTQAygSBFAAIAPABQgHgPAAgRQAAgnAmgcQAegWApgEQADAyARAlQAUAqAdABQAdgBAUgqQAJgTAFgVQgFAVgJATQgUAqgdABQgdgBgUgqQgRglgDgyIAAgNQAAg7AUgqQAUgqAdgBQAKAAAIAGQARAIAOAdQAUAqAAA7QAAAggGAcQAGgcAAggQAAg7gUgqQgOgdgRgIQAGgmANgdQAXg1AhAAQAiAAAXA1QAXA0AABLQAABKgXA1QgXA0giAAQgHAAgHgCQgCgWgOgRQAOARACAWIAAAHQAAAmglAbQgbATghAHQgDgYgvgSQgrgQg8gBQA8ABArAQQAvASADAYIAAACIgBAGQAJAIAIAKQAHAIAFAIIAJgVQAmhMA2ABQA2gBAmBMQAmBMAABrQAABrgmBMQgmBLg2AAQg2AAgmhLQgWgsgJg3QgHgoAAgsQAAhdAdhFQgdBFAABdQAAAsAHAoQgbAbgiAJIAFADQA4AoAAA5QAAA4g4AoQg4AohPAAQhQAAg5gogAAwRDQg0gkhJgBQBJABA0AkgAicPXQAAhAAUguQAJgVAMgLQgPAjAAAqQAABJArA0IAKALIgFAAQgjAAgeAIQgJgkAAgrgABtQfIAAAAgAhNQeIAAAAgABnL/IAAAAgAifKIQgSgnAAg3QAAg3ASgnQASgnAZAAQAYAAASAnQASAnAAA3QAAA3gSAnQgSAngYAAQgZAAgSgngAiNEYQgTgkAAgyQAAgzATgjQAUgkAbAAQAbAAAUAkQATAjAAAzQAAAygTAkQgUAkgbAAQgbAAgUgkgAlmgdQgwgjAAgyQAAgyAwgkQAwgiBFAAQBEAAAwAiQAwAkAAAyQAAAygwAjQgwAjhEgBQhFABgwgjgAg5keQj3gPi1iJQjJiYAAjYQAAjYDJiYQC1iJD3gOQAcgBAeAAQEcAADICYQDKCYAADYQAADYjKCYQjICZkcAAQgeAAgcgBg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_8_graphics_31,x:407.4,y:334.075}).wait(1).to({graphics:mask_8_graphics_32,x:405.225,y:341.55}).wait(1).to({graphics:mask_8_graphics_33,x:403.05,y:349.025}).wait(1).to({graphics:mask_8_graphics_34,x:241.775,y:204.2828}).wait(1).to({graphics:mask_8_graphics_35,x:400.875,y:371.075}).wait(20).to({graphics:mask_8_graphics_55,x:400.875,y:386.6}).wait(5).to({graphics:mask_8_graphics_60,x:400.875,y:405.15}).wait(2).to({graphics:mask_8_graphics_62,x:400.875,y:405.15}).wait(1).to({graphics:mask_8_graphics_63,x:400.875,y:409.25}).wait(1).to({graphics:mask_8_graphics_64,x:400.875,y:412.325}).wait(1).to({graphics:mask_8_graphics_65,x:400.875,y:427.65}).wait(1).to({graphics:mask_8_graphics_66,x:400.875,y:427.65}).wait(1).to({graphics:mask_8_graphics_67,x:400.875,y:432.275}).wait(1).to({graphics:mask_8_graphics_68,x:400.925,y:437.15}).wait(2).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_8_graphics_101,x:407.4,y:334.075}).wait(1).to({graphics:mask_8_graphics_102,x:405.225,y:341.55}).wait(1).to({graphics:mask_8_graphics_103,x:403.05,y:349.025}).wait(1).to({graphics:mask_8_graphics_104,x:241.775,y:204.2828}).wait(1).to({graphics:mask_8_graphics_105,x:400.875,y:371.075}).wait(20).to({graphics:mask_8_graphics_125,x:400.875,y:386.6}).wait(5).to({graphics:mask_8_graphics_130,x:400.875,y:405.15}).wait(2).to({graphics:mask_8_graphics_132,x:400.875,y:405.15}).wait(1).to({graphics:mask_8_graphics_133,x:400.875,y:409.25}).wait(1).to({graphics:mask_8_graphics_134,x:400.875,y:412.325}).wait(1).to({graphics:mask_8_graphics_135,x:400.875,y:427.65}).wait(1).to({graphics:mask_8_graphics_136,x:400.875,y:427.65}).wait(1).to({graphics:mask_8_graphics_137,x:400.875,y:432.275}).wait(1).to({graphics:mask_8_graphics_138,x:400.925,y:437.15}).wait(2));

	// 春
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332F1F").s().p("AitUWQAqhDBAgrQhWAUhTgcQAnBqhTArQhngOg2iuQgwiWACjgQABjUApicQAtinBBgCQg0BYgUBmQAqh0BJh1IAkAVQgLgEAWBEQAcBUgRhEQD8hlCUgPQD/gbBcCuQAXAuAjAdQAkAfAsALQBhgMA+gNQgfAPgeAIQA6gCAygjQgKAGglAIIAfgSQA0ghimhoQhHguiGhFQizhYi3giQisgfjWAKQjPFxjeDNQlNE0lJhkQgmAag7hUQg5hRAHguQAQhhB3hnQBThICHhHQBFgkCrhNQgKAFBFgXQjWBSikBpQi7B4g9BzQgPAcAGAtQAFAsAWAnQAXAqAgASQAkAUAlgTQDahtAOgIQB7hEBXhSQECjyCRjpQhtANigA2QBvgqhGALQDrgtAWgmQi1A+gzANQiNAkhngUIgDgBIgwgTQg7gYAQgLQBYBPCXgbQA0gJBLgaIB2gnQjNA5hogDQingIhXiKQAqAgA2gIQg3gJA7gPQJuADBIkIQhRADhhgKQibgQAGgrQBhA/B2gIQhfgPgygSQhNgdgng4QASgBBtABQBUAAAygHQCZgYAVh4QhZAMhqgRQg4gJiAghQAbgRBKgbICHgwQCrhCAFg9IgDjSQgEjIADgIIgBgLQgEgFACgHQAAgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQgBhXAwgCQCAgPBcDTQAkBQAUBcQASBUgDAxQAegGBBgHQBQgHA5ADQCmAKh7BkQgtAlg/AbIhnAoQh1AvgpBjQAygMBBAEQBEADArASQAyAWgBAjQgCAohIA2QgrAgg3AJQgOADhMAFQg0AEgcAPQgnAWgaA1QDbgvDpgOQDzgODWAWQIFA3j0CMQhJArhzACQhVADiLgXQicgbhMgKQiCgShTAJQiSAIhdANQitAYggA8QDMgeDuAQQD+ARDjBCQD7BKCxB7QDFCLBWC8QAuBmhpAMQhTAKi+gvQhNgTj7hKQizg1gtgBQAsDOgVD0QgbE2iHBkQhCAxhMhGQgWgUglgtQglgtgQgOQgugpilCDQg9Awg4A4Qg0AzgMAWQADhGAthGgAg4STQhLAVhJgOQBMAbBIgigACMMcQheBkhZA2QAZgIBGgIQBNgKAhgIQB7gggnhlIAei1QgkBYhkBqgAjfKVQgMC5gBA+QB2grAogWQBVgtAlhBIgEABQALgKAAgMQiGAwhNgeQhagjBCiHQAAAdBCgJQAjgEBwgaQBsgZAxgEQBNgHAQAfQgXhOAahLQAFgHAFgNQgJgXgNgTQg7gUjRAvQjKAzgQgBQACBmgJCYgA0AMJQBlgeBVguQBagxBUhBQiJBdjfBhgAA5LGIgEAKIAKgCIACgEQgFgEgCAAIgBAAgAmuIFQgHAYgCASQAHghAMgpIgKAggALzHSQgOgGhbgJQhagIABAFQBiAABgASIAAAAgALxG2IhaADIgIgBIgaACIAigBQAqAJAwgMgAExGkQgCgfgJgZQADgTgRgLQgVgigogNQAdANAWAeIAKAEQAJAPAFAPIgCAIQAJAYAEAYIAAAAgAqcFUQgfAfgOAbQAzg1Avg5QgQARglAjgAh2F5QgxAQgogBQAVARBEgggAgOFLQBMgjBSgQIADAAQhHAGhaAtgAKWDEQgogZgygbQiJhKiKgfICZA1QBuAuBmA6IAAAAgADgAOQBtASBnApQgpgUhYgcQhrgihhgVQkTg5gvBWQAcgDC8ABQCdABgDgGgAnmgNQArgEAlgVQiRAeBBgFgAPlh2QAkgDAYgNQgdALgfAFgAjBp/IgTBjQAihqgIAAQgCAAgFAHgAkzqZQhkABAPADQAdAGBJACQBUACACgPIhnABgAipxFQAFCWgEBLQAvgLgTipQgfjKgGhFIAIDigAjUVcQgGAngBABQgEgNALgbgAjWLXQAOANAxAKQAyAJAzgBQg7AMgmAAQhHAAAEgrgAAoLeQgXAVhDADQAygLAogNgAlIDgQABABAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQgEgHAEgCgAlHDXQgEgHAEgBQAHAMgFADQABgBgDgGgAvhAFQgFgBgDgEQACgCAEADQAFAEACAAIgFAAgAv4gJQgLgBgBgGQAdgDgGAOQAAgEgLAAgABsgJQAPgIAFADQgCgBgHAFQgEACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgACGgKQAAgEAFACQAGACABgBIgEACIgCAAQgDAAgDgBgApemxQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABABQABAAAAAAQABAAAAAAQABAAAAAAIgEABIgBABQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAgApvm1QAUgJgFAKIgFABIgKgCgAi81eQgGgHADgFQALAOAAAJQAAgDgIgIg");
	this.shape_9.setTransform(402.7427,425.3502);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#332F1F").s().p("AitUWQAqhDBAgrQhWAUhTgcQAnBqhTArQhngOg2iuQgwiWACjgQABjUApicQAtinBBgCQg0BYgUBmQAqh0BJh1IAkAVQgLgEAWBEQAcBUgRhEQD8hlCUgPQD/gbBcCuQAXAuAjAdQAkAfAsALIgaACIAigBIgIgBQBhgMA+gNIAfgSQA0ghimhoQhHguiGhFQizhYi3giQisgfjWAKQjPFxjeDNQlNE0lJhkQgmAag7hUQg5hRAHguQAQhhB3hnQBThICHhHQBFgkCrhNQgKAFBFgXQjWBSikBpQi7B4g9BzQgPAcAGAtQAFAsAWAnQAXAqAgASQAkAUAlgTQDahtAOgIQB7hEBXhSQECjyCRjpQhtANigA2QBvgqhGALQDrgtAWgmQi1A+gzANQiNAkhngUIgDgBIgwgTQg7gYAQgLQBYBPCXgbQA0gJBLgaIB2gnQjNA5hogDQingIhXiKQAqAgA2gIQg3gJA7gPQJuADBIkIQhRADhhgKQibgQAGgrQBhA/B2gIQhfgPgygSQhNgdgng4QASgBBtABQBUAAAygHQCZgYAVh4QhZAMhqgRQg4gJiAghQAbgRBKgbICHgwQCrhCAFg9IgDjSQgEjIADgIIgBgLQgEgFACgHQAAgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQgBhXAwgCQCAgPBcDTQAkBQAUBcQASBUgDAxQAegGBBgHQBQgHA5ADQCmAKh7BkQgtAlg/AbIhnAoQh1AvgpBjQAygMBBAEQBEADArASQAyAWgBAjQgCAohIA2QgrAgg3AJQgOADhMAFQg0AEgcAPQgnAWgaA1QDbgvDpgOQDzgODWAWQIFA3j0CMQhJArhzACQhVADiLgXQicgbhMgKQiCgShTAJQiSAIhdANQitAYggA8QDMgeDuAQQD+ARDjBCQD7BKCxB7QDFCLBWC8QAuBmhpAMQhTAKi+gvQhNgTj7hKQizg1gtgBQAsDOgVD0QgbE2iHBkQhCAxhMhGQgWgUglgtQglgtgQgOQgugpilCDQg9Awg4A4Qg0AzgMAWQADhGAthGgAg4STQhLAVhJgOQBMAbBIgigACMMcQheBkhZA2QAZgIBGgIQBNgKAhgIQB7gggnhlIAei1QgkBYhkBqgAjfKVQgMC5gBA+QB2grAogWQBVgtAlhBIgEABQALgKAAgMQiGAwhNgeQhagjBCiHQAAAdBCgJQAjgEBwgaQBsgZAxgEQBNgHAQAfQgXhOAahLQAFgHAFgNQgJgXgNgTQg7gUjRAvQjKAzgQgBQACBmgJCYgA0AMJQBlgeBVguQBagxBUhBQiJBdjfBhgAA5LGIgEAKIAKgCIACgEQgFgEgCAAIgBAAgAmuIFQgHAYgCASQAHghAMgpIgKAggALzHSQgOgGhbgJQhagIABAFQBiAABgASIAAAAgAMuGfQgfAPgeAIIhaADQAqAJAwgMQA6gCAygjQgKAGglAIgAExGkQgCgfgJgZQADgTgRgLQgVgigogNQAdANAWAeIAKAEQAJAPAFAPIgCAIQAJAYAEAYIAAAAgAqcFUQgfAfgOAbQAzg1Avg5QgQARglAjgAh2F5QgxAQgogBQAVARBEgggAgOFLQBMgjBSgQIADAAQhHAGhaAtgAKWDEQgogZgygbQiJhKiKgfICZA1QBuAuBmA6IAAAAgADgAOQBtASBnApQgpgUhYgcQhrgihhgVQkTg5gvBWQAcgDC8ABQCdABgDgGgAnmgNQArgEAlgVQiRAeBBgFgAPlh2QAkgDAYgNQgdALgfAFgAjBp/IgTBjQAihqgIAAQgCAAgFAHgAkzqZQhkABAPADQAdAGBJACQBUACACgPIhnABgAipxFQAFCWgEBLQAvgLgTipQgfjKgGhFIAIDigAjUVcQgGAngBABQgEgNALgbgAjWLXQAOANAxAKQAyAJAzgBQg7AMgmAAQhHAAAEgrgAAoLeQgXAVhDADQAygLAogNgAlIDgQABABAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQgEgHAEgCgAlHDXQgEgHAEgBQAHAMgFADQABgBgDgGgAvhAFQgFgBgDgEQACgCAEADQAFAEACAAIgFAAgAv4gJQgLgBgBgGQAdgDgGAOQAAgEgLAAgABsgJQAPgIAFADQgCgBgHAFQgEACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgACGgKQAAgEAFACQAGACABgBIgEACIgCAAQgDAAgDgBgApemxQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABABQABAAAAAAQABAAAAAAQABAAAAAAIgEABIgBABQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAgApvm1QAUgJgFAKIgFABIgKgCgAi81eQgGgHADgFQALAOAAAJQAAgDgIgIg");
	this.shape_10.setTransform(402.7427,425.3502);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},31).to({state:[]},39).to({state:[{t:this.shape_10}]},31).wait(39));

	// 圖層_14
	this.instance = new lib.小動燈();
	this.instance.setTransform(84,138.05,1,1,0,0,0,-26.3,-15.8);

	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(274,211,1,1,0,0,0,41,-57.8);

	this.instance_2 = new lib.大動燈();
	this.instance_2.setTransform(132.05,344.05,1,1,0,0,0,135.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(70));

	// 底稿顏色
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_11.setTransform(279.925,288.05);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(70).to({_off:false},0).wait(70));

	// 底稿顏色
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_12.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(139));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,268.8,280.4,332.09999999999997);
// library properties:
lib.properties = {
	id: '676C7ED84E87BE40879ECE70015443CA',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/未燈籠_atlas_1.png", id:"未燈籠_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['676C7ED84E87BE40879ECE70015443CA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;