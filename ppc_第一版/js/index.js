// JavaScript Document
$(function()
{
	$(".select").click(function(){
		$(".xl").show();  
		});
	$(".xl span").click(function(){
		$(".xl").hide();
		$(".select").html($(this).html());
		$("#fenlei").val($(this).html());
	});
	/*len=$("#xxk0 span").length;
	$("#xxk0 span").each(function(i,value){
			$(this).click(function(){
			$("#xxk_cont"+i).show();
			num=len-1;
			if($(this).attr("id")=="xx0")
			{
				return false;	
			}
			if(i>0)
			{
				if(i==num)
				{
					    $("#xxk_cont"+i).prev().hide();
						$("#xxk_cont0").hide();
						if($("xx0").attr("id")=="xx0")
				    {
						alert($("xx0").attr("id"));
									$(this).prev().attr("id","xx2");
									$("xx0").attr("id","xx1");
				    }
						$("#xx0").attr("id","xx2"); 
						$("#xx1").attr("id","xx1"); 
				}else
				{
					               $("#xxk_cont"+i).next().hide();
									$("#xxk_cont"+i).prev().hide();
					if($(this).next().attr("id")=="xx0"|| $("this").prev().attr("id")=="xx0")
				    {
									$(this).prev().attr("id","xx1");
									$(this).next().attr("id","xx2");
				    }else
					{
						            $(this).prev().attr("id","xx1");
									$(this).next().attr("id","xx2");
				    }
				}
					
			}else
			{
				  $("#xxk_cont"+i).next().hide();
				  $("#xxk_cont"+num).hide();
				  if($(this).next().attr("id")=="xx0"|| $("#xx2").attr("id")=="xx0")
				  {
					 $(this).next().attr("id","xx1"); 
					 $("#xx2").attr("id","xx2"); 
				  }
		 	}
			$(this).attr("id","xx0")
		 });
	   });
    $("#job0 span").each(function(i){
			$(this).click(function(){
			$("#company_cont"+i).show(); 
			$num=$len-1;
						if(i>0)
							{
								if(i==$num)
								 {
								    $("#company_cont"+i).prev().hide();
									$("#company_cont0").hide();  
								 }else
								 {
									$("#company_cont"+i).next().hide();
									$("#company_cont"+i).prev().hide();
								 }
						 }else
						 {
							$("#company_cont"+i).next().hide();
							$("#company_cont"+$num).hide(); 
						 }
			});
	   });
	$("#job1 span").each(function(i){
			$(this).click(function(){
			$("#kb"+i).show(); 
			$num=$len-1;
						if(i>0)
							{
								if(i==$num)
								 {
								    $("#kb"+i).prev().hide();
									$("#kb0").hide();  
								 }else
								 {
									$("#kb"+i).next().hide();
									$("#kb"+i).prev().hide();
								 }
						 }else
						 {
							$("#kb"+i).next().hide();
							$("#kb"+$num).hide(); 
						 }
			});
	   });*/

});
	/*文字滚动插件*/
function AutoScroll(obj){
	$(obj).find("ul:first").animate({
	marginTop:"-24px"
	},500,function(){
	$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
	});
	}
	$(document).ready(function(){
	setInterval('AutoScroll("#hy")',3000)
});
	
/*选项卡*/
function change(j,idname,name)
{

 var num=$("#xxk0 span").length;
   var val=num-1;
   var dd=document.getElementById("dx_info").value;
  if(j>0)
 {
  	 if(j<val)
   		{
		   if(dd>j)
		   {
		      document.getElementById(idname+dd).className="xx"+eval(j+1);
			}else
		   {
				add(j,idname);
		   }
		   
	   }else
	   {
	    	add(j,idname);
	   }
	   document.getElementById(idname+j).className="xx0";

   }else
   {
     for(var i=0;i<num;i++){
		 document.getElementById(idname+i).className="xx"+i;
	 }
   }
   document.getElementById("dx_info").value=j;
   for(i=0;i<num;i++)
   {

   	  document.getElementById(name+i).style.display="none";
	if(j==i)
	{
	   document.getElementById(name+j).style.display="block";
	}
   }
}
function add(j,idname)
{
	for(var i=j;i>0;i--){
				  document.getElementById(idname+eval(i-1)).className="xx"+i;
	}
	document.getElementById(idname+j).className="xx0";
}