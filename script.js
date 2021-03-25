console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Hello world !");
	window.mykeypad = new Keypad();

});

class Keypad {

	constructor() {
		this.soluce = "9 9 8 3";
		this.keyBoard = document.querySelectorAll("button");
		this.allKeyBoard = document.querySelectorAll("button.btn");
		this.digits = document.querySelector('.digits');
		this.checkBtn = document.querySelector("#check");
		this.clearBtn = document.querySelector("#Clear");
		this.trial = 3;
		this.inputCode = document.querySelector("#code");

		for (let i = 0; i < this.keyBoard.length; i++) {
			this.keyBoard[i].addEventListener('click', () => {
				this.addCode(this.keyBoard[i]);
			});
		}

		this.checkBtn.addEventListener('click', () => {
			this.compare();
		});

		this.clearBtn.addEventListener('click', () => {
			this.delete();
		});

	}

	// 1. OnKeyPress :
	addCode(btn) {
		this.digits.textContent = this.digits.textContent.replace("_", btn.innerText);
		console.log(this.digits.textContent);
	}

	//2.Comparison on check
	compare() {
		if (this.digits.textContent == this.soluce) {
			this.digits.textContent = "ACCESS GRANTED";
			console.log(this.digits.textContent);
			this.digits.style.color = 'rgba(12, 242, 77)';
			return true;
		} else {
			this.trial--;
			this.digits.textContent = "WRONG CODE";
			this.digits.style.color = 'orange';
			console.log(this.trial);
			console.log(this.digits.textContent);

			if (this.trial === 0) {
				this.digits.textContent = "ACCESS DENIED";
				this.digits.style.color = 'red';
				console.log(this.digits.textContent);

				for (let t = 0; t < this.allKeyBoard.length; t++) {
					this.allKeyBoard[t].setAttribute("disabled", "");
					this.allKeyBoard[t].style.color = 'red';
				}
			}
		}
		return false;
	}

	//3. Delete on clear :
	delete() {
		this.digits.textContent = "_ _ _ _";
		this.digits.style.color = "rgba(53, 255, 255)";
	}

}