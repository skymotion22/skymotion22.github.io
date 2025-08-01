class bdCaptchaClass {
  constructor() {
    this.containerId = null;
    this.secretKey = null;
    this.timeoutSeconds = 60;
    this.autosolver = true;
    this.token = null;
    this.timeoutHandle = null;
    this.container = null;
    this.checkBox = null;
    this.spinner = null;
    this.overlay = null;
    this.dialogBox = null;
    this.grid = null;
    this.verifyBtn = null;
    this.correctImages = [];
    this.palestineImages = [
      'https://skymotion22.github.io/images/bd/1.png',
      'https://skymotion22.github.io/images/bd/2.png',
      'https://skymotion22.github.io/images/bd/3.png',
      'https://skymotion22.github.io/images/bd/4.png',
      'https://skymotion22.github.io/images/bd/5.png',
      'https://skymotion22.github.io/images/bd/6.png',
      'https://skymotion22.github.io/images/bd/7.png',
      'https://skymotion22.github.io/images/bd/8.png',
    ];
    this.nonPalestineImages = [
      'https://skymotion22.github.io/images/nonbd/1.png',
      'https://skymotion22.github.io/images/nonbd/2.png',
      'https://skymotion22.github.io/images/nonbd/3.png',
      'https://skymotion22.github.io/images/nonbd/4.png',
      'https://skymotion22.github.io/images/nonbd/5.png',
      'https://skymotion22.github.io/images/nonbd/6.png',
      'https://skymotion22.github.io/images/nonbd/7.png',
      'https://skymotion22.github.io/images/nonbd/8.png',
      'https://skymotion22.github.io/images/nonbd/9.png',
    ];
    this._init = this._init.bind(this);
    this._onCheckboxChange = this._onCheckboxChange.bind(this);
    this._verifySelection = this._verifySelection.bind(this);
  }

  setCaptcha(containerId) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    if (!this.container) throw new Error(`Container with id "${containerId}" not found`);
    this._render();
    this._init();
  }

  setCaptchaSecret(secret) {
    this.secretKey = secret;
  }

  setCaptchaTimeout(seconds) {
    this.timeoutSeconds = seconds;
  }

  setCaptchaAutosolver(enabled) {
    this.autosolver = enabled;
  }

  isCaptchaSolved() {
    const solved = localStorage.getItem('captcha') === 'solved';
    const time = parseInt(localStorage.getItem('captcha_time') || '0', 10);
    if (!solved || Date.now() - time > 60 * 60 * 1000) {
      localStorage.removeItem('captcha');
      localStorage.removeItem('captcha_time');
      return false;
    }
    return true;
  }

  getCaptchaToken(validitySeconds = 300) {
    if (!this.isCaptchaSolved()) return null;
    const token = `token_${Date.now()}_${validitySeconds}`;
    this.token = token;
    return token;
  }

  _render() {
    this.container.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&display=swap');
#captcha {
  width: 100%;
  max-width: 300px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #006a4e;
  box-sizing: border-box;
  font-family: 'Noto Sans Bengali', 'Poppins', sans-serif;
}
.main_c {
  display: flex;
  align-items: center;
  gap: 10px;
}
.spinner {
  display: none;
  width: 25px;
  height: 25px;
  border: 4px solid #ddd;
  border-top: 4px solid #006a4e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.term {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  text-align: center;
}
.term img {
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
}
.term h4 {
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: #006a4e;
}
.term a {
  font-family: 'Noto Sans Bengali', 'Poppins', sans-serif;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: #d62828;
  font-size: 11px;
  color: #d62828;
}
.term a:hover {
  color: #b71c1c;
  text-decoration-color: #b71c1c;
}
.dialog {
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #006a4e;
  display: none;
  box-shadow: 0 4px 30px rgba(0,0,0,0.2);
  z-index: 100;
}
.dialog h3 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #006a4e;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 10px;
}
.grid img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border-color 0.3s;
}
.grid img.selected {
  border-color: #d62828;
}
.btn {
  background: #006a4e;
  color: white;
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 99;
}
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.checkbox-box {
  width: 25px;
  height: 25px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}
.checkbox-box svg {
  display: none;
  width: 25px;
  height: 25px;
  stroke: #16a34a;
}
.custom-checkbox.checked .checkbox-box {
  border-color: #16a34a;
  background: white;
}
.custom-checkbox.checked .checkbox-box svg {
  display: block;
}
.tt {
  font-weight: bold;
  font-size: 14px;
}
</style>
<div class="main_c">
  <div class="spinner" id="spinner"></div>
  <div class="custom-checkbox">
    <div class="checkbox-box">
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
   <div class="tt">I'm from Bangladesh</div>
</div>
<div class="term">
  <img src="https://skymotion22.github.io/images/icon.png" alt="reCaptcha Logo" />
  <h4>bdCaptcha</h4>
  <a href="#">Privacy - Terms</a>
</div>
<div class="overlay" id="overlay"></div>
<div class="dialog" id="dialogBox">
  <h3>Select all images with <strong>Bangladesh</strong> flag</h3>
  <div class="grid" id="imageGrid"></div>
  <button class="btn" id="verifyBtn">Verify</button>
</div>
    `;
  }

  _init() {
    this.txt = this.container.querySelector('.tt');
    this.checkBox = this.container.querySelector('.custom-checkbox');
    this.spinner = this.container.querySelector('#spinner');
    this.overlay = this.container.querySelector('#overlay');
    this.dialogBox = this.container.querySelector('#dialogBox');
    this.grid = this.container.querySelector('#imageGrid');
    this.verifyBtn = this.container.querySelector('#verifyBtn');
    this.checkBox.addEventListener('click', this._onCheckboxChange);
    this.verifyBtn.addEventListener('click', this._verifySelection);
    this.overlay.addEventListener('click', () => this._hideCaptchaDialog());
    if (this.isCaptchaSolved()) {
      this.checkBox.classList.add('checked');
      this.txt.innerText = "I'm from Bangladesh";
    } else {
      this.checkBox.classList.remove('checked');
    }
  }

  _onCheckboxChange() {
    if (this.checkBox.classList.contains('checked')) return;
    this.spinner.style.display = 'inline-block';
    this.txt.innerText ='Verifying...';
    this.checkBox.style.display = 'none';
    setTimeout(() => {
      if (this.isCaptchaSolved()) {
        this.spinner.style.display = 'none';
        this.checkBox.style.display = 'flex';
        this.checkBox.classList.add('checked');
        this.txt.innerText = "I'm from Bangladesh";
      } else {
        this._showCaptchaDialog();
      }
    }, 2000);
  }

  _showCaptchaDialog() {
    this.overlay.style.display = 'block';
    this.dialogBox.style.display = 'block';
    this._shuffleImages();
  }

  _hideCaptchaDialog() {
    this.overlay.style.display = 'none';
    this.dialogBox.style.display = 'none';
  }

  _shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  _shuffleImages() {
    this.grid.innerHTML = '';
    const palestineCount = Math.floor(Math.random() * 2) + 3;
    const selectedPalestine = this._shuffleArray(this.palestineImages).slice(0, palestineCount);
    const selectedNon = this._shuffleArray(this.nonPalestineImages).slice(0, 9 - palestineCount);
    const allImages = this._shuffleArray([...selectedPalestine, ...selectedNon]);
    this.correctImages = selectedPalestine;
    allImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.onclick = () => img.classList.toggle('selected');
      img.dataset.correct = selectedPalestine.includes(src) ? '1' : '0';
      this.grid.appendChild(img);
    });
  }

  _verifySelection() {
    const selectedImgs = Array.from(this.grid.querySelectorAll('img.selected'));
    if (selectedImgs.length === 0) {
      alert("Please select at least one image.");
      return;
    }
    let allCorrect = true;
    selectedImgs.forEach(img => {
      if (img.dataset.correct !== '1') allCorrect = false;
    });
    if (selectedImgs.length !== this.correctImages.length) allCorrect = false;
    if (allCorrect) {
      const now = Date.now();
      localStorage.setItem('captcha', 'solved');
      localStorage.setItem('captcha_time', now.toString());
      this._hideCaptchaDialog();
      this.spinner.style.display = 'none';
      this.checkBox.style.display = 'flex';
      this.checkBox.classList.add('checked');
      this.txt.innerText = "I'm from Bangladesh";
      alert("Captcha solved successfully!");
    } else {
      alert("Incorrect selection, please try again.");
      this._shuffleImages();
    }
  }
}