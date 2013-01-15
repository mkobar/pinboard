
function load(){
		var content = "";
		var master = "#pinterest";
		for(var i=1;i<9;i++){
			content += "<div class='item'>";
				if(i%3==0)
					content += "<img style='width:250px;height:350px;' src='../assets/img/triplepulse/stacks1.png'>";
				else if(i%2==0)
					content += "<img style='width:350px;height:250px;' src='../assets/img/triplepulse/stacks1.png'>";
				else
					content += "<img style='width:250px;height:250px;' src='../assets/img/triplepulse/stacks2.png'>";
			content += "</div>";
		}
		$(master).empty().append(content);

		$(master).masonry(
			{
  				itemSelector: '.item',
  				columnWidth: 10
			}
		);

		/*
		<div class='item'>
            Formula by the pros
            <p>
              <img src='../assets/img/triplepulse/stacks1.png'>
            </p>
        </div>
        <div class='item'>
            Formula by the pros
            <p>
              <img src='../assets/img/triplepulse/stacks1.png'>
            </p>
        </div>
        <div class='item'>
            Formula by the pros
            <p>
              <img src='../assets/img/triplepulse/stacks1.png'>
            </p>
        </div>
		*/
}

