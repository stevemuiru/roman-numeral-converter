const input = document.getElementById('number')
const button = document.getElementById('convert-btn')
const span = document.getElementById('output')


button.addEventListener('click', () => {
  if(input.value === "") {
    span.innerText = "Please enter a valid number";
  } else if(input.value < 0) {
    span.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    span.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const intToRoman = num => {
      const romanNums = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
      let result = ''
     
      romanNums.forEach(({ value, numeral }) => {
        while (num >= value) {
          result += numeral;
          num -= value;
        }
      });
      return result;
    };
    
     const num = parseInt(input.value, 10); 
    const result = intToRoman(num);
    span.innerText = `${result}`;
  }

  
})