
var url = "http://faircorp-nestor-hdlt.cleverapps.io/api/lights/";

// GET AVEC Vue.Js

var vm_get_ligths = new Vue({
	el: '#get_lights',
	data () {
		return {
			lights: null,
			loading: true,
			errored: false,
			new_level: null,
			new_status: null,
			new_roomId: null
		}
	},
	mounted () {
		axios
		.get(url)
		.then(response => {
			this.lights = response.data;
		})
		.catch(error => {
			console.log(error)
			this.errored = true
		})
		.finally(() => this.loading = false)
	},
	methods: {
		get: function(){
		axios
		.get(url)
		.then(response => {
			this.lights = response.data;
		})
		.catch(error => {
			console.log(error)
			this.errored = true
		})
		.finally(() => this.loading = false)
		},
		light_switch: async function(light_id){
			this.light_id = light_id;
			var put_url = url + light_id + "/switch";
			let light_switch = await axios
			.put(put_url)
			.then(response => {
				this.get();
			})
			.catch(error => {
				console.log(error);
				this.errored = true
			});
		},
		
		new_light: async function(){
			let new_light = await axios
			.post(url,{"level": this.new_level, "status": this.new_status, "roomId": this.new_roomId})
			.then(response => {
				this.response = (response.data);
				console.log(response);
			})
			.catch(error => {
				console.log(error);
				this.errored = true
			});

			axios
			.get(url)
			.then(response => {
				this.lights = response.data;
			})
			.catch(error => {
				console.log(error);
				this.errored = true
			})
			.finally(() => this.loading = false)
		}
	}
});

// SANS vue.js
// POST
// function post(){
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () { 
//     //console.log(xhr.status);
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var json = JSON.parse(xhr.responseText);
//       console.log(json.level + ", " + json.status + ", " + json.roomId)
//     }
//   }
//   var data = JSON.stringify({"level":21, "status": "ON", "roomId":-10});
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.send(data);
// }

// // //PUT
// function put(){

// 	var xhr_put = new XMLHttpRequest();
// 	xhr_put.onreadystatechange = function() {
// 		console.log(xhr_put.status);
// 		if (xhr_put.readyState == XMLHttpRequest.DONE && xhr_put.status==200) {
// 			alert(xhr_put.responseText);
// 		}
// 	}
// 	xhr_put.open('PUT', put_url, true);
// 	xhr_put.send(null);

// }

// // //GET
// function get(){
// 	var xhr_get = new XMLHttpRequest();
// 	xhr_get.onreadystatechange = function() {
// 		if (xhr_get.readyState == XMLHttpRequest.DONE) {
// 			var response = xhr_get.responseText;
// 			response = JSON.parse(response);
// 			alert(response[0].id);
// 		}
// 	}
// 	xhr_get.open('GET', url, true);
// 	xhr_get.send(null);
// }