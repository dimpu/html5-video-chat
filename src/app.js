var firebase = require("firebase/app");


var app = {
	init:function(){
		$("#chat").hide();
		// this.showChat();
		this.events.onInitBtnClick();
		this.events.onJoinBtnClick();
	},
	showChat:function(){
		$("#chat").show("slow");
		this.hideBtns();
		console.log(window.location.hash);
		// if(window.location.hash === "#init"){
		// 	$("#ohterid-group").hide();
		// 	$("#myid-group").show();
		// }else{
		// 	$("#ohterid-group").show();
		// 	$("#myid-group").hide();
		// }
	},
	joinChat:function(){
		$(".loader").hide();
	},
	initChat:function(){

	},
	hideBtns:function(){
		$("#init").hide("slow");
	},
	events:{
		onInitBtnClick:function(){
			$("#init-btn").on('click',function(){
				app.hideBtns();
				app.showChat();
			});
		},
		onJoinBtnClick:function(){
			$("#join-btn").on('click',function(){
				app.hideBtns();
				app.showChat();
				app.joinChat();
			});
		}
	}
};
app.init();