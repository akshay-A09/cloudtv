<!DOCTYPE html>
<html lang="en">
<head>
<title>News | Resources - Cloud Tv</title>
<?php include '../head.php'?>
</head>

<body>



<div class="gradient">
<div class="gradient1"></div>
<div class="gradient2"></div>
<div class="gradient3"></div>
<div class="gradient4"></div>
<div class="gradient5"></div>
<div class="gradient6"></div>
<div class="gradient7"></div>
<div class="gradient8"></div>
<div class="gradient9"></div>
<div class="gradient10"></div>
</div>

<div class="coverAJ">
<?php include '../header.php'?> 


<div class="dfTopSpace"></div>

<div class="goback"><div class="container"><a href="javascript:history.back()"><i class="fas fa-long-arrow-left"></i> back to careers</a></div></div>



<!-- S1 -->
<section class="careerDS1 gradientS1"><div class="container h-100">

<div class="carinfo">

<div class="carinfo-l">
<h6 class="carinfo-shd">IT Department </h6>
<h2 class="carinfo-hd">Android <br>developer </h2>
<div class="sm-btn pr" ><a href="#apply-now" class="btn09 apply-now-btn"><span>Apply now</span></a></div>
</div>

<div class="carinfo-r">
<h6 class="carinfo-shd">IT Department </h6>
<p>Cloud TV is seeking an enthusiastic Android Developer with strong knowledge of Android SDK, and different versions of Android. Someone who can independently develop android apps, who is a learner, loves solving coding challenges and gives top-most priority to releasing a bug-free quality product will be the ideal candidate.</p>

<div class="dspace"></div>

<h6 class="carinfo-shd">Role & responsibilities </h6>
<p>Your primary focus will be the development of Android applications and their integration with back-end services. You will be working alongside other engineers and developers working on different layers of the infrastructure. Therefore, commitment to collaborative problem-solving, sophisticated design, and creating quality products is essential.</p>

<div class="dspace"></div>

<h6 class="carinfo-shd">technical requirement </h6>
<ul>
<li>Kotlin preferred</li>
<li>Retrofit2 with RX java/android</li>
<li>Secured network connection - https/token based/session based</li>
<li>Standard android coding conventions, clean code with comments</li>
<li>REST API calls</li>
<li>Good at database handling</li>
<li>REST, JSON, Protobuf</li>
<li>Knowledge of git, CI/CD</li>
<li>Knowledge in debugging and memory leak issues. </li>
</ul>

<div class="dspace"></div>

<h6 class="carinfo-shd">educational requirement </h6>
<ul><li>B.E. or M.Tech in Engineering (Computer Science is preferred).</li></ul>

<div class="dspace"></div>

<h6 class="carinfo-shd">other requirement </h6>
<ul>
<li>2+ Years of Job Experience in building professional-level Android Applications in Java.</li>
<li>Knows how to work in Agile / Scrum systems.</li>
<li>Worked alongside a professional team.</li>
<li>Eager to take up more responsibility from senior leadership.</li>
<li>Has long-term career goals and is ready for accelerated growth</li>
</ul>

<div class="dspace"></div>

<!-- form -->
<div id="apply-now" class="frmcall frm09">

<div class="frmcall-row">
<form id="" action="#" method="post" placeholder="Full Name">
<div class="form-group"><label>Full Name</label><input class="form-control" placeholder="Full Name" type="text" name="name"></div>
<div class="form-group"><label>Email</label><input class="form-control" placeholder="Enter Email" type="text" name="name"></div>
<div class="form-group"><label>Message</label>
<textarea type="name" class="form-control" placeholder="Message"></textarea></div>
<div class="form-group"><label>Resume</label>
<div class="file-upload">
<div class="file-upload-select"><div class="file-select-button" >Upload Resume</div>
<div class="file-select-name">No file chosen... <i class="fas fa-paperclip"></i></div> 
<input type="file" name="file-upload-input" id="file-upload-input">
</div></div>

</div>

<div class="form-group"><a href="#" class="btn09"><span> Submit</span></a></div>



</form>
<div class="formid-response"></div>
</div>

</div>
<!-- form end -->


</div>

</div>

</div></section>
<!-- S1 End-->



<?php include '../footer.php'?> 
</div>


<script>

// Quick SLider
jQuery('.slick-quick').slick({
dots: false,
arrows: true,
infinite: false,
autoplay: false,
autoplaySpeed: 2000,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{breakpoint: 862,
settings: {slidesToShow: 1,}
},]});
// Quick SLider End

// File Upload
let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function() {
	fileInput.click();
}
fileInput.onchange = function() {
	let filename = fileInput.files[0].name;
	let selectName = document.getElementsByClassName("file-select-name")[0];
	selectName.innerText = filename;
}
// File Upload End

 
jQuery(".apply-now-btn").click(function(e) {
    e.preventDefault();
    jQuery('html, body').animate({
        scrollTop: $("#apply-now").offset().top-100
    }, 2000);
});



</script>

</body>
</html>