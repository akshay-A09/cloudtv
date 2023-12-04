<div id="contct_frm">
<div class="frm-txt"><h4>We’d be  happy to hear from you</h4></div>

	<form class="frm_cloudtv" id="frm_cloudtv" action="api/leadApi.php" enctype="multipart/form-data" method="POST">
		<div class="getintouch frm-ct">
			<input type="text" name="first_name" class="form-control" placeholder="First Name">
		</div>
		<div class="getintouch frm-ct">
			<input type="text" name="last_name" class="form-control" placeholder="Last Name">
		</div>
		<div class="getintouch frm-ct">
			<input type="text" name="email" class="form-control" placeholder="Enter Email">
		</div>
		<div class="getintouch frm-ct">
			<input type="text" name="mobile" class="form-control" placeholder="Enter Phone No.">
		</div>
		<div class="getintouch frm-ct frm-full">
		    <select id="contactrequirment" class="form-control" name="contactrequirment">
                <option value="customer_service">Customer Service</option>
                <option value="business_enquiry">Business Enquiry</option>
            </select>
		</div>
		<div class="getintouch frm-ct frm-full">
			<input type="text" name="company_name" class="form-control" placeholder="Company Name">
		</div>
		<div class="getintouch frm-ct frm-full">
			<textarea type="text" name="massage" class="form-control" placeholder="Message"></textarea>
		</div>
		<div class="getintouch frm-ct frm-full">
            <div class="g-recaptcha brochure__form__captcha" id="captcha_token" name="captcha_token" data-sitekey="6LejJ0wmAAAAAMH-8i_0vrxmn-0uRCLVYCiTUoYO"></div>
        </div>
		<div class="clearfix"></div>
		<div class="form_response"></div>
		<div class="sm-btn"><button id='submit' type="submit" class="btn09"><span> Submit</span></button></div>
		<div class="clearfix"></div>
	</form>
</div>
<div style="display:none;text-align:center;" id="thanks" class="thanks_msg">
	<h3>Thank you for reaching out to us.<br> Our representative will get in touch with you shortly. </h3>
</div>
