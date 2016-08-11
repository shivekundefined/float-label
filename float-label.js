
  
  angular.module('floatLabel',[]).directive('floatLabel',['$parse', function($parse){
		return{
			restrict:'EA',
			require:'^ngModel',
			link:function(scope, element, attrs, ctrl){
					var label = attrs.floatLabel; //get Label text to display
					var label_tpl = '<label class="floatLabel" >'+label+'</label>' ; //Label Template
					$(element).before(label_tpl);
					$(element).prev().each(function(){
						var sop = '<span class="ch">'; //span opening
						var scl = '</span>'; //span closing
						//split the label into single letters and inject span tags around them
						$(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
						//to prevent space-only spans from collapsing
						$(".ch:contains(' ')").html("&nbsp;");	
					});
					
					function animateLabels(obj){
						//calculate movement for .ch = half of input height
						var tm = $(obj).outerHeight()/2 *-1 + "px";
						//label = prev sibling of input
						//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
						$(obj).prev().addClass("focussed").children().stop(true).each(function(i){
							var d = i*50;//delay
							$(this).delay(d).animate({top: tm}, 200, 'easeOutBack');
						})
					}
					
					function animateLablelsToDefualt(obj)
					{
						//animate the label down if content of the input is empty
						if($(obj).val() == "")
						{
							$(obj).prev().removeClass("focussed").children().stop(true).each(function(i){
								var d = i*50;
								$(this).delay(d).animate({top: 0}, 500, 'easeInOutBack');
							})
						}
					}
					
					scope.$watch(attrs.ngModel, function(newVal, oldVal, scope) {
						if(newVal != undefined  && newVal != '')
							animateLabels(element);
					},true);
					
					$(element).focus(function() {
						animateLabels(this);
					});
					
					$(element).blur(function() {
						animateLablelsToDefualt(this);
					});
					
					//This has to be handled since on clicking the label input field should get focussed.
					$(element).prev("label.floatLabel").on('click',function(){
						$(this).next('input').focus();
						//animateLabels($(this).next('input'));	
					});
				},
			}
	}]);
  
