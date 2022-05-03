// 动态加载 Script
function loadScript(url, callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
				script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
/*
 * 获取链接的 map 参数
 * map 参数值为地图的路径，所有文件路径参考 https://img.hcharts.cn/mapdata/index.html
 */
function getMapName(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
		r = window.location.search.substr(1).match(reg),
		defaultMap = {
			path: 'custom/world',
			name: 'World, Miller projection, medium resolution',
			chineseName: '世界地图（米勒投影，中分辨率）'
		};
	if(r!==null) {
		var path = unescape(r[2]);
		for(var key in Highcharts.mapsInfo) {
			if(Highcharts.mapsInfo[key][path]) {
				return {
					path: path,
					name: Highcharts.mapsInfo[key][path].name,
					cname: Highcharts.mapsInfo[key][path].chineseName || ''
				};
			}
		}
	}
	return defaultMap;
}
// 地图路径，参考 https://img.hcharts.cn/mapdata/index.html
var map = getMapName('map'),
	url = '//img.hcharts.cn/mapdata/' + map.path + '.js';
/*
 * console.log(map)
 */
// 动态加载地图数据文件并生成图表。
loadScript(url, function(){
	// 生成随机数据
	var mapdata = Highcharts.maps[map.path],
		data = [];
	Highcharts.each(mapdata.features, function(md, index) {
		data.push({
			'hc-key': md.properties['hc-key'],
			value: Math.floor((Math.random()*100)+1)  // 生成 1 ~ 100 随机值
		});
	});
	// 初始化图表
	$('#container').highcharts('Map', {
		title : {
			text : map.cname || map.name
		},
		subtitle : {
			text : '地图数据： <a href="https://img.hcharts.cn/mapdata/index.html">'+map.name + '</a>'
		},
		mapNavigation: {
			enabled: true,
			buttonOptions: {
				verticalAlign: 'bottom'
			}
		},
		colorAxis: {
			min: 0,
			stops: [
				[0, '#EFEFFF'],
				[0.5, Highcharts.getOptions().colors[0]],
				[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
			]
		},
		series : [{
			data : data,
			mapData: mapdata,
			joinBy: 'hc-key',
			name: '随机数据',
			states: {
				hover: {
					color: '#a4edba'
				}
			},
			dataLabels: {
				enabled: false,
				format: '{point.name}'
			}
		}]
	});
});