# float-label
Angular Directive for floating the labels of input fields. Enhance the representation of form and UX.

I got inspired by the http://thecodeplayer.com/walkthrough/animating-float-labels-jquery-css3 and started to implement this as angular directive as well

<a href="http://plnkr.co/edit/ZQda12QJ0tpAnsJ7z33o?p=preview">Check out the demo on plnkr<a>

Float lables are cool and can be awesomely animated by breaking down the labels into individual characters and then playing around with it.

#Usage
Basic usage for required fields
```html 
<div class="form-group">
  <input float-label="Email Address"
		type = "text"
		name = "Inputemail"
		class = "form-control"
		ng-model = "loginForm.email" >
</div>
``` 
				
				
<b>Note:</b> Make sure to use CSS "position:relative" for the parent element like 'div' of the input field otherwise absolute labels CSS position wouldnt work accordingly. If you don't understand than see the plnkr added above.  				
