function valid_datas( f ){
	
	if( f.name.value == '' ){
		jQuery('#form_status').html('<span class="wrong">¡Tu nombre no debe estar vacío!</span>');
		notice( f.name );
	}else if( f.email.value == '' ){
		jQuery('#form_status').html('<span class="wrong">¡Su correo electrónico no debe estar vacío y con el formato correcto!</span>');
		notice( f.email );
	//}else if( f.phone.value == '' ){
		//jQuery('#form_status').html('<span class="wrong">Your phone must not be empty and correct format!</span>');
		//notice( f.phone );
	}else if( f.subject.value == '' ){
		jQuery('#form_status').html('<span class="wrong">¡Tu asunto no debe estar vacío!</span>');
		notice( f.subject );
	}else if( f.message.value == '' ){
		jQuery('#form_status').html('<span class="wrong">¡Tu mensaje no debe estar vacío!</span>');
		notice( f.message );
	}else{
			
		jQuery('#form_status').html('<span class="success">Mensaje enviado.</span>');
		jQuery('#fruitkha-contact').animate({opacity:0.3});
		jQuery('#fruitkha-contact').find('input,textarea,button').css('border','none').attr({'disabled':''});
	}
	
	return false;
}

function notice( f ){
	jQuery('#fruitkha-contact').find('input,textarea').css('border','none');
	f.style.border = '1px solid red';
	f.focus();
}