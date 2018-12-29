<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<title>API</title>

	<link href="https://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet">
	<link rel="stylesheet" href="css/theme.css">
	<!-- include vue -->
	<script src="//unpkg.com/vue"></script>
	<!-- axios -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js"></script>
	<script type="text/javascript" src="js/vue.js" async></script>
</head>

<body>
	<header>
	</header>
	<main>
		<div id="get_lights">
			<h1>Lights</h1>

			<section v-if="errored">
				<p>
					Erreur: Les ressources n'ont pas pu être téléchargées. Réessayez ultérieurement.
				</p>
			</section>

			<section v-else>
				<div v-if="loading">
					Loading...
				</div>
				<div v-else>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>LEVEL</th>
								<th>STATUS</th>
								<th>ROOMID</th>
								<th>SWITCH</th>
							</tr>
						</thead>
						<tbody>

							<tr v-for="light in lights">
								<td>{{light.id}}</td>
								<td>{{light.level}}</td>
								<td>{{light.status}}</td>
								<td>{{light.roomId}}</td>
								<td>
									<button @click="light_switch(light.id);" >
										SWITCH
									</button>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<input type="number" v-model="new_level"/>
								</td>
								<td>
									<select v-model="new_status">
										<option value="ON">ON</option>
										<option value="OFF">OFF</option>
									</select>
								</td>
								<td>
									<input type="number" v-model="new_roomId"/>
								</td>
								<td>
									<button @click="new_light();" >
										NEW_LIGHT
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	</main>
</body>
</html>
