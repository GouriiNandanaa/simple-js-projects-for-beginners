const inputEl = document.querySelector("#input-el");
const checkBtn = document.querySelector("#check-btn");

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  return true;
};
window.addEventListener("")
checkBtn.addEventListener("click", function () {
  str = inputEl.value;
  if (isPalindrome(str)) alert("yes");
  else alert("no");
});


