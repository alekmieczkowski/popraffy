
//collect id from clicked menu item
$('img').click(function(){
   set_active(this.id);
});

//set correct selecting on menu items
function set_active(new_active_id){

	//get class for home-icon
	var home = document.getElementById('home-icon');
	//get class for my-story
	var story = document.getElementById('my-story');
	//get class for soundcloud
	var soundcloud = document.getElementById('soundcloud');
	//get class for store
	var store = document.getElementById('store');

	//if element has already been selected
	if(document.getElementById(new_active_id).classList.contains("active")){

	}
	else{
		//set settings if not already selected
		switch(new_active_id){
			case 'home-icon':
				add_active(home);
				remove_active(story);
				remove_active(soundcloud);
				remove_active(store);
				break;
			case 'my-story':
				add_active(story);
				remove_active(home);
				remove_active(soundcloud);
				remove_active(store);
				break;
			case 'soundcloud':
				add_active(soundcloud);
				remove_active(story);
				remove_active(home);
				remove_active(store);
				break;
			case 'store':
				add_active(store);
				remove_active(story);
				remove_active(soundcloud);
				remove_active(home);
				break;
			default:
				add_active(home);
		}
	}
}

//add active class
function add_active(item){
	item.classList.add("active");
}

//remove active class
function remove_active(item){
	if(item.classList.contains("active"))
	{
		item.classList.remove("active");
	}
}