//function doalert(checkboxElem) {
//  if (checkboxElem.checked) {
//    alert ("hi");
//  } else {
//    alert ("bye");
//  }
//}

function addDiscount() {
    document.getElementById('conditional_part').style.display = 'block';
	if (document.getElementById('reward').checked) {
        document.getElementById('flipcoin').style.display = 'block';

    } else {
        document.getElementById('flipcoin').style.display = 'none';
    }
}