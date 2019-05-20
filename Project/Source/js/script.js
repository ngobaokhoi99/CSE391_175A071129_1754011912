  $( document).ready(function()) {
    $( "#dialog" ).dialog({
    	autoOpen:false,
    	show:{
    		effect:"blind",
    		duration:1000
    	},
    	hide:{
    		effect:"explode",
    		duration:1000
    	},
    	modal:true,
    	buttons:{
    		"Đăng nhập": function(){
    			alert('Test đăng nhập');
    		},
    	}
    	    "Hủy": function(){
    	    	alert('Hủy đăng nhập'):
    	    }
    	}
};
