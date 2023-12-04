<!-- Footer -->
<footer><div>

<div class="ft-s1"><div class="container-min">
<div class="ft-s1-l"><a href="index.php"><img alt="Cloud Tv" loading="lazy" decoding="async" data-nimg="1" style="color:transparent" src="<?php echo $base_url; ?>assets/images/cloudtv.svg" ></a></div>

<div class="ft-s1-r">
<a href="https://in.linkedin.com/company/cloudtvos" target="_blank"><i class="fab fa-linkedin-in"></i></a>
<a href="https://www.instagram.com/cloudtvos/" target="_blank"><i class="fab fa-instagram"></i></a>
<!-- <a href="#" target="_blank"><i class="fab fa-twitter"></i></a> -->
<a href="https://www.facebook.com/CloudTVOfficial/" target="_blank"><i class="fab fa-facebook-f"></i></a>
</div>
<div class="clearfix"></div></div></div>

<div class="ft-s2"><div class="container-min">


<div class="ftnav-links">
<ul class="afline">
<li><a href="<?php echo $base_url; ?>index">Home</a></li>
<li><a href="<?php echo $base_url; ?>about">About</a></li>
<li><a href="<?php echo $base_url; ?>manufacturers">Manufacturers</a></li>
<li><a href="<?php echo $base_url; ?>applications">Applications</a></li>
</ul>

<ul class="afline">
<li><a href="<?php echo $base_url; ?>resources/news">Resources</a></li>
<li><a href="<?php echo $base_url; ?>career/">Career</a></li>
<li><a href="<?php echo $base_url; ?>contact-us">Contact Us</a></li>
<li><a href="#Disclaimer" data-fancybox>Disclaimer</a></li>
</ul>

<ul class="afline">
<li><a href="<?php echo $base_url; ?>privacy/">Privacy Policy</a></li>
<li><a href="<?php echo $base_url; ?>voice/">Voice Terms of Use</a></li>
<li><a href="<?php echo $base_url; ?>terms/">Terms Of Service </a></li>
</ul>
</div>


<div class="ft-sub"><h4>Subscribe to our newsletter</h4>
<div class="newsletter-frm">
<form id="newsletter" action="api/newsletterApi.php" enctype="multipart/form-data" method="post">
<div class="sub-input">
<input class="form-control" placeholder="Your Email Address*" type="text" name="newsletter_email">
</div>
<div class="sub-button">
<button class="form-control" id="newsletter-submit" type="submit">Subscribe</button>
</div>
</form>
</div>
<div style="display:none;" class="newsletter-frm_thanks thanks_msg">
<h3>Thank you for subscribing.</h3>
</div>

<div class="copyrt"><span>© 2023 Cloud TV OS. All Rights Reserved </span></div>

</div>
<div class="clearfix"></div></div><div class="clearfix"></div> </div></div>


<!-- <div class="btmfooter afline "><div class="container-min">
<div class="detaleft"><span><a href="#Disclaimer" data-fancybox>Disclaimer</a></span>
<span><a href="privacy-policy.php">Privacy Policy</a></span>  

</div>
<div class="detaright"><span>© 2023 Cloud TV OS. All Rights Reserved </span> 
 <span><a href="https://www.agency09.in" target="_blank">AGENCY<b>09</b></a></span>
</div>
<div class="clearfix"></div>
</div></div> -->

</footer>
<!-- Footer End -->


<div class="fancybox09 fancybox09_s1" id="Disclaimer">
<h2>Disclaimer</h2>
<p>All 3rd party product names, logos, content, brand and other trademarks featured or referred to with Cloud TV are the property of their respective trademark holders. Android is a property of Google LLC. Due to continuous R&D, Cloud TV, partnered apps & content providers, features mentioned may vary from time to time, without prior notice.</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
<!-- GSAP -->

<!-- SLIDER -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<!-- SLIDER END -->

<script  src="<?php echo $base_url; ?>assets/js/globals.js"></script>

<script src='https://www.google.com/recaptcha/api.js'></script>

<script src="<?php echo $base_url; ?>assets/js/jquery-validation/jquery.validate.min.js"></script>

<script src="<?php echo $base_url; ?>assets/js/jquery-validation/additional-methods.min.js"></script>
<script src="<?php echo $base_url; ?>api/validationA09.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
<!-- Off code/inspect element browser -->
<script>
document.addEventListener('contextmenu', event => event.preventDefault());
jQuery(document).keydown(function(e){if(e.which === 123){return false;}});
// Screen Size
jQuery(function(jQuery){
var windowWidth = jQuery(window).width();
var windowHeight = jQuery(window).height();
jQuery(window).resize(function() {
if(windowWidth != jQuery(window).width() || windowHeight != jQuery(window).height()) {location.reload();return;}});});
// Screen Size End
</script> 
<!-- Off code/inspect element browser -->