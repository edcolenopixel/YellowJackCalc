'use strict';

let darkmodeState;

const Settings = {
	'MAIN_TABLE_WIDTH': 4,
	'COMBO_TABLE_WIDTH': 4,
	'DEFAULT_MAX_CAP': 10,
}

const Menu = {
	// Combo Items:
	"Combos": {
		header: true,
	},
	"Murdershake": {
		price: 300,
		noDiscount: true,
		emoji: '🍩',
		items: ["Murder Meal", "Fries", "Fries", "Rimjob", "Milkshake", "Heartstopper"],
		copypasta: '~o~ ~h~🍔MurderShake Meal🍩~n~~b~1 Mystery Burger, 2 Sides, 1 Milkshake, 1 Rimjob ~w~|~g~ $300',
	},
	"Murder Meal": {
		fileRenameException: true,
		price: 250,
		emoji: '🍔',
		noDiscount: true,
		items: ["Murder Meal", "Heartstopper", "Fries", "Soda"],
		copypasta: '~o~ ~h~🍔MurderMeal🍔~n~ ~b~1 Mystery Burger, 1 Side, 1 Drink ~w~|~g~ $250',
	},
	"Jackpot Meal": {
		fileRenameException: true,
		price: 700,
		emoji: '💰',
		items: ["Money Shot", "Lucky Rings", "Copium"],
		copypasta: '~o~ ~h~🍔JackPot Meal💰~n~ ~b~1 Money Shot, 1 Lucky Rings, 1 Copium ~w~|~g~ $700',
	},
	"Running Man": {
		price: 250,
		emoji: '🏃',
		items: ["Fries", "Fries", "Rimjob", "Rimjob", "Soda"],
		copypasta: '~y~~h~🏃‍♂️Running Man Combo🏃‍♂️ ~n~~b~2 Fries, 2 Rimjobs, 1 Soda ~w~|~g~ $250',
	},
	"MilkShake and Fries": {
		price: 200,
		emoji: '🍟',
		items: ["Fries", "Fries", "Milkshake", "Milkshake"],
		copypasta:  '~p~~h~🍟🍨MilkShake and Fries Combo🍨🍟~n~~b~2 Fries & 2 Milkshakes ~w~|~g~ $200',
	},
	"Lucky Fisherman": {
		price: 200,
		emoji: '⛵',
		items: ["Lucky Rings", "Lucky Rings", "Soda", "Soda"],
		copypasta:  '~p~~h~⛵🧅Lucky Fisherman Combo🧅⛵~n~~b~2 Lucky Rings & 2 Drinks ~w~|~g~ $200',
	},
	"Salty Seaman": {
		price: 200,
		emoji: '🧂',
		items: ["Fries", "Fries", "Soda", "Soda"],
		copypasta:  '~p~~h~⛵🧂Salty Seaman Combo🧂⛵~n~~b~2 Fries & 2 Drinks ~w~|~g~ $200',
	},
	"Stretchy De-stress": {
		price: 200,
		emoji: '🧀',
		items: ["Mozz sticks","Mozz sticks","Mozz sticks","Mozz sticks"],
		copypasta:  '~y~ ~h~ 🧀Stretchy De-stress🧠 ~n~~b~ 4 Mozzarella Sticks ~w~|~g~ $200 ~r~LIMITED',
	},
	"Sweet Tooth": {
		price: 162,
		emoji: '🦷',
		items: ["Milkshake", "Milkshake", "Cream Pie", "Cream Pie"],
		copypasta:  '~g~~h~🦷🍬Sweet Tooth Combo🍬🦷~n~~b~2 Milkshakes & 2 Cream Pies ~w~|~g~ $162',
	},
	"Sugar Rush": {
		price: 123,
		emoji: '🍬',
		items: ["Soda", "Cream Pie", "Rimjob"],
		copypasta:  '💨🍬Sugar Rush Combo💨🍬~n~~b~1 Soda, 1 Cream Pie, 1 Rimjob ~w~|~g~ $123',
	},
	"Morning Glory": {
		price: 150,
		emoji: '☀️',
		items: ["Oatmeal", "Bacon", "Milkshake"],
		copypasta:  '~g~~h~ 🌄 Morning Glory Combo 🌄~n~~b~1 Oatmeal, 1 Bacon, 1 OJ ~w~|~g~ $150 ~r~LIMITED',
	},
	// Burger Meals:
	"Burger Meals:": {
		header: true,
	},
	"Heartstopper Meal": {
		price: 175,
		items: ["Heartstopper", "Fries", "Soda"],
	},
	"Money Shot Meal": {
		price: 575,
		items: ["Money Shot", "Fries", "Soda"],
	},
	"Bleeder Meal": {
		price: 200,
		items: ["Bleeder", "Fries", "Soda"],
	},
	// Individual Items:
	"Burgers and Mains:": {
		header: true,
	},
	"Heartstopper": {
		price: 75,
		items: ["Heartstopper"],
	},
	"Money Shot": {
		price: 500,
		items: ["Money Shot"],
	},
	"KnuckleSandwich": {
		price: 150,
		items: ["KnuckleSandwich"],
	},
	"Chicken Wraps": {
		price: 150,
		items: ["Chicken Wraps"],
	},
	"Buttermilk Chicken": {
		price: 150,
		items: ["Buttermilk Chicken"],
	},
	"Bleeder": {
		price: 100,
		items: ["Bleeder"],
	},
	"Oatmeal": {
		price: 50,
		items: ["Oatmeal"],
	},
	"Drinks:": {
		header: true,
	},
	"Soda": {
		price: 45,
		items: ["Soda"]
	},
	"Milkshake": {
		price: 48,
		items: ["Milkshake"],
	},
	"Copium": {
		price: 100,
		items: ["Copium"],
	},
	"Orange Juice": {
	   	price: 45,
	   	max: 5,
	   	noDiscount: false,
	   	lastItem: false,
	   	items: ["Orange Juice"],
   	},
   	"Lemonade": {
	  	price: 45,
	 	max: 5,
	  	noDiscount: false,
	  	lastItem: false,
	  	items: ["Lemonade"],
  	},
	"Iced Tea": {
	  	price: 45,
	 	max: 5,
	  	items: ["Iced Tea"],
  	},
	"Sides:": {
		header: true,

	},
	"Fries": {
		price: 55,
		items: ["Fries"],
	},
  	"Lucky Rings": {
	  	price: 100,
	  	noDiscount: false,
	  	lastItem: false,
	  	items: ["Lucky Rings"],
	},
  	"Mozz Sticks": {
	  	price: 55,
	  	noDiscount: false,
	  	lastItem: false,
	  	items: ["Mozz sticks"],
 	
	},
	"Bacon": {
		price: 50,
		items: ["Bacon"],
	},
	 "Bloody Fingers": {
		price: 40,
		max: 5,
		noDiscount: false,
		lastItem: false,
		items: ["Bloody Fingers"],
	},
	"Salad": {
	   	price: 55,
	   	max: 5,
	   	noDiscount: false,
	   	lastItem: false,
	  	items: ["Salad"],
	},
	"Desserts(toys are no longer being sold indivdually):": {
		header: true,
  	},
	"Rimjob": {
		price: 45,
		items: ["Rimjob"],
	},
	"Cream Pie": {
		price: 33,
		items: ["Cream Pie"],
	},
	"Ice Cream": {
		price: 33,
		items: ["Ice Cream"],
	},
};
const INDIVIDUAL_ITEMS = [
	"Murder Meal", "Heartstopper", "Money Shot", "KnuckleSandwich", "Torpedo", "Bleeder", "Water", "Meat Free", "Chicken Wraps", "Buttermilk Chicken", 
	"Fries", "Soda", "Rimjob", "Cream Pie", "Milkshake", "Toy", "Bloody Fingers", "Salad", "Orange Juice", "Lemonade", "Lucky Rings", "Iced Tea", "Mozz sticks", "Copium", "Bacon", "Oatmeal", "Ice Cream"
];

const buttons = {
	"buffer": {
		html: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
	},
	"new_order": {
		html: '<div class="btn" onclick="newOrder();" title="Clear current order"><i class="fa fa-refresh" aria-hidden="true"></i> New Order</div>',
	},
	"set_combos": {
		html: '<div class="btn" onclick="toggleCombos()" title="Select current active combos"><i class="fa fa-cog" aria-hidden="true"></i> Combo Signs</div>',
	},
	"save": {
		html: '<div class="btn" onclick="updateSelected()" title="Save selected combos"><i class="fa fa-floppy-o" aria-hidden="true"></i> Back</div>',
	},
	"deselect_combos": {
		html: '<div class="btn" onclick="deselectCombos()" title="Deselect all combos"><i class="fa fa-times-circle-o" aria-hidden="true"></i> Deselect All</div>',
	}
};

const Signs = {
	"Menu Sign": {
		copypasta:  '~w~~h~🍔🍟 MENU/COMBOS🍟 🍔~w~~h~'
	},
	"Remove Mask/Helmet (Door)": {
		copypasta:  '~y~ ~h~❗ATTENTION❗~n~ ~r~ PLEASE REMOVE ALL MASKS/HELMETS/WEAPONS BEFORE ENTERING THE BUILDING~h~'
	},
	"Refuse Service": {
		copypasta:  '~y~~h~❗ATTENTION❗~n~~r~~h~ WE HAVE THE RIGHT TO REFUSE SERVICE TO ANYONE'
	},
	"Don't Do Murder": {
		copypasta:  '<font size=`45`><b> DON’T DO MURDER😈🔪 EAT A BURGER 🍔🍟'
	},
	"Private Property": {
		copypasta:  '<font size=`35`> ~r~<u>PRIVATE PROPERTY</u>~n~</font> ~o~DO NOT TOW VEHICLES HERE!'
	},
	"Drive-Thru Order Here": {
		copypasta:  '<font size=`35`>~w~~h~🍔🍟 ORDER HERE🍟 🍔~w~~h~'
	},
	"Drive-Thru Entrance": {
		copypasta:  '<font size=`45`><b>~g~~h~DRIVE THRU ENTRANCE'
	},
	"Drive-Thru Entrance": {
		copypasta:  '<font size=`45`><b>~g~~h~DRIVE THRU NOW OPEN'
	},
	"Radio": {
		copypasta:  '~r~BS Radio: ~g~'
	},
	"Employees Only": {
		copypasta:  '~r~~h~EMPLOYEES ONLY'
	},
	"Email Sign-in": {
		copypasta:  '~r~~h~Clock into the email'
	},
	"No Mask/Helmet (Counter)": {
		copypasta:  '~h~~r~👺NO MASKS OR HELMETS👺'
	},
	"Use Other Door": {
		copypasta:  '~h~ ~g~ NOT AN ENTRANCE/EXIT ~n~ ~r~ PLEASE USE OTHER DOOR'
	},
	"Main Entrance": {
		copypasta:  '~h~ ~g~ ENTRANCE/EXIT ~n~ ~r~ PLEASE USE THIS DOOR'
	},
	"No Pants Friday": {
		copypasta:  '~b~ ~h~❗NO PANTS FRIDAY❗'
	}
};

const discounts = {
	
	"half_off": {
		percent: .50,
		desc: '50% Discount (PD, EMS, BS Employees...)',
	},
	"five_percent": {
		percent: .05,
		desc: '5% Discount (<font color="red">LIMITED TIME</font>)',
	},
	"blackout": {
		percent: .15,
		desc: 'Blackout Sale (15% off)',
	},
};

function getOccurrence(array, value) {
	return array.filter((v) => (v === value)).length;
}

function formatItems(items) {
	let newArray = [];
	let imageIcons = '';

	INDIVIDUAL_ITEMS.forEach(item => {
		let occ = getOccurrence(items, item);
		let imageName = item.toLowerCase().replace(' ', '_');
		let imageIcon = `<img src="images/${imageName}.png" title="${occ}x ${item}" width="30" height="30"> `
		if (occ > 0) newArray.push(`- ${occ}x ${imageIcon}${item}`);
	});

	return newArray;
}

function add(item) {
	let elem = document.getElementById(`${item}-#`);
	if (!elem) return alert(`ERROR: ${item} is not available to add to the cart!`);
	let number = Number(elem.innerText);
	let max = Menu[item].max || Settings.DEFAULT_MAX_CAP;
	if (number + 1 <= max) {
		elem.innerText = number + 1;
		report();
	} else {
		alert(`You cannot add more than ${max}x ${item} in 1 order!`);
	}
}

function remove(item) {
	let elem = document.getElementById(`${item}-#`);
	if (!elem) return alert(`ERROR: ${item} is not available to remove to the cart!`);
	let number = Number(elem.innerText);
	if (number - 1 >= 0) {
		elem.innerText = Number(number) - 1;
		report();
	}
}

function set(item, quantity) {
	let elem = document.getElementById(`${item}-#`);
	if (!elem) return alert(`ERROR: ${item} is not available in the cart!`);
	if (isNaN(Number(quantity))) {
		return alert(`ERROR: ${quantity} is not a number!`);
	}
	quantity = Math.round(Number(quantity));
	let max = Menu[item].max || Settings.DEFAULT_MAX_CAP;
	if (max && quantity > max) {
		alert(`You cannot add more than ${max}x ${item} in 1 order!`);
		return;
	}
	elem.innerText = quantity;
	report();
}

function editQuantity(item) {
	let currentQuantity = 0;
	let elem = document.getElementById(`${item}-#`);
	if (elem) currentQuantity = elem.innerText;
	let quantity = prompt(`Enter quantity for ${item}:`, currentQuantity);
	if (!quantity) return set(item, 0);
	set(item, quantity);
}

function getEmptyOrder() {
	let buffer = [];
	buffer.push('<img src="images/bs-logo.svg" width="45%">');
	buffer.push("");
	buffer.push("<strong>ITEMS ORDERED:</strong>");
	buffer.push("");
	buffer.push("");
	buffer.push("");
	buffer.push(`<strong>SUBTOTAL:</strong> <span class="green">$0</span>`);
	document.getElementById('reportBody').innerHTML = buffer.join("\n");
}

function getDiscount() {
	let discountCount = 0;
	let activeDiscount = 0;
	Object.keys(discounts).forEach(discount => {
		let checkBox = document.getElementById(`${discount}-DISCOUNT`);
		if (checkBox && checkBox.checked) {
			discountCount++;
			activeDiscount = discounts[discount].percent;
		}
	});
	if (discountCount > 1) return false;
	if (discountCount == 1) return activeDiscount;
	return "NONE";
}

function report() {
	let buffer = [];
	buffer.push('<img src="images/bs-logo.svg" width="45%">');
	buffer.push("");
	let curDarkmode = document.getElementById('darkmode').checked;
	if (curDarkmode) {
		if (darkmodeState === 'false') updateDarkmode();
	} else if (!curDarkmode) {
		if (darkmodeState === 'true') updateDarkmode();
	}
	let total = 0;
	let allItems = [];
	if (selectingCombos) return;
	let discountSelected = getDiscount();
	if (!discountSelected) {
		alert("You cannot have more than one sale/discount at once!");
		clearDiscounts();
	}

	Object.keys(Menu).forEach(item => {
		if (Menu[item].header) return;
		let selected = true;
		if (Menu[item].emoji) selected = isSelected(item);

		if (!selected) return;
		let discount = (Menu[item].noDiscount ? false : true);
		let price = Menu[item].price;
		if (discountSelected && discountSelected !== 'NONE' && !Menu[item].noDiscount) {
			console.log(discountSelected);
			price = price - Math.round(price * discountSelected);
		}
		let quantity = 0;
		quantity = document.getElementById(`${item}-#`).innerText;

		let items = Menu[item].items;
		total += price * quantity;
		if (quantity) {
			let count = 0;
			while (count < quantity) {
				count++;
				allItems = allItems.concat(items);
			}
		}
	});
	buffer.push("<strong>ITEMS ORDERED:</strong>");
	let formatted = formatItems(allItems.sort());
	buffer.push(formatted.join('\n'));
	buffer.push("");
	buffer.push("");
	buffer.push(`<strong>SUBTOTAL:</strong> <span class="green">$${total}</span>`);

	return document.getElementById('reportBody').innerHTML = buffer.join("\n");
}

// Listen for a click on the checkbox
function updateDarkmode() {
	// Then toggle (add/remove) the .dark-theme class to the body
	let darkmode = document.getElementById('darkmode').checked;
	if (darkmode) {
		localStorage.setItem("darkmode", true);
		darkmodeState = 'true';
	} else if (!darkmode) {
		localStorage.setItem("darkmode", false);
		darkmodeState = 'false';
	}
	document.body.classList.toggle('dark-theme');
}

function isSelected(comboName) {
	return true;
}

let selectingCombos = false;
let pageReloaded = false;

function updateSelected() {
	if (!selectingCombos) return;
	Object.keys(Menu).forEach(item => {
		if (!Menu[item].header && Menu[item].emoji) {
			let checked = document.getElementById(`${item}-SELECTED`).checked;
			localStorage.setItem(`${item}-SELECTED`, checked);
		}
	});
	toggleCombos();
	pageReloaded = true;
	loadPage();
	newOrder();
}

function toggleCombos() {
	selectingCombos = !selectingCombos;
	if (selectingCombos) {
		let buffer = `<table border="0"><tr><td colspan="${Settings.COMBO_TABLE_WIDTH}"><center><i> Combo Scene CopyPastas </i></center></td></tr><tr>`;
		let count = 0;
		Object.keys(Menu).forEach(item => {
			if (Menu[item].header || !Menu[item].emoji) return;
			let checked = (isSelected(item) ? "checked" : "");
			let tr = '';
			count++;
			if (count == Settings.COMBO_TABLE_WIDTH) {
				tr = `</tr><tr>`;
				count = 0;
			}
			buffer += `<td><button class="btn" type="checkbox" id="${item}-SELECTED" name="${item}-SELECTED" onclick="copypasta('`+ Menu[item].copypasta+ `')" value="${item}-SELECTED"/>` +
				`${Menu[item].emoji} ${item}</button></td>${tr}`;
				
		});
		for (let i = count; i < Settings.COMBO_TABLE_WIDTH; i++) {
			buffer += `<td></td>`;
		}
		buffer += `<table border="0"><tr><td colspan="${Settings.COMBO_TABLE_WIDTH}"><center><i> Signs CopyPastas </i></center></td></tr><tr>`;
		count = 0;
		Object.keys(Signs).forEach(item => {
			let tr = '';
			count++;
			if (count == Settings.COMBO_TABLE_WIDTH) {
				tr = `</tr><tr>`;
				count = 0;
			}
			buffer += `<td><button class="btn" type="checkbox" id="${item}-SELECTED" name="${item}-SELECTED" onclick="copypasta('`+ Signs[item].copypasta+ `')" value="${item}-SELECTED"/>` +
				`${item}</button></td>${tr}`;
				
		});
		buffer += `<tr><td colspan="${Settings.COMBO_TABLE_WIDTH}"><center>${buttons['save'].html}<br /></center></td></tr>`;
		buffer += `</table>`;

		document.getElementById('table').innerHTML = buffer;
		document.getElementById('action-buttons').innerHTML = '';
	} else {
		document.getElementById('table').innerText = '';
	}
}


function copypasta(item) {
	var copyText = document.getElementById("copypasta");
	item = item.replaceAll('`', '"');
	copyText.value = item;
	console.log(copyText.value);
 	navigator.clipboard.writeText(item);
	//alert(`Copied!`);
}


function getIcon(item) {
	if (!Menu[item].fileRenameException) {
		item = item.replace('Meal', '').replace('Combo', '').trim();
		console.log("item = " + item);
	}
	if (!Menu[item]) return;
	let icon;
	if (Menu[item].emoji) {
		icon = Menu[item].emoji;
	} else {
		let fileName = `${item.toLowerCase().replace(' ', '_')}.png`;
		console.log("fileName = " + fileName);
		icon = `<img src="images/${fileName}" width="20" height="20">`;
	}
	return icon;
}

function clearDiscounts() {
	Object.keys(discounts).forEach(discount => {
		let checkBox = document.getElementById(`${discount}-DISCOUNT`);
		if (checkBox) checkBox.checked = false;
	});
}

function newOrder() {
	Object.keys(Menu).forEach(item => {
		if (Menu[item].header) return;
		let selected = isSelected(item);
		if (Menu[item].emoji && !selected) return;
		document.getElementById(`${item}-#`).innerText = 0;
	});
	pageReloaded = true;
	clearDiscounts();
	report();
}

function deselectCombos() {
	Object.keys(Menu).forEach(item => {
		if (!Menu[item].emoji) return;
		let checkBox = document.getElementById(`${item}-SELECTED`);
		if (checkBox) checkBox.checked = false;
	});
}

function loadPage() {
	if (!pageReloaded) {
		let darkmodeSetting = localStorage.getItem("darkmode");
		if (!darkmodeSetting || darkmodeSetting === 'undefined' || darkmodeSetting === 'false') {
			localStorage.setItem("darkmode", false);
			darkmodeState = 'false';
		}
		if (darkmodeSetting == 'true') {
			document.getElementById('darkmode').checked = true;
			document.body.classList.toggle('dark-theme');
			darkmodeState = 'true';
		}
	}
	let table = '<table><tr>';
	let count = 0;
	Object.keys(Menu).forEach(item => {
		if (Menu[item].header) {
			for (let i = count; i < Settings.MAIN_TABLE_WIDTH; i++) {
				table += `<td></td>`;
			}
			table += `</tr><tr><td colspan="${Settings.MAIN_TABLE_WIDTH}"><center><strong><u>${item}</u></strong></center></td></tr><tr>`;
			count = 0;
		} else {
			let icon = getIcon(item);
			let comboName = item;
			if (comboName.includes("Combo") || comboName.includes("Meal")) {
				if (comboName !== 'Murder Meal') {
					comboName = comboName.replace(" Combo", "").replace(" Meal", "");
				}
			}
			if (Menu[item].emoji) {
				if (!isSelected(item)) return;
			} else {
				let fileName = `${comboName.toLowerCase().replace(' ', '_')}.png`;
			}
			let qty = 0;
			if (pageReloaded && (Menu[item].emoji && isSelected(item))) {
				let element = document.getElementById(`${item}-#`);
				if (element) qty = document.getElementById(`${item}-#`).innerText;
			}

			table += "<td class=\"itemBtn\"><center><button class=\"btn\" title='Add 1x " + item + "' onClick='add(\"" + item + "\")'><strong>" + icon + item + "</strong></button><br />" +
				`Qty: <strong><span id="${item}-#">${qty}</span></strong> | $${Menu[item].price} | ` +
				"<i class=\"fa fa-pencilfa fa-pencil-square\" aria-hidden=\"true\" title='Manually edit " + item + " quantity' onClick='editQuantity(\"" + item + "\")'></i> " +
				"<i class=\"fa fa-minus-circle\" aria-hidden=\"true\" title='Remove 1x " + item + "' onClick='remove(\"" + item + "\")'></i></td>";
			count++;
			if (count == Settings.MAIN_TABLE_WIDTH) {
				table += `</tr><tr>`
				count = 0;
			}
			if (Menu[item].lastItem) {
				for (let i = count; i < Settings.MAIN_TABLE_WIDTH; i++) {
					table += `<td></td>`;
				}
			}
		}
	});

	table += `</tr><tr><td colspan="${Settings.MAIN_TABLE_WIDTH}">`
	Object.keys(discounts).forEach(discount => {
		table += `<input type="checkbox" id="${discount}-DISCOUNT" name="${discount}-DISCOUNT" value="${discount}-DISCOUNT" />` +
			`<label for="${discount}-DISCOUNT">${discounts[discount].desc}</label><br />`;
	});
	table += `</td></tr></table>`;

	document.getElementById('table').innerHTML = table;

	let activeButtons = `${buttons['buffer'].html}${buttons['new_order'].html}`;
	if (!selectingCombos) activeButtons += ` | ${buttons['set_combos'].html}`;
	document.getElementById('action-buttons').innerHTML = activeButtons;

	if (!pageReloaded) getEmptyOrder();

	let inputs = document.querySelectorAll('input[type="text"], input[type="number"], textarea');
	inputs.forEach(i => i.addEventListener('keyup', report, false));

	let checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
	checkboxes.forEach(i => i.addEventListener('click', report, false));
}
