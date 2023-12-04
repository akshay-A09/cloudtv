<!DOCTYPE html>
<html lang="en">
<head>
<title>404 - Cloud Tv</title>
<?php include 'head.php'?>
</head>


<body class="error404">
<div class="coverAJ abt-colorA">
<?php include 'header.php'?> 
<div>
<div class="e404"><div class="e404_min">
<div class="intv">
<div class="intv-s1"><img src="assets/images/tv/tvheader.webp"></div>
<div class="e404_cont"><div class="e404_cont_t">
<h1>404</h1>
<h3>Page Not Found</h3>
<p>The page you are looking for might have been removed or<br> had its name changed or is temporarily unavailable.</p>
<div class="btn09-row"><a href="<?php echo $base_url; ?>" class="btn09" target=""><span>go to homepage</span></a></div>
</div></div>
</div></div>
</div></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<!-- GSAP -->

<script  src="<?php echo $base_url; ?>assets/js/globals.js"></script>
<script>
    const box = document.querySelector('.intv');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Calculate the rotation angles based on mouse position
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 50;
  const rotateY = (x - centerX) / 50;

  // Apply the rotation to the box
  box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(150px)`;
});

</script>


</body>
</html>