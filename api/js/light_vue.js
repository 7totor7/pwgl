
// var url = "http://192.168.1.131/api/c1MUJXgFxEdSIBQF6VEE2CM4sSPCCH6jSfP7FSYW/lights/"
// var url = "http://faircorp-nestor-hdlt.cleverapps.io/api/lights/";
var url = "http://localhost:8080/api/subscribe/"

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
			console.log(this.lights)
		})
		.catch(error => {
			console.log(error);
			this.errored = true
		})
		.finally(() => {
			// console.log(this.loading);
			this.loading = false;
			// console.log(this.loading)
		})
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
			// var put_url = url + light_id + "/state"
			let light_switch = await axios
			.put(put_url,'{"on":true}')
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



// GET,PU,POST AVEC Vue.Js

// var vm_get_ligths = new Vue({
// 	el: '#get_lights',
// 	data () {
// 		return {
// 			lights: null,
// 			loading: true,
// 			errored: false,
// 			new_level: null,
// 			new_status: null,
// 			new_roomId: null
// 		}
// 	},
// 	mounted () {
// 		axios
// 		.get(url)
// 		.then(response => {
// 			this.lights = response.data;
// 		})
// 		.catch(error => {
// 			console.log(error)
// 			this.errored = true
// 		})
// 		.finally(() => this.loading = false)
// 	},
// 	methods: {
// 		get: function(){
// 		axios
// 		.get(url)
// 		.then(response => {
// 			this.lights = response.data;
// 		})
// 		.catch(error => {
// 			console.log(error)
// 			this.errored = true
// 		})
// 		.finally(() => this.loading = false)
// 		},
// 		light_switch: async function(light_id){
// 			this.light_id = light_id;
// 			// var put_url = url + light_id + "/switch";
// 			var put_url = url + light_id + "/state"
// 			let light_switch = await axios
// 			.put(put_url,'{"on":true}')
// 			.then(response => {
// 				this.get();
// 			})
// 			.catch(error => {
// 				console.log(error);
// 				this.errored = true
// 			});
// 		},
		
// 		new_light: async function(){
// 			let new_light = await axios
// 			.post(url,{"level": this.new_level, "status": this.new_status, "roomId": this.new_roomId})
// 			.then(response => {
// 				this.response = (response.data);
// 				console.log(response);
// 			})
// 			.catch(error => {
// 				console.log(error);
// 				this.errored = true
// 			});

// 			axios
// 			.get(url)
// 			.then(response => {
// 				this.lights = response.data;
// 			})
// 			.catch(error => {
// 				console.log(error);
// 				this.errored = true
// 			})
// 			.finally(() => this.loading = false)
// 		}
// 	}
// });

