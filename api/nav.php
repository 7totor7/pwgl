<!DOCTYPE html>
<html>
<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
<div class="container">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
		<i class="fa fa-bars"></i>
		</button>
		<a class="navbar-brand page-scroll" href="index.php">
		Viae Humani </a>
	</div>
	<!-- Collect the nav links, forms, and other content for toggling -->
	<div class="collapse navbar-collapse navbar-right navbar-main-collapse">
		<ul class="nav navbar-nav">
			<li>
			<a id="index" class="" href="index.php"><?php echo $nav_home;?></a>
			</li>
			<li>
			<a id="le_projet" class="" href="le_projet.php"><?php echo $nav_project;?></a>
			</li>
			<li>
			<a id="journal_de_bord" class="" href="journal_de_bord.php"><?php echo $nav_journal;?></a>
			</li>
			<li>
			<a id="science" class="" href="science.php"><?php echo $nav_science;?></a>
			</li>
			<li>
			<a id="qui_sommes_nous" class="" href="qui_sommes_nous.php"><?php echo $nav_presentation;?></a>
			</li>
			<li>
				<a id="contact" class="" href="contact.php"><?php echo $nav_contact;?></a>
			</li>
		</ul>
	</div>
	<!-- /.navbar-collapse -->
</div>
<!-- /.container -->
</nav>
</html>